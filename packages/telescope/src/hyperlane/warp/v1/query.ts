import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { HypTokenType, RemoteRouter, RemoteRouterAmino } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, isSet } from "../../../helpers";
/**
 * QueryTokensRequest ...
 * @name QueryTokensRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokensRequest
 */
export interface QueryTokensRequest {
  pagination?: PageRequest;
}
export interface QueryTokensRequestProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryTokensRequest";
  value: Uint8Array;
}
/**
 * QueryTokensRequest ...
 * @name QueryTokensRequestAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokensRequest
 */
export interface QueryTokensRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryTokensRequestAminoMsg {
  type: "/hyperlane.warp.v1.QueryTokensRequest";
  value: QueryTokensRequestAmino;
}
/**
 * QueryTokensResponse ...
 * @name QueryTokensResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokensResponse
 */
export interface QueryTokensResponse {
  /**
   * params defines the parameters of the module.
   */
  tokens: WrappedHypToken[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryTokensResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryTokensResponse";
  value: Uint8Array;
}
/**
 * QueryTokensResponse ...
 * @name QueryTokensResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokensResponse
 */
export interface QueryTokensResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  tokens: WrappedHypTokenAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryTokensResponseAminoMsg {
  type: "/hyperlane.warp.v1.QueryTokensResponse";
  value: QueryTokensResponseAmino;
}
/**
 * QueryTokenRequest ...
 * @name QueryTokenRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokenRequest
 */
export interface QueryTokenRequest {
  id: string;
}
export interface QueryTokenRequestProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryTokenRequest";
  value: Uint8Array;
}
/**
 * QueryTokenRequest ...
 * @name QueryTokenRequestAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokenRequest
 */
export interface QueryTokenRequestAmino {
  id: string;
}
export interface QueryTokenRequestAminoMsg {
  type: "/hyperlane.warp.v1.QueryTokenRequest";
  value: QueryTokenRequestAmino;
}
/**
 * QueryTokenResponse ...
 * @name QueryTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokenResponse
 */
export interface QueryTokenResponse {
  token?: WrappedHypToken;
}
export interface QueryTokenResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryTokenResponse";
  value: Uint8Array;
}
/**
 * QueryTokenResponse ...
 * @name QueryTokenResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokenResponse
 */
export interface QueryTokenResponseAmino {
  token?: WrappedHypTokenAmino;
}
export interface QueryTokenResponseAminoMsg {
  type: "/hyperlane.warp.v1.QueryTokenResponse";
  value: QueryTokenResponseAmino;
}
/**
 * WrappedHypToken
 * @name WrappedHypToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.WrappedHypToken
 */
export interface WrappedHypToken {
  id: string;
  owner: string;
  tokenType: HypTokenType;
  originMailbox: string;
  originDenom: string;
  ismId?: string;
}
export interface WrappedHypTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.WrappedHypToken";
  value: Uint8Array;
}
/**
 * WrappedHypToken
 * @name WrappedHypTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.WrappedHypToken
 */
export interface WrappedHypTokenAmino {
  id: string;
  owner: string;
  token_type: HypTokenType;
  origin_mailbox: string;
  origin_denom: string;
  ism_id?: string;
}
export interface WrappedHypTokenAminoMsg {
  type: "/hyperlane.warp.v1.WrappedHypToken";
  value: WrappedHypTokenAmino;
}
/**
 * QueryBridgedSupplyRequest ...
 * @name QueryBridgedSupplyRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryBridgedSupplyRequest
 */
export interface QueryBridgedSupplyRequest {
  id: string;
}
export interface QueryBridgedSupplyRequestProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryBridgedSupplyRequest";
  value: Uint8Array;
}
/**
 * QueryBridgedSupplyRequest ...
 * @name QueryBridgedSupplyRequestAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryBridgedSupplyRequest
 */
