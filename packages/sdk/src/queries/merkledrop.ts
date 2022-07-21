import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';
import Long from 'long';

import {
    QueryClientImpl,
    QueryIndexClaimedResponse,
    QueryMerkledropResponse,
    QueryParamsResponse
} from '../codec/bitsong/merkledrop/v1beta1/query';

export interface MerkledropExtension {
    readonly merkledrop: {
        readonly merkledrop: (id: Long) => Promise<QueryMerkledropResponse>;
        readonly index_claimed: (id: Long, index: Long) => Promise<QueryIndexClaimedResponse>;
        readonly params: () => Promise<QueryParamsResponse>;
    };
}

export const setupMerkledropExtension = (base: QueryClient): MerkledropExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        merkledrop: {
            merkledrop: async (id: Long) => {
                const response = await queryService.Merkledrop({ id });
                return response;
            },
            index_claimed: async (id: Long, index: Long) => {
                const response = await queryService.IndexClaimed({ id, index });
                return response;
            },
            params: async () => {
                const response = await queryService.Params({});
                return response;
            },
        },
    };
};
