import { Merkledrop, MerkledropSDKType } from "./merkledrop";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface QueryMerkledropRequest {
    id: Long;
}
export interface QueryMerkledropRequestSDKType {
    id: Long;
}
export interface QueryMerkledropResponse {
    merkledrop?: Merkledrop;
}
export interface QueryMerkledropResponseSDKType {
    merkledrop?: MerkledropSDKType;
}
export interface QueryIndexClaimedRequest {
    id: Long;
    index: Long;
}
export interface QueryIndexClaimedRequestSDKType {
    id: Long;
    index: Long;
}
export interface QueryIndexClaimedResponse {
    isClaimed: boolean;
}
export interface QueryIndexClaimedResponseSDKType {
    is_claimed: boolean;
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
export declare const QueryMerkledropRequest: {
    encode(message: QueryMerkledropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropRequest;
    fromPartial(object: DeepPartial<QueryMerkledropRequest>): QueryMerkledropRequest;
};
export declare const QueryMerkledropResponse: {
    encode(message: QueryMerkledropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropResponse;
    fromPartial(object: DeepPartial<QueryMerkledropResponse>): QueryMerkledropResponse;
};
export declare const QueryIndexClaimedRequest: {
    encode(message: QueryIndexClaimedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedRequest;
    fromPartial(object: DeepPartial<QueryIndexClaimedRequest>): QueryIndexClaimedRequest;
};
export declare const QueryIndexClaimedResponse: {
    encode(message: QueryIndexClaimedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedResponse;
    fromPartial(object: DeepPartial<QueryIndexClaimedResponse>): QueryIndexClaimedResponse;
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
