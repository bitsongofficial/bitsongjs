import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../../cosmos/base/query/v1beta1/pagination";
import { InterchainGasPaymaster, InterchainGasPaymasterAmino, DestinationGasConfig, DestinationGasConfigAmino, NoopHook, NoopHookAmino } from "./types";
import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * QueryIgpsRequest ...
 * @name QueryIgpsRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpsRequest
 */
export interface QueryIgpsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryIgpsRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpsRequest";
  value: Uint8Array;
}
/**
 * QueryIgpsRequest ...
 * @name QueryIgpsRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpsRequest
 */
export interface QueryIgpsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryIgpsRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryIgpsRequest";
  value: QueryIgpsRequestAmino;
}
/**
 * QueryIgpsResponse ...
 * @name QueryIgpsResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpsResponse
 */
export interface QueryIgpsResponse {
  igps: InterchainGasPaymaster[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryIgpsResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpsResponse";
  value: Uint8Array;
}
/**
 * QueryIgpsResponse ...
 * @name QueryIgpsResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpsResponse
 */
export interface QueryIgpsResponseAmino {
  igps: InterchainGasPaymasterAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryIgpsResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryIgpsResponse";
  value: QueryIgpsResponseAmino;
}
/**
 * QueryIgpRequest ...
 * @name QueryIgpRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpRequest
 */
export interface QueryIgpRequest {
  id: string;
}
export interface QueryIgpRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpRequest";
  value: Uint8Array;
}
/**
 * QueryIgpRequest ...
 * @name QueryIgpRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpRequest
 */
export interface QueryIgpRequestAmino {
  id: string;
}
export interface QueryIgpRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryIgpRequest";
  value: QueryIgpRequestAmino;
}
/**
 * QueryIgpResponse ...
 * @name QueryIgpResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpResponse
 */
export interface QueryIgpResponse {
  igp: InterchainGasPaymaster;
}
export interface QueryIgpResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpResponse";
  value: Uint8Array;
}
/**
 * QueryIgpResponse ...
 * @name QueryIgpResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpResponse
 */
export interface QueryIgpResponseAmino {
  igp: InterchainGasPaymasterAmino;
}
export interface QueryIgpResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryIgpResponse";
  value: QueryIgpResponseAmino;
}
/**
 * QueryDestinationGasConfigsRequest ...
 * @name QueryDestinationGasConfigsRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsRequest
 */
export interface QueryDestinationGasConfigsRequest {
  id: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryDestinationGasConfigsRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsRequest";
  value: Uint8Array;
}
/**
 * QueryDestinationGasConfigsRequest ...
 * @name QueryDestinationGasConfigsRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsRequest
 */
export interface QueryDestinationGasConfigsRequestAmino {
  id: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryDestinationGasConfigsRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsRequest";
  value: QueryDestinationGasConfigsRequestAmino;
}
/**
 * QueryDestinationGasConfigsResponse ...
 * @name QueryDestinationGasConfigsResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsResponse
 */
export interface QueryDestinationGasConfigsResponse {
  destinationGasConfigs: DestinationGasConfig[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryDestinationGasConfigsResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsResponse";
  value: Uint8Array;
}
/**
 * QueryDestinationGasConfigsResponse ...
 * @name QueryDestinationGasConfigsResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsResponse
 */
export interface QueryDestinationGasConfigsResponseAmino {
  destination_gas_configs: DestinationGasConfigAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryDestinationGasConfigsResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsResponse";
  value: QueryDestinationGasConfigsResponseAmino;
}
/**
 * QueryQuoteGasPaymentRequest ...
 * @name QueryQuoteGasPaymentRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentRequest
 */
export interface QueryQuoteGasPaymentRequest {
  igpId: string;
  destinationDomain: string;
  gasLimit: string;
}
export interface QueryQuoteGasPaymentRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentRequest";
  value: Uint8Array;
}
/**
 * QueryQuoteGasPaymentRequest ...
 * @name QueryQuoteGasPaymentRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentRequest
 */
export interface QueryQuoteGasPaymentRequestAmino {
  igp_id: string;
  destination_domain: string;
  gas_limit: string;
}
export interface QueryQuoteGasPaymentRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentRequest";
  value: QueryQuoteGasPaymentRequestAmino;
}
/**
 * QueryQuoteGasPaymentResponse ...
 * @name QueryQuoteGasPaymentResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentResponse
 */
export interface QueryQuoteGasPaymentResponse {
  gasPayment: Coin[];
}
export interface QueryQuoteGasPaymentResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentResponse";
  value: Uint8Array;
}
/**
 * QueryQuoteGasPaymentResponse ...
 * @name QueryQuoteGasPaymentResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentResponse
 */
export interface QueryQuoteGasPaymentResponseAmino {
  gas_payment: CoinAmino[];
}
export interface QueryQuoteGasPaymentResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentResponse";
  value: QueryQuoteGasPaymentResponseAmino;
}
/**
 * QueryMerkleTreeHooksRequest ...
 * @name QueryMerkleTreeHooksRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksRequest
 */
export interface QueryMerkleTreeHooksRequest {
  pagination?: PageRequest;
}
export interface QueryMerkleTreeHooksRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksRequest";
  value: Uint8Array;
}
/**
 * QueryMerkleTreeHooksRequest ...
 * @name QueryMerkleTreeHooksRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksRequest
 */
export interface QueryMerkleTreeHooksRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryMerkleTreeHooksRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksRequest";
  value: QueryMerkleTreeHooksRequestAmino;
}
/**
 * QueryMerkleTreeHooksResponse ...
 * @name QueryMerkleTreeHooksResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksResponse
 */
export interface QueryMerkleTreeHooksResponse {
  merkleTreeHooks: WrappedMerkleTreeHookResponse[];
  pagination?: PageResponse;
}
export interface QueryMerkleTreeHooksResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksResponse";
  value: Uint8Array;
}
/**
 * QueryMerkleTreeHooksResponse ...
 * @name QueryMerkleTreeHooksResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksResponse
 */
