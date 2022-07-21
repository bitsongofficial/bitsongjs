import { Registry, GeneratedType } from '@cosmjs/proto-signing';
import { defaultRegistryTypes } from '@cosmjs/stargate';

import { MsgBurn, MsgDisableMint, MsgIssue, MsgMint, MsgSetAuthority, MsgSetMinter, MsgSetUri } from '../codec/bitsong/fantoken/v1beta1/tx';
import { MsgClaim, MsgCreate } from '../codec/bitsong/merkledrop/v1beta1/tx'

export const bitsongRegistry = (): Registry => {
    return new Registry([
        ...defaultRegistryTypes,
        ['/bitsong.fantoken.MsgIssue', MsgIssue as GeneratedType],
        ['/bitsong.fantoken.MsgMint', MsgMint as GeneratedType],
        ['/bitsong.fantoken.MsgBurn', MsgBurn as GeneratedType],
        ['/bitsong.fantoken.MsgDisableMint', MsgDisableMint as GeneratedType],
        ['/bitsong.fantoken.MsgSetMinter', MsgSetMinter as GeneratedType],
        ['/bitsong.fantoken.MsgSetAuthority', MsgSetAuthority as GeneratedType],
        ['/bitsong.fantoken.MsgSetUri', MsgSetUri as GeneratedType],
        ['/bitsong.merkledrop.v1beta1.MsgClaim', MsgClaim as GeneratedType],
        ['/bitsong.merkledrop.v1beta1.MsgCreate', MsgCreate as GeneratedType],
    ]);
};
