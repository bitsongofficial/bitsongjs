/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import Long from 'long';
import { Creator } from '../nft/v1beta1/nft';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.launchpad.v1beta1';

export interface LaunchPad {
  $type: 'bitsong.launchpad.v1beta1.LaunchPad';
  /** id of the collection */
  collId: Long;
  /** mint price */
  price: Long;
  /** wallet to receive payments */
  treasury: string;
  /** denom for the auction */
  denom: string;
  /** Timestamp when minting is allowed */
  goLiveDate: Long;
  /** mint end timestamp - not considered when set as 0 */
  endTimestamp: Long;
  /** max mintable amount */
  maxMint: Long;
  /** minted amount */
  minted: Long;
  /** owner of launchpad */
  authority: string;
  /** all metadata url is generated from metadata_base_url */
  metadataBaseUrl: string;
  /** mutability of the minted nfts */
  mutable: boolean;
  /** Royalty basis points that goes to creators in secondary sales (0-10000) */
  sellerFeeBasisPoints: number;
  /** Creators of metadata */
  creators: Creator[];
  /** shows if ids are minted in sequence or shuffled */
  shuffle: boolean;
}

export interface MintableMetadataIds {
  $type: 'bitsong.launchpad.v1beta1.MintableMetadataIds';
  collectionId: Long;
  mintableMetadataIds: Long[];
}

/** Params defines launchpad module's parameters */
export interface Params {
  $type: 'bitsong.launchpad.v1beta1.Params';
  launchpadCreationPrice?: Coin;
  launchpadMaxMint: Long;
}

export interface EventCreateLaunchPad {
  $type: 'bitsong.launchpad.v1beta1.EventCreateLaunchPad';
  creator: string;
  collectionId: Long;
}

export interface EventUpdateLaunchPad {
  $type: 'bitsong.launchpad.v1beta1.EventUpdateLaunchPad';
  creator: string;
  collectionId: Long;
}

export interface EventCloseLaunchPad {
  $type: 'bitsong.launchpad.v1beta1.EventCloseLaunchPad';
  creator: string;
  collectionId: Long;
}

export interface EventMintNFT {
  $type: 'bitsong.launchpad.v1beta1.EventMintNFT';
  collectionId: Long;
  nftId: string;
}

function createBaseLaunchPad(): LaunchPad {
  return {
    $type: 'bitsong.launchpad.v1beta1.LaunchPad',
    collId: Long.UZERO,
    price: Long.UZERO,
    treasury: '',
    denom: '',
    goLiveDate: Long.UZERO,
    endTimestamp: Long.UZERO,
    maxMint: Long.UZERO,
    minted: Long.UZERO,
    authority: '',
    metadataBaseUrl: '',
    mutable: false,
    sellerFeeBasisPoints: 0,
    creators: [],
    shuffle: false,
  };
}

