import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateMailbox ...
 * @name MsgCreateMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgCreateMailbox
 */
export interface MsgCreateMailbox {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * local domain
   */
  localDomain: number;
  defaultIsm: string;
  /**
   * default_hook ...
   */
  defaultHook?: string;
  /**
   * required_hook ...
   */
  requiredHook?: string;
}
export interface MsgCreateMailboxProtoMsg {
  typeUrl: "/hyperlane.core.v1.MsgCreateMailbox";
  value: Uint8Array;
}
/**
 * MsgCreateMailbox ...
 * @name MsgCreateMailboxAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgCreateMailbox
 */
export interface MsgCreateMailboxAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * local domain
   */
  local_domain: number;
  default_ism: string;
  /**
   * default_hook ...
   */
  default_hook?: string;
  /**
   * required_hook ...
   */
  required_hook?: string;
}
export interface MsgCreateMailboxAminoMsg {
  type: "hyperlane/v1/MsgCreateMailbox";
  value: MsgCreateMailboxAmino;
}
/**
 * MsgCreateMailboxResponse ...
 * @name MsgCreateMailboxResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgCreateMailboxResponse
 */
export interface MsgCreateMailboxResponse {
  id: string;
}
export interface MsgCreateMailboxResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.MsgCreateMailboxResponse";
  value: Uint8Array;
}
/**
 * MsgCreateMailboxResponse ...
 * @name MsgCreateMailboxResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgCreateMailboxResponse
 */
export interface MsgCreateMailboxResponseAmino {
  id: string;
}
export interface MsgCreateMailboxResponseAminoMsg {
  type: "/hyperlane.core.v1.MsgCreateMailboxResponse";
  value: MsgCreateMailboxResponseAmino;
}
/**
 * MsgSetMailbox ...
 * @name MsgSetMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgSetMailbox
 */
export interface MsgSetMailbox {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * mailbox_id
   */
  mailboxId: string;
  /**
   * default_ism ...
   */
  defaultIsm?: string;
  /**
   * default_hook ...
   */
  defaultHook?: string;
  /**
   * required_hook ...
   */
  requiredHook?: string;
  /**
   * new_owner ...
   */
  newOwner: string;
  /**
   * renounce_ownership
   */
  renounceOwnership: boolean;
}
export interface MsgSetMailboxProtoMsg {
  typeUrl: "/hyperlane.core.v1.MsgSetMailbox";
  value: Uint8Array;
}
/**
 * MsgSetMailbox ...
 * @name MsgSetMailboxAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgSetMailbox
 */
export interface MsgSetMailboxAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * mailbox_id
   */
  mailbox_id: string;
  /**
   * default_ism ...
   */
  default_ism?: string;
  /**
   * default_hook ...
   */
  default_hook?: string;
  /**
   * required_hook ...
   */
  required_hook?: string;
  /**
   * new_owner ...
   */
  new_owner: string;
  /**
   * renounce_ownership
   */
  renounce_ownership: boolean;
}
export interface MsgSetMailboxAminoMsg {
  type: "hyperlane/v1/MsgSetMailbox";
  value: MsgSetMailboxAmino;
}
/**
 * MsgSetMailboxResponse ...
 * @name MsgSetMailboxResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgSetMailboxResponse
 */
export interface MsgSetMailboxResponse {}
export interface MsgSetMailboxResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.MsgSetMailboxResponse";
  value: Uint8Array;
}
/**
 * MsgSetMailboxResponse ...
 * @name MsgSetMailboxResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgSetMailboxResponse
 */
export interface MsgSetMailboxResponseAmino {}
export interface MsgSetMailboxResponseAminoMsg {
  type: "/hyperlane.core.v1.MsgSetMailboxResponse";
  value: MsgSetMailboxResponseAmino;
}
/**
 * MsgProcessMessage ...
 * @name MsgProcessMessage
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgProcessMessage
 */
