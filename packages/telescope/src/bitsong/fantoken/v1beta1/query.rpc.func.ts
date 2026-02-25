import { buildQuery } from "../../../helper-func-types";
import { QueryFanTokenRequest, QueryFanTokenResponse, QueryFanTokensRequest, QueryFanTokensResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * FanToken returns fantoken with fantoken name
 * @name getFanToken
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.FanToken
 */
export const getFanToken = buildQuery<QueryFanTokenRequest, QueryFanTokenResponse>({
  encode: QueryFanTokenRequest.encode,
  decode: QueryFanTokenResponse.decode,
  service: "bitsong.fantoken.v1beta1.Query",
  method: "FanToken",
  deps: [QueryFanTokenRequest, QueryFanTokenResponse]
});
/**
 * FanTokens returns the fantoken list
 * @name getFanTokens
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.FanTokens
 */
export const getFanTokens = buildQuery<QueryFanTokensRequest, QueryFanTokensResponse>({
  encode: QueryFanTokensRequest.encode,
  decode: QueryFanTokensResponse.decode,
  service: "bitsong.fantoken.v1beta1.Query",
  method: "FanTokens",
  deps: [QueryFanTokensRequest, QueryFanTokensResponse]
});
/**
 * Params queries the fantoken parameters
 * @name getParams
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bitsong.fantoken.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});