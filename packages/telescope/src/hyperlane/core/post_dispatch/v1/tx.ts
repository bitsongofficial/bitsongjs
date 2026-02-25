import { DestinationGasConfig, DestinationGasConfigAmino } from "./types";
import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * MsgCreateIgp ...
 * @name MsgCreateIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateIgp
 */
export interface MsgCreateIgp {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * denom
   */
  denom: string;
}
export interface MsgCreateIgpProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgp";
  value: Uint8Array;
}
/**
 * MsgCreateIgp ...
 * @name MsgCreateIgpAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateIgp
 */
export interface MsgCreateIgpAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * denom
   */
  denom: string;
}
export interface MsgCreateIgpAminoMsg {
  type: "hyperlane/v1/MsgCreateInterchainGasPaymaster";
  value: MsgCreateIgpAmino;
}
/**
 * MsgCreateIgpResponse ...
 * @name MsgCreateIgpResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateIgpResponse
 */
export interface MsgCreateIgpResponse {
  id: string;
}
export interface MsgCreateIgpResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgpResponse";
  value: Uint8Array;
}
/**
 * MsgCreateIgpResponse ...
 * @name MsgCreateIgpResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateIgpResponse
 */
export interface MsgCreateIgpResponseAmino {
  id: string;
}
export interface MsgCreateIgpResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MsgCreateIgpResponse";
  value: MsgCreateIgpResponseAmino;
}
/**
 * MsgSetIgpOwner ...
 * @name MsgSetIgpOwner
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetIgpOwner
 */
export interface MsgSetIgpOwner {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * igp_id
   */
  igpId: string;
  /**
   * new_owner
   */
  newOwner: string;
  /**
   * renounce_ownership
   */
  renounceOwnership: boolean;
}
export interface MsgSetIgpOwnerProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwner";
  value: Uint8Array;
}
/**
 * MsgSetIgpOwner ...
 * @name MsgSetIgpOwnerAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetIgpOwner
 */
export interface MsgSetIgpOwnerAmino {
  /**
   * owner is the message sender.
   */
  owner: string;
  /**
   * igp_id
   */
  igp_id: string;
  /**
   * new_owner
   */
  new_owner: string;
  /**
   * renounce_ownership
   */
  renounce_ownership: boolean;
}
export interface MsgSetIgpOwnerAminoMsg {
  type: "hyperlane/v1/MsgSetIgpOwner";
  value: MsgSetIgpOwnerAmino;
}
/**
 * MsgCreateIgpResponse ...
 * @name MsgSetIgpOwnerResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetIgpOwnerResponse
 */
export interface MsgSetIgpOwnerResponse {}
export interface MsgSetIgpOwnerResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwnerResponse";
  value: Uint8Array;
}
/**
 * MsgCreateIgpResponse ...
 * @name MsgSetIgpOwnerResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetIgpOwnerResponse
 */
export interface MsgSetIgpOwnerResponseAmino {}
export interface MsgSetIgpOwnerResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwnerResponse";
  value: MsgSetIgpOwnerResponseAmino;
}
/**
 * MsgSetDestinationGasConfig ...
 * @name MsgSetDestinationGasConfig
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig
 */
export interface MsgSetDestinationGasConfig {
  /**
   * owner ...
   */
  owner: string;
  /**
   * igp_id ...
   */
  igpId: string;
  /**
   * destination_gas_config ...
   */
  destinationGasConfig?: DestinationGasConfig;
}
export interface MsgSetDestinationGasConfigProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig";
  value: Uint8Array;
}
/**
 * MsgSetDestinationGasConfig ...
 * @name MsgSetDestinationGasConfigAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig
 */
export interface MsgSetDestinationGasConfigAmino {
  /**
   * owner ...
   */
  owner: string;
  /**
   * igp_id ...
   */
  igp_id: string;
  /**
   * destination_gas_config ...
   */
  destination_gas_config?: DestinationGasConfigAmino;
}
export interface MsgSetDestinationGasConfigAminoMsg {
  type: "hyperlane/v1/MsgSetDestinationGasConfig";
  value: MsgSetDestinationGasConfigAmino;
}
/**
 * MsgSetDestinationGasConfigResponse ...
 * @name MsgSetDestinationGasConfigResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfigResponse
 */
export interface MsgSetDestinationGasConfigResponse {}
export interface MsgSetDestinationGasConfigResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfigResponse";
  value: Uint8Array;
}
/**
 * MsgSetDestinationGasConfigResponse ...
 * @name MsgSetDestinationGasConfigResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfigResponse
 */
