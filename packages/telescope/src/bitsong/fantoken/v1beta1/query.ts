import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { FanToken, FanTokenAmino } from "./fantoken";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryFanTokenRequest is request type for the Query/FanToken RPC method
 * @name QueryFanTokenRequest
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokenRequest
 */
export interface QueryFanTokenRequest {
  denom: string;
}
export interface QueryFanTokenRequestProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokenRequest";
  value: Uint8Array;
}
/**
 * QueryFanTokenRequest is request type for the Query/FanToken RPC method
 * @name QueryFanTokenRequestAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokenRequest
 */
export interface QueryFanTokenRequestAmino {
  denom: string;
}
export interface QueryFanTokenRequestAminoMsg {
  type: "/bitsong.fantoken.v1beta1.QueryFanTokenRequest";
  value: QueryFanTokenRequestAmino;
}
/**
 * QueryFanTokenResponse is response type for the Query/FanToken RPC method
 * @name QueryFanTokenResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokenResponse
 */
export interface QueryFanTokenResponse {
  fantoken?: FanToken;
}
export interface QueryFanTokenResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokenResponse";
  value: Uint8Array;
}
/**
 * QueryFanTokenResponse is response type for the Query/FanToken RPC method
 * @name QueryFanTokenResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokenResponse
 */
export interface QueryFanTokenResponseAmino {
  fantoken?: FanTokenAmino;
}
export interface QueryFanTokenResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.QueryFanTokenResponse";
  value: QueryFanTokenResponseAmino;
}
/**
 * QueryFanTokensRequest is request type for the Query/FanTokens RPC method
 * @name QueryFanTokensRequest
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokensRequest
 */
export interface QueryFanTokensRequest {
  authority: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryFanTokensRequestProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokensRequest";
  value: Uint8Array;
}
/**
 * QueryFanTokensRequest is request type for the Query/FanTokens RPC method
 * @name QueryFanTokensRequestAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokensRequest
 */
export interface QueryFanTokensRequestAmino {
  authority: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryFanTokensRequestAminoMsg {
  type: "/bitsong.fantoken.v1beta1.QueryFanTokensRequest";
  value: QueryFanTokensRequestAmino;
}
/**
 * QueryFanTokensResponse is response type for the Query/FanTokens RPC method
 * @name QueryFanTokensResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokensResponse
 */
export interface QueryFanTokensResponse {
  fantokens: FanToken[];
  pagination?: PageResponse;
}
export interface QueryFanTokensResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokensResponse";
  value: Uint8Array;
}
/**
 * QueryFanTokensResponse is response type for the Query/FanTokens RPC method
 * @name QueryFanTokensResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokensResponse
 */
export interface QueryFanTokensResponseAmino {
  fantokens: FanTokenAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryFanTokensResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.QueryFanTokensResponse";
  value: QueryFanTokensResponseAmino;
}
/**
 * QueryParametersRequest is request type for the Query/Parameters RPC method
 * @name QueryParamsRequest
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParametersRequest is request type for the Query/Parameters RPC method
 * @name QueryParamsRequestAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bitsong.fantoken.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParametersResponse is response type for the Query/Parameters RPC method
 * @name QueryParamsResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParametersResponse is response type for the Query/Parameters RPC method
 * @name QueryParamsResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryFanTokenRequest(): QueryFanTokenRequest {
  return {
    denom: ""
  };
}
/**
 * QueryFanTokenRequest is request type for the Query/FanToken RPC method
 * @name QueryFanTokenRequest
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokenRequest
 */
