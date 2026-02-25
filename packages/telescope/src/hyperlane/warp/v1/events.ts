import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventCreateSyntheticToken ...
 * @name EventCreateSyntheticToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventCreateSyntheticToken
 */
export interface EventCreateSyntheticToken {
  tokenId: string;
  owner: string;
  originMailbox: string;
  originDenom: string;
}
export interface EventCreateSyntheticTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.EventCreateSyntheticToken";
  value: Uint8Array;
}
/**
 * EventCreateSyntheticToken ...
 * @name EventCreateSyntheticTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventCreateSyntheticToken
 */
export interface EventCreateSyntheticTokenAmino {
  token_id: string;
  owner: string;
  origin_mailbox: string;
  origin_denom: string;
}
export interface EventCreateSyntheticTokenAminoMsg {
  type: "/hyperlane.warp.v1.EventCreateSyntheticToken";
  value: EventCreateSyntheticTokenAmino;
}
/**
 * EventCreateCollateralToken ...
 * @name EventCreateCollateralToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventCreateCollateralToken
 */
export interface EventCreateCollateralToken {
  tokenId: string;
  owner: string;
  originMailbox: string;
  originDenom: string;
}
export interface EventCreateCollateralTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.EventCreateCollateralToken";
  value: Uint8Array;
}
/**
 * EventCreateCollateralToken ...
 * @name EventCreateCollateralTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventCreateCollateralToken
 */
export interface EventCreateCollateralTokenAmino {
  token_id: string;
  owner: string;
  origin_mailbox: string;
  origin_denom: string;
}
export interface EventCreateCollateralTokenAminoMsg {
  type: "/hyperlane.warp.v1.EventCreateCollateralToken";
  value: EventCreateCollateralTokenAmino;
}
/**
 * EventSetToken ...
 * @name EventSetToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventSetToken
 */
export interface EventSetToken {
  tokenId: string;
  owner: string;
  ismId?: string;
  newOwner: string;
  renounceOwnership: boolean;
}
export interface EventSetTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.EventSetToken";
  value: Uint8Array;
}
/**
 * EventSetToken ...
 * @name EventSetTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventSetToken
 */
export interface EventSetTokenAmino {
  token_id: string;
  owner: string;
  ism_id?: string;
  new_owner: string;
  renounce_ownership: boolean;
}
export interface EventSetTokenAminoMsg {
  type: "/hyperlane.warp.v1.EventSetToken";
  value: EventSetTokenAmino;
}
/**
 * EventEnrollRemoteRouter ...
 * @name EventEnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventEnrollRemoteRouter
 */
export interface EventEnrollRemoteRouter {
  tokenId: string;
  owner: string;
  receiverDomain: number;
  receiverContract: string;
  gas: string;
}
export interface EventEnrollRemoteRouterProtoMsg {
  typeUrl: "/hyperlane.warp.v1.EventEnrollRemoteRouter";
  value: Uint8Array;
}
/**
 * EventEnrollRemoteRouter ...
 * @name EventEnrollRemoteRouterAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventEnrollRemoteRouter
 */
export interface EventEnrollRemoteRouterAmino {
  token_id: string;
  owner: string;
  receiver_domain: number;
  receiver_contract: string;
  gas: string;
}
export interface EventEnrollRemoteRouterAminoMsg {
  type: "/hyperlane.warp.v1.EventEnrollRemoteRouter";
  value: EventEnrollRemoteRouterAmino;
}
/**
 * EventUnrollRemoteRouter ...
 * @name EventUnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventUnrollRemoteRouter
 */
export interface EventUnrollRemoteRouter {
  tokenId: string;
  owner: string;
  receiverDomain: number;
}
export interface EventUnrollRemoteRouterProtoMsg {
  typeUrl: "/hyperlane.warp.v1.EventUnrollRemoteRouter";
  value: Uint8Array;
}
/**
 * EventUnrollRemoteRouter ...
 * @name EventUnrollRemoteRouterAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventUnrollRemoteRouter
 */
export interface EventUnrollRemoteRouterAmino {
  token_id: string;
  owner: string;
  receiver_domain: number;
}
export interface EventUnrollRemoteRouterAminoMsg {
  type: "/hyperlane.warp.v1.EventUnrollRemoteRouter";
  value: EventUnrollRemoteRouterAmino;
}
/**
 * EventSendRemoteTransfer ...
 * @name EventSendRemoteTransfer
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventSendRemoteTransfer
 */
