import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.merkledrop.v1beta1";
export interface Merkledrop {
    /** merkledrop id */
    id: Long;
    /** merkle_root of the merkledrop */
    merkleRoot: string;
    /** merkledrop start height */
    startHeight: Long;
    /** merkledrop end height */
    endHeight: Long;
    /** denom to distribuite */
    denom: string;
    /** amount to distribuite */
    amount: string;
    /** claimed amount */
    claimed: string;
    /** merkledrop's owner */
    owner: string;
}
export declare const Merkledrop: {
    encode(message: Merkledrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Merkledrop;
    fromJSON(object: any): Merkledrop;
    toJSON(message: Merkledrop): unknown;
    fromPartial<I extends unknown>(object: I): Merkledrop;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
