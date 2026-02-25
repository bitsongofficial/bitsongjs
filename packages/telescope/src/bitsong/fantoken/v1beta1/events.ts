import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * @name EventIssue
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventIssue
 */
export interface EventIssue {
  denom: string;
}
export interface EventIssueProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.EventIssue";
  value: Uint8Array;
}
/**
 * @name EventIssueAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventIssue
 */
export interface EventIssueAmino {
  denom: string;
}
export interface EventIssueAminoMsg {
  type: "/bitsong.fantoken.v1beta1.EventIssue";
  value: EventIssueAmino;
}
/**
 * @name EventDisableMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventDisableMint
 */
export interface EventDisableMint {
  denom: string;
}
export interface EventDisableMintProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.EventDisableMint";
  value: Uint8Array;
}
/**
 * @name EventDisableMintAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventDisableMint
 */
export interface EventDisableMintAmino {
  denom: string;
}
export interface EventDisableMintAminoMsg {
  type: "/bitsong.fantoken.v1beta1.EventDisableMint";
  value: EventDisableMintAmino;
}
/**
 * @name EventMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventMint
 */
export interface EventMint {
  recipient: string;
  coin: string;
}
export interface EventMintProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.EventMint";
  value: Uint8Array;
}
/**
 * @name EventMintAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventMint
 */
export interface EventMintAmino {
  recipient: string;
  coin: string;
}
export interface EventMintAminoMsg {
  type: "/bitsong.fantoken.v1beta1.EventMint";
  value: EventMintAmino;
}
/**
 * @name EventBurn
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventBurn
 */
export interface EventBurn {
  sender: string;
  coin: string;
}
export interface EventBurnProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.EventBurn";
  value: Uint8Array;
}
/**
 * @name EventBurnAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventBurn
 */
export interface EventBurnAmino {
  sender: string;
  coin: string;
}
export interface EventBurnAminoMsg {
  type: "/bitsong.fantoken.v1beta1.EventBurn";
  value: EventBurnAmino;
}
/**
 * @name EventSetAuthority
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetAuthority
 */
export interface EventSetAuthority {
  denom: string;
  oldAuthority: string;
  newAuthority: string;
}
export interface EventSetAuthorityProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.EventSetAuthority";
  value: Uint8Array;
}
/**
 * @name EventSetAuthorityAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetAuthority
 */
export interface EventSetAuthorityAmino {
  denom: string;
  old_authority: string;
  new_authority: string;
}
export interface EventSetAuthorityAminoMsg {
  type: "/bitsong.fantoken.v1beta1.EventSetAuthority";
  value: EventSetAuthorityAmino;
}
/**
 * @name EventSetMinter
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetMinter
 */
export interface EventSetMinter {
  denom: string;
  oldMinter: string;
  newMinter: string;
}
export interface EventSetMinterProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.EventSetMinter";
  value: Uint8Array;
}
/**
 * @name EventSetMinterAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetMinter
 */
export interface EventSetMinterAmino {
  denom: string;
  old_minter: string;
  new_minter: string;
}
export interface EventSetMinterAminoMsg {
  type: "/bitsong.fantoken.v1beta1.EventSetMinter";
  value: EventSetMinterAmino;
}
/**
 * @name EventSetUri
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetUri
 */
export interface EventSetUri {
  denom: string;
}
export interface EventSetUriProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.EventSetUri";
  value: Uint8Array;
}
/**
 * @name EventSetUriAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetUri
 */
export interface EventSetUriAmino {
  denom: string;
}
export interface EventSetUriAminoMsg {
  type: "/bitsong.fantoken.v1beta1.EventSetUri";
  value: EventSetUriAmino;
}
function createBaseEventIssue(): EventIssue {
  return {
    denom: ""
  };
}
/**
 * @name EventIssue
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventIssue
 */
