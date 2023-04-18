import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { FanToken, FanTokenSDKType } from "./fantoken";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
export interface QueryFanTokenRequest {
    /** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
    denom: string;
}
/** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
export interface QueryFanTokenRequestSDKType {
    denom: string;
}
/** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
export interface QueryFanTokenResponse {
    /** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
    fantoken?: FanToken;
}
/** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
export interface QueryFanTokenResponseSDKType {
    fantoken?: FanTokenSDKType;
}
/** QueryFanTokensRequest is request type for the Query/FanTokens RPC method */
export interface QueryFanTokensRequest {
    authority: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryFanTokensRequest is request type for the Query/FanTokens RPC method */
export interface QueryFanTokensRequestSDKType {
    authority: string;
    pagination?: PageRequestSDKType;
}
/** QueryFanTokensResponse is response type for the Query/FanTokens RPC method */
export interface QueryFanTokensResponse {
    fantokens: FanToken[];
    pagination?: PageResponse;
}
/** QueryFanTokensResponse is response type for the Query/FanTokens RPC method */
export interface QueryFanTokensResponseSDKType {
    fantokens: FanTokenSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequestSDKType {
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params?: Params;
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export declare const QueryFanTokenRequest: {
    encode(message: QueryFanTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenRequest;
    fromPartial(object: DeepPartial<QueryFanTokenRequest>): QueryFanTokenRequest;
};
export declare const QueryFanTokenResponse: {
    encode(message: QueryFanTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenResponse;
    fromPartial(object: DeepPartial<QueryFanTokenResponse>): QueryFanTokenResponse;
};
export declare const QueryFanTokensRequest: {
    encode(message: QueryFanTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensRequest;
    fromPartial(object: DeepPartial<QueryFanTokensRequest>): QueryFanTokensRequest;
};
export declare const QueryFanTokensResponse: {
    encode(message: QueryFanTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensResponse;
    fromPartial(object: DeepPartial<QueryFanTokensResponse>): QueryFanTokensResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
