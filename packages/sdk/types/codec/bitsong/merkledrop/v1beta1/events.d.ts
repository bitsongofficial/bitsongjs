import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.merkledrop.v1beta1";
export interface EventCreate {
    owner: string;
    merkledropId: Long;
}
export interface EventClaim {
    merkledropId: Long;
    index: Long;
    coin?: Coin;
}
export interface EventWithdraw {
    merkledropId: Long;
    coin?: Coin;
}
export declare const EventCreate: {
    encode(message: EventCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate;
    fromJSON(object: any): EventCreate;
    toJSON(message: EventCreate): unknown;
    fromPartial<I extends unknown>(object: I): EventCreate;
};
export declare const EventClaim: {
    encode(message: EventClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventClaim;
    fromJSON(object: any): EventClaim;
    toJSON(message: EventClaim): unknown;
    fromPartial<I extends unknown>(object: I): EventClaim;
};
export declare const EventWithdraw: {
    encode(message: EventWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw;
    fromJSON(object: any): EventWithdraw;
    toJSON(message: EventWithdraw): unknown;
    fromPartial<I extends unknown>(object: I): EventWithdraw;
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