export interface QueryMerkleTreeHooksResponseAmino {
  merkle_tree_hooks: WrappedMerkleTreeHookResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryMerkleTreeHooksResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksResponse";
  value: QueryMerkleTreeHooksResponseAmino;
}
/**
 * QueryMerkleTreeHookRequest ...
 * @name QueryMerkleTreeHookRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookRequest
 */
export interface QueryMerkleTreeHookRequest {
  id: string;
}
export interface QueryMerkleTreeHookRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookRequest";
  value: Uint8Array;
}
/**
 * QueryMerkleTreeHookRequest ...
 * @name QueryMerkleTreeHookRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookRequest
 */
export interface QueryMerkleTreeHookRequestAmino {
  id: string;
}
export interface QueryMerkleTreeHookRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookRequest";
  value: QueryMerkleTreeHookRequestAmino;
}
/**
 * QueryMerkleTreeHookResponse
 * @name QueryMerkleTreeHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookResponse
 */
export interface QueryMerkleTreeHookResponse {
  merkleTreeHook: WrappedMerkleTreeHookResponse;
}
export interface QueryMerkleTreeHookResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookResponse";
  value: Uint8Array;
}
/**
 * QueryMerkleTreeHookResponse
 * @name QueryMerkleTreeHookResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookResponse
 */
export interface QueryMerkleTreeHookResponseAmino {
  merkle_tree_hook: WrappedMerkleTreeHookResponseAmino;
}
export interface QueryMerkleTreeHookResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookResponse";
  value: QueryMerkleTreeHookResponseAmino;
}
/**
 * WrappedMerkleTreeHookResponse
 * @name WrappedMerkleTreeHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.WrappedMerkleTreeHookResponse
 */
export interface WrappedMerkleTreeHookResponse {
  id: string;
  owner: string;
  mailboxId: string;
  merkleTree?: TreeResponse;
}
export interface WrappedMerkleTreeHookResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.WrappedMerkleTreeHookResponse";
  value: Uint8Array;
}
/**
 * WrappedMerkleTreeHookResponse
 * @name WrappedMerkleTreeHookResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.WrappedMerkleTreeHookResponse
 */
export interface WrappedMerkleTreeHookResponseAmino {
  id: string;
  owner: string;
  mailbox_id: string;
  merkle_tree?: TreeResponseAmino;
}
export interface WrappedMerkleTreeHookResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.WrappedMerkleTreeHookResponse";
  value: WrappedMerkleTreeHookResponseAmino;
}
/**
 * TreeResponse
 * @name TreeResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.TreeResponse
 */
export interface TreeResponse {
  /**
   * leafs ...
   */
  leafs: Uint8Array[];
  /**
   * count ...
   */
  count: number;
  /**
   * root ...
   */
  root: Uint8Array;
}
export interface TreeResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.TreeResponse";
  value: Uint8Array;
}
/**
 * TreeResponse
 * @name TreeResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.TreeResponse
 */
export interface TreeResponseAmino {
  /**
   * leafs ...
   */
  leafs: string[];
  /**
   * count ...
   */
  count: number;
  /**
   * root ...
   */
  root: string;
}
export interface TreeResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.TreeResponse";
  value: TreeResponseAmino;
}
/**
 * QueryNoopHookRequest ...
 * @name QueryNoopHookRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHookRequest
 */
export interface QueryNoopHookRequest {
  id: string;
}
export interface QueryNoopHookRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHookRequest";
  value: Uint8Array;
}
/**
 * QueryNoopHookRequest ...
 * @name QueryNoopHookRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHookRequest
 */
export interface QueryNoopHookRequestAmino {
  id: string;
}
export interface QueryNoopHookRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryNoopHookRequest";
  value: QueryNoopHookRequestAmino;
}
/**
 * QueryNoopHookResponse ...
 * @name QueryNoopHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHookResponse
 */
export interface QueryNoopHookResponse {
  noopHook?: NoopHook;
}
export interface QueryNoopHookResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHookResponse";
  value: Uint8Array;
}
/**
 * QueryNoopHookResponse ...
 * @name QueryNoopHookResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHookResponse
 */
export interface QueryNoopHookResponseAmino {
  noop_hook?: NoopHookAmino;
}
export interface QueryNoopHookResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryNoopHookResponse";
  value: QueryNoopHookResponseAmino;
}
/**
 * QueryNoopHooksRequest ...
 * @name QueryNoopHooksRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHooksRequest
 */
export interface QueryNoopHooksRequest {
  pagination?: PageRequest;
}
export interface QueryNoopHooksRequestProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksRequest";
  value: Uint8Array;
}
/**
 * QueryNoopHooksRequest ...
 * @name QueryNoopHooksRequestAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHooksRequest
 */
export interface QueryNoopHooksRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryNoopHooksRequestAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksRequest";
  value: QueryNoopHooksRequestAmino;
}
/**
 * QueryNoopHooksResponse ...
 * @name QueryNoopHooksResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHooksResponse
 */
export interface QueryNoopHooksResponse {
  noopHooks: NoopHook[];
  pagination?: PageResponse;
}
export interface QueryNoopHooksResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksResponse";
  value: Uint8Array;
}
/**
 * QueryNoopHooksResponse ...
 * @name QueryNoopHooksResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHooksResponse
 */
export interface QueryNoopHooksResponseAmino {
  noop_hooks: NoopHookAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryNoopHooksResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksResponse";
  value: QueryNoopHooksResponseAmino;
}
function createBaseQueryIgpsRequest(): QueryIgpsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryIgpsRequest ...
 * @name QueryIgpsRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpsRequest
 */
