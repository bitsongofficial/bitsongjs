import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type.
 * @name MsgAddAuthenticator
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgAddAuthenticator
 */
export interface MsgAddAuthenticator {
  sender: string;
  authenticatorType: string;
  data: Uint8Array;
}
export interface MsgAddAuthenticatorProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticator";
  value: Uint8Array;
}
/**
 * MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type.
 * @name MsgAddAuthenticatorAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgAddAuthenticator
 */
export interface MsgAddAuthenticatorAmino {
  sender: string;
  authenticator_type: string;
  data: string;
}
export interface MsgAddAuthenticatorAminoMsg {
  type: "bitsong/smartaccount/add-authenticator";
  value: MsgAddAuthenticatorAmino;
}
/**
 * MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type.
 * @name MsgAddAuthenticatorResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgAddAuthenticatorResponse
 */
export interface MsgAddAuthenticatorResponse {
  success: boolean;
}
export interface MsgAddAuthenticatorResponseProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticatorResponse";
  value: Uint8Array;
}
/**
 * MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type.
 * @name MsgAddAuthenticatorResponseAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgAddAuthenticatorResponse
 */
export interface MsgAddAuthenticatorResponseAmino {
  success: boolean;
}
export interface MsgAddAuthenticatorResponseAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticatorResponse";
  value: MsgAddAuthenticatorResponseAmino;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 * @name MsgRemoveAuthenticator
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator
 */
export interface MsgRemoveAuthenticator {
  sender: string;
  id: bigint;
}
export interface MsgRemoveAuthenticatorProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator";
  value: Uint8Array;
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 * @name MsgRemoveAuthenticatorAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator
 */
export interface MsgRemoveAuthenticatorAmino {
  sender: string;
  id: string;
}
export interface MsgRemoveAuthenticatorAminoMsg {
  type: "bitsong/smartaccount/remove-authenticator";
  value: MsgRemoveAuthenticatorAmino;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 * @name MsgRemoveAuthenticatorResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse
 */
export interface MsgRemoveAuthenticatorResponse {
  success: boolean;
}
export interface MsgRemoveAuthenticatorResponseProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 * @name MsgRemoveAuthenticatorResponseAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse
 */
export interface MsgRemoveAuthenticatorResponseAmino {
  success: boolean;
}
export interface MsgRemoveAuthenticatorResponseAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse";
  value: MsgRemoveAuthenticatorResponseAmino;
}
/**
 * @name MsgSetActiveState
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgSetActiveState
 */
export interface MsgSetActiveState {
  sender: string;
  active: boolean;
}
export interface MsgSetActiveStateProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveState";
  value: Uint8Array;
}
/**
 * @name MsgSetActiveStateAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgSetActiveState
 */
export interface MsgSetActiveStateAmino {
  sender: string;
  active: boolean;
}
export interface MsgSetActiveStateAminoMsg {
  type: "bitsong/smartaccount/set-active-state";
  value: MsgSetActiveStateAmino;
}
/**
 * @name MsgSetActiveStateResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgSetActiveStateResponse
 */
export interface MsgSetActiveStateResponse {}
export interface MsgSetActiveStateResponseProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveStateResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetActiveStateResponseAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgSetActiveStateResponse
 */
export interface MsgSetActiveStateResponseAmino {}
export interface MsgSetActiveStateResponseAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.MsgSetActiveStateResponse";
  value: MsgSetActiveStateResponseAmino;
}
/**
 * AgAuthData is a Serialized array of signing.SignatureV2.
 * We Marshal & Unmarshal via `UnmarshalSignatureJSON` & `MarshalSignatureJSON`
 * @name AgAuthData
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.AgAuthData
 */
export interface AgAuthData {
  data: Uint8Array;
}
export interface AgAuthDataProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.AgAuthData";
  value: Uint8Array;
}
/**
 * AgAuthData is a Serialized array of signing.SignatureV2.
 * We Marshal & Unmarshal via `UnmarshalSignatureJSON` & `MarshalSignatureJSON`
 * @name AgAuthDataAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.AgAuthData
 */
