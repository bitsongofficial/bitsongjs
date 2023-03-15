import { LCDClient } from "@osmonauts/lcd";
import { QueryFanTokenRequest, QueryFanTokenResponseSDKType, QueryFanTokensRequest, QueryFanTokensResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    fanToken(params: QueryFanTokenRequest): Promise<QueryFanTokenResponseSDKType>;
    fanTokens(params: QueryFanTokensRequest): Promise<QueryFanTokensResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
