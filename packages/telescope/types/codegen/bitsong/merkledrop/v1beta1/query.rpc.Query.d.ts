import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryMerkledropRequest, QueryMerkledropResponse, QueryIndexClaimedRequest, QueryIndexClaimedResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export interface Query {
    merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse>;
    indexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse>;
    /** Params queries the fantoken parameters */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse>;
    indexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse>;
    indexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
