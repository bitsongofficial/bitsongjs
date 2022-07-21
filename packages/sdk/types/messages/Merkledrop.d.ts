import { EncodeObject } from '@cosmjs/proto-signing';
import { MsgCreate, MsgClaim } from '../codec/bitsong/merkledrop/v1beta1/tx';
export interface MsgCreateEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.merkledrop.v1beta1.MsgCreate';
    readonly value: MsgCreate;
}
export interface MsgClaimEncodeObject extends EncodeObject {
    readonly typeUrl: '/bitsong.merkledrop.v1beta1.MsgClaim';
    readonly value: MsgClaim;
}