export interface EventSendRemoteTransfer {
  tokenId: string;
  sender: string;
  destinationDomain: number;
  recipient: string;
  amount: string;
}
export interface EventSendRemoteTransferProtoMsg {
  typeUrl: "/hyperlane.warp.v1.EventSendRemoteTransfer";
  value: Uint8Array;
}
/**
 * EventSendRemoteTransfer ...
 * @name EventSendRemoteTransferAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventSendRemoteTransfer
 */
export interface EventSendRemoteTransferAmino {
  token_id: string;
  sender: string;
  destination_domain: number;
  recipient: string;
  amount: string;
}
export interface EventSendRemoteTransferAminoMsg {
  type: "/hyperlane.warp.v1.EventSendRemoteTransfer";
  value: EventSendRemoteTransferAmino;
}
/**
 * EventReceiveRemoteTransfer ...
 * @name EventReceiveRemoteTransfer
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventReceiveRemoteTransfer
 */
export interface EventReceiveRemoteTransfer {
  tokenId: string;
  sender: string;
  originDomain: number;
  recipient: string;
  amount: string;
}
export interface EventReceiveRemoteTransferProtoMsg {
  typeUrl: "/hyperlane.warp.v1.EventReceiveRemoteTransfer";
  value: Uint8Array;
}
/**
 * EventReceiveRemoteTransfer ...
 * @name EventReceiveRemoteTransferAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventReceiveRemoteTransfer
 */
export interface EventReceiveRemoteTransferAmino {
  token_id: string;
  sender: string;
  origin_domain: number;
  recipient: string;
  amount: string;
}
export interface EventReceiveRemoteTransferAminoMsg {
  type: "/hyperlane.warp.v1.EventReceiveRemoteTransfer";
  value: EventReceiveRemoteTransferAmino;
}
function createBaseEventCreateSyntheticToken(): EventCreateSyntheticToken {
  return {
    tokenId: "",
    owner: "",
    originMailbox: "",
    originDenom: ""
  };
}
/**
 * EventCreateSyntheticToken ...
 * @name EventCreateSyntheticToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventCreateSyntheticToken
 */
export const EventCreateSyntheticToken = {
  typeUrl: "/hyperlane.warp.v1.EventCreateSyntheticToken",
  is(o: any): o is EventCreateSyntheticToken {
    return o && (o.$typeUrl === EventCreateSyntheticToken.typeUrl || typeof o.tokenId === "string" && typeof o.owner === "string" && typeof o.originMailbox === "string" && typeof o.originDenom === "string");
  },
  isAmino(o: any): o is EventCreateSyntheticTokenAmino {
    return o && (o.$typeUrl === EventCreateSyntheticToken.typeUrl || typeof o.token_id === "string" && typeof o.owner === "string" && typeof o.origin_mailbox === "string" && typeof o.origin_denom === "string");
  },
  encode(message: EventCreateSyntheticToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.originMailbox !== "") {
      writer.uint32(26).string(message.originMailbox);
    }
    if (message.originDenom !== "") {
      writer.uint32(34).string(message.originDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateSyntheticToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateSyntheticToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.originMailbox = reader.string();
          break;
        case 4:
          message.originDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateSyntheticToken>): EventCreateSyntheticToken {
    const message = createBaseEventCreateSyntheticToken();
    message.tokenId = object.tokenId ?? "";
    message.owner = object.owner ?? "";
    message.originMailbox = object.originMailbox ?? "";
    message.originDenom = object.originDenom ?? "";
    return message;
  },
  fromAmino(object: EventCreateSyntheticTokenAmino): EventCreateSyntheticToken {
    const message = createBaseEventCreateSyntheticToken();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.origin_mailbox !== undefined && object.origin_mailbox !== null) {
      message.originMailbox = object.origin_mailbox;
    }
    if (object.origin_denom !== undefined && object.origin_denom !== null) {
      message.originDenom = object.origin_denom;
    }
    return message;
  },
  toAmino(message: EventCreateSyntheticToken): EventCreateSyntheticTokenAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.origin_mailbox = message.originMailbox === "" ? undefined : message.originMailbox;
    obj.origin_denom = message.originDenom === "" ? undefined : message.originDenom;
    return obj;
  },
  fromAminoMsg(object: EventCreateSyntheticTokenAminoMsg): EventCreateSyntheticToken {
    return EventCreateSyntheticToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateSyntheticTokenProtoMsg): EventCreateSyntheticToken {
    return EventCreateSyntheticToken.decode(message.value);
  },
  toProto(message: EventCreateSyntheticToken): Uint8Array {
    return EventCreateSyntheticToken.encode(message).finish();
  },
  toProtoMsg(message: EventCreateSyntheticToken): EventCreateSyntheticTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.EventCreateSyntheticToken",
      value: EventCreateSyntheticToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventCreateCollateralToken(): EventCreateCollateralToken {
  return {
    tokenId: "",
    owner: "",
    originMailbox: "",
    originDenom: ""
  };
}
/**
 * EventCreateCollateralToken ...
 * @name EventCreateCollateralToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventCreateCollateralToken
 */