export const QueryIgpsRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpsRequest",
  is(o: any): o is QueryIgpsRequest {
    return o && o.$typeUrl === QueryIgpsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryIgpsRequestAmino {
    return o && o.$typeUrl === QueryIgpsRequest.typeUrl;
  },
  encode(message: QueryIgpsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIgpsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIgpsRequest();
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
  fromPartial(object: DeepPartial<QueryIgpsRequest>): QueryIgpsRequest {
    const message = createBaseQueryIgpsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIgpsRequestAmino): QueryIgpsRequest {
    const message = createBaseQueryIgpsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIgpsRequest): QueryIgpsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIgpsRequestAminoMsg): QueryIgpsRequest {
    return QueryIgpsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIgpsRequestProtoMsg): QueryIgpsRequest {
    return QueryIgpsRequest.decode(message.value);
  },
  toProto(message: QueryIgpsRequest): Uint8Array {
    return QueryIgpsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIgpsRequest): QueryIgpsRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpsRequest",
      value: QueryIgpsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryIgpsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryIgpsResponse(): QueryIgpsResponse {
  return {
    igps: [],
    pagination: undefined
  };
}
/**
 * QueryIgpsResponse ...
 * @name QueryIgpsResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpsResponse
 */
export const QueryIgpsResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpsResponse",
  is(o: any): o is QueryIgpsResponse {
    return o && (o.$typeUrl === QueryIgpsResponse.typeUrl || Array.isArray(o.igps) && (!o.igps.length || InterchainGasPaymaster.is(o.igps[0])));
  },
  isAmino(o: any): o is QueryIgpsResponseAmino {
    return o && (o.$typeUrl === QueryIgpsResponse.typeUrl || Array.isArray(o.igps) && (!o.igps.length || InterchainGasPaymaster.isAmino(o.igps[0])));
  },
  encode(message: QueryIgpsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.igps) {
      InterchainGasPaymaster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIgpsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIgpsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.igps.push(InterchainGasPaymaster.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryIgpsResponse>): QueryIgpsResponse {
    const message = createBaseQueryIgpsResponse();
    message.igps = object.igps?.map(e => InterchainGasPaymaster.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIgpsResponseAmino): QueryIgpsResponse {
    const message = createBaseQueryIgpsResponse();
    message.igps = object.igps?.map(e => InterchainGasPaymaster.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIgpsResponse): QueryIgpsResponseAmino {
    const obj: any = {};
    if (message.igps) {
      obj.igps = message.igps.map(e => e ? InterchainGasPaymaster.toAmino(e) : undefined);
    } else {
      obj.igps = message.igps;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIgpsResponseAminoMsg): QueryIgpsResponse {
    return QueryIgpsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIgpsResponseProtoMsg): QueryIgpsResponse {
    return QueryIgpsResponse.decode(message.value);
  },
  toProto(message: QueryIgpsResponse): Uint8Array {
    return QueryIgpsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIgpsResponse): QueryIgpsResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpsResponse",
      value: QueryIgpsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryIgpsResponse.typeUrl)) {
      return;
    }
    InterchainGasPaymaster.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryIgpRequest(): QueryIgpRequest {
  return {
    id: ""
  };
}
/**
 * QueryIgpRequest ...
 * @name QueryIgpRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpRequest
 */
export const QueryIgpRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpRequest",
  is(o: any): o is QueryIgpRequest {
    return o && (o.$typeUrl === QueryIgpRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryIgpRequestAmino {
    return o && (o.$typeUrl === QueryIgpRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryIgpRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIgpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIgpRequest();
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
  fromPartial(object: DeepPartial<QueryIgpRequest>): QueryIgpRequest {
    const message = createBaseQueryIgpRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryIgpRequestAmino): QueryIgpRequest {
    const message = createBaseQueryIgpRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryIgpRequest): QueryIgpRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryIgpRequestAminoMsg): QueryIgpRequest {
    return QueryIgpRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIgpRequestProtoMsg): QueryIgpRequest {
    return QueryIgpRequest.decode(message.value);
  },
  toProto(message: QueryIgpRequest): Uint8Array {
    return QueryIgpRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIgpRequest): QueryIgpRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpRequest",
      value: QueryIgpRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryIgpResponse(): QueryIgpResponse {
  return {
    igp: InterchainGasPaymaster.fromPartial({})
  };
}
/**
 * QueryIgpResponse ...
 * @name QueryIgpResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryIgpResponse
 */
export const QueryIgpResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpResponse",
  is(o: any): o is QueryIgpResponse {
    return o && (o.$typeUrl === QueryIgpResponse.typeUrl || InterchainGasPaymaster.is(o.igp));
  },
  isAmino(o: any): o is QueryIgpResponseAmino {
    return o && (o.$typeUrl === QueryIgpResponse.typeUrl || InterchainGasPaymaster.isAmino(o.igp));
  },
  encode(message: QueryIgpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.igp !== undefined) {
      InterchainGasPaymaster.encode(message.igp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIgpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIgpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.igp = InterchainGasPaymaster.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIgpResponse>): QueryIgpResponse {
    const message = createBaseQueryIgpResponse();
    message.igp = object.igp !== undefined && object.igp !== null ? InterchainGasPaymaster.fromPartial(object.igp) : undefined;
    return message;
  },
  fromAmino(object: QueryIgpResponseAmino): QueryIgpResponse {
    const message = createBaseQueryIgpResponse();
    if (object.igp !== undefined && object.igp !== null) {
      message.igp = InterchainGasPaymaster.fromAmino(object.igp);
    }
    return message;
  },
  toAmino(message: QueryIgpResponse): QueryIgpResponseAmino {
    const obj: any = {};
    obj.igp = message.igp ? InterchainGasPaymaster.toAmino(message.igp) : InterchainGasPaymaster.toAmino(InterchainGasPaymaster.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryIgpResponseAminoMsg): QueryIgpResponse {
    return QueryIgpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIgpResponseProtoMsg): QueryIgpResponse {
    return QueryIgpResponse.decode(message.value);
  },
  toProto(message: QueryIgpResponse): Uint8Array {
    return QueryIgpResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIgpResponse): QueryIgpResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryIgpResponse",
      value: QueryIgpResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryIgpResponse.typeUrl)) {
      return;
    }
    InterchainGasPaymaster.registerTypeUrl();
  }
};
function createBaseQueryDestinationGasConfigsRequest(): QueryDestinationGasConfigsRequest {
  return {
    id: "",
    pagination: undefined
  };
}
/**
 * QueryDestinationGasConfigsRequest ...
 * @name QueryDestinationGasConfigsRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsRequest
 */
export const QueryDestinationGasConfigsRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsRequest",
  is(o: any): o is QueryDestinationGasConfigsRequest {
    return o && (o.$typeUrl === QueryDestinationGasConfigsRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryDestinationGasConfigsRequestAmino {
    return o && (o.$typeUrl === QueryDestinationGasConfigsRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryDestinationGasConfigsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDestinationGasConfigsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDestinationGasConfigsRequest();
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
  fromPartial(object: DeepPartial<QueryDestinationGasConfigsRequest>): QueryDestinationGasConfigsRequest {
    const message = createBaseQueryDestinationGasConfigsRequest();
    message.id = object.id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDestinationGasConfigsRequestAmino): QueryDestinationGasConfigsRequest {
    const message = createBaseQueryDestinationGasConfigsRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDestinationGasConfigsRequest): QueryDestinationGasConfigsRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDestinationGasConfigsRequestAminoMsg): QueryDestinationGasConfigsRequest {
    return QueryDestinationGasConfigsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDestinationGasConfigsRequestProtoMsg): QueryDestinationGasConfigsRequest {
    return QueryDestinationGasConfigsRequest.decode(message.value);
  },
  toProto(message: QueryDestinationGasConfigsRequest): Uint8Array {
    return QueryDestinationGasConfigsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDestinationGasConfigsRequest): QueryDestinationGasConfigsRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsRequest",
      value: QueryDestinationGasConfigsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDestinationGasConfigsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryDestinationGasConfigsResponse(): QueryDestinationGasConfigsResponse {
  return {
    destinationGasConfigs: [],
    pagination: undefined
  };
}
/**
 * QueryDestinationGasConfigsResponse ...
 * @name QueryDestinationGasConfigsResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsResponse
 */
export const QueryDestinationGasConfigsResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsResponse",
  is(o: any): o is QueryDestinationGasConfigsResponse {
    return o && (o.$typeUrl === QueryDestinationGasConfigsResponse.typeUrl || Array.isArray(o.destinationGasConfigs) && (!o.destinationGasConfigs.length || DestinationGasConfig.is(o.destinationGasConfigs[0])));
  },
  isAmino(o: any): o is QueryDestinationGasConfigsResponseAmino {
    return o && (o.$typeUrl === QueryDestinationGasConfigsResponse.typeUrl || Array.isArray(o.destination_gas_configs) && (!o.destination_gas_configs.length || DestinationGasConfig.isAmino(o.destination_gas_configs[0])));
  },
  encode(message: QueryDestinationGasConfigsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.destinationGasConfigs) {
      DestinationGasConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDestinationGasConfigsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDestinationGasConfigsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.destinationGasConfigs.push(DestinationGasConfig.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryDestinationGasConfigsResponse>): QueryDestinationGasConfigsResponse {
    const message = createBaseQueryDestinationGasConfigsResponse();
    message.destinationGasConfigs = object.destinationGasConfigs?.map(e => DestinationGasConfig.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDestinationGasConfigsResponseAmino): QueryDestinationGasConfigsResponse {
    const message = createBaseQueryDestinationGasConfigsResponse();
    message.destinationGasConfigs = object.destination_gas_configs?.map(e => DestinationGasConfig.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDestinationGasConfigsResponse): QueryDestinationGasConfigsResponseAmino {
    const obj: any = {};
    if (message.destinationGasConfigs) {
      obj.destination_gas_configs = message.destinationGasConfigs.map(e => e ? DestinationGasConfig.toAmino(e) : undefined);
    } else {
      obj.destination_gas_configs = message.destinationGasConfigs;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDestinationGasConfigsResponseAminoMsg): QueryDestinationGasConfigsResponse {
    return QueryDestinationGasConfigsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDestinationGasConfigsResponseProtoMsg): QueryDestinationGasConfigsResponse {
    return QueryDestinationGasConfigsResponse.decode(message.value);
  },
  toProto(message: QueryDestinationGasConfigsResponse): Uint8Array {
    return QueryDestinationGasConfigsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDestinationGasConfigsResponse): QueryDestinationGasConfigsResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryDestinationGasConfigsResponse",
      value: QueryDestinationGasConfigsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryDestinationGasConfigsResponse.typeUrl)) {
      return;
    }
    DestinationGasConfig.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryQuoteGasPaymentRequest(): QueryQuoteGasPaymentRequest {
  return {
    igpId: "",
    destinationDomain: "",
    gasLimit: ""
  };
}
/**
 * QueryQuoteGasPaymentRequest ...
 * @name QueryQuoteGasPaymentRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentRequest
 */
export const QueryQuoteGasPaymentRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentRequest",
  is(o: any): o is QueryQuoteGasPaymentRequest {
    return o && (o.$typeUrl === QueryQuoteGasPaymentRequest.typeUrl || typeof o.igpId === "string" && typeof o.destinationDomain === "string" && typeof o.gasLimit === "string");
  },
  isAmino(o: any): o is QueryQuoteGasPaymentRequestAmino {
    return o && (o.$typeUrl === QueryQuoteGasPaymentRequest.typeUrl || typeof o.igp_id === "string" && typeof o.destination_domain === "string" && typeof o.gas_limit === "string");
  },
  encode(message: QueryQuoteGasPaymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.igpId !== "") {
      writer.uint32(10).string(message.igpId);
    }
    if (message.destinationDomain !== "") {
      writer.uint32(18).string(message.destinationDomain);
    }
    if (message.gasLimit !== "") {
      writer.uint32(26).string(message.gasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuoteGasPaymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteGasPaymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.igpId = reader.string();
          break;
        case 2:
          message.destinationDomain = reader.string();
          break;
        case 3:
          message.gasLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryQuoteGasPaymentRequest>): QueryQuoteGasPaymentRequest {
    const message = createBaseQueryQuoteGasPaymentRequest();
    message.igpId = object.igpId ?? "";
    message.destinationDomain = object.destinationDomain ?? "";
    message.gasLimit = object.gasLimit ?? "";
    return message;
  },
  fromAmino(object: QueryQuoteGasPaymentRequestAmino): QueryQuoteGasPaymentRequest {
    const message = createBaseQueryQuoteGasPaymentRequest();
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.destination_domain !== undefined && object.destination_domain !== null) {
      message.destinationDomain = object.destination_domain;
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = object.gas_limit;
    }
    return message;
  },
  toAmino(message: QueryQuoteGasPaymentRequest): QueryQuoteGasPaymentRequestAmino {
    const obj: any = {};
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.destination_domain = message.destinationDomain === "" ? undefined : message.destinationDomain;
    obj.gas_limit = message.gasLimit === "" ? undefined : message.gasLimit;
    return obj;
  },
  fromAminoMsg(object: QueryQuoteGasPaymentRequestAminoMsg): QueryQuoteGasPaymentRequest {
    return QueryQuoteGasPaymentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteGasPaymentRequestProtoMsg): QueryQuoteGasPaymentRequest {
    return QueryQuoteGasPaymentRequest.decode(message.value);
  },
  toProto(message: QueryQuoteGasPaymentRequest): Uint8Array {
    return QueryQuoteGasPaymentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteGasPaymentRequest): QueryQuoteGasPaymentRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentRequest",
      value: QueryQuoteGasPaymentRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryQuoteGasPaymentResponse(): QueryQuoteGasPaymentResponse {
  return {
    gasPayment: []
  };
}
/**
 * QueryQuoteGasPaymentResponse ...
 * @name QueryQuoteGasPaymentResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentResponse
 */
export const QueryQuoteGasPaymentResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentResponse",
  is(o: any): o is QueryQuoteGasPaymentResponse {
    return o && (o.$typeUrl === QueryQuoteGasPaymentResponse.typeUrl || Array.isArray(o.gasPayment) && (!o.gasPayment.length || Coin.is(o.gasPayment[0])));
  },
  isAmino(o: any): o is QueryQuoteGasPaymentResponseAmino {
    return o && (o.$typeUrl === QueryQuoteGasPaymentResponse.typeUrl || Array.isArray(o.gas_payment) && (!o.gas_payment.length || Coin.isAmino(o.gas_payment[0])));
  },
  encode(message: QueryQuoteGasPaymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gasPayment) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuoteGasPaymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteGasPaymentResponse();
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
  fromPartial(object: DeepPartial<QueryQuoteGasPaymentResponse>): QueryQuoteGasPaymentResponse {
    const message = createBaseQueryQuoteGasPaymentResponse();
    message.gasPayment = object.gasPayment?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryQuoteGasPaymentResponseAmino): QueryQuoteGasPaymentResponse {
    const message = createBaseQueryQuoteGasPaymentResponse();
    message.gasPayment = object.gas_payment?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryQuoteGasPaymentResponse): QueryQuoteGasPaymentResponseAmino {
    const obj: any = {};
    if (message.gasPayment) {
      obj.gas_payment = message.gasPayment.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.gas_payment = message.gasPayment;
    }
    return obj;
  },
  fromAminoMsg(object: QueryQuoteGasPaymentResponseAminoMsg): QueryQuoteGasPaymentResponse {
    return QueryQuoteGasPaymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuoteGasPaymentResponseProtoMsg): QueryQuoteGasPaymentResponse {
    return QueryQuoteGasPaymentResponse.decode(message.value);
  },
  toProto(message: QueryQuoteGasPaymentResponse): Uint8Array {
    return QueryQuoteGasPaymentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuoteGasPaymentResponse): QueryQuoteGasPaymentResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryQuoteGasPaymentResponse",
      value: QueryQuoteGasPaymentResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryQuoteGasPaymentResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseQueryMerkleTreeHooksRequest(): QueryMerkleTreeHooksRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryMerkleTreeHooksRequest ...
 * @name QueryMerkleTreeHooksRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksRequest
 */
export const QueryMerkleTreeHooksRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksRequest",
  is(o: any): o is QueryMerkleTreeHooksRequest {
    return o && o.$typeUrl === QueryMerkleTreeHooksRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMerkleTreeHooksRequestAmino {
    return o && o.$typeUrl === QueryMerkleTreeHooksRequest.typeUrl;
  },
  encode(message: QueryMerkleTreeHooksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMerkleTreeHooksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkleTreeHooksRequest();
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
  fromPartial(object: DeepPartial<QueryMerkleTreeHooksRequest>): QueryMerkleTreeHooksRequest {
    const message = createBaseQueryMerkleTreeHooksRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMerkleTreeHooksRequestAmino): QueryMerkleTreeHooksRequest {
    const message = createBaseQueryMerkleTreeHooksRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMerkleTreeHooksRequest): QueryMerkleTreeHooksRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMerkleTreeHooksRequestAminoMsg): QueryMerkleTreeHooksRequest {
    return QueryMerkleTreeHooksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMerkleTreeHooksRequestProtoMsg): QueryMerkleTreeHooksRequest {
    return QueryMerkleTreeHooksRequest.decode(message.value);
  },
  toProto(message: QueryMerkleTreeHooksRequest): Uint8Array {
    return QueryMerkleTreeHooksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMerkleTreeHooksRequest): QueryMerkleTreeHooksRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksRequest",
      value: QueryMerkleTreeHooksRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMerkleTreeHooksRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryMerkleTreeHooksResponse(): QueryMerkleTreeHooksResponse {
  return {
    merkleTreeHooks: [],
    pagination: undefined
  };
}
/**
 * QueryMerkleTreeHooksResponse ...
 * @name QueryMerkleTreeHooksResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksResponse
 */
export const QueryMerkleTreeHooksResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksResponse",
  is(o: any): o is QueryMerkleTreeHooksResponse {
    return o && (o.$typeUrl === QueryMerkleTreeHooksResponse.typeUrl || Array.isArray(o.merkleTreeHooks) && (!o.merkleTreeHooks.length || WrappedMerkleTreeHookResponse.is(o.merkleTreeHooks[0])));
  },
  isAmino(o: any): o is QueryMerkleTreeHooksResponseAmino {
    return o && (o.$typeUrl === QueryMerkleTreeHooksResponse.typeUrl || Array.isArray(o.merkle_tree_hooks) && (!o.merkle_tree_hooks.length || WrappedMerkleTreeHookResponse.isAmino(o.merkle_tree_hooks[0])));
  },
  encode(message: QueryMerkleTreeHooksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.merkleTreeHooks) {
      WrappedMerkleTreeHookResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMerkleTreeHooksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkleTreeHooksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkleTreeHooks.push(WrappedMerkleTreeHookResponse.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryMerkleTreeHooksResponse>): QueryMerkleTreeHooksResponse {
    const message = createBaseQueryMerkleTreeHooksResponse();
    message.merkleTreeHooks = object.merkleTreeHooks?.map(e => WrappedMerkleTreeHookResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMerkleTreeHooksResponseAmino): QueryMerkleTreeHooksResponse {
    const message = createBaseQueryMerkleTreeHooksResponse();
    message.merkleTreeHooks = object.merkle_tree_hooks?.map(e => WrappedMerkleTreeHookResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMerkleTreeHooksResponse): QueryMerkleTreeHooksResponseAmino {
    const obj: any = {};
    if (message.merkleTreeHooks) {
      obj.merkle_tree_hooks = message.merkleTreeHooks.map(e => e ? WrappedMerkleTreeHookResponse.toAmino(e) : undefined);
    } else {
      obj.merkle_tree_hooks = message.merkleTreeHooks;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMerkleTreeHooksResponseAminoMsg): QueryMerkleTreeHooksResponse {
    return QueryMerkleTreeHooksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMerkleTreeHooksResponseProtoMsg): QueryMerkleTreeHooksResponse {
    return QueryMerkleTreeHooksResponse.decode(message.value);
  },
  toProto(message: QueryMerkleTreeHooksResponse): Uint8Array {
    return QueryMerkleTreeHooksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMerkleTreeHooksResponse): QueryMerkleTreeHooksResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHooksResponse",
      value: QueryMerkleTreeHooksResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMerkleTreeHooksResponse.typeUrl)) {
      return;
    }
    WrappedMerkleTreeHookResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryMerkleTreeHookRequest(): QueryMerkleTreeHookRequest {
  return {
    id: ""
  };
}
/**
 * QueryMerkleTreeHookRequest ...
 * @name QueryMerkleTreeHookRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookRequest
 */
export const QueryMerkleTreeHookRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookRequest",
  is(o: any): o is QueryMerkleTreeHookRequest {
    return o && (o.$typeUrl === QueryMerkleTreeHookRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryMerkleTreeHookRequestAmino {
    return o && (o.$typeUrl === QueryMerkleTreeHookRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryMerkleTreeHookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMerkleTreeHookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkleTreeHookRequest();
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
  fromPartial(object: DeepPartial<QueryMerkleTreeHookRequest>): QueryMerkleTreeHookRequest {
    const message = createBaseQueryMerkleTreeHookRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryMerkleTreeHookRequestAmino): QueryMerkleTreeHookRequest {
    const message = createBaseQueryMerkleTreeHookRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryMerkleTreeHookRequest): QueryMerkleTreeHookRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryMerkleTreeHookRequestAminoMsg): QueryMerkleTreeHookRequest {
    return QueryMerkleTreeHookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMerkleTreeHookRequestProtoMsg): QueryMerkleTreeHookRequest {
    return QueryMerkleTreeHookRequest.decode(message.value);
  },
  toProto(message: QueryMerkleTreeHookRequest): Uint8Array {
    return QueryMerkleTreeHookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMerkleTreeHookRequest): QueryMerkleTreeHookRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookRequest",
      value: QueryMerkleTreeHookRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMerkleTreeHookResponse(): QueryMerkleTreeHookResponse {
  return {
    merkleTreeHook: WrappedMerkleTreeHookResponse.fromPartial({})
  };
}
/**
 * QueryMerkleTreeHookResponse
 * @name QueryMerkleTreeHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookResponse
 */
export const QueryMerkleTreeHookResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookResponse",
  is(o: any): o is QueryMerkleTreeHookResponse {
    return o && (o.$typeUrl === QueryMerkleTreeHookResponse.typeUrl || WrappedMerkleTreeHookResponse.is(o.merkleTreeHook));
  },
  isAmino(o: any): o is QueryMerkleTreeHookResponseAmino {
    return o && (o.$typeUrl === QueryMerkleTreeHookResponse.typeUrl || WrappedMerkleTreeHookResponse.isAmino(o.merkle_tree_hook));
  },
  encode(message: QueryMerkleTreeHookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.merkleTreeHook !== undefined) {
      WrappedMerkleTreeHookResponse.encode(message.merkleTreeHook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMerkleTreeHookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkleTreeHookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkleTreeHook = WrappedMerkleTreeHookResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMerkleTreeHookResponse>): QueryMerkleTreeHookResponse {
    const message = createBaseQueryMerkleTreeHookResponse();
    message.merkleTreeHook = object.merkleTreeHook !== undefined && object.merkleTreeHook !== null ? WrappedMerkleTreeHookResponse.fromPartial(object.merkleTreeHook) : undefined;
    return message;
  },
  fromAmino(object: QueryMerkleTreeHookResponseAmino): QueryMerkleTreeHookResponse {
    const message = createBaseQueryMerkleTreeHookResponse();
    if (object.merkle_tree_hook !== undefined && object.merkle_tree_hook !== null) {
      message.merkleTreeHook = WrappedMerkleTreeHookResponse.fromAmino(object.merkle_tree_hook);
    }
    return message;
  },
  toAmino(message: QueryMerkleTreeHookResponse): QueryMerkleTreeHookResponseAmino {
    const obj: any = {};
    obj.merkle_tree_hook = message.merkleTreeHook ? WrappedMerkleTreeHookResponse.toAmino(message.merkleTreeHook) : WrappedMerkleTreeHookResponse.toAmino(WrappedMerkleTreeHookResponse.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryMerkleTreeHookResponseAminoMsg): QueryMerkleTreeHookResponse {
    return QueryMerkleTreeHookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMerkleTreeHookResponseProtoMsg): QueryMerkleTreeHookResponse {
    return QueryMerkleTreeHookResponse.decode(message.value);
  },
  toProto(message: QueryMerkleTreeHookResponse): Uint8Array {
    return QueryMerkleTreeHookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMerkleTreeHookResponse): QueryMerkleTreeHookResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryMerkleTreeHookResponse",
      value: QueryMerkleTreeHookResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMerkleTreeHookResponse.typeUrl)) {
      return;
    }
    WrappedMerkleTreeHookResponse.registerTypeUrl();
  }
};
function createBaseWrappedMerkleTreeHookResponse(): WrappedMerkleTreeHookResponse {
  return {
    id: "",
    owner: "",
    mailboxId: "",
    merkleTree: undefined
  };
}
/**
 * WrappedMerkleTreeHookResponse
 * @name WrappedMerkleTreeHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.WrappedMerkleTreeHookResponse
 */
export const WrappedMerkleTreeHookResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.WrappedMerkleTreeHookResponse",
  is(o: any): o is WrappedMerkleTreeHookResponse {
    return o && (o.$typeUrl === WrappedMerkleTreeHookResponse.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && typeof o.mailboxId === "string");
  },
  isAmino(o: any): o is WrappedMerkleTreeHookResponseAmino {
    return o && (o.$typeUrl === WrappedMerkleTreeHookResponse.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && typeof o.mailbox_id === "string");
  },
  encode(message: WrappedMerkleTreeHookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.mailboxId !== "") {
      writer.uint32(26).string(message.mailboxId);
    }
    if (message.merkleTree !== undefined) {
      TreeResponse.encode(message.merkleTree, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WrappedMerkleTreeHookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWrappedMerkleTreeHookResponse();
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
          message.mailboxId = reader.string();
          break;
        case 4:
          message.merkleTree = TreeResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<WrappedMerkleTreeHookResponse>): WrappedMerkleTreeHookResponse {
    const message = createBaseWrappedMerkleTreeHookResponse();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.mailboxId = object.mailboxId ?? "";
    message.merkleTree = object.merkleTree !== undefined && object.merkleTree !== null ? TreeResponse.fromPartial(object.merkleTree) : undefined;
    return message;
  },
  fromAmino(object: WrappedMerkleTreeHookResponseAmino): WrappedMerkleTreeHookResponse {
    const message = createBaseWrappedMerkleTreeHookResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.merkle_tree !== undefined && object.merkle_tree !== null) {
      message.merkleTree = TreeResponse.fromAmino(object.merkle_tree);
    }
    return message;
  },
  toAmino(message: WrappedMerkleTreeHookResponse): WrappedMerkleTreeHookResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.merkle_tree = message.merkleTree ? TreeResponse.toAmino(message.merkleTree) : undefined;
    return obj;
  },
  fromAminoMsg(object: WrappedMerkleTreeHookResponseAminoMsg): WrappedMerkleTreeHookResponse {
    return WrappedMerkleTreeHookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: WrappedMerkleTreeHookResponseProtoMsg): WrappedMerkleTreeHookResponse {
    return WrappedMerkleTreeHookResponse.decode(message.value);
  },
  toProto(message: WrappedMerkleTreeHookResponse): Uint8Array {
    return WrappedMerkleTreeHookResponse.encode(message).finish();
  },
  toProtoMsg(message: WrappedMerkleTreeHookResponse): WrappedMerkleTreeHookResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.WrappedMerkleTreeHookResponse",
      value: WrappedMerkleTreeHookResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(WrappedMerkleTreeHookResponse.typeUrl)) {
      return;
    }
    TreeResponse.registerTypeUrl();
  }
};
function createBaseTreeResponse(): TreeResponse {
  return {
    leafs: [],
    count: 0,
    root: new Uint8Array()
  };
}
/**
 * TreeResponse
 * @name TreeResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.TreeResponse
 */
export const TreeResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.TreeResponse",
  is(o: any): o is TreeResponse {
    return o && (o.$typeUrl === TreeResponse.typeUrl || Array.isArray(o.leafs) && (!o.leafs.length || o.leafs[0] instanceof Uint8Array || typeof o.leafs[0] === "string") && typeof o.count === "number" && (o.root instanceof Uint8Array || typeof o.root === "string"));
  },
  isAmino(o: any): o is TreeResponseAmino {
    return o && (o.$typeUrl === TreeResponse.typeUrl || Array.isArray(o.leafs) && (!o.leafs.length || o.leafs[0] instanceof Uint8Array || typeof o.leafs[0] === "string") && typeof o.count === "number" && (o.root instanceof Uint8Array || typeof o.root === "string"));
  },
  encode(message: TreeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.leafs) {
      writer.uint32(10).bytes(v!);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.root.length !== 0) {
      writer.uint32(26).bytes(message.root);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TreeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leafs.push(reader.bytes());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.root = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TreeResponse>): TreeResponse {
    const message = createBaseTreeResponse();
    message.leafs = object.leafs?.map(e => e) || [];
    message.count = object.count ?? 0;
    message.root = object.root ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TreeResponseAmino): TreeResponse {
    const message = createBaseTreeResponse();
    message.leafs = object.leafs?.map(e => bytesFromBase64(e)) || [];
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = bytesFromBase64(object.root);
    }
    return message;
  },
  toAmino(message: TreeResponse): TreeResponseAmino {
    const obj: any = {};
    if (message.leafs) {
      obj.leafs = message.leafs.map(e => base64FromBytes(e));
    } else {
      obj.leafs = message.leafs;
    }
    obj.count = message.count === 0 ? undefined : message.count;
    obj.root = message.root ? base64FromBytes(message.root) : undefined;
    return obj;
  },
  fromAminoMsg(object: TreeResponseAminoMsg): TreeResponse {
    return TreeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TreeResponseProtoMsg): TreeResponse {
    return TreeResponse.decode(message.value);
  },
  toProto(message: TreeResponse): Uint8Array {
    return TreeResponse.encode(message).finish();
  },
  toProtoMsg(message: TreeResponse): TreeResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.TreeResponse",
      value: TreeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNoopHookRequest(): QueryNoopHookRequest {
  return {
    id: ""
  };
}
/**
 * QueryNoopHookRequest ...
 * @name QueryNoopHookRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHookRequest
 */
export const QueryNoopHookRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHookRequest",
  is(o: any): o is QueryNoopHookRequest {
    return o && (o.$typeUrl === QueryNoopHookRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryNoopHookRequestAmino {
    return o && (o.$typeUrl === QueryNoopHookRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryNoopHookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNoopHookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNoopHookRequest();
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
  fromPartial(object: DeepPartial<QueryNoopHookRequest>): QueryNoopHookRequest {
    const message = createBaseQueryNoopHookRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryNoopHookRequestAmino): QueryNoopHookRequest {
    const message = createBaseQueryNoopHookRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryNoopHookRequest): QueryNoopHookRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryNoopHookRequestAminoMsg): QueryNoopHookRequest {
    return QueryNoopHookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNoopHookRequestProtoMsg): QueryNoopHookRequest {
    return QueryNoopHookRequest.decode(message.value);
  },
  toProto(message: QueryNoopHookRequest): Uint8Array {
    return QueryNoopHookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNoopHookRequest): QueryNoopHookRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHookRequest",
      value: QueryNoopHookRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNoopHookResponse(): QueryNoopHookResponse {
  return {
    noopHook: undefined
  };
}
/**
 * QueryNoopHookResponse ...
 * @name QueryNoopHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHookResponse
 */
export const QueryNoopHookResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHookResponse",
  is(o: any): o is QueryNoopHookResponse {
    return o && o.$typeUrl === QueryNoopHookResponse.typeUrl;
  },
  isAmino(o: any): o is QueryNoopHookResponseAmino {
    return o && o.$typeUrl === QueryNoopHookResponse.typeUrl;
  },
  encode(message: QueryNoopHookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noopHook !== undefined) {
      NoopHook.encode(message.noopHook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNoopHookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNoopHookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noopHook = NoopHook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNoopHookResponse>): QueryNoopHookResponse {
    const message = createBaseQueryNoopHookResponse();
    message.noopHook = object.noopHook !== undefined && object.noopHook !== null ? NoopHook.fromPartial(object.noopHook) : undefined;
    return message;
  },
  fromAmino(object: QueryNoopHookResponseAmino): QueryNoopHookResponse {
    const message = createBaseQueryNoopHookResponse();
    if (object.noop_hook !== undefined && object.noop_hook !== null) {
      message.noopHook = NoopHook.fromAmino(object.noop_hook);
    }
    return message;
  },
  toAmino(message: QueryNoopHookResponse): QueryNoopHookResponseAmino {
    const obj: any = {};
    obj.noop_hook = message.noopHook ? NoopHook.toAmino(message.noopHook) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNoopHookResponseAminoMsg): QueryNoopHookResponse {
    return QueryNoopHookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNoopHookResponseProtoMsg): QueryNoopHookResponse {
    return QueryNoopHookResponse.decode(message.value);
  },
  toProto(message: QueryNoopHookResponse): Uint8Array {
    return QueryNoopHookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNoopHookResponse): QueryNoopHookResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHookResponse",
      value: QueryNoopHookResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNoopHookResponse.typeUrl)) {
      return;
    }
    NoopHook.registerTypeUrl();
  }
};
function createBaseQueryNoopHooksRequest(): QueryNoopHooksRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryNoopHooksRequest ...
 * @name QueryNoopHooksRequest
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHooksRequest
 */
export const QueryNoopHooksRequest = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksRequest",
  is(o: any): o is QueryNoopHooksRequest {
    return o && o.$typeUrl === QueryNoopHooksRequest.typeUrl;
  },
  isAmino(o: any): o is QueryNoopHooksRequestAmino {
    return o && o.$typeUrl === QueryNoopHooksRequest.typeUrl;
  },
  encode(message: QueryNoopHooksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNoopHooksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNoopHooksRequest();
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
  fromPartial(object: DeepPartial<QueryNoopHooksRequest>): QueryNoopHooksRequest {
    const message = createBaseQueryNoopHooksRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNoopHooksRequestAmino): QueryNoopHooksRequest {
    const message = createBaseQueryNoopHooksRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNoopHooksRequest): QueryNoopHooksRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNoopHooksRequestAminoMsg): QueryNoopHooksRequest {
    return QueryNoopHooksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNoopHooksRequestProtoMsg): QueryNoopHooksRequest {
    return QueryNoopHooksRequest.decode(message.value);
  },
  toProto(message: QueryNoopHooksRequest): Uint8Array {
    return QueryNoopHooksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNoopHooksRequest): QueryNoopHooksRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksRequest",
      value: QueryNoopHooksRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNoopHooksRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryNoopHooksResponse(): QueryNoopHooksResponse {
  return {
    noopHooks: [],
    pagination: undefined
  };
}
/**
 * QueryNoopHooksResponse ...
 * @name QueryNoopHooksResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.QueryNoopHooksResponse
 */
export const QueryNoopHooksResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksResponse",
  is(o: any): o is QueryNoopHooksResponse {
    return o && (o.$typeUrl === QueryNoopHooksResponse.typeUrl || Array.isArray(o.noopHooks) && (!o.noopHooks.length || NoopHook.is(o.noopHooks[0])));
  },
  isAmino(o: any): o is QueryNoopHooksResponseAmino {
    return o && (o.$typeUrl === QueryNoopHooksResponse.typeUrl || Array.isArray(o.noop_hooks) && (!o.noop_hooks.length || NoopHook.isAmino(o.noop_hooks[0])));
  },
  encode(message: QueryNoopHooksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.noopHooks) {
      NoopHook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNoopHooksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNoopHooksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noopHooks.push(NoopHook.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryNoopHooksResponse>): QueryNoopHooksResponse {
    const message = createBaseQueryNoopHooksResponse();
    message.noopHooks = object.noopHooks?.map(e => NoopHook.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNoopHooksResponseAmino): QueryNoopHooksResponse {
    const message = createBaseQueryNoopHooksResponse();
    message.noopHooks = object.noop_hooks?.map(e => NoopHook.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNoopHooksResponse): QueryNoopHooksResponseAmino {
    const obj: any = {};
    if (message.noopHooks) {
      obj.noop_hooks = message.noopHooks.map(e => e ? NoopHook.toAmino(e) : undefined);
    } else {
      obj.noop_hooks = message.noopHooks;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNoopHooksResponseAminoMsg): QueryNoopHooksResponse {
    return QueryNoopHooksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryNoopHooksResponseProtoMsg): QueryNoopHooksResponse {
    return QueryNoopHooksResponse.decode(message.value);
  },
  toProto(message: QueryNoopHooksResponse): Uint8Array {
    return QueryNoopHooksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNoopHooksResponse): QueryNoopHooksResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.QueryNoopHooksResponse",
      value: QueryNoopHooksResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNoopHooksResponse.typeUrl)) {
      return;
    }
    NoopHook.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};