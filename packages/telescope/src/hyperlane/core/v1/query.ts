import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Mailbox, MailboxAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * QueryMailboxesRequest ...
 * @name QueryMailboxesRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxesRequest
 */
export interface QueryMailboxesRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryMailboxesRequestProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryMailboxesRequest";
  value: Uint8Array;
}
/**
 * QueryMailboxesRequest ...
 * @name QueryMailboxesRequestAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxesRequest
 */
export interface QueryMailboxesRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryMailboxesRequestAminoMsg {
  type: "/hyperlane.core.v1.QueryMailboxesRequest";
  value: QueryMailboxesRequestAmino;
}
/**
 * QueryMailboxesResponse ...
 * @name QueryMailboxesResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxesResponse
 */
export interface QueryMailboxesResponse {
  mailboxes: Mailbox[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryMailboxesResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryMailboxesResponse";
  value: Uint8Array;
}
/**
 * QueryMailboxesResponse ...
 * @name QueryMailboxesResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxesResponse
 */
export interface QueryMailboxesResponseAmino {
  mailboxes: MailboxAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryMailboxesResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryMailboxesResponse";
  value: QueryMailboxesResponseAmino;
}
/**
 * QueryMailboxRequest ...
 * @name QueryMailboxRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxRequest
 */
export interface QueryMailboxRequest {
  id: string;
}
export interface QueryMailboxRequestProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryMailboxRequest";
  value: Uint8Array;
}
/**
 * QueryMailboxRequest ...
 * @name QueryMailboxRequestAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxRequest
 */
export interface QueryMailboxRequestAmino {
  id: string;
}
export interface QueryMailboxRequestAminoMsg {
  type: "/hyperlane.core.v1.QueryMailboxRequest";
  value: QueryMailboxRequestAmino;
}
/**
 * QueryMailboxResponse ...
 * @name QueryMailboxResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxResponse
 */
export interface QueryMailboxResponse {
  mailbox: Mailbox;
}
export interface QueryMailboxResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryMailboxResponse";
  value: Uint8Array;
}
/**
 * QueryMailboxResponse ...
 * @name QueryMailboxResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxResponse
 */
export interface QueryMailboxResponseAmino {
  mailbox: MailboxAmino;
}
export interface QueryMailboxResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryMailboxResponse";
  value: QueryMailboxResponseAmino;
}
/**
 * QueryDeliveredRequest ...
 * @name QueryDeliveredRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryDeliveredRequest
 */
export interface QueryDeliveredRequest {
  id: string;
  messageId: string;
}
export interface QueryDeliveredRequestProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryDeliveredRequest";
  value: Uint8Array;
}
/**
 * QueryDeliveredRequest ...
 * @name QueryDeliveredRequestAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryDeliveredRequest
 */
export interface QueryDeliveredRequestAmino {
  id: string;
  message_id: string;
}
export interface QueryDeliveredRequestAminoMsg {
  type: "/hyperlane.core.v1.QueryDeliveredRequest";
  value: QueryDeliveredRequestAmino;
}
/**
 * QueryDeliveredResponse ...
 * @name QueryDeliveredResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryDeliveredResponse
 */
export interface QueryDeliveredResponse {
  delivered: boolean;
}
export interface QueryDeliveredResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryDeliveredResponse";
  value: Uint8Array;
}
/**
 * QueryDeliveredResponse ...
 * @name QueryDeliveredResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryDeliveredResponse
 */
export interface QueryDeliveredResponseAmino {
  delivered: boolean;
}
export interface QueryDeliveredResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryDeliveredResponse";
  value: QueryDeliveredResponseAmino;
}
/**
 * QueryRecipientIsmRequest ...
 * @name QueryRecipientIsmRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRecipientIsmRequest
 */
export interface QueryRecipientIsmRequest {
  recipient: string;
}
export interface QueryRecipientIsmRequestProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRecipientIsmRequest";
  value: Uint8Array;
}
/**
 * QueryRecipientIsmRequest ...
 * @name QueryRecipientIsmRequestAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRecipientIsmRequest
 */
export interface QueryRecipientIsmRequestAmino {
  recipient: string;
}
export interface QueryRecipientIsmRequestAminoMsg {
  type: "/hyperlane.core.v1.QueryRecipientIsmRequest";
  value: QueryRecipientIsmRequestAmino;
}
/**
 * QueryRecipientIsmResponse ...
 * @name QueryRecipientIsmResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRecipientIsmResponse
 */
export interface QueryRecipientIsmResponse {
  ismId: string;
}
export interface QueryRecipientIsmResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRecipientIsmResponse";
  value: Uint8Array;
}
/**
 * QueryRecipientIsmResponse ...
 * @name QueryRecipientIsmResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRecipientIsmResponse
 */
