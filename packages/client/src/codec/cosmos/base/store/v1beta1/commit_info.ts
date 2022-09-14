/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.base.store.v1beta1';

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
  $type: 'cosmos.base.store.v1beta1.CommitInfo';
  version: Long;
  storeInfos: StoreInfo[];
}

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
  $type: 'cosmos.base.store.v1beta1.StoreInfo';
  name: string;
  commitId?: CommitID;
}

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
  $type: 'cosmos.base.store.v1beta1.CommitID';
  version: Long;
  hash: Uint8Array;
}

function createBaseCommitInfo(): CommitInfo {
  return {
    $type: 'cosmos.base.store.v1beta1.CommitInfo',
    version: Long.ZERO,
    storeInfos: [],
  };
}

export const CommitInfo = {
  $type: 'cosmos.base.store.v1beta1.CommitInfo' as const,

  encode(
    message: CommitInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitInfo {
    return {
      $type: CommitInfo.$type,
      version: isSet(object.version)
        ? Long.fromValue(object.version)
        : Long.ZERO,
      storeInfos: Array.isArray(object?.storeInfos)
        ? object.storeInfos.map((e: any) => StoreInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CommitInfo): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = (message.version || Long.ZERO).toString());
    if (message.storeInfos) {
      obj.storeInfos = message.storeInfos.map(e =>
        e ? StoreInfo.toJSON(e) : undefined,
      );
    } else {
      obj.storeInfos = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitInfo>, I>>(
    object: I,
  ): CommitInfo {
    const message = createBaseCommitInfo();
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.ZERO;
    message.storeInfos =
      object.storeInfos?.map(e => StoreInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(CommitInfo.$type, CommitInfo);

function createBaseStoreInfo(): StoreInfo {
  return {
    $type: 'cosmos.base.store.v1beta1.StoreInfo',
    name: '',
    commitId: undefined,
  };
}

export const StoreInfo = {
  $type: 'cosmos.base.store.v1beta1.StoreInfo' as const,

  encode(
    message: StoreInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoreInfo {
    return {
      $type: StoreInfo.$type,
      name: isSet(object.name) ? String(object.name) : '',
      commitId: isSet(object.commitId)
        ? CommitID.fromJSON(object.commitId)
        : undefined,
    };
  },

  toJSON(message: StoreInfo): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.commitId !== undefined &&
      (obj.commitId = message.commitId
        ? CommitID.toJSON(message.commitId)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoreInfo>, I>>(
    object: I,
  ): StoreInfo {
    const message = createBaseStoreInfo();
    message.name = object.name ?? '';
    message.commitId =
      object.commitId !== undefined && object.commitId !== null
        ? CommitID.fromPartial(object.commitId)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(StoreInfo.$type, StoreInfo);

function createBaseCommitID(): CommitID {
  return {
    $type: 'cosmos.base.store.v1beta1.CommitID',
    version: Long.ZERO,
    hash: new Uint8Array(),
  };
}

export const CommitID = {
  $type: 'cosmos.base.store.v1beta1.CommitID' as const,

  encode(
    message: CommitID,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.int64() as Long;
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommitID {
    return {
      $type: CommitID.$type,
      version: isSet(object.version)
        ? Long.fromValue(object.version)
        : Long.ZERO,
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
    };
  },

  toJSON(message: CommitID): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = (message.version || Long.ZERO).toString());
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommitID>, I>>(object: I): CommitID {
    const message = createBaseCommitID();
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.ZERO;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(CommitID.$type, CommitID);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach(byte => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
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
