/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import {
  AuctionState,
  Auction,
  BidderMetadata,
  Bid,
  auctionStateFromJSON,
  auctionStateToJSON,
} from './auction';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.marketplace.v1beta1';

export interface QueryAuctionsRequest {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionsRequest';
  state: AuctionState;
  authority: string;
}

export interface QueryAuctionsResponse {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionsResponse';
  auctions: Auction[];
}

export interface QueryAuctionRequest {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionRequest';
  id: Long;
}

export interface QueryAuctionResponse {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionResponse';
  auction?: Auction;
}

export interface QueryBidsByAuctionRequest {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByAuctionRequest';
  id: Long;
}

export interface QueryBidsByAuctionResponse {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByAuctionResponse';
  bids: Bid[];
}

export interface QueryBidsByBidderRequest {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByBidderRequest';
  bidder: string;
}

export interface QueryBidsByBidderResponse {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByBidderResponse';
  bids: Bid[];
}

export interface QueryBidderMetadataRequest {
  $type: 'bitsong.marketplace.v1beta1.QueryBidderMetadataRequest';
  bidder: string;
}

export interface QueryBidderMetadataResponse {
  $type: 'bitsong.marketplace.v1beta1.QueryBidderMetadataResponse';
  bidderMetadata?: BidderMetadata;
}

function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryAuctionsRequest',
    state: 0,
    authority: '',
  };
}

export const QueryAuctionsRequest = {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionsRequest' as const,

  encode(
    message: QueryAuctionsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.authority !== '') {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAuctionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
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

  fromJSON(object: any): QueryAuctionsRequest {
    return {
      $type: QueryAuctionsRequest.$type,
      state: isSet(object.state) ? auctionStateFromJSON(object.state) : 0,
      authority: isSet(object.authority) ? String(object.authority) : '',
    };
  },

  toJSON(message: QueryAuctionsRequest): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = auctionStateToJSON(message.state));
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionsRequest>, I>>(
    object: I,
  ): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    message.state = object.state ?? 0;
    message.authority = object.authority ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryAuctionsRequest.$type, QueryAuctionsRequest);

function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryAuctionsResponse',
    auctions: [],
  };
}

