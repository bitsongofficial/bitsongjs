/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "bitsong.merkledrop.v1beta1";

export interface EventCreate {
  owner: string;
  merkledropId: string;
}

export interface EventClaim {
  merkledropId: string;
  index: string;
  coin?: Coin;
}

export interface EventWithdraw {
  merkledropId: string;
  coin?: Coin;
}

function createBaseEventCreate(): EventCreate {
  return { owner: "", merkledropId: "0" };
}

export const EventCreate = {
  encode(
    message: EventCreate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.merkledropId !== "0") {
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
          message.merkledropId = longToString(reader.uint64() as Long);
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
      owner: isSet(object.owner) ? String(object.owner) : "",
      merkledropId: isSet(object.merkledropId)
        ? String(object.merkledropId)
        : "0",
    };
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.merkledropId !== undefined &&
      (obj.merkledropId = message.merkledropId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreate>, I>>(
    object: I,
  ): EventCreate {
    const message = createBaseEventCreate();
    message.owner = object.owner ?? "";
    message.merkledropId = object.merkledropId ?? "0";
    return message;
  },
};

function createBaseEventClaim(): EventClaim {
  return { merkledropId: "0", index: "0", coin: undefined };
}

export const EventClaim = {
  encode(
    message: EventClaim,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.merkledropId !== "0") {
      writer.uint32(8).uint64(message.merkledropId);
    }
    if (message.index !== "0") {
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
          message.merkledropId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.index = longToString(reader.uint64() as Long);
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
      merkledropId: isSet(object.merkledropId)
        ? String(object.merkledropId)
        : "0",
      index: isSet(object.index) ? String(object.index) : "0",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: EventClaim): unknown {
    const obj: any = {};
    message.merkledropId !== undefined &&
      (obj.merkledropId = message.merkledropId);
    message.index !== undefined && (obj.index = message.index);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaim>, I>>(
    object: I,
  ): EventClaim {
    const message = createBaseEventClaim();
    message.merkledropId = object.merkledropId ?? "0";
    message.index = object.index ?? "0";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseEventWithdraw(): EventWithdraw {
  return { merkledropId: "0", coin: undefined };
}

export const EventWithdraw = {
  encode(
    message: EventWithdraw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.merkledropId !== "0") {
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
          message.merkledropId = longToString(reader.uint64() as Long);
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
      merkledropId: isSet(object.merkledropId)
        ? String(object.merkledropId)
        : "0",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.merkledropId !== undefined &&
      (obj.merkledropId = message.merkledropId);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventWithdraw>, I>>(
    object: I,
  ): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.merkledropId = object.merkledropId ?? "0";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

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
