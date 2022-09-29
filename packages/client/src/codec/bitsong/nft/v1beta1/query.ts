/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { NFT, Metadata, Collection } from './nft';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.nft.v1beta1';

/** QueryNFTInfoRequest is request type for the nft */
export interface QueryNFTInfoRequest {
  $type: 'bitsong.nft.v1beta1.QueryNFTInfoRequest';
  id: string;
}

/** QueryNFTInfoResponse is response type for the Query/NFTInfo RPC method */
export interface QueryNFTInfoResponse {
  $type: 'bitsong.nft.v1beta1.QueryNFTInfoResponse';
  nft?: NFT;
  metadata?: Metadata;
}

/** QueryNFTInfoRequest is request type for the nft */
export interface QueryNFTsByOwnerRequest {
  $type: 'bitsong.nft.v1beta1.QueryNFTsByOwnerRequest';
  owner: string;
}

/** QueryNFTInfoResponse is response type for the Query/NFTsByOwner RPC method */
export interface QueryNFTsByOwnerResponse {
  $type: 'bitsong.nft.v1beta1.QueryNFTsByOwnerResponse';
  nfts: NFT[];
  metadata: Metadata[];
}

/** QueryMetadataRequest is request type for the metadata */
export interface QueryMetadataRequest {
  $type: 'bitsong.nft.v1beta1.QueryMetadataRequest';
  collId: Long;
  id: Long;
}

/** QueryMetadataResponse is response type for the Query/Metadata RPC method */
export interface QueryMetadataResponse {
  $type: 'bitsong.nft.v1beta1.QueryMetadataResponse';
  metadata?: Metadata;
}

/** QueryCollectionRequest is request type for the collection */
export interface QueryCollectionRequest {
  $type: 'bitsong.nft.v1beta1.QueryCollectionRequest';
  id: Long;
}

/** QueryCollectionResponse is response type for the Query/Collection RPC method */
export interface QueryCollectionResponse {
  $type: 'bitsong.nft.v1beta1.QueryCollectionResponse';
  collection?: Collection;
  nfts: NFT[];
}

function createBaseQueryNFTInfoRequest(): QueryNFTInfoRequest {
  return { $type: 'bitsong.nft.v1beta1.QueryNFTInfoRequest', id: '' };
}

