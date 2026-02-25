import { RemoteRouter, RemoteRouterAmino } from "./types";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgCreateCollateralToken ...
 * @name MsgCreateCollateralToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateCollateralToken
 */
export interface MsgCreateCollateralToken {
  /**
   * owner is the message sender.
   */
  owner: string;
  originMailbox: string;
  originDenom: string;
}
export interface MsgCreateCollateralTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralToken";
  value: Uint8Array;
}
/**
 * MsgCreateCollateralToken ...
 * @name MsgCreateCollateralTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateCollateralToken
 */
export interface MsgCreateCollateralTokenAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  origin_mailbox: string;
  origin_denom: string;
}
export interface MsgCreateCollateralTokenAminoMsg {
  type: "hyperlane/warp/v1/MsgCreateCollateralToken";
  value: MsgCreateCollateralTokenAmino;
}
/**
 * MsgCreateCollateralTokenResponse ...
 * @name MsgCreateCollateralTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateCollateralTokenResponse
 */
export interface MsgCreateCollateralTokenResponse {
  id: string;
}
export interface MsgCreateCollateralTokenResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralTokenResponse";
  value: Uint8Array;
}
/**
 * MsgCreateCollateralTokenResponse ...
 * @name MsgCreateCollateralTokenResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateCollateralTokenResponse
 */
export interface MsgCreateCollateralTokenResponseAmino {
  id: string;
}
export interface MsgCreateCollateralTokenResponseAminoMsg {
  type: "/hyperlane.warp.v1.MsgCreateCollateralTokenResponse";
  value: MsgCreateCollateralTokenResponseAmino;
}
/**
 * MsgCreateSyntheticToken ...
 * @name MsgCreateSyntheticToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateSyntheticToken
 */
export interface MsgCreateSyntheticToken {
  /**
   * owner is the message sender.
   */
  owner: string;
  originMailbox: string;
}
export interface MsgCreateSyntheticTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticToken";
  value: Uint8Array;
}
/**
 * MsgCreateSyntheticToken ...
 * @name MsgCreateSyntheticTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateSyntheticToken
 */
export interface MsgCreateSyntheticTokenAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  origin_mailbox: string;
}
export interface MsgCreateSyntheticTokenAminoMsg {
  type: "hyperlane/warp/v1/MsgCreateSyntheticToken";
  value: MsgCreateSyntheticTokenAmino;
}
/**
 * MsgCreateSyntheticTokenResponse ...
 * @name MsgCreateSyntheticTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateSyntheticTokenResponse
 */
export interface MsgCreateSyntheticTokenResponse {
  id: string;
}
export interface MsgCreateSyntheticTokenResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticTokenResponse";
  value: Uint8Array;
}
/**
 * MsgCreateSyntheticTokenResponse ...
 * @name MsgCreateSyntheticTokenResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateSyntheticTokenResponse
 */
export interface MsgCreateSyntheticTokenResponseAmino {
  id: string;
}
export interface MsgCreateSyntheticTokenResponseAminoMsg {
  type: "/hyperlane.warp.v1.MsgCreateSyntheticTokenResponse";
  value: MsgCreateSyntheticTokenResponseAmino;
}
/**
 * MsgSetToken ...
 * @name MsgSetToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgSetToken
 */
export interface MsgSetToken {
  /**
   * owner is the message sender.
   */
  owner: string;
  tokenId: string;
  newOwner: string;
  ismId?: string;
  renounceOwnership: boolean;
}
export interface MsgSetTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgSetToken";
  value: Uint8Array;
}
/**
 * MsgSetToken ...
 * @name MsgSetTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgSetToken
 */
export interface MsgSetTokenAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  token_id: string;
  new_owner: string;
  ism_id?: string;
  renounce_ownership: boolean;
}
export interface MsgSetTokenAminoMsg {
  type: "hyperlane/warp/v1/MsgSetToken";
  value: MsgSetTokenAmino;
}
/**
 * MsgSetTokenResponse ...
 * @name MsgSetTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgSetTokenResponse
 */
export interface MsgSetTokenResponse {}
export interface MsgSetTokenResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgSetTokenResponse";
  value: Uint8Array;
}
/**
 * MsgSetTokenResponse ...
 * @name MsgSetTokenResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgSetTokenResponse
 */
export interface MsgSetTokenResponseAmino {}
export interface MsgSetTokenResponseAminoMsg {
  type: "/hyperlane.warp.v1.MsgSetTokenResponse";
  value: MsgSetTokenResponseAmino;
}
/**
 * MsgEnrollRemoteRouter ...
 * @name MsgEnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgEnrollRemoteRouter
 */
