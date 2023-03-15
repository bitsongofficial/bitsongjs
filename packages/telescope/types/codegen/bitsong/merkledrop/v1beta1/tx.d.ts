import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface MsgCreate {
    /** owner of the merkledrop */
    owner: string;
    /** merkle_root used to compute proofs */
    merkleRoot: string;
    /** merkledrop start height */
    startHeight: Long;
    /** merkledrop end height */
    endHeight: Long;
    /** coins to distribute */
    coin?: Coin;
}
export interface MsgCreateSDKType {
    /** owner of the merkledrop */
    owner: string;
    /** merkle_root used to compute proofs */
    merkle_root: string;
    /** merkledrop start height */
    start_height: Long;
    /** merkledrop end height */
    end_height: Long;
    /** coins to distribute */
    coin?: CoinSDKType;
}
export interface MsgCreateResponse {
    owner: string;
    id: Long;
}
export interface MsgCreateResponseSDKType {
    owner: string;
    id: Long;
}
export interface MsgClaim {
    sender: string;
    merkledropId: Long;
    index: Long;
    amount: string;
    proofs: string[];
}
export interface MsgClaimSDKType {
    sender: string;
    merkledrop_id: Long;
    index: Long;
    amount: string;
    proofs: string[];
}
export interface MsgClaimResponse {
    id: Long;
    index: Long;
    amount: string;
}
export interface MsgClaimResponseSDKType {
    id: Long;
    index: Long;
    amount: string;
}
export declare const MsgCreate: {
    encode(message: MsgCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate;
    fromPartial(object: DeepPartial<MsgCreate>): MsgCreate;
};
export declare const MsgCreateResponse: {
    encode(message: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse;
    fromPartial(object: DeepPartial<MsgCreateResponse>): MsgCreateResponse;
};
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim;
    fromPartial(object: DeepPartial<MsgClaim>): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(message: MsgClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse;
    fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse;
};