export const QueryNFTInfoRequest = {
  $type: 'bitsong.nft.v1beta1.QueryNFTInfoRequest' as const,

  encode(
    message: QueryNFTInfoRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTInfoRequest {
    return {
      $type: QueryNFTInfoRequest.$type,
      id: isSet(object.id) ? String(object.id) : '',
    };
  },

  toJSON(message: QueryNFTInfoRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTInfoRequest>, I>>(
    object: I,
  ): QueryNFTInfoRequest {
    const message = createBaseQueryNFTInfoRequest();
    message.id = object.id ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryNFTInfoRequest.$type, QueryNFTInfoRequest);

function createBaseQueryNFTInfoResponse(): QueryNFTInfoResponse {
  return {
    $type: 'bitsong.nft.v1beta1.QueryNFTInfoResponse',
    nft: undefined,
    metadata: undefined,
  };
}

export const QueryNFTInfoResponse = {
  $type: 'bitsong.nft.v1beta1.QueryNFTInfoResponse' as const,

  encode(
    message: QueryNFTInfoResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryNFTInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
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

  fromJSON(object: any): QueryNFTInfoResponse {
    return {
      $type: QueryNFTInfoResponse.$type,
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined,
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: QueryNFTInfoResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTInfoResponse>, I>>(
    object: I,
  ): QueryNFTInfoResponse {
    const message = createBaseQueryNFTInfoResponse();
    message.nft =
      object.nft !== undefined && object.nft !== null
        ? NFT.fromPartial(object.nft)
        : undefined;
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryNFTInfoResponse.$type, QueryNFTInfoResponse);

function createBaseQueryNFTsByOwnerRequest(): QueryNFTsByOwnerRequest {
  return { $type: 'bitsong.nft.v1beta1.QueryNFTsByOwnerRequest', owner: '' };
}

export const QueryNFTsByOwnerRequest = {
  $type: 'bitsong.nft.v1beta1.QueryNFTsByOwnerRequest' as const,

  encode(
    message: QueryNFTsByOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryNFTsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTsByOwnerRequest {
    return {
      $type: QueryNFTsByOwnerRequest.$type,
      owner: isSet(object.owner) ? String(object.owner) : '',
    };
  },

  toJSON(message: QueryNFTsByOwnerRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTsByOwnerRequest>, I>>(
    object: I,
  ): QueryNFTsByOwnerRequest {
    const message = createBaseQueryNFTsByOwnerRequest();
    message.owner = object.owner ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryNFTsByOwnerRequest.$type, QueryNFTsByOwnerRequest);

function createBaseQueryNFTsByOwnerResponse(): QueryNFTsByOwnerResponse {
  return {
    $type: 'bitsong.nft.v1beta1.QueryNFTsByOwnerResponse',
    nfts: [],
    metadata: [],
  };
}

export const QueryNFTsByOwnerResponse = {
  $type: 'bitsong.nft.v1beta1.QueryNFTsByOwnerResponse' as const,

  encode(
    message: QueryNFTsByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.metadata) {
      Metadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryNFTsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        case 2:
          message.metadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTsByOwnerResponse {
    return {
      $type: QueryNFTsByOwnerResponse.$type,
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => NFT.fromJSON(e))
        : [],
      metadata: Array.isArray(object?.metadata)
        ? object.metadata.map((e: any) => Metadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryNFTsByOwnerResponse): unknown {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    if (message.metadata) {
      obj.metadata = message.metadata.map(e =>
        e ? Metadata.toJSON(e) : undefined,
      );
    } else {
      obj.metadata = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTsByOwnerResponse>, I>>(
    object: I,
  ): QueryNFTsByOwnerResponse {
    const message = createBaseQueryNFTsByOwnerResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    message.metadata = object.metadata?.map(e => Metadata.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  QueryNFTsByOwnerResponse.$type,
  QueryNFTsByOwnerResponse,
);

function createBaseQueryMetadataRequest(): QueryMetadataRequest {
  return {
    $type: 'bitsong.nft.v1beta1.QueryMetadataRequest',
    collId: Long.UZERO,
    id: Long.UZERO,
  };
}

export const QueryMetadataRequest = {
  $type: 'bitsong.nft.v1beta1.QueryMetadataRequest' as const,

  encode(
    message: QueryMetadataRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.collId.isZero()) {
      writer.uint32(8).uint64(message.collId);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collId = reader.uint64() as Long;
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMetadataRequest {
    return {
      $type: QueryMetadataRequest.$type,
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryMetadataRequest): unknown {
    const obj: any = {};
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMetadataRequest>, I>>(
    object: I,
  ): QueryMetadataRequest {
    const message = createBaseQueryMetadataRequest();
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryMetadataRequest.$type, QueryMetadataRequest);

function createBaseQueryMetadataResponse(): QueryMetadataResponse {
  return {
    $type: 'bitsong.nft.v1beta1.QueryMetadataResponse',
    metadata: undefined,
  };
}

export const QueryMetadataResponse = {
  $type: 'bitsong.nft.v1beta1.QueryMetadataResponse' as const,

  encode(
    message: QueryMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMetadataResponse {
    return {
      $type: QueryMetadataResponse.$type,
      metadata: isSet(object.metadata)
        ? Metadata.fromJSON(object.metadata)
        : undefined,
    };
  },

  toJSON(message: QueryMetadataResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMetadataResponse>, I>>(
    object: I,
  ): QueryMetadataResponse {
    const message = createBaseQueryMetadataResponse();
    message.metadata =
      object.metadata !== undefined && object.metadata !== null
        ? Metadata.fromPartial(object.metadata)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryMetadataResponse.$type, QueryMetadataResponse);

function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    $type: 'bitsong.nft.v1beta1.QueryCollectionRequest',
    id: Long.UZERO,
  };
}

export const QueryCollectionRequest = {
  $type: 'bitsong.nft.v1beta1.QueryCollectionRequest' as const,

  encode(
    message: QueryCollectionRequest,
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
  ): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
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

  fromJSON(object: any): QueryCollectionRequest {
    return {
      $type: QueryCollectionRequest.$type,
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
    };
  },

  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionRequest>, I>>(
    object: I,
  ): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.id =
      object.id !== undefined && object.id !== null
        ? Long.fromValue(object.id)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryCollectionRequest.$type, QueryCollectionRequest);

function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    $type: 'bitsong.nft.v1beta1.QueryCollectionResponse',
    collection: undefined,
    nfts: [],
  };
}

export const QueryCollectionResponse = {
  $type: 'bitsong.nft.v1beta1.QueryCollectionResponse' as const,

  encode(
    message: QueryCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionResponse {
    return {
      $type: QueryCollectionResponse.$type,
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => NFT.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionResponse>, I>>(
    object: I,
  ): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryCollectionResponse.$type, QueryCollectionResponse);

/** Query creates service with nft as RPC */
export interface Query {
  /** NFTInfo returns NFT information */
  NFTInfo(request: QueryNFTInfoRequest): Promise<QueryNFTInfoResponse>;
  /** NFTsByOwner returns NFTs information by owner */
  NFTsByOwner(
    request: QueryNFTsByOwnerRequest,
  ): Promise<QueryNFTsByOwnerResponse>;
  /** Metadata returns Metadata */
  Metadata(request: QueryMetadataRequest): Promise<QueryMetadataResponse>;
  /** Collection returns collection information */
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.NFTInfo = this.NFTInfo.bind(this);
    this.NFTsByOwner = this.NFTsByOwner.bind(this);
    this.Metadata = this.Metadata.bind(this);
    this.Collection = this.Collection.bind(this);
  }
  NFTInfo(request: QueryNFTInfoRequest): Promise<QueryNFTInfoResponse> {
    const data = QueryNFTInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.v1beta1.Query',
      'NFTInfo',
      data,
    );
    return promise.then(data =>
      QueryNFTInfoResponse.decode(new _m0.Reader(data)),
    );
  }

  NFTsByOwner(
    request: QueryNFTsByOwnerRequest,
  ): Promise<QueryNFTsByOwnerResponse> {
    const data = QueryNFTsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.v1beta1.Query',
      'NFTsByOwner',
      data,
    );
    return promise.then(data =>
      QueryNFTsByOwnerResponse.decode(new _m0.Reader(data)),
    );
  }

  Metadata(request: QueryMetadataRequest): Promise<QueryMetadataResponse> {
    const data = QueryMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.v1beta1.Query',
      'Metadata',
      data,
    );
    return promise.then(data =>
      QueryMetadataResponse.decode(new _m0.Reader(data)),
    );
  }

  Collection(
    request: QueryCollectionRequest,
  ): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.nft.v1beta1.Query',
      'Collection',
      data,
    );
    return promise.then(data =>
      QueryCollectionResponse.decode(new _m0.Reader(data)),
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