export interface QueryBridgedSupplyRequestAmino {
  id: string;
}
export interface QueryBridgedSupplyRequestAminoMsg {
  type: "/hyperlane.warp.v1.QueryBridgedSupplyRequest";
  value: QueryBridgedSupplyRequestAmino;
}
/**
 * QueryBridgedSupplyResponse ...
 * @name QueryBridgedSupplyResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryBridgedSupplyResponse
 */
export interface QueryBridgedSupplyResponse {
  bridgedSupply: Coin;
}
export interface QueryBridgedSupplyResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryBridgedSupplyResponse";
  value: Uint8Array;
}
/**
 * QueryBridgedSupplyResponse ...
 * @name QueryBridgedSupplyResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryBridgedSupplyResponse
 */
export interface QueryBridgedSupplyResponseAmino {
  bridged_supply: CoinAmino;
}
export interface QueryBridgedSupplyResponseAminoMsg {
  type: "/hyperlane.warp.v1.QueryBridgedSupplyResponse";
  value: QueryBridgedSupplyResponseAmino;
}
/**
 * QueryRemoteRoutersRequest ...
 * @name QueryRemoteRoutersRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryRemoteRoutersRequest
 */
export interface QueryRemoteRoutersRequest {
  id: string;
  pagination?: PageRequest;
}
export interface QueryRemoteRoutersRequestProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryRemoteRoutersRequest";
  value: Uint8Array;
}
/**
 * QueryRemoteRoutersRequest ...
 * @name QueryRemoteRoutersRequestAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryRemoteRoutersRequest
 */
export interface QueryRemoteRoutersRequestAmino {
  id: string;
  pagination?: PageRequestAmino;
}
export interface QueryRemoteRoutersRequestAminoMsg {
  type: "/hyperlane.warp.v1.QueryRemoteRoutersRequest";
  value: QueryRemoteRoutersRequestAmino;
}
/**
 * QueryRemoteRoutersResponse ...
 * @name QueryRemoteRoutersResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryRemoteRoutersResponse
 */
export interface QueryRemoteRoutersResponse {
  /**
   * Remote Routers ...
   */
  remoteRouters: RemoteRouter[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryRemoteRoutersResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryRemoteRoutersResponse";
  value: Uint8Array;
}
/**
 * QueryRemoteRoutersResponse ...
 * @name QueryRemoteRoutersResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryRemoteRoutersResponse
 */
export interface QueryRemoteRoutersResponseAmino {
  /**
   * Remote Routers ...
   */
  remote_routers: RemoteRouterAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryRemoteRoutersResponseAminoMsg {
  type: "/hyperlane.warp.v1.QueryRemoteRoutersResponse";
  value: QueryRemoteRoutersResponseAmino;
}
/**
 * QueryQuoteRemoteTransferRequest ...
 * @name QueryQuoteRemoteTransferRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryQuoteRemoteTransferRequest
 */
export interface QueryQuoteRemoteTransferRequest {
  id: string;
  destinationDomain: string;
  customHookId: string;
  customHookMetadata: string;
}
export interface QueryQuoteRemoteTransferRequestProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryQuoteRemoteTransferRequest";
  value: Uint8Array;
}
/**
 * QueryQuoteRemoteTransferRequest ...
 * @name QueryQuoteRemoteTransferRequestAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryQuoteRemoteTransferRequest
 */
export interface QueryQuoteRemoteTransferRequestAmino {
  id: string;
  destination_domain: string;
  custom_hook_id: string;
  custom_hook_metadata: string;
}
export interface QueryQuoteRemoteTransferRequestAminoMsg {
  type: "/hyperlane.warp.v1.QueryQuoteRemoteTransferRequest";
  value: QueryQuoteRemoteTransferRequestAmino;
}
/**
 * QueryQuoteRemoteTransferResponse ...
 * @name QueryQuoteRemoteTransferResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryQuoteRemoteTransferResponse
 */
export interface QueryQuoteRemoteTransferResponse {
  gasPayment: Coin[];
}
export interface QueryQuoteRemoteTransferResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.QueryQuoteRemoteTransferResponse";
  value: Uint8Array;
}
/**
 * QueryQuoteRemoteTransferResponse ...
 * @name QueryQuoteRemoteTransferResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryQuoteRemoteTransferResponse
 */
