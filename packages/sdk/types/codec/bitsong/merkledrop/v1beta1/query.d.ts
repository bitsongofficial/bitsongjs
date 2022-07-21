import { Merkledrop } from './merkledrop';
import { Params } from './params';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.merkledrop.v1beta1";
export interface QueryMerkledropRequest {
    id: Long;
}
export interface QueryMerkledropResponse {
    merkledrop?: Merkledrop;
}
export interface QueryIndexClaimedRequest {
    id: Long;
    index: Long;
}
export interface QueryIndexClaimedResponse {
    isClaimed: boolean;
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params?: Params;
}
export declare const QueryMerkledropRequest: {
    encode(message: QueryMerkledropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropRequest;
    fromJSON(object: any): QueryMerkledropRequest;
    toJSON(message: QueryMerkledropRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryMerkledropRequest;
};
export declare const QueryMerkledropResponse: {
    encode(message: QueryMerkledropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropResponse;
    fromJSON(object: any): QueryMerkledropResponse;
    toJSON(message: QueryMerkledropResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryMerkledropResponse;
};
export declare const QueryIndexClaimedRequest: {
    encode(message: QueryIndexClaimedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedRequest;
    fromJSON(object: any): QueryIndexClaimedRequest;
    toJSON(message: QueryIndexClaimedRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryIndexClaimedRequest;
};
export declare const QueryIndexClaimedResponse: {
    encode(message: QueryIndexClaimedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedResponse;
    fromJSON(object: any): QueryIndexClaimedResponse;
    toJSON(message: QueryIndexClaimedResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryIndexClaimedResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryParamsResponse;
};
export interface Query {
    Merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse>;
    IndexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse>;
    /** Params queries the fantoken parameters */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Merkledrop(request: QueryMerkledropRequest): Promise<QueryMerkledropResponse>;
    IndexClaimed(request: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
