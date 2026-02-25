import { Params, ParamsAmino } from "./params";
import { AccountAuthenticator, AccountAuthenticatorAmino } from "./models";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type.
 * @name GetAuthenticatorsRequest
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorsRequest
 */
export interface GetAuthenticatorsRequest {
  account: string;
}
export interface GetAuthenticatorsRequestProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsRequest";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type.
 * @name GetAuthenticatorsRequestAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorsRequest
 */
export interface GetAuthenticatorsRequestAmino {
  account: string;
}
export interface GetAuthenticatorsRequestAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsRequest";
  value: GetAuthenticatorsRequestAmino;
}
/**
 * MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type.
 * @name GetAuthenticatorsResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorsResponse
 */
export interface GetAuthenticatorsResponse {
  accountAuthenticators: AccountAuthenticator[];
}
export interface GetAuthenticatorsResponseProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsResponse";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type.
 * @name GetAuthenticatorsResponseAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorsResponse
 */
export interface GetAuthenticatorsResponseAmino {
  account_authenticators: AccountAuthenticatorAmino[];
}
export interface GetAuthenticatorsResponseAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsResponse";
  value: GetAuthenticatorsResponseAmino;
}
/**
 * MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type.
 * @name GetAuthenticatorRequest
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorRequest
 */
export interface GetAuthenticatorRequest {
  account: string;
  authenticatorId: bigint;
}
export interface GetAuthenticatorRequestProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorRequest";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type.
 * @name GetAuthenticatorRequestAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorRequest
 */
export interface GetAuthenticatorRequestAmino {
  account: string;
  authenticator_id: string;
}
export interface GetAuthenticatorRequestAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.GetAuthenticatorRequest";
  value: GetAuthenticatorRequestAmino;
}
/**
 * MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type.
 * @name GetAuthenticatorResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorResponse
 */
export interface GetAuthenticatorResponse {
  accountAuthenticator?: AccountAuthenticator;
}
export interface GetAuthenticatorResponseProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorResponse";
  value: Uint8Array;
}
/**
 * MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type.
 * @name GetAuthenticatorResponseAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorResponse
 */
export interface GetAuthenticatorResponseAmino {
  account_authenticator?: AccountAuthenticatorAmino;
}
export interface GetAuthenticatorResponseAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.GetAuthenticatorResponse";
  value: GetAuthenticatorResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bitsong.smartaccount.v1beta1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bitsong.smartaccount.v1beta1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseGetAuthenticatorsRequest(): GetAuthenticatorsRequest {
  return {
    account: ""
  };
}
/**
 * MsgGetAuthenticatorsRequest defines the Msg/GetAuthenticators request type.
 * @name GetAuthenticatorsRequest
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorsRequest
 */
export const GetAuthenticatorsRequest = {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsRequest",
  is(o: any): o is GetAuthenticatorsRequest {
    return o && (o.$typeUrl === GetAuthenticatorsRequest.typeUrl || typeof o.account === "string");
  },
  isAmino(o: any): o is GetAuthenticatorsRequestAmino {
    return o && (o.$typeUrl === GetAuthenticatorsRequest.typeUrl || typeof o.account === "string");
  },
  encode(message: GetAuthenticatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetAuthenticatorsRequest>): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: GetAuthenticatorsRequestAmino): GetAuthenticatorsRequest {
    const message = createBaseGetAuthenticatorsRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    return message;
  },
  toAmino(message: GetAuthenticatorsRequest): GetAuthenticatorsRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorsRequestAminoMsg): GetAuthenticatorsRequest {
    return GetAuthenticatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorsRequestProtoMsg): GetAuthenticatorsRequest {
    return GetAuthenticatorsRequest.decode(message.value);
  },
  toProto(message: GetAuthenticatorsRequest): Uint8Array {
    return GetAuthenticatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorsRequest): GetAuthenticatorsRequestProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsRequest",
      value: GetAuthenticatorsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGetAuthenticatorsResponse(): GetAuthenticatorsResponse {
  return {
    accountAuthenticators: []
  };
}
/**
 * MsgGetAuthenticatorsResponse defines the Msg/GetAuthenticators response type.
 * @name GetAuthenticatorsResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorsResponse
 */
export const GetAuthenticatorsResponse = {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsResponse",
  is(o: any): o is GetAuthenticatorsResponse {
    return o && (o.$typeUrl === GetAuthenticatorsResponse.typeUrl || Array.isArray(o.accountAuthenticators) && (!o.accountAuthenticators.length || AccountAuthenticator.is(o.accountAuthenticators[0])));
  },
  isAmino(o: any): o is GetAuthenticatorsResponseAmino {
    return o && (o.$typeUrl === GetAuthenticatorsResponse.typeUrl || Array.isArray(o.account_authenticators) && (!o.account_authenticators.length || AccountAuthenticator.isAmino(o.account_authenticators[0])));
  },
  encode(message: GetAuthenticatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accountAuthenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetAuthenticatorsResponse>): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators = object.accountAuthenticators?.map(e => AccountAuthenticator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GetAuthenticatorsResponseAmino): GetAuthenticatorsResponse {
    const message = createBaseGetAuthenticatorsResponse();
    message.accountAuthenticators = object.account_authenticators?.map(e => AccountAuthenticator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GetAuthenticatorsResponse): GetAuthenticatorsResponseAmino {
    const obj: any = {};
    if (message.accountAuthenticators) {
      obj.account_authenticators = message.accountAuthenticators.map(e => e ? AccountAuthenticator.toAmino(e) : undefined);
    } else {
      obj.account_authenticators = message.accountAuthenticators;
    }
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorsResponseAminoMsg): GetAuthenticatorsResponse {
    return GetAuthenticatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorsResponseProtoMsg): GetAuthenticatorsResponse {
    return GetAuthenticatorsResponse.decode(message.value);
  },
  toProto(message: GetAuthenticatorsResponse): Uint8Array {
    return GetAuthenticatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorsResponse): GetAuthenticatorsResponseProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorsResponse",
      value: GetAuthenticatorsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GetAuthenticatorsResponse.typeUrl)) {
      return;
    }
    AccountAuthenticator.registerTypeUrl();
  }
};
function createBaseGetAuthenticatorRequest(): GetAuthenticatorRequest {
  return {
    account: "",
    authenticatorId: BigInt(0)
  };
}
/**
 * MsgGetAuthenticatorRequest defines the Msg/GetAuthenticator request type.
 * @name GetAuthenticatorRequest
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorRequest
 */
