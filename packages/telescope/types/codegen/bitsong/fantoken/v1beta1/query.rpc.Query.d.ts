import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryFanTokenRequest, QueryFanTokenResponse, QueryFanTokensRequest, QueryFanTokensResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query creates service with fantoken as RPC */
export interface Query {
    /** FanToken returns fantoken with fantoken name */
    fanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse>;
    /** FanTokens returns the fantoken list */
    fanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse>;
    /** Params queries the fantoken parameters */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    fanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse>;
    fanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    fanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse>;
    fanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
