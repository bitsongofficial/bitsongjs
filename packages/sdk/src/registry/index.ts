import { Registry, GeneratedType } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';

import { MsgIssueFanToken, MsgMintFanToken, MsgBurnFanToken, MsgEditFanToken, MsgTransferFanTokenOwner } from '../codec/bitsong/fantoken/v1beta1/tx';

export const bitsongRegistry = (): Registry => {
    return new Registry([
        ...defaultRegistryTypes,
        ['/bitsong.fantoken.MsgIssueFanToken', MsgIssueFanToken as GeneratedType],
        ['/bitsong.fantoken.MsgMintFanToken', MsgMintFanToken as GeneratedType],
        ['/bitsong.fantoken.MsgBurnFanToken', MsgBurnFanToken as GeneratedType],
        ['/bitsong.fantoken.MsgEditFanToken', MsgEditFanToken as GeneratedType],
        ['/bitsong.fantoken.MsgTransferFanTokenOwner', MsgTransferFanTokenOwner as GeneratedType],
    ]);
};