export interface QueryQuoteRemoteTransferResponseAmino {
  gas_payment: CoinAmino[];
}
export interface QueryQuoteRemoteTransferResponseAminoMsg {
  type: "/hyperlane.warp.v1.QueryQuoteRemoteTransferResponse";
  value: QueryQuoteRemoteTransferResponseAmino;
}
function createBaseQueryTokensRequest(): QueryTokensRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryTokensRequest ...
 * @name QueryTokensRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokensRequest
 */
export const QueryTokensRequest = {
  typeUrl: "/hyperlane.warp.v1.QueryTokensRequest",
  is(o: any): o is QueryTokensRequest {
    return o && o.$typeUrl === QueryTokensRequest.typeUrl;
  },
  isAmino(o: any): o is QueryTokensRequestAmino {
    return o && o.$typeUrl === QueryTokensRequest.typeUrl;
  },
  encode(message: QueryTokensRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokensRequest>): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensRequestAmino): QueryTokensRequest {
    const message = createBaseQueryTokensRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensRequest): QueryTokensRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensRequestAminoMsg): QueryTokensRequest {
    return QueryTokensRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensRequestProtoMsg): QueryTokensRequest {
    return QueryTokensRequest.decode(message.value);
  },
  toProto(message: QueryTokensRequest): Uint8Array {
    return QueryTokensRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensRequest): QueryTokensRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryTokensRequest",
      value: QueryTokensRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTokensRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryTokensResponse(): QueryTokensResponse {
  return {
    tokens: [],
    pagination: undefined
  };
}
/**
 * QueryTokensResponse ...
 * @name QueryTokensResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokensResponse
 */
export const QueryTokensResponse = {
  typeUrl: "/hyperlane.warp.v1.QueryTokensResponse",
  is(o: any): o is QueryTokensResponse {
    return o && (o.$typeUrl === QueryTokensResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || WrappedHypToken.is(o.tokens[0])));
  },
  isAmino(o: any): o is QueryTokensResponseAmino {
    return o && (o.$typeUrl === QueryTokensResponse.typeUrl || Array.isArray(o.tokens) && (!o.tokens.length || WrappedHypToken.isAmino(o.tokens[0])));
  },
  encode(message: QueryTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tokens) {
      WrappedHypToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens.push(WrappedHypToken.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokensResponse>): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.tokens = object.tokens?.map(e => WrappedHypToken.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryTokensResponseAmino): QueryTokensResponse {
    const message = createBaseQueryTokensResponse();
    message.tokens = object.tokens?.map(e => WrappedHypToken.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryTokensResponse): QueryTokensResponseAmino {
    const obj: any = {};
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? WrappedHypToken.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokensResponseAminoMsg): QueryTokensResponse {
    return QueryTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokensResponseProtoMsg): QueryTokensResponse {
    return QueryTokensResponse.decode(message.value);
  },
  toProto(message: QueryTokensResponse): Uint8Array {
    return QueryTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokensResponse): QueryTokensResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryTokensResponse",
      value: QueryTokensResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTokensResponse.typeUrl)) {
      return;
    }
    WrappedHypToken.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryTokenRequest(): QueryTokenRequest {
  return {
    id: ""
  };
}
/**
 * QueryTokenRequest ...
 * @name QueryTokenRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokenRequest
 */