export interface AgAuthDataAmino {
  data: string;
}
export interface AgAuthDataAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.AgAuthData";
  value: AgAuthDataAmino;
}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 * @name TxExtension
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.TxExtension
 */
export interface TxExtension {
  /**
   * selected_authenticators holds the authenticator_id for the chosen
   * authenticator per message.
   */
  selectedAuthenticators: bigint[];
  /**
   * optional, used to provide aggregate key signature data to module for authentication.
   */
  aggAuth?: AgAuthData;
}
export interface TxExtensionProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.TxExtension";
  value: Uint8Array;
}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 * @name TxExtensionAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.TxExtension
 */
export interface TxExtensionAmino {
  /**
   * selected_authenticators holds the authenticator_id for the chosen
   * authenticator per message.
   */
  selected_authenticators: string[];
  /**
   * optional, used to provide aggregate key signature data to module for authentication.
   */
  agg_auth?: AgAuthDataAmino;
}
export interface TxExtensionAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.TxExtension";
  value: TxExtensionAmino;
}
/**
 * BlsConfig
 * @name BlsConfig
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.BlsConfig
 */
export interface BlsConfig {
  /**
   * list of pubkeys that are points in aggregate key set
   */
  pubkeys: Uint8Array[];
  /**
   * minimum threshold of points in order for tx to be valid
   */
  threshold: bigint;
}
export interface BlsConfigProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.BlsConfig";
  value: Uint8Array;
}
/**
 * BlsConfig
 * @name BlsConfigAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.BlsConfig
 */
export interface BlsConfigAmino {
  /**
   * list of pubkeys that are points in aggregate key set
   */
  pubkeys: string[];
  /**
   * minimum threshold of points in order for tx to be valid
   */
  threshold: string;
}
export interface BlsConfigAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.BlsConfig";
  value: BlsConfigAmino;
}
function createBaseMsgAddAuthenticator(): MsgAddAuthenticator {
  return {
    sender: "",
    authenticatorType: "",
    data: new Uint8Array()
  };
}
/**
 * MsgAddAuthenticatorRequest defines the Msg/AddAuthenticator request type.
 * @name MsgAddAuthenticator
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgAddAuthenticator
 */