export interface MsgEnrollRemoteRouter {
  /**
   * owner is the message sender.
   */
  owner: string;
  tokenId: string;
  remoteRouter?: RemoteRouter;
}
export interface MsgEnrollRemoteRouterProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouter";
  value: Uint8Array;
}
/**
 * MsgEnrollRemoteRouter ...
 * @name MsgEnrollRemoteRouterAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgEnrollRemoteRouter
 */
export interface MsgEnrollRemoteRouterAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  token_id: string;
  remote_router?: RemoteRouterAmino;
}
export interface MsgEnrollRemoteRouterAminoMsg {
  type: "hyperlane/warp/v1/MsgEnrollRemoteRouter";
  value: MsgEnrollRemoteRouterAmino;
}
/**
 * MsgEnrollRemoteRouterResponse ...
 * @name MsgEnrollRemoteRouterResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgEnrollRemoteRouterResponse
 */
export interface MsgEnrollRemoteRouterResponse {}
export interface MsgEnrollRemoteRouterResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouterResponse";
  value: Uint8Array;
}
/**
 * MsgEnrollRemoteRouterResponse ...
 * @name MsgEnrollRemoteRouterResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgEnrollRemoteRouterResponse
 */
export interface MsgEnrollRemoteRouterResponseAmino {}
export interface MsgEnrollRemoteRouterResponseAminoMsg {
  type: "/hyperlane.warp.v1.MsgEnrollRemoteRouterResponse";
  value: MsgEnrollRemoteRouterResponseAmino;
}
/**
 * MsgUnrollRemoteRouter ...
 * @name MsgUnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgUnrollRemoteRouter
 */
export interface MsgUnrollRemoteRouter {
  /**
   * owner is the message sender.
   */
  owner: string;
  tokenId: string;
  receiverDomain: number;
}
export interface MsgUnrollRemoteRouterProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouter";
  value: Uint8Array;
}
/**
 * MsgUnrollRemoteRouter ...
 * @name MsgUnrollRemoteRouterAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgUnrollRemoteRouter
 */
export interface MsgUnrollRemoteRouterAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  token_id: string;
  receiver_domain: number;
}
export interface MsgUnrollRemoteRouterAminoMsg {
  type: "hyperlane/warp/v1/MsgUnrollRemoteRouter";
  value: MsgUnrollRemoteRouterAmino;
}
/**
 * MsgUnrollRemoteRouterResponse ...
 * @name MsgUnrollRemoteRouterResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgUnrollRemoteRouterResponse
 */
export interface MsgUnrollRemoteRouterResponse {}
export interface MsgUnrollRemoteRouterResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouterResponse";
  value: Uint8Array;
}
/**
 * MsgUnrollRemoteRouterResponse ...
 * @name MsgUnrollRemoteRouterResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgUnrollRemoteRouterResponse
 */
export interface MsgUnrollRemoteRouterResponseAmino {}
export interface MsgUnrollRemoteRouterResponseAminoMsg {
  type: "/hyperlane.warp.v1.MsgUnrollRemoteRouterResponse";
  value: MsgUnrollRemoteRouterResponseAmino;
}
/**
 * MsgRemoteTransfer ...
 * @name MsgRemoteTransfer
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgRemoteTransfer
 */
export interface MsgRemoteTransfer {
  sender: string;
  tokenId: string;
  destinationDomain: number;
  recipient: string;
  amount: string;
  /**
   * Post Dispatch
   */
  customHookId?: string;
  gasLimit: string;
  maxFee: Coin;
  customHookMetadata: string;
}
export interface MsgRemoteTransferProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgRemoteTransfer";
  value: Uint8Array;
}
/**
 * MsgRemoteTransfer ...
 * @name MsgRemoteTransferAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgRemoteTransfer
 */
export interface MsgRemoteTransferAmino {
  sender: string;
  token_id: string;
  destination_domain: number;
  recipient: string;
  amount: string;
  /**
   * Post Dispatch
   */
  custom_hook_id?: string;
  gas_limit: string;
  max_fee: CoinAmino;
  custom_hook_metadata: string;
}
export interface MsgRemoteTransferAminoMsg {
  type: "hyperlane/warp/v1/MsgRemoteTransfer";
  value: MsgRemoteTransferAmino;
}
/**
 * MsgRemoteTransferResponse ...
 * @name MsgRemoteTransferResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgRemoteTransferResponse
 */
export interface MsgRemoteTransferResponse {
  messageId: string;
}
export interface MsgRemoteTransferResponseProtoMsg {
  typeUrl: "/hyperlane.warp.v1.MsgRemoteTransferResponse";
  value: Uint8Array;
}
/**
 * MsgRemoteTransferResponse ...
 * @name MsgRemoteTransferResponseAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgRemoteTransferResponse
 */