export const QueryTokenRequest = {
  typeUrl: "/hyperlane.warp.v1.QueryTokenRequest",
  is(o: any): o is QueryTokenRequest {
    return o && (o.$typeUrl === QueryTokenRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryTokenRequestAmino {
    return o && (o.$typeUrl === QueryTokenRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryTokenRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
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
  fromPartial(object: DeepPartial<QueryTokenRequest>): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryTokenRequestAmino): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryTokenRequest): QueryTokenRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryTokenRequestAminoMsg): QueryTokenRequest {
    return QueryTokenRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenRequestProtoMsg): QueryTokenRequest {
    return QueryTokenRequest.decode(message.value);
  },
  toProto(message: QueryTokenRequest): Uint8Array {
    return QueryTokenRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenRequest): QueryTokenRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryTokenRequest",
      value: QueryTokenRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryTokenResponse(): QueryTokenResponse {
  return {
    token: undefined
  };
}
/**
 * QueryTokenResponse ...
 * @name QueryTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryTokenResponse
 */
export const QueryTokenResponse = {
  typeUrl: "/hyperlane.warp.v1.QueryTokenResponse",
  is(o: any): o is QueryTokenResponse {
    return o && o.$typeUrl === QueryTokenResponse.typeUrl;
  },
  isAmino(o: any): o is QueryTokenResponseAmino {
    return o && o.$typeUrl === QueryTokenResponse.typeUrl;
  },
  encode(message: QueryTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token !== undefined) {
      WrappedHypToken.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = WrappedHypToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTokenResponse>): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token = object.token !== undefined && object.token !== null ? WrappedHypToken.fromPartial(object.token) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenResponseAmino): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    if (object.token !== undefined && object.token !== null) {
      message.token = WrappedHypToken.fromAmino(object.token);
    }
    return message;
  },
  toAmino(message: QueryTokenResponse): QueryTokenResponseAmino {
    const obj: any = {};
    obj.token = message.token ? WrappedHypToken.toAmino(message.token) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenResponseAminoMsg): QueryTokenResponse {
    return QueryTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTokenResponseProtoMsg): QueryTokenResponse {
    return QueryTokenResponse.decode(message.value);
  },
  toProto(message: QueryTokenResponse): Uint8Array {
    return QueryTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenResponse): QueryTokenResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryTokenResponse",
      value: QueryTokenResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryTokenResponse.typeUrl)) {
      return;
    }
    WrappedHypToken.registerTypeUrl();
  }
};
function createBaseWrappedHypToken(): WrappedHypToken {
  return {
    id: "",
    owner: "",
    tokenType: 0,
    originMailbox: "",
    originDenom: "",
    ismId: undefined
  };
}
/**
 * WrappedHypToken
 * @name WrappedHypToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.WrappedHypToken
 */
