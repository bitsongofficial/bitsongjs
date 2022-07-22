/* eslint-disable */
import { Params } from "./params";
import Long from "long";
import { Merkledrop } from "./merkledrop";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "bitsong.merkledrop.v1beta1";

export interface Indexes {
  merkledropId: string;
  index: string[];
}

export interface GenesisState {
  lastMerkledropId: string;
  merkledrops: Merkledrop[];
  indexes: Indexes[];
  params?: Params;
}

function createBaseIndexes(): Indexes {
  return { merkledropId: "0", index: [] };
}

export const Indexes = {
  encode(
    message: Indexes,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.merkledropId !== "0") {
      writer.uint32(8).uint64(message.merkledropId);
    }
    writer.uint32(18).fork();
    for (const v of message.index) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Indexes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkledropId = longToString(reader.uint64() as Long);
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.index.push(longToString(reader.uint64() as Long));
            }
          } else {
            message.index.push(longToString(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Indexes {
    return {
      merkledropId: isSet(object.merkledropId)
        ? String(object.merkledropId)
        : "0",
      index: Array.isArray(object?.index)
        ? object.index.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Indexes): unknown {
    const obj: any = {};
    message.merkledropId !== undefined &&
      (obj.merkledropId = message.merkledropId);
    if (message.index) {
      obj.index = message.index.map((e) => e);
    } else {
      obj.index = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Indexes>, I>>(object: I): Indexes {
    const message = createBaseIndexes();
    message.merkledropId = object.merkledropId ?? "0";
    message.index = object.index?.map((e) => e) || [];
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return {
    lastMerkledropId: "0",
    merkledrops: [],
    indexes: [],
    params: undefined,
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.lastMerkledropId !== "0") {
      writer.uint32(8).uint64(message.lastMerkledropId);
    }
    for (const v of message.merkledrops) {
      Merkledrop.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.indexes) {
      Indexes.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastMerkledropId = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.merkledrops.push(Merkledrop.decode(reader, reader.uint32()));
          break;
        case 3:
          message.indexes.push(Indexes.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      lastMerkledropId: isSet(object.lastMerkledropId)
        ? String(object.lastMerkledropId)
        : "0",
      merkledrops: Array.isArray(object?.merkledrops)
        ? object.merkledrops.map((e: any) => Merkledrop.fromJSON(e))
        : [],
      indexes: Array.isArray(object?.indexes)
        ? object.indexes.map((e: any) => Indexes.fromJSON(e))
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.lastMerkledropId !== undefined &&
      (obj.lastMerkledropId = message.lastMerkledropId);
    if (message.merkledrops) {
      obj.merkledrops = message.merkledrops.map((e) =>
        e ? Merkledrop.toJSON(e) : undefined,
      );
    } else {
      obj.merkledrops = [];
    }
    if (message.indexes) {
      obj.indexes = message.indexes.map((e) =>
        e ? Indexes.toJSON(e) : undefined,
      );
    } else {
      obj.indexes = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.lastMerkledropId = object.lastMerkledropId ?? "0";
    message.merkledrops =
      object.merkledrops?.map((e) => Merkledrop.fromPartial(e)) || [];
    message.indexes = object.indexes?.map((e) => Indexes.fromPartial(e)) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
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
