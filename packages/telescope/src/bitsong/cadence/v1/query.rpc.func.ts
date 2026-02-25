import { buildQuery } from "../../../helper-func-types";
import { QueryCadenceContracts, QueryCadenceContractsResponse, QueryCadenceContract, QueryCadenceContractResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/**
 * CadenceContracts
 * @name getCadenceContracts
 * @package bitsong.cadence.v1
 * @see proto service: bitsong.cadence.v1.CadenceContracts
 */
export const getCadenceContracts = buildQuery<QueryCadenceContracts, QueryCadenceContractsResponse>({
  encode: QueryCadenceContracts.encode,
  decode: QueryCadenceContractsResponse.decode,
  service: "bitsong.cadence.v1.Query",
  method: "CadenceContracts",
  deps: [QueryCadenceContracts, QueryCadenceContractsResponse]
});
/**
 * CadenceContract
 * @name getCadenceContract
 * @package bitsong.cadence.v1
 * @see proto service: bitsong.cadence.v1.CadenceContract
 */
export const getCadenceContract = buildQuery<QueryCadenceContract, QueryCadenceContractResponse>({
  encode: QueryCadenceContract.encode,
  decode: QueryCadenceContractResponse.decode,
  service: "bitsong.cadence.v1.Query",
  method: "CadenceContract",
  deps: [QueryCadenceContract, QueryCadenceContractResponse]
});
/**
 * Params
 * @name getParams
 * @package bitsong.cadence.v1
 * @see proto service: bitsong.cadence.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "bitsong.cadence.v1.Query",
  method: "Params",
  deps: [QueryParamsRequest, QueryParamsResponse]
});