export const QueryAuctionsResponse = {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionsResponse' as const,

  encode(
    message: QueryAuctionsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAuctionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionsResponse {
    return {
      $type: QueryAuctionsResponse.$type,
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => Auction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAuctionsResponse): unknown {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map(e =>
        e ? Auction.toJSON(e) : undefined,
      );
    } else {
      obj.auctions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionsResponse>, I>>(
    object: I,
  ): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryAuctionsResponse.$type, QueryAuctionsResponse);

function createBaseQueryAuctionRequest(): QueryAuctionRequest {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryAuctionRequest',
    id: Long.UZERO,
  };
}

export const QueryAuctionRequest = {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionRequest' as const,

  encode(
    message: QueryAuctionRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionRequest();
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

  fromJSON(object: any): QueryAuctionRequest {
    return {
      $type: QueryAuctionRequest.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryAuctionRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionRequest>, I>>(
    object: I,
  ): QueryAuctionRequest {
    const message = createBaseQueryAuctionRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryAuctionRequest.$type, QueryAuctionRequest);

function createBaseQueryAuctionResponse(): QueryAuctionResponse {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryAuctionResponse',
    auction: undefined,
  };
}

export const QueryAuctionResponse = {
  $type: 'bitsong.marketplace.v1beta1.QueryAuctionResponse' as const,

  encode(
    message: QueryAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuctionResponse {
    return {
      $type: QueryAuctionResponse.$type,
      auction: isSet(object.auction)
        ? Auction.fromJSON(object.auction)
        : undefined,
    };
  },

  toJSON(message: QueryAuctionResponse): unknown {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? Auction.toJSON(message.auction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAuctionResponse>, I>>(
    object: I,
  ): QueryAuctionResponse {
    const message = createBaseQueryAuctionResponse();
    message.auction =
      object.auction !== undefined && object.auction !== null
        ? Auction.fromPartial(object.auction)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAuctionResponse.$type, QueryAuctionResponse);

function createBaseQueryBidsByAuctionRequest(): QueryBidsByAuctionRequest {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryBidsByAuctionRequest',
    id: Long.UZERO,
  };
}

export const QueryBidsByAuctionRequest = {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByAuctionRequest' as const,

  encode(
    message: QueryBidsByAuctionRequest,
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
  ): QueryBidsByAuctionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsByAuctionRequest();
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

  fromJSON(object: any): QueryBidsByAuctionRequest {
    return {
      $type: QueryBidsByAuctionRequest.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryBidsByAuctionRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidsByAuctionRequest>, I>>(
    object: I,
  ): QueryBidsByAuctionRequest {
    const message = createBaseQueryBidsByAuctionRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBidsByAuctionRequest.$type,
  QueryBidsByAuctionRequest,
);

function createBaseQueryBidsByAuctionResponse(): QueryBidsByAuctionResponse {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryBidsByAuctionResponse',
    bids: [],
  };
}

export const QueryBidsByAuctionResponse = {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByAuctionResponse' as const,

  encode(
    message: QueryBidsByAuctionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBidsByAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsByAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBidsByAuctionResponse {
    return {
      $type: QueryBidsByAuctionResponse.$type,
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => Bid.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBidsByAuctionResponse): unknown {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidsByAuctionResponse>, I>>(
    object: I,
  ): QueryBidsByAuctionResponse {
    const message = createBaseQueryBidsByAuctionResponse();
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryBidsByAuctionResponse.$type,
  QueryBidsByAuctionResponse,
);

function createBaseQueryBidsByBidderRequest(): QueryBidsByBidderRequest {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryBidsByBidderRequest',
    bidder: '',
  };
}

export const QueryBidsByBidderRequest = {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByBidderRequest' as const,

  encode(
    message: QueryBidsByBidderRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBidsByBidderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsByBidderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBidsByBidderRequest {
    return {
      $type: QueryBidsByBidderRequest.$type,
      bidder: isSet(object.bidder) ? String(object.bidder) : '',
    };
  },

  toJSON(message: QueryBidsByBidderRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidsByBidderRequest>, I>>(
    object: I,
  ): QueryBidsByBidderRequest {
    const message = createBaseQueryBidsByBidderRequest();
    message.bidder = object.bidder ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryBidsByBidderRequest.$type,
  QueryBidsByBidderRequest,
);

function createBaseQueryBidsByBidderResponse(): QueryBidsByBidderResponse {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryBidsByBidderResponse',
    bids: [],
  };
}

export const QueryBidsByBidderResponse = {
  $type: 'bitsong.marketplace.v1beta1.QueryBidsByBidderResponse' as const,

  encode(
    message: QueryBidsByBidderResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBidsByBidderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidsByBidderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBidsByBidderResponse {
    return {
      $type: QueryBidsByBidderResponse.$type,
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => Bid.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBidsByBidderResponse): unknown {
    const obj: any = {};
    if (message.bids) {
      obj.bids = message.bids.map(e => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidsByBidderResponse>, I>>(
    object: I,
  ): QueryBidsByBidderResponse {
    const message = createBaseQueryBidsByBidderResponse();
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryBidsByBidderResponse.$type,
  QueryBidsByBidderResponse,
);

function createBaseQueryBidderMetadataRequest(): QueryBidderMetadataRequest {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryBidderMetadataRequest',
    bidder: '',
  };
}

export const QueryBidderMetadataRequest = {
  $type: 'bitsong.marketplace.v1beta1.QueryBidderMetadataRequest' as const,

  encode(
    message: QueryBidderMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bidder !== '') {
      writer.uint32(10).string(message.bidder);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBidderMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidderMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBidderMetadataRequest {
    return {
      $type: QueryBidderMetadataRequest.$type,
      bidder: isSet(object.bidder) ? String(object.bidder) : '',
    };
  },

  toJSON(message: QueryBidderMetadataRequest): unknown {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidderMetadataRequest>, I>>(
    object: I,
  ): QueryBidderMetadataRequest {
    const message = createBaseQueryBidderMetadataRequest();
    message.bidder = object.bidder ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryBidderMetadataRequest.$type,
  QueryBidderMetadataRequest,
);

function createBaseQueryBidderMetadataResponse(): QueryBidderMetadataResponse {
  return {
    $type: 'bitsong.marketplace.v1beta1.QueryBidderMetadataResponse',
    bidderMetadata: undefined,
  };
}

export const QueryBidderMetadataResponse = {
  $type: 'bitsong.marketplace.v1beta1.QueryBidderMetadataResponse' as const,

  encode(
    message: QueryBidderMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bidderMetadata !== undefined) {
      BidderMetadata.encode(
        message.bidderMetadata,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryBidderMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBidderMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidderMetadata = BidderMetadata.decode(
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

  fromJSON(object: any): QueryBidderMetadataResponse {
    return {
      $type: QueryBidderMetadataResponse.$type,
      bidderMetadata: isSet(object.bidderMetadata)
        ? BidderMetadata.fromJSON(object.bidderMetadata)
        : undefined,
    };
  },

  toJSON(message: QueryBidderMetadataResponse): unknown {
    const obj: any = {};
    message.bidderMetadata !== undefined &&
      (obj.bidderMetadata = message.bidderMetadata
        ? BidderMetadata.toJSON(message.bidderMetadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBidderMetadataResponse>, I>>(
    object: I,
  ): QueryBidderMetadataResponse {
    const message = createBaseQueryBidderMetadataResponse();
    message.bidderMetadata =
      object.bidderMetadata !== undefined && object.bidderMetadata !== null
        ? BidderMetadata.fromPartial(object.bidderMetadata)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryBidderMetadataResponse.$type,
  QueryBidderMetadataResponse,
);

/** Query creates service with marketplace as RPC */
export interface Query {
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse>;
  BidsByAuction(
    request: QueryBidsByAuctionRequest,
  ): Promise<QueryBidsByAuctionResponse>;
  BidsByBidder(
    request: QueryBidsByBidderRequest,
  ): Promise<QueryBidsByBidderResponse>;
  BidderMetadata(
    request: QueryBidderMetadataRequest,
  ): Promise<QueryBidderMetadataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Auctions = this.Auctions.bind(this);
    this.Auction = this.Auction.bind(this);
    this.BidsByAuction = this.BidsByAuction.bind(this);
    this.BidsByBidder = this.BidsByBidder.bind(this);
    this.BidderMetadata = this.BidderMetadata.bind(this);
  }
  Auctions(request: QueryAuctionsRequest): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.v1beta1.Query',
      'Auctions',
      data,
    );
    return promise.then(data =>
      QueryAuctionsResponse.decode(new _m0.Reader(data)),
    );
  }

  Auction(request: QueryAuctionRequest): Promise<QueryAuctionResponse> {
    const data = QueryAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.v1beta1.Query',
      'Auction',
      data,
    );
    return promise.then(data =>
      QueryAuctionResponse.decode(new _m0.Reader(data)),
    );
  }

  BidsByAuction(
    request: QueryBidsByAuctionRequest,
  ): Promise<QueryBidsByAuctionResponse> {
    const data = QueryBidsByAuctionRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.v1beta1.Query',
      'BidsByAuction',
      data,
    );
    return promise.then(data =>
      QueryBidsByAuctionResponse.decode(new _m0.Reader(data)),
    );
  }

  BidsByBidder(
    request: QueryBidsByBidderRequest,
  ): Promise<QueryBidsByBidderResponse> {
    const data = QueryBidsByBidderRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.v1beta1.Query',
      'BidsByBidder',
      data,
    );
    return promise.then(data =>
      QueryBidsByBidderResponse.decode(new _m0.Reader(data)),
    );
  }

  BidderMetadata(
    request: QueryBidderMetadataRequest,
  ): Promise<QueryBidderMetadataResponse> {
    const data = QueryBidderMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.marketplace.v1beta1.Query',
      'BidderMetadata',
      data,
    );
    return promise.then(data =>
      QueryBidderMetadataResponse.decode(new _m0.Reader(data)),
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