export const LaunchPad = {
  $type: 'bitsong.launchpad.v1beta1.LaunchPad' as const,

  encode(
    message: LaunchPad,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collId.isZero()) {
      writer.uint32(8).uint64(message.collId);
    }
    if (!message.price.isZero()) {
      writer.uint32(16).uint64(message.price);
    }
    if (message.treasury !== '') {
      writer.uint32(26).string(message.treasury);
    }
    if (message.denom !== '') {
      writer.uint32(34).string(message.denom);
    }
    if (!message.goLiveDate.isZero()) {
      writer.uint32(40).uint64(message.goLiveDate);
    }
    if (!message.endTimestamp.isZero()) {
      writer.uint32(48).uint64(message.endTimestamp);
    }
    if (!message.maxMint.isZero()) {
      writer.uint32(56).uint64(message.maxMint);
    }
    if (!message.minted.isZero()) {
      writer.uint32(64).uint64(message.minted);
    }
    if (message.authority !== '') {
      writer.uint32(74).string(message.authority);
    }
    if (message.metadataBaseUrl !== '') {
      writer.uint32(82).string(message.metadataBaseUrl);
    }
    if (message.mutable === true) {
      writer.uint32(88).bool(message.mutable);
    }
    if (message.sellerFeeBasisPoints !== 0) {
      writer.uint32(96).uint32(message.sellerFeeBasisPoints);
    }
    for (const v of message.creators) {
      Creator.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.shuffle === true) {
      writer.uint32(112).bool(message.shuffle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LaunchPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLaunchPad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collId = reader.uint64() as Long;
          break;
        case 2:
          message.price = reader.uint64() as Long;
          break;
        case 3:
          message.treasury = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.goLiveDate = reader.uint64() as Long;
          break;
        case 6:
          message.endTimestamp = reader.uint64() as Long;
          break;
        case 7:
          message.maxMint = reader.uint64() as Long;
          break;
        case 8:
          message.minted = reader.uint64() as Long;
          break;
        case 9:
          message.authority = reader.string();
          break;
        case 10:
          message.metadataBaseUrl = reader.string();
          break;
        case 11:
          message.mutable = reader.bool();
          break;
        case 12:
          message.sellerFeeBasisPoints = reader.uint32();
          break;
        case 13:
          message.creators.push(Creator.decode(reader, reader.uint32()));
          break;
        case 14:
          message.shuffle = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LaunchPad {
    return {
      $type: LaunchPad.$type,
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      price: isSet(object.price) ? Long.fromValue(object.price) : Long.UZERO,
      treasury: isSet(object.treasury) ? String(object.treasury) : '',
      denom: isSet(object.denom) ? String(object.denom) : '',
      goLiveDate: isSet(object.goLiveDate)
        ? Long.fromValue(object.goLiveDate)
        : Long.UZERO,
      endTimestamp: isSet(object.endTimestamp)
        ? Long.fromValue(object.endTimestamp)
        : Long.UZERO,
      maxMint: isSet(object.maxMint)
        ? Long.fromValue(object.maxMint)
        : Long.UZERO,
      minted: isSet(object.minted) ? Long.fromValue(object.minted) : Long.UZERO,
      authority: isSet(object.authority) ? String(object.authority) : '',
      metadataBaseUrl: isSet(object.metadataBaseUrl)
        ? String(object.metadataBaseUrl)
        : '',
      mutable: isSet(object.mutable) ? Boolean(object.mutable) : false,
      sellerFeeBasisPoints: isSet(object.sellerFeeBasisPoints)
        ? Number(object.sellerFeeBasisPoints)
        : 0,
      creators: Array.isArray(object?.creators)
        ? object.creators.map((e: any) => Creator.fromJSON(e))
        : [],
      shuffle: isSet(object.shuffle) ? Boolean(object.shuffle) : false,
    };
  },

  toJSON(message: LaunchPad): unknown {
    const obj: any = {};
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.price !== undefined &&
      (obj.price = (message.price || Long.UZERO).toString());
    message.treasury !== undefined && (obj.treasury = message.treasury);
    message.denom !== undefined && (obj.denom = message.denom);
    message.goLiveDate !== undefined &&
      (obj.goLiveDate = (message.goLiveDate || Long.UZERO).toString());
    message.endTimestamp !== undefined &&
      (obj.endTimestamp = (message.endTimestamp || Long.UZERO).toString());
    message.maxMint !== undefined &&
      (obj.maxMint = (message.maxMint || Long.UZERO).toString());
    message.minted !== undefined &&
      (obj.minted = (message.minted || Long.UZERO).toString());
    message.authority !== undefined && (obj.authority = message.authority);
    message.metadataBaseUrl !== undefined &&
      (obj.metadataBaseUrl = message.metadataBaseUrl);
    message.mutable !== undefined && (obj.mutable = message.mutable);
    message.sellerFeeBasisPoints !== undefined &&
      (obj.sellerFeeBasisPoints = Math.round(message.sellerFeeBasisPoints));
    if (message.creators) {
      obj.creators = message.creators.map(e =>
        e ? Creator.toJSON(e) : undefined,
      );
    } else {
      obj.creators = [];
    }
    message.shuffle !== undefined && (obj.shuffle = message.shuffle);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LaunchPad>, I>>(
    object: I,
  ): LaunchPad {
    const message = createBaseLaunchPad();
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.price =
      object.price !== undefined && object.price !== null
        ? Long.fromValue(object.price)
        : Long.UZERO;
    message.treasury = object.treasury ?? '';
    message.denom = object.denom ?? '';
    message.goLiveDate =
      object.goLiveDate !== undefined && object.goLiveDate !== null
        ? Long.fromValue(object.goLiveDate)
        : Long.UZERO;
    message.endTimestamp =
      object.endTimestamp !== undefined && object.endTimestamp !== null
        ? Long.fromValue(object.endTimestamp)
        : Long.UZERO;
    message.maxMint =
      object.maxMint !== undefined && object.maxMint !== null
        ? Long.fromValue(object.maxMint)
        : Long.UZERO;
    message.minted =
      object.minted !== undefined && object.minted !== null
        ? Long.fromValue(object.minted)
        : Long.UZERO;
    message.authority = object.authority ?? '';
    message.metadataBaseUrl = object.metadataBaseUrl ?? '';
    message.mutable = object.mutable ?? false;
    message.sellerFeeBasisPoints = object.sellerFeeBasisPoints ?? 0;
    message.creators = object.creators?.map(e => Creator.fromPartial(e)) || [];
    message.shuffle = object.shuffle ?? false;
    return message;
  },
};

messageTypeRegistry.set(LaunchPad.$type, LaunchPad);

function createBaseMintableMetadataIds(): MintableMetadataIds {
  return {
    $type: 'bitsong.launchpad.v1beta1.MintableMetadataIds',
    collectionId: Long.UZERO,
    mintableMetadataIds: [],
  };
}

export const MintableMetadataIds = {
  $type: 'bitsong.launchpad.v1beta1.MintableMetadataIds' as const,

  encode(
    message: MintableMetadataIds,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collectionId.isZero()) {
      writer.uint32(8).uint64(message.collectionId);
    }
    writer.uint32(18).fork();
    for (const v of message.mintableMetadataIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintableMetadataIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintableMetadataIds();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.mintableMetadataIds.push(reader.uint64() as Long);
            }
          } else {
            message.mintableMetadataIds.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintableMetadataIds {
    return {
      $type: MintableMetadataIds.$type,
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      mintableMetadataIds: Array.isArray(object?.mintableMetadataIds)
        ? object.mintableMetadataIds.map((e: any) => Long.fromValue(e))
        : [],
    };
  },

  toJSON(message: MintableMetadataIds): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    if (message.mintableMetadataIds) {
      obj.mintableMetadataIds = message.mintableMetadataIds.map(e =>
        (e || Long.UZERO).toString(),
      );
    } else {
      obj.mintableMetadataIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MintableMetadataIds>, I>>(
    object: I,
  ): MintableMetadataIds {
    const message = createBaseMintableMetadataIds();
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.mintableMetadataIds =
      object.mintableMetadataIds?.map(e => Long.fromValue(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MintableMetadataIds.$type, MintableMetadataIds);

function createBaseParams(): Params {
  return {
    $type: 'bitsong.launchpad.v1beta1.Params',
    launchpadCreationPrice: undefined,
    launchpadMaxMint: Long.UZERO,
  };
}

export const Params = {
  $type: 'bitsong.launchpad.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.launchpadCreationPrice !== undefined) {
      Coin.encode(
        message.launchpadCreationPrice,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (!message.launchpadMaxMint.isZero()) {
      writer.uint32(16).uint64(message.launchpadMaxMint);
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
          message.launchpadCreationPrice = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.launchpadMaxMint = reader.uint64() as Long;
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
      launchpadCreationPrice: isSet(object.launchpadCreationPrice)
        ? Coin.fromJSON(object.launchpadCreationPrice)
        : undefined,
      launchpadMaxMint: isSet(object.launchpadMaxMint)
        ? Long.fromValue(object.launchpadMaxMint)
        : Long.UZERO,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.launchpadCreationPrice !== undefined &&
      (obj.launchpadCreationPrice = message.launchpadCreationPrice
        ? Coin.toJSON(message.launchpadCreationPrice)
        : undefined);
    message.launchpadMaxMint !== undefined &&
      (obj.launchpadMaxMint = (
        message.launchpadMaxMint || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.launchpadCreationPrice =
      object.launchpadCreationPrice !== undefined &&
      object.launchpadCreationPrice !== null
        ? Coin.fromPartial(object.launchpadCreationPrice)
        : undefined;
    message.launchpadMaxMint =
      object.launchpadMaxMint !== undefined && object.launchpadMaxMint !== null
        ? Long.fromValue(object.launchpadMaxMint)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseEventCreateLaunchPad(): EventCreateLaunchPad {
  return {
    $type: 'bitsong.launchpad.v1beta1.EventCreateLaunchPad',
    creator: '',
    collectionId: Long.UZERO,
  };
}

export const EventCreateLaunchPad = {
  $type: 'bitsong.launchpad.v1beta1.EventCreateLaunchPad' as const,

  encode(
    message: EventCreateLaunchPad,
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
  ): EventCreateLaunchPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateLaunchPad();
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

  fromJSON(object: any): EventCreateLaunchPad {
    return {
      $type: EventCreateLaunchPad.$type,
      creator: isSet(object.creator) ? String(object.creator) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventCreateLaunchPad): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateLaunchPad>, I>>(
    object: I,
  ): EventCreateLaunchPad {
    const message = createBaseEventCreateLaunchPad();
    message.creator = object.creator ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCreateLaunchPad.$type, EventCreateLaunchPad);

function createBaseEventUpdateLaunchPad(): EventUpdateLaunchPad {
  return {
    $type: 'bitsong.launchpad.v1beta1.EventUpdateLaunchPad',
    creator: '',
    collectionId: Long.UZERO,
  };
}

export const EventUpdateLaunchPad = {
  $type: 'bitsong.launchpad.v1beta1.EventUpdateLaunchPad' as const,

  encode(
    message: EventUpdateLaunchPad,
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
  ): EventUpdateLaunchPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateLaunchPad();
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

  fromJSON(object: any): EventUpdateLaunchPad {
    return {
      $type: EventUpdateLaunchPad.$type,
      creator: isSet(object.creator) ? String(object.creator) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventUpdateLaunchPad): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateLaunchPad>, I>>(
    object: I,
  ): EventUpdateLaunchPad {
    const message = createBaseEventUpdateLaunchPad();
    message.creator = object.creator ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventUpdateLaunchPad.$type, EventUpdateLaunchPad);

function createBaseEventCloseLaunchPad(): EventCloseLaunchPad {
  return {
    $type: 'bitsong.launchpad.v1beta1.EventCloseLaunchPad',
    creator: '',
    collectionId: Long.UZERO,
  };
}

export const EventCloseLaunchPad = {
  $type: 'bitsong.launchpad.v1beta1.EventCloseLaunchPad' as const,

  encode(
    message: EventCloseLaunchPad,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCloseLaunchPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCloseLaunchPad();
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

  fromJSON(object: any): EventCloseLaunchPad {
    return {
      $type: EventCloseLaunchPad.$type,
      creator: isSet(object.creator) ? String(object.creator) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventCloseLaunchPad): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCloseLaunchPad>, I>>(
    object: I,
  ): EventCloseLaunchPad {
    const message = createBaseEventCloseLaunchPad();
    message.creator = object.creator ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCloseLaunchPad.$type, EventCloseLaunchPad);

function createBaseEventMintNFT(): EventMintNFT {
  return {
    $type: 'bitsong.launchpad.v1beta1.EventMintNFT',
    collectionId: Long.UZERO,
    nftId: '',
  };
}

export const EventMintNFT = {
  $type: 'bitsong.launchpad.v1beta1.EventMintNFT' as const,

  encode(
    message: EventMintNFT,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collectionId.isZero()) {
      writer.uint32(8).uint64(message.collectionId);
    }
    if (message.nftId !== '') {
      writer.uint32(18).string(message.nftId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.uint64() as Long;
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

  fromJSON(object: any): EventMintNFT {
    return {
      $type: EventMintNFT.$type,
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
    };
  },

  toJSON(message: EventMintNFT): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMintNFT>, I>>(
    object: I,
  ): EventMintNFT {
    const message = createBaseEventMintNFT();
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.nftId = object.nftId ?? '';
    return message;
  },
};

messageTypeRegistry.set(EventMintNFT.$type, EventMintNFT);

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