export const MsgAddAuthenticator = {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticator",
  aminoType: "bitsong/smartaccount/add-authenticator",
  is(o: any): o is MsgAddAuthenticator {
    return o && (o.$typeUrl === MsgAddAuthenticator.typeUrl || typeof o.sender === "string" && typeof o.authenticatorType === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is MsgAddAuthenticatorAmino {
    return o && (o.$typeUrl === MsgAddAuthenticator.typeUrl || typeof o.sender === "string" && typeof o.authenticator_type === "string" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: MsgAddAuthenticator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.authenticatorType !== "") {
      writer.uint32(18).string(message.authenticatorType);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAuthenticator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAuthenticator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.authenticatorType = reader.string();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddAuthenticator>): MsgAddAuthenticator {
    const message = createBaseMsgAddAuthenticator();
    message.sender = object.sender ?? "";
    message.authenticatorType = object.authenticatorType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgAddAuthenticatorAmino): MsgAddAuthenticator {
    const message = createBaseMsgAddAuthenticator();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.authenticator_type !== undefined && object.authenticator_type !== null) {
      message.authenticatorType = object.authenticator_type;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgAddAuthenticator): MsgAddAuthenticatorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.authenticator_type = message.authenticatorType === "" ? undefined : message.authenticatorType;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAddAuthenticatorAminoMsg): MsgAddAuthenticator {
    return MsgAddAuthenticator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddAuthenticator): MsgAddAuthenticatorAminoMsg {
    return {
      type: "bitsong/smartaccount/add-authenticator",
      value: MsgAddAuthenticator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddAuthenticatorProtoMsg): MsgAddAuthenticator {
    return MsgAddAuthenticator.decode(message.value);
  },
  toProto(message: MsgAddAuthenticator): Uint8Array {
    return MsgAddAuthenticator.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAuthenticator): MsgAddAuthenticatorProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticator",
      value: MsgAddAuthenticator.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAddAuthenticatorResponse(): MsgAddAuthenticatorResponse {
  return {
    success: false
  };
}
/**
 * MsgAddAuthenticatorResponse defines the Msg/AddAuthenticator response type.
 * @name MsgAddAuthenticatorResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgAddAuthenticatorResponse
 */
export const MsgAddAuthenticatorResponse = {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticatorResponse",
  is(o: any): o is MsgAddAuthenticatorResponse {
    return o && (o.$typeUrl === MsgAddAuthenticatorResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgAddAuthenticatorResponseAmino {
    return o && (o.$typeUrl === MsgAddAuthenticatorResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgAddAuthenticatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAuthenticatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAddAuthenticatorResponse>): MsgAddAuthenticatorResponse {
    const message = createBaseMsgAddAuthenticatorResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgAddAuthenticatorResponseAmino): MsgAddAuthenticatorResponse {
    const message = createBaseMsgAddAuthenticatorResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgAddAuthenticatorResponse): MsgAddAuthenticatorResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgAddAuthenticatorResponseAminoMsg): MsgAddAuthenticatorResponse {
    return MsgAddAuthenticatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddAuthenticatorResponseProtoMsg): MsgAddAuthenticatorResponse {
    return MsgAddAuthenticatorResponse.decode(message.value);
  },
  toProto(message: MsgAddAuthenticatorResponse): Uint8Array {
    return MsgAddAuthenticatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddAuthenticatorResponse): MsgAddAuthenticatorResponseProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticatorResponse",
      value: MsgAddAuthenticatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRemoveAuthenticator(): MsgRemoveAuthenticator {
  return {
    sender: "",
    id: BigInt(0)
  };
}
/**
 * MsgRemoveAuthenticatorRequest defines the Msg/RemoveAuthenticator request
 * type.
 * @name MsgRemoveAuthenticator
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator
 */
export const MsgRemoveAuthenticator = {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator",
  aminoType: "bitsong/smartaccount/remove-authenticator",
  is(o: any): o is MsgRemoveAuthenticator {
    return o && (o.$typeUrl === MsgRemoveAuthenticator.typeUrl || typeof o.sender === "string" && typeof o.id === "bigint");
  },
  isAmino(o: any): o is MsgRemoveAuthenticatorAmino {
    return o && (o.$typeUrl === MsgRemoveAuthenticator.typeUrl || typeof o.sender === "string" && typeof o.id === "bigint");
  },
  encode(message: MsgRemoveAuthenticator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAuthenticator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAuthenticator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveAuthenticator>): MsgRemoveAuthenticator {
    const message = createBaseMsgRemoveAuthenticator();
    message.sender = object.sender ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgRemoveAuthenticatorAmino): MsgRemoveAuthenticator {
    const message = createBaseMsgRemoveAuthenticator();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgRemoveAuthenticator): MsgRemoveAuthenticatorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAuthenticatorAminoMsg): MsgRemoveAuthenticator {
    return MsgRemoveAuthenticator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveAuthenticator): MsgRemoveAuthenticatorAminoMsg {
    return {
      type: "bitsong/smartaccount/remove-authenticator",
      value: MsgRemoveAuthenticator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveAuthenticatorProtoMsg): MsgRemoveAuthenticator {
    return MsgRemoveAuthenticator.decode(message.value);
  },
  toProto(message: MsgRemoveAuthenticator): Uint8Array {
    return MsgRemoveAuthenticator.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAuthenticator): MsgRemoveAuthenticatorProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator",
      value: MsgRemoveAuthenticator.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRemoveAuthenticatorResponse(): MsgRemoveAuthenticatorResponse {
  return {
    success: false
  };
}
/**
 * MsgRemoveAuthenticatorResponse defines the Msg/RemoveAuthenticator response
 * type.
 * @name MsgRemoveAuthenticatorResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse
 */
export const MsgRemoveAuthenticatorResponse = {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse",
  is(o: any): o is MsgRemoveAuthenticatorResponse {
    return o && (o.$typeUrl === MsgRemoveAuthenticatorResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is MsgRemoveAuthenticatorResponseAmino {
    return o && (o.$typeUrl === MsgRemoveAuthenticatorResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: MsgRemoveAuthenticatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveAuthenticatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveAuthenticatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoveAuthenticatorResponse>): MsgRemoveAuthenticatorResponse {
    const message = createBaseMsgRemoveAuthenticatorResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgRemoveAuthenticatorResponseAmino): MsgRemoveAuthenticatorResponse {
    const message = createBaseMsgRemoveAuthenticatorResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgRemoveAuthenticatorResponse): MsgRemoveAuthenticatorResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveAuthenticatorResponseAminoMsg): MsgRemoveAuthenticatorResponse {
    return MsgRemoveAuthenticatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveAuthenticatorResponseProtoMsg): MsgRemoveAuthenticatorResponse {
    return MsgRemoveAuthenticatorResponse.decode(message.value);
  },
  toProto(message: MsgRemoveAuthenticatorResponse): Uint8Array {
    return MsgRemoveAuthenticatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveAuthenticatorResponse): MsgRemoveAuthenticatorResponseProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticatorResponse",
      value: MsgRemoveAuthenticatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetActiveState(): MsgSetActiveState {
  return {
    sender: "",
    active: false
  };
}
/**
 * @name MsgSetActiveState
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgSetActiveState
 */
export const MsgSetActiveState = {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveState",
  aminoType: "bitsong/smartaccount/set-active-state",
  is(o: any): o is MsgSetActiveState {
    return o && (o.$typeUrl === MsgSetActiveState.typeUrl || typeof o.sender === "string" && typeof o.active === "boolean");
  },
  isAmino(o: any): o is MsgSetActiveStateAmino {
    return o && (o.$typeUrl === MsgSetActiveState.typeUrl || typeof o.sender === "string" && typeof o.active === "boolean");
  },
  encode(message: MsgSetActiveState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActiveState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActiveState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetActiveState>): MsgSetActiveState {
    const message = createBaseMsgSetActiveState();
    message.sender = object.sender ?? "";
    message.active = object.active ?? false;
    return message;
  },
  fromAmino(object: MsgSetActiveStateAmino): MsgSetActiveState {
    const message = createBaseMsgSetActiveState();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.active !== undefined && object.active !== null) {
      message.active = object.active;
    }
    return message;
  },
  toAmino(message: MsgSetActiveState): MsgSetActiveStateAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.active = message.active === false ? undefined : message.active;
    return obj;
  },
  fromAminoMsg(object: MsgSetActiveStateAminoMsg): MsgSetActiveState {
    return MsgSetActiveState.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetActiveState): MsgSetActiveStateAminoMsg {
    return {
      type: "bitsong/smartaccount/set-active-state",
      value: MsgSetActiveState.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetActiveStateProtoMsg): MsgSetActiveState {
    return MsgSetActiveState.decode(message.value);
  },
  toProto(message: MsgSetActiveState): Uint8Array {
    return MsgSetActiveState.encode(message).finish();
  },
  toProtoMsg(message: MsgSetActiveState): MsgSetActiveStateProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveState",
      value: MsgSetActiveState.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetActiveStateResponse(): MsgSetActiveStateResponse {
  return {};
}
/**
 * @name MsgSetActiveStateResponse
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.MsgSetActiveStateResponse
 */
export const MsgSetActiveStateResponse = {
  typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveStateResponse",
  is(o: any): o is MsgSetActiveStateResponse {
    return o && o.$typeUrl === MsgSetActiveStateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetActiveStateResponseAmino {
    return o && o.$typeUrl === MsgSetActiveStateResponse.typeUrl;
  },
  encode(_: MsgSetActiveStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetActiveStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActiveStateResponse();
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
  fromPartial(_: DeepPartial<MsgSetActiveStateResponse>): MsgSetActiveStateResponse {
    const message = createBaseMsgSetActiveStateResponse();
    return message;
  },
  fromAmino(_: MsgSetActiveStateResponseAmino): MsgSetActiveStateResponse {
    const message = createBaseMsgSetActiveStateResponse();
    return message;
  },
  toAmino(_: MsgSetActiveStateResponse): MsgSetActiveStateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetActiveStateResponseAminoMsg): MsgSetActiveStateResponse {
    return MsgSetActiveStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetActiveStateResponseProtoMsg): MsgSetActiveStateResponse {
    return MsgSetActiveStateResponse.decode(message.value);
  },
  toProto(message: MsgSetActiveStateResponse): Uint8Array {
    return MsgSetActiveStateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetActiveStateResponse): MsgSetActiveStateResponseProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveStateResponse",
      value: MsgSetActiveStateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseAgAuthData(): AgAuthData {
  return {
    data: new Uint8Array()
  };
}
/**
 * AgAuthData is a Serialized array of signing.SignatureV2.
 * We Marshal & Unmarshal via `UnmarshalSignatureJSON` & `MarshalSignatureJSON`
 * @name AgAuthData
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.AgAuthData
 */
export const AgAuthData = {
  typeUrl: "/bitsong.smartaccount.v1beta1.AgAuthData",
  is(o: any): o is AgAuthData {
    return o && (o.$typeUrl === AgAuthData.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is AgAuthDataAmino {
    return o && (o.$typeUrl === AgAuthData.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: AgAuthData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AgAuthData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgAuthData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AgAuthData>): AgAuthData {
    const message = createBaseAgAuthData();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AgAuthDataAmino): AgAuthData {
    const message = createBaseAgAuthData();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: AgAuthData): AgAuthDataAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: AgAuthDataAminoMsg): AgAuthData {
    return AgAuthData.fromAmino(object.value);
  },
  fromProtoMsg(message: AgAuthDataProtoMsg): AgAuthData {
    return AgAuthData.decode(message.value);
  },
  toProto(message: AgAuthData): Uint8Array {
    return AgAuthData.encode(message).finish();
  },
  toProtoMsg(message: AgAuthData): AgAuthDataProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.AgAuthData",
      value: AgAuthData.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTxExtension(): TxExtension {
  return {
    selectedAuthenticators: [],
    aggAuth: undefined
  };
}
/**
 * TxExtension allows for additional authenticator-specific data in
 * transactions.
 * @name TxExtension
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.TxExtension
 */
export const TxExtension = {
  typeUrl: "/bitsong.smartaccount.v1beta1.TxExtension",
  is(o: any): o is TxExtension {
    return o && (o.$typeUrl === TxExtension.typeUrl || Array.isArray(o.selectedAuthenticators) && (!o.selectedAuthenticators.length || typeof o.selectedAuthenticators[0] === "bigint"));
  },
  isAmino(o: any): o is TxExtensionAmino {
    return o && (o.$typeUrl === TxExtension.typeUrl || Array.isArray(o.selected_authenticators) && (!o.selected_authenticators.length || typeof o.selected_authenticators[0] === "bigint"));
  },
  encode(message: TxExtension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.selectedAuthenticators) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.aggAuth !== undefined) {
      AgAuthData.encode(message.aggAuth, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxExtension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxExtension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.selectedAuthenticators.push(reader.uint64());
            }
          } else {
            message.selectedAuthenticators.push(reader.uint64());
          }
          break;
        case 2:
          message.aggAuth = AgAuthData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxExtension>): TxExtension {
    const message = createBaseTxExtension();
    message.selectedAuthenticators = object.selectedAuthenticators?.map(e => BigInt(e.toString())) || [];
    message.aggAuth = object.aggAuth !== undefined && object.aggAuth !== null ? AgAuthData.fromPartial(object.aggAuth) : undefined;
    return message;
  },
  fromAmino(object: TxExtensionAmino): TxExtension {
    const message = createBaseTxExtension();
    message.selectedAuthenticators = object.selected_authenticators?.map(e => BigInt(e)) || [];
    if (object.agg_auth !== undefined && object.agg_auth !== null) {
      message.aggAuth = AgAuthData.fromAmino(object.agg_auth);
    }
    return message;
  },
  toAmino(message: TxExtension): TxExtensionAmino {
    const obj: any = {};
    if (message.selectedAuthenticators) {
      obj.selected_authenticators = message.selectedAuthenticators.map(e => e.toString());
    } else {
      obj.selected_authenticators = message.selectedAuthenticators;
    }
    obj.agg_auth = message.aggAuth ? AgAuthData.toAmino(message.aggAuth) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxExtensionAminoMsg): TxExtension {
    return TxExtension.fromAmino(object.value);
  },
  fromProtoMsg(message: TxExtensionProtoMsg): TxExtension {
    return TxExtension.decode(message.value);
  },
  toProto(message: TxExtension): Uint8Array {
    return TxExtension.encode(message).finish();
  },
  toProtoMsg(message: TxExtension): TxExtensionProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.TxExtension",
      value: TxExtension.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TxExtension.typeUrl)) {
      return;
    }
    AgAuthData.registerTypeUrl();
  }
};
function createBaseBlsConfig(): BlsConfig {
  return {
    pubkeys: [],
    threshold: BigInt(0)
  };
}
/**
 * BlsConfig
 * @name BlsConfig
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.BlsConfig
 */
export const BlsConfig = {
  typeUrl: "/bitsong.smartaccount.v1beta1.BlsConfig",
  is(o: any): o is BlsConfig {
    return o && (o.$typeUrl === BlsConfig.typeUrl || Array.isArray(o.pubkeys) && (!o.pubkeys.length || o.pubkeys[0] instanceof Uint8Array || typeof o.pubkeys[0] === "string") && typeof o.threshold === "bigint");
  },
  isAmino(o: any): o is BlsConfigAmino {
    return o && (o.$typeUrl === BlsConfig.typeUrl || Array.isArray(o.pubkeys) && (!o.pubkeys.length || o.pubkeys[0] instanceof Uint8Array || typeof o.pubkeys[0] === "string") && typeof o.threshold === "bigint");
  },
  encode(message: BlsConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pubkeys) {
      writer.uint32(10).bytes(v!);
    }
    if (message.threshold !== BigInt(0)) {
      writer.uint32(16).uint64(message.threshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlsConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlsConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkeys.push(reader.bytes());
          break;
        case 2:
          message.threshold = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BlsConfig>): BlsConfig {
    const message = createBaseBlsConfig();
    message.pubkeys = object.pubkeys?.map(e => e) || [];
    message.threshold = object.threshold !== undefined && object.threshold !== null ? BigInt(object.threshold.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlsConfigAmino): BlsConfig {
    const message = createBaseBlsConfig();
    message.pubkeys = object.pubkeys?.map(e => bytesFromBase64(e)) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = BigInt(object.threshold);
    }
    return message;
  },
  toAmino(message: BlsConfig): BlsConfigAmino {
    const obj: any = {};
    if (message.pubkeys) {
      obj.pubkeys = message.pubkeys.map(e => base64FromBytes(e));
    } else {
      obj.pubkeys = message.pubkeys;
    }
    obj.threshold = message.threshold !== BigInt(0) ? message.threshold?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlsConfigAminoMsg): BlsConfig {
    return BlsConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: BlsConfigProtoMsg): BlsConfig {
    return BlsConfig.decode(message.value);
  },
  toProto(message: BlsConfig): Uint8Array {
    return BlsConfig.encode(message).finish();
  },
  toProtoMsg(message: BlsConfig): BlsConfigProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.BlsConfig",
      value: BlsConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};