export const EventCreateCollateralToken = {
  typeUrl: "/hyperlane.warp.v1.EventCreateCollateralToken",
  is(o: any): o is EventCreateCollateralToken {
    return o && (o.$typeUrl === EventCreateCollateralToken.typeUrl || typeof o.tokenId === "string" && typeof o.owner === "string" && typeof o.originMailbox === "string" && typeof o.originDenom === "string");
  },
  isAmino(o: any): o is EventCreateCollateralTokenAmino {
    return o && (o.$typeUrl === EventCreateCollateralToken.typeUrl || typeof o.token_id === "string" && typeof o.owner === "string" && typeof o.origin_mailbox === "string" && typeof o.origin_denom === "string");
  },
  encode(message: EventCreateCollateralToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.originMailbox !== "") {
      writer.uint32(26).string(message.originMailbox);
    }
    if (message.originDenom !== "") {
      writer.uint32(34).string(message.originDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateCollateralToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCollateralToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.originMailbox = reader.string();
          break;
        case 4:
          message.originDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateCollateralToken>): EventCreateCollateralToken {
    const message = createBaseEventCreateCollateralToken();
    message.tokenId = object.tokenId ?? "";
    message.owner = object.owner ?? "";
    message.originMailbox = object.originMailbox ?? "";
    message.originDenom = object.originDenom ?? "";
    return message;
  },
  fromAmino(object: EventCreateCollateralTokenAmino): EventCreateCollateralToken {
    const message = createBaseEventCreateCollateralToken();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.origin_mailbox !== undefined && object.origin_mailbox !== null) {
      message.originMailbox = object.origin_mailbox;
    }
    if (object.origin_denom !== undefined && object.origin_denom !== null) {
      message.originDenom = object.origin_denom;
    }
    return message;
  },
  toAmino(message: EventCreateCollateralToken): EventCreateCollateralTokenAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.origin_mailbox = message.originMailbox === "" ? undefined : message.originMailbox;
    obj.origin_denom = message.originDenom === "" ? undefined : message.originDenom;
    return obj;
  },
  fromAminoMsg(object: EventCreateCollateralTokenAminoMsg): EventCreateCollateralToken {
    return EventCreateCollateralToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateCollateralTokenProtoMsg): EventCreateCollateralToken {
    return EventCreateCollateralToken.decode(message.value);
  },
  toProto(message: EventCreateCollateralToken): Uint8Array {
    return EventCreateCollateralToken.encode(message).finish();
  },
  toProtoMsg(message: EventCreateCollateralToken): EventCreateCollateralTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.EventCreateCollateralToken",
      value: EventCreateCollateralToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetToken(): EventSetToken {
  return {
    tokenId: "",
    owner: "",
    ismId: undefined,
    newOwner: "",
    renounceOwnership: false
  };
}
/**
 * EventSetToken ...
 * @name EventSetToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventSetToken
 */
