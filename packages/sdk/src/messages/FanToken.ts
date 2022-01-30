import { EncodeObject } from '@cosmjs/proto-signing';
import { MsgEditFanToken, MsgIssueFanToken, MsgMintFanToken, MsgBurnFanToken, MsgTransferFanTokenOwner } from '../codec/bitsong/fantoken/v1beta1/tx';

export interface MsgIssueFanTokenEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgIssueFanToken';
    readonly value: MsgIssueFanToken;
}

export interface MsgEditFanTokenEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgEditFanToken';
    readonly value: MsgEditFanToken;
}

export interface MsgMintFanTokenEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgMintFanToken';
    readonly value: MsgMintFanToken;
}

export interface MsgBurnFanTokenEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgBurnFanToken';
    readonly value: MsgBurnFanToken;
}

export interface MsgTransferFanTokenOwnerEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgTransferFanTokenOwner';
    readonly value: MsgTransferFanTokenOwner;
}