export const WrappedHypToken = {
  typeUrl: "/hyperlane.warp.v1.WrappedHypToken",
  is(o: any): o is WrappedHypToken {
    return o && (o.$typeUrl === WrappedHypToken.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && isSet(o.tokenType) && typeof o.originMailbox === "string" && typeof o.originDenom === "string");
  },
  isAmino(o: any): o is WrappedHypTokenAmino {
    return o && (o.$typeUrl === WrappedHypToken.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && isSet(o.token_type) && typeof o.origin_mailbox === "string" && typeof o.origin_denom === "string");
  },
  encode(message: WrappedHypToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.tokenType !== 0) {
      writer.uint32(24).int32(message.tokenType);
    }
    if (message.originMailbox !== "") {
      writer.uint32(34).string(message.originMailbox);
    }
    if (message.originDenom !== "") {
      writer.uint32(42).string(message.originDenom);
    }
    if (message.ismId !== undefined) {
      writer.uint32(58).string(message.ismId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrappedHypToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrappedHypToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.tokenType = reader.int32() as any;
          break;
        case 4:
          message.originMailbox = reader.string();
          break;
        case 5:
          message.originDenom = reader.string();
          break;
        case 7:
          message.ismId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WrappedHypToken>): WrappedHypToken {
    const message = createBaseWrappedHypToken();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.tokenType = object.tokenType ?? 0;
    message.originMailbox = object.originMailbox ?? "";
    message.originDenom = object.originDenom ?? "";
    message.ismId = object.ismId ?? undefined;
    return message;
  },
  fromAmino(object: WrappedHypTokenAmino): WrappedHypToken {
    const message = createBaseWrappedHypToken();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.token_type !== undefined && object.token_type !== null) {
      message.tokenType = object.token_type;
    }
    if (object.origin_mailbox !== undefined && object.origin_mailbox !== null) {
      message.originMailbox = object.origin_mailbox;
    }
    if (object.origin_denom !== undefined && object.origin_denom !== null) {
      message.originDenom = object.origin_denom;
    }
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    return message;
  },
  toAmino(message: WrappedHypToken): WrappedHypTokenAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_type = message.tokenType === 0 ? undefined : message.tokenType;
    obj.origin_mailbox = message.originMailbox === "" ? undefined : message.originMailbox;
    obj.origin_denom = message.originDenom === "" ? undefined : message.originDenom;
    obj.ism_id = message.ismId === null ? undefined : message.ismId;
    return obj;
  },
  fromAminoMsg(object: WrappedHypTokenAminoMsg): WrappedHypToken {
    return WrappedHypToken.fromAmino(object.value);
  },
  fromProtoMsg(message: WrappedHypTokenProtoMsg): WrappedHypToken {
    return WrappedHypToken.decode(message.value);
  },
  toProto(message: WrappedHypToken): Uint8Array {
    return WrappedHypToken.encode(message).finish();
  },
  toProtoMsg(message: WrappedHypToken): WrappedHypTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.WrappedHypToken",
      value: WrappedHypToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBridgedSupplyRequest(): QueryBridgedSupplyRequest {
  return {
    id: ""
  };
}
/**
 * QueryBridgedSupplyRequest ...
 * @name QueryBridgedSupplyRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryBridgedSupplyRequest
 */
