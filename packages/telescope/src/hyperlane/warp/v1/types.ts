import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, isSet } from "../../../helpers";
/** HypTokenType ... */
export enum HypTokenType {
  /** HYP_TOKEN_TYPE_UNSPECIFIED - HYP_TOKEN_TYPE_UNSPECIFIED ... */
  HYP_TOKEN_TYPE_UNSPECIFIED = 0,
  /** HYP_TOKEN_TYPE_COLLATERAL - HYP_TOKEN_TYPE_COLLATERAL ... */
  HYP_TOKEN_TYPE_COLLATERAL = 1,
  /** HYP_TOKEN_TYPE_SYNTHETIC - HYP_TOKEN_TYPE_SYNTHETIC ... */
  HYP_TOKEN_TYPE_SYNTHETIC = 2,
  UNRECOGNIZED = -1,
}
export const HypTokenTypeAmino = HypTokenType;
export function hypTokenTypeFromJSON(object: any): HypTokenType {
  switch (object) {
    case 0:
    case "HYP_TOKEN_TYPE_UNSPECIFIED":
      return HypTokenType.HYP_TOKEN_TYPE_UNSPECIFIED;
    case 1:
    case "HYP_TOKEN_TYPE_COLLATERAL":
      return HypTokenType.HYP_TOKEN_TYPE_COLLATERAL;
    case 2:
    case "HYP_TOKEN_TYPE_SYNTHETIC":
      return HypTokenType.HYP_TOKEN_TYPE_SYNTHETIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HypTokenType.UNRECOGNIZED;
  }
}
export function hypTokenTypeToJSON(object: HypTokenType): string {
  switch (object) {
    case HypTokenType.HYP_TOKEN_TYPE_UNSPECIFIED:
      return "HYP_TOKEN_TYPE_UNSPECIFIED";
    case HypTokenType.HYP_TOKEN_TYPE_COLLATERAL:
      return "HYP_TOKEN_TYPE_COLLATERAL";
    case HypTokenType.HYP_TOKEN_TYPE_SYNTHETIC:
      return "HYP_TOKEN_TYPE_SYNTHETIC";
    case HypTokenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Params
 * @name Params
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.Params
 */
export interface Params {}
export interface ParamsProtoMsg {
  typeUrl: "/hyperlane.warp.v1.Params";
  value: Uint8Array;
}
/**
 * Params
 * @name ParamsAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.Params
 */
export interface ParamsAmino {}
export interface ParamsAminoMsg {
  type: "hyperlane/warp/Params";
  value: ParamsAmino;
}
/**
 * HypToken ...
 * @name HypToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.HypToken
 */
export interface HypToken {
  id: string;
  owner: string;
  tokenType: HypTokenType;
  originMailbox: string;
  originDenom: string;
  collateralBalance: string;
  ismId?: string;
}
export interface HypTokenProtoMsg {
  typeUrl: "/hyperlane.warp.v1.HypToken";
  value: Uint8Array;
}
/**
 * HypToken ...
 * @name HypTokenAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.HypToken
 */
export interface HypTokenAmino {
  id: string;
  owner: string;
  token_type: HypTokenType;
  origin_mailbox: string;
  origin_denom: string;
  collateral_balance: string;
  ism_id?: string;
}
export interface HypTokenAminoMsg {
  type: "/hyperlane.warp.v1.HypToken";
  value: HypTokenAmino;
}
/**
 * RemoteRouter ...
 * @name RemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.RemoteRouter
 */
export interface RemoteRouter {
  receiverDomain: number;
  receiverContract: string;
  gas: string;
}
export interface RemoteRouterProtoMsg {
  typeUrl: "/hyperlane.warp.v1.RemoteRouter";
  value: Uint8Array;
}
/**
 * RemoteRouter ...
 * @name RemoteRouterAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.RemoteRouter
 */
export interface RemoteRouterAmino {
  receiver_domain: number;
  receiver_contract: string;
  gas: string;
}
export interface RemoteRouterAminoMsg {
  type: "/hyperlane.warp.v1.RemoteRouter";
  value: RemoteRouterAmino;
}
function createBaseParams(): Params {
  return {};
}
/**
 * Params
 * @name Params
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.Params
 */
export const Params = {
  typeUrl: "/hyperlane.warp.v1.Params",
  aminoType: "hyperlane/warp/Params",
  is(o: any): o is Params {
    return o && o.$typeUrl === Params.typeUrl;
  },
  isAmino(o: any): o is ParamsAmino {
    return o && o.$typeUrl === Params.typeUrl;
  },
  encode(_: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
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
  fromPartial(_: DeepPartial<Params>): Params {
    const message = createBaseParams();
    return message;
  },
  fromAmino(_: ParamsAmino): Params {
    const message = createBaseParams();
    return message;
  },
  toAmino(_: Params): ParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "hyperlane/warp/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseHypToken(): HypToken {
  return {
    id: "",
    owner: "",
    tokenType: 0,
    originMailbox: "",
    originDenom: "",
    collateralBalance: "",
    ismId: undefined
  };
}
/**
 * HypToken ...
 * @name HypToken
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.HypToken
 */
export const HypToken = {
  typeUrl: "/hyperlane.warp.v1.HypToken",
  is(o: any): o is HypToken {
    return o && (o.$typeUrl === HypToken.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && isSet(o.tokenType) && typeof o.originMailbox === "string" && typeof o.originDenom === "string" && typeof o.collateralBalance === "string");
  },
  isAmino(o: any): o is HypTokenAmino {
    return o && (o.$typeUrl === HypToken.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && isSet(o.token_type) && typeof o.origin_mailbox === "string" && typeof o.origin_denom === "string" && typeof o.collateral_balance === "string");
  },
  encode(message: HypToken, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.tokenType !== 0) {
      writer.uint32(24).int32(message.tokenType);
    }
    if (message.originMailbox !== "") {
      writer.uint32(34).string(message.originMailbox);
    }
    if (message.originDenom !== "") {
      writer.uint32(42).string(message.originDenom);
    }
    if (message.collateralBalance !== "") {
      writer.uint32(50).string(message.collateralBalance);
    }
    if (message.ismId !== undefined) {
      writer.uint32(58).string(message.ismId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HypToken {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHypToken();
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
          message.tokenType = reader.int32() as any;
          break;
        case 4:
          message.originMailbox = reader.string();
          break;
        case 5:
          message.originDenom = reader.string();
          break;
        case 6:
          message.collateralBalance = reader.string();
          break;
        case 7:
          message.ismId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<HypToken>): HypToken {
    const message = createBaseHypToken();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.tokenType = object.tokenType ?? 0;
    message.originMailbox = object.originMailbox ?? "";
    message.originDenom = object.originDenom ?? "";
    message.collateralBalance = object.collateralBalance ?? "";
    message.ismId = object.ismId ?? undefined;
    return message;
  },
  fromAmino(object: HypTokenAmino): HypToken {
    const message = createBaseHypToken();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.token_type !== undefined && object.token_type !== null) {
      message.tokenType = object.token_type;
    }
    if (object.origin_mailbox !== undefined && object.origin_mailbox !== null) {
      message.originMailbox = object.origin_mailbox;
    }
    if (object.origin_denom !== undefined && object.origin_denom !== null) {
      message.originDenom = object.origin_denom;
    }
    if (object.collateral_balance !== undefined && object.collateral_balance !== null) {
      message.collateralBalance = object.collateral_balance;
    }
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    return message;
  },
  toAmino(message: HypToken): HypTokenAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.token_type = message.tokenType === 0 ? undefined : message.tokenType;
    obj.origin_mailbox = message.originMailbox === "" ? undefined : message.originMailbox;
    obj.origin_denom = message.originDenom === "" ? undefined : message.originDenom;
    obj.collateral_balance = message.collateralBalance === "" ? undefined : message.collateralBalance;
    obj.ism_id = message.ismId === null ? undefined : message.ismId;
    return obj;
  },
  fromAminoMsg(object: HypTokenAminoMsg): HypToken {
    return HypToken.fromAmino(object.value);
  },
  fromProtoMsg(message: HypTokenProtoMsg): HypToken {
    return HypToken.decode(message.value);
  },
  toProto(message: HypToken): Uint8Array {
    return HypToken.encode(message).finish();
  },
  toProtoMsg(message: HypToken): HypTokenProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.HypToken",
      value: HypToken.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRemoteRouter(): RemoteRouter {
  return {
    receiverDomain: 0,
    receiverContract: "",
    gas: ""
  };
}
/**
 * RemoteRouter ...
 * @name RemoteRouter
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.RemoteRouter
 */
export const RemoteRouter = {
  typeUrl: "/hyperlane.warp.v1.RemoteRouter",
  is(o: any): o is RemoteRouter {
    return o && (o.$typeUrl === RemoteRouter.typeUrl || typeof o.receiverDomain === "number" && typeof o.receiverContract === "string" && typeof o.gas === "string");
  },
  isAmino(o: any): o is RemoteRouterAmino {
    return o && (o.$typeUrl === RemoteRouter.typeUrl || typeof o.receiver_domain === "number" && typeof o.receiver_contract === "string" && typeof o.gas === "string");
  },
  encode(message: RemoteRouter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.receiverDomain !== 0) {
      writer.uint32(8).uint32(message.receiverDomain);
    }
    if (message.receiverContract !== "") {
      writer.uint32(18).string(message.receiverContract);
    }
    if (message.gas !== "") {
      writer.uint32(26).string(message.gas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RemoteRouter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoteRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receiverDomain = reader.uint32();
          break;
        case 2:
          message.receiverContract = reader.string();
          break;
        case 3:
          message.gas = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RemoteRouter>): RemoteRouter {
    const message = createBaseRemoteRouter();
    message.receiverDomain = object.receiverDomain ?? 0;
    message.receiverContract = object.receiverContract ?? "";
    message.gas = object.gas ?? "";
    return message;
  },
  fromAmino(object: RemoteRouterAmino): RemoteRouter {
    const message = createBaseRemoteRouter();
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
  toAmino(message: RemoteRouter): RemoteRouterAmino {
    const obj: any = {};
    obj.receiver_domain = message.receiverDomain === 0 ? undefined : message.receiverDomain;
    obj.receiver_contract = message.receiverContract === "" ? undefined : message.receiverContract;
    obj.gas = message.gas === "" ? undefined : message.gas;
    return obj;
  },
  fromAminoMsg(object: RemoteRouterAminoMsg): RemoteRouter {
    return RemoteRouter.fromAmino(object.value);
  },
  fromProtoMsg(message: RemoteRouterProtoMsg): RemoteRouter {
    return RemoteRouter.decode(message.value);
  },
  toProto(message: RemoteRouter): Uint8Array {
    return RemoteRouter.encode(message).finish();
  },
  toProtoMsg(message: RemoteRouter): RemoteRouterProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.RemoteRouter",
      value: RemoteRouter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};