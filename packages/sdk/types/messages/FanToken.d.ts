import { EncodeObject } from '@cosmjs/proto-signing';
import { MsgIssue, MsgDisableMint, MsgBurn, MsgSetMinter, MsgSetAuthority, MsgSetUri } from '../codec/bitsong/fantoken/v1beta1/tx';
export interface MsgIssueEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgIssue';
    readonly value: MsgIssue;
}
export interface MsgDisableMintEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgDisableMint';
    readonly value: MsgDisableMint;
}
export interface MsgBurnEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgBurn';
    readonly value: MsgBurn;
}
export interface MsgSetMinterEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgSetMinter';
    readonly value: MsgSetMinter;
}
export interface MsgSetAuthorityEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgSetAuthority';
    readonly value: MsgSetAuthority;
}
export interface MsgSetUriEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.fantoken.MsgSetUri';
    readonly value: MsgSetUri;
}
