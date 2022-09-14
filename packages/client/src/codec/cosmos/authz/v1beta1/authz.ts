/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Any } from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.authz.v1beta1';

/** Since: cosmos-sdk 0.43 */

/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  $type: 'cosmos.authz.v1beta1.GenericAuthorization';
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}

/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  $type: 'cosmos.authz.v1beta1.Grant';
  authorization?: Any;
  expiration?: Timestamp;
}

/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorization {
  $type: 'cosmos.authz.v1beta1.GrantAuthorization';
  granter: string;
  grantee: string;
  authorization?: Any;
  expiration?: Timestamp;
}

function createBaseGenericAuthorization(): GenericAuthorization {
  return { $type: 'cosmos.authz.v1beta1.GenericAuthorization', msg: '' };
}

export const GenericAuthorization = {
  $type: 'cosmos.authz.v1beta1.GenericAuthorization' as const,

  encode(
    message: GenericAuthorization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.msg !== '') {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): GenericAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenericAuthorization {
    return {
      $type: GenericAuthorization.$type,
      msg: isSet(object.msg) ? String(object.msg) : '',
    };
  },

  toJSON(message: GenericAuthorization): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenericAuthorization>, I>>(
    object: I,
  ): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? '';
    return message;
  },
};

messageTypeRegistry.set(GenericAuthorization.$type, GenericAuthorization);

function createBaseGrant(): Grant {
  return {
    $type: 'cosmos.authz.v1beta1.Grant',
    authorization: undefined,
    expiration: undefined,
  };
}

export const Grant = {
  $type: 'cosmos.authz.v1beta1.Grant' as const,

  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Grant {
    return {
      $type: Grant.$type,
      authorization: isSet(object.authorization)
        ? Any.fromJSON(object.authorization)
        : undefined,
      expiration: isSet(object.expiration)
        ? fromJsonTimestamp(object.expiration)
        : undefined,
    };
  },

  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined);
    message.expiration !== undefined &&
      (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant();
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
        : undefined;
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? Timestamp.fromPartial(object.expiration)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Grant.$type, Grant);

function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    $type: 'cosmos.authz.v1beta1.GrantAuthorization',
    granter: '',
    grantee: '',
    authorization: undefined,
    expiration: undefined,
  };
}

export const GrantAuthorization = {
  $type: 'cosmos.authz.v1beta1.GrantAuthorization' as const,

  encode(
    message: GrantAuthorization,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GrantAuthorization {
    return {
      $type: GrantAuthorization.$type,
      granter: isSet(object.granter) ? String(object.granter) : '',
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
      authorization: isSet(object.authorization)
        ? Any.fromJSON(object.authorization)
        : undefined,
      expiration: isSet(object.expiration)
        ? fromJsonTimestamp(object.expiration)
        : undefined,
    };
  },

  toJSON(message: GrantAuthorization): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined);
    message.expiration !== undefined &&
      (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrantAuthorization>, I>>(
    object: I,
  ): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    message.authorization =
      object.authorization !== undefined && object.authorization !== null
        ? Any.fromPartial(object.authorization)
        : undefined;
    message.expiration =
      object.expiration !== undefined && object.expiration !== null
        ? Timestamp.fromPartial(object.expiration)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(GrantAuthorization.$type, GrantAuthorization);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === 'string') {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
