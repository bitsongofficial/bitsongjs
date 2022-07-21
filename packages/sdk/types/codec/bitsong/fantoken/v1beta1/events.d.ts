import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.fantoken.v1beta1";
export interface EventIssue {
    denom: string;
}
export interface EventDisableMint {
    denom: string;
}
export interface EventMint {
    recipient: string;
    coin: string;
}
export interface EventBurn {
    sender: string;
    coin: string;
}
export interface EventSetAuthority {
    denom: string;
    oldAuthority: string;
    newAuthority: string;
}
export interface EventSetMinter {
    denom: string;
    oldMinter: string;
    newMinter: string;
}
export interface EventSetUri {
    denom: string;
}
export declare const EventIssue: {
    encode(message: EventIssue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventIssue;
    fromJSON(object: any): EventIssue;
    toJSON(message: EventIssue): unknown;
    fromPartial<I extends unknown>(object: I): EventIssue;
};
export declare const EventDisableMint: {
    encode(message: EventDisableMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDisableMint;
    fromJSON(object: any): EventDisableMint;
    toJSON(message: EventDisableMint): unknown;
    fromPartial<I extends unknown>(object: I): EventDisableMint;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMint;
    fromJSON(object: any): EventMint;
    toJSON(message: EventMint): unknown;
    fromPartial<I extends unknown>(object: I): EventMint;
};
export declare const EventBurn: {
    encode(message: EventBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn;
    fromJSON(object: any): EventBurn;
    toJSON(message: EventBurn): unknown;
    fromPartial<I extends unknown>(object: I): EventBurn;
};
export declare const EventSetAuthority: {
    encode(message: EventSetAuthority, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAuthority;
    fromJSON(object: any): EventSetAuthority;
    toJSON(message: EventSetAuthority): unknown;
    fromPartial<I extends unknown>(object: I): EventSetAuthority;
};
export declare const EventSetMinter: {
    encode(message: EventSetMinter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMinter;
    fromJSON(object: any): EventSetMinter;
    toJSON(message: EventSetMinter): unknown;
    fromPartial<I extends unknown>(object: I): EventSetMinter;
};
export declare const EventSetUri: {
    encode(message: EventSetUri, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetUri;
    fromJSON(object: any): EventSetUri;
    toJSON(message: EventSetUri): unknown;
    fromPartial<I extends unknown>(object: I): EventSetUri;
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
