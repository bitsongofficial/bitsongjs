import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountsRequest, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    accounts(params?: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
    account(params: QueryAccountRequest): Promise<QueryAccountResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    moduleAccountByName(params: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponseSDKType>;
}
