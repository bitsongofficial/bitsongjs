import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { assert } from '@cosmjs/utils';

import { FanToken, Params } from '../codec/fantoken/fantoken';
import { QueryClientImpl } from '../codec/fantoken/query';

import { Coin } from '../codec/cosmos/base/v1beta1/coin';

export interface FantokenExtension {
    readonly fantoken: {
        readonly token: (denom: string) => Promise<FanToken>;
        readonly tokens: (owner: string) => Promise<FanToken[]>;
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
            token: async (denom: string) => {
                const { token } = await queryService.FanToken({ denom });
                assert(token);
                return token;
            },
            tokens: async (owner: string) => {
                const { tokens } = await queryService.FanTokens({ owner });
                assert(tokens);
                return tokens;
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
