/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import { Params, Auction, Bid, BidderMetadata } from './auction';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.marketplace.v1beta1';

/** GenesisState defines the auction module's genesis state */
export interface GenesisState {
  $type: 'bitsong.marketplace.v1beta1.GenesisState';
  params?: Params;
  auctions: Auction[];
  bids: Bid[];
  bidderMetadata: BidderMetadata[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'bitsong.marketplace.v1beta1.GenesisState',
    params: undefined,
    auctions: [],
    bids: [],
    bidderMetadata: [],
  };
}

export const GenesisState = {
  $type: 'bitsong.marketplace.v1beta1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.bids) {
      Bid.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.bidderMetadata) {
      BidderMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.auctions.push(Auction.decode(reader, reader.uint32()));
          break;
        case 4:
          message.bids.push(Bid.decode(reader, reader.uint32()));
          break;
        case 5:
          message.bidderMetadata.push(
            BidderMetadata.decode(reader, reader.uint32()),
          );
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
      auctions: Array.isArray(object?.auctions)
        ? object.auctions.map((e: any) => Auction.fromJSON(e))
        : [],
      bids: Array.isArray(object?.bids)
        ? object.bids.map((e: any) => Bid.fromJSON(e))
        : [],
      bidderMetadata: Array.isArray(object?.bidderMetadata)
        ? object.bidderMetadata.map((e: any) => BidderMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.auctions) {
      obj.auctions = message.auctions.map(e =>
        e ? Auction.toJSON(e) : undefined,
      );
    } else {
      obj.auctions = [];
    }
    if (message.bids) {
      obj.bids = message.bids.map(e => (e ? Bid.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    if (message.bidderMetadata) {
      obj.bidderMetadata = message.bidderMetadata.map(e =>
        e ? BidderMetadata.toJSON(e) : undefined,
      );
    } else {
      obj.bidderMetadata = [];
    }
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
    message.auctions = object.auctions?.map(e => Auction.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
    message.bidderMetadata =
      object.bidderMetadata?.map(e => BidderMetadata.fromPartial(e)) || [];
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
