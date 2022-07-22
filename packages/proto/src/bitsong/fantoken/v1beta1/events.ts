/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "bitsong.fantoken.v1beta1";

export interface EventIssue {
  denom: string;
}

export interface EventDisableMint {
  denom: string;
}

export interface EventMint {
  recipient: string;
  coin: string;
}

export interface EventBurn {
  sender: string;
  coin: string;
}

export interface EventSetAuthority {
  denom: string;
  oldAuthority: string;
  newAuthority: string;
}

export interface EventSetMinter {
  denom: string;
  oldMinter: string;
  newMinter: string;
}

export interface EventSetUri {
  denom: string;
}

function createBaseEventIssue(): EventIssue {
  return { denom: "" };
}

export const EventIssue = {
  encode(
    message: EventIssue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssue();
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

  fromJSON(object: any): EventIssue {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventIssue): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventIssue>, I>>(
    object: I,
  ): EventIssue {
    const message = createBaseEventIssue();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEventDisableMint(): EventDisableMint {
  return { denom: "" };
}

export const EventDisableMint = {
  encode(
    message: EventDisableMint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDisableMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDisableMint();
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

  fromJSON(object: any): EventDisableMint {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventDisableMint): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDisableMint>, I>>(
    object: I,
  ): EventDisableMint {
    const message = createBaseEventDisableMint();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseEventMint(): EventMint {
  return { recipient: "", coin: "" };
}

export const EventMint = {
  encode(
    message: EventMint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMint {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
    };
  },

  toJSON(message: EventMint): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMint>, I>>(
    object: I,
  ): EventMint {
    const message = createBaseEventMint();
    message.recipient = object.recipient ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
};

function createBaseEventBurn(): EventBurn {
  return { sender: "", coin: "" };
}

export const EventBurn = {
  encode(
    message: EventBurn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
    };
  },

  toJSON(message: EventBurn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurn>, I>>(
    object: I,
  ): EventBurn {
    const message = createBaseEventBurn();
    message.sender = object.sender ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
};

function createBaseEventSetAuthority(): EventSetAuthority {
  return { denom: "", oldAuthority: "", newAuthority: "" };
}

export const EventSetAuthority = {
  encode(
    message: EventSetAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oldAuthority !== "") {
      writer.uint32(18).string(message.oldAuthority);
    }
    if (message.newAuthority !== "") {
      writer.uint32(26).string(message.newAuthority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oldAuthority = reader.string();
          break;
        case 3:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetAuthority {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      oldAuthority: isSet(object.oldAuthority)
        ? String(object.oldAuthority)
        : "",
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : "",
    };
  },

  toJSON(message: EventSetAuthority): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.oldAuthority !== undefined &&
      (obj.oldAuthority = message.oldAuthority);
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetAuthority>, I>>(
    object: I,
  ): EventSetAuthority {
    const message = createBaseEventSetAuthority();
    message.denom = object.denom ?? "";
    message.oldAuthority = object.oldAuthority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  },
};

function createBaseEventSetMinter(): EventSetMinter {
  return { denom: "", oldMinter: "", newMinter: "" };
}

export const EventSetMinter = {
  encode(
    message: EventSetMinter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oldMinter !== "") {
      writer.uint32(18).string(message.oldMinter);
    }
    if (message.newMinter !== "") {
      writer.uint32(26).string(message.newMinter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMinter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oldMinter = reader.string();
          break;
        case 3:
          message.newMinter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetMinter {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      oldMinter: isSet(object.oldMinter) ? String(object.oldMinter) : "",
      newMinter: isSet(object.newMinter) ? String(object.newMinter) : "",
    };
  },

  toJSON(message: EventSetMinter): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.oldMinter !== undefined && (obj.oldMinter = message.oldMinter);
    message.newMinter !== undefined && (obj.newMinter = message.newMinter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetMinter>, I>>(
    object: I,
  ): EventSetMinter {
    const message = createBaseEventSetMinter();
    message.denom = object.denom ?? "";
    message.oldMinter = object.oldMinter ?? "";
    message.newMinter = object.newMinter ?? "";
    return message;
  },
};

function createBaseEventSetUri(): EventSetUri {
  return { denom: "" };
}

export const EventSetUri = {
  encode(
    message: EventSetUri,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetUri {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUri();
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

  fromJSON(object: any): EventSetUri {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: EventSetUri): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetUri>, I>>(
    object: I,
  ): EventSetUri {
    const message = createBaseEventSetUri();
    message.denom = object.denom ?? "";
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