export interface MsgSetDestinationGasConfigResponseAmino {}
export interface MsgSetDestinationGasConfigResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfigResponse";
  value: MsgSetDestinationGasConfigResponseAmino;
}
/**
 * MsgPayForGas ...
 * @name MsgPayForGas
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgPayForGas
 */
export interface MsgPayForGas {
  /**
   * sender ...
   */
  sender: string;
  /**
   * igp_id ...
   */
  igpId: string;
  /**
   * message_id ...
   */
  messageId: string;
  /**
   * destination_domain ...
   */
  destinationDomain: number;
  /**
   * gas_limit ...
   */
  gasLimit: string;
  /**
   * amount ...
   */
  amount: Coin;
}
export interface MsgPayForGasProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGas";
  value: Uint8Array;
}
/**
 * MsgPayForGas ...
 * @name MsgPayForGasAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgPayForGas
 */
export interface MsgPayForGasAmino {
  /**
   * sender ...
   */
  sender: string;
  /**
   * igp_id ...
   */
  igp_id: string;
  /**
   * message_id ...
   */
  message_id: string;
  /**
   * destination_domain ...
   */
  destination_domain: number;
  /**
   * gas_limit ...
   */
  gas_limit: string;
  /**
   * amount ...
   */
  amount: CoinAmino;
}
export interface MsgPayForGasAminoMsg {
  type: "hyperlane/v1/MsgPayForGas";
  value: MsgPayForGasAmino;
}
/**
 * MsgPayForGasResponse ...
 * @name MsgPayForGasResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgPayForGasResponse
 */
export interface MsgPayForGasResponse {}
export interface MsgPayForGasResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGasResponse";
  value: Uint8Array;
}
/**
 * MsgPayForGasResponse ...
 * @name MsgPayForGasResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgPayForGasResponse
 */
export interface MsgPayForGasResponseAmino {}
export interface MsgPayForGasResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MsgPayForGasResponse";
  value: MsgPayForGasResponseAmino;
}
/**
 * MsgClaim ...
 * @name MsgClaim
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgClaim
 */
export interface MsgClaim {
  /**
   * sender ...
   */
  sender: string;
  /**
   * igp_id ...
   */
  igpId: string;
}
export interface MsgClaimProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaim";
  value: Uint8Array;
}
/**
 * MsgClaim ...
 * @name MsgClaimAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgClaim
 */
export interface MsgClaimAmino {
  /**
   * sender ...
   */
  sender: string;
  /**
   * igp_id ...
   */
  igp_id: string;
}
export interface MsgClaimAminoMsg {
  type: "hyperlane/v1/MsgClaim";
  value: MsgClaimAmino;
}
/**
 * MsgClaimResponse ...
 * @name MsgClaimResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgClaimResponse
 */
export interface MsgClaimResponse {}
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaimResponse";
  value: Uint8Array;
}
/**
 * MsgClaimResponse ...
 * @name MsgClaimResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgClaimResponse
 */
export interface MsgClaimResponseAmino {}
export interface MsgClaimResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
/**
 * MsgMerkleTreeHook ...
 * @name MsgCreateMerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook
 */
export interface MsgCreateMerkleTreeHook {
  /**
   * sender ...
   */
  owner: string;
  mailboxId: string;
}
export interface MsgCreateMerkleTreeHookProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook";
  value: Uint8Array;
}
/**
 * MsgMerkleTreeHook ...
 * @name MsgCreateMerkleTreeHookAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook
 */
export interface MsgCreateMerkleTreeHookAmino {
  /**
   * sender ...
   */
  owner: string;
  mailbox_id: string;
}
export interface MsgCreateMerkleTreeHookAminoMsg {
  type: "hyperlane/v1/MsgCreateMerkleTreeHook";
  value: MsgCreateMerkleTreeHookAmino;
}
/**
 * MsgCreateMerkleTreeHookResponse ...
 * @name MsgCreateMerkleTreeHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHookResponse
 */
export interface MsgCreateMerkleTreeHookResponse {
  id: string;
}
export interface MsgCreateMerkleTreeHookResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHookResponse";
  value: Uint8Array;
}
/**
 * MsgCreateMerkleTreeHookResponse ...
 * @name MsgCreateMerkleTreeHookResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHookResponse
 */