export const QueryFanTokenRequest = {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokenRequest",
  is(o: any): o is QueryFanTokenRequest {
    return o && (o.$typeUrl === QueryFanTokenRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is QueryFanTokenRequestAmino {
    return o && (o.$typeUrl === QueryFanTokenRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: QueryFanTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFanTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFanTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFanTokenRequest>): QueryFanTokenRequest {
    const message = createBaseQueryFanTokenRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryFanTokenRequestAmino): QueryFanTokenRequest {
    const message = createBaseQueryFanTokenRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryFanTokenRequest): QueryFanTokenRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryFanTokenRequestAminoMsg): QueryFanTokenRequest {
    return QueryFanTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFanTokenRequestProtoMsg): QueryFanTokenRequest {
    return QueryFanTokenRequest.decode(message.value);
  },
  toProto(message: QueryFanTokenRequest): Uint8Array {
    return QueryFanTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFanTokenRequest): QueryFanTokenRequestProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokenRequest",
      value: QueryFanTokenRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryFanTokenResponse(): QueryFanTokenResponse {
  return {
    fantoken: undefined
  };
}
/**
 * QueryFanTokenResponse is response type for the Query/FanToken RPC method
 * @name QueryFanTokenResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokenResponse
 */
export const QueryFanTokenResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokenResponse",
  is(o: any): o is QueryFanTokenResponse {
    return o && o.$typeUrl === QueryFanTokenResponse.typeUrl;
  },
  isAmino(o: any): o is QueryFanTokenResponseAmino {
    return o && o.$typeUrl === QueryFanTokenResponse.typeUrl;
  },
  encode(message: QueryFanTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fantoken !== undefined) {
      FanToken.encode(message.fantoken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFanTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFanTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fantoken = FanToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFanTokenResponse>): QueryFanTokenResponse {
    const message = createBaseQueryFanTokenResponse();
    message.fantoken = object.fantoken !== undefined && object.fantoken !== null ? FanToken.fromPartial(object.fantoken) : undefined;
    return message;
  },
  fromAmino(object: QueryFanTokenResponseAmino): QueryFanTokenResponse {
    const message = createBaseQueryFanTokenResponse();
    if (object.fantoken !== undefined && object.fantoken !== null) {
      message.fantoken = FanToken.fromAmino(object.fantoken);
    }
    return message;
  },
  toAmino(message: QueryFanTokenResponse): QueryFanTokenResponseAmino {
    const obj: any = {};
    obj.fantoken = message.fantoken ? FanToken.toAmino(message.fantoken) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFanTokenResponseAminoMsg): QueryFanTokenResponse {
    return QueryFanTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFanTokenResponseProtoMsg): QueryFanTokenResponse {
    return QueryFanTokenResponse.decode(message.value);
  },
  toProto(message: QueryFanTokenResponse): Uint8Array {
    return QueryFanTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFanTokenResponse): QueryFanTokenResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokenResponse",
      value: QueryFanTokenResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFanTokenResponse.typeUrl)) {
      return;
    }
    FanToken.registerTypeUrl();
  }
};
function createBaseQueryFanTokensRequest(): QueryFanTokensRequest {
  return {
    authority: "",
    pagination: undefined
  };
}
/**
 * QueryFanTokensRequest is request type for the Query/FanTokens RPC method
 * @name QueryFanTokensRequest
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokensRequest
 */
export const QueryFanTokensRequest = {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokensRequest",
  is(o: any): o is QueryFanTokensRequest {
    return o && (o.$typeUrl === QueryFanTokensRequest.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is QueryFanTokensRequestAmino {
    return o && (o.$typeUrl === QueryFanTokensRequest.typeUrl || typeof o.authority === "string");
  },
  encode(message: QueryFanTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFanTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFanTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFanTokensRequest>): QueryFanTokensRequest {
    const message = createBaseQueryFanTokensRequest();
    message.authority = object.authority ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFanTokensRequestAmino): QueryFanTokensRequest {
    const message = createBaseQueryFanTokensRequest();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFanTokensRequest): QueryFanTokensRequestAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFanTokensRequestAminoMsg): QueryFanTokensRequest {
    return QueryFanTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFanTokensRequestProtoMsg): QueryFanTokensRequest {
    return QueryFanTokensRequest.decode(message.value);
  },
  toProto(message: QueryFanTokensRequest): Uint8Array {
    return QueryFanTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFanTokensRequest): QueryFanTokensRequestProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokensRequest",
      value: QueryFanTokensRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFanTokensRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryFanTokensResponse(): QueryFanTokensResponse {
  return {
    fantokens: [],
    pagination: undefined
  };
}
/**
 * QueryFanTokensResponse is response type for the Query/FanTokens RPC method
 * @name QueryFanTokensResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryFanTokensResponse
 */
export const QueryFanTokensResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokensResponse",
  is(o: any): o is QueryFanTokensResponse {
    return o && (o.$typeUrl === QueryFanTokensResponse.typeUrl || Array.isArray(o.fantokens) && (!o.fantokens.length || FanToken.is(o.fantokens[0])));
  },
  isAmino(o: any): o is QueryFanTokensResponseAmino {
    return o && (o.$typeUrl === QueryFanTokensResponse.typeUrl || Array.isArray(o.fantokens) && (!o.fantokens.length || FanToken.isAmino(o.fantokens[0])));
  },
  encode(message: QueryFanTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fantokens) {
      FanToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFanTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFanTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fantokens.push(FanToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFanTokensResponse>): QueryFanTokensResponse {
    const message = createBaseQueryFanTokensResponse();
    message.fantokens = object.fantokens?.map(e => FanToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryFanTokensResponseAmino): QueryFanTokensResponse {
    const message = createBaseQueryFanTokensResponse();
    message.fantokens = object.fantokens?.map(e => FanToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFanTokensResponse): QueryFanTokensResponseAmino {
    const obj: any = {};
    if (message.fantokens) {
      obj.fantokens = message.fantokens.map(e => e ? FanToken.toAmino(e) : undefined);
    } else {
      obj.fantokens = message.fantokens;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFanTokensResponseAminoMsg): QueryFanTokensResponse {
    return QueryFanTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFanTokensResponseProtoMsg): QueryFanTokensResponse {
    return QueryFanTokensResponse.decode(message.value);
  },
  toProto(message: QueryFanTokensResponse): Uint8Array {
    return QueryFanTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFanTokensResponse): QueryFanTokensResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.QueryFanTokensResponse",
      value: QueryFanTokensResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryFanTokensResponse.typeUrl)) {
      return;
    }
    FanToken.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParametersRequest is request type for the Query/Parameters RPC method
 * @name QueryParamsRequest
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParametersResponse is response type for the Query/Parameters RPC method
 * @name QueryParamsResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};