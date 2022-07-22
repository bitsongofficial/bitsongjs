/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { Merkledrop } from "./merkledrop";
import { Params } from "./params";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "bitsong.merkledrop.v1beta1";

export interface QueryMerkledropRequest {
  id: string;
}

export interface QueryMerkledropResponse {
  merkledrop?: Merkledrop;
}

export interface QueryIndexClaimedRequest {
  id: string;
  index: string;
}

export interface QueryIndexClaimedResponse {
  isClaimed: boolean;
}

/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {}

/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
  params?: Params;
}

function createBaseQueryMerkledropRequest(): QueryMerkledropRequest {
  return { id: "0" };
}

export const QueryMerkledropRequest = {
  encode(
    message: QueryMerkledropRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryMerkledropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkledropRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMerkledropRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
    };
  },

  toJSON(message: QueryMerkledropRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMerkledropRequest>, I>>(
    object: I,
  ): QueryMerkledropRequest {
    const message = createBaseQueryMerkledropRequest();
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseQueryMerkledropResponse(): QueryMerkledropResponse {
  return { merkledrop: undefined };
}

export const QueryMerkledropResponse = {
  encode(
    message: QueryMerkledropResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.merkledrop !== undefined) {
      Merkledrop.encode(message.merkledrop, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryMerkledropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkledropResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkledrop = Merkledrop.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMerkledropResponse {
    return {
      merkledrop: isSet(object.merkledrop)
        ? Merkledrop.fromJSON(object.merkledrop)
        : undefined,
    };
  },

  toJSON(message: QueryMerkledropResponse): unknown {
    const obj: any = {};
    message.merkledrop !== undefined &&
      (obj.merkledrop = message.merkledrop
        ? Merkledrop.toJSON(message.merkledrop)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMerkledropResponse>, I>>(
    object: I,
  ): QueryMerkledropResponse {
    const message = createBaseQueryMerkledropResponse();
    message.merkledrop =
      object.merkledrop !== undefined && object.merkledrop !== null
        ? Merkledrop.fromPartial(object.merkledrop)
        : undefined;
    return message;
  },
};

function createBaseQueryIndexClaimedRequest(): QueryIndexClaimedRequest {
  return { id: "0", index: "0" };
}

export const QueryIndexClaimedRequest = {
  encode(
    message: QueryIndexClaimedRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.index !== "0") {
      writer.uint32(16).uint64(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryIndexClaimedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIndexClaimedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.index = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIndexClaimedRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      index: isSet(object.index) ? String(object.index) : "0",
    };
  },

  toJSON(message: QueryIndexClaimedRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIndexClaimedRequest>, I>>(
    object: I,
  ): QueryIndexClaimedRequest {
    const message = createBaseQueryIndexClaimedRequest();
    message.id = object.id ?? "0";
    message.index = object.index ?? "0";
    return message;
  },
};

function createBaseQueryIndexClaimedResponse(): QueryIndexClaimedResponse {
  return { isClaimed: false };
}

export const QueryIndexClaimedResponse = {
  encode(
    message: QueryIndexClaimedResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.isClaimed === true) {
      writer.uint32(8).bool(message.isClaimed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryIndexClaimedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIndexClaimedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIndexClaimedResponse {
    return {
      isClaimed: isSet(object.isClaimed) ? Boolean(object.isClaimed) : false,
    };
  },

  toJSON(message: QueryIndexClaimedResponse): unknown {
    const obj: any = {};
    message.isClaimed !== undefined && (obj.isClaimed = message.isClaimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIndexClaimedResponse>, I>>(
    object: I,
  ): QueryIndexClaimedResponse {
    const message = createBaseQueryIndexClaimedResponse();
    message.isClaimed = object.isClaimed ?? false;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
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
    return {};
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

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
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

export interface Query {
  merkledrop(
    request: DeepPartial<QueryMerkledropRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryMerkledropResponse>;
  indexClaimed(
    request: DeepPartial<QueryIndexClaimedRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIndexClaimedResponse>;
  /** Params queries the fantoken parameters */
  params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.merkledrop = this.merkledrop.bind(this);
    this.indexClaimed = this.indexClaimed.bind(this);
    this.params = this.params.bind(this);
  }

  merkledrop(
    request: DeepPartial<QueryMerkledropRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryMerkledropResponse> {
    return this.rpc.unary(
      QueryMerkledropDesc,
      QueryMerkledropRequest.fromPartial(request),
      metadata,
    );
  }

  indexClaimed(
    request: DeepPartial<QueryIndexClaimedRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryIndexClaimedResponse> {
    return this.rpc.unary(
      QueryIndexClaimedDesc,
      QueryIndexClaimedRequest.fromPartial(request),
      metadata,
    );
  }

  params(
    request: DeepPartial<QueryParamsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryParamsResponse> {
    return this.rpc.unary(
      QueryParamsDesc,
      QueryParamsRequest.fromPartial(request),
      metadata,
    );
  }
}

export const QueryDesc = {
  serviceName: "bitsong.merkledrop.v1beta1.Query",
};

export const QueryMerkledropDesc: UnaryMethodDefinitionish = {
  methodName: "Merkledrop",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryMerkledropRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryMerkledropResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryIndexClaimedDesc: UnaryMethodDefinitionish = {
  methodName: "IndexClaimed",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIndexClaimedRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryIndexClaimedResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
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
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