export const GetAuthenticatorRequest = {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorRequest",
  is(o: any): o is GetAuthenticatorRequest {
    return o && (o.$typeUrl === GetAuthenticatorRequest.typeUrl || typeof o.account === "string" && typeof o.authenticatorId === "bigint");
  },
  isAmino(o: any): o is GetAuthenticatorRequestAmino {
    return o && (o.$typeUrl === GetAuthenticatorRequest.typeUrl || typeof o.account === "string" && typeof o.authenticator_id === "bigint");
  },
  encode(message: GetAuthenticatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.authenticatorId !== BigInt(0)) {
      writer.uint32(16).uint64(message.authenticatorId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.authenticatorId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetAuthenticatorRequest>): GetAuthenticatorRequest {
    const message = createBaseGetAuthenticatorRequest();
    message.account = object.account ?? "";
    message.authenticatorId = object.authenticatorId !== undefined && object.authenticatorId !== null ? BigInt(object.authenticatorId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GetAuthenticatorRequestAmino): GetAuthenticatorRequest {
    const message = createBaseGetAuthenticatorRequest();
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.authenticator_id !== undefined && object.authenticator_id !== null) {
      message.authenticatorId = BigInt(object.authenticator_id);
    }
    return message;
  },
  toAmino(message: GetAuthenticatorRequest): GetAuthenticatorRequestAmino {
    const obj: any = {};
    obj.account = message.account === "" ? undefined : message.account;
    obj.authenticator_id = message.authenticatorId !== BigInt(0) ? message.authenticatorId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorRequestAminoMsg): GetAuthenticatorRequest {
    return GetAuthenticatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorRequestProtoMsg): GetAuthenticatorRequest {
    return GetAuthenticatorRequest.decode(message.value);
  },
  toProto(message: GetAuthenticatorRequest): Uint8Array {
    return GetAuthenticatorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorRequest): GetAuthenticatorRequestProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorRequest",
      value: GetAuthenticatorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGetAuthenticatorResponse(): GetAuthenticatorResponse {
  return {
    accountAuthenticator: undefined
  };
}
/**
 * MsgGetAuthenticatorResponse defines the Msg/GetAuthenticator response type.
 * @name GetAuthenticatorResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GetAuthenticatorResponse
 */
export const GetAuthenticatorResponse = {
  typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorResponse",
  is(o: any): o is GetAuthenticatorResponse {
    return o && o.$typeUrl === GetAuthenticatorResponse.typeUrl;
  },
  isAmino(o: any): o is GetAuthenticatorResponseAmino {
    return o && o.$typeUrl === GetAuthenticatorResponse.typeUrl;
  },
  encode(message: GetAuthenticatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAuthenticator !== undefined) {
      AccountAuthenticator.encode(message.accountAuthenticator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthenticatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAuthenticator = AccountAuthenticator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetAuthenticatorResponse>): GetAuthenticatorResponse {
    const message = createBaseGetAuthenticatorResponse();
    message.accountAuthenticator = object.accountAuthenticator !== undefined && object.accountAuthenticator !== null ? AccountAuthenticator.fromPartial(object.accountAuthenticator) : undefined;
    return message;
  },
  fromAmino(object: GetAuthenticatorResponseAmino): GetAuthenticatorResponse {
    const message = createBaseGetAuthenticatorResponse();
    if (object.account_authenticator !== undefined && object.account_authenticator !== null) {
      message.accountAuthenticator = AccountAuthenticator.fromAmino(object.account_authenticator);
    }
    return message;
  },
  toAmino(message: GetAuthenticatorResponse): GetAuthenticatorResponseAmino {
    const obj: any = {};
    obj.account_authenticator = message.accountAuthenticator ? AccountAuthenticator.toAmino(message.accountAuthenticator) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetAuthenticatorResponseAminoMsg): GetAuthenticatorResponse {
    return GetAuthenticatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetAuthenticatorResponseProtoMsg): GetAuthenticatorResponse {
    return GetAuthenticatorResponse.decode(message.value);
  },
  toProto(message: GetAuthenticatorResponse): Uint8Array {
    return GetAuthenticatorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetAuthenticatorResponse): GetAuthenticatorResponseProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.GetAuthenticatorResponse",
      value: GetAuthenticatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GetAuthenticatorResponse.typeUrl)) {
      return;
    }
    AccountAuthenticator.registerTypeUrl();
  }
};