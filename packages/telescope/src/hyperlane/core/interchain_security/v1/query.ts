import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/**
 * QueryIsmsRequest ...
 * @name QueryIsmsRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmsRequest
 */
export interface QueryIsmsRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryIsmsRequestProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmsRequest";
  value: Uint8Array;
}
/**
 * QueryIsmsRequest ...
 * @name QueryIsmsRequestAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmsRequest
 */
export interface QueryIsmsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryIsmsRequestAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryIsmsRequest";
  value: QueryIsmsRequestAmino;
}
/**
 * QueryIsmsResponse ...
 * @name QueryIsmsResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmsResponse
 */
export interface QueryIsmsResponse {
  isms: (Any)[] | Any[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryIsmsResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmsResponse";
  value: Uint8Array;
}
export type QueryIsmsResponseEncoded = Omit<QueryIsmsResponse, "isms"> & {
  isms: (AnyProtoMsg)[];
};
/**
 * QueryIsmsResponse ...
 * @name QueryIsmsResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmsResponse
 */
export interface QueryIsmsResponseAmino {
  isms: AnyAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryIsmsResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryIsmsResponse";
  value: QueryIsmsResponseAmino;
}
/**
 * QueryIsmRequest ...
 * @name QueryIsmRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmRequest
 */
export interface QueryIsmRequest {
  id: string;
}
export interface QueryIsmRequestProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmRequest";
  value: Uint8Array;
}
/**
 * QueryIsmRequest ...
 * @name QueryIsmRequestAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmRequest
 */
export interface QueryIsmRequestAmino {
  id: string;
}
export interface QueryIsmRequestAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryIsmRequest";
  value: QueryIsmRequestAmino;
}
/**
 * QueryIsmResponse ...
 * @name QueryIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmResponse
 */
export interface QueryIsmResponse {
  ism: Any;
}
export interface QueryIsmResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmResponse";
  value: Uint8Array;
}
/**
 * QueryIsmResponse ...
 * @name QueryIsmResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmResponse
 */
export interface QueryIsmResponseAmino {
  ism: AnyAmino;
}
export interface QueryIsmResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryIsmResponse";
  value: QueryIsmResponseAmino;
}
/**
 * QueryAnnouncedStorageLocationsRequest ...
 * @name QueryAnnouncedStorageLocationsRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsRequest
 */
export interface QueryAnnouncedStorageLocationsRequest {
  mailboxId: string;
  validatorAddress: string;
}
export interface QueryAnnouncedStorageLocationsRequestProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsRequest";
  value: Uint8Array;
}
/**
 * QueryAnnouncedStorageLocationsRequest ...
 * @name QueryAnnouncedStorageLocationsRequestAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsRequest
 */
export interface QueryAnnouncedStorageLocationsRequestAmino {
  mailbox_id: string;
  validator_address: string;
}
export interface QueryAnnouncedStorageLocationsRequestAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsRequest";
  value: QueryAnnouncedStorageLocationsRequestAmino;
}
/**
 * QueryAnnouncedStorageLocationsResponse ...
 * @name QueryAnnouncedStorageLocationsResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsResponse
 */
export interface QueryAnnouncedStorageLocationsResponse {
  storageLocations: string[];
}
export interface QueryAnnouncedStorageLocationsResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsResponse";
  value: Uint8Array;
}
/**
 * QueryAnnouncedStorageLocationsResponse ...
 * @name QueryAnnouncedStorageLocationsResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsResponse
 */
export interface QueryAnnouncedStorageLocationsResponseAmino {
  storage_locations: string[];
}
export interface QueryAnnouncedStorageLocationsResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsResponse";
  value: QueryAnnouncedStorageLocationsResponseAmino;
}
/**
 * QueryLatestAnnouncedStorageLocationRequest ...
 * @name QueryLatestAnnouncedStorageLocationRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationRequest
 */
export interface QueryLatestAnnouncedStorageLocationRequest {
  mailboxId: string;
  validatorAddress: string;
}
export interface QueryLatestAnnouncedStorageLocationRequestProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationRequest";
  value: Uint8Array;
}
/**
 * QueryLatestAnnouncedStorageLocationRequest ...
 * @name QueryLatestAnnouncedStorageLocationRequestAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationRequest
 */