export const EventIssue = {
  typeUrl: "/bitsong.fantoken.v1beta1.EventIssue",
  is(o: any): o is EventIssue {
    return o && (o.$typeUrl === EventIssue.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is EventIssueAmino {
    return o && (o.$typeUrl === EventIssue.typeUrl || typeof o.denom === "string");
  },
  encode(message: EventIssue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventIssue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventIssue>): EventIssue {
    const message = createBaseEventIssue();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventIssueAmino): EventIssue {
    const message = createBaseEventIssue();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventIssue): EventIssueAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventIssueAminoMsg): EventIssue {
    return EventIssue.fromAmino(object.value);
  },
  fromProtoMsg(message: EventIssueProtoMsg): EventIssue {
    return EventIssue.decode(message.value);
  },
  toProto(message: EventIssue): Uint8Array {
    return EventIssue.encode(message).finish();
  },
  toProtoMsg(message: EventIssue): EventIssueProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.EventIssue",
      value: EventIssue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventDisableMint(): EventDisableMint {
  return {
    denom: ""
  };
}
/**
 * @name EventDisableMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventDisableMint
 */
export const EventDisableMint = {
  typeUrl: "/bitsong.fantoken.v1beta1.EventDisableMint",
  is(o: any): o is EventDisableMint {
    return o && (o.$typeUrl === EventDisableMint.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is EventDisableMintAmino {
    return o && (o.$typeUrl === EventDisableMint.typeUrl || typeof o.denom === "string");
  },
  encode(message: EventDisableMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDisableMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDisableMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventDisableMint>): EventDisableMint {
    const message = createBaseEventDisableMint();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventDisableMintAmino): EventDisableMint {
    const message = createBaseEventDisableMint();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventDisableMint): EventDisableMintAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventDisableMintAminoMsg): EventDisableMint {
    return EventDisableMint.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDisableMintProtoMsg): EventDisableMint {
    return EventDisableMint.decode(message.value);
  },
  toProto(message: EventDisableMint): Uint8Array {
    return EventDisableMint.encode(message).finish();
  },
  toProtoMsg(message: EventDisableMint): EventDisableMintProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.EventDisableMint",
      value: EventDisableMint.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventMint(): EventMint {
  return {
    recipient: "",
    coin: ""
  };
}
/**
 * @name EventMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventMint
 */
export const EventMint = {
  typeUrl: "/bitsong.fantoken.v1beta1.EventMint",
  is(o: any): o is EventMint {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.recipient === "string" && typeof o.coin === "string");
  },
  isAmino(o: any): o is EventMintAmino {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.recipient === "string" && typeof o.coin === "string");
  },
  encode(message: EventMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.recipient = object.recipient ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
  fromAmino(object: EventMintAmino): EventMint {
    const message = createBaseEventMint();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = object.coin;
    }
    return message;
  },
  toAmino(message: EventMint): EventMintAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.coin = message.coin === "" ? undefined : message.coin;
    return obj;
  },
  fromAminoMsg(object: EventMintAminoMsg): EventMint {
    return EventMint.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMintProtoMsg): EventMint {
    return EventMint.decode(message.value);
  },
  toProto(message: EventMint): Uint8Array {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message: EventMint): EventMintProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.EventMint",
      value: EventMint.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventBurn(): EventBurn {
  return {
    sender: "",
    coin: ""
  };
}
/**
 * @name EventBurn
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventBurn
 */
export const EventBurn = {
  typeUrl: "/bitsong.fantoken.v1beta1.EventBurn",
  is(o: any): o is EventBurn {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.sender === "string" && typeof o.coin === "string");
  },
  isAmino(o: any): o is EventBurnAmino {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.sender === "string" && typeof o.coin === "string");
  },
  encode(message: EventBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBurn>): EventBurn {
    const message = createBaseEventBurn();
    message.sender = object.sender ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
  fromAmino(object: EventBurnAmino): EventBurn {
    const message = createBaseEventBurn();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = object.coin;
    }
    return message;
  },
  toAmino(message: EventBurn): EventBurnAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.coin = message.coin === "" ? undefined : message.coin;
    return obj;
  },
  fromAminoMsg(object: EventBurnAminoMsg): EventBurn {
    return EventBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: EventBurnProtoMsg): EventBurn {
    return EventBurn.decode(message.value);
  },
  toProto(message: EventBurn): Uint8Array {
    return EventBurn.encode(message).finish();
  },
  toProtoMsg(message: EventBurn): EventBurnProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.EventBurn",
      value: EventBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetAuthority(): EventSetAuthority {
  return {
    denom: "",
    oldAuthority: "",
    newAuthority: ""
  };
}
/**
 * @name EventSetAuthority
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetAuthority
 */
