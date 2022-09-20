import { QueryClient, ProtobufRpcClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  AsyncSubject,
  BehaviorSubject,
  from,
  lastValueFrom,
  Observable,
  of,
  retry,
  switchMap,
  tap,
} from 'rxjs';
import {
  setupTxExtension,
  TxClient,
  createBitsongProtobufRpcClient,
} from './tx';
import {
  BitsongClientOptions,
  SigningConnectionOptions,
  InstanceTypeMap,
  QueryRpcClient,
} from './types';

/**
 * The main entry point for interacting with the BitSong Blockchain. The class needs
 * a client connection
 */
export class BitsongClient<T extends object> {
  private _queryClient!: ProtobufRpcClient;
  private _tendermintQueryClient!: QueryClient;
  private _tendermintClient!: Tendermint34Client
  private _txClient?: TxClient;
  private _modules!: Record<string, QueryRpcClient>;
  private _clientOptions!: BitsongClientOptions;
  private _query!: Observable<InstanceTypeMap<T>>;
  private _connectionSubject = new AsyncSubject<boolean>();

  public get modules() {
    return this._modules;
  }

  public get clientOptions() {
    return this._clientOptions;
  }

  public get query() {
    return this._query;
  }

  public get queryClient() {
    return this._queryClient;
  }

  public get tendermintQueryClient() {
    return this._tendermintQueryClient;
  }

  public get txClient() {
    return this._txClient;
  }

  constructor(
    options: BitsongClientOptions,
    modules: Record<string, QueryRpcClient>,
  ) {
    this.connect(options, modules);

    this.initModules();
  }

  /*
    Currently it is a workaround, it would be ideal to move this logic into the requests made with the tendermint client
  */
  public setQueryHeight(desiredHeight?: number) {
    this._queryClient = createBitsongProtobufRpcClient(
      this._tendermintQueryClient,
      desiredHeight,
    );

    this.initModules();
  }

  private initModules() {
    this._query = this._connectionSubject.asObservable().pipe(
      switchMap(() => {
        const queryClients: any = {};

        for (const moduleName in this._modules) {
          const queryClientInstance = new this._modules[moduleName](
            this._queryClient,
          );

          queryClients[moduleName] = queryClientInstance as unknown;
        }

        return of(queryClients);
      })
    );
  }

  public async reconnect(options: BitsongClientOptions, modules: Record<string, QueryRpcClient>) {
    this.disconnect();
    this._connectionSubject = new AsyncSubject<boolean>();
    this.connect(options, modules);
    this.initModules();
  }

  public disconnect() {
    if (this._tendermintClient) {
      this._tendermintClient.disconnect();
    }

    if (this._txClient) {
      this._txClient.signingClient.disconnect();
    }
  }

  /**
   * Create a BitsongClient object which connects to the given gRPC connection.
   *
   * @param options - Options to pass into BitsongClient.
   */
  private async connect(
    options: BitsongClientOptions,
    modules: Record<string, QueryRpcClient>,
  ) {
    this._modules = modules;
    this._clientOptions = options;
    const connectionRetry = new BehaviorSubject<number>(0);

    const { connection } = options;

    switch (connection.type) {
      case 'tendermint':
        /*
          The Tendermint client knows how to talk to the Tendermint RPC endpoint

          We use rxjs utils to try different endpoints, until we get a connection
        */
        const tendermintClient = await lastValueFrom(
          connectionRetry.pipe(
            switchMap(attempt => {
              return from(
                Tendermint34Client.connect(connection.endpoints[attempt]),
              ).pipe(
                tap(() => {
                  connectionRetry.complete();
                }),
              );
            }),
            retry({
              count: connection.endpoints.length,
              delay: (_, retryCount) => {
                connectionRetry.next(retryCount);

                return of(retryCount);
              },
              resetOnSuccess: true,
            }),
          ),
        );

        // The generic Stargate query client knows how to use the Tendermint client to submit unverified ABCI queries
        const queryClient = new QueryClient(tendermintClient);

        // This helper function wraps the generic Stargate query client for use by the specific generated query client
        const rpcClient = createBitsongProtobufRpcClient(queryClient);

        if (connection.signer) {
          const txClient = await setupTxExtension(
            connection as SigningConnectionOptions,
          );

          this._txClient = txClient;
        }

        this._queryClient = rpcClient;
        this._tendermintQueryClient = queryClient;

        this._connectionSubject.next(true);
        this._connectionSubject.complete();
    }
  }
}