export interface QueryLatestAnnouncedStorageLocationRequestAmino {
  mailbox_id: string;
  validator_address: string;
}
export interface QueryLatestAnnouncedStorageLocationRequestAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationRequest";
  value: QueryLatestAnnouncedStorageLocationRequestAmino;
}
/**
 * QueryLatestAnnouncedStorageLocationResponse ...
 * @name QueryLatestAnnouncedStorageLocationResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationResponse
 */
export interface QueryLatestAnnouncedStorageLocationResponse {
  storageLocation: string;
}
export interface QueryLatestAnnouncedStorageLocationResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationResponse";
  value: Uint8Array;
}
/**
 * QueryLatestAnnouncedStorageLocationResponse ...
 * @name QueryLatestAnnouncedStorageLocationResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationResponse
 */
export interface QueryLatestAnnouncedStorageLocationResponseAmino {
  storage_location: string;
}
export interface QueryLatestAnnouncedStorageLocationResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationResponse";
  value: QueryLatestAnnouncedStorageLocationResponseAmino;
}
function createBaseQueryIsmsRequest(): QueryIsmsRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryIsmsRequest ...
 * @name QueryIsmsRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmsRequest
 */
export const QueryIsmsRequest = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmsRequest",
  is(o: any): o is QueryIsmsRequest {
    return o && o.$typeUrl === QueryIsmsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryIsmsRequestAmino {
    return o && o.$typeUrl === QueryIsmsRequest.typeUrl;
  },
  encode(message: QueryIsmsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsmsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsmsRequest();
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
  fromPartial(object: DeepPartial<QueryIsmsRequest>): QueryIsmsRequest {
    const message = createBaseQueryIsmsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIsmsRequestAmino): QueryIsmsRequest {
    const message = createBaseQueryIsmsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIsmsRequest): QueryIsmsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIsmsRequestAminoMsg): QueryIsmsRequest {
    return QueryIsmsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsmsRequestProtoMsg): QueryIsmsRequest {
    return QueryIsmsRequest.decode(message.value);
  },
  toProto(message: QueryIsmsRequest): Uint8Array {
    return QueryIsmsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsmsRequest): QueryIsmsRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmsRequest",
      value: QueryIsmsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryIsmsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryIsmsResponse(): QueryIsmsResponse {
  return {
    isms: [],
    pagination: undefined
  };
}
/**
 * QueryIsmsResponse ...
 * @name QueryIsmsResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmsResponse
 */
export const QueryIsmsResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmsResponse",
  is(o: any): o is QueryIsmsResponse {
    return o && (o.$typeUrl === QueryIsmsResponse.typeUrl || Array.isArray(o.isms) && (!o.isms.length || Any.is(o.isms[0])));
  },
  isAmino(o: any): o is QueryIsmsResponseAmino {
    return o && (o.$typeUrl === QueryIsmsResponse.typeUrl || Array.isArray(o.isms) && (!o.isms.length || Any.isAmino(o.isms[0])));
  },
  encode(message: QueryIsmsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.isms) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsmsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isms.push(GlobalDecoderRegistry.unwrapAny(reader));
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
  fromPartial(object: DeepPartial<QueryIsmsResponse>): QueryIsmsResponse {
    const message = createBaseQueryIsmsResponse();
    message.isms = object.isms?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryIsmsResponseAmino): QueryIsmsResponse {
    const message = createBaseQueryIsmsResponse();
    message.isms = object.isms?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIsmsResponse): QueryIsmsResponseAmino {
    const obj: any = {};
    if (message.isms) {
      obj.isms = message.isms.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.isms = message.isms;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIsmsResponseAminoMsg): QueryIsmsResponse {
    return QueryIsmsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsmsResponseProtoMsg): QueryIsmsResponse {
    return QueryIsmsResponse.decode(message.value);
  },
  toProto(message: QueryIsmsResponse): Uint8Array {
    return QueryIsmsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsmsResponse): QueryIsmsResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmsResponse",
      value: QueryIsmsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryIsmsResponse.typeUrl)) {
      return;
    }
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryIsmRequest(): QueryIsmRequest {
  return {
    id: ""
  };
}
/**
 * QueryIsmRequest ...
 * @name QueryIsmRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmRequest
 */
