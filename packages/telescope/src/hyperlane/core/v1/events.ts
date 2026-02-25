import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventDispatch ...
 * @name EventDispatch
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventDispatch
 */
export interface EventDispatch {
  /**
   * origin_mailbox_id ...
   */
  originMailboxId: string;
  /**
   * sender ...
   */
  sender: string;
  /**
   * destination ...
   */
  destination: number;
  /**
   * recipient ...
   */
  recipient: string;
  /**
   * message ...
   */
  message: string;
}
export interface EventDispatchProtoMsg {
  typeUrl: "/hyperlane.core.v1.EventDispatch";
  value: Uint8Array;
}
/**
 * EventDispatch ...
 * @name EventDispatchAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventDispatch
 */
export interface EventDispatchAmino {
  /**
   * origin_mailbox_id ...
   */
  origin_mailbox_id: string;
  /**
   * sender ...
   */
  sender: string;
  /**
   * destination ...
   */
  destination: number;
  /**
   * recipient ...
   */
  recipient: string;
  /**
   * message ...
   */
  message: string;
}
export interface EventDispatchAminoMsg {
  type: "/hyperlane.core.v1.EventDispatch";
  value: EventDispatchAmino;
}
/**
 * EventProcess ...
 * @name EventProcess
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventProcess
 */
export interface EventProcess {
  /**
   * origin_mailbox_id ...
   */
  originMailboxId: string;
  /**
   * origin ...
   */
  origin: number;
  /**
   * sender ...
   */
  sender: string;
  /**
   * recipient ...
   */
  recipient: string;
  /**
   * message_id ...
   */
  messageId: string;
  /**
   * message ...
   */
  message: string;
}
export interface EventProcessProtoMsg {
  typeUrl: "/hyperlane.core.v1.EventProcess";
  value: Uint8Array;
}
/**
 * EventProcess ...
 * @name EventProcessAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventProcess
 */
export interface EventProcessAmino {
  /**
   * origin_mailbox_id ...
   */
  origin_mailbox_id: string;
  /**
   * origin ...
   */
  origin: number;
  /**
   * sender ...
   */
  sender: string;
  /**
   * recipient ...
   */
  recipient: string;
  /**
   * message_id ...
   */
  message_id: string;
  /**
   * message ...
   */
  message: string;
}
export interface EventProcessAminoMsg {
  type: "/hyperlane.core.v1.EventProcess";
  value: EventProcessAmino;
}
/**
 * EventCreateMailbox ...
 * @name EventCreateMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventCreateMailbox
 */
export interface EventCreateMailbox {
  /**
   * mailbox_id ...
   */
  mailboxId: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * default_ism ...
   */
  defaultIsm: string;
  /**
   * default_hook ...
   */
  defaultHook?: string;
  /**
   * required_hook ...
   */
  requiredHook?: string;
  /**
   * local_domain ...
   */
  localDomain: number;
}
export interface EventCreateMailboxProtoMsg {
  typeUrl: "/hyperlane.core.v1.EventCreateMailbox";
  value: Uint8Array;
}
/**
 * EventCreateMailbox ...
 * @name EventCreateMailboxAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventCreateMailbox
 */
export interface EventCreateMailboxAmino {
  /**
   * mailbox_id ...
   */
  mailbox_id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * default_ism ...
   */
  default_ism: string;
  /**
   * default_hook ...
   */
  default_hook?: string;
  /**
   * required_hook ...
   */
  required_hook?: string;
  /**
   * local_domain ...
   */
  local_domain: number;
}
export interface EventCreateMailboxAminoMsg {
  type: "/hyperlane.core.v1.EventCreateMailbox";
  value: EventCreateMailboxAmino;
}
/**
 * EventSetMailbox ...
 * @name EventSetMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventSetMailbox
 */
