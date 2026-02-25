import { buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, GetAuthenticatorRequest, GetAuthenticatorResponse, GetAuthenticatorsRequest, GetAuthenticatorsResponse } from "./query";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package bitsong.smartaccount.v1beta1
 * @see proto service: bitsong.smartaccount.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bitsong.smartaccount.v1beta1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});
/**
 * @name getGetAuthenticator
 * @package bitsong.smartaccount.v1beta1
 * @see proto service: bitsong.smartaccount.v1beta1.GetAuthenticator
 */
export const getGetAuthenticator = buildQuery<GetAuthenticatorRequest, GetAuthenticatorResponse>({
  encode: GetAuthenticatorRequest.encode,
  decode: GetAuthenticatorResponse.decode,
  service: "bitsong.smartaccount.v1beta1.Query",
  method: "GetAuthenticator",
  deps: [GetAuthenticatorRequest, GetAuthenticatorResponse]
});
/**
 * @name getGetAuthenticators
 * @package bitsong.smartaccount.v1beta1
 * @see proto service: bitsong.smartaccount.v1beta1.GetAuthenticators
 */
export const getGetAuthenticators = buildQuery<GetAuthenticatorsRequest, GetAuthenticatorsResponse>({
  encode: GetAuthenticatorsRequest.encode,
  decode: GetAuthenticatorsResponse.decode,
  service: "bitsong.smartaccount.v1beta1.Query",
  method: "GetAuthenticators",
  deps: [GetAuthenticatorsRequest, GetAuthenticatorsResponse]
});