export interface MsgProcessMessage {
  /**
   * mailbox_id ...
   */
  mailboxId: string;
  /**
   * relayer ...
   */
  relayer: string;
  /**
   * metadata ...
   */
  metadata: string;
  /**
   * message ...
   */
  message: string;
}
export interface MsgProcessMessageProtoMsg {
  typeUrl: "/hyperlane.core.v1.MsgProcessMessage";
  value: Uint8Array;
}
/**
 * MsgProcessMessage ...
 * @name MsgProcessMessageAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgProcessMessage
 */
export interface MsgProcessMessageAmino {
  /**
   * mailbox_id ...
   */
  mailbox_id: string;
  /**
   * relayer ...
   */
  relayer: string;
  /**
   * metadata ...
   */
  metadata: string;
  /**
   * message ...
   */
  message: string;
}
export interface MsgProcessMessageAminoMsg {
  type: "hyperlane/v1/MsgProcessMessage";
  value: MsgProcessMessageAmino;
}
/**
 * MsgProcessMessageResponse ...
 * @name MsgProcessMessageResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgProcessMessageResponse
 */
export interface MsgProcessMessageResponse {}
export interface MsgProcessMessageResponseProtoMsg {
  typeUrl: "/hyperlane.core.v1.MsgProcessMessageResponse";
  value: Uint8Array;
}
/**
 * MsgProcessMessageResponse ...
 * @name MsgProcessMessageResponseAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgProcessMessageResponse
 */
export interface MsgProcessMessageResponseAmino {}
export interface MsgProcessMessageResponseAminoMsg {
  type: "/hyperlane.core.v1.MsgProcessMessageResponse";
  value: MsgProcessMessageResponseAmino;
}
function createBaseMsgCreateMailbox(): MsgCreateMailbox {
  return {
    owner: "",
    localDomain: 0,
    defaultIsm: "",
    defaultHook: undefined,
    requiredHook: undefined
  };
}
/**
 * MsgCreateMailbox ...
 * @name MsgCreateMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgCreateMailbox
 */
export const MsgCreateMailbox = {
  typeUrl: "/hyperlane.core.v1.MsgCreateMailbox",
  aminoType: "hyperlane/v1/MsgCreateMailbox",
  is(o: any): o is MsgCreateMailbox {
    return o && (o.$typeUrl === MsgCreateMailbox.typeUrl || typeof o.owner === "string" && typeof o.localDomain === "number" && typeof o.defaultIsm === "string");
  },
  isAmino(o: any): o is MsgCreateMailboxAmino {
    return o && (o.$typeUrl === MsgCreateMailbox.typeUrl || typeof o.owner === "string" && typeof o.local_domain === "number" && typeof o.default_ism === "string");
  },
  encode(message: MsgCreateMailbox, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.localDomain !== 0) {
      writer.uint32(16).uint32(message.localDomain);
    }
    if (message.defaultIsm !== "") {
      writer.uint32(26).string(message.defaultIsm);
    }
    if (message.defaultHook !== undefined) {
      writer.uint32(34).string(message.defaultHook);
    }
    if (message.requiredHook !== undefined) {
      writer.uint32(42).string(message.requiredHook);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMailbox {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMailbox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.localDomain = reader.uint32();
          break;
        case 3:
          message.defaultIsm = reader.string();
          break;
        case 4:
          message.defaultHook = reader.string();
          break;
        case 5:
          message.requiredHook = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateMailbox>): MsgCreateMailbox {
    const message = createBaseMsgCreateMailbox();
    message.owner = object.owner ?? "";
    message.localDomain = object.localDomain ?? 0;
    message.defaultIsm = object.defaultIsm ?? "";
    message.defaultHook = object.defaultHook ?? undefined;
    message.requiredHook = object.requiredHook ?? undefined;
    return message;
  },
  fromAmino(object: MsgCreateMailboxAmino): MsgCreateMailbox {
    const message = createBaseMsgCreateMailbox();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.local_domain !== undefined && object.local_domain !== null) {
      message.localDomain = object.local_domain;
    }
    if (object.default_ism !== undefined && object.default_ism !== null) {
      message.defaultIsm = object.default_ism;
    }
    if (object.default_hook !== undefined && object.default_hook !== null) {
      message.defaultHook = object.default_hook;
    }
    if (object.required_hook !== undefined && object.required_hook !== null) {
      message.requiredHook = object.required_hook;
    }
    return message;
  },
  toAmino(message: MsgCreateMailbox): MsgCreateMailboxAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.local_domain = message.localDomain === 0 ? undefined : message.localDomain;
    obj.default_ism = message.defaultIsm === "" ? undefined : message.defaultIsm;
    obj.default_hook = message.defaultHook === null ? undefined : message.defaultHook;
    obj.required_hook = message.requiredHook === null ? undefined : message.requiredHook;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMailboxAminoMsg): MsgCreateMailbox {
    return MsgCreateMailbox.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateMailbox): MsgCreateMailboxAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateMailbox",
      value: MsgCreateMailbox.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateMailboxProtoMsg): MsgCreateMailbox {
    return MsgCreateMailbox.decode(message.value);
  },
  toProto(message: MsgCreateMailbox): Uint8Array {
    return MsgCreateMailbox.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMailbox): MsgCreateMailboxProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.MsgCreateMailbox",
      value: MsgCreateMailbox.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMailboxResponse(): MsgCreateMailboxResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateMailboxResponse ...
 * @name MsgCreateMailboxResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgCreateMailboxResponse
 */