export const EventSetAuthority = {
  typeUrl: "/bitsong.fantoken.v1beta1.EventSetAuthority",
  is(o: any): o is EventSetAuthority {
    return o && (o.$typeUrl === EventSetAuthority.typeUrl || typeof o.denom === "string" && typeof o.oldAuthority === "string" && typeof o.newAuthority === "string");
  },
  isAmino(o: any): o is EventSetAuthorityAmino {
    return o && (o.$typeUrl === EventSetAuthority.typeUrl || typeof o.denom === "string" && typeof o.old_authority === "string" && typeof o.new_authority === "string");
  },
  encode(message: EventSetAuthority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oldAuthority !== "") {
      writer.uint32(18).string(message.oldAuthority);
    }
    if (message.newAuthority !== "") {
      writer.uint32(26).string(message.newAuthority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetAuthority {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oldAuthority = reader.string();
          break;
        case 3:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetAuthority>): EventSetAuthority {
    const message = createBaseEventSetAuthority();
    message.denom = object.denom ?? "";
    message.oldAuthority = object.oldAuthority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  },
  fromAmino(object: EventSetAuthorityAmino): EventSetAuthority {
    const message = createBaseEventSetAuthority();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.old_authority !== undefined && object.old_authority !== null) {
      message.oldAuthority = object.old_authority;
    }
    if (object.new_authority !== undefined && object.new_authority !== null) {
      message.newAuthority = object.new_authority;
    }
    return message;
  },
  toAmino(message: EventSetAuthority): EventSetAuthorityAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.old_authority = message.oldAuthority === "" ? undefined : message.oldAuthority;
    obj.new_authority = message.newAuthority === "" ? undefined : message.newAuthority;
    return obj;
  },
  fromAminoMsg(object: EventSetAuthorityAminoMsg): EventSetAuthority {
    return EventSetAuthority.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetAuthorityProtoMsg): EventSetAuthority {
    return EventSetAuthority.decode(message.value);
  },
  toProto(message: EventSetAuthority): Uint8Array {
    return EventSetAuthority.encode(message).finish();
  },
  toProtoMsg(message: EventSetAuthority): EventSetAuthorityProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.EventSetAuthority",
      value: EventSetAuthority.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetMinter(): EventSetMinter {
  return {
    denom: "",
    oldMinter: "",
    newMinter: ""
  };
}
/**
 * @name EventSetMinter
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetMinter
 */
export const EventSetMinter = {
  typeUrl: "/bitsong.fantoken.v1beta1.EventSetMinter",
  is(o: any): o is EventSetMinter {
    return o && (o.$typeUrl === EventSetMinter.typeUrl || typeof o.denom === "string" && typeof o.oldMinter === "string" && typeof o.newMinter === "string");
  },
  isAmino(o: any): o is EventSetMinterAmino {
    return o && (o.$typeUrl === EventSetMinter.typeUrl || typeof o.denom === "string" && typeof o.old_minter === "string" && typeof o.new_minter === "string");
  },
  encode(message: EventSetMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oldMinter !== "") {
      writer.uint32(18).string(message.oldMinter);
    }
    if (message.newMinter !== "") {
      writer.uint32(26).string(message.newMinter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetMinter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oldMinter = reader.string();
          break;
        case 3:
          message.newMinter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetMinter>): EventSetMinter {
    const message = createBaseEventSetMinter();
    message.denom = object.denom ?? "";
    message.oldMinter = object.oldMinter ?? "";
    message.newMinter = object.newMinter ?? "";
    return message;
  },
  fromAmino(object: EventSetMinterAmino): EventSetMinter {
    const message = createBaseEventSetMinter();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.old_minter !== undefined && object.old_minter !== null) {
      message.oldMinter = object.old_minter;
    }
    if (object.new_minter !== undefined && object.new_minter !== null) {
      message.newMinter = object.new_minter;
    }
    return message;
  },
  toAmino(message: EventSetMinter): EventSetMinterAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.old_minter = message.oldMinter === "" ? undefined : message.oldMinter;
    obj.new_minter = message.newMinter === "" ? undefined : message.newMinter;
    return obj;
  },
  fromAminoMsg(object: EventSetMinterAminoMsg): EventSetMinter {
    return EventSetMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetMinterProtoMsg): EventSetMinter {
    return EventSetMinter.decode(message.value);
  },
  toProto(message: EventSetMinter): Uint8Array {
    return EventSetMinter.encode(message).finish();
  },
  toProtoMsg(message: EventSetMinter): EventSetMinterProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.EventSetMinter",
      value: EventSetMinter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetUri(): EventSetUri {
  return {
    denom: ""
  };
}
/**
 * @name EventSetUri
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.EventSetUri
 */
export const EventSetUri = {
  typeUrl: "/bitsong.fantoken.v1beta1.EventSetUri",
  is(o: any): o is EventSetUri {
    return o && (o.$typeUrl === EventSetUri.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is EventSetUriAmino {
    return o && (o.$typeUrl === EventSetUri.typeUrl || typeof o.denom === "string");
  },
  encode(message: EventSetUri, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetUri {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUri();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetUri>): EventSetUri {
    const message = createBaseEventSetUri();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: EventSetUriAmino): EventSetUri {
    const message = createBaseEventSetUri();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: EventSetUri): EventSetUriAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: EventSetUriAminoMsg): EventSetUri {
    return EventSetUri.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetUriProtoMsg): EventSetUri {
    return EventSetUri.decode(message.value);
  },
  toProto(message: EventSetUri): Uint8Array {
    return EventSetUri.encode(message).finish();
  },
  toProtoMsg(message: EventSetUri): EventSetUriProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.EventSetUri",
      value: EventSetUri.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};