export interface MsgCreateMerkleTreeHookResponseAmino {
  id: string;
}
export interface MsgCreateMerkleTreeHookResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHookResponse";
  value: MsgCreateMerkleTreeHookResponseAmino;
}
/**
 * MsgMerkleTreeHook ...
 * @name MsgCreateNoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateNoopHook
 */
export interface MsgCreateNoopHook {
  /**
   * sender ...
   */
  owner: string;
}
export interface MsgCreateNoopHookProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHook";
  value: Uint8Array;
}
/**
 * MsgMerkleTreeHook ...
 * @name MsgCreateNoopHookAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateNoopHook
 */
export interface MsgCreateNoopHookAmino {
  /**
   * sender ...
   */
  owner: string;
}
export interface MsgCreateNoopHookAminoMsg {
  type: "hyperlane/v1/MsgCreateMerkleTreeHook";
  value: MsgCreateNoopHookAmino;
}
/**
 * MsgCreateMerkleTreeHookResponse ...
 * @name MsgCreateNoopHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateNoopHookResponse
 */
export interface MsgCreateNoopHookResponse {
  id: string;
}
export interface MsgCreateNoopHookResponseProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHookResponse";
  value: Uint8Array;
}
/**
 * MsgCreateMerkleTreeHookResponse ...
 * @name MsgCreateNoopHookResponseAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateNoopHookResponse
 */
export interface MsgCreateNoopHookResponseAmino {
  id: string;
}
export interface MsgCreateNoopHookResponseAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHookResponse";
  value: MsgCreateNoopHookResponseAmino;
}
function createBaseMsgCreateIgp(): MsgCreateIgp {
  return {
    owner: "",
    denom: ""
  };
}
/**
 * MsgCreateIgp ...
 * @name MsgCreateIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateIgp
 */
export const MsgCreateIgp = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgp",
  aminoType: "hyperlane/v1/MsgCreateInterchainGasPaymaster",
  is(o: any): o is MsgCreateIgp {
    return o && (o.$typeUrl === MsgCreateIgp.typeUrl || typeof o.owner === "string" && typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgCreateIgpAmino {
    return o && (o.$typeUrl === MsgCreateIgp.typeUrl || typeof o.owner === "string" && typeof o.denom === "string");
  },
  encode(message: MsgCreateIgp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateIgp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIgp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateIgp>): MsgCreateIgp {
    const message = createBaseMsgCreateIgp();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateIgpAmino): MsgCreateIgp {
    const message = createBaseMsgCreateIgp();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgCreateIgp): MsgCreateIgpAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateIgpAminoMsg): MsgCreateIgp {
    return MsgCreateIgp.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateIgp): MsgCreateIgpAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateInterchainGasPaymaster",
      value: MsgCreateIgp.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateIgpProtoMsg): MsgCreateIgp {
    return MsgCreateIgp.decode(message.value);
  },
  toProto(message: MsgCreateIgp): Uint8Array {
    return MsgCreateIgp.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIgp): MsgCreateIgpProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgp",
      value: MsgCreateIgp.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateIgpResponse(): MsgCreateIgpResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateIgpResponse ...
 * @name MsgCreateIgpResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateIgpResponse
 */