export interface QueryRecipientIsmResponseAmino {
  ism_id: string;
}
export interface QueryRecipientIsmResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryRecipientIsmResponse";
  value: QueryRecipientIsmResponseAmino;
}
/**
 * QueryVerifyDryRunRequest ...
 * @name QueryVerifyDryRunRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryVerifyDryRunRequest
 */
export interface QueryVerifyDryRunRequest {
  ismId: string;
  message: string;
  metadata: string;
  gasLimit: string;
}
export interface QueryVerifyDryRunRequestProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryVerifyDryRunRequest";
  value: Uint8Array;
}
/**
 * QueryVerifyDryRunRequest ...
 * @name QueryVerifyDryRunRequestAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryVerifyDryRunRequest
 */
export interface QueryVerifyDryRunRequestAmino {
  ism_id: string;
  message: string;
  metadata: string;
  gas_limit: string;
}
export interface QueryVerifyDryRunRequestAminoMsg {
  type: "/hyperlane.core.v1.QueryVerifyDryRunRequest";
  value: QueryVerifyDryRunRequestAmino;
}
/**
 * QueryVerifyDryRunResponse ...
 * @name QueryVerifyDryRunResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryVerifyDryRunResponse
 */
export interface QueryVerifyDryRunResponse {
  verified: boolean;
}
export interface QueryVerifyDryRunResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryVerifyDryRunResponse";
  value: Uint8Array;
}
/**
 * QueryVerifyDryRunResponse ...
 * @name QueryVerifyDryRunResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryVerifyDryRunResponse
 */
export interface QueryVerifyDryRunResponseAmino {
  verified: boolean;
}
export interface QueryVerifyDryRunResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryVerifyDryRunResponse";
  value: QueryVerifyDryRunResponseAmino;
}
/**
 * QueryRegisteredISMs ...
 * @name QueryRegisteredISMs
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredISMs
 */
export interface QueryRegisteredISMs {}
export interface QueryRegisteredISMsProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredISMs";
  value: Uint8Array;
}
/**
 * QueryRegisteredISMs ...
 * @name QueryRegisteredISMsAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredISMs
 */
export interface QueryRegisteredISMsAmino {}
export interface QueryRegisteredISMsAminoMsg {
  type: "/hyperlane.core.v1.QueryRegisteredISMs";
  value: QueryRegisteredISMsAmino;
}
/**
 * QueryRegisteredISMsResponse ...
 * @name QueryRegisteredISMsResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredISMsResponse
 */
export interface QueryRegisteredISMsResponse {
  ids: number[];
}
export interface QueryRegisteredISMsResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredISMsResponse";
  value: Uint8Array;
}
/**
 * QueryRegisteredISMsResponse ...
 * @name QueryRegisteredISMsResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredISMsResponse
 */
export interface QueryRegisteredISMsResponseAmino {
  ids: number[];
}
export interface QueryRegisteredISMsResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryRegisteredISMsResponse";
  value: QueryRegisteredISMsResponseAmino;
}
/**
 * QueryRegisteredHooks ...
 * @name QueryRegisteredHooks
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredHooks
 */
export interface QueryRegisteredHooks {}
export interface QueryRegisteredHooksProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredHooks";
  value: Uint8Array;
}
/**
 * QueryRegisteredHooks ...
 * @name QueryRegisteredHooksAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredHooks
 */
export interface QueryRegisteredHooksAmino {}
export interface QueryRegisteredHooksAminoMsg {
  type: "/hyperlane.core.v1.QueryRegisteredHooks";
  value: QueryRegisteredHooksAmino;
}
/**
 * QueryRegisteredHooksResponse ...
 * @name QueryRegisteredHooksResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredHooksResponse
 */
export interface QueryRegisteredHooksResponse {
  ids: number[];
}
export interface QueryRegisteredHooksResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredHooksResponse";
  value: Uint8Array;
}
/**
 * QueryRegisteredHooksResponse ...
 * @name QueryRegisteredHooksResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredHooksResponse
 */
export interface QueryRegisteredHooksResponseAmino {
  ids: number[];
}
export interface QueryRegisteredHooksResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryRegisteredHooksResponse";
  value: QueryRegisteredHooksResponseAmino;
}
/**
 * QueryRegisteredApps ...
 * @name QueryRegisteredApps
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredApps
 */
export interface QueryRegisteredApps {}
export interface QueryRegisteredAppsProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredApps";
  value: Uint8Array;
}
/**
 * QueryRegisteredApps ...
 * @name QueryRegisteredAppsAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredApps
 */
export interface QueryRegisteredAppsAmino {}
export interface QueryRegisteredAppsAminoMsg {
  type: "/hyperlane.core.v1.QueryRegisteredApps";
  value: QueryRegisteredAppsAmino;
}
/**
 * QueryRegisteredAppsResponse ...
 * @name QueryRegisteredAppsResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredAppsResponse
 */
