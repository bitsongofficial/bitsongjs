import { QueryClient } from '@cosmjs/stargate';
import Long from 'long';
import { QueryIndexClaimedResponse, QueryMerkledropResponse, QueryParamsResponse } from '../codec/bitsong/merkledrop/v1beta1/query';
export interface MerkledropExtension {
    readonly merkledrop: {
        readonly merkledrop: (id: Long) => Promise<QueryMerkledropResponse>;
        readonly index_claimed: (id: Long, index: Long) => Promise<QueryIndexClaimedResponse>;
        readonly params: () => Promise<QueryParamsResponse>;
    };
}
export declare const setupMerkledropExtension: (base: QueryClient) => MerkledropExtension;
