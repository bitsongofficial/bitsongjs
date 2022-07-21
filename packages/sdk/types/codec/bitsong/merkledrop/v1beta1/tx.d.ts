import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.merkledrop.v1beta1";
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
export interface MsgCreateResponse {
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
export interface MsgClaimResponse {
    id: Long;
    index: Long;
    amount: string;
}
export declare const MsgCreate: {
    encode(message: MsgCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate;
    fromJSON(object: any): MsgCreate;
    toJSON(message: MsgCreate): unknown;
    fromPartial<I extends unknown>(object: I): MsgCreate;
};
export declare const MsgCreateResponse: {
    encode(message: MsgCreateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse;
    fromJSON(object: any): MsgCreateResponse;
    toJSON(message: MsgCreateResponse): unknown;
    fromPartial<I extends unknown>(object: I): MsgCreateResponse;
};
export declare const MsgClaim: {
    encode(message: MsgClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim;
    fromJSON(object: any): MsgClaim;
    toJSON(message: MsgClaim): unknown;
    fromPartial<I extends unknown>(object: I): MsgClaim;
};
export declare const MsgClaimResponse: {
    encode(message: MsgClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse;
    fromJSON(object: any): MsgClaimResponse;
    toJSON(message: MsgClaimResponse): unknown;
    fromPartial<I extends unknown>(object: I): MsgClaimResponse;
};
export interface Msg {
    Create(request: MsgCreate): Promise<MsgCreateResponse>;
    Claim(request: MsgClaim): Promise<MsgClaimResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Create(request: MsgCreate): Promise<MsgCreateResponse>;
    Claim(request: MsgClaim): Promise<MsgClaimResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