export interface EventSetMailbox {
  /**
   * mailbox_id ...
   */
  mailboxId: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * default_ism ...
   */
  defaultIsm?: string;
  /**
   * default_hook ...
   */
  defaultHook?: string;
  /**
   * new_owner ...
   */
  newOwner: string;
  /**
   * renounce_ownership ...
   */
  renounceOwnership: boolean;
}
export interface EventSetMailboxProtoMsg {
  typeUrl: "/hyperlane.core.v1.EventSetMailbox";
  value: Uint8Array;
}
/**
 * EventSetMailbox ...
 * @name EventSetMailboxAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventSetMailbox
 */
export interface EventSetMailboxAmino {
  /**
   * mailbox_id ...
   */
  mailbox_id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * default_ism ...
   */
  default_ism?: string;
  /**
   * default_hook ...
   */
  default_hook?: string;
  /**
   * new_owner ...
   */
  new_owner: string;
  /**
   * renounce_ownership ...
   */
  renounce_ownership: boolean;
}
export interface EventSetMailboxAminoMsg {
  type: "/hyperlane.core.v1.EventSetMailbox";
  value: EventSetMailboxAmino;
}
function createBaseEventDispatch(): EventDispatch {
  return {
    originMailboxId: "",
    sender: "",
    destination: 0,
    recipient: "",
    message: ""
  };
}
/**
 * EventDispatch ...
 * @name EventDispatch
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventDispatch
 */