export interface QueryRegisteredAppsResponse {
  ids: number[];
}
export interface QueryRegisteredAppsResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredAppsResponse";
  value: Uint8Array;
}
/**
 * QueryRegisteredAppsResponse ...
 * @name QueryRegisteredAppsResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredAppsResponse
 */
export interface QueryRegisteredAppsResponseAmino {
  ids: number[];
}
export interface QueryRegisteredAppsResponseAminoMsg {
  type: "/hyperlane.core.v1.QueryRegisteredAppsResponse";
  value: QueryRegisteredAppsResponseAmino;
}
function createBaseQueryMailboxesRequest(): QueryMailboxesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryMailboxesRequest ...
 * @name QueryMailboxesRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxesRequest
 */
export const QueryMailboxesRequest = {
  typeUrl: "/hyperlane.core.v1.QueryMailboxesRequest",
  is(o: any): o is QueryMailboxesRequest {
    return o && o.$typeUrl === QueryMailboxesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMailboxesRequestAmino {
    return o && o.$typeUrl === QueryMailboxesRequest.typeUrl;
  },
  encode(message: QueryMailboxesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMailboxesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMailboxesRequest();
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
  fromPartial(object: DeepPartial<QueryMailboxesRequest>): QueryMailboxesRequest {
    const message = createBaseQueryMailboxesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMailboxesRequestAmino): QueryMailboxesRequest {
    const message = createBaseQueryMailboxesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMailboxesRequest): QueryMailboxesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMailboxesRequestAminoMsg): QueryMailboxesRequest {
    return QueryMailboxesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMailboxesRequestProtoMsg): QueryMailboxesRequest {
    return QueryMailboxesRequest.decode(message.value);
  },
  toProto(message: QueryMailboxesRequest): Uint8Array {
    return QueryMailboxesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMailboxesRequest): QueryMailboxesRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryMailboxesRequest",
      value: QueryMailboxesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMailboxesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryMailboxesResponse(): QueryMailboxesResponse {
  return {
    mailboxes: [],
    pagination: undefined
  };
}
/**
 * QueryMailboxesResponse ...
 * @name QueryMailboxesResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxesResponse
 */
export const QueryMailboxesResponse = {
  typeUrl: "/hyperlane.core.v1.QueryMailboxesResponse",
  is(o: any): o is QueryMailboxesResponse {
    return o && (o.$typeUrl === QueryMailboxesResponse.typeUrl || Array.isArray(o.mailboxes) && (!o.mailboxes.length || Mailbox.is(o.mailboxes[0])));
  },
  isAmino(o: any): o is QueryMailboxesResponseAmino {
    return o && (o.$typeUrl === QueryMailboxesResponse.typeUrl || Array.isArray(o.mailboxes) && (!o.mailboxes.length || Mailbox.isAmino(o.mailboxes[0])));
  },
  encode(message: QueryMailboxesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.mailboxes) {
      Mailbox.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMailboxesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMailboxesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxes.push(Mailbox.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryMailboxesResponse>): QueryMailboxesResponse {
    const message = createBaseQueryMailboxesResponse();
    message.mailboxes = object.mailboxes?.map(e => Mailbox.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMailboxesResponseAmino): QueryMailboxesResponse {
    const message = createBaseQueryMailboxesResponse();
    message.mailboxes = object.mailboxes?.map(e => Mailbox.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMailboxesResponse): QueryMailboxesResponseAmino {
    const obj: any = {};
    if (message.mailboxes) {
      obj.mailboxes = message.mailboxes.map(e => e ? Mailbox.toAmino(e) : undefined);
    } else {
      obj.mailboxes = message.mailboxes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMailboxesResponseAminoMsg): QueryMailboxesResponse {
    return QueryMailboxesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMailboxesResponseProtoMsg): QueryMailboxesResponse {
    return QueryMailboxesResponse.decode(message.value);
  },
  toProto(message: QueryMailboxesResponse): Uint8Array {
    return QueryMailboxesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMailboxesResponse): QueryMailboxesResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryMailboxesResponse",
      value: QueryMailboxesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMailboxesResponse.typeUrl)) {
      return;
    }
    Mailbox.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryMailboxRequest(): QueryMailboxRequest {
  return {
    id: ""
  };
}
/**
 * QueryMailboxRequest ...
 * @name QueryMailboxRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxRequest
 */
export const QueryMailboxRequest = {
  typeUrl: "/hyperlane.core.v1.QueryMailboxRequest",
  is(o: any): o is QueryMailboxRequest {
    return o && (o.$typeUrl === QueryMailboxRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryMailboxRequestAmino {
    return o && (o.$typeUrl === QueryMailboxRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryMailboxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMailboxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMailboxRequest();
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
  fromPartial(object: DeepPartial<QueryMailboxRequest>): QueryMailboxRequest {
    const message = createBaseQueryMailboxRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryMailboxRequestAmino): QueryMailboxRequest {
    const message = createBaseQueryMailboxRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryMailboxRequest): QueryMailboxRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryMailboxRequestAminoMsg): QueryMailboxRequest {
    return QueryMailboxRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMailboxRequestProtoMsg): QueryMailboxRequest {
    return QueryMailboxRequest.decode(message.value);
  },
  toProto(message: QueryMailboxRequest): Uint8Array {
    return QueryMailboxRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMailboxRequest): QueryMailboxRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryMailboxRequest",
      value: QueryMailboxRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryMailboxResponse(): QueryMailboxResponse {
  return {
    mailbox: Mailbox.fromPartial({})
  };
}
/**
 * QueryMailboxResponse ...
 * @name QueryMailboxResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryMailboxResponse
 */
export const QueryMailboxResponse = {
  typeUrl: "/hyperlane.core.v1.QueryMailboxResponse",
  is(o: any): o is QueryMailboxResponse {
    return o && (o.$typeUrl === QueryMailboxResponse.typeUrl || Mailbox.is(o.mailbox));
  },
  isAmino(o: any): o is QueryMailboxResponseAmino {
    return o && (o.$typeUrl === QueryMailboxResponse.typeUrl || Mailbox.isAmino(o.mailbox));
  },
  encode(message: QueryMailboxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailbox !== undefined) {
      Mailbox.encode(message.mailbox, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMailboxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMailboxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailbox = Mailbox.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMailboxResponse>): QueryMailboxResponse {
    const message = createBaseQueryMailboxResponse();
    message.mailbox = object.mailbox !== undefined && object.mailbox !== null ? Mailbox.fromPartial(object.mailbox) : undefined;
    return message;
  },
  fromAmino(object: QueryMailboxResponseAmino): QueryMailboxResponse {
    const message = createBaseQueryMailboxResponse();
    if (object.mailbox !== undefined && object.mailbox !== null) {
      message.mailbox = Mailbox.fromAmino(object.mailbox);
    }
    return message;
  },
  toAmino(message: QueryMailboxResponse): QueryMailboxResponseAmino {
    const obj: any = {};
    obj.mailbox = message.mailbox ? Mailbox.toAmino(message.mailbox) : Mailbox.toAmino(Mailbox.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryMailboxResponseAminoMsg): QueryMailboxResponse {
    return QueryMailboxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMailboxResponseProtoMsg): QueryMailboxResponse {
    return QueryMailboxResponse.decode(message.value);
  },
  toProto(message: QueryMailboxResponse): Uint8Array {
    return QueryMailboxResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMailboxResponse): QueryMailboxResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryMailboxResponse",
      value: QueryMailboxResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryMailboxResponse.typeUrl)) {
      return;
    }
    Mailbox.registerTypeUrl();
  }
};
function createBaseQueryDeliveredRequest(): QueryDeliveredRequest {
  return {
    id: "",
    messageId: ""
  };
}
/**
 * QueryDeliveredRequest ...
 * @name QueryDeliveredRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryDeliveredRequest
 */
export const QueryDeliveredRequest = {
  typeUrl: "/hyperlane.core.v1.QueryDeliveredRequest",
  is(o: any): o is QueryDeliveredRequest {
    return o && (o.$typeUrl === QueryDeliveredRequest.typeUrl || typeof o.id === "string" && typeof o.messageId === "string");
  },
  isAmino(o: any): o is QueryDeliveredRequestAmino {
    return o && (o.$typeUrl === QueryDeliveredRequest.typeUrl || typeof o.id === "string" && typeof o.message_id === "string");
  },
  encode(message: QueryDeliveredRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.messageId !== "") {
      writer.uint32(18).string(message.messageId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeliveredRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeliveredRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.messageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDeliveredRequest>): QueryDeliveredRequest {
    const message = createBaseQueryDeliveredRequest();
    message.id = object.id ?? "";
    message.messageId = object.messageId ?? "";
    return message;
  },
  fromAmino(object: QueryDeliveredRequestAmino): QueryDeliveredRequest {
    const message = createBaseQueryDeliveredRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    return message;
  },
  toAmino(message: QueryDeliveredRequest): QueryDeliveredRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    return obj;
  },
  fromAminoMsg(object: QueryDeliveredRequestAminoMsg): QueryDeliveredRequest {
    return QueryDeliveredRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeliveredRequestProtoMsg): QueryDeliveredRequest {
    return QueryDeliveredRequest.decode(message.value);
  },
  toProto(message: QueryDeliveredRequest): Uint8Array {
    return QueryDeliveredRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDeliveredRequest): QueryDeliveredRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryDeliveredRequest",
      value: QueryDeliveredRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryDeliveredResponse(): QueryDeliveredResponse {
  return {
    delivered: false
  };
}
/**
 * QueryDeliveredResponse ...
 * @name QueryDeliveredResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryDeliveredResponse
 */
export const QueryDeliveredResponse = {
  typeUrl: "/hyperlane.core.v1.QueryDeliveredResponse",
  is(o: any): o is QueryDeliveredResponse {
    return o && (o.$typeUrl === QueryDeliveredResponse.typeUrl || typeof o.delivered === "boolean");
  },
  isAmino(o: any): o is QueryDeliveredResponseAmino {
    return o && (o.$typeUrl === QueryDeliveredResponse.typeUrl || typeof o.delivered === "boolean");
  },
  encode(message: QueryDeliveredResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delivered === true) {
      writer.uint32(8).bool(message.delivered);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDeliveredResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDeliveredResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delivered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDeliveredResponse>): QueryDeliveredResponse {
    const message = createBaseQueryDeliveredResponse();
    message.delivered = object.delivered ?? false;
    return message;
  },
  fromAmino(object: QueryDeliveredResponseAmino): QueryDeliveredResponse {
    const message = createBaseQueryDeliveredResponse();
    if (object.delivered !== undefined && object.delivered !== null) {
      message.delivered = object.delivered;
    }
    return message;
  },
  toAmino(message: QueryDeliveredResponse): QueryDeliveredResponseAmino {
    const obj: any = {};
    obj.delivered = message.delivered === false ? undefined : message.delivered;
    return obj;
  },
  fromAminoMsg(object: QueryDeliveredResponseAminoMsg): QueryDeliveredResponse {
    return QueryDeliveredResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDeliveredResponseProtoMsg): QueryDeliveredResponse {
    return QueryDeliveredResponse.decode(message.value);
  },
  toProto(message: QueryDeliveredResponse): Uint8Array {
    return QueryDeliveredResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDeliveredResponse): QueryDeliveredResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryDeliveredResponse",
      value: QueryDeliveredResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRecipientIsmRequest(): QueryRecipientIsmRequest {
  return {
    recipient: ""
  };
}
/**
 * QueryRecipientIsmRequest ...
 * @name QueryRecipientIsmRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRecipientIsmRequest
 */
export const QueryRecipientIsmRequest = {
  typeUrl: "/hyperlane.core.v1.QueryRecipientIsmRequest",
  is(o: any): o is QueryRecipientIsmRequest {
    return o && (o.$typeUrl === QueryRecipientIsmRequest.typeUrl || typeof o.recipient === "string");
  },
  isAmino(o: any): o is QueryRecipientIsmRequestAmino {
    return o && (o.$typeUrl === QueryRecipientIsmRequest.typeUrl || typeof o.recipient === "string");
  },
  encode(message: QueryRecipientIsmRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRecipientIsmRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecipientIsmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRecipientIsmRequest>): QueryRecipientIsmRequest {
    const message = createBaseQueryRecipientIsmRequest();
    message.recipient = object.recipient ?? "";
    return message;
  },
  fromAmino(object: QueryRecipientIsmRequestAmino): QueryRecipientIsmRequest {
    const message = createBaseQueryRecipientIsmRequest();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    return message;
  },
  toAmino(message: QueryRecipientIsmRequest): QueryRecipientIsmRequestAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    return obj;
  },
  fromAminoMsg(object: QueryRecipientIsmRequestAminoMsg): QueryRecipientIsmRequest {
    return QueryRecipientIsmRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecipientIsmRequestProtoMsg): QueryRecipientIsmRequest {
    return QueryRecipientIsmRequest.decode(message.value);
  },
  toProto(message: QueryRecipientIsmRequest): Uint8Array {
    return QueryRecipientIsmRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRecipientIsmRequest): QueryRecipientIsmRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRecipientIsmRequest",
      value: QueryRecipientIsmRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRecipientIsmResponse(): QueryRecipientIsmResponse {
  return {
    ismId: ""
  };
}
/**
 * QueryRecipientIsmResponse ...
 * @name QueryRecipientIsmResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRecipientIsmResponse
 */
export const QueryRecipientIsmResponse = {
  typeUrl: "/hyperlane.core.v1.QueryRecipientIsmResponse",
  is(o: any): o is QueryRecipientIsmResponse {
    return o && (o.$typeUrl === QueryRecipientIsmResponse.typeUrl || typeof o.ismId === "string");
  },
  isAmino(o: any): o is QueryRecipientIsmResponseAmino {
    return o && (o.$typeUrl === QueryRecipientIsmResponse.typeUrl || typeof o.ism_id === "string");
  },
  encode(message: QueryRecipientIsmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRecipientIsmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecipientIsmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRecipientIsmResponse>): QueryRecipientIsmResponse {
    const message = createBaseQueryRecipientIsmResponse();
    message.ismId = object.ismId ?? "";
    return message;
  },
  fromAmino(object: QueryRecipientIsmResponseAmino): QueryRecipientIsmResponse {
    const message = createBaseQueryRecipientIsmResponse();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    return message;
  },
  toAmino(message: QueryRecipientIsmResponse): QueryRecipientIsmResponseAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    return obj;
  },
  fromAminoMsg(object: QueryRecipientIsmResponseAminoMsg): QueryRecipientIsmResponse {
    return QueryRecipientIsmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRecipientIsmResponseProtoMsg): QueryRecipientIsmResponse {
    return QueryRecipientIsmResponse.decode(message.value);
  },
  toProto(message: QueryRecipientIsmResponse): Uint8Array {
    return QueryRecipientIsmResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRecipientIsmResponse): QueryRecipientIsmResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRecipientIsmResponse",
      value: QueryRecipientIsmResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryVerifyDryRunRequest(): QueryVerifyDryRunRequest {
  return {
    ismId: "",
    message: "",
    metadata: "",
    gasLimit: ""
  };
}
/**
 * QueryVerifyDryRunRequest ...
 * @name QueryVerifyDryRunRequest
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryVerifyDryRunRequest
 */
export const QueryVerifyDryRunRequest = {
  typeUrl: "/hyperlane.core.v1.QueryVerifyDryRunRequest",
  is(o: any): o is QueryVerifyDryRunRequest {
    return o && (o.$typeUrl === QueryVerifyDryRunRequest.typeUrl || typeof o.ismId === "string" && typeof o.message === "string" && typeof o.metadata === "string" && typeof o.gasLimit === "string");
  },
  isAmino(o: any): o is QueryVerifyDryRunRequestAmino {
    return o && (o.$typeUrl === QueryVerifyDryRunRequest.typeUrl || typeof o.ism_id === "string" && typeof o.message === "string" && typeof o.metadata === "string" && typeof o.gas_limit === "string");
  },
  encode(message: QueryVerifyDryRunRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.gasLimit !== "") {
      writer.uint32(34).string(message.gasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyDryRunRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyDryRunRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismId = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.gasLimit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVerifyDryRunRequest>): QueryVerifyDryRunRequest {
    const message = createBaseQueryVerifyDryRunRequest();
    message.ismId = object.ismId ?? "";
    message.message = object.message ?? "";
    message.metadata = object.metadata ?? "";
    message.gasLimit = object.gasLimit ?? "";
    return message;
  },
  fromAmino(object: QueryVerifyDryRunRequestAmino): QueryVerifyDryRunRequest {
    const message = createBaseQueryVerifyDryRunRequest();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = object.gas_limit;
    }
    return message;
  },
  toAmino(message: QueryVerifyDryRunRequest): QueryVerifyDryRunRequestAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.message = message.message === "" ? undefined : message.message;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.gas_limit = message.gasLimit === "" ? undefined : message.gasLimit;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyDryRunRequestAminoMsg): QueryVerifyDryRunRequest {
    return QueryVerifyDryRunRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyDryRunRequestProtoMsg): QueryVerifyDryRunRequest {
    return QueryVerifyDryRunRequest.decode(message.value);
  },
  toProto(message: QueryVerifyDryRunRequest): Uint8Array {
    return QueryVerifyDryRunRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyDryRunRequest): QueryVerifyDryRunRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryVerifyDryRunRequest",
      value: QueryVerifyDryRunRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryVerifyDryRunResponse(): QueryVerifyDryRunResponse {
  return {
    verified: false
  };
}
/**
 * QueryVerifyDryRunResponse ...
 * @name QueryVerifyDryRunResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryVerifyDryRunResponse
 */
export const QueryVerifyDryRunResponse = {
  typeUrl: "/hyperlane.core.v1.QueryVerifyDryRunResponse",
  is(o: any): o is QueryVerifyDryRunResponse {
    return o && (o.$typeUrl === QueryVerifyDryRunResponse.typeUrl || typeof o.verified === "boolean");
  },
  isAmino(o: any): o is QueryVerifyDryRunResponseAmino {
    return o && (o.$typeUrl === QueryVerifyDryRunResponse.typeUrl || typeof o.verified === "boolean");
  },
  encode(message: QueryVerifyDryRunResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.verified === true) {
      writer.uint32(8).bool(message.verified);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyDryRunResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyDryRunResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verified = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVerifyDryRunResponse>): QueryVerifyDryRunResponse {
    const message = createBaseQueryVerifyDryRunResponse();
    message.verified = object.verified ?? false;
    return message;
  },
  fromAmino(object: QueryVerifyDryRunResponseAmino): QueryVerifyDryRunResponse {
    const message = createBaseQueryVerifyDryRunResponse();
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    }
    return message;
  },
  toAmino(message: QueryVerifyDryRunResponse): QueryVerifyDryRunResponseAmino {
    const obj: any = {};
    obj.verified = message.verified === false ? undefined : message.verified;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyDryRunResponseAminoMsg): QueryVerifyDryRunResponse {
    return QueryVerifyDryRunResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVerifyDryRunResponseProtoMsg): QueryVerifyDryRunResponse {
    return QueryVerifyDryRunResponse.decode(message.value);
  },
  toProto(message: QueryVerifyDryRunResponse): Uint8Array {
    return QueryVerifyDryRunResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyDryRunResponse): QueryVerifyDryRunResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryVerifyDryRunResponse",
      value: QueryVerifyDryRunResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRegisteredISMs(): QueryRegisteredISMs {
  return {};
}
/**
 * QueryRegisteredISMs ...
 * @name QueryRegisteredISMs
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredISMs
 */
export const QueryRegisteredISMs = {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredISMs",
  is(o: any): o is QueryRegisteredISMs {
    return o && o.$typeUrl === QueryRegisteredISMs.typeUrl;
  },
  isAmino(o: any): o is QueryRegisteredISMsAmino {
    return o && o.$typeUrl === QueryRegisteredISMs.typeUrl;
  },
  encode(_: QueryRegisteredISMs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredISMs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredISMs();
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
  fromPartial(_: DeepPartial<QueryRegisteredISMs>): QueryRegisteredISMs {
    const message = createBaseQueryRegisteredISMs();
    return message;
  },
  fromAmino(_: QueryRegisteredISMsAmino): QueryRegisteredISMs {
    const message = createBaseQueryRegisteredISMs();
    return message;
  },
  toAmino(_: QueryRegisteredISMs): QueryRegisteredISMsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredISMsAminoMsg): QueryRegisteredISMs {
    return QueryRegisteredISMs.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredISMsProtoMsg): QueryRegisteredISMs {
    return QueryRegisteredISMs.decode(message.value);
  },
  toProto(message: QueryRegisteredISMs): Uint8Array {
    return QueryRegisteredISMs.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredISMs): QueryRegisteredISMsProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRegisteredISMs",
      value: QueryRegisteredISMs.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRegisteredISMsResponse(): QueryRegisteredISMsResponse {
  return {
    ids: []
  };
}
/**
 * QueryRegisteredISMsResponse ...
 * @name QueryRegisteredISMsResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredISMsResponse
 */
export const QueryRegisteredISMsResponse = {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredISMsResponse",
  is(o: any): o is QueryRegisteredISMsResponse {
    return o && (o.$typeUrl === QueryRegisteredISMsResponse.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "number"));
  },
  isAmino(o: any): o is QueryRegisteredISMsResponseAmino {
    return o && (o.$typeUrl === QueryRegisteredISMsResponse.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "number"));
  },
  encode(message: QueryRegisteredISMsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredISMsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredISMsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint32());
            }
          } else {
            message.ids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRegisteredISMsResponse>): QueryRegisteredISMsResponse {
    const message = createBaseQueryRegisteredISMsResponse();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryRegisteredISMsResponseAmino): QueryRegisteredISMsResponse {
    const message = createBaseQueryRegisteredISMsResponse();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryRegisteredISMsResponse): QueryRegisteredISMsResponseAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredISMsResponseAminoMsg): QueryRegisteredISMsResponse {
    return QueryRegisteredISMsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredISMsResponseProtoMsg): QueryRegisteredISMsResponse {
    return QueryRegisteredISMsResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredISMsResponse): Uint8Array {
    return QueryRegisteredISMsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredISMsResponse): QueryRegisteredISMsResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRegisteredISMsResponse",
      value: QueryRegisteredISMsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRegisteredHooks(): QueryRegisteredHooks {
  return {};
}
/**
 * QueryRegisteredHooks ...
 * @name QueryRegisteredHooks
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredHooks
 */
export const QueryRegisteredHooks = {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredHooks",
  is(o: any): o is QueryRegisteredHooks {
    return o && o.$typeUrl === QueryRegisteredHooks.typeUrl;
  },
  isAmino(o: any): o is QueryRegisteredHooksAmino {
    return o && o.$typeUrl === QueryRegisteredHooks.typeUrl;
  },
  encode(_: QueryRegisteredHooks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredHooks {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredHooks();
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
  fromPartial(_: DeepPartial<QueryRegisteredHooks>): QueryRegisteredHooks {
    const message = createBaseQueryRegisteredHooks();
    return message;
  },
  fromAmino(_: QueryRegisteredHooksAmino): QueryRegisteredHooks {
    const message = createBaseQueryRegisteredHooks();
    return message;
  },
  toAmino(_: QueryRegisteredHooks): QueryRegisteredHooksAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredHooksAminoMsg): QueryRegisteredHooks {
    return QueryRegisteredHooks.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredHooksProtoMsg): QueryRegisteredHooks {
    return QueryRegisteredHooks.decode(message.value);
  },
  toProto(message: QueryRegisteredHooks): Uint8Array {
    return QueryRegisteredHooks.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredHooks): QueryRegisteredHooksProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRegisteredHooks",
      value: QueryRegisteredHooks.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRegisteredHooksResponse(): QueryRegisteredHooksResponse {
  return {
    ids: []
  };
}
/**
 * QueryRegisteredHooksResponse ...
 * @name QueryRegisteredHooksResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredHooksResponse
 */
export const QueryRegisteredHooksResponse = {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredHooksResponse",
  is(o: any): o is QueryRegisteredHooksResponse {
    return o && (o.$typeUrl === QueryRegisteredHooksResponse.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "number"));
  },
  isAmino(o: any): o is QueryRegisteredHooksResponseAmino {
    return o && (o.$typeUrl === QueryRegisteredHooksResponse.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "number"));
  },
  encode(message: QueryRegisteredHooksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredHooksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredHooksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint32());
            }
          } else {
            message.ids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRegisteredHooksResponse>): QueryRegisteredHooksResponse {
    const message = createBaseQueryRegisteredHooksResponse();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryRegisteredHooksResponseAmino): QueryRegisteredHooksResponse {
    const message = createBaseQueryRegisteredHooksResponse();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryRegisteredHooksResponse): QueryRegisteredHooksResponseAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredHooksResponseAminoMsg): QueryRegisteredHooksResponse {
    return QueryRegisteredHooksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredHooksResponseProtoMsg): QueryRegisteredHooksResponse {
    return QueryRegisteredHooksResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredHooksResponse): Uint8Array {
    return QueryRegisteredHooksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredHooksResponse): QueryRegisteredHooksResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRegisteredHooksResponse",
      value: QueryRegisteredHooksResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRegisteredApps(): QueryRegisteredApps {
  return {};
}
/**
 * QueryRegisteredApps ...
 * @name QueryRegisteredApps
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredApps
 */
export const QueryRegisteredApps = {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredApps",
  is(o: any): o is QueryRegisteredApps {
    return o && o.$typeUrl === QueryRegisteredApps.typeUrl;
  },
  isAmino(o: any): o is QueryRegisteredAppsAmino {
    return o && o.$typeUrl === QueryRegisteredApps.typeUrl;
  },
  encode(_: QueryRegisteredApps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredApps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredApps();
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
  fromPartial(_: DeepPartial<QueryRegisteredApps>): QueryRegisteredApps {
    const message = createBaseQueryRegisteredApps();
    return message;
  },
  fromAmino(_: QueryRegisteredAppsAmino): QueryRegisteredApps {
    const message = createBaseQueryRegisteredApps();
    return message;
  },
  toAmino(_: QueryRegisteredApps): QueryRegisteredAppsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredAppsAminoMsg): QueryRegisteredApps {
    return QueryRegisteredApps.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredAppsProtoMsg): QueryRegisteredApps {
    return QueryRegisteredApps.decode(message.value);
  },
  toProto(message: QueryRegisteredApps): Uint8Array {
    return QueryRegisteredApps.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredApps): QueryRegisteredAppsProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRegisteredApps",
      value: QueryRegisteredApps.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryRegisteredAppsResponse(): QueryRegisteredAppsResponse {
  return {
    ids: []
  };
}
/**
 * QueryRegisteredAppsResponse ...
 * @name QueryRegisteredAppsResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.QueryRegisteredAppsResponse
 */
export const QueryRegisteredAppsResponse = {
  typeUrl: "/hyperlane.core.v1.QueryRegisteredAppsResponse",
  is(o: any): o is QueryRegisteredAppsResponse {
    return o && (o.$typeUrl === QueryRegisteredAppsResponse.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "number"));
  },
  isAmino(o: any): o is QueryRegisteredAppsResponseAmino {
    return o && (o.$typeUrl === QueryRegisteredAppsResponse.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "number"));
  },
  encode(message: QueryRegisteredAppsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredAppsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint32());
            }
          } else {
            message.ids.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRegisteredAppsResponse>): QueryRegisteredAppsResponse {
    const message = createBaseQueryRegisteredAppsResponse();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryRegisteredAppsResponseAmino): QueryRegisteredAppsResponse {
    const message = createBaseQueryRegisteredAppsResponse();
    message.ids = object.ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryRegisteredAppsResponse): QueryRegisteredAppsResponseAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = message.ids;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredAppsResponseAminoMsg): QueryRegisteredAppsResponse {
    return QueryRegisteredAppsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredAppsResponseProtoMsg): QueryRegisteredAppsResponse {
    return QueryRegisteredAppsResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredAppsResponse): Uint8Array {
    return QueryRegisteredAppsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredAppsResponse): QueryRegisteredAppsResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.QueryRegisteredAppsResponse",
      value: QueryRegisteredAppsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};