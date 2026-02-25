import { GenesisState as GenesisState1 } from "../interchain_security/v1/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../interchain_security/v1/genesis";
import { GenesisState as GenesisState2 } from "../post_dispatch/v1/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../post_dispatch/v1/genesis";
import { Mailbox, MailboxAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState is the state that must be provided at genesis.
 * @name GenesisState
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.GenesisState
 */
export interface GenesisState {
  /**
   * ism_genesis
   */
  ismGenesis?: GenesisState1;
  /**
   * post_dispatch_genesis
   */
  postDispatchGenesis?: GenesisState2;
  mailboxes: Mailbox[];
  messages: GenesisMailboxMessageWrapper[];
  ismSequence: bigint;
  postDispatchSequence: bigint;
  appSequence: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/hyperlane.core.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState is the state that must be provided at genesis.
 * @name GenesisStateAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * ism_genesis
   */
  ism_genesis?: GenesisState1Amino;
  /**
   * post_dispatch_genesis
   */
  post_dispatch_genesis?: GenesisState2Amino;
  mailboxes: MailboxAmino[];
  messages: GenesisMailboxMessageWrapperAmino[];
  ism_sequence: string;
  post_dispatch_sequence: string;
  app_sequence: string;
}
export interface GenesisStateAminoMsg {
  type: "/hyperlane.core.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisMailboxMessageWrapper ...
 * @name GenesisMailboxMessageWrapper
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.GenesisMailboxMessageWrapper
 */
export interface GenesisMailboxMessageWrapper {
  mailboxId: bigint;
  messageId: string;
}
export interface GenesisMailboxMessageWrapperProtoMsg {
  typeUrl: "/hyperlane.core.v1.GenesisMailboxMessageWrapper";
  value: Uint8Array;
}
/**
 * GenesisMailboxMessageWrapper ...
 * @name GenesisMailboxMessageWrapperAmino
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.GenesisMailboxMessageWrapper
 */
export interface GenesisMailboxMessageWrapperAmino {
  mailbox_id: string;
  message_id: string;
}
export interface GenesisMailboxMessageWrapperAminoMsg {
  type: "/hyperlane.core.v1.GenesisMailboxMessageWrapper";
  value: GenesisMailboxMessageWrapperAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    ismGenesis: undefined,
    postDispatchGenesis: undefined,
    mailboxes: [],
    messages: [],
    ismSequence: BigInt(0),
    postDispatchSequence: BigInt(0),
    appSequence: BigInt(0)
  };
}
/**
 * GenesisState is the state that must be provided at genesis.
 * @name GenesisState
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/hyperlane.core.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.mailboxes) && (!o.mailboxes.length || Mailbox.is(o.mailboxes[0])) && Array.isArray(o.messages) && (!o.messages.length || GenesisMailboxMessageWrapper.is(o.messages[0])) && typeof o.ismSequence === "bigint" && typeof o.postDispatchSequence === "bigint" && typeof o.appSequence === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.mailboxes) && (!o.mailboxes.length || Mailbox.isAmino(o.mailboxes[0])) && Array.isArray(o.messages) && (!o.messages.length || GenesisMailboxMessageWrapper.isAmino(o.messages[0])) && typeof o.ism_sequence === "bigint" && typeof o.post_dispatch_sequence === "bigint" && typeof o.app_sequence === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismGenesis !== undefined) {
      GenesisState1.encode(message.ismGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.postDispatchGenesis !== undefined) {
      GenesisState2.encode(message.postDispatchGenesis, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mailboxes) {
      Mailbox.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.messages) {
      GenesisMailboxMessageWrapper.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.ismSequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.ismSequence);
    }
    if (message.postDispatchSequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.postDispatchSequence);
    }
    if (message.appSequence !== BigInt(0)) {
      writer.uint32(56).uint64(message.appSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismGenesis = GenesisState1.decode(reader, reader.uint32());
          break;
        case 2:
          message.postDispatchGenesis = GenesisState2.decode(reader, reader.uint32());
          break;
        case 3:
          message.mailboxes.push(Mailbox.decode(reader, reader.uint32()));
          break;
        case 4:
          message.messages.push(GenesisMailboxMessageWrapper.decode(reader, reader.uint32()));
          break;
        case 5:
          message.ismSequence = reader.uint64();
          break;
        case 6:
          message.postDispatchSequence = reader.uint64();
          break;
        case 7:
          message.appSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.ismGenesis = object.ismGenesis !== undefined && object.ismGenesis !== null ? GenesisState1.fromPartial(object.ismGenesis) : undefined;
    message.postDispatchGenesis = object.postDispatchGenesis !== undefined && object.postDispatchGenesis !== null ? GenesisState2.fromPartial(object.postDispatchGenesis) : undefined;
    message.mailboxes = object.mailboxes?.map(e => Mailbox.fromPartial(e)) || [];
    message.messages = object.messages?.map(e => GenesisMailboxMessageWrapper.fromPartial(e)) || [];
    message.ismSequence = object.ismSequence !== undefined && object.ismSequence !== null ? BigInt(object.ismSequence.toString()) : BigInt(0);
    message.postDispatchSequence = object.postDispatchSequence !== undefined && object.postDispatchSequence !== null ? BigInt(object.postDispatchSequence.toString()) : BigInt(0);
    message.appSequence = object.appSequence !== undefined && object.appSequence !== null ? BigInt(object.appSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.ism_genesis !== undefined && object.ism_genesis !== null) {
      message.ismGenesis = GenesisState1.fromAmino(object.ism_genesis);
    }
    if (object.post_dispatch_genesis !== undefined && object.post_dispatch_genesis !== null) {
      message.postDispatchGenesis = GenesisState2.fromAmino(object.post_dispatch_genesis);
    }
    message.mailboxes = object.mailboxes?.map(e => Mailbox.fromAmino(e)) || [];
    message.messages = object.messages?.map(e => GenesisMailboxMessageWrapper.fromAmino(e)) || [];
    if (object.ism_sequence !== undefined && object.ism_sequence !== null) {
      message.ismSequence = BigInt(object.ism_sequence);
    }
    if (object.post_dispatch_sequence !== undefined && object.post_dispatch_sequence !== null) {
      message.postDispatchSequence = BigInt(object.post_dispatch_sequence);
    }
    if (object.app_sequence !== undefined && object.app_sequence !== null) {
      message.appSequence = BigInt(object.app_sequence);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.ism_genesis = message.ismGenesis ? GenesisState1.toAmino(message.ismGenesis) : undefined;
    obj.post_dispatch_genesis = message.postDispatchGenesis ? GenesisState2.toAmino(message.postDispatchGenesis) : undefined;
    if (message.mailboxes) {
      obj.mailboxes = message.mailboxes.map(e => e ? Mailbox.toAmino(e) : undefined);
    } else {
      obj.mailboxes = message.mailboxes;
    }
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? GenesisMailboxMessageWrapper.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    obj.ism_sequence = message.ismSequence !== BigInt(0) ? message.ismSequence?.toString() : undefined;
    obj.post_dispatch_sequence = message.postDispatchSequence !== BigInt(0) ? message.postDispatchSequence?.toString() : undefined;
    obj.app_sequence = message.appSequence !== BigInt(0) ? message.appSequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    GenesisState1.registerTypeUrl();
    GenesisState2.registerTypeUrl();
    Mailbox.registerTypeUrl();
    GenesisMailboxMessageWrapper.registerTypeUrl();
  }
};
function createBaseGenesisMailboxMessageWrapper(): GenesisMailboxMessageWrapper {
  return {
    mailboxId: BigInt(0),
    messageId: ""
  };
}
/**
 * GenesisMailboxMessageWrapper ...
 * @name GenesisMailboxMessageWrapper
 * @package hyperlane.core.v1
 * @see proto type: hyperlane.core.v1.GenesisMailboxMessageWrapper
 */
export const GenesisMailboxMessageWrapper = {
  typeUrl: "/hyperlane.core.v1.GenesisMailboxMessageWrapper",
  is(o: any): o is GenesisMailboxMessageWrapper {
    return o && (o.$typeUrl === GenesisMailboxMessageWrapper.typeUrl || typeof o.mailboxId === "bigint" && typeof o.messageId === "string");
  },
  isAmino(o: any): o is GenesisMailboxMessageWrapperAmino {
    return o && (o.$typeUrl === GenesisMailboxMessageWrapper.typeUrl || typeof o.mailbox_id === "bigint" && typeof o.message_id === "string");
  },
  encode(message: GenesisMailboxMessageWrapper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== BigInt(0)) {
      writer.uint32(8).uint64(message.mailboxId);
    }
    if (message.messageId !== "") {
      writer.uint32(18).string(message.messageId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisMailboxMessageWrapper {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMailboxMessageWrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.uint64();
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
  fromPartial(object: DeepPartial<GenesisMailboxMessageWrapper>): GenesisMailboxMessageWrapper {
    const message = createBaseGenesisMailboxMessageWrapper();
    message.mailboxId = object.mailboxId !== undefined && object.mailboxId !== null ? BigInt(object.mailboxId.toString()) : BigInt(0);
    message.messageId = object.messageId ?? "";
    return message;
  },
  fromAmino(object: GenesisMailboxMessageWrapperAmino): GenesisMailboxMessageWrapper {
    const message = createBaseGenesisMailboxMessageWrapper();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = BigInt(object.mailbox_id);
    }
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    return message;
  },
  toAmino(message: GenesisMailboxMessageWrapper): GenesisMailboxMessageWrapperAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId !== BigInt(0) ? message.mailboxId?.toString() : undefined;
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    return obj;
  },
  fromAminoMsg(object: GenesisMailboxMessageWrapperAminoMsg): GenesisMailboxMessageWrapper {
    return GenesisMailboxMessageWrapper.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisMailboxMessageWrapperProtoMsg): GenesisMailboxMessageWrapper {
    return GenesisMailboxMessageWrapper.decode(message.value);
  },
  toProto(message: GenesisMailboxMessageWrapper): Uint8Array {
    return GenesisMailboxMessageWrapper.encode(message).finish();
  },
  toProtoMsg(message: GenesisMailboxMessageWrapper): GenesisMailboxMessageWrapperProtoMsg {
    return {
      typeUrl: "/hyperlane.core.v1.GenesisMailboxMessageWrapper",
      value: GenesisMailboxMessageWrapper.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};