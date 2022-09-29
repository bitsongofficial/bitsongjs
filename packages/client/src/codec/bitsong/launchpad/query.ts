/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import { LaunchPad, Params, MintableMetadataIds } from './launchpad';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.launchpad.v1beta1';

export interface QueryLaunchPadsRequest {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadsRequest';
}

export interface QueryLaunchPadsResponse {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadsResponse';
  pads: LaunchPad[];
}

export interface QueryLaunchPadRequest {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadRequest';
  collId: Long;
}

export interface QueryLaunchPadResponse {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadResponse';
  pad?: LaunchPad;
}

export interface QueryParamsRequest {
  $type: 'bitsong.launchpad.v1beta1.QueryParamsRequest';
}

export interface QueryParamsResponse {
  $type: 'bitsong.launchpad.v1beta1.QueryParamsResponse';
  params?: Params;
}

export interface QueryMintableMetadataIdsRequest {
  $type: 'bitsong.launchpad.v1beta1.QueryMintableMetadataIdsRequest';
  collId: Long;
}

export interface QueryMintableMetadataIdsResponse {
  $type: 'bitsong.launchpad.v1beta1.QueryMintableMetadataIdsResponse';
  info?: MintableMetadataIds;
}

function createBaseQueryLaunchPadsRequest(): QueryLaunchPadsRequest {
  return { $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadsRequest' };
}

export const QueryLaunchPadsRequest = {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadsRequest' as const,

  encode(
    _: QueryLaunchPadsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryLaunchPadsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLaunchPadsRequest();
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

  fromJSON(_: any): QueryLaunchPadsRequest {
    return {
      $type: QueryLaunchPadsRequest.$type,
    };
  },

  toJSON(_: QueryLaunchPadsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLaunchPadsRequest>, I>>(
    _: I,
  ): QueryLaunchPadsRequest {
    const message = createBaseQueryLaunchPadsRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryLaunchPadsRequest.$type, QueryLaunchPadsRequest);

function createBaseQueryLaunchPadsResponse(): QueryLaunchPadsResponse {
  return {
    $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadsResponse',
    pads: [],
  };
}

export const QueryLaunchPadsResponse = {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadsResponse' as const,

  encode(
    message: QueryLaunchPadsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pads) {
      LaunchPad.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryLaunchPadsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLaunchPadsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pads.push(LaunchPad.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLaunchPadsResponse {
    return {
      $type: QueryLaunchPadsResponse.$type,
      pads: Array.isArray(object?.pads)
        ? object.pads.map((e: any) => LaunchPad.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryLaunchPadsResponse): unknown {
    const obj: any = {};
    if (message.pads) {
      obj.pads = message.pads.map(e => (e ? LaunchPad.toJSON(e) : undefined));
    } else {
      obj.pads = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLaunchPadsResponse>, I>>(
    object: I,
  ): QueryLaunchPadsResponse {
    const message = createBaseQueryLaunchPadsResponse();
    message.pads = object.pads?.map(e => LaunchPad.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryLaunchPadsResponse.$type, QueryLaunchPadsResponse);

function createBaseQueryLaunchPadRequest(): QueryLaunchPadRequest {
  return {
    $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadRequest',
    collId: Long.UZERO,
  };
}

export const QueryLaunchPadRequest = {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadRequest' as const,

  encode(
    message: QueryLaunchPadRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collId.isZero()) {
      writer.uint32(8).uint64(message.collId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryLaunchPadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLaunchPadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLaunchPadRequest {
    return {
      $type: QueryLaunchPadRequest.$type,
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
    };
  },

  toJSON(message: QueryLaunchPadRequest): unknown {
    const obj: any = {};
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLaunchPadRequest>, I>>(
    object: I,
  ): QueryLaunchPadRequest {
    const message = createBaseQueryLaunchPadRequest();
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryLaunchPadRequest.$type, QueryLaunchPadRequest);

function createBaseQueryLaunchPadResponse(): QueryLaunchPadResponse {
  return {
    $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadResponse',
    pad: undefined,
  };
}

export const QueryLaunchPadResponse = {
  $type: 'bitsong.launchpad.v1beta1.QueryLaunchPadResponse' as const,

  encode(
    message: QueryLaunchPadResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pad !== undefined) {
      LaunchPad.encode(message.pad, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryLaunchPadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLaunchPadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pad = LaunchPad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLaunchPadResponse {
    return {
      $type: QueryLaunchPadResponse.$type,
      pad: isSet(object.pad) ? LaunchPad.fromJSON(object.pad) : undefined,
    };
  },

  toJSON(message: QueryLaunchPadResponse): unknown {
    const obj: any = {};
    message.pad !== undefined &&
      (obj.pad = message.pad ? LaunchPad.toJSON(message.pad) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLaunchPadResponse>, I>>(
    object: I,
  ): QueryLaunchPadResponse {
    const message = createBaseQueryLaunchPadResponse();
    message.pad =
      object.pad !== undefined && object.pad !== null
        ? LaunchPad.fromPartial(object.pad)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryLaunchPadResponse.$type, QueryLaunchPadResponse);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'bitsong.launchpad.v1beta1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'bitsong.launchpad.v1beta1.QueryParamsRequest' as const,

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
    $type: 'bitsong.launchpad.v1beta1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'bitsong.launchpad.v1beta1.QueryParamsResponse' as const,

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

function createBaseQueryMintableMetadataIdsRequest(): QueryMintableMetadataIdsRequest {
  return {
    $type: 'bitsong.launchpad.v1beta1.QueryMintableMetadataIdsRequest',
    collId: Long.UZERO,
  };
}

export const QueryMintableMetadataIdsRequest = {
  $type: 'bitsong.launchpad.v1beta1.QueryMintableMetadataIdsRequest' as const,

  encode(
    message: QueryMintableMetadataIdsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collId.isZero()) {
      writer.uint32(8).uint64(message.collId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryMintableMetadataIdsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintableMetadataIdsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintableMetadataIdsRequest {
    return {
      $type: QueryMintableMetadataIdsRequest.$type,
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
    };
  },

  toJSON(message: QueryMintableMetadataIdsRequest): unknown {
    const obj: any = {};
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMintableMetadataIdsRequest>, I>>(
    object: I,
  ): QueryMintableMetadataIdsRequest {
    const message = createBaseQueryMintableMetadataIdsRequest();
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  QueryMintableMetadataIdsRequest.$type,
  QueryMintableMetadataIdsRequest,
);

function createBaseQueryMintableMetadataIdsResponse(): QueryMintableMetadataIdsResponse {
  return {
    $type: 'bitsong.launchpad.v1beta1.QueryMintableMetadataIdsResponse',
    info: undefined,
  };
}

export const QueryMintableMetadataIdsResponse = {
  $type: 'bitsong.launchpad.v1beta1.QueryMintableMetadataIdsResponse' as const,

  encode(
    message: QueryMintableMetadataIdsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.info !== undefined) {
      MintableMetadataIds.encode(
        message.info,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryMintableMetadataIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMintableMetadataIdsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = MintableMetadataIds.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintableMetadataIdsResponse {
    return {
      $type: QueryMintableMetadataIdsResponse.$type,
      info: isSet(object.info)
        ? MintableMetadataIds.fromJSON(object.info)
        : undefined,
    };
  },

  toJSON(message: QueryMintableMetadataIdsResponse): unknown {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info
        ? MintableMetadataIds.toJSON(message.info)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryMintableMetadataIdsResponse>, I>,
  >(object: I): QueryMintableMetadataIdsResponse {
    const message = createBaseQueryMintableMetadataIdsResponse();
    message.info =
      object.info !== undefined && object.info !== null
        ? MintableMetadataIds.fromPartial(object.info)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryMintableMetadataIdsResponse.$type,
  QueryMintableMetadataIdsResponse,
);

/** Query creates service with launchpad as RPC */
export interface Query {
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  LaunchPads(request: QueryLaunchPadsRequest): Promise<QueryLaunchPadsResponse>;
  LaunchPad(request: QueryLaunchPadRequest): Promise<QueryLaunchPadResponse>;
  MintableMetadataIds(
    request: QueryMintableMetadataIdsRequest,
  ): Promise<QueryMintableMetadataIdsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.LaunchPads = this.LaunchPads.bind(this);
    this.LaunchPad = this.LaunchPad.bind(this);
    this.MintableMetadataIds = this.MintableMetadataIds.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.launchpad.v1beta1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  LaunchPads(
    request: QueryLaunchPadsRequest,
  ): Promise<QueryLaunchPadsResponse> {
    const data = QueryLaunchPadsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.launchpad.v1beta1.Query',
      'LaunchPads',
      data,
    );
    return promise.then(data =>
      QueryLaunchPadsResponse.decode(new _m0.Reader(data)),
    );
  }

  LaunchPad(request: QueryLaunchPadRequest): Promise<QueryLaunchPadResponse> {
    const data = QueryLaunchPadRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.launchpad.v1beta1.Query',
      'LaunchPad',
      data,
    );
    return promise.then(data =>
      QueryLaunchPadResponse.decode(new _m0.Reader(data)),
    );
  }

  MintableMetadataIds(
    request: QueryMintableMetadataIdsRequest,
  ): Promise<QueryMintableMetadataIdsResponse> {
    const data = QueryMintableMetadataIdsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.launchpad.v1beta1.Query',
      'MintableMetadataIds',
      data,
    );
    return promise.then(data =>
      QueryMintableMetadataIdsResponse.decode(new _m0.Reader(data)),
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
