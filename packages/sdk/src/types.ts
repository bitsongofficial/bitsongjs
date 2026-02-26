export type {
  EndpointOrRpc,
  StdFee,
} from "@bitsongjs/telescope";

export type { ISigningClient } from "@interchainjs/cosmos";
export type { HttpEndpoint, DeliverTxResponse } from "@interchainjs/types";

import type { OfflineSigner } from "@interchainjs/cosmos/signers/types";
export type { OfflineSigner };

export type { ICosmosQueryClient } from "@interchainjs/cosmos";
export type { ICosmosEventClient } from "@interchainjs/cosmos";

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

export interface CreateClientOptions {
  chain?: string | ChainConfig;
  signer?: string | OfflineSignerLike;
  signerType?: SignerType;
  gasPrice?: string;
  modules?: {
    query?: Record<string, (rpc: import("@interchainjs/cosmos").ICosmosQueryClient) => Record<string, (...args: any[]) => any>>;
    tx?: Record<string, (client: import("@interchainjs/cosmos").ISigningClient, address: string) => Record<string, (...args: any[]) => any>>;
  };
}

export type OfflineSignerLike = OfflineSigner;
