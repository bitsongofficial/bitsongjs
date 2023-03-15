import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryMerkledropRequest, QueryMerkledropResponse, QueryIndexClaimedRequest, QueryIndexClaimedResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export interface Query {
  merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse>;
  indexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse>;
  /** Params queries the fantoken parameters */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.merkledrop = this.merkledrop.bind(this);
    this.indexClaimed = this.indexClaimed.bind(this);
    this.params = this.params.bind(this);
  }

  merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse> {
    const data = QueryMerkledropRequest.encode(request).finish();
    const promise = this.rpc.request("bitsong.merkledrop.v1beta1.Query", "Merkledrop", data);
    return promise.then(data => QueryMerkledropResponse.decode(new _m0.Reader(data)));
  }

  indexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse> {
    const data = QueryIndexClaimedRequest.encode(request).finish();
    const promise = this.rpc.request("bitsong.merkledrop.v1beta1.Query", "IndexClaimed", data);
    return promise.then(data => QueryIndexClaimedResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("bitsong.merkledrop.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse> {
      return queryService.merkledrop(request);
    },

    indexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse> {
      return queryService.indexClaimed(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};