/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.base.snapshots.v1beta1';

/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
  $type: 'cosmos.base.snapshots.v1beta1.Snapshot';
  height: Long;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata?: Metadata;
}

/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
  $type: 'cosmos.base.snapshots.v1beta1.Metadata';
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[];
}

/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItem {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotItem';
  store?: SnapshotStoreItem | undefined;
  iavl?: SnapshotIAVLItem | undefined;
  extension?: SnapshotExtensionMeta | undefined;
  extensionPayload?: SnapshotExtensionPayload | undefined;
}

/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItem {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotStoreItem';
  name: string;
}

/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItem {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotIAVLItem';
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */
  version: Long;
  /** height is depth of the tree. */
  height: number;
}

/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMeta {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta';
  name: string;
  format: number;
}

/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayload {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload';
  payload: Uint8Array;
}

function createBaseSnapshot(): Snapshot {
  return {
    $type: 'cosmos.base.snapshots.v1beta1.Snapshot',
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: undefined,
  };
}

export const Snapshot = {
  $type: 'cosmos.base.snapshots.v1beta1.Snapshot' as const,

  encode(
    message: Snapshot,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64() as Long;
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Snapshot {
    return {
      $type: Snapshot.$type,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
    const message = createBaseSnapshot();
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Snapshot.$type, Snapshot);

function createBaseMetadata(): Metadata {
  return { $type: 'cosmos.base.snapshots.v1beta1.Metadata', chunkHashes: [] };
}

export const Metadata = {
  $type: 'cosmos.base.snapshots.v1beta1.Metadata' as const,

  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.chunkHashes) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunkHashes.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      $type: Metadata.$type,
      chunkHashes: Array.isArray(object?.chunkHashes)
        ? object.chunkHashes.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.chunkHashes) {
      obj.chunkHashes = message.chunkHashes.map(e =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.chunkHashes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunkHashes?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(Metadata.$type, Metadata);

function createBaseSnapshotItem(): SnapshotItem {
  return {
    $type: 'cosmos.base.snapshots.v1beta1.SnapshotItem',
    store: undefined,
    iavl: undefined,
    extension: undefined,
    extensionPayload: undefined,
  };
}

export const SnapshotItem = {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotItem' as const,

  encode(
    message: SnapshotItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.store !== undefined) {
      SnapshotStoreItem.encode(
        message.store,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.iavl !== undefined) {
      SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      SnapshotExtensionMeta.encode(
        message.extension,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.extensionPayload !== undefined) {
      SnapshotExtensionPayload.encode(
        message.extensionPayload,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store = SnapshotStoreItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.extension = SnapshotExtensionMeta.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.extensionPayload = SnapshotExtensionPayload.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotItem {
    return {
      $type: SnapshotItem.$type,
      store: isSet(object.store)
        ? SnapshotStoreItem.fromJSON(object.store)
        : undefined,
      iavl: isSet(object.iavl)
        ? SnapshotIAVLItem.fromJSON(object.iavl)
        : undefined,
      extension: isSet(object.extension)
        ? SnapshotExtensionMeta.fromJSON(object.extension)
        : undefined,
      extensionPayload: isSet(object.extensionPayload)
        ? SnapshotExtensionPayload.fromJSON(object.extensionPayload)
        : undefined,
    };
  },

  toJSON(message: SnapshotItem): unknown {
    const obj: any = {};
    message.store !== undefined &&
      (obj.store = message.store
        ? SnapshotStoreItem.toJSON(message.store)
        : undefined);
    message.iavl !== undefined &&
      (obj.iavl = message.iavl
        ? SnapshotIAVLItem.toJSON(message.iavl)
        : undefined);
    message.extension !== undefined &&
      (obj.extension = message.extension
        ? SnapshotExtensionMeta.toJSON(message.extension)
        : undefined);
    message.extensionPayload !== undefined &&
      (obj.extensionPayload = message.extensionPayload
        ? SnapshotExtensionPayload.toJSON(message.extensionPayload)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotItem>, I>>(
    object: I,
  ): SnapshotItem {
    const message = createBaseSnapshotItem();
    message.store =
      object.store !== undefined && object.store !== null
        ? SnapshotStoreItem.fromPartial(object.store)
        : undefined;
    message.iavl =
      object.iavl !== undefined && object.iavl !== null
        ? SnapshotIAVLItem.fromPartial(object.iavl)
        : undefined;
    message.extension =
      object.extension !== undefined && object.extension !== null
        ? SnapshotExtensionMeta.fromPartial(object.extension)
        : undefined;
    message.extensionPayload =
      object.extensionPayload !== undefined && object.extensionPayload !== null
        ? SnapshotExtensionPayload.fromPartial(object.extensionPayload)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(SnapshotItem.$type, SnapshotItem);

function createBaseSnapshotStoreItem(): SnapshotStoreItem {
  return { $type: 'cosmos.base.snapshots.v1beta1.SnapshotStoreItem', name: '' };
}

export const SnapshotStoreItem = {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotStoreItem' as const,

  encode(
    message: SnapshotStoreItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotStoreItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotStoreItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotStoreItem {
    return {
      $type: SnapshotStoreItem.$type,
      name: isSet(object.name) ? String(object.name) : '',
    };
  },

  toJSON(message: SnapshotStoreItem): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotStoreItem>, I>>(
    object: I,
  ): SnapshotStoreItem {
    const message = createBaseSnapshotStoreItem();
    message.name = object.name ?? '';
    return message;
  },
};

messageTypeRegistry.set(SnapshotStoreItem.$type, SnapshotStoreItem);

function createBaseSnapshotIAVLItem(): SnapshotIAVLItem {
  return {
    $type: 'cosmos.base.snapshots.v1beta1.SnapshotIAVLItem',
    key: new Uint8Array(),
    value: new Uint8Array(),
    version: Long.ZERO,
    height: 0,
  };
}

export const SnapshotIAVLItem = {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotIAVLItem' as const,

  encode(
    message: SnapshotIAVLItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (!message.version.isZero()) {
      writer.uint32(24).int64(message.version);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SnapshotIAVLItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotIAVLItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.version = reader.int64() as Long;
          break;
        case 4:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotIAVLItem {
    return {
      $type: SnapshotIAVLItem.$type,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
      version: isSet(object.version)
        ? Long.fromValue(object.version)
        : Long.ZERO,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: SnapshotIAVLItem): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array(),
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    message.version !== undefined &&
      (obj.version = (message.version || Long.ZERO).toString());
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotIAVLItem>, I>>(
    object: I,
  ): SnapshotIAVLItem {
    const message = createBaseSnapshotIAVLItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.version =
      object.version !== undefined && object.version !== null
        ? Long.fromValue(object.version)
        : Long.ZERO;
    message.height = object.height ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SnapshotIAVLItem.$type, SnapshotIAVLItem);

function createBaseSnapshotExtensionMeta(): SnapshotExtensionMeta {
  return {
    $type: 'cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta',
    name: '',
    format: 0,
  };
}

export const SnapshotExtensionMeta = {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta' as const,

  encode(
    message: SnapshotExtensionMeta,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SnapshotExtensionMeta {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotExtensionMeta {
    return {
      $type: SnapshotExtensionMeta.$type,
      name: isSet(object.name) ? String(object.name) : '',
      format: isSet(object.format) ? Number(object.format) : 0,
    };
  },

  toJSON(message: SnapshotExtensionMeta): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.format !== undefined && (obj.format = Math.round(message.format));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotExtensionMeta>, I>>(
    object: I,
  ): SnapshotExtensionMeta {
    const message = createBaseSnapshotExtensionMeta();
    message.name = object.name ?? '';
    message.format = object.format ?? 0;
    return message;
  },
};

messageTypeRegistry.set(SnapshotExtensionMeta.$type, SnapshotExtensionMeta);

function createBaseSnapshotExtensionPayload(): SnapshotExtensionPayload {
  return {
    $type: 'cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload',
    payload: new Uint8Array(),
  };
}

export const SnapshotExtensionPayload = {
  $type: 'cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload' as const,

  encode(
    message: SnapshotExtensionPayload,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): SnapshotExtensionPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SnapshotExtensionPayload {
    return {
      $type: SnapshotExtensionPayload.$type,
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
    };
  },

  toJSON(message: SnapshotExtensionPayload): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SnapshotExtensionPayload>, I>>(
    object: I,
  ): SnapshotExtensionPayload {
    const message = createBaseSnapshotExtensionPayload();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(
  SnapshotExtensionPayload.$type,
  SnapshotExtensionPayload,
);

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
