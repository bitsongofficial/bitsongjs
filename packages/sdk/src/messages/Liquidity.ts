import { EncodeObject } from '@cosmjs/proto-signing';
import { MsgCreatePool, MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch } from '../codec/tendermint/liquidity/v1beta1/tx';

export interface MsgCreatePoolEncodeObject extends EncodeObject {
    readonly typeUrl: '/tendermint.liquidity.v1beta1.MsgCreatePool';
    readonly value: MsgCreatePool;
}

export interface MsgDepositWithinBatchEncodeObject extends EncodeObject {
    readonly typeUrl: '/tendermint.liquidity.v1beta1.MsgDepositWithinBatch';
    readonly value: MsgDepositWithinBatch;
}

export interface MsgWithdrawWithinBatchEncodeObject extends EncodeObject {
    readonly typeUrl: '/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch';
    readonly value: MsgWithdrawWithinBatch;
}

export interface MsgSwapWithinBatchEncodeObject extends EncodeObject {
    readonly typeUrl: '/tendermint.liquidity.v1beta1.MsgSwapWithinBatch';
    readonly value: MsgSwapWithinBatch;
}
