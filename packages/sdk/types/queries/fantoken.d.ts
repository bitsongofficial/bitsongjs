import { QueryClient } from '@cosmjs/stargate';
import { PageRequest } from 'src/codec/cosmos/base/query/v1beta1/pagination';
import { Params } from '../codec/bitsong/fantoken/v1beta1/params';
import { QueryFanTokenResponse, QueryFanTokensResponse } from '../codec/bitsong/fantoken/v1beta1/query';
export interface FantokenExtension {
    readonly fantoken: {
        readonly fantoken: (denom: string) => Promise<QueryFanTokenResponse>;
        readonly fantokens: (authority: string, pagination?: PageRequest) => Promise<QueryFanTokensResponse>;
        readonly params: () => Promise<Params>;
    };
}
export declare const setupFantokenExtension: (base: QueryClient) => FantokenExtension;