export const EventDispatch = {
  typeUrl: "/hyperlane.core.v1.EventDispatch",
  is(o: any): o is EventDispatch {
    return o && (o.$typeUrl === EventDispatch.typeUrl || typeof o.originMailboxId === "string" && typeof o.sender === "string" && typeof o.destination === "number" && typeof o.recipient === "string" && typeof o.message === "string");
  },
  isAmino(o: any): o is EventDispatchAmino {
    return o && (o.$typeUrl === EventDispatch.typeUrl || typeof o.origin_mailbox_id === "string" && typeof o.sender === "string" && typeof o.destination === "number" && typeof o.recipient === "string" && typeof o.message === "string");
  },
  encode(message: EventDispatch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.originMailboxId !== "") {
      writer.uint32(10).string(message.originMailboxId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.destination !== 0) {
      writer.uint32(24).uint32(message.destination);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.message !== "") {
      writer.uint32(42).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDispatch {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDispatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originMailboxId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.destination = reader.uint32();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventDispatch>): EventDispatch {
    const message = createBaseEventDispatch();
    message.originMailboxId = object.originMailboxId ?? "";
    message.sender = object.sender ?? "";
    message.destination = object.destination ?? 0;
    message.recipient = object.recipient ?? "";
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: EventDispatchAmino): EventDispatch {
    const message = createBaseEventDispatch();
    if (object.origin_mailbox_id !== undefined && object.origin_mailbox_id !== null) {
      message.originMailboxId = object.origin_mailbox_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: EventDispatch): EventDispatchAmino {
    const obj: any = {};
    obj.origin_mailbox_id = message.originMailboxId === "" ? undefined : message.originMailboxId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.destination = message.destination === 0 ? undefined : message.destination;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: EventDispatchAminoMsg): EventDispatch {
    return EventDispatch.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDispatchProtoMsg): EventDispatch {
    return EventDispatch.decode(message.value);
  },
  toProto(message: EventDispatch): Uint8Array {
    return EventDispatch.encode(message).finish();
  },
  toProtoMsg(message: EventDispatch): EventDispatchProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.EventDispatch",
      value: EventDispatch.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventProcess(): EventProcess {
  return {
    originMailboxId: "",
    origin: 0,
    sender: "",
    recipient: "",
    messageId: "",
    message: ""
  };
}
/**
 * EventProcess ...
 * @name EventProcess
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventProcess
 */
export const EventProcess = {
  typeUrl: "/hyperlane.core.v1.EventProcess",
  is(o: any): o is EventProcess {
    return o && (o.$typeUrl === EventProcess.typeUrl || typeof o.originMailboxId === "string" && typeof o.origin === "number" && typeof o.sender === "string" && typeof o.recipient === "string" && typeof o.messageId === "string" && typeof o.message === "string");
  },
  isAmino(o: any): o is EventProcessAmino {
    return o && (o.$typeUrl === EventProcess.typeUrl || typeof o.origin_mailbox_id === "string" && typeof o.origin === "number" && typeof o.sender === "string" && typeof o.recipient === "string" && typeof o.message_id === "string" && typeof o.message === "string");
  },
  encode(message: EventProcess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.originMailboxId !== "") {
      writer.uint32(10).string(message.originMailboxId);
    }
    if (message.origin !== 0) {
      writer.uint32(16).uint32(message.origin);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.messageId !== "") {
      writer.uint32(42).string(message.messageId);
    }
    if (message.message !== "") {
      writer.uint32(50).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProcess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProcess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.originMailboxId = reader.string();
          break;
        case 2:
          message.origin = reader.uint32();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.messageId = reader.string();
          break;
        case 6:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventProcess>): EventProcess {
    const message = createBaseEventProcess();
    message.originMailboxId = object.originMailboxId ?? "";
    message.origin = object.origin ?? 0;
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.messageId = object.messageId ?? "";
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: EventProcessAmino): EventProcess {
    const message = createBaseEventProcess();
    if (object.origin_mailbox_id !== undefined && object.origin_mailbox_id !== null) {
      message.originMailboxId = object.origin_mailbox_id;
    }
    if (object.origin !== undefined && object.origin !== null) {
      message.origin = object.origin;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: EventProcess): EventProcessAmino {
    const obj: any = {};
    obj.origin_mailbox_id = message.originMailboxId === "" ? undefined : message.originMailboxId;
    obj.origin = message.origin === 0 ? undefined : message.origin;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: EventProcessAminoMsg): EventProcess {
    return EventProcess.fromAmino(object.value);
  },
  fromProtoMsg(message: EventProcessProtoMsg): EventProcess {
    return EventProcess.decode(message.value);
  },
  toProto(message: EventProcess): Uint8Array {
    return EventProcess.encode(message).finish();
  },
  toProtoMsg(message: EventProcess): EventProcessProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.EventProcess",
      value: EventProcess.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventCreateMailbox(): EventCreateMailbox {
  return {
    mailboxId: "",
    owner: "",
    defaultIsm: "",
    defaultHook: undefined,
    requiredHook: undefined,
    localDomain: 0
  };
}
/**
 * EventCreateMailbox ...
 * @name EventCreateMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventCreateMailbox
 */
export const EventCreateMailbox = {
  typeUrl: "/hyperlane.core.v1.EventCreateMailbox",
  is(o: any): o is EventCreateMailbox {
    return o && (o.$typeUrl === EventCreateMailbox.typeUrl || typeof o.mailboxId === "string" && typeof o.owner === "string" && typeof o.defaultIsm === "string" && typeof o.localDomain === "number");
  },
  isAmino(o: any): o is EventCreateMailboxAmino {
    return o && (o.$typeUrl === EventCreateMailbox.typeUrl || typeof o.mailbox_id === "string" && typeof o.owner === "string" && typeof o.default_ism === "string" && typeof o.local_domain === "number");
  },
  encode(message: EventCreateMailbox, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== "") {
      writer.uint32(10).string(message.mailboxId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
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
    if (message.localDomain !== 0) {
      writer.uint32(48).uint32(message.localDomain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateMailbox {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateMailbox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
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
          message.localDomain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateMailbox>): EventCreateMailbox {
    const message = createBaseEventCreateMailbox();
    message.mailboxId = object.mailboxId ?? "";
    message.owner = object.owner ?? "";
    message.defaultIsm = object.defaultIsm ?? "";
    message.defaultHook = object.defaultHook ?? undefined;
    message.requiredHook = object.requiredHook ?? undefined;
    message.localDomain = object.localDomain ?? 0;
    return message;
  },
  fromAmino(object: EventCreateMailboxAmino): EventCreateMailbox {
    const message = createBaseEventCreateMailbox();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
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
    if (object.local_domain !== undefined && object.local_domain !== null) {
      message.localDomain = object.local_domain;
    }
    return message;
  },
  toAmino(message: EventCreateMailbox): EventCreateMailboxAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.default_ism = message.defaultIsm === "" ? undefined : message.defaultIsm;
    obj.default_hook = message.defaultHook === null ? undefined : message.defaultHook;
    obj.required_hook = message.requiredHook === null ? undefined : message.requiredHook;
    obj.local_domain = message.localDomain === 0 ? undefined : message.localDomain;
    return obj;
  },
  fromAminoMsg(object: EventCreateMailboxAminoMsg): EventCreateMailbox {
    return EventCreateMailbox.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateMailboxProtoMsg): EventCreateMailbox {
    return EventCreateMailbox.decode(message.value);
  },
  toProto(message: EventCreateMailbox): Uint8Array {
    return EventCreateMailbox.encode(message).finish();
  },
  toProtoMsg(message: EventCreateMailbox): EventCreateMailboxProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.EventCreateMailbox",
      value: EventCreateMailbox.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetMailbox(): EventSetMailbox {
  return {
    mailboxId: "",
    owner: "",
    defaultIsm: undefined,
    defaultHook: undefined,
    newOwner: "",
    renounceOwnership: false
  };
}
/**
 * EventSetMailbox ...
 * @name EventSetMailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.EventSetMailbox
 */
export const EventSetMailbox = {
  typeUrl: "/hyperlane.core.v1.EventSetMailbox",
  is(o: any): o is EventSetMailbox {
    return o && (o.$typeUrl === EventSetMailbox.typeUrl || typeof o.mailboxId === "string" && typeof o.owner === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is EventSetMailboxAmino {
    return o && (o.$typeUrl === EventSetMailbox.typeUrl || typeof o.mailbox_id === "string" && typeof o.owner === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: EventSetMailbox, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== "") {
      writer.uint32(10).string(message.mailboxId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.defaultIsm !== undefined) {
      writer.uint32(26).string(message.defaultIsm);
    }
    if (message.defaultHook !== undefined) {
      writer.uint32(34).string(message.defaultHook);
    }
    if (message.newOwner !== "") {
      writer.uint32(42).string(message.newOwner);
    }
    if (message.renounceOwnership === true) {
      writer.uint32(48).bool(message.renounceOwnership);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetMailbox {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetMailbox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.defaultIsm = reader.string();
          break;
        case 4:
          message.defaultHook = reader.string();
          break;
        case 5:
          message.newOwner = reader.string();
          break;
        case 6:
          message.renounceOwnership = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetMailbox>): EventSetMailbox {
    const message = createBaseEventSetMailbox();
    message.mailboxId = object.mailboxId ?? "";
    message.owner = object.owner ?? "";
    message.defaultIsm = object.defaultIsm ?? undefined;
    message.defaultHook = object.defaultHook ?? undefined;
    message.newOwner = object.newOwner ?? "";
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: EventSetMailboxAmino): EventSetMailbox {
    const message = createBaseEventSetMailbox();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.default_ism !== undefined && object.default_ism !== null) {
      message.defaultIsm = object.default_ism;
    }
    if (object.default_hook !== undefined && object.default_hook !== null) {
      message.defaultHook = object.default_hook;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    if (object.renounce_ownership !== undefined && object.renounce_ownership !== null) {
      message.renounceOwnership = object.renounce_ownership;
    }
    return message;
  },
  toAmino(message: EventSetMailbox): EventSetMailboxAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.default_ism = message.defaultIsm === null ? undefined : message.defaultIsm;
    obj.default_hook = message.defaultHook === null ? undefined : message.defaultHook;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: EventSetMailboxAminoMsg): EventSetMailbox {
    return EventSetMailbox.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetMailboxProtoMsg): EventSetMailbox {
    return EventSetMailbox.decode(message.value);
  },
  toProto(message: EventSetMailbox): Uint8Array {
    return EventSetMailbox.encode(message).finish();
  },
  toProtoMsg(message: EventSetMailbox): EventSetMailboxProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.EventSetMailbox",
      value: EventSetMailbox.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};