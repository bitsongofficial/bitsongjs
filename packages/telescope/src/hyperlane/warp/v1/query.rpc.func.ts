import { buildQuery } from "../../../helper-func-types";
import { QueryTokensRequest, QueryTokensResponse, QueryTokenRequest, QueryTokenResponse, QueryBridgedSupplyRequest, QueryBridgedSupplyResponse, QueryRemoteRoutersRequest, QueryRemoteRoutersResponse, QueryQuoteRemoteTransferRequest, QueryQuoteRemoteTransferResponse } from "./query";
/**
 * Tokens ...
 * @name getTokens
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.Tokens
 */
export const getTokens = buildQuery<QueryTokensRequest, QueryTokensResponse>({
  encode: QueryTokensRequest.encode,
  decode: QueryTokensResponse.decode,
  service: "hyperlane.warp.v1.Query",
  method: "Tokens",
  deps: [QueryTokensRequest, QueryTokensResponse]
});
/**
 * Token ...
 * @name getToken
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.Token
 */
export const getToken = buildQuery<QueryTokenRequest, QueryTokenResponse>({
  encode: QueryTokenRequest.encode,
  decode: QueryTokenResponse.decode,
  service: "hyperlane.warp.v1.Query",
  method: "Token",
  deps: [QueryTokenRequest, QueryTokenResponse]
});
/**
 * BridgedSupply ...
 * @name getBridgedSupply
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.BridgedSupply
 */
export const getBridgedSupply = buildQuery<QueryBridgedSupplyRequest, QueryBridgedSupplyResponse>({
  encode: QueryBridgedSupplyRequest.encode,
  decode: QueryBridgedSupplyResponse.decode,
  service: "hyperlane.warp.v1.Query",
  method: "BridgedSupply",
  deps: [QueryBridgedSupplyRequest, QueryBridgedSupplyResponse]
});
/**
 * RemoteRouters ...
 * @name getRemoteRouters
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.RemoteRouters
 */
export const getRemoteRouters = buildQuery<QueryRemoteRoutersRequest, QueryRemoteRoutersResponse>({
  encode: QueryRemoteRoutersRequest.encode,
  decode: QueryRemoteRoutersResponse.decode,
  service: "hyperlane.warp.v1.Query",
  method: "RemoteRouters",
  deps: [QueryRemoteRoutersRequest, QueryRemoteRoutersResponse]
});
/**
 * QuoteRemoteTransfer ...
 * @name getQuoteRemoteTransfer
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.QuoteRemoteTransfer
 */
export const getQuoteRemoteTransfer = buildQuery<QueryQuoteRemoteTransferRequest, QueryQuoteRemoteTransferResponse>({
  encode: QueryQuoteRemoteTransferRequest.encode,
  decode: QueryQuoteRemoteTransferResponse.decode,
  service: "hyperlane.warp.v1.Query",
  method: "QuoteRemoteTransfer",
  deps: [QueryQuoteRemoteTransferRequest, QueryQuoteRemoteTransferResponse]
});