export const QueryIsmRequest = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmRequest",
  is(o: any): o is QueryIsmRequest {
    return o && (o.$typeUrl === QueryIsmRequest.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is QueryIsmRequestAmino {
    return o && (o.$typeUrl === QueryIsmRequest.typeUrl || typeof o.id === "string");
  },
  encode(message: QueryIsmRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsmRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsmRequest();
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
  fromPartial(object: DeepPartial<QueryIsmRequest>): QueryIsmRequest {
    const message = createBaseQueryIsmRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryIsmRequestAmino): QueryIsmRequest {
    const message = createBaseQueryIsmRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryIsmRequest): QueryIsmRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryIsmRequestAminoMsg): QueryIsmRequest {
    return QueryIsmRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsmRequestProtoMsg): QueryIsmRequest {
    return QueryIsmRequest.decode(message.value);
  },
  toProto(message: QueryIsmRequest): Uint8Array {
    return QueryIsmRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsmRequest): QueryIsmRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmRequest",
      value: QueryIsmRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryIsmResponse(): QueryIsmResponse {
  return {
    ism: Any.fromPartial({})
  };
}
/**
 * QueryIsmResponse ...
 * @name QueryIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryIsmResponse
 */
export const QueryIsmResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmResponse",
  is(o: any): o is QueryIsmResponse {
    return o && (o.$typeUrl === QueryIsmResponse.typeUrl || Any.is(o.ism));
  },
  isAmino(o: any): o is QueryIsmResponseAmino {
    return o && (o.$typeUrl === QueryIsmResponse.typeUrl || Any.isAmino(o.ism));
  },
  encode(message: QueryIsmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ism !== undefined) {
      Any.encode(message.ism, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ism = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryIsmResponse>): QueryIsmResponse {
    const message = createBaseQueryIsmResponse();
    message.ism = object.ism !== undefined && object.ism !== null ? Any.fromPartial(object.ism) : undefined;
    return message;
  },
  fromAmino(object: QueryIsmResponseAmino): QueryIsmResponse {
    const message = createBaseQueryIsmResponse();
    if (object.ism !== undefined && object.ism !== null) {
      message.ism = Any.fromAmino(object.ism);
    }
    return message;
  },
  toAmino(message: QueryIsmResponse): QueryIsmResponseAmino {
    const obj: any = {};
    obj.ism = message.ism ? Any.toAmino(message.ism) : Any.toAmino(Any.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryIsmResponseAminoMsg): QueryIsmResponse {
    return QueryIsmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsmResponseProtoMsg): QueryIsmResponse {
    return QueryIsmResponse.decode(message.value);
  },
  toProto(message: QueryIsmResponse): Uint8Array {
    return QueryIsmResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsmResponse): QueryIsmResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryIsmResponse",
      value: QueryIsmResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAnnouncedStorageLocationsRequest(): QueryAnnouncedStorageLocationsRequest {
  return {
    mailboxId: "",
    validatorAddress: ""
  };
}
/**
 * QueryAnnouncedStorageLocationsRequest ...
 * @name QueryAnnouncedStorageLocationsRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsRequest
 */
export const QueryAnnouncedStorageLocationsRequest = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsRequest",
  is(o: any): o is QueryAnnouncedStorageLocationsRequest {
    return o && (o.$typeUrl === QueryAnnouncedStorageLocationsRequest.typeUrl || typeof o.mailboxId === "string" && typeof o.validatorAddress === "string");
  },
  isAmino(o: any): o is QueryAnnouncedStorageLocationsRequestAmino {
    return o && (o.$typeUrl === QueryAnnouncedStorageLocationsRequest.typeUrl || typeof o.mailbox_id === "string" && typeof o.validator_address === "string");
  },
  encode(message: QueryAnnouncedStorageLocationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== "") {
      writer.uint32(10).string(message.mailboxId);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnouncedStorageLocationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnouncedStorageLocationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAnnouncedStorageLocationsRequest>): QueryAnnouncedStorageLocationsRequest {
    const message = createBaseQueryAnnouncedStorageLocationsRequest();
    message.mailboxId = object.mailboxId ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryAnnouncedStorageLocationsRequestAmino): QueryAnnouncedStorageLocationsRequest {
    const message = createBaseQueryAnnouncedStorageLocationsRequest();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryAnnouncedStorageLocationsRequest): QueryAnnouncedStorageLocationsRequestAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAnnouncedStorageLocationsRequestAminoMsg): QueryAnnouncedStorageLocationsRequest {
    return QueryAnnouncedStorageLocationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnouncedStorageLocationsRequestProtoMsg): QueryAnnouncedStorageLocationsRequest {
    return QueryAnnouncedStorageLocationsRequest.decode(message.value);
  },
  toProto(message: QueryAnnouncedStorageLocationsRequest): Uint8Array {
    return QueryAnnouncedStorageLocationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnouncedStorageLocationsRequest): QueryAnnouncedStorageLocationsRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsRequest",
      value: QueryAnnouncedStorageLocationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryAnnouncedStorageLocationsResponse(): QueryAnnouncedStorageLocationsResponse {
  return {
    storageLocations: []
  };
}
/**
 * QueryAnnouncedStorageLocationsResponse ...
 * @name QueryAnnouncedStorageLocationsResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsResponse
 */
export const QueryAnnouncedStorageLocationsResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsResponse",
  is(o: any): o is QueryAnnouncedStorageLocationsResponse {
    return o && (o.$typeUrl === QueryAnnouncedStorageLocationsResponse.typeUrl || Array.isArray(o.storageLocations) && (!o.storageLocations.length || typeof o.storageLocations[0] === "string"));
  },
  isAmino(o: any): o is QueryAnnouncedStorageLocationsResponseAmino {
    return o && (o.$typeUrl === QueryAnnouncedStorageLocationsResponse.typeUrl || Array.isArray(o.storage_locations) && (!o.storage_locations.length || typeof o.storage_locations[0] === "string"));
  },
  encode(message: QueryAnnouncedStorageLocationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storageLocations) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAnnouncedStorageLocationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAnnouncedStorageLocationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageLocations.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAnnouncedStorageLocationsResponse>): QueryAnnouncedStorageLocationsResponse {
    const message = createBaseQueryAnnouncedStorageLocationsResponse();
    message.storageLocations = object.storageLocations?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryAnnouncedStorageLocationsResponseAmino): QueryAnnouncedStorageLocationsResponse {
    const message = createBaseQueryAnnouncedStorageLocationsResponse();
    message.storageLocations = object.storage_locations?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryAnnouncedStorageLocationsResponse): QueryAnnouncedStorageLocationsResponseAmino {
    const obj: any = {};
    if (message.storageLocations) {
      obj.storage_locations = message.storageLocations.map(e => e);
    } else {
      obj.storage_locations = message.storageLocations;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAnnouncedStorageLocationsResponseAminoMsg): QueryAnnouncedStorageLocationsResponse {
    return QueryAnnouncedStorageLocationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAnnouncedStorageLocationsResponseProtoMsg): QueryAnnouncedStorageLocationsResponse {
    return QueryAnnouncedStorageLocationsResponse.decode(message.value);
  },
  toProto(message: QueryAnnouncedStorageLocationsResponse): Uint8Array {
    return QueryAnnouncedStorageLocationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAnnouncedStorageLocationsResponse): QueryAnnouncedStorageLocationsResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryAnnouncedStorageLocationsResponse",
      value: QueryAnnouncedStorageLocationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryLatestAnnouncedStorageLocationRequest(): QueryLatestAnnouncedStorageLocationRequest {
  return {
    mailboxId: "",
    validatorAddress: ""
  };
}
/**
 * QueryLatestAnnouncedStorageLocationRequest ...
 * @name QueryLatestAnnouncedStorageLocationRequest
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationRequest
 */
export const QueryLatestAnnouncedStorageLocationRequest = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationRequest",
  is(o: any): o is QueryLatestAnnouncedStorageLocationRequest {
    return o && (o.$typeUrl === QueryLatestAnnouncedStorageLocationRequest.typeUrl || typeof o.mailboxId === "string" && typeof o.validatorAddress === "string");
  },
  isAmino(o: any): o is QueryLatestAnnouncedStorageLocationRequestAmino {
    return o && (o.$typeUrl === QueryLatestAnnouncedStorageLocationRequest.typeUrl || typeof o.mailbox_id === "string" && typeof o.validator_address === "string");
  },
  encode(message: QueryLatestAnnouncedStorageLocationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== "") {
      writer.uint32(10).string(message.mailboxId);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestAnnouncedStorageLocationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestAnnouncedStorageLocationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLatestAnnouncedStorageLocationRequest>): QueryLatestAnnouncedStorageLocationRequest {
    const message = createBaseQueryLatestAnnouncedStorageLocationRequest();
    message.mailboxId = object.mailboxId ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryLatestAnnouncedStorageLocationRequestAmino): QueryLatestAnnouncedStorageLocationRequest {
    const message = createBaseQueryLatestAnnouncedStorageLocationRequest();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryLatestAnnouncedStorageLocationRequest): QueryLatestAnnouncedStorageLocationRequestAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryLatestAnnouncedStorageLocationRequestAminoMsg): QueryLatestAnnouncedStorageLocationRequest {
    return QueryLatestAnnouncedStorageLocationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestAnnouncedStorageLocationRequestProtoMsg): QueryLatestAnnouncedStorageLocationRequest {
    return QueryLatestAnnouncedStorageLocationRequest.decode(message.value);
  },
  toProto(message: QueryLatestAnnouncedStorageLocationRequest): Uint8Array {
    return QueryLatestAnnouncedStorageLocationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestAnnouncedStorageLocationRequest): QueryLatestAnnouncedStorageLocationRequestProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationRequest",
      value: QueryLatestAnnouncedStorageLocationRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryLatestAnnouncedStorageLocationResponse(): QueryLatestAnnouncedStorageLocationResponse {
  return {
    storageLocation: ""
  };
}
/**
 * QueryLatestAnnouncedStorageLocationResponse ...
 * @name QueryLatestAnnouncedStorageLocationResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationResponse
 */
export const QueryLatestAnnouncedStorageLocationResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationResponse",
  is(o: any): o is QueryLatestAnnouncedStorageLocationResponse {
    return o && (o.$typeUrl === QueryLatestAnnouncedStorageLocationResponse.typeUrl || typeof o.storageLocation === "string");
  },
  isAmino(o: any): o is QueryLatestAnnouncedStorageLocationResponseAmino {
    return o && (o.$typeUrl === QueryLatestAnnouncedStorageLocationResponse.typeUrl || typeof o.storage_location === "string");
  },
  encode(message: QueryLatestAnnouncedStorageLocationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storageLocation !== "") {
      writer.uint32(10).string(message.storageLocation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLatestAnnouncedStorageLocationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLatestAnnouncedStorageLocationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storageLocation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryLatestAnnouncedStorageLocationResponse>): QueryLatestAnnouncedStorageLocationResponse {
    const message = createBaseQueryLatestAnnouncedStorageLocationResponse();
    message.storageLocation = object.storageLocation ?? "";
    return message;
  },
  fromAmino(object: QueryLatestAnnouncedStorageLocationResponseAmino): QueryLatestAnnouncedStorageLocationResponse {
    const message = createBaseQueryLatestAnnouncedStorageLocationResponse();
    if (object.storage_location !== undefined && object.storage_location !== null) {
      message.storageLocation = object.storage_location;
    }
    return message;
  },
  toAmino(message: QueryLatestAnnouncedStorageLocationResponse): QueryLatestAnnouncedStorageLocationResponseAmino {
    const obj: any = {};
    obj.storage_location = message.storageLocation === "" ? undefined : message.storageLocation;
    return obj;
  },
  fromAminoMsg(object: QueryLatestAnnouncedStorageLocationResponseAminoMsg): QueryLatestAnnouncedStorageLocationResponse {
    return QueryLatestAnnouncedStorageLocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestAnnouncedStorageLocationResponseProtoMsg): QueryLatestAnnouncedStorageLocationResponse {
    return QueryLatestAnnouncedStorageLocationResponse.decode(message.value);
  },
  toProto(message: QueryLatestAnnouncedStorageLocationResponse): Uint8Array {
    return QueryLatestAnnouncedStorageLocationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestAnnouncedStorageLocationResponse): QueryLatestAnnouncedStorageLocationResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.QueryLatestAnnouncedStorageLocationResponse",
      value: QueryLatestAnnouncedStorageLocationResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};