export const MsgCreateMailboxResponse = {
  typeUrl: "/hyperlane.core.v1.MsgCreateMailboxResponse",
  is(o: any): o is MsgCreateMailboxResponse {
    return o && (o.$typeUrl === MsgCreateMailboxResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateMailboxResponseAmino {
    return o && (o.$typeUrl === MsgCreateMailboxResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateMailboxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMailboxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMailboxResponse();
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
  fromPartial(object: DeepPartial<MsgCreateMailboxResponse>): MsgCreateMailboxResponse {
    const message = createBaseMsgCreateMailboxResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMailboxResponseAmino): MsgCreateMailboxResponse {
    const message = createBaseMsgCreateMailboxResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateMailboxResponse): MsgCreateMailboxResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMailboxResponseAminoMsg): MsgCreateMailboxResponse {
    return MsgCreateMailboxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMailboxResponseProtoMsg): MsgCreateMailboxResponse {
    return MsgCreateMailboxResponse.decode(message.value);
  },
  toProto(message: MsgCreateMailboxResponse): Uint8Array {
    return MsgCreateMailboxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMailboxResponse): MsgCreateMailboxResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.MsgCreateMailboxResponse",
      value: MsgCreateMailboxResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetMailbox(): MsgSetMailbox {
  return {
    owner: "",
    mailboxId: "",
    defaultIsm: undefined,
    defaultHook: undefined,
    requiredHook: undefined,
    newOwner: "",
    renounceOwnership: false
  };
}
/**
 * MsgSetMailbox ...
 * @name MsgSetMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgSetMailbox
 */
export const MsgSetMailbox = {
  typeUrl: "/hyperlane.core.v1.MsgSetMailbox",
  aminoType: "hyperlane/v1/MsgSetMailbox",
  is(o: any): o is MsgSetMailbox {
    return o && (o.$typeUrl === MsgSetMailbox.typeUrl || typeof o.owner === "string" && typeof o.mailboxId === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is MsgSetMailboxAmino {
    return o && (o.$typeUrl === MsgSetMailbox.typeUrl || typeof o.owner === "string" && typeof o.mailbox_id === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: MsgSetMailbox, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.mailboxId !== "") {
      writer.uint32(18).string(message.mailboxId);
    }
    if (message.defaultIsm !== undefined) {
      writer.uint32(26).string(message.defaultIsm);
    }
    if (message.defaultHook !== undefined) {
      writer.uint32(34).string(message.defaultHook);
    }
    if (message.requiredHook !== undefined) {
      writer.uint32(42).string(message.requiredHook);
    }
    if (message.newOwner !== "") {
      writer.uint32(50).string(message.newOwner);
    }
    if (message.renounceOwnership === true) {
      writer.uint32(56).bool(message.renounceOwnership);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMailbox {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMailbox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.mailboxId = reader.string();
          break;
        case 3:
          message.defaultIsm = reader.string();
          break;
        case 4:
          message.defaultHook = reader.string();
          break;
        case 5:
          message.requiredHook = reader.string();
          break;
        case 6:
          message.newOwner = reader.string();
          break;
        case 7:
          message.renounceOwnership = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetMailbox>): MsgSetMailbox {
    const message = createBaseMsgSetMailbox();
    message.owner = object.owner ?? "";
    message.mailboxId = object.mailboxId ?? "";
    message.defaultIsm = object.defaultIsm ?? undefined;
    message.defaultHook = object.defaultHook ?? undefined;
    message.requiredHook = object.requiredHook ?? undefined;
    message.newOwner = object.newOwner ?? "";
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: MsgSetMailboxAmino): MsgSetMailbox {
    const message = createBaseMsgSetMailbox();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.default_ism !== undefined && object.default_ism !== null) {
      message.defaultIsm = object.default_ism;
    }
    if (object.default_hook !== undefined && object.default_hook !== null) {
      message.defaultHook = object.default_hook;
    }
    if (object.required_hook !== undefined && object.required_hook !== null) {
      message.requiredHook = object.required_hook;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    if (object.renounce_ownership !== undefined && object.renounce_ownership !== null) {
      message.renounceOwnership = object.renounce_ownership;
    }
    return message;
  },
  toAmino(message: MsgSetMailbox): MsgSetMailboxAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.default_ism = message.defaultIsm === null ? undefined : message.defaultIsm;
    obj.default_hook = message.defaultHook === null ? undefined : message.defaultHook;
    obj.required_hook = message.requiredHook === null ? undefined : message.requiredHook;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: MsgSetMailboxAminoMsg): MsgSetMailbox {
    return MsgSetMailbox.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetMailbox): MsgSetMailboxAminoMsg {
    return {
      type: "hyperlane/v1/MsgSetMailbox",
      value: MsgSetMailbox.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetMailboxProtoMsg): MsgSetMailbox {
    return MsgSetMailbox.decode(message.value);
  },
  toProto(message: MsgSetMailbox): Uint8Array {
    return MsgSetMailbox.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMailbox): MsgSetMailboxProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.MsgSetMailbox",
      value: MsgSetMailbox.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetMailboxResponse(): MsgSetMailboxResponse {
  return {};
}
/**
 * MsgSetMailboxResponse ...
 * @name MsgSetMailboxResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgSetMailboxResponse
 */
export const MsgSetMailboxResponse = {
  typeUrl: "/hyperlane.core.v1.MsgSetMailboxResponse",
  is(o: any): o is MsgSetMailboxResponse {
    return o && o.$typeUrl === MsgSetMailboxResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetMailboxResponseAmino {
    return o && o.$typeUrl === MsgSetMailboxResponse.typeUrl;
  },
  encode(_: MsgSetMailboxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMailboxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMailboxResponse();
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
  fromPartial(_: DeepPartial<MsgSetMailboxResponse>): MsgSetMailboxResponse {
    const message = createBaseMsgSetMailboxResponse();
    return message;
  },
  fromAmino(_: MsgSetMailboxResponseAmino): MsgSetMailboxResponse {
    const message = createBaseMsgSetMailboxResponse();
    return message;
  },
  toAmino(_: MsgSetMailboxResponse): MsgSetMailboxResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetMailboxResponseAminoMsg): MsgSetMailboxResponse {
    return MsgSetMailboxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMailboxResponseProtoMsg): MsgSetMailboxResponse {
    return MsgSetMailboxResponse.decode(message.value);
  },
  toProto(message: MsgSetMailboxResponse): Uint8Array {
    return MsgSetMailboxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMailboxResponse): MsgSetMailboxResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.MsgSetMailboxResponse",
      value: MsgSetMailboxResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgProcessMessage(): MsgProcessMessage {
  return {
    mailboxId: "",
    relayer: "",
    metadata: "",
    message: ""
  };
}
/**
 * MsgProcessMessage ...
 * @name MsgProcessMessage
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgProcessMessage
 */
export const MsgProcessMessage = {
  typeUrl: "/hyperlane.core.v1.MsgProcessMessage",
  aminoType: "hyperlane/v1/MsgProcessMessage",
  is(o: any): o is MsgProcessMessage {
    return o && (o.$typeUrl === MsgProcessMessage.typeUrl || typeof o.mailboxId === "string" && typeof o.relayer === "string" && typeof o.metadata === "string" && typeof o.message === "string");
  },
  isAmino(o: any): o is MsgProcessMessageAmino {
    return o && (o.$typeUrl === MsgProcessMessage.typeUrl || typeof o.mailbox_id === "string" && typeof o.relayer === "string" && typeof o.metadata === "string" && typeof o.message === "string");
  },
  encode(message: MsgProcessMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== "") {
      writer.uint32(10).string(message.mailboxId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgProcessMessage>): MsgProcessMessage {
    const message = createBaseMsgProcessMessage();
    message.mailboxId = object.mailboxId ?? "";
    message.relayer = object.relayer ?? "";
    message.metadata = object.metadata ?? "";
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: MsgProcessMessageAmino): MsgProcessMessage {
    const message = createBaseMsgProcessMessage();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: MsgProcessMessage): MsgProcessMessageAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: MsgProcessMessageAminoMsg): MsgProcessMessage {
    return MsgProcessMessage.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProcessMessage): MsgProcessMessageAminoMsg {
    return {
      type: "hyperlane/v1/MsgProcessMessage",
      value: MsgProcessMessage.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgProcessMessageProtoMsg): MsgProcessMessage {
    return MsgProcessMessage.decode(message.value);
  },
  toProto(message: MsgProcessMessage): Uint8Array {
    return MsgProcessMessage.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessMessage): MsgProcessMessageProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.MsgProcessMessage",
      value: MsgProcessMessage.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgProcessMessageResponse(): MsgProcessMessageResponse {
  return {};
}
/**
 * MsgProcessMessageResponse ...
 * @name MsgProcessMessageResponse
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.MsgProcessMessageResponse
 */
export const MsgProcessMessageResponse = {
  typeUrl: "/hyperlane.core.v1.MsgProcessMessageResponse",
  is(o: any): o is MsgProcessMessageResponse {
    return o && o.$typeUrl === MsgProcessMessageResponse.typeUrl;
  },
  isAmino(o: any): o is MsgProcessMessageResponseAmino {
    return o && o.$typeUrl === MsgProcessMessageResponse.typeUrl;
  },
  encode(_: MsgProcessMessageResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProcessMessageResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessMessageResponse();
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
  fromPartial(_: DeepPartial<MsgProcessMessageResponse>): MsgProcessMessageResponse {
    const message = createBaseMsgProcessMessageResponse();
    return message;
  },
  fromAmino(_: MsgProcessMessageResponseAmino): MsgProcessMessageResponse {
    const message = createBaseMsgProcessMessageResponse();
    return message;
  },
  toAmino(_: MsgProcessMessageResponse): MsgProcessMessageResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProcessMessageResponseAminoMsg): MsgProcessMessageResponse {
    return MsgProcessMessageResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProcessMessageResponseProtoMsg): MsgProcessMessageResponse {
    return MsgProcessMessageResponse.decode(message.value);
  },
  toProto(message: MsgProcessMessageResponse): Uint8Array {
    return MsgProcessMessageResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProcessMessageResponse): MsgProcessMessageResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.MsgProcessMessageResponse",
      value: MsgProcessMessageResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};