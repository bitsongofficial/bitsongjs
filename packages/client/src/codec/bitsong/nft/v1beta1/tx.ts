/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Metadata, Creator } from './nft';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.nft';

export interface MsgCreateNFT {
  $type: 'bitsong.nft.MsgCreateNFT';
  sender: string;
  metadata?: Metadata;
}

export interface MsgCreateNFTResponse {
  $type: 'bitsong.nft.MsgCreateNFTResponse';
  id: string;
  collId: Long;
  metadataId: Long;
}

export interface MsgPrintEdition {
  $type: 'bitsong.nft.MsgPrintEdition';
  sender: string;
  collId: Long;
  metadataId: Long;
  owner: string;
}

export interface MsgPrintEditionResponse {
  $type: 'bitsong.nft.MsgPrintEditionResponse';
  id: string;
  collId: Long;
  metadataId: Long;
}

export interface MsgTransferNFT {
  $type: 'bitsong.nft.MsgTransferNFT';
  sender: string;
  id: string;
  newOwner: string;
}

export interface MsgTransferNFTResponse {
  $type: 'bitsong.nft.MsgTransferNFTResponse';
}

export interface MsgSignMetadata {
  $type: 'bitsong.nft.MsgSignMetadata';
  sender: string;
  collId: Long;
  metadataId: Long;
}

export interface MsgSignMetadataResponse {
  $type: 'bitsong.nft.MsgSignMetadataResponse';
}

export interface MsgUpdateMetadata {
  $type: 'bitsong.nft.MsgUpdateMetadata';
  sender: string;
  collId: Long;
  metadataId: Long;
  /** The name of the asset */
  name: string;
  /** URI pointing to JSON representing the asset */
  uri: string;
  /** Royalty basis points that goes to creators in secondary sales (0-10000) */
  sellerFeeBasisPoints: number;
  /** Array of creators, optional */
  creators: Creator[];
}

export interface MsgUpdateMetadataResponse {
  $type: 'bitsong.nft.MsgUpdateMetadataResponse';
}

export interface MsgUpdateMetadataAuthority {
  $type: 'bitsong.nft.MsgUpdateMetadataAuthority';
  sender: string;
  collId: Long;
  metadataId: Long;
  newAuthority: string;
}

export interface MsgUpdateMetadataAuthorityResponse {
  $type: 'bitsong.nft.MsgUpdateMetadataAuthorityResponse';
}

export interface MsgUpdateMintAuthority {
  $type: 'bitsong.nft.MsgUpdateMintAuthority';
  sender: string;
  collId: Long;
  metadataId: Long;
  newAuthority: string;
}

export interface MsgUpdateMintAuthorityResponse {
  $type: 'bitsong.nft.MsgUpdateMintAuthorityResponse';
}

export interface MsgCreateCollection {
  $type: 'bitsong.nft.MsgCreateCollection';
  sender: string;
  symbol: string;
  name: string;
  uri: string;
  isMutable: boolean;
  updateAuthority: string;
}

export interface MsgCreateCollectionResponse {
  $type: 'bitsong.nft.MsgCreateCollectionResponse';
  id: Long;
}

export interface MsgUpdateCollectionAuthority {
  $type: 'bitsong.nft.MsgUpdateCollectionAuthority';
  sender: string;
  collectionId: Long;
  newAuthority: string;
}

export interface MsgUpdateCollectionAuthorityResponse {
  $type: 'bitsong.nft.MsgUpdateCollectionAuthorityResponse';
}

function createBaseMsgCreateNFT(): MsgCreateNFT {
  return { $type: 'bitsong.nft.MsgCreateNFT', sender: '', metadata: undefined };
}

