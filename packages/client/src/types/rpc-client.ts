import { SigningStargateClientOptions } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';

export interface DefaultConnectionOptions {
  type: 'tendermint';
  endpoints: string[];
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
