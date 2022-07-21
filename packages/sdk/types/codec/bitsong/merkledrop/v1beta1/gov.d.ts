import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.merkledrop.v1beta1";
export interface UpdateFeesProposal {
    title: string;
    description: string;
    creationFee?: Coin;
}
export interface UpdateFeesProposalWithDeposit {
    title: string;
    description: string;
    creationFee: string;
    deposit: string;
}
export declare const UpdateFeesProposal: {
    encode(message: UpdateFeesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposal;
    fromJSON(object: any): UpdateFeesProposal;
    toJSON(message: UpdateFeesProposal): unknown;
    fromPartial<I extends unknown>(object: I): UpdateFeesProposal;
};
export declare const UpdateFeesProposalWithDeposit: {
    encode(message: UpdateFeesProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposalWithDeposit;
    fromJSON(object: any): UpdateFeesProposalWithDeposit;
    toJSON(message: UpdateFeesProposalWithDeposit): unknown;
    fromPartial<I extends unknown>(object: I): UpdateFeesProposalWithDeposit;
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