export const MsgCreateNFT = {
  $type: 'bitsong.nft.MsgCreateNFT' as const,

  encode(
    message: MsgCreateNFT,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFT {
    return {
      $type: MsgCreateNFT.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: MsgCreateNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNFT>, I>>(
    object: I,
  ): MsgCreateNFT {
    const message = createBaseMsgCreateNFT();
    message.sender = object.sender ?? '';
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateNFT.$type, MsgCreateNFT);

function createBaseMsgCreateNFTResponse(): MsgCreateNFTResponse {
  return {
    $type: 'bitsong.nft.MsgCreateNFTResponse',
    id: '',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
  };
}

export const MsgCreateNFTResponse = {
  $type: 'bitsong.nft.MsgCreateNFTResponse' as const,

  encode(
    message: MsgCreateNFTResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(24).uint64(message.metadataId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.metadataId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFTResponse {
    return {
      $type: MsgCreateNFTResponse.$type,
      id: isSet(object.id) ? String(object.id) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateNFTResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateNFTResponse>, I>>(
    object: I,
  ): MsgCreateNFTResponse {
    const message = createBaseMsgCreateNFTResponse();
    message.id = object.id ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateNFTResponse.$type, MsgCreateNFTResponse);

function createBaseMsgPrintEdition(): MsgPrintEdition {
  return {
    $type: 'bitsong.nft.MsgPrintEdition',
    sender: '',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
    owner: '',
  };
}

export const MsgPrintEdition = {
  $type: 'bitsong.nft.MsgPrintEdition' as const,

  encode(
    message: MsgPrintEdition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(24).uint64(message.metadataId);
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPrintEdition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrintEdition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.metadataId = reader.uint64() as Long;
          break;
        case 4:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrintEdition {
    return {
      $type: MsgPrintEdition.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: MsgPrintEdition): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrintEdition>, I>>(
    object: I,
  ): MsgPrintEdition {
    const message = createBaseMsgPrintEdition();
    message.sender = object.sender ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    message.owner = object.owner ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgPrintEdition.$type, MsgPrintEdition);

function createBaseMsgPrintEditionResponse(): MsgPrintEditionResponse {
  return {
    $type: 'bitsong.nft.MsgPrintEditionResponse',
    id: '',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
  };
}

export const MsgPrintEditionResponse = {
  $type: 'bitsong.nft.MsgPrintEditionResponse' as const,

  encode(
    message: MsgPrintEditionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(24).uint64(message.metadataId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgPrintEditionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPrintEditionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.metadataId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPrintEditionResponse {
    return {
      $type: MsgPrintEditionResponse.$type,
      id: isSet(object.id) ? String(object.id) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgPrintEditionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPrintEditionResponse>, I>>(
    object: I,
  ): MsgPrintEditionResponse {
    const message = createBaseMsgPrintEditionResponse();
    message.id = object.id ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgPrintEditionResponse.$type, MsgPrintEditionResponse);

function createBaseMsgTransferNFT(): MsgTransferNFT {
  return {
    $type: 'bitsong.nft.MsgTransferNFT',
    sender: '',
    id: '',
    newOwner: '',
  };
}

export const MsgTransferNFT = {
  $type: 'bitsong.nft.MsgTransferNFT' as const,

  encode(
    message: MsgTransferNFT,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id);
    }
    if (message.newOwner !== '') {
      writer.uint32(26).string(message.newOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNFT {
    return {
      $type: MsgTransferNFT.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      id: isSet(object.id) ? String(object.id) : '',
      newOwner: isSet(object.newOwner) ? String(object.newOwner) : '',
    };
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.newOwner !== undefined && (obj.newOwner = message.newOwner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFT>, I>>(
    object: I,
  ): MsgTransferNFT {
    const message = createBaseMsgTransferNFT();
    message.sender = object.sender ?? '';
    message.id = object.id ?? '';
    message.newOwner = object.newOwner ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgTransferNFT.$type, MsgTransferNFT);

function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return { $type: 'bitsong.nft.MsgTransferNFTResponse' };
}

export const MsgTransferNFTResponse = {
  $type: 'bitsong.nft.MsgTransferNFTResponse' as const,

  encode(
    _: MsgTransferNFTResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgTransferNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferNFTResponse {
    return {
      $type: MsgTransferNFTResponse.$type,
    };
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTResponse>, I>>(
    _: I,
  ): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgTransferNFTResponse.$type, MsgTransferNFTResponse);

function createBaseMsgSignMetadata(): MsgSignMetadata {
  return {
    $type: 'bitsong.nft.MsgSignMetadata',
    sender: '',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
  };
}

export const MsgSignMetadata = {
  $type: 'bitsong.nft.MsgSignMetadata' as const,

  encode(
    message: MsgSignMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(24).uint64(message.metadataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.metadataId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignMetadata {
    return {
      $type: MsgSignMetadata.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgSignMetadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignMetadata>, I>>(
    object: I,
  ): MsgSignMetadata {
    const message = createBaseMsgSignMetadata();
    message.sender = object.sender ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgSignMetadata.$type, MsgSignMetadata);

function createBaseMsgSignMetadataResponse(): MsgSignMetadataResponse {
  return { $type: 'bitsong.nft.MsgSignMetadataResponse' };
}

export const MsgSignMetadataResponse = {
  $type: 'bitsong.nft.MsgSignMetadataResponse' as const,

  encode(
    _: MsgSignMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSignMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSignMetadataResponse {
    return {
      $type: MsgSignMetadataResponse.$type,
    };
  },

  toJSON(_: MsgSignMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignMetadataResponse>, I>>(
    _: I,
  ): MsgSignMetadataResponse {
    const message = createBaseMsgSignMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSignMetadataResponse.$type, MsgSignMetadataResponse);

function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return {
    $type: 'bitsong.nft.MsgUpdateMetadata',
    sender: '',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
    name: '',
    uri: '',
    sellerFeeBasisPoints: 0,
    creators: [],
  };
}

export const MsgUpdateMetadata = {
  $type: 'bitsong.nft.MsgUpdateMetadata' as const,

  encode(
    message: MsgUpdateMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(24).uint64(message.metadataId);
    }
    if (message.name !== '') {
      writer.uint32(34).string(message.name);
    }
    if (message.uri !== '') {
      writer.uint32(42).string(message.uri);
    }
    if (message.sellerFeeBasisPoints !== 0) {
      writer.uint32(48).uint32(message.sellerFeeBasisPoints);
    }
    for (const v of message.creators) {
      Creator.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.metadataId = reader.uint64() as Long;
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.sellerFeeBasisPoints = reader.uint32();
          break;
        case 7:
          message.creators.push(Creator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMetadata {
    return {
      $type: MsgUpdateMetadata.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : '',
      uri: isSet(object.uri) ? String(object.uri) : '',
      sellerFeeBasisPoints: isSet(object.sellerFeeBasisPoints)
        ? Number(object.sellerFeeBasisPoints)
        : 0,
      creators: Array.isArray(object?.creators)
        ? object.creators.map((e: any) => Creator.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateMetadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.sellerFeeBasisPoints !== undefined &&
      (obj.sellerFeeBasisPoints = Math.round(message.sellerFeeBasisPoints));
    if (message.creators) {
      obj.creators = message.creators.map(e =>
        e ? Creator.toJSON(e) : undefined,
      );
    } else {
      obj.creators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadata>, I>>(
    object: I,
  ): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.sender = object.sender ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    message.name = object.name ?? '';
    message.uri = object.uri ?? '';
    message.sellerFeeBasisPoints = object.sellerFeeBasisPoints ?? 0;
    message.creators = object.creators?.map(e => Creator.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateMetadata.$type, MsgUpdateMetadata);

function createBaseMsgUpdateMetadataResponse(): MsgUpdateMetadataResponse {
  return { $type: 'bitsong.nft.MsgUpdateMetadataResponse' };
}

export const MsgUpdateMetadataResponse = {
  $type: 'bitsong.nft.MsgUpdateMetadataResponse' as const,

  encode(
    _: MsgUpdateMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMetadataResponse {
    return {
      $type: MsgUpdateMetadataResponse.$type,
    };
  },

  toJSON(_: MsgUpdateMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadataResponse>, I>>(
    _: I,
  ): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateMetadataResponse.$type,
  MsgUpdateMetadataResponse,
);

function createBaseMsgUpdateMetadataAuthority(): MsgUpdateMetadataAuthority {
  return {
    $type: 'bitsong.nft.MsgUpdateMetadataAuthority',
    sender: '',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
    newAuthority: '',
  };
}

export const MsgUpdateMetadataAuthority = {
  $type: 'bitsong.nft.MsgUpdateMetadataAuthority' as const,

  encode(
    message: MsgUpdateMetadataAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(24).uint64(message.metadataId);
    }
    if (message.newAuthority !== '') {
      writer.uint32(34).string(message.newAuthority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateMetadataAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.metadataId = reader.uint64() as Long;
          break;
        case 4:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMetadataAuthority {
    return {
      $type: MsgUpdateMetadataAuthority.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: MsgUpdateMetadataAuthority): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadataAuthority>, I>>(
    object: I,
  ): MsgUpdateMetadataAuthority {
    const message = createBaseMsgUpdateMetadataAuthority();
    message.sender = object.sender ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateMetadataAuthority.$type,
  MsgUpdateMetadataAuthority,
);

function createBaseMsgUpdateMetadataAuthorityResponse(): MsgUpdateMetadataAuthorityResponse {
  return { $type: 'bitsong.nft.MsgUpdateMetadataAuthorityResponse' };
}

export const MsgUpdateMetadataAuthorityResponse = {
  $type: 'bitsong.nft.MsgUpdateMetadataAuthorityResponse' as const,

  encode(
    _: MsgUpdateMetadataAuthorityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateMetadataAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMetadataAuthorityResponse {
    return {
      $type: MsgUpdateMetadataAuthorityResponse.$type,
    };
  },

  toJSON(_: MsgUpdateMetadataAuthorityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateMetadataAuthorityResponse>, I>,
  >(_: I): MsgUpdateMetadataAuthorityResponse {
    const message = createBaseMsgUpdateMetadataAuthorityResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateMetadataAuthorityResponse.$type,
  MsgUpdateMetadataAuthorityResponse,
);

function createBaseMsgUpdateMintAuthority(): MsgUpdateMintAuthority {
  return {
    $type: 'bitsong.nft.MsgUpdateMintAuthority',
    sender: '',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
    newAuthority: '',
  };
}

export const MsgUpdateMintAuthority = {
  $type: 'bitsong.nft.MsgUpdateMintAuthority' as const,

  encode(
    message: MsgUpdateMintAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(24).uint64(message.metadataId);
    }
    if (message.newAuthority !== '') {
      writer.uint32(34).string(message.newAuthority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateMintAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMintAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.metadataId = reader.uint64() as Long;
          break;
        case 4:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMintAuthority {
    return {
      $type: MsgUpdateMintAuthority.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: MsgUpdateMintAuthority): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMintAuthority>, I>>(
    object: I,
  ): MsgUpdateMintAuthority {
    const message = createBaseMsgUpdateMintAuthority();
    message.sender = object.sender ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateMintAuthority.$type, MsgUpdateMintAuthority);

function createBaseMsgUpdateMintAuthorityResponse(): MsgUpdateMintAuthorityResponse {
  return { $type: 'bitsong.nft.MsgUpdateMintAuthorityResponse' };
}

export const MsgUpdateMintAuthorityResponse = {
  $type: 'bitsong.nft.MsgUpdateMintAuthorityResponse' as const,

  encode(
    _: MsgUpdateMintAuthorityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateMintAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMintAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMintAuthorityResponse {
    return {
      $type: MsgUpdateMintAuthorityResponse.$type,
    };
  },

  toJSON(_: MsgUpdateMintAuthorityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMintAuthorityResponse>, I>>(
    _: I,
  ): MsgUpdateMintAuthorityResponse {
    const message = createBaseMsgUpdateMintAuthorityResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateMintAuthorityResponse.$type,
  MsgUpdateMintAuthorityResponse,
);

function createBaseMsgCreateCollection(): MsgCreateCollection {
  return {
    $type: 'bitsong.nft.MsgCreateCollection',
    sender: '',
    symbol: '',
    name: '',
    uri: '',
    isMutable: false,
    updateAuthority: '',
  };
}

export const MsgCreateCollection = {
  $type: 'bitsong.nft.MsgCreateCollection' as const,

  encode(
    message: MsgCreateCollection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.symbol !== '') {
      writer.uint32(18).string(message.symbol);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== '') {
      writer.uint32(34).string(message.uri);
    }
    if (message.isMutable === true) {
      writer.uint32(40).bool(message.isMutable);
    }
    if (message.updateAuthority !== '') {
      writer.uint32(50).string(message.updateAuthority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.isMutable = reader.bool();
          break;
        case 6:
          message.updateAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCollection {
    return {
      $type: MsgCreateCollection.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      symbol: isSet(object.symbol) ? String(object.symbol) : '',
      name: isSet(object.name) ? String(object.name) : '',
      uri: isSet(object.uri) ? String(object.uri) : '',
      isMutable: isSet(object.isMutable) ? Boolean(object.isMutable) : false,
      updateAuthority: isSet(object.updateAuthority)
        ? String(object.updateAuthority)
        : '',
    };
  },

  toJSON(message: MsgCreateCollection): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.isMutable !== undefined && (obj.isMutable = message.isMutable);
    message.updateAuthority !== undefined &&
      (obj.updateAuthority = message.updateAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCollection>, I>>(
    object: I,
  ): MsgCreateCollection {
    const message = createBaseMsgCreateCollection();
    message.sender = object.sender ?? '';
    message.symbol = object.symbol ?? '';
    message.name = object.name ?? '';
    message.uri = object.uri ?? '';
    message.isMutable = object.isMutable ?? false;
    message.updateAuthority = object.updateAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgCreateCollection.$type, MsgCreateCollection);

function createBaseMsgCreateCollectionResponse(): MsgCreateCollectionResponse {
  return { $type: 'bitsong.nft.MsgCreateCollectionResponse', id: Long.UZERO };
}

export const MsgCreateCollectionResponse = {
  $type: 'bitsong.nft.MsgCreateCollectionResponse' as const,

  encode(
    message: MsgCreateCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCollectionResponse {
    return {
      $type: MsgCreateCollectionResponse.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateCollectionResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCollectionResponse>, I>>(
    object: I,
  ): MsgCreateCollectionResponse {
    const message = createBaseMsgCreateCollectionResponse();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateCollectionResponse.$type,
  MsgCreateCollectionResponse,
);

function createBaseMsgUpdateCollectionAuthority(): MsgUpdateCollectionAuthority {
  return {
    $type: 'bitsong.nft.MsgUpdateCollectionAuthority',
    sender: '',
    collectionId: Long.UZERO,
    newAuthority: '',
  };
}

export const MsgUpdateCollectionAuthority = {
  $type: 'bitsong.nft.MsgUpdateCollectionAuthority' as const,

  encode(
    message: MsgUpdateCollectionAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collectionId.isZero()) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.newAuthority !== '') {
      writer.uint32(26).string(message.newAuthority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateCollectionAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCollectionAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgUpdateCollectionAuthority {
    return {
      $type: MsgUpdateCollectionAuthority.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: MsgUpdateCollectionAuthority): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCollectionAuthority>, I>>(
    object: I,
  ): MsgUpdateCollectionAuthority {
    const message = createBaseMsgUpdateCollectionAuthority();
    message.sender = object.sender ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateCollectionAuthority.$type,
  MsgUpdateCollectionAuthority,
);

function createBaseMsgUpdateCollectionAuthorityResponse(): MsgUpdateCollectionAuthorityResponse {
  return { $type: 'bitsong.nft.MsgUpdateCollectionAuthorityResponse' };
}

export const MsgUpdateCollectionAuthorityResponse = {
  $type: 'bitsong.nft.MsgUpdateCollectionAuthorityResponse' as const,

  encode(
    _: MsgUpdateCollectionAuthorityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateCollectionAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCollectionAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCollectionAuthorityResponse {
    return {
      $type: MsgUpdateCollectionAuthorityResponse.$type,
    };
  },

  toJSON(_: MsgUpdateCollectionAuthorityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateCollectionAuthorityResponse>, I>,
  >(_: I): MsgUpdateCollectionAuthorityResponse {
    const message = createBaseMsgUpdateCollectionAuthorityResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateCollectionAuthorityResponse.$type,
  MsgUpdateCollectionAuthorityResponse,
);

/** Msg defines the Msg service */
export interface Msg {
  CreateNFT(request: MsgCreateNFT): Promise<MsgCreateNFTResponse>;
  PrintEdition(request: MsgPrintEdition): Promise<MsgPrintEditionResponse>;
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  SignMetadata(request: MsgSignMetadata): Promise<MsgSignMetadataResponse>;
  UpdateMetadata(
    request: MsgUpdateMetadata,
  ): Promise<MsgUpdateMetadataResponse>;
  UpdateMetadataAuthority(
    request: MsgUpdateMetadataAuthority,
  ): Promise<MsgUpdateMetadataAuthorityResponse>;
  UpdateMintAuthority(
    request: MsgUpdateMintAuthority,
  ): Promise<MsgUpdateMintAuthorityResponse>;
  CreateCollection(
    request: MsgCreateCollection,
  ): Promise<MsgCreateCollectionResponse>;
  UpdateCollectionAuthority(
    request: MsgUpdateCollectionAuthority,
  ): Promise<MsgUpdateCollectionAuthorityResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateNFT = this.CreateNFT.bind(this);
    this.PrintEdition = this.PrintEdition.bind(this);
    this.TransferNFT = this.TransferNFT.bind(this);
    this.SignMetadata = this.SignMetadata.bind(this);
    this.UpdateMetadata = this.UpdateMetadata.bind(this);
    this.UpdateMetadataAuthority = this.UpdateMetadataAuthority.bind(this);
    this.UpdateMintAuthority = this.UpdateMintAuthority.bind(this);
    this.CreateCollection = this.CreateCollection.bind(this);
    this.UpdateCollectionAuthority = this.UpdateCollectionAuthority.bind(this);
  }
  CreateNFT(request: MsgCreateNFT): Promise<MsgCreateNFTResponse> {
    const data = MsgCreateNFT.encode(request).finish();
    const promise = this.rpc.request('bitsong.nft.Msg', 'CreateNFT', data);
    return promise.then(data =>
      MsgCreateNFTResponse.decode(new _m0.Reader(data)),
    );
  }

  PrintEdition(request: MsgPrintEdition): Promise<MsgPrintEditionResponse> {
    const data = MsgPrintEdition.encode(request).finish();
    const promise = this.rpc.request('bitsong.nft.Msg', 'PrintEdition', data);
    return promise.then(data =>
      MsgPrintEditionResponse.decode(new _m0.Reader(data)),
    );
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request('bitsong.nft.Msg', 'TransferNFT', data);
    return promise.then(data =>
      MsgTransferNFTResponse.decode(new _m0.Reader(data)),
    );
  }

  SignMetadata(request: MsgSignMetadata): Promise<MsgSignMetadataResponse> {
    const data = MsgSignMetadata.encode(request).finish();
    const promise = this.rpc.request('bitsong.nft.Msg', 'SignMetadata', data);
    return promise.then(data =>
      MsgSignMetadataResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateMetadata(
    request: MsgUpdateMetadata,
  ): Promise<MsgUpdateMetadataResponse> {
    const data = MsgUpdateMetadata.encode(request).finish();
    const promise = this.rpc.request('bitsong.nft.Msg', 'UpdateMetadata', data);
    return promise.then(data =>
      MsgUpdateMetadataResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateMetadataAuthority(
    request: MsgUpdateMetadataAuthority,
  ): Promise<MsgUpdateMetadataAuthorityResponse> {
    const data = MsgUpdateMetadataAuthority.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.Msg',
      'UpdateMetadataAuthority',
      data,
    );
    return promise.then(data =>
      MsgUpdateMetadataAuthorityResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateMintAuthority(
    request: MsgUpdateMintAuthority,
  ): Promise<MsgUpdateMintAuthorityResponse> {
    const data = MsgUpdateMintAuthority.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.Msg',
      'UpdateMintAuthority',
      data,
    );
    return promise.then(data =>
      MsgUpdateMintAuthorityResponse.decode(new _m0.Reader(data)),
    );
  }

  CreateCollection(
    request: MsgCreateCollection,
  ): Promise<MsgCreateCollectionResponse> {
    const data = MsgCreateCollection.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.Msg',
      'CreateCollection',
      data,
    );
    return promise.then(data =>
      MsgCreateCollectionResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateCollectionAuthority(
    request: MsgUpdateCollectionAuthority,
  ): Promise<MsgUpdateCollectionAuthorityResponse> {
    const data = MsgUpdateCollectionAuthority.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.Msg',
      'UpdateCollectionAuthority',
      data,
    );
    return promise.then(data =>
      MsgUpdateCollectionAuthorityResponse.decode(new _m0.Reader(data)),
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
