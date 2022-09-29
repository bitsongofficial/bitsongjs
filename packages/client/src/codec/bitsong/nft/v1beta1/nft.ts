/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.nft.v1beta1';

export interface MasterEdition {
  $type: 'bitsong.nft.v1beta1.MasterEdition';
  supply: Long;
  maxSupply: Long;
}

export interface Metadata {
  $type: 'bitsong.nft.v1beta1.Metadata';
  id: Long;
  collId: Long;
  /** The name of the asset */
  name: string;
  /** URI pointing to JSON representing the asset */
  uri: string;
  /** Royalty basis points that goes to creators in secondary sales (0-10000) */
  sellerFeeBasisPoints: number;
  /**
   * Immutable, once flipped, all sales of this metadata are considered
   * secondary.
   */
  primarySaleHappened: boolean;
  /** Whether or not the data struct is mutable, default is not */
  isMutable: boolean;
  /** Array of creators, optional */
  creators: Creator[];
  /** who can update metadata (if is_mutable is true) */
  metadataAuthority: string;
  /** who can mint the editions */
  mintAuthority: string;
  masterEdition?: MasterEdition;
}

export interface LastMetadataIdInfo {
  $type: 'bitsong.nft.v1beta1.LastMetadataIdInfo';
  collId: Long;
  lastMetadataId: Long;
}

export interface Collection {
  $type: 'bitsong.nft.v1beta1.Collection';
  id: Long;
  /** The symbol for the asset */
  symbol: string;
  name: string;
  uri: string;
  /** Whether or not the data struct is mutable, default is not */
  isMutable: boolean;
  /** who can update metadata (if is_mutable is true) */
  updateAuthority: string;
}

export interface Creator {
  $type: 'bitsong.nft.v1beta1.Creator';
  address: string;
  verified: boolean;
  /** In percentages, NOT basis points ;) Watch out! */
  share: number;
}

export interface NFT {
  $type: 'bitsong.nft.v1beta1.NFT';
  collId: Long;
  metadataId: Long;
  /** edition nr (0 mean normal nft) */
  seq: Long;
  owner: string;
}

/** Params defines nft module's parameters */
export interface Params {
  $type: 'bitsong.nft.v1beta1.Params';
  issuePrice?: Coin;
}

export interface EventMetadataCreation {
  $type: 'bitsong.nft.v1beta1.EventMetadataCreation';
  creator: string;
  metadataId: Long;
}

export interface EventNFTCreation {
  $type: 'bitsong.nft.v1beta1.EventNFTCreation';
  creator: string;
  nftId: string;
}

export interface EventPrintEdition {
  $type: 'bitsong.nft.v1beta1.EventPrintEdition';
  metadataId: string;
  edition: Long;
}

export interface EventNFTTransfer {
  $type: 'bitsong.nft.v1beta1.EventNFTTransfer';
  nftId: string;
  sender: string;
  receiver: string;
}

export interface EventMetadataSign {
  $type: 'bitsong.nft.v1beta1.EventMetadataSign';
  signer: string;
  metadataId: Long;
}

export interface EventMetadataUpdate {
  $type: 'bitsong.nft.v1beta1.EventMetadataUpdate';
  updater: string;
  metadataId: Long;
}

export interface EventMetadataAuthorityUpdate {
  $type: 'bitsong.nft.v1beta1.EventMetadataAuthorityUpdate';
  metadataId: string;
  newAuthority: string;
}

export interface EventMintAuthorityUpdate {
  $type: 'bitsong.nft.v1beta1.EventMintAuthorityUpdate';
  metadataId: string;
  newAuthority: string;
}

export interface EventCollectionCreation {
  $type: 'bitsong.nft.v1beta1.EventCollectionCreation';
  creator: string;
  collectionId: Long;
}

export interface EventCollectionVerification {
  $type: 'bitsong.nft.v1beta1.EventCollectionVerification';
  verifier: string;
  collectionId: Long;
  nftId: string;
}

export interface EventCollectionUnverification {
  $type: 'bitsong.nft.v1beta1.EventCollectionUnverification';
  verifier: string;
  collectionId: Long;
  nftId: string;
}

export interface EventUpdateCollectionAuthority {
  $type: 'bitsong.nft.v1beta1.EventUpdateCollectionAuthority';
  collectionId: Long;
  newAuthority: string;
}

