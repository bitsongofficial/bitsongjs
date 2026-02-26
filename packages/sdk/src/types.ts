export type {
  EndpointOrRpc,
  StdFee,
} from "@bitsongjs/telescope";

import type { ISigningClient as _ISigningClient } from "@interchainjs/cosmos";
import type { ICosmosSigner as _ICosmosSigner } from "@interchainjs/cosmos";

export type ISigningClient = _ISigningClient;
export type ICosmosSigner = _ICosmosSigner;

export type {
  CosmosSignArgs,
  CosmosSignedTransaction,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse,
  CosmosMessage,
} from "@interchainjs/cosmos";
export type { HttpEndpoint, DeliverTxResponse } from "@interchainjs/types";

import type { OfflineSigner } from "@interchainjs/cosmos/signers/types";
export type { OfflineSigner };

export type { ICosmosQueryClient } from "@interchainjs/cosmos";
export type { ICosmosEventClient } from "@interchainjs/cosmos";

/**
 * Combined signer type representing the actual runtime objects
 * (DirectSigner / AminoSigner via BaseCosmosSigner).
 *
 * Exposes both the ICosmosSigner interface (sign, broadcast, signArbitrary)
 * and the ISigningClient interface (signAndBroadcast with positional args)
 * that telescope-generated module functions expect.
 */
export type BitsongSigner = _ICosmosSigner & _ISigningClient;

export interface ChainConfig {
  chainId: string;
  prefix: string;
  denom: string;
  gasPrice: string;
  coinType: number;
  hdPath: string;
  endpoints: {
    rpc: string;
    rest?: string;
    ws?: string;
  };
}

export type SignerType = "direct" | "amino";

export interface CreateRpcClientOptions {
  endpoint: string | import("@interchainjs/types").HttpEndpoint;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface CreateSigningClientOptions {
  endpoint: string | import("@interchainjs/types").HttpEndpoint;
  signer: string | OfflineSignerLike;
  type?: SignerType;
  prefix?: string;
  hdPath?: string;
  gasPrice?: string;
}

export interface CreateEventClientOptions {
  endpoint: string;
  reconnect?: {
    maxRetries?: number;
    retryDelay?: number;
    exponentialBackoff?: boolean;
  };
}

export type ChainPreset = "mainnet" | "testnet" | "localnet";

export interface CreateClientOptions {
  chain?: ChainPreset | (string & {}) | ChainConfig;
  signer?: string | OfflineSignerLike;
  signerType?: SignerType;
  gasPrice?: string;
  modules?: {
    query?: Record<string, (rpc: import("@interchainjs/cosmos").ICosmosQueryClient) => Record<string, (...args: any[]) => any>>;
    tx?: Record<string, (client: BitsongSigner, address: string) => Record<string, (...args: any[]) => any>>;
  };
}

export type OfflineSignerLike = OfflineSigner;
