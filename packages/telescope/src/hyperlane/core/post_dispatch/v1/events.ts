import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * EventCreateMerkleTreeHook ...
 * @name EventCreateMerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateMerkleTreeHook
 */
export interface EventCreateMerkleTreeHook {
  /**
   * id ...
   */
  merkleTreeHookId: string;
  /**
   * mailbox_id ...
   */
  mailboxId: string;
  owner: string;
}
export interface EventCreateMerkleTreeHookProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateMerkleTreeHook";
  value: Uint8Array;
}
/**
 * EventCreateMerkleTreeHook ...
 * @name EventCreateMerkleTreeHookAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateMerkleTreeHook
 */
export interface EventCreateMerkleTreeHookAmino {
  /**
   * id ...
   */
  merkle_tree_hook_id: string;
  /**
   * mailbox_id ...
   */
  mailbox_id: string;
  owner: string;
}
export interface EventCreateMerkleTreeHookAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventCreateMerkleTreeHook";
  value: EventCreateMerkleTreeHookAmino;
}
/**
 * EventInsertedIntoTree ...
 * @name EventInsertedIntoTree
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventInsertedIntoTree
 */
export interface EventInsertedIntoTree {
  /**
   * message_id ...
   */
  messageId: string;
  /**
   * index ...
   */
  index: number;
  /**
   * merkle_tree_hook_id ...
   */
  merkleTreeHookId: string;
}
export interface EventInsertedIntoTreeProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventInsertedIntoTree";
  value: Uint8Array;
}
/**
 * EventInsertedIntoTree ...
 * @name EventInsertedIntoTreeAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventInsertedIntoTree
 */
export interface EventInsertedIntoTreeAmino {
  /**
   * message_id ...
   */
  message_id: string;
  /**
   * index ...
   */
  index: number;
  /**
   * merkle_tree_hook_id ...
   */
  merkle_tree_hook_id: string;
}
export interface EventInsertedIntoTreeAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventInsertedIntoTree";
  value: EventInsertedIntoTreeAmino;
}
/**
 * EventGasPayment ...
 * @name EventGasPayment
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventGasPayment
 */
export interface EventGasPayment {
  /**
   * message_id ...
   */
  messageId: string;
  /**
   * destination ...
   */
  destination: number;
  /**
   * gas_amount ...
   */
  gasAmount: string;
  /**
   * payment ...
   */
  payment: string;
  /**
   * igp_id ...
   */
  igpId: string;
}
export interface EventGasPaymentProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventGasPayment";
  value: Uint8Array;
}
/**
 * EventGasPayment ...
 * @name EventGasPaymentAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventGasPayment
 */
export interface EventGasPaymentAmino {
  /**
   * message_id ...
   */
  message_id: string;
  /**
   * destination ...
   */
  destination: number;
  /**
   * gas_amount ...
   */
  gas_amount: string;
  /**
   * payment ...
   */
  payment: string;
  /**
   * igp_id ...
   */
  igp_id: string;
}
export interface EventGasPaymentAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventGasPayment";
  value: EventGasPaymentAmino;
}
/**
 * EventCreateNoopHook ...
 * @name EventCreateNoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateNoopHook
 */
export interface EventCreateNoopHook {
  /**
   * id ...
   */
  noopHookId: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface EventCreateNoopHookProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateNoopHook";
  value: Uint8Array;
}
/**
 * EventCreateNoopHook ...
 * @name EventCreateNoopHookAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateNoopHook
 */
export interface EventCreateNoopHookAmino {
  /**
   * id ...
   */
  noop_hook_id: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface EventCreateNoopHookAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventCreateNoopHook";
  value: EventCreateNoopHookAmino;
}
/**
 * EventCreateIgp ...
 * @name EventCreateIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateIgp
 */
export interface EventCreateIgp {
  igpId: string;
  owner: string;
  denom: string;
}
export interface EventCreateIgpProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateIgp";
  value: Uint8Array;
}
/**
 * EventCreateIgp ...
 * @name EventCreateIgpAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateIgp
 */
export interface EventCreateIgpAmino {
  igp_id: string;
  owner: string;
  denom: string;
}
export interface EventCreateIgpAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventCreateIgp";
  value: EventCreateIgpAmino;
}
/**
 * EventSetIgp ...
 * @name EventSetIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventSetIgp
 */
