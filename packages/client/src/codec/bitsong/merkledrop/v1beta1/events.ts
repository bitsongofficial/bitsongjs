/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.merkledrop.v1beta1';

export interface EventCreate {
  $type: 'bitsong.merkledrop.v1beta1.EventCreate';
  owner: string;
  merkledropId: Long;
}

export interface EventClaim {
  $type: 'bitsong.merkledrop.v1beta1.EventClaim';
  merkledropId: Long;
  index: Long;
  coin?: Coin;
}

export interface EventWithdraw {
  $type: 'bitsong.merkledrop.v1beta1.EventWithdraw';
  merkledropId: Long;
  coin?: Coin;
}

function createBaseEventCreate(): EventCreate {
  return {
    $type: 'bitsong.merkledrop.v1beta1.EventCreate',
    owner: '',
    merkledropId: Long.UZERO,
  };
}

export const EventCreate = {
  $type: 'bitsong.merkledrop.v1beta1.EventCreate' as const,

  encode(
    message: EventCreate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    if (!message.merkledropId.isZero()) {
      writer.uint32(16).uint64(message.merkledropId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.merkledropId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreate {
    return {
      $type: EventCreate.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
      merkledropId: isSet(object.merkledropId)
        ? Long.fromValue(object.merkledropId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.merkledropId !== undefined &&
      (obj.merkledropId = (message.merkledropId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreate>, I>>(
    object: I,
  ): EventCreate {
    const message = createBaseEventCreate();
    message.owner = object.owner ?? '';
    message.merkledropId =
      object.merkledropId !== undefined && object.merkledropId !== null
        ? Long.fromValue(object.merkledropId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCreate.$type, EventCreate);

function createBaseEventClaim(): EventClaim {
  return {
    $type: 'bitsong.merkledrop.v1beta1.EventClaim',
    merkledropId: Long.UZERO,
    index: Long.UZERO,
    coin: undefined,
  };
}

export const EventClaim = {
  $type: 'bitsong.merkledrop.v1beta1.EventClaim' as const,

  encode(
    message: EventClaim,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.merkledropId.isZero()) {
      writer.uint32(8).uint64(message.merkledropId);
    }
    if (!message.index.isZero()) {
      writer.uint32(16).uint64(message.index);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkledropId = reader.uint64() as Long;
          break;
        case 2:
          message.index = reader.uint64() as Long;
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventClaim {
    return {
      $type: EventClaim.$type,
      merkledropId: isSet(object.merkledropId)
        ? Long.fromValue(object.merkledropId)
        : Long.UZERO,
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: EventClaim): unknown {
    const obj: any = {};
    message.merkledropId !== undefined &&
      (obj.merkledropId = (message.merkledropId || Long.UZERO).toString());
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaim>, I>>(
    object: I,
  ): EventClaim {
    const message = createBaseEventClaim();
    message.merkledropId =
      object.merkledropId !== undefined && object.merkledropId !== null
        ? Long.fromValue(object.merkledropId)
        : Long.UZERO;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EventClaim.$type, EventClaim);

function createBaseEventWithdraw(): EventWithdraw {
  return {
    $type: 'bitsong.merkledrop.v1beta1.EventWithdraw',
    merkledropId: Long.UZERO,
    coin: undefined,
  };
}

export const EventWithdraw = {
  $type: 'bitsong.merkledrop.v1beta1.EventWithdraw' as const,

  encode(
    message: EventWithdraw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.merkledropId.isZero()) {
      writer.uint32(8).uint64(message.merkledropId);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkledropId = reader.uint64() as Long;
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdraw {
    return {
      $type: EventWithdraw.$type,
      merkledropId: isSet(object.merkledropId)
        ? Long.fromValue(object.merkledropId)
        : Long.UZERO,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.merkledropId !== undefined &&
      (obj.merkledropId = (message.merkledropId || Long.UZERO).toString());
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdraw>, I>>(
    object: I,
  ): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.merkledropId =
      object.merkledropId !== undefined && object.merkledropId !== null
        ? Long.fromValue(object.merkledropId)
        : Long.UZERO;
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(EventWithdraw.$type, EventWithdraw);

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
