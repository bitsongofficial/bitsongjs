import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { assert } from '@cosmjs/utils';

import { FanToken, Params } from '../codec/bitsong/fantoken/v1beta1/fantoken';
import { QueryClientImpl } from '../codec/bitsong/fantoken/v1beta1/query';

import { Coin } from '../codec/cosmos/base/v1beta1/coin';

export interface FantokenExtension {
    readonly fantoken: {
        readonly fantoken: (denom: string) => Promise<FanToken>;
        readonly fantokens: (owner: string) => Promise<FanToken[]>;
        readonly params: () => Promise<Params>;
        readonly totalBurn: () => Promise<Coin[]>;
    };
}

export const setupFantokenExtension = (base: QueryClient): FantokenExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        fantoken: {
            fantoken: async (denom: string) => {
                const { token } = await queryService.FanToken({ denom });
                assert(token);
                return token;
            },
            fantokens: async (owner: string) => {
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
