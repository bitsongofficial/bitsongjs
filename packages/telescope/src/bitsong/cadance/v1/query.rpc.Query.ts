import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCadanceContracts, QueryCadanceContractsResponse, QueryCadanceContract, QueryCadanceContractResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** CadanceContracts */
  cadanceContracts(request?: QueryCadanceContracts): Promise<QueryCadanceContractsResponse>;
  /** CadanceContract */
  cadanceContract(request: QueryCadanceContract): Promise<QueryCadanceContractResponse>;
  /** Params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.cadanceContracts = this.cadanceContracts.bind(this);
    this.cadanceContract = this.cadanceContract.bind(this);
    this.params = this.params.bind(this);
  }
  cadanceContracts(request: QueryCadanceContracts = {
    pagination: undefined
  }): Promise<QueryCadanceContractsResponse> {
    const data = QueryCadanceContracts.encode(request).finish();
    const promise = this.rpc.request("bitsong.cadance.v1.Query", "CadanceContracts", data);
    return promise.then(data => QueryCadanceContractsResponse.decode(new BinaryReader(data)));
  }
  cadanceContract(request: QueryCadanceContract): Promise<QueryCadanceContractResponse> {
    const data = QueryCadanceContract.encode(request).finish();
    const promise = this.rpc.request("bitsong.cadance.v1.Query", "CadanceContract", data);
    return promise.then(data => QueryCadanceContractResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bitsong.cadance.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    cadanceContracts(request?: QueryCadanceContracts): Promise<QueryCadanceContractsResponse> {
      return queryService.cadanceContracts(request);
    },
    cadanceContract(request: QueryCadanceContract): Promise<QueryCadanceContractResponse> {
      return queryService.cadanceContract(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};