import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { assert } from '@cosmjs/utils';

import { Params } from '../codec/fantoken/fantoken';
import { QueryClientImpl } from '../codec/fantoken/query';
import { Any } from '../codec/google/protobuf/any';

import { Coin } from '../codec/cosmos/base/v1beta1/coin';

export interface FantokenExtension {
    readonly fantoken: {
        readonly fantoken: (denom: string) => Promise<Any>;
        readonly fantokens: (owner: string) => Promise<Any[]>;
        readonly params: () => Promise<Params>;
        readonly totalBurn: () => Promise<Coin[]>;
    };
}

export const setupFantokenExtension = (base: QueryClient): FantokenExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    // TODO: fix chainmodules/proto/fantoken/query.proto and complete it
    return {
        fantoken: {
            fantoken: async (denom: string) => {
                const { FanToken } = await queryService.FanToken({ denom });
                assert(FanToken);
                return FanToken;
            },
            fantokens: async (owner: string) => {
                const { FanTokens } = await queryService.FanTokens({ owner });
                assert(FanTokens);
                return FanTokens;
            },
            params: async () => {
                const { params } = await queryService.Params({});
                assert(params);
                return params;
            },
            totalBurn: async () => {
                const { burnedCoins } = await queryService.TotalBurn({});
                assert(burnedCoins);
                return burnedCoins;
            },
        },
    };
};
