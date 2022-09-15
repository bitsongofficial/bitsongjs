import {
  createProtobufRpcClient,
  QueryClient,
  ProtobufRpcClient,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  BehaviorSubject,
  from,
  lastValueFrom,
  of,
  retry,
  switchMap,
  tap,
} from 'rxjs';
import { setupTxExtension, TxClient, createBitsongProtobufRpcClient } from './tx';
import { BitsongClientOptions, SigningConnectionOptions } from './types';

/**
 * The main entry point for interacting with the BitSong Blockchain. The class needs
 * a client connection
 */
export class BitsongClient {
  private _queryClient: ProtobufRpcClient;
  private _tendermintQueryClient: QueryClient;
  private _txClient?: TxClient;

  public get queryClient() {
    return this._queryClient;
  }

  public get tendermintQueryClient() {
    return this._tendermintQueryClient;
  }

  public get txClient() {
    return this._txClient;
  }

  constructor(queryClient: ProtobufRpcClient, tendermintQueryClient: QueryClient, txClient?: TxClient) {
    this._queryClient = queryClient;
    this._tendermintQueryClient = tendermintQueryClient;
    this._txClient = txClient;
  }

  /*
    Currently it is a workaround, it would be ideal to move this logic into the requests made with the tendermint client
  */
  public setQueryHeight(desiredHeight?: number) {
    this._queryClient = createBitsongProtobufRpcClient(this._tendermintQueryClient, desiredHeight);
  }

  /**
   * Create a BitsongClient object which connects to the given gRPC connection.
   *
   * @param options - Options to pass into BitsongClient.
   */
  public static async connect(
    options: BitsongClientOptions,
  ): Promise<BitsongClient> {
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

          return new BitsongClient(rpcClient, queryClient, txClient);
        }

        return new BitsongClient(rpcClient, queryClient);
    }
  }
}
