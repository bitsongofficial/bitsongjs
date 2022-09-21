/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import {
  AuctionPrizeType,
  auctionPrizeTypeFromJSON,
  auctionPrizeTypeToJSON,
} from './auction';
import { Duration } from '../../google/protobuf/duration';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.marketplace';

export interface MsgCreateAuction {
  $type: 'bitsong.marketplace.MsgCreateAuction';
  sender: string;
  /** NFT being used to bid */
  nftId: string;
  /** Describes transfering nft ownership only or metadata ownership as well */
  prizeType: AuctionPrizeType;
  /** Denom to be used on bids */
  bidDenom: string;
  /** Duration of the auction */
  duration?: Duration;
  /** Minimum price for any bid to meet. */
  priceFloor: Long;
  /** Instant sale price */
  instantSalePrice: Long;
  /** Tick size - how much higher the next bid must be to beat out the previous bid. */
  tickSize: Long;
  /** Edition limitation for limited edition auction */
  editionLimit: Long;
}

export interface MsgCreateAuctionResponse {
  $type: 'bitsong.marketplace.MsgCreateAuctionResponse';
  id: Long;
}

export interface MsgSetAuctionAuthority {
  $type: 'bitsong.marketplace.MsgSetAuctionAuthority';
  sender: string;
  auctionId: Long;
  newAuthority: string;
}

export interface MsgSetAuctionAuthorityResponse {
  $type: 'bitsong.marketplace.MsgSetAuctionAuthorityResponse';
}

export interface MsgStartAuction {
  $type: 'bitsong.marketplace.MsgStartAuction';
  sender: string;
  auctionId: Long;
}

export interface MsgStartAuctionResponse {
  $type: 'bitsong.marketplace.MsgStartAuctionResponse';
}

export interface MsgEndAuction {
  $type: 'bitsong.marketplace.MsgEndAuction';
  sender: string;
  auctionId: Long;
}

export interface MsgEndAuctionResponse {
  $type: 'bitsong.marketplace.MsgEndAuctionResponse';
}

export interface MsgPlaceBid {
  $type: 'bitsong.marketplace.MsgPlaceBid';
  sender: string;
  auctionId: Long;
  amount?: Coin;
}

export interface MsgPlaceBidResponse {
  $type: 'bitsong.marketplace.MsgPlaceBidResponse';
}

export interface MsgCancelBid {
  $type: 'bitsong.marketplace.MsgCancelBid';
  sender: string;
  auctionId: Long;
}

export interface MsgCancelBidResponse {
  $type: 'bitsong.marketplace.MsgCancelBidResponse';
}

export interface MsgClaimBid {
  $type: 'bitsong.marketplace.MsgClaimBid';
  sender: string;
  auctionId: Long;
}

export interface MsgClaimBidResponse {
  $type: 'bitsong.marketplace.MsgClaimBidResponse';
}

function createBaseMsgCreateAuction(): MsgCreateAuction {
  return {
    $type: 'bitsong.marketplace.MsgCreateAuction',
    sender: '',
    nftId: '',
    prizeType: 0,
    bidDenom: '',
    duration: undefined,
    priceFloor: Long.UZERO,
    instantSalePrice: Long.UZERO,
    tickSize: Long.UZERO,
    editionLimit: Long.UZERO,
  };
}