function createBaseMasterEdition(): MasterEdition {
  return {
    $type: 'bitsong.nft.v1beta1.MasterEdition',
    supply: Long.UZERO,
    maxSupply: Long.UZERO,
  };
}

export const MasterEdition = {
  $type: 'bitsong.nft.v1beta1.MasterEdition' as const,

  encode(
    message: MasterEdition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.supply.isZero()) {
      writer.uint32(8).uint64(message.supply);
    }
    if (!message.maxSupply.isZero()) {
      writer.uint32(16).uint64(message.maxSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterEdition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterEdition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = reader.uint64() as Long;
          break;
        case 2:
          message.maxSupply = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MasterEdition {
    return {
      $type: MasterEdition.$type,
      supply: isSet(object.supply) ? Long.fromValue(object.supply) : Long.UZERO,
      maxSupply: isSet(object.maxSupply)
        ? Long.fromValue(object.maxSupply)
        : Long.UZERO,
    };
  },

  toJSON(message: MasterEdition): unknown {
    const obj: any = {};
    message.supply !== undefined &&
      (obj.supply = (message.supply || Long.UZERO).toString());
    message.maxSupply !== undefined &&
      (obj.maxSupply = (message.maxSupply || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterEdition>, I>>(
    object: I,
  ): MasterEdition {
    const message = createBaseMasterEdition();
    message.supply =
      object.supply !== undefined && object.supply !== null
        ? Long.fromValue(object.supply)
        : Long.UZERO;
    message.maxSupply =
      object.maxSupply !== undefined && object.maxSupply !== null
        ? Long.fromValue(object.maxSupply)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MasterEdition.$type, MasterEdition);

function createBaseMetadata(): Metadata {
  return {
    $type: 'bitsong.nft.v1beta1.Metadata',
    id: Long.UZERO,
    collId: Long.UZERO,
    name: '',
    uri: '',
    sellerFeeBasisPoints: 0,
    primarySaleHappened: false,
    isMutable: false,
    creators: [],
    metadataAuthority: '',
    mintAuthority: '',
    masterEdition: undefined,
  };
}

export const Metadata = {
  $type: 'bitsong.nft.v1beta1.Metadata' as const,

  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.uri !== '') {
      writer.uint32(34).string(message.uri);
    }
    if (message.sellerFeeBasisPoints !== 0) {
      writer.uint32(40).uint32(message.sellerFeeBasisPoints);
    }
    if (message.primarySaleHappened === true) {
      writer.uint32(48).bool(message.primarySaleHappened);
    }
    if (message.isMutable === true) {
      writer.uint32(56).bool(message.isMutable);
    }
    for (const v of message.creators) {
      Creator.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.metadataAuthority !== '') {
      writer.uint32(74).string(message.metadataAuthority);
    }
    if (message.mintAuthority !== '') {
      writer.uint32(82).string(message.mintAuthority);
    }
    if (message.masterEdition !== undefined) {
      MasterEdition.encode(
        message.masterEdition,
        writer.uint32(90).fork(),
      ).ldelim();
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
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.sellerFeeBasisPoints = reader.uint32();
          break;
        case 6:
          message.primarySaleHappened = reader.bool();
          break;
        case 7:
          message.isMutable = reader.bool();
          break;
        case 8:
          message.creators.push(Creator.decode(reader, reader.uint32()));
          break;
        case 9:
          message.metadataAuthority = reader.string();
          break;
        case 10:
          message.mintAuthority = reader.string();
          break;
        case 11:
          message.masterEdition = MasterEdition.decode(reader, reader.uint32());
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
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : '',
      uri: isSet(object.uri) ? String(object.uri) : '',
      sellerFeeBasisPoints: isSet(object.sellerFeeBasisPoints)
        ? Number(object.sellerFeeBasisPoints)
        : 0,
      primarySaleHappened: isSet(object.primarySaleHappened)
        ? Boolean(object.primarySaleHappened)
        : false,
      isMutable: isSet(object.isMutable) ? Boolean(object.isMutable) : false,
      creators: Array.isArray(object?.creators)
        ? object.creators.map((e: any) => Creator.fromJSON(e))
        : [],
      metadataAuthority: isSet(object.metadataAuthority)
        ? String(object.metadataAuthority)
        : '',
      mintAuthority: isSet(object.mintAuthority)
        ? String(object.mintAuthority)
        : '',
      masterEdition: isSet(object.masterEdition)
        ? MasterEdition.fromJSON(object.masterEdition)
        : undefined,
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.sellerFeeBasisPoints !== undefined &&
      (obj.sellerFeeBasisPoints = Math.round(message.sellerFeeBasisPoints));
    message.primarySaleHappened !== undefined &&
      (obj.primarySaleHappened = message.primarySaleHappened);
    message.isMutable !== undefined && (obj.isMutable = message.isMutable);
    if (message.creators) {
      obj.creators = message.creators.map(e =>
        e ? Creator.toJSON(e) : undefined,
      );
    } else {
      obj.creators = [];
    }
    message.metadataAuthority !== undefined &&
      (obj.metadataAuthority = message.metadataAuthority);
    message.mintAuthority !== undefined &&
      (obj.mintAuthority = message.mintAuthority);
    message.masterEdition !== undefined &&
      (obj.masterEdition = message.masterEdition
        ? MasterEdition.toJSON(message.masterEdition)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.name = object.name ?? '';
    message.uri = object.uri ?? '';
    message.sellerFeeBasisPoints = object.sellerFeeBasisPoints ?? 0;
    message.primarySaleHappened = object.primarySaleHappened ?? false;
    message.isMutable = object.isMutable ?? false;
    message.creators = object.creators?.map(e => Creator.fromPartial(e)) || [];
    message.metadataAuthority = object.metadataAuthority ?? '';
    message.mintAuthority = object.mintAuthority ?? '';
    message.masterEdition =
      object.masterEdition !== undefined && object.masterEdition !== null
        ? MasterEdition.fromPartial(object.masterEdition)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Metadata.$type, Metadata);

function createBaseLastMetadataIdInfo(): LastMetadataIdInfo {
  return {
    $type: 'bitsong.nft.v1beta1.LastMetadataIdInfo',
    collId: Long.UZERO,
    lastMetadataId: Long.UZERO,
  };
}

export const LastMetadataIdInfo = {
  $type: 'bitsong.nft.v1beta1.LastMetadataIdInfo' as const,

  encode(
    message: LastMetadataIdInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collId.isZero()) {
      writer.uint32(8).uint64(message.collId);
    }
    if (!message.lastMetadataId.isZero()) {
      writer.uint32(16).uint64(message.lastMetadataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastMetadataIdInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastMetadataIdInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collId = reader.uint64() as Long;
          break;
        case 2:
          message.lastMetadataId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastMetadataIdInfo {
    return {
      $type: LastMetadataIdInfo.$type,
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      lastMetadataId: isSet(object.lastMetadataId)
        ? Long.fromValue(object.lastMetadataId)
        : Long.UZERO,
    };
  },

  toJSON(message: LastMetadataIdInfo): unknown {
    const obj: any = {};
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.lastMetadataId !== undefined &&
      (obj.lastMetadataId = (message.lastMetadataId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastMetadataIdInfo>, I>>(
    object: I,
  ): LastMetadataIdInfo {
    const message = createBaseLastMetadataIdInfo();
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.lastMetadataId =
      object.lastMetadataId !== undefined && object.lastMetadataId !== null
        ? Long.fromValue(object.lastMetadataId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(LastMetadataIdInfo.$type, LastMetadataIdInfo);

function createBaseCollection(): Collection {
  return {
    $type: 'bitsong.nft.v1beta1.Collection',
    id: Long.UZERO,
    symbol: '',
    name: '',
    uri: '',
    isMutable: false,
    updateAuthority: '',
  };
}

export const Collection = {
  $type: 'bitsong.nft.v1beta1.Collection' as const,

  encode(
    message: Collection,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
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

  fromJSON(object: any): Collection {
    return {
      $type: Collection.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      symbol: isSet(object.symbol) ? String(object.symbol) : '',
      name: isSet(object.name) ? String(object.name) : '',
      uri: isSet(object.uri) ? String(object.uri) : '',
      isMutable: isSet(object.isMutable) ? Boolean(object.isMutable) : false,
      updateAuthority: isSet(object.updateAuthority)
        ? String(object.updateAuthority)
        : '',
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.uri !== undefined && (obj.uri = message.uri);
    message.isMutable !== undefined && (obj.isMutable = message.isMutable);
    message.updateAuthority !== undefined &&
      (obj.updateAuthority = message.updateAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Collection>, I>>(
    object: I,
  ): Collection {
    const message = createBaseCollection();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.symbol = object.symbol ?? '';
    message.name = object.name ?? '';
    message.uri = object.uri ?? '';
    message.isMutable = object.isMutable ?? false;
    message.updateAuthority = object.updateAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(Collection.$type, Collection);

function createBaseCreator(): Creator {
  return {
    $type: 'bitsong.nft.v1beta1.Creator',
    address: '',
    verified: false,
    share: 0,
  };
}

export const Creator = {
  $type: 'bitsong.nft.v1beta1.Creator' as const,

  encode(
    message: Creator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address);
    }
    if (message.verified === true) {
      writer.uint32(16).bool(message.verified);
    }
    if (message.share !== 0) {
      writer.uint32(24).uint32(message.share);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Creator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.verified = reader.bool();
          break;
        case 3:
          message.share = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Creator {
    return {
      $type: Creator.$type,
      address: isSet(object.address) ? String(object.address) : '',
      verified: isSet(object.verified) ? Boolean(object.verified) : false,
      share: isSet(object.share) ? Number(object.share) : 0,
    };
  },

  toJSON(message: Creator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.verified !== undefined && (obj.verified = message.verified);
    message.share !== undefined && (obj.share = Math.round(message.share));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Creator>, I>>(object: I): Creator {
    const message = createBaseCreator();
    message.address = object.address ?? '';
    message.verified = object.verified ?? false;
    message.share = object.share ?? 0;
    return message;
  },
};

messageTypeRegistry.set(Creator.$type, Creator);

function createBaseNFT(): NFT {
  return {
    $type: 'bitsong.nft.v1beta1.NFT',
    collId: Long.UZERO,
    metadataId: Long.UZERO,
    seq: Long.UZERO,
    owner: '',
  };
}

export const NFT = {
  $type: 'bitsong.nft.v1beta1.NFT' as const,

  encode(message: NFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.collId.isZero()) {
      writer.uint32(8).uint64(message.collId);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(16).uint64(message.metadataId);
    }
    if (!message.seq.isZero()) {
      writer.uint32(24).uint64(message.seq);
    }
    if (message.owner !== '') {
      writer.uint32(34).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collId = reader.uint64() as Long;
          break;
        case 2:
          message.metadataId = reader.uint64() as Long;
          break;
        case 3:
          message.seq = reader.uint64() as Long;
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

  fromJSON(object: any): NFT {
    return {
      $type: NFT.$type,
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
      seq: isSet(object.seq) ? Long.fromValue(object.seq) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: NFT): unknown {
    const obj: any = {};
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    message.seq !== undefined &&
      (obj.seq = (message.seq || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NFT>, I>>(object: I): NFT {
    const message = createBaseNFT();
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    message.seq =
      object.seq !== undefined && object.seq !== null
        ? Long.fromValue(object.seq)
        : Long.UZERO;
    message.owner = object.owner ?? '';
    return message;
  },
};

messageTypeRegistry.set(NFT.$type, NFT);

function createBaseParams(): Params {
  return { $type: 'bitsong.nft.v1beta1.Params', issuePrice: undefined };
}

export const Params = {
  $type: 'bitsong.nft.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.issuePrice !== undefined) {
      Coin.encode(message.issuePrice, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuePrice = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      issuePrice: isSet(object.issuePrice)
        ? Coin.fromJSON(object.issuePrice)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.issuePrice !== undefined &&
      (obj.issuePrice = message.issuePrice
        ? Coin.toJSON(message.issuePrice)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.issuePrice =
      object.issuePrice !== undefined && object.issuePrice !== null
        ? Coin.fromPartial(object.issuePrice)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseEventMetadataCreation(): EventMetadataCreation {
  return {
    $type: 'bitsong.nft.v1beta1.EventMetadataCreation',
    creator: '',
    metadataId: Long.UZERO,
  };
}

export const EventMetadataCreation = {
  $type: 'bitsong.nft.v1beta1.EventMetadataCreation' as const,

  encode(
    message: EventMetadataCreation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(16).uint64(message.metadataId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventMetadataCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMetadataCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.metadataId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMetadataCreation {
    return {
      $type: EventMetadataCreation.$type,
      creator: isSet(object.creator) ? String(object.creator) : '',
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventMetadataCreation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMetadataCreation>, I>>(
    object: I,
  ): EventMetadataCreation {
    const message = createBaseEventMetadataCreation();
    message.creator = object.creator ?? '';
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventMetadataCreation.$type, EventMetadataCreation);

function createBaseEventNFTCreation(): EventNFTCreation {
  return {
    $type: 'bitsong.nft.v1beta1.EventNFTCreation',
    creator: '',
    nftId: '',
  };
}

export const EventNFTCreation = {
  $type: 'bitsong.nft.v1beta1.EventNFTCreation' as const,

  encode(
    message: EventNFTCreation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftId !== '') {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNFTCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNFTCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventNFTCreation {
    return {
      $type: EventNFTCreation.$type,
      creator: isSet(object.creator) ? String(object.creator) : '',
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
    };
  },

  toJSON(message: EventNFTCreation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventNFTCreation>, I>>(
    object: I,
  ): EventNFTCreation {
    const message = createBaseEventNFTCreation();
    message.creator = object.creator ?? '';
    message.nftId = object.nftId ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventNFTCreation.$type, EventNFTCreation);

function createBaseEventPrintEdition(): EventPrintEdition {
  return {
    $type: 'bitsong.nft.v1beta1.EventPrintEdition',
    metadataId: '',
    edition: Long.UZERO,
  };
}

export const EventPrintEdition = {
  $type: 'bitsong.nft.v1beta1.EventPrintEdition' as const,

  encode(
    message: EventPrintEdition,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metadataId !== '') {
      writer.uint32(10).string(message.metadataId);
    }
    if (!message.edition.isZero()) {
      writer.uint32(16).uint64(message.edition);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPrintEdition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPrintEdition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataId = reader.string();
          break;
        case 2:
          message.edition = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPrintEdition {
    return {
      $type: EventPrintEdition.$type,
      metadataId: isSet(object.metadataId) ? String(object.metadataId) : '',
      edition: isSet(object.edition)
        ? Long.fromValue(object.edition)
        : Long.UZERO,
    };
  },

  toJSON(message: EventPrintEdition): unknown {
    const obj: any = {};
    message.metadataId !== undefined && (obj.metadataId = message.metadataId);
    message.edition !== undefined &&
      (obj.edition = (message.edition || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPrintEdition>, I>>(
    object: I,
  ): EventPrintEdition {
    const message = createBaseEventPrintEdition();
    message.metadataId = object.metadataId ?? '';
    message.edition =
      object.edition !== undefined && object.edition !== null
        ? Long.fromValue(object.edition)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventPrintEdition.$type, EventPrintEdition);

function createBaseEventNFTTransfer(): EventNFTTransfer {
  return {
    $type: 'bitsong.nft.v1beta1.EventNFTTransfer',
    nftId: '',
    sender: '',
    receiver: '',
  };
}

export const EventNFTTransfer = {
  $type: 'bitsong.nft.v1beta1.EventNFTTransfer' as const,

  encode(
    message: EventNFTTransfer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nftId !== '') {
      writer.uint32(10).string(message.nftId);
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== '') {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventNFTTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventNFTTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventNFTTransfer {
    return {
      $type: EventNFTTransfer.$type,
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
      sender: isSet(object.sender) ? String(object.sender) : '',
      receiver: isSet(object.receiver) ? String(object.receiver) : '',
    };
  },

  toJSON(message: EventNFTTransfer): unknown {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventNFTTransfer>, I>>(
    object: I,
  ): EventNFTTransfer {
    const message = createBaseEventNFTTransfer();
    message.nftId = object.nftId ?? '';
    message.sender = object.sender ?? '';
    message.receiver = object.receiver ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventNFTTransfer.$type, EventNFTTransfer);

function createBaseEventMetadataSign(): EventMetadataSign {
  return {
    $type: 'bitsong.nft.v1beta1.EventMetadataSign',
    signer: '',
    metadataId: Long.UZERO,
  };
}

export const EventMetadataSign = {
  $type: 'bitsong.nft.v1beta1.EventMetadataSign' as const,

  encode(
    message: EventMetadataSign,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.signer !== '') {
      writer.uint32(10).string(message.signer);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(16).uint64(message.metadataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMetadataSign {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMetadataSign();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.metadataId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMetadataSign {
    return {
      $type: EventMetadataSign.$type,
      signer: isSet(object.signer) ? String(object.signer) : '',
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventMetadataSign): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMetadataSign>, I>>(
    object: I,
  ): EventMetadataSign {
    const message = createBaseEventMetadataSign();
    message.signer = object.signer ?? '';
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventMetadataSign.$type, EventMetadataSign);

function createBaseEventMetadataUpdate(): EventMetadataUpdate {
  return {
    $type: 'bitsong.nft.v1beta1.EventMetadataUpdate',
    updater: '',
    metadataId: Long.UZERO,
  };
}

export const EventMetadataUpdate = {
  $type: 'bitsong.nft.v1beta1.EventMetadataUpdate' as const,

  encode(
    message: EventMetadataUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.updater !== '') {
      writer.uint32(10).string(message.updater);
    }
    if (!message.metadataId.isZero()) {
      writer.uint32(16).uint64(message.metadataId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMetadataUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMetadataUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updater = reader.string();
          break;
        case 2:
          message.metadataId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMetadataUpdate {
    return {
      $type: EventMetadataUpdate.$type,
      updater: isSet(object.updater) ? String(object.updater) : '',
      metadataId: isSet(object.metadataId)
        ? Long.fromValue(object.metadataId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventMetadataUpdate): unknown {
    const obj: any = {};
    message.updater !== undefined && (obj.updater = message.updater);
    message.metadataId !== undefined &&
      (obj.metadataId = (message.metadataId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMetadataUpdate>, I>>(
    object: I,
  ): EventMetadataUpdate {
    const message = createBaseEventMetadataUpdate();
    message.updater = object.updater ?? '';
    message.metadataId =
      object.metadataId !== undefined && object.metadataId !== null
        ? Long.fromValue(object.metadataId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventMetadataUpdate.$type, EventMetadataUpdate);

function createBaseEventMetadataAuthorityUpdate(): EventMetadataAuthorityUpdate {
  return {
    $type: 'bitsong.nft.v1beta1.EventMetadataAuthorityUpdate',
    metadataId: '',
    newAuthority: '',
  };
}

export const EventMetadataAuthorityUpdate = {
  $type: 'bitsong.nft.v1beta1.EventMetadataAuthorityUpdate' as const,

  encode(
    message: EventMetadataAuthorityUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metadataId !== '') {
      writer.uint32(10).string(message.metadataId);
    }
    if (message.newAuthority !== '') {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventMetadataAuthorityUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMetadataAuthorityUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataId = reader.string();
          break;
        case 2:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMetadataAuthorityUpdate {
    return {
      $type: EventMetadataAuthorityUpdate.$type,
      metadataId: isSet(object.metadataId) ? String(object.metadataId) : '',
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: EventMetadataAuthorityUpdate): unknown {
    const obj: any = {};
    message.metadataId !== undefined && (obj.metadataId = message.metadataId);
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMetadataAuthorityUpdate>, I>>(
    object: I,
  ): EventMetadataAuthorityUpdate {
    const message = createBaseEventMetadataAuthorityUpdate();
    message.metadataId = object.metadataId ?? '';
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventMetadataAuthorityUpdate.$type,
  EventMetadataAuthorityUpdate,
);

function createBaseEventMintAuthorityUpdate(): EventMintAuthorityUpdate {
  return {
    $type: 'bitsong.nft.v1beta1.EventMintAuthorityUpdate',
    metadataId: '',
    newAuthority: '',
  };
}

export const EventMintAuthorityUpdate = {
  $type: 'bitsong.nft.v1beta1.EventMintAuthorityUpdate' as const,

  encode(
    message: EventMintAuthorityUpdate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metadataId !== '') {
      writer.uint32(10).string(message.metadataId);
    }
    if (message.newAuthority !== '') {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventMintAuthorityUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintAuthorityUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadataId = reader.string();
          break;
        case 2:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMintAuthorityUpdate {
    return {
      $type: EventMintAuthorityUpdate.$type,
      metadataId: isSet(object.metadataId) ? String(object.metadataId) : '',
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: EventMintAuthorityUpdate): unknown {
    const obj: any = {};
    message.metadataId !== undefined && (obj.metadataId = message.metadataId);
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMintAuthorityUpdate>, I>>(
    object: I,
  ): EventMintAuthorityUpdate {
    const message = createBaseEventMintAuthorityUpdate();
    message.metadataId = object.metadataId ?? '';
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventMintAuthorityUpdate.$type,
  EventMintAuthorityUpdate,
);

function createBaseEventCollectionCreation(): EventCollectionCreation {
  return {
    $type: 'bitsong.nft.v1beta1.EventCollectionCreation',
    creator: '',
    collectionId: Long.UZERO,
  };
}

export const EventCollectionCreation = {
  $type: 'bitsong.nft.v1beta1.EventCollectionCreation' as const,

  encode(
    message: EventCollectionCreation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.collectionId.isZero()) {
      writer.uint32(16).uint64(message.collectionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventCollectionCreation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCollectionCreation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCollectionCreation {
    return {
      $type: EventCollectionCreation.$type,
      creator: isSet(object.creator) ? String(object.creator) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventCollectionCreation): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCollectionCreation>, I>>(
    object: I,
  ): EventCollectionCreation {
    const message = createBaseEventCollectionCreation();
    message.creator = object.creator ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCollectionCreation.$type, EventCollectionCreation);

function createBaseEventCollectionVerification(): EventCollectionVerification {
  return {
    $type: 'bitsong.nft.v1beta1.EventCollectionVerification',
    verifier: '',
    collectionId: Long.UZERO,
    nftId: '',
  };
}

export const EventCollectionVerification = {
  $type: 'bitsong.nft.v1beta1.EventCollectionVerification' as const,

  encode(
    message: EventCollectionVerification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.verifier !== '') {
      writer.uint32(10).string(message.verifier);
    }
    if (!message.collectionId.isZero()) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.nftId !== '') {
      writer.uint32(26).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventCollectionVerification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCollectionVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifier = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64() as Long;
          break;
        case 3:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCollectionVerification {
    return {
      $type: EventCollectionVerification.$type,
      verifier: isSet(object.verifier) ? String(object.verifier) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
    };
  },

  toJSON(message: EventCollectionVerification): unknown {
    const obj: any = {};
    message.verifier !== undefined && (obj.verifier = message.verifier);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCollectionVerification>, I>>(
    object: I,
  ): EventCollectionVerification {
    const message = createBaseEventCollectionVerification();
    message.verifier = object.verifier ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.nftId = object.nftId ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventCollectionVerification.$type,
  EventCollectionVerification,
);

function createBaseEventCollectionUnverification(): EventCollectionUnverification {
  return {
    $type: 'bitsong.nft.v1beta1.EventCollectionUnverification',
    verifier: '',
    collectionId: Long.UZERO,
    nftId: '',
  };
}

export const EventCollectionUnverification = {
  $type: 'bitsong.nft.v1beta1.EventCollectionUnverification' as const,

  encode(
    message: EventCollectionUnverification,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.verifier !== '') {
      writer.uint32(10).string(message.verifier);
    }
    if (!message.collectionId.isZero()) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.nftId !== '') {
      writer.uint32(26).string(message.nftId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventCollectionUnverification {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCollectionUnverification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verifier = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64() as Long;
          break;
        case 3:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCollectionUnverification {
    return {
      $type: EventCollectionUnverification.$type,
      verifier: isSet(object.verifier) ? String(object.verifier) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
    };
  },

  toJSON(message: EventCollectionUnverification): unknown {
    const obj: any = {};
    message.verifier !== undefined && (obj.verifier = message.verifier);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCollectionUnverification>, I>>(
    object: I,
  ): EventCollectionUnverification {
    const message = createBaseEventCollectionUnverification();
    message.verifier = object.verifier ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.nftId = object.nftId ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventCollectionUnverification.$type,
  EventCollectionUnverification,
);

function createBaseEventUpdateCollectionAuthority(): EventUpdateCollectionAuthority {
  return {
    $type: 'bitsong.nft.v1beta1.EventUpdateCollectionAuthority',
    collectionId: Long.UZERO,
    newAuthority: '',
  };
}

export const EventUpdateCollectionAuthority = {
  $type: 'bitsong.nft.v1beta1.EventUpdateCollectionAuthority' as const,

  encode(
    message: EventUpdateCollectionAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collectionId.isZero()) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.newAuthority !== '') {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventUpdateCollectionAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCollectionAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64() as Long;
          break;
        case 2:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateCollectionAuthority {
    return {
      $type: EventUpdateCollectionAuthority.$type,
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: EventUpdateCollectionAuthority): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateCollectionAuthority>, I>>(
    object: I,
  ): EventUpdateCollectionAuthority {
    const message = createBaseEventUpdateCollectionAuthority();
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventUpdateCollectionAuthority.$type,
  EventUpdateCollectionAuthority,
);

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
