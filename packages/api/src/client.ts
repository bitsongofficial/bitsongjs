import {
  createProtobufRpcClient,
  QueryClient,
  ProtobufRpcClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

import { OfflineSigner } from '@cosmjs/proto-signing';
import { setupTxExtension, TxClient } from './tx';

interface DefaultConnectionOptions {
  type: 'tendermint';
  endpoint: string;
  clientOptions?: SigningStargateClientOptions;
}

export interface ConnectionOptions extends DefaultConnectionOptions {
  signer?: OfflineSigner;
}

export interface SigningConnectionOptions extends DefaultConnectionOptions {
  signer: OfflineSigner;
}

/**
 * Options to pass into the BitsongClient constructor.
 */
export interface BitsongClientOptions {
  connection: ConnectionOptions;
}

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
    const { connection } = options;
    switch (connection.type) {
      case 'tendermint': {
        // The Tendermint client knows how to talk to the Tendermint RPC endpoint
        const tendermintClient = await Tendermint34Client.connect(
          connection.endpoint,
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
}