export const MsgCreateAuction = {
  $type: 'bitsong.marketplace.MsgCreateAuction' as const,

  encode(
    message: MsgCreateAuction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.nftId !== '') {
      writer.uint32(18).string(message.nftId);
    }
    if (message.prizeType !== 0) {
      writer.uint32(24).int32(message.prizeType);
    }
    if (message.bidDenom !== '') {
      writer.uint32(34).string(message.bidDenom);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }
    if (!message.priceFloor.isZero()) {
      writer.uint32(48).uint64(message.priceFloor);
    }
    if (!message.instantSalePrice.isZero()) {
      writer.uint32(56).uint64(message.instantSalePrice);
    }
    if (!message.tickSize.isZero()) {
      writer.uint32(64).uint64(message.tickSize);
    }
    if (!message.editionLimit.isZero()) {
      writer.uint32(72).uint64(message.editionLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.nftId = reader.string();
          break;
        case 3:
          message.prizeType = reader.int32() as any;
          break;
        case 4:
          message.bidDenom = reader.string();
          break;
        case 5:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.priceFloor = reader.uint64() as Long;
          break;
        case 7:
          message.instantSalePrice = reader.uint64() as Long;
          break;
        case 8:
          message.tickSize = reader.uint64() as Long;
          break;
        case 9:
          message.editionLimit = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuction {
    return {
      $type: MsgCreateAuction.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
      prizeType: isSet(object.prizeType)
        ? auctionPrizeTypeFromJSON(object.prizeType)
        : 0,
      bidDenom: isSet(object.bidDenom) ? String(object.bidDenom) : '',
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
      priceFloor: isSet(object.priceFloor)
        ? Long.fromValue(object.priceFloor)
        : Long.UZERO,
      instantSalePrice: isSet(object.instantSalePrice)
        ? Long.fromValue(object.instantSalePrice)
        : Long.UZERO,
      tickSize: isSet(object.tickSize)
        ? Long.fromValue(object.tickSize)
        : Long.UZERO,
      editionLimit: isSet(object.editionLimit)
        ? Long.fromValue(object.editionLimit)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateAuction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.prizeType !== undefined &&
      (obj.prizeType = auctionPrizeTypeToJSON(message.prizeType));
    message.bidDenom !== undefined && (obj.bidDenom = message.bidDenom);
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.priceFloor !== undefined &&
      (obj.priceFloor = (message.priceFloor || Long.UZERO).toString());
    message.instantSalePrice !== undefined &&
      (obj.instantSalePrice = (
        message.instantSalePrice || Long.UZERO
      ).toString());
    message.tickSize !== undefined &&
      (obj.tickSize = (message.tickSize || Long.UZERO).toString());
    message.editionLimit !== undefined &&
      (obj.editionLimit = (message.editionLimit || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuction>, I>>(
    object: I,
  ): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    message.sender = object.sender ?? '';
    message.nftId = object.nftId ?? '';
    message.prizeType = object.prizeType ?? 0;
    message.bidDenom = object.bidDenom ?? '';
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    message.priceFloor =
      object.priceFloor !== undefined && object.priceFloor !== null
        ? Long.fromValue(object.priceFloor)
        : Long.UZERO;
    message.instantSalePrice =
      object.instantSalePrice !== undefined && object.instantSalePrice !== null
        ? Long.fromValue(object.instantSalePrice)
        : Long.UZERO;
    message.tickSize =
      object.tickSize !== undefined && object.tickSize !== null
        ? Long.fromValue(object.tickSize)
        : Long.UZERO;
    message.editionLimit =
      object.editionLimit !== undefined && object.editionLimit !== null
        ? Long.fromValue(object.editionLimit)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateAuction.$type, MsgCreateAuction);

function createBaseMsgCreateAuctionResponse(): MsgCreateAuctionResponse {
  return {
    $type: 'bitsong.marketplace.MsgCreateAuctionResponse',
    id: Long.UZERO,
  };
}

export const MsgCreateAuctionResponse = {
  $type: 'bitsong.marketplace.MsgCreateAuctionResponse' as const,

  encode(
    message: MsgCreateAuctionResponse,
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
  ): MsgCreateAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuctionResponse();
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

  fromJSON(object: any): MsgCreateAuctionResponse {
    return {
      $type: MsgCreateAuctionResponse.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: MsgCreateAuctionResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuctionResponse>, I>>(
    object: I,
  ): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateAuctionResponse.$type,
  MsgCreateAuctionResponse,
);

function createBaseMsgSetAuctionAuthority(): MsgSetAuctionAuthority {
  return {
    $type: 'bitsong.marketplace.MsgSetAuctionAuthority',
    sender: '',
    auctionId: Long.UZERO,
    newAuthority: '',
  };
}

export const MsgSetAuctionAuthority = {
  $type: 'bitsong.marketplace.MsgSetAuctionAuthority' as const,

  encode(
    message: MsgSetAuctionAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (message.newAuthority !== '') {
      writer.uint32(26).string(message.newAuthority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetAuctionAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuctionAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
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

  fromJSON(object: any): MsgSetAuctionAuthority {
    return {
      $type: MsgSetAuctionAuthority.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: MsgSetAuctionAuthority): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAuctionAuthority>, I>>(
    object: I,
  ): MsgSetAuctionAuthority {
    const message = createBaseMsgSetAuctionAuthority();
    message.sender = object.sender ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgSetAuctionAuthority.$type, MsgSetAuctionAuthority);

function createBaseMsgSetAuctionAuthorityResponse(): MsgSetAuctionAuthorityResponse {
  return { $type: 'bitsong.marketplace.MsgSetAuctionAuthorityResponse' };
}

export const MsgSetAuctionAuthorityResponse = {
  $type: 'bitsong.marketplace.MsgSetAuctionAuthorityResponse' as const,

  encode(
    _: MsgSetAuctionAuthorityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetAuctionAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuctionAuthorityResponse();
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

  fromJSON(_: any): MsgSetAuctionAuthorityResponse {
    return {
      $type: MsgSetAuctionAuthorityResponse.$type,
    };
  },

  toJSON(_: MsgSetAuctionAuthorityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAuctionAuthorityResponse>, I>>(
    _: I,
  ): MsgSetAuctionAuthorityResponse {
    const message = createBaseMsgSetAuctionAuthorityResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgSetAuctionAuthorityResponse.$type,
  MsgSetAuctionAuthorityResponse,
);

function createBaseMsgStartAuction(): MsgStartAuction {
  return {
    $type: 'bitsong.marketplace.MsgStartAuction',
    sender: '',
    auctionId: Long.UZERO,
  };
}

export const MsgStartAuction = {
  $type: 'bitsong.marketplace.MsgStartAuction' as const,

  encode(
    message: MsgStartAuction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStartAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStartAuction {
    return {
      $type: MsgStartAuction.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgStartAuction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartAuction>, I>>(
    object: I,
  ): MsgStartAuction {
    const message = createBaseMsgStartAuction();
    message.sender = object.sender ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgStartAuction.$type, MsgStartAuction);

function createBaseMsgStartAuctionResponse(): MsgStartAuctionResponse {
  return { $type: 'bitsong.marketplace.MsgStartAuctionResponse' };
}

export const MsgStartAuctionResponse = {
  $type: 'bitsong.marketplace.MsgStartAuctionResponse' as const,

  encode(
    _: MsgStartAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgStartAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStartAuctionResponse();
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

  fromJSON(_: any): MsgStartAuctionResponse {
    return {
      $type: MsgStartAuctionResponse.$type,
    };
  },

  toJSON(_: MsgStartAuctionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStartAuctionResponse>, I>>(
    _: I,
  ): MsgStartAuctionResponse {
    const message = createBaseMsgStartAuctionResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgStartAuctionResponse.$type, MsgStartAuctionResponse);

function createBaseMsgEndAuction(): MsgEndAuction {
  return {
    $type: 'bitsong.marketplace.MsgEndAuction',
    sender: '',
    auctionId: Long.UZERO,
  };
}

export const MsgEndAuction = {
  $type: 'bitsong.marketplace.MsgEndAuction' as const,

  encode(
    message: MsgEndAuction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEndAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEndAuction {
    return {
      $type: MsgEndAuction.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgEndAuction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEndAuction>, I>>(
    object: I,
  ): MsgEndAuction {
    const message = createBaseMsgEndAuction();
    message.sender = object.sender ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgEndAuction.$type, MsgEndAuction);

function createBaseMsgEndAuctionResponse(): MsgEndAuctionResponse {
  return { $type: 'bitsong.marketplace.MsgEndAuctionResponse' };
}

export const MsgEndAuctionResponse = {
  $type: 'bitsong.marketplace.MsgEndAuctionResponse' as const,

  encode(
    _: MsgEndAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgEndAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndAuctionResponse();
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

  fromJSON(_: any): MsgEndAuctionResponse {
    return {
      $type: MsgEndAuctionResponse.$type,
    };
  },

  toJSON(_: MsgEndAuctionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEndAuctionResponse>, I>>(
    _: I,
  ): MsgEndAuctionResponse {
    const message = createBaseMsgEndAuctionResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgEndAuctionResponse.$type, MsgEndAuctionResponse);

function createBaseMsgPlaceBid(): MsgPlaceBid {
  return {
    $type: 'bitsong.marketplace.MsgPlaceBid',
    sender: '',
    auctionId: Long.UZERO,
    amount: undefined,
  };
}

export const MsgPlaceBid = {
  $type: 'bitsong.marketplace.MsgPlaceBid' as const,

  encode(
    message: MsgPlaceBid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgPlaceBid {
    return {
      $type: MsgPlaceBid.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgPlaceBid): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceBid>, I>>(
    object: I,
  ): MsgPlaceBid {
    const message = createBaseMsgPlaceBid();
    message.sender = object.sender ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgPlaceBid.$type, MsgPlaceBid);

function createBaseMsgPlaceBidResponse(): MsgPlaceBidResponse {
  return { $type: 'bitsong.marketplace.MsgPlaceBidResponse' };
}

export const MsgPlaceBidResponse = {
  $type: 'bitsong.marketplace.MsgPlaceBidResponse' as const,

  encode(
    _: MsgPlaceBidResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceBidResponse();
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

  fromJSON(_: any): MsgPlaceBidResponse {
    return {
      $type: MsgPlaceBidResponse.$type,
    };
  },

  toJSON(_: MsgPlaceBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgPlaceBidResponse>, I>>(
    _: I,
  ): MsgPlaceBidResponse {
    const message = createBaseMsgPlaceBidResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgPlaceBidResponse.$type, MsgPlaceBidResponse);

function createBaseMsgCancelBid(): MsgCancelBid {
  return {
    $type: 'bitsong.marketplace.MsgCancelBid',
    sender: '',
    auctionId: Long.UZERO,
  };
}

export const MsgCancelBid = {
  $type: 'bitsong.marketplace.MsgCancelBid' as const,

  encode(
    message: MsgCancelBid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelBid {
    return {
      $type: MsgCancelBid.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgCancelBid): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBid>, I>>(
    object: I,
  ): MsgCancelBid {
    const message = createBaseMsgCancelBid();
    message.sender = object.sender ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgCancelBid.$type, MsgCancelBid);

function createBaseMsgCancelBidResponse(): MsgCancelBidResponse {
  return { $type: 'bitsong.marketplace.MsgCancelBidResponse' };
}

export const MsgCancelBidResponse = {
  $type: 'bitsong.marketplace.MsgCancelBidResponse' as const,

  encode(
    _: MsgCancelBidResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCancelBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBidResponse();
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

  fromJSON(_: any): MsgCancelBidResponse {
    return {
      $type: MsgCancelBidResponse.$type,
    };
  },

  toJSON(_: MsgCancelBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBidResponse>, I>>(
    _: I,
  ): MsgCancelBidResponse {
    const message = createBaseMsgCancelBidResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgCancelBidResponse.$type, MsgCancelBidResponse);

function createBaseMsgClaimBid(): MsgClaimBid {
  return {
    $type: 'bitsong.marketplace.MsgClaimBid',
    sender: '',
    auctionId: Long.UZERO,
  };
}

export const MsgClaimBid = {
  $type: 'bitsong.marketplace.MsgClaimBid' as const,

  encode(
    message: MsgClaimBid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimBid {
    return {
      $type: MsgClaimBid.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: MsgClaimBid): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimBid>, I>>(
    object: I,
  ): MsgClaimBid {
    const message = createBaseMsgClaimBid();
    message.sender = object.sender ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgClaimBid.$type, MsgClaimBid);

function createBaseMsgClaimBidResponse(): MsgClaimBidResponse {
  return { $type: 'bitsong.marketplace.MsgClaimBidResponse' };
}

export const MsgClaimBidResponse = {
  $type: 'bitsong.marketplace.MsgClaimBidResponse' as const,

  encode(
    _: MsgClaimBidResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimBidResponse();
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

  fromJSON(_: any): MsgClaimBidResponse {
    return {
      $type: MsgClaimBidResponse.$type,
    };
  },

  toJSON(_: MsgClaimBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimBidResponse>, I>>(
    _: I,
  ): MsgClaimBidResponse {
    const message = createBaseMsgClaimBidResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgClaimBidResponse.$type, MsgClaimBidResponse);

/** Msg defines the Msg service */
export interface Msg {
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
  SetAuctionAuthority(
    request: MsgSetAuctionAuthority,
  ): Promise<MsgSetAuctionAuthorityResponse>;
  StartAuction(request: MsgStartAuction): Promise<MsgStartAuctionResponse>;
  EndAuction(request: MsgEndAuction): Promise<MsgEndAuctionResponse>;
  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
  CancelBid(request: MsgCancelBid): Promise<MsgCancelBidResponse>;
  ClaimBid(request: MsgClaimBid): Promise<MsgClaimBidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAuction = this.CreateAuction.bind(this);
    this.SetAuctionAuthority = this.SetAuctionAuthority.bind(this);
    this.StartAuction = this.StartAuction.bind(this);
    this.EndAuction = this.EndAuction.bind(this);
    this.PlaceBid = this.PlaceBid.bind(this);
    this.CancelBid = this.CancelBid.bind(this);
    this.ClaimBid = this.ClaimBid.bind(this);
  }
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.Msg',
      'CreateAuction',
      data,
    );
    return promise.then(data =>
      MsgCreateAuctionResponse.decode(new _m0.Reader(data)),
    );
  }

  SetAuctionAuthority(
    request: MsgSetAuctionAuthority,
  ): Promise<MsgSetAuctionAuthorityResponse> {
    const data = MsgSetAuctionAuthority.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.Msg',
      'SetAuctionAuthority',
      data,
    );
    return promise.then(data =>
      MsgSetAuctionAuthorityResponse.decode(new _m0.Reader(data)),
    );
  }

  StartAuction(request: MsgStartAuction): Promise<MsgStartAuctionResponse> {
    const data = MsgStartAuction.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.Msg',
      'StartAuction',
      data,
    );
    return promise.then(data =>
      MsgStartAuctionResponse.decode(new _m0.Reader(data)),
    );
  }

  EndAuction(request: MsgEndAuction): Promise<MsgEndAuctionResponse> {
    const data = MsgEndAuction.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.Msg',
      'EndAuction',
      data,
    );
    return promise.then(data =>
      MsgEndAuctionResponse.decode(new _m0.Reader(data)),
    );
  }

  PlaceBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.Msg',
      'PlaceBid',
      data,
    );
    return promise.then(data =>
      MsgPlaceBidResponse.decode(new _m0.Reader(data)),
    );
  }

  CancelBid(request: MsgCancelBid): Promise<MsgCancelBidResponse> {
    const data = MsgCancelBid.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.Msg',
      'CancelBid',
      data,
    );
    return promise.then(data =>
      MsgCancelBidResponse.decode(new _m0.Reader(data)),
    );
  }

  ClaimBid(request: MsgClaimBid): Promise<MsgClaimBidResponse> {
    const data = MsgClaimBid.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.Msg',
      'ClaimBid',
      data,
    );
    return promise.then(data =>
      MsgClaimBidResponse.decode(new _m0.Reader(data)),
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
