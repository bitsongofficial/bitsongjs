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

export interface QueryParamsRequest {}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */

export interface QueryParamsRequestSDKType {}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */

export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}

function createBaseQueryFanTokenRequest(): QueryFanTokenRequest {
  return {
    denom: ""
  };
}

export const QueryFanTokenRequest = {
  encode(message: QueryFanTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }

};

function createBaseQueryFanTokenResponse(): QueryFanTokenResponse {
  return {
    fantoken: undefined
  };
}

export const QueryFanTokenResponse = {
  encode(message: QueryFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fantoken !== undefined) {
      FanToken.encode(message.fantoken, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }

};

function createBaseQueryFanTokensRequest(): QueryFanTokensRequest {
  return {
    authority: "",
    pagination: undefined
  };
}

export const QueryFanTokensRequest = {
  encode(message: QueryFanTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }

};

function createBaseQueryFanTokensResponse(): QueryFanTokensResponse {
  return {
    fantokens: [],
    pagination: undefined
  };
}

export const QueryFanTokensResponse = {
  encode(message: QueryFanTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.fantokens) {
      FanToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }

};