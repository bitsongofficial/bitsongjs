// Types
export type {
  ChainConfig,
  ChainPreset,
  SignerType,
  CreateRpcClientOptions,
  CreateSigningClientOptions,
  CreateEventClientOptions,
  CreateClientOptions,
  OfflineSignerLike,
  OfflineSigner,
  EndpointOrRpc,
  BitsongSigner,
  ISigningClient,
  ICosmosSigner,
  CosmosSignArgs,
  CosmosSignedTransaction,
  CosmosBroadcastOptions,
  CosmosBroadcastResponse,
  CosmosMessage,
  ICosmosQueryClient,
  ICosmosEventClient,
  StdFee,
  HttpEndpoint,
  DeliverTxResponse,
} from "./types";

// Chain presets
export {
  bitsongMainnet,
  bitsongTestnet,
  bitsongLocal,
  registerChain,
  resolveChain,
} from "./chains";

// Error handling
export {
  CosmosErrorCode,
  TxError,
  isTxError,
  assertTxSuccess,
} from "./errors";

// Gas utilities
export {
  calculateFee,
  estimateGas,
  estimateFee,
} from "./gas";

// Client factories
export { createRpcClient } from "./rpc";
export { createSigningClient } from "./signer";
export type { SigningClientResult } from "./signer";
export { createEventClient } from "./events";

// Module namespaces
export {
  bankQuery, bankTx,
  stakingQuery, stakingTx,
  distributionQuery, distributionTx,
  govQuery, govTx,
  authQuery,
  authzQuery, authzTx,
  feegrantQuery, feegrantTx,
  slashingQuery, slashingTx,
  mintQuery,
  upgradeQuery, upgradeTx,
  groupQuery, groupTx,
  vestingTx,
  fantokenQuery, fantokenTx,
  cadenceQuery, cadenceTx,
  wasmQuery, wasmTx,
  ibcTransferQuery, ibcTransferTx,
  hyperlaneQuery, hyperlaneTx,
} from "./modules";

// Convenience client
export { createClient } from "./client";
export type { BitsongClient, BitsongSigningClient } from "./client";