export interface EventSetIgp {
  igpId: string;
  owner: string;
  newOwner: string;
  renounceOwnership: boolean;
}
export interface EventSetIgpProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventSetIgp";
  value: Uint8Array;
}
/**
 * EventSetIgp ...
 * @name EventSetIgpAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventSetIgp
 */
export interface EventSetIgpAmino {
  igp_id: string;
  owner: string;
  new_owner: string;
  renounce_ownership: boolean;
}
export interface EventSetIgpAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventSetIgp";
  value: EventSetIgpAmino;
}
/**
 * EventSetDestinationGasConfig ...
 * @name EventSetDestinationGasConfig
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventSetDestinationGasConfig
 */
export interface EventSetDestinationGasConfig {
  igpId: string;
  owner: string;
  remoteDomain: number;
  gasOverhead: string;
  gasPrice: string;
  tokenExchangeRate: string;
}
export interface EventSetDestinationGasConfigProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventSetDestinationGasConfig";
  value: Uint8Array;
}
/**
 * EventSetDestinationGasConfig ...
 * @name EventSetDestinationGasConfigAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventSetDestinationGasConfig
 */
export interface EventSetDestinationGasConfigAmino {
  igp_id: string;
  owner: string;
  remote_domain: number;
  gas_overhead: string;
  gas_price: string;
  token_exchange_rate: string;
}
export interface EventSetDestinationGasConfigAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventSetDestinationGasConfig";
  value: EventSetDestinationGasConfigAmino;
}
/**
 * EventClaimIgp ...
 * @name EventClaimIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventClaimIgp
 */
export interface EventClaimIgp {
  igpId: string;
  owner: string;
  amount: string;
}
export interface EventClaimIgpProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventClaimIgp";
  value: Uint8Array;
}
/**
 * EventClaimIgp ...
 * @name EventClaimIgpAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventClaimIgp
 */
export interface EventClaimIgpAmino {
  igp_id: string;
  owner: string;
  amount: string;
}
export interface EventClaimIgpAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.EventClaimIgp";
  value: EventClaimIgpAmino;
}
function createBaseEventCreateMerkleTreeHook(): EventCreateMerkleTreeHook {
  return {
    merkleTreeHookId: "",
    mailboxId: "",
    owner: ""
  };
}
/**
 * EventCreateMerkleTreeHook ...
 * @name EventCreateMerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateMerkleTreeHook
 */
