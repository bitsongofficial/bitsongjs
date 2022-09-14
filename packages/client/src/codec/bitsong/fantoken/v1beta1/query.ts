/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { FanToken } from './fantoken';
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Params } from './params';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.fantoken.v1beta1';

/** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
export interface QueryFanTokenRequest {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokenRequest';
  denom: string;
}

/** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
export interface QueryFanTokenResponse {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokenResponse';
  fantoken?: FanToken;
}

/** QueryFanTokensRequest is request type for the Query/FanTokens RPC method */
export interface QueryFanTokensRequest {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokensRequest';
  authority: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryFanTokensResponse is response type for the Query/FanTokens RPC method */
export interface QueryFanTokensResponse {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokensResponse';
  fantokens: FanToken[];
  pagination?: PageResponse;
}

/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
  $type: 'bitsong.fantoken.v1beta1.QueryParamsRequest';
}

/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
  $type: 'bitsong.fantoken.v1beta1.QueryParamsResponse';
  params?: Params;
}

function createBaseQueryFanTokenRequest(): QueryFanTokenRequest {
  return { $type: 'bitsong.fantoken.v1beta1.QueryFanTokenRequest', denom: '' };
}

export const QueryFanTokenRequest = {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokenRequest' as const,

  encode(
    message: QueryFanTokenRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryFanTokenRequest {
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

  fromJSON(object: any): QueryFanTokenRequest {
    return {
      $type: QueryFanTokenRequest.$type,
      denom: isSet(object.denom) ? String(object.denom) : '',
    };
  },

  toJSON(message: QueryFanTokenRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFanTokenRequest>, I>>(
    object: I,
  ): QueryFanTokenRequest {
    const message = createBaseQueryFanTokenRequest();
    message.denom = object.denom ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryFanTokenRequest.$type, QueryFanTokenRequest);

function createBaseQueryFanTokenResponse(): QueryFanTokenResponse {
  return {
    $type: 'bitsong.fantoken.v1beta1.QueryFanTokenResponse',
    fantoken: undefined,
  };
}

export const QueryFanTokenResponse = {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokenResponse' as const,

  encode(
    message: QueryFanTokenResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fantoken !== undefined) {
      FanToken.encode(message.fantoken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryFanTokenResponse {
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

  fromJSON(object: any): QueryFanTokenResponse {
    return {
      $type: QueryFanTokenResponse.$type,
      fantoken: isSet(object.fantoken)
        ? FanToken.fromJSON(object.fantoken)
        : undefined,
    };
  },

  toJSON(message: QueryFanTokenResponse): unknown {
    const obj: any = {};
    message.fantoken !== undefined &&
      (obj.fantoken = message.fantoken
        ? FanToken.toJSON(message.fantoken)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFanTokenResponse>, I>>(
    object: I,
  ): QueryFanTokenResponse {
    const message = createBaseQueryFanTokenResponse();
    message.fantoken =
      object.fantoken !== undefined && object.fantoken !== null
        ? FanToken.fromPartial(object.fantoken)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryFanTokenResponse.$type, QueryFanTokenResponse);

function createBaseQueryFanTokensRequest(): QueryFanTokensRequest {
  return {
    $type: 'bitsong.fantoken.v1beta1.QueryFanTokensRequest',
    authority: '',
    pagination: undefined,
  };
}

export const QueryFanTokensRequest = {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokensRequest' as const,

  encode(
    message: QueryFanTokensRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryFanTokensRequest {
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

  fromJSON(object: any): QueryFanTokensRequest {
    return {
      $type: QueryFanTokensRequest.$type,
      authority: isSet(object.authority) ? String(object.authority) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryFanTokensRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFanTokensRequest>, I>>(
    object: I,
  ): QueryFanTokensRequest {
    const message = createBaseQueryFanTokensRequest();
    message.authority = object.authority ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryFanTokensRequest.$type, QueryFanTokensRequest);

function createBaseQueryFanTokensResponse(): QueryFanTokensResponse {
  return {
    $type: 'bitsong.fantoken.v1beta1.QueryFanTokensResponse',
    fantokens: [],
    pagination: undefined,
  };
}

export const QueryFanTokensResponse = {
  $type: 'bitsong.fantoken.v1beta1.QueryFanTokensResponse' as const,

  encode(
    message: QueryFanTokensResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.fantokens) {
      FanToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryFanTokensResponse {
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

  fromJSON(object: any): QueryFanTokensResponse {
    return {
      $type: QueryFanTokensResponse.$type,
      fantokens: Array.isArray(object?.fantokens)
        ? object.fantokens.map((e: any) => FanToken.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryFanTokensResponse): unknown {
    const obj: any = {};
    if (message.fantokens) {
      obj.fantokens = message.fantokens.map(e =>
        e ? FanToken.toJSON(e) : undefined,
      );
    } else {
      obj.fantokens = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFanTokensResponse>, I>>(
    object: I,
  ): QueryFanTokensResponse {
    const message = createBaseQueryFanTokensResponse();
    message.fantokens =
      object.fantokens?.map(e => FanToken.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryFanTokensResponse.$type, QueryFanTokensResponse);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'bitsong.fantoken.v1beta1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'bitsong.fantoken.v1beta1.QueryParamsRequest' as const,

  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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

  fromJSON(_: any): QueryParamsRequest {
    return {
      $type: QueryParamsRequest.$type,
    };
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest);

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    $type: 'bitsong.fantoken.v1beta1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'bitsong.fantoken.v1beta1.QueryParamsResponse' as const,

  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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

  fromJSON(object: any): QueryParamsResponse {
    return {
      $type: QueryParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse);

/** Query creates service with fantoken as RPC */
export interface Query {
  /** FanToken returns fantoken with fantoken name */
  FanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse>;
  /** FanTokens returns the fantoken list */
  FanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse>;
  /** Params queries the fantoken parameters */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FanToken = this.FanToken.bind(this);
    this.FanTokens = this.FanTokens.bind(this);
    this.Params = this.Params.bind(this);
  }
  FanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse> {
    const data = QueryFanTokenRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.fantoken.v1beta1.Query',
      'FanToken',
      data,
    );
    return promise.then(data =>
      QueryFanTokenResponse.decode(new _m0.Reader(data)),
    );
  }

  FanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse> {
    const data = QueryFanTokensRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.fantoken.v1beta1.Query',
      'FanTokens',
      data,
    );
    return promise.then(data =>
      QueryFanTokensResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.fantoken.v1beta1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | '$type'>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
