/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Params, Metadata, LastMetadataIdInfo, NFT, Collection } from './nft';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.nft.v1beta1';

/** GenesisState defines the nft module's genesis state */
export interface GenesisState {
  $type: 'bitsong.nft.v1beta1.GenesisState';
  params?: Params;
  metadata: Metadata[];
  lastMetadataIds: LastMetadataIdInfo[];
  nfts: NFT[];
  collections: Collection[];
  lastCollectionId: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'bitsong.nft.v1beta1.GenesisState',
    params: undefined,
    metadata: [],
    lastMetadataIds: [],
    nfts: [],
    collections: [],
    lastCollectionId: Long.UZERO,
  };
}

export const GenesisState = {
  $type: 'bitsong.nft.v1beta1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lastMetadataIds) {
      LastMetadataIdInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.lastCollectionId.isZero()) {
      writer.uint32(48).uint64(message.lastCollectionId);
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastMetadataIds.push(
            LastMetadataIdInfo.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        case 5:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastCollectionId = reader.uint64() as Long;
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
      $type: GenesisState.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      metadata: Array.isArray(object?.metadata)
        ? object.metadata.map((e: any) => Metadata.fromJSON(e))
        : [],
      lastMetadataIds: Array.isArray(object?.lastMetadataIds)
        ? object.lastMetadataIds.map((e: any) => LastMetadataIdInfo.fromJSON(e))
        : [],
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => NFT.fromJSON(e))
        : [],
      collections: Array.isArray(object?.collections)
        ? object.collections.map((e: any) => Collection.fromJSON(e))
        : [],
      lastCollectionId: isSet(object.lastCollectionId)
        ? Long.fromValue(object.lastCollectionId)
        : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.metadata) {
      obj.metadata = message.metadata.map(e =>
        e ? Metadata.toJSON(e) : undefined,
      );
    } else {
      obj.metadata = [];
    }
    if (message.lastMetadataIds) {
      obj.lastMetadataIds = message.lastMetadataIds.map(e =>
        e ? LastMetadataIdInfo.toJSON(e) : undefined,
      );
    } else {
      obj.lastMetadataIds = [];
    }
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    if (message.collections) {
      obj.collections = message.collections.map(e =>
        e ? Collection.toJSON(e) : undefined,
      );
    } else {
      obj.collections = [];
    }
    message.lastCollectionId !== undefined &&
      (obj.lastCollectionId = (
        message.lastCollectionId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    message.lastMetadataIds =
      object.lastMetadataIds?.map(e => LastMetadataIdInfo.fromPartial(e)) || [];
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    message.collections =
      object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.lastCollectionId =
      object.lastCollectionId !== undefined && object.lastCollectionId !== null
        ? Long.fromValue(object.lastCollectionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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
