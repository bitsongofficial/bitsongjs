import { FanToken } from './fantoken';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Params } from './params';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "bitsong.fantoken.v1beta1";
/** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
export interface QueryFanTokenRequest {
    denom: string;
}
/** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
export interface QueryFanTokenResponse {
    fantoken?: FanToken;
}
/** QueryFanTokensRequest is request type for the Query/FanTokens RPC method */
export interface QueryFanTokensRequest {
    authority: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryFanTokensResponse is response type for the Query/FanTokens RPC method */
export interface QueryFanTokensResponse {
    fantokens: FanToken[];
    pagination?: PageResponse;
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params?: Params;
}
export declare const QueryFanTokenRequest: {
    encode(message: QueryFanTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenRequest;
    fromJSON(object: any): QueryFanTokenRequest;
    toJSON(message: QueryFanTokenRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryFanTokenRequest;
};
export declare const QueryFanTokenResponse: {
    encode(message: QueryFanTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenResponse;
    fromJSON(object: any): QueryFanTokenResponse;
    toJSON(message: QueryFanTokenResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryFanTokenResponse;
};
export declare const QueryFanTokensRequest: {
    encode(message: QueryFanTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensRequest;
    fromJSON(object: any): QueryFanTokensRequest;
    toJSON(message: QueryFanTokensRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryFanTokensRequest;
};
export declare const QueryFanTokensResponse: {
    encode(message: QueryFanTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensResponse;
    fromJSON(object: any): QueryFanTokensResponse;
    toJSON(message: QueryFanTokensResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryFanTokensResponse;
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
/** Query creates service with fantoken as RPC */
export interface Query {
    /** FanToken returns fantoken with fantoken name */
    FanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse>;
    /** FanTokens returns the fantoken list */
    FanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse>;
    /** Params queries the fantoken parameters */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    FanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse>;
    FanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse>;
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
