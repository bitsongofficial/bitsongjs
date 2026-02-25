import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Mailbox ...
 * @name Mailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.Mailbox
 */
export interface Mailbox {
  id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * message_sent ...
   */
  messageSent: number;
  /**
   * message_received ...
   */
  messageReceived: number;
  /**
   * default_ism ...
   */
  defaultIsm: string;
  /**
   * default_hook
   */
  defaultHook?: string;
  /**
   * required_hook
   */
  requiredHook?: string;
  /**
   * domain
   */
  localDomain: number;
}
export interface MailboxProtoMsg {
  typeUrl: "/hyperlane.core.v1.Mailbox";
  value: Uint8Array;
}
/**
 * Mailbox ...
 * @name MailboxAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.Mailbox
 */
export interface MailboxAmino {
  id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * message_sent ...
   */
  message_sent: number;
  /**
   * message_received ...
   */
  message_received: number;
  /**
   * default_ism ...
   */
  default_ism: string;
  /**
   * default_hook
   */
  default_hook?: string;
  /**
   * required_hook
   */
  required_hook?: string;
  /**
   * domain
   */
  local_domain: number;
}
export interface MailboxAminoMsg {
  type: "/hyperlane.core.v1.Mailbox";
  value: MailboxAmino;
}
function createBaseMailbox(): Mailbox {
  return {
    id: "",
    owner: "",
    messageSent: 0,
    messageReceived: 0,
    defaultIsm: "",
    defaultHook: undefined,
    requiredHook: undefined,
    localDomain: 0
  };
}
/**
 * Mailbox ...
 * @name Mailbox
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.Mailbox
 */
export const Mailbox = {
  typeUrl: "/hyperlane.core.v1.Mailbox",
  is(o: any): o is Mailbox {
    return o && (o.$typeUrl === Mailbox.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && typeof o.messageSent === "number" && typeof o.messageReceived === "number" && typeof o.defaultIsm === "string" && typeof o.localDomain === "number");
  },
  isAmino(o: any): o is MailboxAmino {
    return o && (o.$typeUrl === Mailbox.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && typeof o.message_sent === "number" && typeof o.message_received === "number" && typeof o.default_ism === "string" && typeof o.local_domain === "number");
  },
  encode(message: Mailbox, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.messageSent !== 0) {
      writer.uint32(24).uint32(message.messageSent);
    }
    if (message.messageReceived !== 0) {
      writer.uint32(32).uint32(message.messageReceived);
    }
    if (message.defaultIsm !== "") {
      writer.uint32(42).string(message.defaultIsm);
    }
    if (message.defaultHook !== undefined) {
      writer.uint32(50).string(message.defaultHook);
    }
    if (message.requiredHook !== undefined) {
      writer.uint32(58).string(message.requiredHook);
    }
    if (message.localDomain !== 0) {
      writer.uint32(64).uint32(message.localDomain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Mailbox {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMailbox();
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
          message.messageSent = reader.uint32();
          break;
        case 4:
          message.messageReceived = reader.uint32();
          break;
        case 5:
          message.defaultIsm = reader.string();
          break;
        case 6:
          message.defaultHook = reader.string();
          break;
        case 7:
          message.requiredHook = reader.string();
          break;
        case 8:
          message.localDomain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Mailbox>): Mailbox {
    const message = createBaseMailbox();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.messageSent = object.messageSent ?? 0;
    message.messageReceived = object.messageReceived ?? 0;
    message.defaultIsm = object.defaultIsm ?? "";
    message.defaultHook = object.defaultHook ?? undefined;
    message.requiredHook = object.requiredHook ?? undefined;
    message.localDomain = object.localDomain ?? 0;
    return message;
  },
  fromAmino(object: MailboxAmino): Mailbox {
    const message = createBaseMailbox();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.message_sent !== undefined && object.message_sent !== null) {
      message.messageSent = object.message_sent;
    }
    if (object.message_received !== undefined && object.message_received !== null) {
      message.messageReceived = object.message_received;
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
  toAmino(message: Mailbox): MailboxAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.message_sent = message.messageSent === 0 ? undefined : message.messageSent;
    obj.message_received = message.messageReceived === 0 ? undefined : message.messageReceived;
    obj.default_ism = message.defaultIsm === "" ? undefined : message.defaultIsm;
    obj.default_hook = message.defaultHook === null ? undefined : message.defaultHook;
    obj.required_hook = message.requiredHook === null ? undefined : message.requiredHook;
    obj.local_domain = message.localDomain === 0 ? undefined : message.localDomain;
    return obj;
  },
  fromAminoMsg(object: MailboxAminoMsg): Mailbox {
    return Mailbox.fromAmino(object.value);
  },
  fromProtoMsg(message: MailboxProtoMsg): Mailbox {
    return Mailbox.decode(message.value);
  },
  toProto(message: Mailbox): Uint8Array {
    return Mailbox.encode(message).finish();
  },
  toProtoMsg(message: Mailbox): MailboxProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.Mailbox",
      value: Mailbox.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};