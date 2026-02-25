import { buildQuery } from "../../../../helper-func-types";
import { QueryIgpsRequest, QueryIgpsResponse, QueryIgpRequest, QueryIgpResponse, QueryDestinationGasConfigsRequest, QueryDestinationGasConfigsResponse, QueryQuoteGasPaymentRequest, QueryQuoteGasPaymentResponse, QueryMerkleTreeHooksRequest, QueryMerkleTreeHooksResponse, QueryMerkleTreeHookRequest, QueryMerkleTreeHookResponse, QueryNoopHooksRequest, QueryNoopHooksResponse, QueryNoopHookRequest, QueryNoopHookResponse } from "./query";
/**
 * Igps ...
 * @name getIgps
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.Igps
 */
export const getIgps = buildQuery<QueryIgpsRequest, QueryIgpsResponse>({
  encode: QueryIgpsRequest.encode,
  decode: QueryIgpsResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "Igps",
  deps: [QueryIgpsRequest, QueryIgpsResponse]
});
/**
 * Igp ...
 * @name getIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.Igp
 */
export const getIgp = buildQuery<QueryIgpRequest, QueryIgpResponse>({
  encode: QueryIgpRequest.encode,
  decode: QueryIgpResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "Igp",
  deps: [QueryIgpRequest, QueryIgpResponse]
});
/**
 * DestinationGasConfigs ...
 * @name getDestinationGasConfigs
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.DestinationGasConfigs
 */
export const getDestinationGasConfigs = buildQuery<QueryDestinationGasConfigsRequest, QueryDestinationGasConfigsResponse>({
  encode: QueryDestinationGasConfigsRequest.encode,
  decode: QueryDestinationGasConfigsResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "DestinationGasConfigs",
  deps: [QueryDestinationGasConfigsRequest, QueryDestinationGasConfigsResponse]
});
/**
 * QuoteGasPayment ...
 * @name getQuoteGasPayment
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.QuoteGasPayment
 */
export const getQuoteGasPayment = buildQuery<QueryQuoteGasPaymentRequest, QueryQuoteGasPaymentResponse>({
  encode: QueryQuoteGasPaymentRequest.encode,
  decode: QueryQuoteGasPaymentResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "QuoteGasPayment",
  deps: [QueryQuoteGasPaymentRequest, QueryQuoteGasPaymentResponse]
});
/**
 * MerkleTreeHooks ...
 * @name getMerkleTreeHooks
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.MerkleTreeHooks
 */
export const getMerkleTreeHooks = buildQuery<QueryMerkleTreeHooksRequest, QueryMerkleTreeHooksResponse>({
  encode: QueryMerkleTreeHooksRequest.encode,
  decode: QueryMerkleTreeHooksResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "MerkleTreeHooks",
  deps: [QueryMerkleTreeHooksRequest, QueryMerkleTreeHooksResponse]
});
/**
 * MerkleTreeHook ...
 * @name getMerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.MerkleTreeHook
 */
export const getMerkleTreeHook = buildQuery<QueryMerkleTreeHookRequest, QueryMerkleTreeHookResponse>({
  encode: QueryMerkleTreeHookRequest.encode,
  decode: QueryMerkleTreeHookResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "MerkleTreeHook",
  deps: [QueryMerkleTreeHookRequest, QueryMerkleTreeHookResponse]
});
/**
 * NoopHooks ...
 * @name getNoopHooks
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.NoopHooks
 */
export const getNoopHooks = buildQuery<QueryNoopHooksRequest, QueryNoopHooksResponse>({
  encode: QueryNoopHooksRequest.encode,
  decode: QueryNoopHooksResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "NoopHooks",
  deps: [QueryNoopHooksRequest, QueryNoopHooksResponse]
});
/**
 * NoopHook ...
 * @name getNoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.NoopHook
 */
export const getNoopHook = buildQuery<QueryNoopHookRequest, QueryNoopHookResponse>({
  encode: QueryNoopHookRequest.encode,
  decode: QueryNoopHookResponse.decode,
  service: "hyperlane.core.post_dispatch.v1.Query",
  method: "NoopHook",
  deps: [QueryNoopHookRequest, QueryNoopHookResponse]
});