import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { assert } from '@cosmjs/utils';
import { PageRequest } from 'src/codec/cosmos/base/query/v1beta1/pagination';

import { Params } from '../codec/bitsong/fantoken/v1beta1/params';
import { QueryClientImpl, QueryFanTokenResponse, QueryFanTokensResponse } from '../codec/bitsong/fantoken/v1beta1/query';

export interface FantokenExtension {
    readonly fantoken: {
        readonly fantoken: (denom: string) => Promise<QueryFanTokenResponse>;
        readonly fantokens: (authority: string, pagination?: PageRequest) => Promise<QueryFanTokensResponse>;
        readonly params: () => Promise<Params>;
    };
}

export const setupFantokenExtension = (base: QueryClient): FantokenExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        fantoken: {
            fantoken: async (denom: string) => {
                const response = await queryService.FanToken({ denom });
                return response;
            },
            fantokens: async (authority: string, pagination?: PageRequest) => {
                const response = await queryService.FanTokens({ authority, pagination });
                return response;
            },
            params: async () => {
                const { params } = await queryService.Params({});
                assert(params);
                return params;
            },
        },
    };
};