export const EventCreateMerkleTreeHook = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateMerkleTreeHook",
  is(o: any): o is EventCreateMerkleTreeHook {
    return o && (o.$typeUrl === EventCreateMerkleTreeHook.typeUrl || typeof o.merkleTreeHookId === "string" && typeof o.mailboxId === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventCreateMerkleTreeHookAmino {
    return o && (o.$typeUrl === EventCreateMerkleTreeHook.typeUrl || typeof o.merkle_tree_hook_id === "string" && typeof o.mailbox_id === "string" && typeof o.owner === "string");
  },
  encode(message: EventCreateMerkleTreeHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.merkleTreeHookId !== "") {
      writer.uint32(10).string(message.merkleTreeHookId);
    }
    if (message.mailboxId !== "") {
      writer.uint32(18).string(message.mailboxId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateMerkleTreeHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateMerkleTreeHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merkleTreeHookId = reader.string();
          break;
        case 2:
          message.mailboxId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateMerkleTreeHook>): EventCreateMerkleTreeHook {
    const message = createBaseEventCreateMerkleTreeHook();
    message.merkleTreeHookId = object.merkleTreeHookId ?? "";
    message.mailboxId = object.mailboxId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventCreateMerkleTreeHookAmino): EventCreateMerkleTreeHook {
    const message = createBaseEventCreateMerkleTreeHook();
    if (object.merkle_tree_hook_id !== undefined && object.merkle_tree_hook_id !== null) {
      message.merkleTreeHookId = object.merkle_tree_hook_id;
    }
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventCreateMerkleTreeHook): EventCreateMerkleTreeHookAmino {
    const obj: any = {};
    obj.merkle_tree_hook_id = message.merkleTreeHookId === "" ? undefined : message.merkleTreeHookId;
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventCreateMerkleTreeHookAminoMsg): EventCreateMerkleTreeHook {
    return EventCreateMerkleTreeHook.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateMerkleTreeHookProtoMsg): EventCreateMerkleTreeHook {
    return EventCreateMerkleTreeHook.decode(message.value);
  },
  toProto(message: EventCreateMerkleTreeHook): Uint8Array {
    return EventCreateMerkleTreeHook.encode(message).finish();
  },
  toProtoMsg(message: EventCreateMerkleTreeHook): EventCreateMerkleTreeHookProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateMerkleTreeHook",
      value: EventCreateMerkleTreeHook.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventInsertedIntoTree(): EventInsertedIntoTree {
  return {
    messageId: "",
    index: 0,
    merkleTreeHookId: ""
  };
}
/**
 * EventInsertedIntoTree ...
 * @name EventInsertedIntoTree
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventInsertedIntoTree
 */
export const EventInsertedIntoTree = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventInsertedIntoTree",
  is(o: any): o is EventInsertedIntoTree {
    return o && (o.$typeUrl === EventInsertedIntoTree.typeUrl || typeof o.messageId === "string" && typeof o.index === "number" && typeof o.merkleTreeHookId === "string");
  },
  isAmino(o: any): o is EventInsertedIntoTreeAmino {
    return o && (o.$typeUrl === EventInsertedIntoTree.typeUrl || typeof o.message_id === "string" && typeof o.index === "number" && typeof o.merkle_tree_hook_id === "string");
  },
  encode(message: EventInsertedIntoTree, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    if (message.merkleTreeHookId !== "") {
      writer.uint32(26).string(message.merkleTreeHookId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventInsertedIntoTree {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInsertedIntoTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.string();
          break;
        case 2:
          message.index = reader.uint32();
          break;
        case 3:
          message.merkleTreeHookId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventInsertedIntoTree>): EventInsertedIntoTree {
    const message = createBaseEventInsertedIntoTree();
    message.messageId = object.messageId ?? "";
    message.index = object.index ?? 0;
    message.merkleTreeHookId = object.merkleTreeHookId ?? "";
    return message;
  },
  fromAmino(object: EventInsertedIntoTreeAmino): EventInsertedIntoTree {
    const message = createBaseEventInsertedIntoTree();
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.merkle_tree_hook_id !== undefined && object.merkle_tree_hook_id !== null) {
      message.merkleTreeHookId = object.merkle_tree_hook_id;
    }
    return message;
  },
  toAmino(message: EventInsertedIntoTree): EventInsertedIntoTreeAmino {
    const obj: any = {};
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    obj.index = message.index === 0 ? undefined : message.index;
    obj.merkle_tree_hook_id = message.merkleTreeHookId === "" ? undefined : message.merkleTreeHookId;
    return obj;
  },
  fromAminoMsg(object: EventInsertedIntoTreeAminoMsg): EventInsertedIntoTree {
    return EventInsertedIntoTree.fromAmino(object.value);
  },
  fromProtoMsg(message: EventInsertedIntoTreeProtoMsg): EventInsertedIntoTree {
    return EventInsertedIntoTree.decode(message.value);
  },
  toProto(message: EventInsertedIntoTree): Uint8Array {
    return EventInsertedIntoTree.encode(message).finish();
  },
  toProtoMsg(message: EventInsertedIntoTree): EventInsertedIntoTreeProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventInsertedIntoTree",
      value: EventInsertedIntoTree.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventGasPayment(): EventGasPayment {
  return {
    messageId: "",
    destination: 0,
    gasAmount: "",
    payment: "",
    igpId: ""
  };
}
/**
 * EventGasPayment ...
 * @name EventGasPayment
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventGasPayment
 */
export const EventGasPayment = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventGasPayment",
  is(o: any): o is EventGasPayment {
    return o && (o.$typeUrl === EventGasPayment.typeUrl || typeof o.messageId === "string" && typeof o.destination === "number" && typeof o.gasAmount === "string" && typeof o.payment === "string" && typeof o.igpId === "string");
  },
  isAmino(o: any): o is EventGasPaymentAmino {
    return o && (o.$typeUrl === EventGasPayment.typeUrl || typeof o.message_id === "string" && typeof o.destination === "number" && typeof o.gas_amount === "string" && typeof o.payment === "string" && typeof o.igp_id === "string");
  },
  encode(message: EventGasPayment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    if (message.destination !== 0) {
      writer.uint32(16).uint32(message.destination);
    }
    if (message.gasAmount !== "") {
      writer.uint32(26).string(message.gasAmount);
    }
    if (message.payment !== "") {
      writer.uint32(34).string(message.payment);
    }
    if (message.igpId !== "") {
      writer.uint32(42).string(message.igpId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventGasPayment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventGasPayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.string();
          break;
        case 2:
          message.destination = reader.uint32();
          break;
        case 3:
          message.gasAmount = reader.string();
          break;
        case 4:
          message.payment = reader.string();
          break;
        case 5:
          message.igpId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventGasPayment>): EventGasPayment {
    const message = createBaseEventGasPayment();
    message.messageId = object.messageId ?? "";
    message.destination = object.destination ?? 0;
    message.gasAmount = object.gasAmount ?? "";
    message.payment = object.payment ?? "";
    message.igpId = object.igpId ?? "";
    return message;
  },
  fromAmino(object: EventGasPaymentAmino): EventGasPayment {
    const message = createBaseEventGasPayment();
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    }
    if (object.gas_amount !== undefined && object.gas_amount !== null) {
      message.gasAmount = object.gas_amount;
    }
    if (object.payment !== undefined && object.payment !== null) {
      message.payment = object.payment;
    }
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    return message;
  },
  toAmino(message: EventGasPayment): EventGasPaymentAmino {
    const obj: any = {};
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    obj.destination = message.destination === 0 ? undefined : message.destination;
    obj.gas_amount = message.gasAmount === "" ? undefined : message.gasAmount;
    obj.payment = message.payment === "" ? undefined : message.payment;
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    return obj;
  },
  fromAminoMsg(object: EventGasPaymentAminoMsg): EventGasPayment {
    return EventGasPayment.fromAmino(object.value);
  },
  fromProtoMsg(message: EventGasPaymentProtoMsg): EventGasPayment {
    return EventGasPayment.decode(message.value);
  },
  toProto(message: EventGasPayment): Uint8Array {
    return EventGasPayment.encode(message).finish();
  },
  toProtoMsg(message: EventGasPayment): EventGasPaymentProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventGasPayment",
      value: EventGasPayment.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventCreateNoopHook(): EventCreateNoopHook {
  return {
    noopHookId: "",
    owner: ""
  };
}
/**
 * EventCreateNoopHook ...
 * @name EventCreateNoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateNoopHook
 */
export const EventCreateNoopHook = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateNoopHook",
  is(o: any): o is EventCreateNoopHook {
    return o && (o.$typeUrl === EventCreateNoopHook.typeUrl || typeof o.noopHookId === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventCreateNoopHookAmino {
    return o && (o.$typeUrl === EventCreateNoopHook.typeUrl || typeof o.noop_hook_id === "string" && typeof o.owner === "string");
  },
  encode(message: EventCreateNoopHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.noopHookId !== "") {
      writer.uint32(10).string(message.noopHookId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateNoopHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateNoopHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noopHookId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateNoopHook>): EventCreateNoopHook {
    const message = createBaseEventCreateNoopHook();
    message.noopHookId = object.noopHookId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventCreateNoopHookAmino): EventCreateNoopHook {
    const message = createBaseEventCreateNoopHook();
    if (object.noop_hook_id !== undefined && object.noop_hook_id !== null) {
      message.noopHookId = object.noop_hook_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventCreateNoopHook): EventCreateNoopHookAmino {
    const obj: any = {};
    obj.noop_hook_id = message.noopHookId === "" ? undefined : message.noopHookId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventCreateNoopHookAminoMsg): EventCreateNoopHook {
    return EventCreateNoopHook.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateNoopHookProtoMsg): EventCreateNoopHook {
    return EventCreateNoopHook.decode(message.value);
  },
  toProto(message: EventCreateNoopHook): Uint8Array {
    return EventCreateNoopHook.encode(message).finish();
  },
  toProtoMsg(message: EventCreateNoopHook): EventCreateNoopHookProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateNoopHook",
      value: EventCreateNoopHook.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventCreateIgp(): EventCreateIgp {
  return {
    igpId: "",
    owner: "",
    denom: ""
  };
}
/**
 * EventCreateIgp ...
 * @name EventCreateIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventCreateIgp
 */
export const EventCreateIgp = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateIgp",
  is(o: any): o is EventCreateIgp {
    return o && (o.$typeUrl === EventCreateIgp.typeUrl || typeof o.igpId === "string" && typeof o.owner === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is EventCreateIgpAmino {
    return o && (o.$typeUrl === EventCreateIgp.typeUrl || typeof o.igp_id === "string" && typeof o.owner === "string" && typeof o.denom === "string");
  },
  encode(message: EventCreateIgp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.igpId !== "") {
      writer.uint32(10).string(message.igpId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateIgp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateIgp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.igpId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateIgp>): EventCreateIgp {
    const message = createBaseEventCreateIgp();
    message.igpId = object.igpId ?? "";
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventCreateIgpAmino): EventCreateIgp {
    const message = createBaseEventCreateIgp();
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventCreateIgp): EventCreateIgpAmino {
    const obj: any = {};
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventCreateIgpAminoMsg): EventCreateIgp {
    return EventCreateIgp.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateIgpProtoMsg): EventCreateIgp {
    return EventCreateIgp.decode(message.value);
  },
  toProto(message: EventCreateIgp): Uint8Array {
    return EventCreateIgp.encode(message).finish();
  },
  toProtoMsg(message: EventCreateIgp): EventCreateIgpProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventCreateIgp",
      value: EventCreateIgp.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetIgp(): EventSetIgp {
  return {
    igpId: "",
    owner: "",
    newOwner: "",
    renounceOwnership: false
  };
}
/**
 * EventSetIgp ...
 * @name EventSetIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventSetIgp
 */
export const EventSetIgp = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventSetIgp",
  is(o: any): o is EventSetIgp {
    return o && (o.$typeUrl === EventSetIgp.typeUrl || typeof o.igpId === "string" && typeof o.owner === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is EventSetIgpAmino {
    return o && (o.$typeUrl === EventSetIgp.typeUrl || typeof o.igp_id === "string" && typeof o.owner === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: EventSetIgp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.igpId !== "") {
      writer.uint32(10).string(message.igpId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    if (message.renounceOwnership === true) {
      writer.uint32(32).bool(message.renounceOwnership);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetIgp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetIgp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.igpId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        case 4:
          message.renounceOwnership = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetIgp>): EventSetIgp {
    const message = createBaseEventSetIgp();
    message.igpId = object.igpId ?? "";
    message.owner = object.owner ?? "";
    message.newOwner = object.newOwner ?? "";
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: EventSetIgpAmino): EventSetIgp {
    const message = createBaseEventSetIgp();
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    if (object.renounce_ownership !== undefined && object.renounce_ownership !== null) {
      message.renounceOwnership = object.renounce_ownership;
    }
    return message;
  },
  toAmino(message: EventSetIgp): EventSetIgpAmino {
    const obj: any = {};
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: EventSetIgpAminoMsg): EventSetIgp {
    return EventSetIgp.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetIgpProtoMsg): EventSetIgp {
    return EventSetIgp.decode(message.value);
  },
  toProto(message: EventSetIgp): Uint8Array {
    return EventSetIgp.encode(message).finish();
  },
  toProtoMsg(message: EventSetIgp): EventSetIgpProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventSetIgp",
      value: EventSetIgp.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetDestinationGasConfig(): EventSetDestinationGasConfig {
  return {
    igpId: "",
    owner: "",
    remoteDomain: 0,
    gasOverhead: "",
    gasPrice: "",
    tokenExchangeRate: ""
  };
}
/**
 * EventSetDestinationGasConfig ...
 * @name EventSetDestinationGasConfig
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventSetDestinationGasConfig
 */
export const EventSetDestinationGasConfig = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventSetDestinationGasConfig",
  is(o: any): o is EventSetDestinationGasConfig {
    return o && (o.$typeUrl === EventSetDestinationGasConfig.typeUrl || typeof o.igpId === "string" && typeof o.owner === "string" && typeof o.remoteDomain === "number" && typeof o.gasOverhead === "string" && typeof o.gasPrice === "string" && typeof o.tokenExchangeRate === "string");
  },
  isAmino(o: any): o is EventSetDestinationGasConfigAmino {
    return o && (o.$typeUrl === EventSetDestinationGasConfig.typeUrl || typeof o.igp_id === "string" && typeof o.owner === "string" && typeof o.remote_domain === "number" && typeof o.gas_overhead === "string" && typeof o.gas_price === "string" && typeof o.token_exchange_rate === "string");
  },
  encode(message: EventSetDestinationGasConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.igpId !== "") {
      writer.uint32(10).string(message.igpId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.remoteDomain !== 0) {
      writer.uint32(32).uint32(message.remoteDomain);
    }
    if (message.gasOverhead !== "") {
      writer.uint32(42).string(message.gasOverhead);
    }
    if (message.gasPrice !== "") {
      writer.uint32(50).string(message.gasPrice);
    }
    if (message.tokenExchangeRate !== "") {
      writer.uint32(58).string(message.tokenExchangeRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetDestinationGasConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetDestinationGasConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.igpId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 4:
          message.remoteDomain = reader.uint32();
          break;
        case 5:
          message.gasOverhead = reader.string();
          break;
        case 6:
          message.gasPrice = reader.string();
          break;
        case 7:
          message.tokenExchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetDestinationGasConfig>): EventSetDestinationGasConfig {
    const message = createBaseEventSetDestinationGasConfig();
    message.igpId = object.igpId ?? "";
    message.owner = object.owner ?? "";
    message.remoteDomain = object.remoteDomain ?? 0;
    message.gasOverhead = object.gasOverhead ?? "";
    message.gasPrice = object.gasPrice ?? "";
    message.tokenExchangeRate = object.tokenExchangeRate ?? "";
    return message;
  },
  fromAmino(object: EventSetDestinationGasConfigAmino): EventSetDestinationGasConfig {
    const message = createBaseEventSetDestinationGasConfig();
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.remote_domain !== undefined && object.remote_domain !== null) {
      message.remoteDomain = object.remote_domain;
    }
    if (object.gas_overhead !== undefined && object.gas_overhead !== null) {
      message.gasOverhead = object.gas_overhead;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = object.gas_price;
    }
    if (object.token_exchange_rate !== undefined && object.token_exchange_rate !== null) {
      message.tokenExchangeRate = object.token_exchange_rate;
    }
    return message;
  },
  toAmino(message: EventSetDestinationGasConfig): EventSetDestinationGasConfigAmino {
    const obj: any = {};
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.remote_domain = message.remoteDomain === 0 ? undefined : message.remoteDomain;
    obj.gas_overhead = message.gasOverhead === "" ? undefined : message.gasOverhead;
    obj.gas_price = message.gasPrice === "" ? undefined : message.gasPrice;
    obj.token_exchange_rate = message.tokenExchangeRate === "" ? undefined : message.tokenExchangeRate;
    return obj;
  },
  fromAminoMsg(object: EventSetDestinationGasConfigAminoMsg): EventSetDestinationGasConfig {
    return EventSetDestinationGasConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetDestinationGasConfigProtoMsg): EventSetDestinationGasConfig {
    return EventSetDestinationGasConfig.decode(message.value);
  },
  toProto(message: EventSetDestinationGasConfig): Uint8Array {
    return EventSetDestinationGasConfig.encode(message).finish();
  },
  toProtoMsg(message: EventSetDestinationGasConfig): EventSetDestinationGasConfigProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventSetDestinationGasConfig",
      value: EventSetDestinationGasConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventClaimIgp(): EventClaimIgp {
  return {
    igpId: "",
    owner: "",
    amount: ""
  };
}
/**
 * EventClaimIgp ...
 * @name EventClaimIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.EventClaimIgp
 */
export const EventClaimIgp = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.EventClaimIgp",
  is(o: any): o is EventClaimIgp {
    return o && (o.$typeUrl === EventClaimIgp.typeUrl || typeof o.igpId === "string" && typeof o.owner === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventClaimIgpAmino {
    return o && (o.$typeUrl === EventClaimIgp.typeUrl || typeof o.igp_id === "string" && typeof o.owner === "string" && typeof o.amount === "string");
  },
  encode(message: EventClaimIgp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.igpId !== "") {
      writer.uint32(10).string(message.igpId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaimIgp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaimIgp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.igpId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventClaimIgp>): EventClaimIgp {
    const message = createBaseEventClaimIgp();
    message.igpId = object.igpId ?? "";
    message.owner = object.owner ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventClaimIgpAmino): EventClaimIgp {
    const message = createBaseEventClaimIgp();
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventClaimIgp): EventClaimIgpAmino {
    const obj: any = {};
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventClaimIgpAminoMsg): EventClaimIgp {
    return EventClaimIgp.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClaimIgpProtoMsg): EventClaimIgp {
    return EventClaimIgp.decode(message.value);
  },
  toProto(message: EventClaimIgp): Uint8Array {
    return EventClaimIgp.encode(message).finish();
  },
  toProtoMsg(message: EventClaimIgp): EventClaimIgpProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.EventClaimIgp",
      value: EventClaimIgp.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};