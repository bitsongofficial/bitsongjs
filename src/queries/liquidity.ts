import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';

import { assert } from '@cosmjs/utils';
import Long from 'long';
import { DepositMsgState, Params, Pool, PoolBatch, SwapMsgState, WithdrawMsgState } from '../codec/tendermint/liquidity/v1beta1/liquidity';

import { QueryClientImpl } from '../codec/tendermint/liquidity/v1beta1/query';

export interface LiquidityExtension {
    readonly liquidity: {
        readonly pool: (poolId: number) => Promise<Pool>;
        readonly poolBatch: (poolId: number) => Promise<PoolBatch>;
        readonly poolByPoolCoinDenom: (poolCoinDenom: string) => Promise<Pool>;
        readonly poolByReserveAcc: (reserveAcc: string) => Promise<Pool>;
        readonly pools: () => Promise<Pool[]>;
        readonly params: () => Promise<Params>;
        readonly poolBatchDepositMsg: (poolId: number, msgIndex: number) => Promise<DepositMsgState>;
        readonly poolBatchDepositMsgs: (poolId: number) => Promise<DepositMsgState[]>;
        readonly poolBatchSwapMsg: (poolId: number, msgIndex: number) => Promise<SwapMsgState>;
        readonly poolBatchSwapMsgs: (poolId: number) => Promise<SwapMsgState[]>;
        readonly poolBatchWithdrawMsg: (poolId: number, msgIndex: number) => Promise<WithdrawMsgState>;
        readonly poolBatchWithdrawMsgs: (poolId: number) => Promise<WithdrawMsgState[]>;
    };
}

export const setupLiquidityExtension = (base: QueryClient): LiquidityExtension => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);

    return {
        liquidity: {
            pool: async (poolId: number) => {
                const { pool } = await queryService.LiquidityPool({ poolId: Long.fromNumber(poolId, true) });
                assert(pool);
                return pool;
            },
            poolBatch: async (poolId: number) => {
                const { batch } = await queryService.LiquidityPoolBatch({
                    poolId: Long.fromNumber(poolId, true),
                });
                assert(batch);
                return batch;
            },
            poolByPoolCoinDenom: async (poolCoinDenom: string) => {
                const { pool } = await queryService.LiquidityPoolByPoolCoinDenom({
                    poolCoinDenom: poolCoinDenom,
                });
                assert(pool);
                return pool;
            },
            poolByReserveAcc: async (reserveAcc: string) => {
                const { pool } = await queryService.LiquidityPoolByReserveAcc({
                    reserveAcc: reserveAcc,
                });
                assert(pool);
                return pool;
            },
            pools: async () => {
                // TODO: include pagination
                const { pools } = await queryService.LiquidityPools({});
                assert(pools);
                return pools;
            },
            params: async () => {
                const { params } = await queryService.Params({});
                assert(params);
                return params;
            },
            poolBatchDepositMsg: async (poolId: number, msgIndex: number) => {
                const { deposit } = await queryService.PoolBatchDepositMsg({
                    poolId: Long.fromNumber(poolId, true),
                    msgIndex: Long.fromNumber(msgIndex),
                });
                assert(deposit);
                return deposit;
            },
            poolBatchDepositMsgs: async (poolId: number) => {
                const { deposits } = await queryService.PoolBatchDepositMsgs({
                    poolId: Long.fromNumber(poolId, true),
                });
                assert(deposits);
                return deposits;
            },
            poolBatchSwapMsg: async (poolId: number, msgIndex: number) => {
                const { swap } = await queryService.PoolBatchSwapMsg({
                    poolId: Long.fromNumber(poolId, true),
                    msgIndex: Long.fromNumber(msgIndex),
                });
                assert(swap);
                return swap;
            },
            poolBatchSwapMsgs: async (poolId: number) => {
                const { swaps } = await queryService.PoolBatchSwapMsgs({
                    poolId: Long.fromNumber(poolId, true),
                });
                assert(swaps);
                return swaps;
            },
            poolBatchWithdrawMsg: async (poolId: number, msgIndex: number) => {
                const { withdraw } = await queryService.PoolBatchWithdrawMsg({
                    poolId: Long.fromNumber(poolId, true),
                    msgIndex: Long.fromNumber(msgIndex),
                });
                assert(withdraw);
                return withdraw;
            },
            poolBatchWithdrawMsgs: async (poolId: number) => {
                const { withdraws } = await queryService.PoolBatchWithdrawMsgs({
                    poolId: Long.fromNumber(poolId, true),
                });
                assert(withdraws);
                return withdraws;
            },
        },
    };
};