export const QueryBridgedSupplyRequest = {
  typeUrl: "/hyperlane.warp.v1.QueryBridgedSupplyRequest",
  is(o: any): o is QueryBridgedSupplyRequest {
    return o && (o.$typeUrl === QueryBridgedSupplyRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryBridgedSupplyRequestAmino {
    return o && (o.$typeUrl === QueryBridgedSupplyRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryBridgedSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBridgedSupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBridgedSupplyRequest();
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
  fromPartial(object: DeepPartial<QueryBridgedSupplyRequest>): QueryBridgedSupplyRequest {
    const message = createBaseQueryBridgedSupplyRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryBridgedSupplyRequestAmino): QueryBridgedSupplyRequest {
    const message = createBaseQueryBridgedSupplyRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryBridgedSupplyRequest): QueryBridgedSupplyRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryBridgedSupplyRequestAminoMsg): QueryBridgedSupplyRequest {
    return QueryBridgedSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBridgedSupplyRequestProtoMsg): QueryBridgedSupplyRequest {
    return QueryBridgedSupplyRequest.decode(message.value);
  },
  toProto(message: QueryBridgedSupplyRequest): Uint8Array {
    return QueryBridgedSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBridgedSupplyRequest): QueryBridgedSupplyRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryBridgedSupplyRequest",
      value: QueryBridgedSupplyRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBridgedSupplyResponse(): QueryBridgedSupplyResponse {
  return {
    bridgedSupply: Coin.fromPartial({})
  };
}
/**
 * QueryBridgedSupplyResponse ...
 * @name QueryBridgedSupplyResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryBridgedSupplyResponse
 */
export const QueryBridgedSupplyResponse = {
  typeUrl: "/hyperlane.warp.v1.QueryBridgedSupplyResponse",
  is(o: any): o is QueryBridgedSupplyResponse {
    return o && (o.$typeUrl === QueryBridgedSupplyResponse.typeUrl || Coin.is(o.bridgedSupply));
  },
  isAmino(o: any): o is QueryBridgedSupplyResponseAmino {
    return o && (o.$typeUrl === QueryBridgedSupplyResponse.typeUrl || Coin.isAmino(o.bridged_supply));
  },
  encode(message: QueryBridgedSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bridgedSupply !== undefined) {
      Coin.encode(message.bridgedSupply, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBridgedSupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBridgedSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgedSupply = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBridgedSupplyResponse>): QueryBridgedSupplyResponse {
    const message = createBaseQueryBridgedSupplyResponse();
    message.bridgedSupply = object.bridgedSupply !== undefined && object.bridgedSupply !== null ? Coin.fromPartial(object.bridgedSupply) : undefined;
    return message;
  },
  fromAmino(object: QueryBridgedSupplyResponseAmino): QueryBridgedSupplyResponse {
    const message = createBaseQueryBridgedSupplyResponse();
    if (object.bridged_supply !== undefined && object.bridged_supply !== null) {
      message.bridgedSupply = Coin.fromAmino(object.bridged_supply);
    }
    return message;
  },
  toAmino(message: QueryBridgedSupplyResponse): QueryBridgedSupplyResponseAmino {
    const obj: any = {};
    obj.bridged_supply = message.bridgedSupply ? Coin.toAmino(message.bridgedSupply) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryBridgedSupplyResponseAminoMsg): QueryBridgedSupplyResponse {
    return QueryBridgedSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBridgedSupplyResponseProtoMsg): QueryBridgedSupplyResponse {
    return QueryBridgedSupplyResponse.decode(message.value);
  },
  toProto(message: QueryBridgedSupplyResponse): Uint8Array {
    return QueryBridgedSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBridgedSupplyResponse): QueryBridgedSupplyResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryBridgedSupplyResponse",
      value: QueryBridgedSupplyResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryBridgedSupplyResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryRemoteRoutersRequest(): QueryRemoteRoutersRequest {
  return {
    id: "",
    pagination: undefined
  };
}
/**
 * QueryRemoteRoutersRequest ...
 * @name QueryRemoteRoutersRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryRemoteRoutersRequest
 */
export const QueryRemoteRoutersRequest = {
  typeUrl: "/hyperlane.warp.v1.QueryRemoteRoutersRequest",
  is(o: any): o is QueryRemoteRoutersRequest {
    return o && (o.$typeUrl === QueryRemoteRoutersRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryRemoteRoutersRequestAmino {
    return o && (o.$typeUrl === QueryRemoteRoutersRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryRemoteRoutersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRemoteRoutersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemoteRoutersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRemoteRoutersRequest>): QueryRemoteRoutersRequest {
    const message = createBaseQueryRemoteRoutersRequest();
    message.id = object.id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRemoteRoutersRequestAmino): QueryRemoteRoutersRequest {
    const message = createBaseQueryRemoteRoutersRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRemoteRoutersRequest): QueryRemoteRoutersRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRemoteRoutersRequestAminoMsg): QueryRemoteRoutersRequest {
    return QueryRemoteRoutersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRemoteRoutersRequestProtoMsg): QueryRemoteRoutersRequest {
    return QueryRemoteRoutersRequest.decode(message.value);
  },
  toProto(message: QueryRemoteRoutersRequest): Uint8Array {
    return QueryRemoteRoutersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRemoteRoutersRequest): QueryRemoteRoutersRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryRemoteRoutersRequest",
      value: QueryRemoteRoutersRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRemoteRoutersRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryRemoteRoutersResponse(): QueryRemoteRoutersResponse {
  return {
    remoteRouters: [],
    pagination: undefined
  };
}
/**
 * QueryRemoteRoutersResponse ...
 * @name QueryRemoteRoutersResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryRemoteRoutersResponse
 */
export const QueryRemoteRoutersResponse = {
  typeUrl: "/hyperlane.warp.v1.QueryRemoteRoutersResponse",
  is(o: any): o is QueryRemoteRoutersResponse {
    return o && (o.$typeUrl === QueryRemoteRoutersResponse.typeUrl || Array.isArray(o.remoteRouters) && (!o.remoteRouters.length || RemoteRouter.is(o.remoteRouters[0])));
  },
  isAmino(o: any): o is QueryRemoteRoutersResponseAmino {
    return o && (o.$typeUrl === QueryRemoteRoutersResponse.typeUrl || Array.isArray(o.remote_routers) && (!o.remote_routers.length || RemoteRouter.isAmino(o.remote_routers[0])));
  },
  encode(message: QueryRemoteRoutersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.remoteRouters) {
      RemoteRouter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRemoteRoutersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRemoteRoutersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remoteRouters.push(RemoteRouter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRemoteRoutersResponse>): QueryRemoteRoutersResponse {
    const message = createBaseQueryRemoteRoutersResponse();
    message.remoteRouters = object.remoteRouters?.map(e => RemoteRouter.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRemoteRoutersResponseAmino): QueryRemoteRoutersResponse {
    const message = createBaseQueryRemoteRoutersResponse();
    message.remoteRouters = object.remote_routers?.map(e => RemoteRouter.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRemoteRoutersResponse): QueryRemoteRoutersResponseAmino {
    const obj: any = {};
    if (message.remoteRouters) {
      obj.remote_routers = message.remoteRouters.map(e => e ? RemoteRouter.toAmino(e) : undefined);
    } else {
      obj.remote_routers = message.remoteRouters;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRemoteRoutersResponseAminoMsg): QueryRemoteRoutersResponse {
    return QueryRemoteRoutersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRemoteRoutersResponseProtoMsg): QueryRemoteRoutersResponse {
    return QueryRemoteRoutersResponse.decode(message.value);
  },
  toProto(message: QueryRemoteRoutersResponse): Uint8Array {
    return QueryRemoteRoutersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRemoteRoutersResponse): QueryRemoteRoutersResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryRemoteRoutersResponse",
      value: QueryRemoteRoutersResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryRemoteRoutersResponse.typeUrl)) {
      return;
    }
    RemoteRouter.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryQuoteRemoteTransferRequest(): QueryQuoteRemoteTransferRequest {
  return {
    id: "",
    destinationDomain: "",
    customHookId: "",
    customHookMetadata: ""
  };
}
/**
 * QueryQuoteRemoteTransferRequest ...
 * @name QueryQuoteRemoteTransferRequest
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryQuoteRemoteTransferRequest
 */
export const QueryQuoteRemoteTransferRequest = {
  typeUrl: "/hyperlane.warp.v1.QueryQuoteRemoteTransferRequest",
  is(o: any): o is QueryQuoteRemoteTransferRequest {
    return o && (o.$typeUrl === QueryQuoteRemoteTransferRequest.typeUrl || typeof o.id === "string" && typeof o.destinationDomain === "string" && typeof o.customHookId === "string" && typeof o.customHookMetadata === "string");
  },
  isAmino(o: any): o is QueryQuoteRemoteTransferRequestAmino {
    return o && (o.$typeUrl === QueryQuoteRemoteTransferRequest.typeUrl || typeof o.id === "string" && typeof o.destination_domain === "string" && typeof o.custom_hook_id === "string" && typeof o.custom_hook_metadata === "string");
  },
  encode(message: QueryQuoteRemoteTransferRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.destinationDomain !== "") {
      writer.uint32(18).string(message.destinationDomain);
    }
    if (message.customHookId !== "") {
      writer.uint32(26).string(message.customHookId);
    }
    if (message.customHookMetadata !== "") {
      writer.uint32(34).string(message.customHookMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuoteRemoteTransferRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteRemoteTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.destinationDomain = reader.string();
          break;
        case 3:
          message.customHookId = reader.string();
          break;
        case 4:
          message.customHookMetadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuoteRemoteTransferRequest>): QueryQuoteRemoteTransferRequest {
    const message = createBaseQueryQuoteRemoteTransferRequest();
    message.id = object.id ?? "";
    message.destinationDomain = object.destinationDomain ?? "";
    message.customHookId = object.customHookId ?? "";
    message.customHookMetadata = object.customHookMetadata ?? "";
    return message;
  },
  fromAmino(object: QueryQuoteRemoteTransferRequestAmino): QueryQuoteRemoteTransferRequest {
    const message = createBaseQueryQuoteRemoteTransferRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.destination_domain !== undefined && object.destination_domain !== null) {
      message.destinationDomain = object.destination_domain;
    }
    if (object.custom_hook_id !== undefined && object.custom_hook_id !== null) {
      message.customHookId = object.custom_hook_id;
    }
    if (object.custom_hook_metadata !== undefined && object.custom_hook_metadata !== null) {
      message.customHookMetadata = object.custom_hook_metadata;
    }
    return message;
  },
  toAmino(message: QueryQuoteRemoteTransferRequest): QueryQuoteRemoteTransferRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.destination_domain = message.destinationDomain === "" ? undefined : message.destinationDomain;
    obj.custom_hook_id = message.customHookId === "" ? undefined : message.customHookId;
    obj.custom_hook_metadata = message.customHookMetadata === "" ? undefined : message.customHookMetadata;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteRemoteTransferRequestAminoMsg): QueryQuoteRemoteTransferRequest {
    return QueryQuoteRemoteTransferRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteRemoteTransferRequestProtoMsg): QueryQuoteRemoteTransferRequest {
    return QueryQuoteRemoteTransferRequest.decode(message.value);
  },
  toProto(message: QueryQuoteRemoteTransferRequest): Uint8Array {
    return QueryQuoteRemoteTransferRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteRemoteTransferRequest): QueryQuoteRemoteTransferRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryQuoteRemoteTransferRequest",
      value: QueryQuoteRemoteTransferRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryQuoteRemoteTransferResponse(): QueryQuoteRemoteTransferResponse {
  return {
    gasPayment: []
  };
}
/**
 * QueryQuoteRemoteTransferResponse ...
 * @name QueryQuoteRemoteTransferResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.QueryQuoteRemoteTransferResponse
 */
export const QueryQuoteRemoteTransferResponse = {
  typeUrl: "/hyperlane.warp.v1.QueryQuoteRemoteTransferResponse",
  is(o: any): o is QueryQuoteRemoteTransferResponse {
    return o && (o.$typeUrl === QueryQuoteRemoteTransferResponse.typeUrl || Array.isArray(o.gasPayment) && (!o.gasPayment.length || Coin.is(o.gasPayment[0])));
  },
  isAmino(o: any): o is QueryQuoteRemoteTransferResponseAmino {
    return o && (o.$typeUrl === QueryQuoteRemoteTransferResponse.typeUrl || Array.isArray(o.gas_payment) && (!o.gas_payment.length || Coin.isAmino(o.gas_payment[0])));
  },
  encode(message: QueryQuoteRemoteTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gasPayment) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuoteRemoteTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteRemoteTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasPayment.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuoteRemoteTransferResponse>): QueryQuoteRemoteTransferResponse {
    const message = createBaseQueryQuoteRemoteTransferResponse();
    message.gasPayment = object.gasPayment?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryQuoteRemoteTransferResponseAmino): QueryQuoteRemoteTransferResponse {
    const message = createBaseQueryQuoteRemoteTransferResponse();
    message.gasPayment = object.gas_payment?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryQuoteRemoteTransferResponse): QueryQuoteRemoteTransferResponseAmino {
    const obj: any = {};
    if (message.gasPayment) {
      obj.gas_payment = message.gasPayment.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gas_payment = message.gasPayment;
    }
    return obj;
  },
  fromAminoMsg(object: QueryQuoteRemoteTransferResponseAminoMsg): QueryQuoteRemoteTransferResponse {
    return QueryQuoteRemoteTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteRemoteTransferResponseProtoMsg): QueryQuoteRemoteTransferResponse {
    return QueryQuoteRemoteTransferResponse.decode(message.value);
  },
  toProto(message: QueryQuoteRemoteTransferResponse): Uint8Array {
    return QueryQuoteRemoteTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteRemoteTransferResponse): QueryQuoteRemoteTransferResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.QueryQuoteRemoteTransferResponse",
      value: QueryQuoteRemoteTransferResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryQuoteRemoteTransferResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};