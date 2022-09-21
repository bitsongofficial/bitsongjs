/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import { Duration } from '../../google/protobuf/duration';
import { Timestamp } from '../../google/protobuf/timestamp';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.marketplace.v1beta1';

/** / Define valid auction state transitions. */
export enum AuctionState {
  EMPTY = 0,
  CREATED = 1,
  STARTED = 2,
  ENDED = 3,
  UNRECOGNIZED = -1,
}

export function auctionStateFromJSON(object: any): AuctionState {
  switch (object) {
    case 0:
    case 'EMPTY':
      return AuctionState.EMPTY;
    case 1:
    case 'CREATED':
      return AuctionState.CREATED;
    case 2:
    case 'STARTED':
      return AuctionState.STARTED;
    case 3:
    case 'ENDED':
      return AuctionState.ENDED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AuctionState.UNRECOGNIZED;
  }
}

export function auctionStateToJSON(object: AuctionState): string {
  switch (object) {
    case AuctionState.EMPTY:
      return 'EMPTY';
    case AuctionState.CREATED:
      return 'CREATED';
    case AuctionState.STARTED:
      return 'STARTED';
    case AuctionState.ENDED:
      return 'ENDED';
    case AuctionState.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum AuctionPrizeType {
  /** NFT_ONLY_TRANSFER - Transfer ownership of only nft without metadata */
  NFT_ONLY_TRANSFER = 0,
  /** FULL_RIGHTS_TRANSFER - Transfer ownership of both nft and metadata mint, update ownership */
  FULL_RIGHTS_TRANSFER = 1,
  /** METADATA_AUTHORITY_TRANSFER - Transfer ownership of metadata */
  METADATA_AUTHORITY_TRANSFER = 2,
  /** MINT_AUTHORITY_TRANSFER - Transfer ownership of mint */
  MINT_AUTHORITY_TRANSFER = 3,
  /** LIMITED_EDITION_PRINTS - Printing a new child edition from limited supply */
  LIMITED_EDITION_PRINTS = 4,
  /** OPEN_EDITION_PRINTS - Printing a new child edition from unlimited supply */
  OPEN_EDITION_PRINTS = 5,
  UNRECOGNIZED = -1,
}

export function auctionPrizeTypeFromJSON(object: any): AuctionPrizeType {
  switch (object) {
    case 0:
    case 'NFT_ONLY_TRANSFER':
      return AuctionPrizeType.NFT_ONLY_TRANSFER;
    case 1:
    case 'FULL_RIGHTS_TRANSFER':
      return AuctionPrizeType.FULL_RIGHTS_TRANSFER;
    case 2:
    case 'METADATA_AUTHORITY_TRANSFER':
      return AuctionPrizeType.METADATA_AUTHORITY_TRANSFER;
    case 3:
    case 'MINT_AUTHORITY_TRANSFER':
      return AuctionPrizeType.MINT_AUTHORITY_TRANSFER;
    case 4:
    case 'LIMITED_EDITION_PRINTS':
      return AuctionPrizeType.LIMITED_EDITION_PRINTS;
    case 5:
    case 'OPEN_EDITION_PRINTS':
      return AuctionPrizeType.OPEN_EDITION_PRINTS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AuctionPrizeType.UNRECOGNIZED;
  }
}

export function auctionPrizeTypeToJSON(object: AuctionPrizeType): string {
  switch (object) {
    case AuctionPrizeType.NFT_ONLY_TRANSFER:
      return 'NFT_ONLY_TRANSFER';
    case AuctionPrizeType.FULL_RIGHTS_TRANSFER:
      return 'FULL_RIGHTS_TRANSFER';
    case AuctionPrizeType.METADATA_AUTHORITY_TRANSFER:
      return 'METADATA_AUTHORITY_TRANSFER';
    case AuctionPrizeType.MINT_AUTHORITY_TRANSFER:
      return 'MINT_AUTHORITY_TRANSFER';
    case AuctionPrizeType.LIMITED_EDITION_PRINTS:
      return 'LIMITED_EDITION_PRINTS';
    case AuctionPrizeType.OPEN_EDITION_PRINTS:
      return 'OPEN_EDITION_PRINTS';
    case AuctionPrizeType.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface Auction {
  $type: 'bitsong.marketplace.v1beta1.Auction';
  /** unique identifier of the auction */
  id: Long;
  /** authority with permission to modify this auction. */
  authority: string;
  /** NFT being used to bid */
  nftId: string;
  /** Describes transfering nft ownership only or metadata ownership as well */
  prizeType: AuctionPrizeType;
  /** Duration of the auction */
  duration?: Duration;
  /** Denom to be used on bids */
  bidDenom: string;
  /** Minimum price for any bid to meet. */
  priceFloor: Long;
  /** Instant sale price */
  instantSalePrice: Long;
  /** Tick size - how much higher the next bid must be to beat out the previous bid. */
  tickSize: Long;
  /** The state the auction is in, whether it has started or ended. */
  state: AuctionState;
  /** The amount of bid put last time */
  lastBidAmount: Long;
  /** The time the last bid was placed, used to keep track of auction timing. */
  lastBid?: Timestamp;
  /** Slot time the auction was officially ended by. */
  endedAt?: Timestamp;
  /** End time is the cut-off point that the auction is forced to end by. */
  endAuctionAt?: Timestamp;
  /** Ticked to true when a prize is claimed by person who won it */
  claimed: Long;
  /** Edition limitation for limited edition auction */
  editionLimit: Long;
}

/** Bids associate a bidding key with an amount bid. */
export interface Bid {
  $type: 'bitsong.marketplace.v1beta1.Bid';
  bidder: string;
  auctionId: Long;
  amount: Long;
  index: Long;
}

/**
 * / Models a set of metadata for a bidder, meant to be stored in a PDA. This allows looking up
 * / information about a bidder regardless of if they have won, lost or cancelled.
 */
export interface BidderMetadata {
  $type: 'bitsong.marketplace.v1beta1.BidderMetadata';
  /** Relationship with the bidder who's metadata this covers. */
  bidder: string;
  /** Relationship with the auction this bid was placed on. */
  lastAuctionId: Long;
  /** Amount that the user bid. */
  lastBid: Long;
  /** Tracks the last time this user bid. */
  lastBidTimestamp?: Timestamp;
  /**
   * Whether the last bid the user made was cancelled. This should also be enough to know if the
   * user is a winner, as if cancelled it implies previous bids were also cancelled.
   */
  lastBidCancelled: boolean;
}

/** Params defines marketplace module's parameters */
export interface Params {
  $type: 'bitsong.marketplace.v1beta1.Params';
  auctionCreationPrice?: Coin;
}

export interface EventCreateAuction {
  $type: 'bitsong.marketplace.v1beta1.EventCreateAuction';
  creator: string;
  auctionId: Long;
}

export interface EventSetAuctionAuthority {
  $type: 'bitsong.marketplace.v1beta1.EventSetAuctionAuthority';
  auctionId: Long;
  authority: string;
}

export interface EventStartAuction {
  $type: 'bitsong.marketplace.v1beta1.EventStartAuction';
  auctionId: Long;
}

export interface EventEndAuction {
  $type: 'bitsong.marketplace.v1beta1.EventEndAuction';
  auctionId: Long;
}

export interface EventPlaceBid {
  $type: 'bitsong.marketplace.v1beta1.EventPlaceBid';
  bidder: string;
  auctionId: Long;
}

export interface EventCancelBid {
  $type: 'bitsong.marketplace.v1beta1.EventCancelBid';
  bidder: string;
  auctionId: Long;
}

export interface EventClaimBid {
  $type: 'bitsong.marketplace.v1beta1.EventClaimBid';
  bidder: string;
  auctionId: Long;
}

function createBaseAuction(): Auction {
  return {
    $type: 'bitsong.marketplace.v1beta1.Auction',
    id: Long.UZERO,
    authority: '',
    nftId: '',
    prizeType: 0,
    duration: undefined,
    bidDenom: '',
    priceFloor: Long.UZERO,
    instantSalePrice: Long.UZERO,
    tickSize: Long.UZERO,
    state: 0,
    lastBidAmount: Long.UZERO,
    lastBid: undefined,
    endedAt: undefined,
    endAuctionAt: undefined,
    claimed: Long.UZERO,
    editionLimit: Long.UZERO,
  };
}

export const Auction = {
  $type: 'bitsong.marketplace.v1beta1.Auction' as const,

  encode(
    message: Auction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.authority !== '') {
      writer.uint32(18).string(message.authority);
    }
    if (message.nftId !== '') {
      writer.uint32(26).string(message.nftId);
    }
    if (message.prizeType !== 0) {
      writer.uint32(32).int32(message.prizeType);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(42).fork()).ldelim();
    }
    if (message.bidDenom !== '') {
      writer.uint32(50).string(message.bidDenom);
    }
    if (!message.priceFloor.isZero()) {
      writer.uint32(56).uint64(message.priceFloor);
    }
    if (!message.instantSalePrice.isZero()) {
      writer.uint32(64).uint64(message.instantSalePrice);
    }
    if (!message.tickSize.isZero()) {
      writer.uint32(72).uint64(message.tickSize);
    }
    if (message.state !== 0) {
      writer.uint32(80).int32(message.state);
    }
    if (!message.lastBidAmount.isZero()) {
      writer.uint32(88).uint64(message.lastBidAmount);
    }
    if (message.lastBid !== undefined) {
      Timestamp.encode(message.lastBid, writer.uint32(98).fork()).ldelim();
    }
    if (message.endedAt !== undefined) {
      Timestamp.encode(message.endedAt, writer.uint32(106).fork()).ldelim();
    }
    if (message.endAuctionAt !== undefined) {
      Timestamp.encode(
        message.endAuctionAt,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (!message.claimed.isZero()) {
      writer.uint32(120).uint64(message.claimed);
    }
    if (!message.editionLimit.isZero()) {
      writer.uint32(128).uint64(message.editionLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Auction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.authority = reader.string();
          break;
        case 3:
          message.nftId = reader.string();
          break;
        case 4:
          message.prizeType = reader.int32() as any;
          break;
        case 5:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.bidDenom = reader.string();
          break;
        case 7:
          message.priceFloor = reader.uint64() as Long;
          break;
        case 8:
          message.instantSalePrice = reader.uint64() as Long;
          break;
        case 9:
          message.tickSize = reader.uint64() as Long;
          break;
        case 10:
          message.state = reader.int32() as any;
          break;
        case 11:
          message.lastBidAmount = reader.uint64() as Long;
          break;
        case 12:
          message.lastBid = Timestamp.decode(reader, reader.uint32());
          break;
        case 13:
          message.endedAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 14:
          message.endAuctionAt = Timestamp.decode(reader, reader.uint32());
          break;
        case 15:
          message.claimed = reader.uint64() as Long;
          break;
        case 16:
          message.editionLimit = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Auction {
    return {
      $type: Auction.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      authority: isSet(object.authority) ? String(object.authority) : '',
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
      prizeType: isSet(object.prizeType)
        ? auctionPrizeTypeFromJSON(object.prizeType)
        : 0,
      duration: isSet(object.duration)
        ? Duration.fromJSON(object.duration)
        : undefined,
      bidDenom: isSet(object.bidDenom) ? String(object.bidDenom) : '',
      priceFloor: isSet(object.priceFloor)
        ? Long.fromValue(object.priceFloor)
        : Long.UZERO,
      instantSalePrice: isSet(object.instantSalePrice)
        ? Long.fromValue(object.instantSalePrice)
        : Long.UZERO,
      tickSize: isSet(object.tickSize)
        ? Long.fromValue(object.tickSize)
        : Long.UZERO,
      state: isSet(object.state) ? auctionStateFromJSON(object.state) : 0,
      lastBidAmount: isSet(object.lastBidAmount)
        ? Long.fromValue(object.lastBidAmount)
        : Long.UZERO,
      lastBid: isSet(object.lastBid)
        ? fromJsonTimestamp(object.lastBid)
        : undefined,
      endedAt: isSet(object.endedAt)
        ? fromJsonTimestamp(object.endedAt)
        : undefined,
      endAuctionAt: isSet(object.endAuctionAt)
        ? fromJsonTimestamp(object.endAuctionAt)
        : undefined,
      claimed: isSet(object.claimed)
        ? Long.fromValue(object.claimed)
        : Long.UZERO,
      editionLimit: isSet(object.editionLimit)
        ? Long.fromValue(object.editionLimit)
        : Long.UZERO,
    };
  },

  toJSON(message: Auction): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.authority !== undefined && (obj.authority = message.authority);
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.prizeType !== undefined &&
      (obj.prizeType = auctionPrizeTypeToJSON(message.prizeType));
    message.duration !== undefined &&
      (obj.duration = message.duration
        ? Duration.toJSON(message.duration)
        : undefined);
    message.bidDenom !== undefined && (obj.bidDenom = message.bidDenom);
    message.priceFloor !== undefined &&
      (obj.priceFloor = (message.priceFloor || Long.UZERO).toString());
    message.instantSalePrice !== undefined &&
      (obj.instantSalePrice = (
        message.instantSalePrice || Long.UZERO
      ).toString());
    message.tickSize !== undefined &&
      (obj.tickSize = (message.tickSize || Long.UZERO).toString());
    message.state !== undefined &&
      (obj.state = auctionStateToJSON(message.state));
    message.lastBidAmount !== undefined &&
      (obj.lastBidAmount = (message.lastBidAmount || Long.UZERO).toString());
    message.lastBid !== undefined &&
      (obj.lastBid = fromTimestamp(message.lastBid).toISOString());
    message.endedAt !== undefined &&
      (obj.endedAt = fromTimestamp(message.endedAt).toISOString());
    message.endAuctionAt !== undefined &&
      (obj.endAuctionAt = fromTimestamp(message.endAuctionAt).toISOString());
    message.claimed !== undefined &&
      (obj.claimed = (message.claimed || Long.UZERO).toString());
    message.editionLimit !== undefined &&
      (obj.editionLimit = (message.editionLimit || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Auction>, I>>(object: I): Auction {
    const message = createBaseAuction();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    message.authority = object.authority ?? '';
    message.nftId = object.nftId ?? '';
    message.prizeType = object.prizeType ?? 0;
    message.duration =
      object.duration !== undefined && object.duration !== null
        ? Duration.fromPartial(object.duration)
        : undefined;
    message.bidDenom = object.bidDenom ?? '';
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
    message.state = object.state ?? 0;
    message.lastBidAmount =
      object.lastBidAmount !== undefined && object.lastBidAmount !== null
        ? Long.fromValue(object.lastBidAmount)
        : Long.UZERO;
    message.lastBid =
      object.lastBid !== undefined && object.lastBid !== null
        ? Timestamp.fromPartial(object.lastBid)
        : undefined;
    message.endedAt =
      object.endedAt !== undefined && object.endedAt !== null
        ? Timestamp.fromPartial(object.endedAt)
        : undefined;
    message.endAuctionAt =
      object.endAuctionAt !== undefined && object.endAuctionAt !== null
        ? Timestamp.fromPartial(object.endAuctionAt)
        : undefined;
    message.claimed =
      object.claimed !== undefined && object.claimed !== null
        ? Long.fromValue(object.claimed)
        : Long.UZERO;
    message.editionLimit =
      object.editionLimit !== undefined && object.editionLimit !== null
        ? Long.fromValue(object.editionLimit)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(Auction.$type, Auction);

function createBaseBid(): Bid {
  return {
    $type: 'bitsong.marketplace.v1beta1.Bid',
    bidder: '',
    auctionId: Long.UZERO,
    amount: Long.UZERO,
    index: Long.UZERO,
  };
}

export const Bid = {
  $type: 'bitsong.marketplace.v1beta1.Bid' as const,

  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    if (!message.amount.isZero()) {
      writer.uint32(24).uint64(message.amount);
    }
    if (!message.index.isZero()) {
      writer.uint32(32).uint64(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.auctionId = reader.uint64() as Long;
          break;
        case 3:
          message.amount = reader.uint64() as Long;
          break;
        case 4:
          message.index = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bid {
    return {
      $type: Bid.$type,
      bidder: isSet(object.bidder) ? String(object.bidder) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO,
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
    };
  },

  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.amount !== undefined &&
      (obj.amount = (message.amount || Long.UZERO).toString());
    message.index !== undefined &&
      (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Bid>, I>>(object: I): Bid {
    const message = createBaseBid();
    message.bidder = object.bidder ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Long.fromValue(object.amount)
        : Long.UZERO;
    message.index =
      object.index !== undefined && object.index !== null
        ? Long.fromValue(object.index)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(Bid.$type, Bid);

function createBaseBidderMetadata(): BidderMetadata {
  return {
    $type: 'bitsong.marketplace.v1beta1.BidderMetadata',
    bidder: '',
    lastAuctionId: Long.UZERO,
    lastBid: Long.UZERO,
    lastBidTimestamp: undefined,
    lastBidCancelled: false,
  };
}

export const BidderMetadata = {
  $type: 'bitsong.marketplace.v1beta1.BidderMetadata' as const,

  encode(
    message: BidderMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.lastAuctionId.isZero()) {
      writer.uint32(16).uint64(message.lastAuctionId);
    }
    if (!message.lastBid.isZero()) {
      writer.uint32(24).uint64(message.lastBid);
    }
    if (message.lastBidTimestamp !== undefined) {
      Timestamp.encode(
        message.lastBidTimestamp,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.lastBidCancelled === true) {
      writer.uint32(40).bool(message.lastBidCancelled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BidderMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidderMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.lastAuctionId = reader.uint64() as Long;
          break;
        case 3:
          message.lastBid = reader.uint64() as Long;
          break;
        case 4:
          message.lastBidTimestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.lastBidCancelled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BidderMetadata {
    return {
      $type: BidderMetadata.$type,
      bidder: isSet(object.bidder) ? String(object.bidder) : '',
      lastAuctionId: isSet(object.lastAuctionId)
        ? Long.fromValue(object.lastAuctionId)
        : Long.UZERO,
      lastBid: isSet(object.lastBid)
        ? Long.fromValue(object.lastBid)
        : Long.UZERO,
      lastBidTimestamp: isSet(object.lastBidTimestamp)
        ? fromJsonTimestamp(object.lastBidTimestamp)
        : undefined,
      lastBidCancelled: isSet(object.lastBidCancelled)
        ? Boolean(object.lastBidCancelled)
        : false,
    };
  },

  toJSON(message: BidderMetadata): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.lastAuctionId !== undefined &&
      (obj.lastAuctionId = (message.lastAuctionId || Long.UZERO).toString());
    message.lastBid !== undefined &&
      (obj.lastBid = (message.lastBid || Long.UZERO).toString());
    message.lastBidTimestamp !== undefined &&
      (obj.lastBidTimestamp = fromTimestamp(
        message.lastBidTimestamp,
      ).toISOString());
    message.lastBidCancelled !== undefined &&
      (obj.lastBidCancelled = message.lastBidCancelled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BidderMetadata>, I>>(
    object: I,
  ): BidderMetadata {
    const message = createBaseBidderMetadata();
    message.bidder = object.bidder ?? '';
    message.lastAuctionId =
      object.lastAuctionId !== undefined && object.lastAuctionId !== null
        ? Long.fromValue(object.lastAuctionId)
        : Long.UZERO;
    message.lastBid =
      object.lastBid !== undefined && object.lastBid !== null
        ? Long.fromValue(object.lastBid)
        : Long.UZERO;
    message.lastBidTimestamp =
      object.lastBidTimestamp !== undefined && object.lastBidTimestamp !== null
        ? Timestamp.fromPartial(object.lastBidTimestamp)
        : undefined;
    message.lastBidCancelled = object.lastBidCancelled ?? false;
    return message;
  },
};

messageTypeRegistry.set(BidderMetadata.$type, BidderMetadata);

function createBaseParams(): Params {
  return {
    $type: 'bitsong.marketplace.v1beta1.Params',
    auctionCreationPrice: undefined,
  };
}

export const Params = {
  $type: 'bitsong.marketplace.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.auctionCreationPrice !== undefined) {
      Coin.encode(
        message.auctionCreationPrice,
        writer.uint32(10).fork(),
      ).ldelim();
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
          message.auctionCreationPrice = Coin.decode(reader, reader.uint32());
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
      auctionCreationPrice: isSet(object.auctionCreationPrice)
        ? Coin.fromJSON(object.auctionCreationPrice)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.auctionCreationPrice !== undefined &&
      (obj.auctionCreationPrice = message.auctionCreationPrice
        ? Coin.toJSON(message.auctionCreationPrice)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.auctionCreationPrice =
      object.auctionCreationPrice !== undefined &&
      object.auctionCreationPrice !== null
        ? Coin.fromPartial(object.auctionCreationPrice)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseEventCreateAuction(): EventCreateAuction {
  return {
    $type: 'bitsong.marketplace.v1beta1.EventCreateAuction',
    creator: '',
    auctionId: Long.UZERO,
  };
}

export const EventCreateAuction = {
  $type: 'bitsong.marketplace.v1beta1.EventCreateAuction' as const,

  encode(
    message: EventCreateAuction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): EventCreateAuction {
    return {
      $type: EventCreateAuction.$type,
      creator: isSet(object.creator) ? String(object.creator) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventCreateAuction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateAuction>, I>>(
    object: I,
  ): EventCreateAuction {
    const message = createBaseEventCreateAuction();
    message.creator = object.creator ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCreateAuction.$type, EventCreateAuction);

function createBaseEventSetAuctionAuthority(): EventSetAuctionAuthority {
  return {
    $type: 'bitsong.marketplace.v1beta1.EventSetAuctionAuthority',
    auctionId: Long.UZERO,
    authority: '',
  };
}

export const EventSetAuctionAuthority = {
  $type: 'bitsong.marketplace.v1beta1.EventSetAuctionAuthority' as const,

  encode(
    message: EventSetAuctionAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.authority !== '') {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): EventSetAuctionAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAuctionAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetAuctionAuthority {
    return {
      $type: EventSetAuctionAuthority.$type,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
      authority: isSet(object.authority) ? String(object.authority) : '',
    };
  },

  toJSON(message: EventSetAuctionAuthority): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetAuctionAuthority>, I>>(
    object: I,
  ): EventSetAuctionAuthority {
    const message = createBaseEventSetAuctionAuthority();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    message.authority = object.authority ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  EventSetAuctionAuthority.$type,
  EventSetAuctionAuthority,
);

function createBaseEventStartAuction(): EventStartAuction {
  return {
    $type: 'bitsong.marketplace.v1beta1.EventStartAuction',
    auctionId: Long.UZERO,
  };
}

export const EventStartAuction = {
  $type: 'bitsong.marketplace.v1beta1.EventStartAuction' as const,

  encode(
    message: EventStartAuction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventStartAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventStartAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventStartAuction {
    return {
      $type: EventStartAuction.$type,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventStartAuction): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventStartAuction>, I>>(
    object: I,
  ): EventStartAuction {
    const message = createBaseEventStartAuction();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventStartAuction.$type, EventStartAuction);

function createBaseEventEndAuction(): EventEndAuction {
  return {
    $type: 'bitsong.marketplace.v1beta1.EventEndAuction',
    auctionId: Long.UZERO,
  };
}

export const EventEndAuction = {
  $type: 'bitsong.marketplace.v1beta1.EventEndAuction' as const,

  encode(
    message: EventEndAuction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.auctionId.isZero()) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEndAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEndAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEndAuction {
    return {
      $type: EventEndAuction.$type,
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventEndAuction): unknown {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEndAuction>, I>>(
    object: I,
  ): EventEndAuction {
    const message = createBaseEventEndAuction();
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventEndAuction.$type, EventEndAuction);

function createBaseEventPlaceBid(): EventPlaceBid {
  return {
    $type: 'bitsong.marketplace.v1beta1.EventPlaceBid',
    bidder: '',
    auctionId: Long.UZERO,
  };
}

export const EventPlaceBid = {
  $type: 'bitsong.marketplace.v1beta1.EventPlaceBid' as const,

  encode(
    message: EventPlaceBid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPlaceBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPlaceBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
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

  fromJSON(object: any): EventPlaceBid {
    return {
      $type: EventPlaceBid.$type,
      bidder: isSet(object.bidder) ? String(object.bidder) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventPlaceBid): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPlaceBid>, I>>(
    object: I,
  ): EventPlaceBid {
    const message = createBaseEventPlaceBid();
    message.bidder = object.bidder ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventPlaceBid.$type, EventPlaceBid);

function createBaseEventCancelBid(): EventCancelBid {
  return {
    $type: 'bitsong.marketplace.v1beta1.EventCancelBid',
    bidder: '',
    auctionId: Long.UZERO,
  };
}

export const EventCancelBid = {
  $type: 'bitsong.marketplace.v1beta1.EventCancelBid' as const,

  encode(
    message: EventCancelBid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
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

  fromJSON(object: any): EventCancelBid {
    return {
      $type: EventCancelBid.$type,
      bidder: isSet(object.bidder) ? String(object.bidder) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventCancelBid): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelBid>, I>>(
    object: I,
  ): EventCancelBid {
    const message = createBaseEventCancelBid();
    message.bidder = object.bidder ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCancelBid.$type, EventCancelBid);

function createBaseEventClaimBid(): EventClaimBid {
  return {
    $type: 'bitsong.marketplace.v1beta1.EventClaimBid',
    bidder: '',
    auctionId: Long.UZERO,
  };
}

export const EventClaimBid = {
  $type: 'bitsong.marketplace.v1beta1.EventClaimBid' as const,

  encode(
    message: EventClaimBid,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder);
    }
    if (!message.auctionId.isZero()) {
      writer.uint32(16).uint64(message.auctionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventClaimBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
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

  fromJSON(object: any): EventClaimBid {
    return {
      $type: EventClaimBid.$type,
      bidder: isSet(object.bidder) ? String(object.bidder) : '',
      auctionId: isSet(object.auctionId)
        ? Long.fromValue(object.auctionId)
        : Long.UZERO,
    };
  },

  toJSON(message: EventClaimBid): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventClaimBid>, I>>(
    object: I,
  ): EventClaimBid {
    const message = createBaseEventClaimBid();
    message.bidder = object.bidder ?? '';
    message.auctionId =
      object.auctionId !== undefined && object.auctionId !== null
        ? Long.fromValue(object.auctionId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventClaimBid.$type, EventClaimBid);

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === 'string') {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
