import { LCDClient } from "@osmonauts/lcd";
import { QueryMerkledropRequest, QueryMerkledropResponseSDKType, QueryIndexClaimedRequest, QueryIndexClaimedResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    merkledrop(params: QueryMerkledropRequest): Promise<QueryMerkledropResponseSDKType>;
    indexClaimed(params: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
