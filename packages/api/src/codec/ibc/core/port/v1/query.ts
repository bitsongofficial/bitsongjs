/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import {
  Order,
  Counterparty,
  orderFromJSON,
  orderToJSON,
} from '../../channel/v1/channel';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'ibc.core.port.v1';

/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
  $type: 'ibc.core.port.v1.QueryAppVersionRequest';
  /** port unique identifier */
  portId: string;
  /** connection unique identifier */
  connectionId: string;
  /** whether the channel is ordered or unordered */
  ordering: Order;
  /** counterparty channel end */
  counterparty?: Counterparty;
  /** proposed version */
  proposedVersion: string;
}

/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
  $type: 'ibc.core.port.v1.QueryAppVersionResponse';
  /** port id associated with the request identifiers */
  portId: string;
  /** supported app version */
  version: string;
}

function createBaseQueryAppVersionRequest(): QueryAppVersionRequest {
  return {
    $type: 'ibc.core.port.v1.QueryAppVersionRequest',
    portId: '',
    connectionId: '',
    ordering: 0,
    counterparty: undefined,
    proposedVersion: '',
  };
}

export const QueryAppVersionRequest = {
  $type: 'ibc.core.port.v1.QueryAppVersionRequest' as const,

  encode(
    message: QueryAppVersionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }
    if (message.connectionId !== '') {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.ordering !== 0) {
      writer.uint32(24).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(
        message.counterparty,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.proposedVersion !== '') {
      writer.uint32(42).string(message.proposedVersion);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAppVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.ordering = reader.int32() as any;
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.proposedVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppVersionRequest {
    return {
      $type: QueryAppVersionRequest.$type,
      portId: isSet(object.portId) ? String(object.portId) : '',
      connectionId: isSet(object.connectionId)
        ? String(object.connectionId)
        : '',
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
      counterparty: isSet(object.counterparty)
        ? Counterparty.fromJSON(object.counterparty)
        : undefined,
      proposedVersion: isSet(object.proposedVersion)
        ? String(object.proposedVersion)
        : '',
    };
  },

  toJSON(message: QueryAppVersionRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    message.ordering !== undefined &&
      (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty
        ? Counterparty.toJSON(message.counterparty)
        : undefined);
    message.proposedVersion !== undefined &&
      (obj.proposedVersion = message.proposedVersion);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppVersionRequest>, I>>(
    object: I,
  ): QueryAppVersionRequest {
    const message = createBaseQueryAppVersionRequest();
    message.portId = object.portId ?? '';
    message.connectionId = object.connectionId ?? '';
    message.ordering = object.ordering ?? 0;
    message.counterparty =
      object.counterparty !== undefined && object.counterparty !== null
        ? Counterparty.fromPartial(object.counterparty)
        : undefined;
    message.proposedVersion = object.proposedVersion ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryAppVersionRequest.$type, QueryAppVersionRequest);

function createBaseQueryAppVersionResponse(): QueryAppVersionResponse {
  return {
    $type: 'ibc.core.port.v1.QueryAppVersionResponse',
    portId: '',
    version: '',
  };
}

export const QueryAppVersionResponse = {
  $type: 'ibc.core.port.v1.QueryAppVersionResponse' as const,

  encode(
    message: QueryAppVersionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }
    if (message.version !== '') {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAppVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppVersionResponse {
    return {
      $type: QueryAppVersionResponse.$type,
      portId: isSet(object.portId) ? String(object.portId) : '',
      version: isSet(object.version) ? String(object.version) : '',
    };
  },

  toJSON(message: QueryAppVersionResponse): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAppVersionResponse>, I>>(
    object: I,
  ): QueryAppVersionResponse {
    const message = createBaseQueryAppVersionResponse();
    message.portId = object.portId ?? '';
    message.version = object.version ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryAppVersionResponse.$type, QueryAppVersionResponse);

/** Query defines the gRPC querier service */
export interface Query {
  /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
  AppVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AppVersion = this.AppVersion.bind(this);
  }
  AppVersion(
    request: QueryAppVersionRequest,
  ): Promise<QueryAppVersionResponse> {
    const data = QueryAppVersionRequest.encode(request).finish();
    const promise = this.rpc.request(
      'ibc.core.port.v1.Query',
      'AppVersion',
      data,
    );
    return promise.then(data =>
      QueryAppVersionResponse.decode(new _m0.Reader(data)),
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
