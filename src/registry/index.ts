import { Registry, GeneratedType } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';

import { MsgIssueFanToken, MsgMintFanToken, MsgBurnFanToken, MsgEditFanToken } from '../codec/fantoken/tx';
import { MsgCreatePool, MsgDepositWithinBatch, MsgSwapWithinBatch, MsgWithdrawWithinBatch } from '../codec/tendermint/liquidity/v1beta1/tx';

export const bitsongRegistry = (): Registry => {
    return new Registry([
        ...defaultRegistryTypes,
        ['/tendermint.liquidity.v1beta1.MsgCreatePool', MsgCreatePool as GeneratedType],
        ['/tendermint.liquidity.v1beta1.MsgDepositWithinBatch', MsgDepositWithinBatch as GeneratedType],
        ['/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch', MsgWithdrawWithinBatch as GeneratedType],
        ['/tendermint.liquidity.v1beta1.MsgSwapWithinBatch', MsgSwapWithinBatch as GeneratedType],
        ['/bitsong.fantoken.MsgIssueFanToken', MsgIssueFanToken as GeneratedType],
        ['/bitsong.fantoken.MsgMintFanToken', MsgMintFanToken as GeneratedType],
        ['/bitsong.fantoken.MsgBurnFanToken', MsgBurnFanToken as GeneratedType],
        ['/bitsong.fantoken.MsgEditFanToken', MsgEditFanToken as GeneratedType],
    ]);
};
