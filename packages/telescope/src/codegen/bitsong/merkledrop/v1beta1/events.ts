import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface EventCreate {
  owner: string;
  merkledropId: Long;
}
export interface EventCreateSDKType {
  owner: string;
  merkledrop_id: Long;
}
export interface EventClaim {
  merkledropId: Long;
  index: Long;
  coin?: Coin;
}
export interface EventClaimSDKType {
  merkledrop_id: Long;
  index: Long;
  coin?: CoinSDKType;
}
export interface EventWithdraw {
  merkledropId: Long;
  coin?: Coin;
}
export interface EventWithdrawSDKType {
  merkledrop_id: Long;
  coin?: CoinSDKType;
}

function createBaseEventCreate(): EventCreate {
  return {
    owner: "",
    merkledropId: Long.UZERO
  };
}

export const EventCreate = {
  encode(message: EventCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
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
          message.merkledropId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = createBaseEventCreate();
    message.owner = object.owner ?? "";
    message.merkledropId = object.merkledropId !== undefined && object.merkledropId !== null ? Long.fromValue(object.merkledropId) : Long.UZERO;
    return message;
  }

};

function createBaseEventClaim(): EventClaim {
  return {
    merkledropId: Long.UZERO,
    index: Long.UZERO,
    coin: undefined
  };
}

export const EventClaim = {
  encode(message: EventClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
          message.merkledropId = (reader.uint64() as Long);
          break;

        case 2:
          message.index = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<EventClaim>): EventClaim {
    const message = createBaseEventClaim();
    message.merkledropId = object.merkledropId !== undefined && object.merkledropId !== null ? Long.fromValue(object.merkledropId) : Long.UZERO;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }

};

function createBaseEventWithdraw(): EventWithdraw {
  return {
    merkledropId: Long.UZERO,
    coin: undefined
  };
}

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
          message.merkledropId = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<EventWithdraw>): EventWithdraw {
    const message = createBaseEventWithdraw();
    message.merkledropId = object.merkledropId !== undefined && object.merkledropId !== null ? Long.fromValue(object.merkledropId) : Long.UZERO;
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }

};