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
import { setupTxExtension, TxClient } from './tx';
import { BitsongClientOptions, SigningConnectionOptions } from './types';

/**
 * The main entry point for interacting with the BitSong Blockchain. The class needs
 * a client connection
 */
export class BitsongClient {
  readonly queryClient: ProtobufRpcClient;
  readonly txClient?: TxClient;

  constructor(queryClient: ProtobufRpcClient, txClient?: TxClient) {
    this.queryClient = queryClient;
    this.txClient = txClient;
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
        const rpcClient = createProtobufRpcClient(queryClient);

        if (connection.signer) {
          const txClient = await setupTxExtension(
            connection as SigningConnectionOptions,
          );

          return new BitsongClient(rpcClient, txClient);
        }

        return new BitsongClient(rpcClient);
    }
  }
}