export const MsgCreateIgpResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgpResponse",
  is(o: any): o is MsgCreateIgpResponse {
    return o && (o.$typeUrl === MsgCreateIgpResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateIgpResponseAmino {
    return o && (o.$typeUrl === MsgCreateIgpResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateIgpResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateIgpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIgpResponse();
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
  fromPartial(object: DeepPartial<MsgCreateIgpResponse>): MsgCreateIgpResponse {
    const message = createBaseMsgCreateIgpResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateIgpResponseAmino): MsgCreateIgpResponse {
    const message = createBaseMsgCreateIgpResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateIgpResponse): MsgCreateIgpResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateIgpResponseAminoMsg): MsgCreateIgpResponse {
    return MsgCreateIgpResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateIgpResponseProtoMsg): MsgCreateIgpResponse {
    return MsgCreateIgpResponse.decode(message.value);
  },
  toProto(message: MsgCreateIgpResponse): Uint8Array {
    return MsgCreateIgpResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIgpResponse): MsgCreateIgpResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgpResponse",
      value: MsgCreateIgpResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetIgpOwner(): MsgSetIgpOwner {
  return {
    owner: "",
    igpId: "",
    newOwner: "",
    renounceOwnership: false
  };
}
/**
 * MsgSetIgpOwner ...
 * @name MsgSetIgpOwner
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetIgpOwner
 */
export const MsgSetIgpOwner = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwner",
  aminoType: "hyperlane/v1/MsgSetIgpOwner",
  is(o: any): o is MsgSetIgpOwner {
    return o && (o.$typeUrl === MsgSetIgpOwner.typeUrl || typeof o.owner === "string" && typeof o.igpId === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is MsgSetIgpOwnerAmino {
    return o && (o.$typeUrl === MsgSetIgpOwner.typeUrl || typeof o.owner === "string" && typeof o.igp_id === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: MsgSetIgpOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.igpId !== "") {
      writer.uint32(18).string(message.igpId);
    }
    if (message.newOwner !== "") {
      writer.uint32(26).string(message.newOwner);
    }
    if (message.renounceOwnership === true) {
      writer.uint32(32).bool(message.renounceOwnership);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetIgpOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetIgpOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.igpId = reader.string();
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
  fromPartial(object: DeepPartial<MsgSetIgpOwner>): MsgSetIgpOwner {
    const message = createBaseMsgSetIgpOwner();
    message.owner = object.owner ?? "";
    message.igpId = object.igpId ?? "";
    message.newOwner = object.newOwner ?? "";
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: MsgSetIgpOwnerAmino): MsgSetIgpOwner {
    const message = createBaseMsgSetIgpOwner();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.new_owner !== undefined && object.new_owner !== null) {
      message.newOwner = object.new_owner;
    }
    if (object.renounce_ownership !== undefined && object.renounce_ownership !== null) {
      message.renounceOwnership = object.renounce_ownership;
    }
    return message;
  },
  toAmino(message: MsgSetIgpOwner): MsgSetIgpOwnerAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: MsgSetIgpOwnerAminoMsg): MsgSetIgpOwner {
    return MsgSetIgpOwner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetIgpOwner): MsgSetIgpOwnerAminoMsg {
    return {
      type: "hyperlane/v1/MsgSetIgpOwner",
      value: MsgSetIgpOwner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetIgpOwnerProtoMsg): MsgSetIgpOwner {
    return MsgSetIgpOwner.decode(message.value);
  },
  toProto(message: MsgSetIgpOwner): Uint8Array {
    return MsgSetIgpOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgSetIgpOwner): MsgSetIgpOwnerProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwner",
      value: MsgSetIgpOwner.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetIgpOwnerResponse(): MsgSetIgpOwnerResponse {
  return {};
}
/**
 * MsgCreateIgpResponse ...
 * @name MsgSetIgpOwnerResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetIgpOwnerResponse
 */
export const MsgSetIgpOwnerResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwnerResponse",
  is(o: any): o is MsgSetIgpOwnerResponse {
    return o && o.$typeUrl === MsgSetIgpOwnerResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetIgpOwnerResponseAmino {
    return o && o.$typeUrl === MsgSetIgpOwnerResponse.typeUrl;
  },
  encode(_: MsgSetIgpOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetIgpOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetIgpOwnerResponse();
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
  fromPartial(_: DeepPartial<MsgSetIgpOwnerResponse>): MsgSetIgpOwnerResponse {
    const message = createBaseMsgSetIgpOwnerResponse();
    return message;
  },
  fromAmino(_: MsgSetIgpOwnerResponseAmino): MsgSetIgpOwnerResponse {
    const message = createBaseMsgSetIgpOwnerResponse();
    return message;
  },
  toAmino(_: MsgSetIgpOwnerResponse): MsgSetIgpOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetIgpOwnerResponseAminoMsg): MsgSetIgpOwnerResponse {
    return MsgSetIgpOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetIgpOwnerResponseProtoMsg): MsgSetIgpOwnerResponse {
    return MsgSetIgpOwnerResponse.decode(message.value);
  },
  toProto(message: MsgSetIgpOwnerResponse): Uint8Array {
    return MsgSetIgpOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetIgpOwnerResponse): MsgSetIgpOwnerResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwnerResponse",
      value: MsgSetIgpOwnerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetDestinationGasConfig(): MsgSetDestinationGasConfig {
  return {
    owner: "",
    igpId: "",
    destinationGasConfig: undefined
  };
}
/**
 * MsgSetDestinationGasConfig ...
 * @name MsgSetDestinationGasConfig
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig
 */
export const MsgSetDestinationGasConfig = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig",
  aminoType: "hyperlane/v1/MsgSetDestinationGasConfig",
  is(o: any): o is MsgSetDestinationGasConfig {
    return o && (o.$typeUrl === MsgSetDestinationGasConfig.typeUrl || typeof o.owner === "string" && typeof o.igpId === "string");
  },
  isAmino(o: any): o is MsgSetDestinationGasConfigAmino {
    return o && (o.$typeUrl === MsgSetDestinationGasConfig.typeUrl || typeof o.owner === "string" && typeof o.igp_id === "string");
  },
  encode(message: MsgSetDestinationGasConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.igpId !== "") {
      writer.uint32(18).string(message.igpId);
    }
    if (message.destinationGasConfig !== undefined) {
      DestinationGasConfig.encode(message.destinationGasConfig, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDestinationGasConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDestinationGasConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.igpId = reader.string();
          break;
        case 3:
          message.destinationGasConfig = DestinationGasConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetDestinationGasConfig>): MsgSetDestinationGasConfig {
    const message = createBaseMsgSetDestinationGasConfig();
    message.owner = object.owner ?? "";
    message.igpId = object.igpId ?? "";
    message.destinationGasConfig = object.destinationGasConfig !== undefined && object.destinationGasConfig !== null ? DestinationGasConfig.fromPartial(object.destinationGasConfig) : undefined;
    return message;
  },
  fromAmino(object: MsgSetDestinationGasConfigAmino): MsgSetDestinationGasConfig {
    const message = createBaseMsgSetDestinationGasConfig();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.destination_gas_config !== undefined && object.destination_gas_config !== null) {
      message.destinationGasConfig = DestinationGasConfig.fromAmino(object.destination_gas_config);
    }
    return message;
  },
  toAmino(message: MsgSetDestinationGasConfig): MsgSetDestinationGasConfigAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.destination_gas_config = message.destinationGasConfig ? DestinationGasConfig.toAmino(message.destinationGasConfig) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetDestinationGasConfigAminoMsg): MsgSetDestinationGasConfig {
    return MsgSetDestinationGasConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetDestinationGasConfig): MsgSetDestinationGasConfigAminoMsg {
    return {
      type: "hyperlane/v1/MsgSetDestinationGasConfig",
      value: MsgSetDestinationGasConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetDestinationGasConfigProtoMsg): MsgSetDestinationGasConfig {
    return MsgSetDestinationGasConfig.decode(message.value);
  },
  toProto(message: MsgSetDestinationGasConfig): Uint8Array {
    return MsgSetDestinationGasConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDestinationGasConfig): MsgSetDestinationGasConfigProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig",
      value: MsgSetDestinationGasConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSetDestinationGasConfig.typeUrl)) {
      return;
    }
    DestinationGasConfig.registerTypeUrl();
  }
};
function createBaseMsgSetDestinationGasConfigResponse(): MsgSetDestinationGasConfigResponse {
  return {};
}
/**
 * MsgSetDestinationGasConfigResponse ...
 * @name MsgSetDestinationGasConfigResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfigResponse
 */
export const MsgSetDestinationGasConfigResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfigResponse",
  is(o: any): o is MsgSetDestinationGasConfigResponse {
    return o && o.$typeUrl === MsgSetDestinationGasConfigResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetDestinationGasConfigResponseAmino {
    return o && o.$typeUrl === MsgSetDestinationGasConfigResponse.typeUrl;
  },
  encode(_: MsgSetDestinationGasConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDestinationGasConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDestinationGasConfigResponse();
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
  fromPartial(_: DeepPartial<MsgSetDestinationGasConfigResponse>): MsgSetDestinationGasConfigResponse {
    const message = createBaseMsgSetDestinationGasConfigResponse();
    return message;
  },
  fromAmino(_: MsgSetDestinationGasConfigResponseAmino): MsgSetDestinationGasConfigResponse {
    const message = createBaseMsgSetDestinationGasConfigResponse();
    return message;
  },
  toAmino(_: MsgSetDestinationGasConfigResponse): MsgSetDestinationGasConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDestinationGasConfigResponseAminoMsg): MsgSetDestinationGasConfigResponse {
    return MsgSetDestinationGasConfigResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDestinationGasConfigResponseProtoMsg): MsgSetDestinationGasConfigResponse {
    return MsgSetDestinationGasConfigResponse.decode(message.value);
  },
  toProto(message: MsgSetDestinationGasConfigResponse): Uint8Array {
    return MsgSetDestinationGasConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDestinationGasConfigResponse): MsgSetDestinationGasConfigResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfigResponse",
      value: MsgSetDestinationGasConfigResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgPayForGas(): MsgPayForGas {
  return {
    sender: "",
    igpId: "",
    messageId: "",
    destinationDomain: 0,
    gasLimit: "",
    amount: Coin.fromPartial({})
  };
}
/**
 * MsgPayForGas ...
 * @name MsgPayForGas
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgPayForGas
 */
export const MsgPayForGas = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGas",
  aminoType: "hyperlane/v1/MsgPayForGas",
  is(o: any): o is MsgPayForGas {
    return o && (o.$typeUrl === MsgPayForGas.typeUrl || typeof o.sender === "string" && typeof o.igpId === "string" && typeof o.messageId === "string" && typeof o.destinationDomain === "number" && typeof o.gasLimit === "string" && Coin.is(o.amount));
  },
  isAmino(o: any): o is MsgPayForGasAmino {
    return o && (o.$typeUrl === MsgPayForGas.typeUrl || typeof o.sender === "string" && typeof o.igp_id === "string" && typeof o.message_id === "string" && typeof o.destination_domain === "number" && typeof o.gas_limit === "string" && Coin.isAmino(o.amount));
  },
  encode(message: MsgPayForGas, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.igpId !== "") {
      writer.uint32(18).string(message.igpId);
    }
    if (message.messageId !== "") {
      writer.uint32(26).string(message.messageId);
    }
    if (message.destinationDomain !== 0) {
      writer.uint32(32).uint32(message.destinationDomain);
    }
    if (message.gasLimit !== "") {
      writer.uint32(42).string(message.gasLimit);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayForGas {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayForGas();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.igpId = reader.string();
          break;
        case 3:
          message.messageId = reader.string();
          break;
        case 4:
          message.destinationDomain = reader.uint32();
          break;
        case 5:
          message.gasLimit = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgPayForGas>): MsgPayForGas {
    const message = createBaseMsgPayForGas();
    message.sender = object.sender ?? "";
    message.igpId = object.igpId ?? "";
    message.messageId = object.messageId ?? "";
    message.destinationDomain = object.destinationDomain ?? 0;
    message.gasLimit = object.gasLimit ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgPayForGasAmino): MsgPayForGas {
    const message = createBaseMsgPayForGas();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    if (object.message_id !== undefined && object.message_id !== null) {
      message.messageId = object.message_id;
    }
    if (object.destination_domain !== undefined && object.destination_domain !== null) {
      message.destinationDomain = object.destination_domain;
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = object.gas_limit;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgPayForGas): MsgPayForGasAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    obj.message_id = message.messageId === "" ? undefined : message.messageId;
    obj.destination_domain = message.destinationDomain === 0 ? undefined : message.destinationDomain;
    obj.gas_limit = message.gasLimit === "" ? undefined : message.gasLimit;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgPayForGasAminoMsg): MsgPayForGas {
    return MsgPayForGas.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayForGas): MsgPayForGasAminoMsg {
    return {
      type: "hyperlane/v1/MsgPayForGas",
      value: MsgPayForGas.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPayForGasProtoMsg): MsgPayForGas {
    return MsgPayForGas.decode(message.value);
  },
  toProto(message: MsgPayForGas): Uint8Array {
    return MsgPayForGas.encode(message).finish();
  },
  toProtoMsg(message: MsgPayForGas): MsgPayForGasProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGas",
      value: MsgPayForGas.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgPayForGas.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgPayForGasResponse(): MsgPayForGasResponse {
  return {};
}
/**
 * MsgPayForGasResponse ...
 * @name MsgPayForGasResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgPayForGasResponse
 */
export const MsgPayForGasResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGasResponse",
  is(o: any): o is MsgPayForGasResponse {
    return o && o.$typeUrl === MsgPayForGasResponse.typeUrl;
  },
  isAmino(o: any): o is MsgPayForGasResponseAmino {
    return o && o.$typeUrl === MsgPayForGasResponse.typeUrl;
  },
  encode(_: MsgPayForGasResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayForGasResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayForGasResponse();
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
  fromPartial(_: DeepPartial<MsgPayForGasResponse>): MsgPayForGasResponse {
    const message = createBaseMsgPayForGasResponse();
    return message;
  },
  fromAmino(_: MsgPayForGasResponseAmino): MsgPayForGasResponse {
    const message = createBaseMsgPayForGasResponse();
    return message;
  },
  toAmino(_: MsgPayForGasResponse): MsgPayForGasResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayForGasResponseAminoMsg): MsgPayForGasResponse {
    return MsgPayForGasResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPayForGasResponseProtoMsg): MsgPayForGasResponse {
    return MsgPayForGasResponse.decode(message.value);
  },
  toProto(message: MsgPayForGasResponse): Uint8Array {
    return MsgPayForGasResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPayForGasResponse): MsgPayForGasResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGasResponse",
      value: MsgPayForGasResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaim(): MsgClaim {
  return {
    sender: "",
    igpId: ""
  };
}
/**
 * MsgClaim ...
 * @name MsgClaim
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgClaim
 */
export const MsgClaim = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaim",
  aminoType: "hyperlane/v1/MsgClaim",
  is(o: any): o is MsgClaim {
    return o && (o.$typeUrl === MsgClaim.typeUrl || typeof o.sender === "string" && typeof o.igpId === "string");
  },
  isAmino(o: any): o is MsgClaimAmino {
    return o && (o.$typeUrl === MsgClaim.typeUrl || typeof o.sender === "string" && typeof o.igp_id === "string");
  },
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.igpId !== "") {
      writer.uint32(18).string(message.igpId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.igpId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.sender = object.sender ?? "";
    message.igpId = object.igpId ?? "";
    return message;
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    const message = createBaseMsgClaim();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = object.igp_id;
    }
    return message;
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.igp_id = message.igpId === "" ? undefined : message.igpId;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  toAminoMsg(message: MsgClaim): MsgClaimAminoMsg {
    return {
      type: "hyperlane/v1/MsgClaim",
      value: MsgClaim.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {};
}
/**
 * MsgClaimResponse ...
 * @name MsgClaimResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgClaimResponse
 */
export const MsgClaimResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaimResponse",
  is(o: any): o is MsgClaimResponse {
    return o && o.$typeUrl === MsgClaimResponse.typeUrl;
  },
  isAmino(o: any): o is MsgClaimResponseAmino {
    return o && o.$typeUrl === MsgClaimResponse.typeUrl;
  },
  encode(_: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
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
  fromPartial(_: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
  fromAmino(_: MsgClaimResponseAmino): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    return message;
  },
  toAmino(_: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMerkleTreeHook(): MsgCreateMerkleTreeHook {
  return {
    owner: "",
    mailboxId: ""
  };
}
/**
 * MsgMerkleTreeHook ...
 * @name MsgCreateMerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook
 */
export const MsgCreateMerkleTreeHook = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook",
  aminoType: "hyperlane/v1/MsgCreateMerkleTreeHook",
  is(o: any): o is MsgCreateMerkleTreeHook {
    return o && (o.$typeUrl === MsgCreateMerkleTreeHook.typeUrl || typeof o.owner === "string" && typeof o.mailboxId === "string");
  },
  isAmino(o: any): o is MsgCreateMerkleTreeHookAmino {
    return o && (o.$typeUrl === MsgCreateMerkleTreeHook.typeUrl || typeof o.owner === "string" && typeof o.mailbox_id === "string");
  },
  encode(message: MsgCreateMerkleTreeHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.mailboxId !== "") {
      writer.uint32(18).string(message.mailboxId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMerkleTreeHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMerkleTreeHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.mailboxId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateMerkleTreeHook>): MsgCreateMerkleTreeHook {
    const message = createBaseMsgCreateMerkleTreeHook();
    message.owner = object.owner ?? "";
    message.mailboxId = object.mailboxId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMerkleTreeHookAmino): MsgCreateMerkleTreeHook {
    const message = createBaseMsgCreateMerkleTreeHook();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    return message;
  },
  toAmino(message: MsgCreateMerkleTreeHook): MsgCreateMerkleTreeHookAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMerkleTreeHookAminoMsg): MsgCreateMerkleTreeHook {
    return MsgCreateMerkleTreeHook.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateMerkleTreeHook): MsgCreateMerkleTreeHookAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateMerkleTreeHook",
      value: MsgCreateMerkleTreeHook.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateMerkleTreeHookProtoMsg): MsgCreateMerkleTreeHook {
    return MsgCreateMerkleTreeHook.decode(message.value);
  },
  toProto(message: MsgCreateMerkleTreeHook): Uint8Array {
    return MsgCreateMerkleTreeHook.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMerkleTreeHook): MsgCreateMerkleTreeHookProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook",
      value: MsgCreateMerkleTreeHook.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMerkleTreeHookResponse(): MsgCreateMerkleTreeHookResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateMerkleTreeHookResponse ...
 * @name MsgCreateMerkleTreeHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHookResponse
 */
export const MsgCreateMerkleTreeHookResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHookResponse",
  is(o: any): o is MsgCreateMerkleTreeHookResponse {
    return o && (o.$typeUrl === MsgCreateMerkleTreeHookResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateMerkleTreeHookResponseAmino {
    return o && (o.$typeUrl === MsgCreateMerkleTreeHookResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateMerkleTreeHookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMerkleTreeHookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMerkleTreeHookResponse();
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
  fromPartial(object: DeepPartial<MsgCreateMerkleTreeHookResponse>): MsgCreateMerkleTreeHookResponse {
    const message = createBaseMsgCreateMerkleTreeHookResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMerkleTreeHookResponseAmino): MsgCreateMerkleTreeHookResponse {
    const message = createBaseMsgCreateMerkleTreeHookResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateMerkleTreeHookResponse): MsgCreateMerkleTreeHookResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMerkleTreeHookResponseAminoMsg): MsgCreateMerkleTreeHookResponse {
    return MsgCreateMerkleTreeHookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMerkleTreeHookResponseProtoMsg): MsgCreateMerkleTreeHookResponse {
    return MsgCreateMerkleTreeHookResponse.decode(message.value);
  },
  toProto(message: MsgCreateMerkleTreeHookResponse): Uint8Array {
    return MsgCreateMerkleTreeHookResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMerkleTreeHookResponse): MsgCreateMerkleTreeHookResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHookResponse",
      value: MsgCreateMerkleTreeHookResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateNoopHook(): MsgCreateNoopHook {
  return {
    owner: ""
  };
}
/**
 * MsgMerkleTreeHook ...
 * @name MsgCreateNoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateNoopHook
 */
export const MsgCreateNoopHook = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHook",
  aminoType: "hyperlane/v1/MsgCreateMerkleTreeHook",
  is(o: any): o is MsgCreateNoopHook {
    return o && (o.$typeUrl === MsgCreateNoopHook.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgCreateNoopHookAmino {
    return o && (o.$typeUrl === MsgCreateNoopHook.typeUrl || typeof o.owner === "string");
  },
  encode(message: MsgCreateNoopHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateNoopHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNoopHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateNoopHook>): MsgCreateNoopHook {
    const message = createBaseMsgCreateNoopHook();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgCreateNoopHookAmino): MsgCreateNoopHook {
    const message = createBaseMsgCreateNoopHook();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgCreateNoopHook): MsgCreateNoopHookAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNoopHookAminoMsg): MsgCreateNoopHook {
    return MsgCreateNoopHook.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateNoopHook): MsgCreateNoopHookAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateMerkleTreeHook",
      value: MsgCreateNoopHook.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateNoopHookProtoMsg): MsgCreateNoopHook {
    return MsgCreateNoopHook.decode(message.value);
  },
  toProto(message: MsgCreateNoopHook): Uint8Array {
    return MsgCreateNoopHook.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNoopHook): MsgCreateNoopHookProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHook",
      value: MsgCreateNoopHook.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateNoopHookResponse(): MsgCreateNoopHookResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateMerkleTreeHookResponse ...
 * @name MsgCreateNoopHookResponse
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MsgCreateNoopHookResponse
 */
export const MsgCreateNoopHookResponse = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHookResponse",
  is(o: any): o is MsgCreateNoopHookResponse {
    return o && (o.$typeUrl === MsgCreateNoopHookResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateNoopHookResponseAmino {
    return o && (o.$typeUrl === MsgCreateNoopHookResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateNoopHookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateNoopHookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNoopHookResponse();
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
  fromPartial(object: DeepPartial<MsgCreateNoopHookResponse>): MsgCreateNoopHookResponse {
    const message = createBaseMsgCreateNoopHookResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateNoopHookResponseAmino): MsgCreateNoopHookResponse {
    const message = createBaseMsgCreateNoopHookResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateNoopHookResponse): MsgCreateNoopHookResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNoopHookResponseAminoMsg): MsgCreateNoopHookResponse {
    return MsgCreateNoopHookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateNoopHookResponseProtoMsg): MsgCreateNoopHookResponse {
    return MsgCreateNoopHookResponse.decode(message.value);
  },
  toProto(message: MsgCreateNoopHookResponse): Uint8Array {
    return MsgCreateNoopHookResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNoopHookResponse): MsgCreateNoopHookResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHookResponse",
      value: MsgCreateNoopHookResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};