import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.fantoken.v1beta1";
export interface Metadata {
    /** name defines the name of the fantoken (eg: Kitty Punk) */
    name: string;
    /** symbol is the token symbol usually shown on exchanges (eg: KITTY) */
    symbol: string;
    /**
     * URI to a document (on or off-chain) that contains additional
     * information.Optional.
     */
    uri: string;
    /** sdk.AccAddress allowed to set a new uri */
    authority: string;
}
/** FanToken defines a standard for the fungible token */
export interface FanToken {
    /** denom represents the string name of the given denom unit (e.g ft<hash>). */
    denom: string;
    maxSupply: string;
    /** sdk.AccAddress allowed to mint new fantoken */
    minter: string;
    metaData?: Metadata;
}
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends unknown>(object: I): Metadata;
};
export declare const FanToken: {
    encode(message: FanToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FanToken;
    fromJSON(object: any): FanToken;
    toJSON(message: FanToken): unknown;
    fromPartial<I extends unknown>(object: I): FanToken;
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