export const EventSetToken = {
  typeUrl: "/hyperlane.warp.v1.EventSetToken",
  is(o: any): o is EventSetToken {
    return o && (o.$typeUrl === EventSetToken.typeUrl || typeof o.tokenId === "string" && typeof o.owner === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is EventSetTokenAmino {
    return o && (o.$typeUrl === EventSetToken.typeUrl || typeof o.token_id === "string" && typeof o.owner === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: EventSetToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.ismId !== undefined) {
      writer.uint32(26).string(message.ismId);
    }
    if (message.newOwner !== "") {
      writer.uint32(34).string(message.newOwner);
    }
    if (message.renounceOwnership === true) {
      writer.uint32(40).bool(message.renounceOwnership);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.ismId = reader.string();
          break;
        case 4:
          message.newOwner = reader.string();
          break;
        case 5:
          message.renounceOwnership = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetToken>): EventSetToken {
    const message = createBaseEventSetToken();
    message.tokenId = object.tokenId ?? "";
    message.owner = object.owner ?? "";
    message.ismId = object.ismId ?? undefined;
    message.newOwner = object.newOwner ?? "";
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: EventSetTokenAmino): EventSetToken {
    const message = createBaseEventSetToken();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    if (object.renounce_ownership !== undefined && object.renounce_ownership !== null) {
      message.renounceOwnership = object.renounce_ownership;
    }
    return message;
  },
  toAmino(message: EventSetToken): EventSetTokenAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.ism_id = message.ismId === null ? undefined : message.ismId;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: EventSetTokenAminoMsg): EventSetToken {
    return EventSetToken.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetTokenProtoMsg): EventSetToken {
    return EventSetToken.decode(message.value);
  },
  toProto(message: EventSetToken): Uint8Array {
    return EventSetToken.encode(message).finish();
  },
  toProtoMsg(message: EventSetToken): EventSetTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.EventSetToken",
      value: EventSetToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventEnrollRemoteRouter(): EventEnrollRemoteRouter {
  return {
    tokenId: "",
    owner: "",
    receiverDomain: 0,
    receiverContract: "",
    gas: ""
  };
}
/**
 * EventEnrollRemoteRouter ...
 * @name EventEnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventEnrollRemoteRouter
 */
export const EventEnrollRemoteRouter = {
  typeUrl: "/hyperlane.warp.v1.EventEnrollRemoteRouter",
  is(o: any): o is EventEnrollRemoteRouter {
    return o && (o.$typeUrl === EventEnrollRemoteRouter.typeUrl || typeof o.tokenId === "string" && typeof o.owner === "string" && typeof o.receiverDomain === "number" && typeof o.receiverContract === "string" && typeof o.gas === "string");
  },
  isAmino(o: any): o is EventEnrollRemoteRouterAmino {
    return o && (o.$typeUrl === EventEnrollRemoteRouter.typeUrl || typeof o.token_id === "string" && typeof o.owner === "string" && typeof o.receiver_domain === "number" && typeof o.receiver_contract === "string" && typeof o.gas === "string");
  },
  encode(message: EventEnrollRemoteRouter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.receiverDomain !== 0) {
      writer.uint32(24).uint32(message.receiverDomain);
    }
    if (message.receiverContract !== "") {
      writer.uint32(34).string(message.receiverContract);
    }
    if (message.gas !== "") {
      writer.uint32(42).string(message.gas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventEnrollRemoteRouter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEnrollRemoteRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.receiverDomain = reader.uint32();
          break;
        case 4:
          message.receiverContract = reader.string();
          break;
        case 5:
          message.gas = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventEnrollRemoteRouter>): EventEnrollRemoteRouter {
    const message = createBaseEventEnrollRemoteRouter();
    message.tokenId = object.tokenId ?? "";
    message.owner = object.owner ?? "";
    message.receiverDomain = object.receiverDomain ?? 0;
    message.receiverContract = object.receiverContract ?? "";
    message.gas = object.gas ?? "";
    return message;
  },
  fromAmino(object: EventEnrollRemoteRouterAmino): EventEnrollRemoteRouter {
    const message = createBaseEventEnrollRemoteRouter();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.receiver_domain !== undefined && object.receiver_domain !== null) {
      message.receiverDomain = object.receiver_domain;
    }
    if (object.receiver_contract !== undefined && object.receiver_contract !== null) {
      message.receiverContract = object.receiver_contract;
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    }
    return message;
  },
  toAmino(message: EventEnrollRemoteRouter): EventEnrollRemoteRouterAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.receiver_domain = message.receiverDomain === 0 ? undefined : message.receiverDomain;
    obj.receiver_contract = message.receiverContract === "" ? undefined : message.receiverContract;
    obj.gas = message.gas === "" ? undefined : message.gas;
    return obj;
  },
  fromAminoMsg(object: EventEnrollRemoteRouterAminoMsg): EventEnrollRemoteRouter {
    return EventEnrollRemoteRouter.fromAmino(object.value);
  },
  fromProtoMsg(message: EventEnrollRemoteRouterProtoMsg): EventEnrollRemoteRouter {
    return EventEnrollRemoteRouter.decode(message.value);
  },
  toProto(message: EventEnrollRemoteRouter): Uint8Array {
    return EventEnrollRemoteRouter.encode(message).finish();
  },
  toProtoMsg(message: EventEnrollRemoteRouter): EventEnrollRemoteRouterProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.EventEnrollRemoteRouter",
      value: EventEnrollRemoteRouter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventUnrollRemoteRouter(): EventUnrollRemoteRouter {
  return {
    tokenId: "",
    owner: "",
    receiverDomain: 0
  };
}
/**
 * EventUnrollRemoteRouter ...
 * @name EventUnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventUnrollRemoteRouter
 */
export const EventUnrollRemoteRouter = {
  typeUrl: "/hyperlane.warp.v1.EventUnrollRemoteRouter",
  is(o: any): o is EventUnrollRemoteRouter {
    return o && (o.$typeUrl === EventUnrollRemoteRouter.typeUrl || typeof o.tokenId === "string" && typeof o.owner === "string" && typeof o.receiverDomain === "number");
  },
  isAmino(o: any): o is EventUnrollRemoteRouterAmino {
    return o && (o.$typeUrl === EventUnrollRemoteRouter.typeUrl || typeof o.token_id === "string" && typeof o.owner === "string" && typeof o.receiver_domain === "number");
  },
  encode(message: EventUnrollRemoteRouter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.receiverDomain !== 0) {
      writer.uint32(24).uint32(message.receiverDomain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUnrollRemoteRouter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUnrollRemoteRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.receiverDomain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventUnrollRemoteRouter>): EventUnrollRemoteRouter {
    const message = createBaseEventUnrollRemoteRouter();
    message.tokenId = object.tokenId ?? "";
    message.owner = object.owner ?? "";
    message.receiverDomain = object.receiverDomain ?? 0;
    return message;
  },
  fromAmino(object: EventUnrollRemoteRouterAmino): EventUnrollRemoteRouter {
    const message = createBaseEventUnrollRemoteRouter();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.receiver_domain !== undefined && object.receiver_domain !== null) {
      message.receiverDomain = object.receiver_domain;
    }
    return message;
  },
  toAmino(message: EventUnrollRemoteRouter): EventUnrollRemoteRouterAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.receiver_domain = message.receiverDomain === 0 ? undefined : message.receiverDomain;
    return obj;
  },
  fromAminoMsg(object: EventUnrollRemoteRouterAminoMsg): EventUnrollRemoteRouter {
    return EventUnrollRemoteRouter.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUnrollRemoteRouterProtoMsg): EventUnrollRemoteRouter {
    return EventUnrollRemoteRouter.decode(message.value);
  },
  toProto(message: EventUnrollRemoteRouter): Uint8Array {
    return EventUnrollRemoteRouter.encode(message).finish();
  },
  toProtoMsg(message: EventUnrollRemoteRouter): EventUnrollRemoteRouterProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.EventUnrollRemoteRouter",
      value: EventUnrollRemoteRouter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSendRemoteTransfer(): EventSendRemoteTransfer {
  return {
    tokenId: "",
    sender: "",
    destinationDomain: 0,
    recipient: "",
    amount: ""
  };
}
/**
 * EventSendRemoteTransfer ...
 * @name EventSendRemoteTransfer
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventSendRemoteTransfer
 */
export const EventSendRemoteTransfer = {
  typeUrl: "/hyperlane.warp.v1.EventSendRemoteTransfer",
  is(o: any): o is EventSendRemoteTransfer {
    return o && (o.$typeUrl === EventSendRemoteTransfer.typeUrl || typeof o.tokenId === "string" && typeof o.sender === "string" && typeof o.destinationDomain === "number" && typeof o.recipient === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventSendRemoteTransferAmino {
    return o && (o.$typeUrl === EventSendRemoteTransfer.typeUrl || typeof o.token_id === "string" && typeof o.sender === "string" && typeof o.destination_domain === "number" && typeof o.recipient === "string" && typeof o.amount === "string");
  },
  encode(message: EventSendRemoteTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.destinationDomain !== 0) {
      writer.uint32(24).uint32(message.destinationDomain);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSendRemoteTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendRemoteTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.destinationDomain = reader.uint32();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSendRemoteTransfer>): EventSendRemoteTransfer {
    const message = createBaseEventSendRemoteTransfer();
    message.tokenId = object.tokenId ?? "";
    message.sender = object.sender ?? "";
    message.destinationDomain = object.destinationDomain ?? 0;
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventSendRemoteTransferAmino): EventSendRemoteTransfer {
    const message = createBaseEventSendRemoteTransfer();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.destination_domain !== undefined && object.destination_domain !== null) {
      message.destinationDomain = object.destination_domain;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventSendRemoteTransfer): EventSendRemoteTransferAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.destination_domain = message.destinationDomain === 0 ? undefined : message.destinationDomain;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventSendRemoteTransferAminoMsg): EventSendRemoteTransfer {
    return EventSendRemoteTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSendRemoteTransferProtoMsg): EventSendRemoteTransfer {
    return EventSendRemoteTransfer.decode(message.value);
  },
  toProto(message: EventSendRemoteTransfer): Uint8Array {
    return EventSendRemoteTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventSendRemoteTransfer): EventSendRemoteTransferProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.EventSendRemoteTransfer",
      value: EventSendRemoteTransfer.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventReceiveRemoteTransfer(): EventReceiveRemoteTransfer {
  return {
    tokenId: "",
    sender: "",
    originDomain: 0,
    recipient: "",
    amount: ""
  };
}
/**
 * EventReceiveRemoteTransfer ...
 * @name EventReceiveRemoteTransfer
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.EventReceiveRemoteTransfer
 */
export const EventReceiveRemoteTransfer = {
  typeUrl: "/hyperlane.warp.v1.EventReceiveRemoteTransfer",
  is(o: any): o is EventReceiveRemoteTransfer {
    return o && (o.$typeUrl === EventReceiveRemoteTransfer.typeUrl || typeof o.tokenId === "string" && typeof o.sender === "string" && typeof o.originDomain === "number" && typeof o.recipient === "string" && typeof o.amount === "string");
  },
  isAmino(o: any): o is EventReceiveRemoteTransferAmino {
    return o && (o.$typeUrl === EventReceiveRemoteTransfer.typeUrl || typeof o.token_id === "string" && typeof o.sender === "string" && typeof o.origin_domain === "number" && typeof o.recipient === "string" && typeof o.amount === "string");
  },
  encode(message: EventReceiveRemoteTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.originDomain !== 0) {
      writer.uint32(24).uint32(message.originDomain);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventReceiveRemoteTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReceiveRemoteTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.originDomain = reader.uint32();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventReceiveRemoteTransfer>): EventReceiveRemoteTransfer {
    const message = createBaseEventReceiveRemoteTransfer();
    message.tokenId = object.tokenId ?? "";
    message.sender = object.sender ?? "";
    message.originDomain = object.originDomain ?? 0;
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventReceiveRemoteTransferAmino): EventReceiveRemoteTransfer {
    const message = createBaseEventReceiveRemoteTransfer();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.origin_domain !== undefined && object.origin_domain !== null) {
      message.originDomain = object.origin_domain;
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: EventReceiveRemoteTransfer): EventReceiveRemoteTransferAmino {
    const obj: any = {};
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.origin_domain = message.originDomain === 0 ? undefined : message.originDomain;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: EventReceiveRemoteTransferAminoMsg): EventReceiveRemoteTransfer {
    return EventReceiveRemoteTransfer.fromAmino(object.value);
  },
  fromProtoMsg(message: EventReceiveRemoteTransferProtoMsg): EventReceiveRemoteTransfer {
    return EventReceiveRemoteTransfer.decode(message.value);
  },
  toProto(message: EventReceiveRemoteTransfer): Uint8Array {
    return EventReceiveRemoteTransfer.encode(message).finish();
  },
  toProtoMsg(message: EventReceiveRemoteTransfer): EventReceiveRemoteTransferProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.EventReceiveRemoteTransfer",
      value: EventReceiveRemoteTransfer.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};