export interface MsgRemoteTransferResponseAmino {
  message_id: string;
}
export interface MsgRemoteTransferResponseAminoMsg {
  type: "/hyperlane.warp.v1.MsgRemoteTransferResponse";
  value: MsgRemoteTransferResponseAmino;
}
function createBaseMsgCreateCollateralToken(): MsgCreateCollateralToken {
  return {
    owner: "",
    originMailbox: "",
    originDenom: ""
  };
}
/**
 * MsgCreateCollateralToken ...
 * @name MsgCreateCollateralToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateCollateralToken
 */
export const MsgCreateCollateralToken = {
  typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralToken",
  aminoType: "hyperlane/warp/v1/MsgCreateCollateralToken",
  is(o: any): o is MsgCreateCollateralToken {
    return o && (o.$typeUrl === MsgCreateCollateralToken.typeUrl || typeof o.owner === "string" && typeof o.originMailbox === "string" && typeof o.originDenom === "string");
  },
  isAmino(o: any): o is MsgCreateCollateralTokenAmino {
    return o && (o.$typeUrl === MsgCreateCollateralToken.typeUrl || typeof o.owner === "string" && typeof o.origin_mailbox === "string" && typeof o.origin_denom === "string");
  },
  encode(message: MsgCreateCollateralToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.originMailbox !== "") {
      writer.uint32(18).string(message.originMailbox);
    }
    if (message.originDenom !== "") {
      writer.uint32(26).string(message.originDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCollateralToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollateralToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.originMailbox = reader.string();
          break;
        case 3:
          message.originDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateCollateralToken>): MsgCreateCollateralToken {
    const message = createBaseMsgCreateCollateralToken();
    message.owner = object.owner ?? "";
    message.originMailbox = object.originMailbox ?? "";
    message.originDenom = object.originDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateCollateralTokenAmino): MsgCreateCollateralToken {
    const message = createBaseMsgCreateCollateralToken();
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
  toAmino(message: MsgCreateCollateralToken): MsgCreateCollateralTokenAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.origin_mailbox = message.originMailbox === "" ? undefined : message.originMailbox;
    obj.origin_denom = message.originDenom === "" ? undefined : message.originDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCollateralTokenAminoMsg): MsgCreateCollateralToken {
    return MsgCreateCollateralToken.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateCollateralToken): MsgCreateCollateralTokenAminoMsg {
    return {
      type: "hyperlane/warp/v1/MsgCreateCollateralToken",
      value: MsgCreateCollateralToken.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateCollateralTokenProtoMsg): MsgCreateCollateralToken {
    return MsgCreateCollateralToken.decode(message.value);
  },
  toProto(message: MsgCreateCollateralToken): Uint8Array {
    return MsgCreateCollateralToken.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCollateralToken): MsgCreateCollateralTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralToken",
      value: MsgCreateCollateralToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateCollateralTokenResponse(): MsgCreateCollateralTokenResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateCollateralTokenResponse ...
 * @name MsgCreateCollateralTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateCollateralTokenResponse
 */
export const MsgCreateCollateralTokenResponse = {
  typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralTokenResponse",
  is(o: any): o is MsgCreateCollateralTokenResponse {
    return o && (o.$typeUrl === MsgCreateCollateralTokenResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateCollateralTokenResponseAmino {
    return o && (o.$typeUrl === MsgCreateCollateralTokenResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateCollateralTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCollateralTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCollateralTokenResponse();
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
  fromPartial(object: DeepPartial<MsgCreateCollateralTokenResponse>): MsgCreateCollateralTokenResponse {
    const message = createBaseMsgCreateCollateralTokenResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateCollateralTokenResponseAmino): MsgCreateCollateralTokenResponse {
    const message = createBaseMsgCreateCollateralTokenResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateCollateralTokenResponse): MsgCreateCollateralTokenResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCollateralTokenResponseAminoMsg): MsgCreateCollateralTokenResponse {
    return MsgCreateCollateralTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCollateralTokenResponseProtoMsg): MsgCreateCollateralTokenResponse {
    return MsgCreateCollateralTokenResponse.decode(message.value);
  },
  toProto(message: MsgCreateCollateralTokenResponse): Uint8Array {
    return MsgCreateCollateralTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCollateralTokenResponse): MsgCreateCollateralTokenResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralTokenResponse",
      value: MsgCreateCollateralTokenResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateSyntheticToken(): MsgCreateSyntheticToken {
  return {
    owner: "",
    originMailbox: ""
  };
}
/**
 * MsgCreateSyntheticToken ...
 * @name MsgCreateSyntheticToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateSyntheticToken
 */
export const MsgCreateSyntheticToken = {
  typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticToken",
  aminoType: "hyperlane/warp/v1/MsgCreateSyntheticToken",
  is(o: any): o is MsgCreateSyntheticToken {
    return o && (o.$typeUrl === MsgCreateSyntheticToken.typeUrl || typeof o.owner === "string" && typeof o.originMailbox === "string");
  },
  isAmino(o: any): o is MsgCreateSyntheticTokenAmino {
    return o && (o.$typeUrl === MsgCreateSyntheticToken.typeUrl || typeof o.owner === "string" && typeof o.origin_mailbox === "string");
  },
  encode(message: MsgCreateSyntheticToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.originMailbox !== "") {
      writer.uint32(18).string(message.originMailbox);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSyntheticToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSyntheticToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.originMailbox = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateSyntheticToken>): MsgCreateSyntheticToken {
    const message = createBaseMsgCreateSyntheticToken();
    message.owner = object.owner ?? "";
    message.originMailbox = object.originMailbox ?? "";
    return message;
  },
  fromAmino(object: MsgCreateSyntheticTokenAmino): MsgCreateSyntheticToken {
    const message = createBaseMsgCreateSyntheticToken();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.origin_mailbox !== undefined && object.origin_mailbox !== null) {
      message.originMailbox = object.origin_mailbox;
    }
    return message;
  },
  toAmino(message: MsgCreateSyntheticToken): MsgCreateSyntheticTokenAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.origin_mailbox = message.originMailbox === "" ? undefined : message.originMailbox;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSyntheticTokenAminoMsg): MsgCreateSyntheticToken {
    return MsgCreateSyntheticToken.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateSyntheticToken): MsgCreateSyntheticTokenAminoMsg {
    return {
      type: "hyperlane/warp/v1/MsgCreateSyntheticToken",
      value: MsgCreateSyntheticToken.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateSyntheticTokenProtoMsg): MsgCreateSyntheticToken {
    return MsgCreateSyntheticToken.decode(message.value);
  },
  toProto(message: MsgCreateSyntheticToken): Uint8Array {
    return MsgCreateSyntheticToken.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSyntheticToken): MsgCreateSyntheticTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticToken",
      value: MsgCreateSyntheticToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateSyntheticTokenResponse(): MsgCreateSyntheticTokenResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateSyntheticTokenResponse ...
 * @name MsgCreateSyntheticTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgCreateSyntheticTokenResponse
 */
export const MsgCreateSyntheticTokenResponse = {
  typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticTokenResponse",
  is(o: any): o is MsgCreateSyntheticTokenResponse {
    return o && (o.$typeUrl === MsgCreateSyntheticTokenResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateSyntheticTokenResponseAmino {
    return o && (o.$typeUrl === MsgCreateSyntheticTokenResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateSyntheticTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateSyntheticTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSyntheticTokenResponse();
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
  fromPartial(object: DeepPartial<MsgCreateSyntheticTokenResponse>): MsgCreateSyntheticTokenResponse {
    const message = createBaseMsgCreateSyntheticTokenResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateSyntheticTokenResponseAmino): MsgCreateSyntheticTokenResponse {
    const message = createBaseMsgCreateSyntheticTokenResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateSyntheticTokenResponse): MsgCreateSyntheticTokenResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateSyntheticTokenResponseAminoMsg): MsgCreateSyntheticTokenResponse {
    return MsgCreateSyntheticTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateSyntheticTokenResponseProtoMsg): MsgCreateSyntheticTokenResponse {
    return MsgCreateSyntheticTokenResponse.decode(message.value);
  },
  toProto(message: MsgCreateSyntheticTokenResponse): Uint8Array {
    return MsgCreateSyntheticTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateSyntheticTokenResponse): MsgCreateSyntheticTokenResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticTokenResponse",
      value: MsgCreateSyntheticTokenResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetToken(): MsgSetToken {
  return {
    owner: "",
    tokenId: "",
    newOwner: "",
    ismId: undefined,
    renounceOwnership: false
  };
}
/**
 * MsgSetToken ...
 * @name MsgSetToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgSetToken
 */
export const MsgSetToken = {
  typeUrl: "/hyperlane.warp.v1.MsgSetToken",
  aminoType: "hyperlane/warp/v1/MsgSetToken",
  is(o: any): o is MsgSetToken {
    return o && (o.$typeUrl === MsgSetToken.typeUrl || typeof o.owner === "string" && typeof o.tokenId === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is MsgSetTokenAmino {
    return o && (o.$typeUrl === MsgSetToken.typeUrl || typeof o.owner === "string" && typeof o.token_id === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: MsgSetToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    if (message.ismId !== undefined) {
      writer.uint32(34).string(message.ismId);
    }
    if (message.renounceOwnership === true) {
      writer.uint32(56).bool(message.renounceOwnership);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.newOwner = reader.string();
          break;
        case 4:
          message.ismId = reader.string();
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
  fromPartial(object: DeepPartial<MsgSetToken>): MsgSetToken {
    const message = createBaseMsgSetToken();
    message.owner = object.owner ?? "";
    message.tokenId = object.tokenId ?? "";
    message.newOwner = object.newOwner ?? "";
    message.ismId = object.ismId ?? undefined;
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: MsgSetTokenAmino): MsgSetToken {
    const message = createBaseMsgSetToken();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.renounce_ownership !== undefined && object.renounce_ownership !== null) {
      message.renounceOwnership = object.renounce_ownership;
    }
    return message;
  },
  toAmino(message: MsgSetToken): MsgSetTokenAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.ism_id = message.ismId === null ? undefined : message.ismId;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: MsgSetTokenAminoMsg): MsgSetToken {
    return MsgSetToken.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetToken): MsgSetTokenAminoMsg {
    return {
      type: "hyperlane/warp/v1/MsgSetToken",
      value: MsgSetToken.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetTokenProtoMsg): MsgSetToken {
    return MsgSetToken.decode(message.value);
  },
  toProto(message: MsgSetToken): Uint8Array {
    return MsgSetToken.encode(message).finish();
  },
  toProtoMsg(message: MsgSetToken): MsgSetTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgSetToken",
      value: MsgSetToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetTokenResponse(): MsgSetTokenResponse {
  return {};
}
/**
 * MsgSetTokenResponse ...
 * @name MsgSetTokenResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgSetTokenResponse
 */
export const MsgSetTokenResponse = {
  typeUrl: "/hyperlane.warp.v1.MsgSetTokenResponse",
  is(o: any): o is MsgSetTokenResponse {
    return o && o.$typeUrl === MsgSetTokenResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetTokenResponseAmino {
    return o && o.$typeUrl === MsgSetTokenResponse.typeUrl;
  },
  encode(_: MsgSetTokenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetTokenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTokenResponse();
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
  fromPartial(_: DeepPartial<MsgSetTokenResponse>): MsgSetTokenResponse {
    const message = createBaseMsgSetTokenResponse();
    return message;
  },
  fromAmino(_: MsgSetTokenResponseAmino): MsgSetTokenResponse {
    const message = createBaseMsgSetTokenResponse();
    return message;
  },
  toAmino(_: MsgSetTokenResponse): MsgSetTokenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetTokenResponseAminoMsg): MsgSetTokenResponse {
    return MsgSetTokenResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetTokenResponseProtoMsg): MsgSetTokenResponse {
    return MsgSetTokenResponse.decode(message.value);
  },
  toProto(message: MsgSetTokenResponse): Uint8Array {
    return MsgSetTokenResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTokenResponse): MsgSetTokenResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgSetTokenResponse",
      value: MsgSetTokenResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgEnrollRemoteRouter(): MsgEnrollRemoteRouter {
  return {
    owner: "",
    tokenId: "",
    remoteRouter: undefined
  };
}
/**
 * MsgEnrollRemoteRouter ...
 * @name MsgEnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgEnrollRemoteRouter
 */
export const MsgEnrollRemoteRouter = {
  typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouter",
  aminoType: "hyperlane/warp/v1/MsgEnrollRemoteRouter",
  is(o: any): o is MsgEnrollRemoteRouter {
    return o && (o.$typeUrl === MsgEnrollRemoteRouter.typeUrl || typeof o.owner === "string" && typeof o.tokenId === "string");
  },
  isAmino(o: any): o is MsgEnrollRemoteRouterAmino {
    return o && (o.$typeUrl === MsgEnrollRemoteRouter.typeUrl || typeof o.owner === "string" && typeof o.token_id === "string");
  },
  encode(message: MsgEnrollRemoteRouter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.remoteRouter !== undefined) {
      RemoteRouter.encode(message.remoteRouter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEnrollRemoteRouter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollRemoteRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.remoteRouter = RemoteRouter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgEnrollRemoteRouter>): MsgEnrollRemoteRouter {
    const message = createBaseMsgEnrollRemoteRouter();
    message.owner = object.owner ?? "";
    message.tokenId = object.tokenId ?? "";
    message.remoteRouter = object.remoteRouter !== undefined && object.remoteRouter !== null ? RemoteRouter.fromPartial(object.remoteRouter) : undefined;
    return message;
  },
  fromAmino(object: MsgEnrollRemoteRouterAmino): MsgEnrollRemoteRouter {
    const message = createBaseMsgEnrollRemoteRouter();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.remote_router !== undefined && object.remote_router !== null) {
      message.remoteRouter = RemoteRouter.fromAmino(object.remote_router);
    }
    return message;
  },
  toAmino(message: MsgEnrollRemoteRouter): MsgEnrollRemoteRouterAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.remote_router = message.remoteRouter ? RemoteRouter.toAmino(message.remoteRouter) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEnrollRemoteRouterAminoMsg): MsgEnrollRemoteRouter {
    return MsgEnrollRemoteRouter.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnrollRemoteRouter): MsgEnrollRemoteRouterAminoMsg {
    return {
      type: "hyperlane/warp/v1/MsgEnrollRemoteRouter",
      value: MsgEnrollRemoteRouter.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnrollRemoteRouterProtoMsg): MsgEnrollRemoteRouter {
    return MsgEnrollRemoteRouter.decode(message.value);
  },
  toProto(message: MsgEnrollRemoteRouter): Uint8Array {
    return MsgEnrollRemoteRouter.encode(message).finish();
  },
  toProtoMsg(message: MsgEnrollRemoteRouter): MsgEnrollRemoteRouterProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouter",
      value: MsgEnrollRemoteRouter.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgEnrollRemoteRouter.typeUrl)) {
      return;
    }
    RemoteRouter.registerTypeUrl();
  }
};
function createBaseMsgEnrollRemoteRouterResponse(): MsgEnrollRemoteRouterResponse {
  return {};
}
/**
 * MsgEnrollRemoteRouterResponse ...
 * @name MsgEnrollRemoteRouterResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgEnrollRemoteRouterResponse
 */
export const MsgEnrollRemoteRouterResponse = {
  typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouterResponse",
  is(o: any): o is MsgEnrollRemoteRouterResponse {
    return o && o.$typeUrl === MsgEnrollRemoteRouterResponse.typeUrl;
  },
  isAmino(o: any): o is MsgEnrollRemoteRouterResponseAmino {
    return o && o.$typeUrl === MsgEnrollRemoteRouterResponse.typeUrl;
  },
  encode(_: MsgEnrollRemoteRouterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEnrollRemoteRouterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollRemoteRouterResponse();
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
  fromPartial(_: DeepPartial<MsgEnrollRemoteRouterResponse>): MsgEnrollRemoteRouterResponse {
    const message = createBaseMsgEnrollRemoteRouterResponse();
    return message;
  },
  fromAmino(_: MsgEnrollRemoteRouterResponseAmino): MsgEnrollRemoteRouterResponse {
    const message = createBaseMsgEnrollRemoteRouterResponse();
    return message;
  },
  toAmino(_: MsgEnrollRemoteRouterResponse): MsgEnrollRemoteRouterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEnrollRemoteRouterResponseAminoMsg): MsgEnrollRemoteRouterResponse {
    return MsgEnrollRemoteRouterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEnrollRemoteRouterResponseProtoMsg): MsgEnrollRemoteRouterResponse {
    return MsgEnrollRemoteRouterResponse.decode(message.value);
  },
  toProto(message: MsgEnrollRemoteRouterResponse): Uint8Array {
    return MsgEnrollRemoteRouterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEnrollRemoteRouterResponse): MsgEnrollRemoteRouterResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouterResponse",
      value: MsgEnrollRemoteRouterResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnrollRemoteRouter(): MsgUnrollRemoteRouter {
  return {
    owner: "",
    tokenId: "",
    receiverDomain: 0
  };
}
/**
 * MsgUnrollRemoteRouter ...
 * @name MsgUnrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgUnrollRemoteRouter
 */
export const MsgUnrollRemoteRouter = {
  typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouter",
  aminoType: "hyperlane/warp/v1/MsgUnrollRemoteRouter",
  is(o: any): o is MsgUnrollRemoteRouter {
    return o && (o.$typeUrl === MsgUnrollRemoteRouter.typeUrl || typeof o.owner === "string" && typeof o.tokenId === "string" && typeof o.receiverDomain === "number");
  },
  isAmino(o: any): o is MsgUnrollRemoteRouterAmino {
    return o && (o.$typeUrl === MsgUnrollRemoteRouter.typeUrl || typeof o.owner === "string" && typeof o.token_id === "string" && typeof o.receiver_domain === "number");
  },
  encode(message: MsgUnrollRemoteRouter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.receiverDomain !== 0) {
      writer.uint32(24).uint32(message.receiverDomain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnrollRemoteRouter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnrollRemoteRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
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
  fromPartial(object: DeepPartial<MsgUnrollRemoteRouter>): MsgUnrollRemoteRouter {
    const message = createBaseMsgUnrollRemoteRouter();
    message.owner = object.owner ?? "";
    message.tokenId = object.tokenId ?? "";
    message.receiverDomain = object.receiverDomain ?? 0;
    return message;
  },
  fromAmino(object: MsgUnrollRemoteRouterAmino): MsgUnrollRemoteRouter {
    const message = createBaseMsgUnrollRemoteRouter();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
    }
    if (object.receiver_domain !== undefined && object.receiver_domain !== null) {
      message.receiverDomain = object.receiver_domain;
    }
    return message;
  },
  toAmino(message: MsgUnrollRemoteRouter): MsgUnrollRemoteRouterAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.receiver_domain = message.receiverDomain === 0 ? undefined : message.receiverDomain;
    return obj;
  },
  fromAminoMsg(object: MsgUnrollRemoteRouterAminoMsg): MsgUnrollRemoteRouter {
    return MsgUnrollRemoteRouter.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnrollRemoteRouter): MsgUnrollRemoteRouterAminoMsg {
    return {
      type: "hyperlane/warp/v1/MsgUnrollRemoteRouter",
      value: MsgUnrollRemoteRouter.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnrollRemoteRouterProtoMsg): MsgUnrollRemoteRouter {
    return MsgUnrollRemoteRouter.decode(message.value);
  },
  toProto(message: MsgUnrollRemoteRouter): Uint8Array {
    return MsgUnrollRemoteRouter.encode(message).finish();
  },
  toProtoMsg(message: MsgUnrollRemoteRouter): MsgUnrollRemoteRouterProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouter",
      value: MsgUnrollRemoteRouter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnrollRemoteRouterResponse(): MsgUnrollRemoteRouterResponse {
  return {};
}
/**
 * MsgUnrollRemoteRouterResponse ...
 * @name MsgUnrollRemoteRouterResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgUnrollRemoteRouterResponse
 */
export const MsgUnrollRemoteRouterResponse = {
  typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouterResponse",
  is(o: any): o is MsgUnrollRemoteRouterResponse {
    return o && o.$typeUrl === MsgUnrollRemoteRouterResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnrollRemoteRouterResponseAmino {
    return o && o.$typeUrl === MsgUnrollRemoteRouterResponse.typeUrl;
  },
  encode(_: MsgUnrollRemoteRouterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnrollRemoteRouterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnrollRemoteRouterResponse();
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
  fromPartial(_: DeepPartial<MsgUnrollRemoteRouterResponse>): MsgUnrollRemoteRouterResponse {
    const message = createBaseMsgUnrollRemoteRouterResponse();
    return message;
  },
  fromAmino(_: MsgUnrollRemoteRouterResponseAmino): MsgUnrollRemoteRouterResponse {
    const message = createBaseMsgUnrollRemoteRouterResponse();
    return message;
  },
  toAmino(_: MsgUnrollRemoteRouterResponse): MsgUnrollRemoteRouterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnrollRemoteRouterResponseAminoMsg): MsgUnrollRemoteRouterResponse {
    return MsgUnrollRemoteRouterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnrollRemoteRouterResponseProtoMsg): MsgUnrollRemoteRouterResponse {
    return MsgUnrollRemoteRouterResponse.decode(message.value);
  },
  toProto(message: MsgUnrollRemoteRouterResponse): Uint8Array {
    return MsgUnrollRemoteRouterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnrollRemoteRouterResponse): MsgUnrollRemoteRouterResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouterResponse",
      value: MsgUnrollRemoteRouterResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRemoteTransfer(): MsgRemoteTransfer {
  return {
    sender: "",
    tokenId: "",
    destinationDomain: 0,
    recipient: "",
    amount: "",
    customHookId: undefined,
    gasLimit: "",
    maxFee: Coin.fromPartial({}),
    customHookMetadata: ""
  };
}
/**
 * MsgRemoteTransfer ...
 * @name MsgRemoteTransfer
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgRemoteTransfer
 */
export const MsgRemoteTransfer = {
  typeUrl: "/hyperlane.warp.v1.MsgRemoteTransfer",
  aminoType: "hyperlane/warp/v1/MsgRemoteTransfer",
  is(o: any): o is MsgRemoteTransfer {
    return o && (o.$typeUrl === MsgRemoteTransfer.typeUrl || typeof o.sender === "string" && typeof o.tokenId === "string" && typeof o.destinationDomain === "number" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.gasLimit === "string" && Coin.is(o.maxFee) && typeof o.customHookMetadata === "string");
  },
  isAmino(o: any): o is MsgRemoteTransferAmino {
    return o && (o.$typeUrl === MsgRemoteTransfer.typeUrl || typeof o.sender === "string" && typeof o.token_id === "string" && typeof o.destination_domain === "number" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.gas_limit === "string" && Coin.isAmino(o.max_fee) && typeof o.custom_hook_metadata === "string");
  },
  encode(message: MsgRemoteTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
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
    if (message.customHookId !== undefined) {
      writer.uint32(50).string(message.customHookId);
    }
    if (message.gasLimit !== "") {
      writer.uint32(58).string(message.gasLimit);
    }
    if (message.maxFee !== undefined) {
      Coin.encode(message.maxFee, writer.uint32(66).fork()).ldelim();
    }
    if (message.customHookMetadata !== "") {
      writer.uint32(74).string(message.customHookMetadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoteTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoteTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
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
        case 6:
          message.customHookId = reader.string();
          break;
        case 7:
          message.gasLimit = reader.string();
          break;
        case 8:
          message.maxFee = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.customHookMetadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoteTransfer>): MsgRemoteTransfer {
    const message = createBaseMsgRemoteTransfer();
    message.sender = object.sender ?? "";
    message.tokenId = object.tokenId ?? "";
    message.destinationDomain = object.destinationDomain ?? 0;
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.customHookId = object.customHookId ?? undefined;
    message.gasLimit = object.gasLimit ?? "";
    message.maxFee = object.maxFee !== undefined && object.maxFee !== null ? Coin.fromPartial(object.maxFee) : undefined;
    message.customHookMetadata = object.customHookMetadata ?? "";
    return message;
  },
  fromAmino(object: MsgRemoteTransferAmino): MsgRemoteTransfer {
    const message = createBaseMsgRemoteTransfer();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = object.token_id;
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
    if (object.custom_hook_id !== undefined && object.custom_hook_id !== null) {
      message.customHookId = object.custom_hook_id;
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = object.gas_limit;
    }
    if (object.max_fee !== undefined && object.max_fee !== null) {
      message.maxFee = Coin.fromAmino(object.max_fee);
    }
    if (object.custom_hook_metadata !== undefined && object.custom_hook_metadata !== null) {
      message.customHookMetadata = object.custom_hook_metadata;
    }
    return message;
  },
  toAmino(message: MsgRemoteTransfer): MsgRemoteTransferAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.token_id = message.tokenId === "" ? undefined : message.tokenId;
    obj.destination_domain = message.destinationDomain === 0 ? undefined : message.destinationDomain;
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.amount = message.amount ?? "";
    obj.custom_hook_id = message.customHookId === null ? undefined : message.customHookId;
    obj.gas_limit = message.gasLimit === "" ? undefined : message.gasLimit;
    obj.max_fee = message.maxFee ? Coin.toAmino(message.maxFee) : Coin.toAmino(Coin.fromPartial({}));
    obj.custom_hook_metadata = message.customHookMetadata === "" ? undefined : message.customHookMetadata;
    return obj;
  },
  fromAminoMsg(object: MsgRemoteTransferAminoMsg): MsgRemoteTransfer {
    return MsgRemoteTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoteTransfer): MsgRemoteTransferAminoMsg {
    return {
      type: "hyperlane/warp/v1/MsgRemoteTransfer",
      value: MsgRemoteTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoteTransferProtoMsg): MsgRemoteTransfer {
    return MsgRemoteTransfer.decode(message.value);
  },
  toProto(message: MsgRemoteTransfer): Uint8Array {
    return MsgRemoteTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoteTransfer): MsgRemoteTransferProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgRemoteTransfer",
      value: MsgRemoteTransfer.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgRemoteTransfer.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgRemoteTransferResponse(): MsgRemoteTransferResponse {
  return {
    messageId: ""
  };
}
/**
 * MsgRemoteTransferResponse ...
 * @name MsgRemoteTransferResponse
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.MsgRemoteTransferResponse
 */
export const MsgRemoteTransferResponse = {
  typeUrl: "/hyperlane.warp.v1.MsgRemoteTransferResponse",
  is(o: any): o is MsgRemoteTransferResponse {
    return o && (o.$typeUrl === MsgRemoteTransferResponse.typeUrl || typeof o.messageId === "string");
  },
  isAmino(o: any): o is MsgRemoteTransferResponseAmino {
    return o && (o.$typeUrl === MsgRemoteTransferResponse.typeUrl || typeof o.message_id === "string");
  },
  encode(message: MsgRemoteTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageId !== "") {
      writer.uint32(10).string(message.messageId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoteTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoteTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRemoteTransferResponse>): MsgRemoteTransferResponse {
    const message = createBaseMsgRemoteTransferResponse();
    message.messageId = object.messageId ?? "";
    return message;
  },
  fromAmino(object: MsgRemoteTransferResponseAmino): MsgRemoteTransferResponse {
    const message = createBaseMsgRemoteTransferResponse();
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    return message;
  },
  toAmino(message: MsgRemoteTransferResponse): MsgRemoteTransferResponseAmino {
    const obj: any = {};
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    return obj;
  },
  fromAminoMsg(object: MsgRemoteTransferResponseAminoMsg): MsgRemoteTransferResponse {
    return MsgRemoteTransferResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoteTransferResponseProtoMsg): MsgRemoteTransferResponse {
    return MsgRemoteTransferResponse.decode(message.value);
  },
  toProto(message: MsgRemoteTransferResponse): Uint8Array {
    return MsgRemoteTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoteTransferResponse): MsgRemoteTransferResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.MsgRemoteTransferResponse",
      value: MsgRemoteTransferResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};