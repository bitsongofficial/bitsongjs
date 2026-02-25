import { Route, RouteAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * MsgCreateMessageIdMultisigIsm ...
 * @name MsgCreateMessageIdMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm
 */
export interface MsgCreateMessageIdMultisigIsm {
  /**
   * creator is the message sender.
   */
  creator: string;
  /**
   * validators
   * these are 20 byte long ethereum style addresses
   */
  validators: string[];
  /**
   * threshold ...
   */
  threshold: number;
}
export interface MsgCreateMessageIdMultisigIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm";
  value: Uint8Array;
}
/**
 * MsgCreateMessageIdMultisigIsm ...
 * @name MsgCreateMessageIdMultisigIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm
 */
export interface MsgCreateMessageIdMultisigIsmAmino {
  /**
   * creator is the message sender.
   */
  creator: string;
  /**
   * validators
   * these are 20 byte long ethereum style addresses
   */
  validators: string[];
  /**
   * threshold ...
   */
  threshold: number;
}
export interface MsgCreateMessageIdMultisigIsmAminoMsg {
  type: "hyperlane/v1/MsgCreateMessageIdMultisigIsm";
  value: MsgCreateMessageIdMultisigIsmAmino;
}
/**
 * MsgCreateMessageIdMultisigIsmResponse ...
 * @name MsgCreateMessageIdMultisigIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsmResponse
 */
export interface MsgCreateMessageIdMultisigIsmResponse {
  id: string;
}
export interface MsgCreateMessageIdMultisigIsmResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsmResponse";
  value: Uint8Array;
}
/**
 * MsgCreateMessageIdMultisigIsmResponse ...
 * @name MsgCreateMessageIdMultisigIsmResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsmResponse
 */
export interface MsgCreateMessageIdMultisigIsmResponseAmino {
  id: string;
}
export interface MsgCreateMessageIdMultisigIsmResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsmResponse";
  value: MsgCreateMessageIdMultisigIsmResponseAmino;
}
/**
 * MsgCreateMultisigIsm ...
 * @name MsgCreateMerkleRootMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm
 */
export interface MsgCreateMerkleRootMultisigIsm {
  /**
   * creator is the message sender.
   */
  creator: string;
  /**
   * validators
   * these are 20 byte long ethereum style addresses
   */
  validators: string[];
  /**
   * threshold ...
   */
  threshold: number;
}
export interface MsgCreateMerkleRootMultisigIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm";
  value: Uint8Array;
}
/**
 * MsgCreateMultisigIsm ...
 * @name MsgCreateMerkleRootMultisigIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm
 */
export interface MsgCreateMerkleRootMultisigIsmAmino {
  /**
   * creator is the message sender.
   */
  creator: string;
  /**
   * validators
   * these are 20 byte long ethereum style addresses
   */
  validators: string[];
  /**
   * threshold ...
   */
  threshold: number;
}
export interface MsgCreateMerkleRootMultisigIsmAminoMsg {
  type: "hyperlane/v1/MsgCreateMerkleRootMultisigIsm";
  value: MsgCreateMerkleRootMultisigIsmAmino;
}
/**
 * MsgCreateMultisigIsmResponse ...
 * @name MsgCreateMerkleRootMultisigIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsmResponse
 */
export interface MsgCreateMerkleRootMultisigIsmResponse {
  id: string;
}
export interface MsgCreateMerkleRootMultisigIsmResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsmResponse";
  value: Uint8Array;
}
/**
 * MsgCreateMultisigIsmResponse ...
 * @name MsgCreateMerkleRootMultisigIsmResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsmResponse
 */
export interface MsgCreateMerkleRootMultisigIsmResponseAmino {
  id: string;
}
export interface MsgCreateMerkleRootMultisigIsmResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsmResponse";
  value: MsgCreateMerkleRootMultisigIsmResponseAmino;
}
/**
 * MsgCreateNoopIsm ...
 * @name MsgCreateNoopIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateNoopIsm
 */
export interface MsgCreateNoopIsm {
  /**
   * creator is the message sender.
   */
  creator: string;
}
export interface MsgCreateNoopIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsm";
  value: Uint8Array;
}
/**
 * MsgCreateNoopIsm ...
 * @name MsgCreateNoopIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateNoopIsm
 */
export interface MsgCreateNoopIsmAmino {
  /**
   * creator is the message sender.
   */
  creator: string;
}
export interface MsgCreateNoopIsmAminoMsg {
  type: "hyperlane/v1/MsgCreateNoopIsm";
  value: MsgCreateNoopIsmAmino;
}
/**
 * MsgCreateNoopIsmResponse ...
 * @name MsgCreateNoopIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateNoopIsmResponse
 */
export interface MsgCreateNoopIsmResponse {
  id: string;
}
export interface MsgCreateNoopIsmResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsmResponse";
  value: Uint8Array;
}
/**
 * MsgCreateNoopIsmResponse ...
 * @name MsgCreateNoopIsmResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateNoopIsmResponse
 */
export interface MsgCreateNoopIsmResponseAmino {
  id: string;
}
export interface MsgCreateNoopIsmResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsmResponse";
  value: MsgCreateNoopIsmResponseAmino;
}
/**
 * MsgAnnounceValidator ...
 * @name MsgAnnounceValidator
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgAnnounceValidator
 */
export interface MsgAnnounceValidator {
  /**
   * validator ...
   */
  validator: string;
  /**
   * storage_location ...
   */
  storageLocation: string;
  /**
   * signature ...
   */
  signature: string;
  /**
   * mailbox_id ...
   */
  mailboxId: string;
  /**
   * creator ...
   */
  creator: string;
}
export interface MsgAnnounceValidatorProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidator";
  value: Uint8Array;
}
/**
 * MsgAnnounceValidator ...
 * @name MsgAnnounceValidatorAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgAnnounceValidator
 */
export interface MsgAnnounceValidatorAmino {
  /**
   * validator ...
   */
  validator: string;
  /**
   * storage_location ...
   */
  storage_location: string;
  /**
   * signature ...
   */
  signature: string;
  /**
   * mailbox_id ...
   */
  mailbox_id: string;
  /**
   * creator ...
   */
  creator: string;
}
export interface MsgAnnounceValidatorAminoMsg {
  type: "hyperlane/v1/MsgAnnounceValidator";
  value: MsgAnnounceValidatorAmino;
}
/**
 * MsgAnnounceValidatorResponse ...
 * @name MsgAnnounceValidatorResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgAnnounceValidatorResponse
 */
export interface MsgAnnounceValidatorResponse {}
export interface MsgAnnounceValidatorResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidatorResponse";
  value: Uint8Array;
}
/**
 * MsgAnnounceValidatorResponse ...
 * @name MsgAnnounceValidatorResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgAnnounceValidatorResponse
 */
export interface MsgAnnounceValidatorResponseAmino {}
export interface MsgAnnounceValidatorResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidatorResponse";
  value: MsgAnnounceValidatorResponseAmino;
}
/**
 * MsgCreateRoutingIsm ...
 * @name MsgCreateRoutingIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm
 */
export interface MsgCreateRoutingIsm {
  /**
   * creator ...
   */
  creator: string;
  /**
   * routes ...
   */
  routes: Route[];
}
export interface MsgCreateRoutingIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm";
  value: Uint8Array;
}
/**
 * MsgCreateRoutingIsm ...
 * @name MsgCreateRoutingIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm
 */
export interface MsgCreateRoutingIsmAmino {
  /**
   * creator ...
   */
  creator: string;
  /**
   * routes ...
   */
  routes: RouteAmino[];
}
export interface MsgCreateRoutingIsmAminoMsg {
  type: "hyperlane/v1/MsgCreateRoutingIsm";
  value: MsgCreateRoutingIsmAmino;
}
/**
 * MsgCreateRoutingIsmResponse ...
 * @name MsgCreateRoutingIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateRoutingIsmResponse
 */
export interface MsgCreateRoutingIsmResponse {
  id: string;
}
export interface MsgCreateRoutingIsmResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsmResponse";
  value: Uint8Array;
}
/**
 * MsgCreateRoutingIsmResponse ...
 * @name MsgCreateRoutingIsmResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateRoutingIsmResponse
 */
export interface MsgCreateRoutingIsmResponseAmino {
  id: string;
}
export interface MsgCreateRoutingIsmResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsmResponse";
  value: MsgCreateRoutingIsmResponseAmino;
}
/**
 * MsgSetRoutingIsmDomain ...
 * @name MsgSetRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain
 */
export interface MsgSetRoutingIsmDomain {
  /**
   * ism_id ...
   */
  ismId: string;
  /**
   * route ...
   */
  route: Route;
  /**
   * owner ...
   */
  owner: string;
}
export interface MsgSetRoutingIsmDomainProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain";
  value: Uint8Array;
}
/**
 * MsgSetRoutingIsmDomain ...
 * @name MsgSetRoutingIsmDomainAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain
 */
export interface MsgSetRoutingIsmDomainAmino {
  /**
   * ism_id ...
   */
  ism_id: string;
  /**
   * route ...
   */
  route: RouteAmino;
  /**
   * owner ...
   */
  owner: string;
}
export interface MsgSetRoutingIsmDomainAminoMsg {
  type: "hyperlane/v1/MsgCreateRoMsgSetRoutingIsmDomainutingIsm";
  value: MsgSetRoutingIsmDomainAmino;
}
/**
 * MsgSetRoutingIsmDomainResponse ...
 * @name MsgSetRoutingIsmDomainResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomainResponse
 */
export interface MsgSetRoutingIsmDomainResponse {}
export interface MsgSetRoutingIsmDomainResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomainResponse";
  value: Uint8Array;
}
/**
 * MsgSetRoutingIsmDomainResponse ...
 * @name MsgSetRoutingIsmDomainResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomainResponse
 */
export interface MsgSetRoutingIsmDomainResponseAmino {}
export interface MsgSetRoutingIsmDomainResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomainResponse";
  value: MsgSetRoutingIsmDomainResponseAmino;
}
/**
 * MsgRemoveRoutingIsmDomain ...
 * @name MsgRemoveRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain
 */
export interface MsgRemoveRoutingIsmDomain {
  /**
   * ism_id ...
   */
  ismId: string;
  /**
   * domain ...
   */
  domain: number;
  /**
   * owner ...
   */
  owner: string;
}
export interface MsgRemoveRoutingIsmDomainProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain";
  value: Uint8Array;
}
/**
 * MsgRemoveRoutingIsmDomain ...
 * @name MsgRemoveRoutingIsmDomainAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain
 */
export interface MsgRemoveRoutingIsmDomainAmino {
  /**
   * ism_id ...
   */
  ism_id: string;
  /**
   * domain ...
   */
  domain: number;
  /**
   * owner ...
   */
  owner: string;
}
export interface MsgRemoveRoutingIsmDomainAminoMsg {
  type: "hyperlane/v1/MsgRemoveRoutingIsmDomain";
  value: MsgRemoveRoutingIsmDomainAmino;
}
/**
 * MsgRemoveRoutingIsmDomainResponse ...
 * @name MsgRemoveRoutingIsmDomainResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomainResponse
 */
export interface MsgRemoveRoutingIsmDomainResponse {}
export interface MsgRemoveRoutingIsmDomainResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomainResponse";
  value: Uint8Array;
}
/**
 * MsgRemoveRoutingIsmDomainResponse ...
 * @name MsgRemoveRoutingIsmDomainResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomainResponse
 */
export interface MsgRemoveRoutingIsmDomainResponseAmino {}
export interface MsgRemoveRoutingIsmDomainResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomainResponse";
  value: MsgRemoveRoutingIsmDomainResponseAmino;
}
/**
 * MsgUpdateRoutingIsmOwner ...
 * @name MsgUpdateRoutingIsmOwner
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner
 */
export interface MsgUpdateRoutingIsmOwner {
  /**
   * ism_id ...
   */
  ismId: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * new owner
   */
  newOwner: string;
  /**
   * renounce_ownership
   */
  renounceOwnership: boolean;
}
export interface MsgUpdateRoutingIsmOwnerProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner";
  value: Uint8Array;
}
/**
 * MsgUpdateRoutingIsmOwner ...
 * @name MsgUpdateRoutingIsmOwnerAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner
 */
export interface MsgUpdateRoutingIsmOwnerAmino {
  /**
   * ism_id ...
   */
  ism_id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * new owner
   */
  new_owner: string;
  /**
   * renounce_ownership
   */
  renounce_ownership: boolean;
}
export interface MsgUpdateRoutingIsmOwnerAminoMsg {
  type: "hyperlane/v1/MsgUpdateRoutingIsmOwner";
  value: MsgUpdateRoutingIsmOwnerAmino;
}
/**
 * MsgUpdateRoutingIsmOwnerResponse ...
 * @name MsgUpdateRoutingIsmOwnerResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwnerResponse
 */
export interface MsgUpdateRoutingIsmOwnerResponse {}
export interface MsgUpdateRoutingIsmOwnerResponseProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwnerResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateRoutingIsmOwnerResponse ...
 * @name MsgUpdateRoutingIsmOwnerResponseAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwnerResponse
 */
export interface MsgUpdateRoutingIsmOwnerResponseAmino {}
export interface MsgUpdateRoutingIsmOwnerResponseAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwnerResponse";
  value: MsgUpdateRoutingIsmOwnerResponseAmino;
}
function createBaseMsgCreateMessageIdMultisigIsm(): MsgCreateMessageIdMultisigIsm {
  return {
    creator: "",
    validators: [],
    threshold: 0
  };
}
/**
 * MsgCreateMessageIdMultisigIsm ...
 * @name MsgCreateMessageIdMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm
 */
export const MsgCreateMessageIdMultisigIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm",
  aminoType: "hyperlane/v1/MsgCreateMessageIdMultisigIsm",
  is(o: any): o is MsgCreateMessageIdMultisigIsm {
    return o && (o.$typeUrl === MsgCreateMessageIdMultisigIsm.typeUrl || typeof o.creator === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  isAmino(o: any): o is MsgCreateMessageIdMultisigIsmAmino {
    return o && (o.$typeUrl === MsgCreateMessageIdMultisigIsm.typeUrl || typeof o.creator === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  encode(message: MsgCreateMessageIdMultisigIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.validators) {
      writer.uint32(18).string(v!);
    }
    if (message.threshold !== 0) {
      writer.uint32(24).uint32(message.threshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMessageIdMultisigIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMessageIdMultisigIsm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.validators.push(reader.string());
          break;
        case 3:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateMessageIdMultisigIsm>): MsgCreateMessageIdMultisigIsm {
    const message = createBaseMsgCreateMessageIdMultisigIsm();
    message.creator = object.creator ?? "";
    message.validators = object.validators?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
  fromAmino(object: MsgCreateMessageIdMultisigIsmAmino): MsgCreateMessageIdMultisigIsm {
    const message = createBaseMsgCreateMessageIdMultisigIsm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.validators = object.validators?.map(e => e) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    return message;
  },
  toAmino(message: MsgCreateMessageIdMultisigIsm): MsgCreateMessageIdMultisigIsmAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMessageIdMultisigIsmAminoMsg): MsgCreateMessageIdMultisigIsm {
    return MsgCreateMessageIdMultisigIsm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateMessageIdMultisigIsm): MsgCreateMessageIdMultisigIsmAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateMessageIdMultisigIsm",
      value: MsgCreateMessageIdMultisigIsm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateMessageIdMultisigIsmProtoMsg): MsgCreateMessageIdMultisigIsm {
    return MsgCreateMessageIdMultisigIsm.decode(message.value);
  },
  toProto(message: MsgCreateMessageIdMultisigIsm): Uint8Array {
    return MsgCreateMessageIdMultisigIsm.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMessageIdMultisigIsm): MsgCreateMessageIdMultisigIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm",
      value: MsgCreateMessageIdMultisigIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMessageIdMultisigIsmResponse(): MsgCreateMessageIdMultisigIsmResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateMessageIdMultisigIsmResponse ...
 * @name MsgCreateMessageIdMultisigIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsmResponse
 */
export const MsgCreateMessageIdMultisigIsmResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsmResponse",
  is(o: any): o is MsgCreateMessageIdMultisigIsmResponse {
    return o && (o.$typeUrl === MsgCreateMessageIdMultisigIsmResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateMessageIdMultisigIsmResponseAmino {
    return o && (o.$typeUrl === MsgCreateMessageIdMultisigIsmResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateMessageIdMultisigIsmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMessageIdMultisigIsmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMessageIdMultisigIsmResponse();
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
  fromPartial(object: DeepPartial<MsgCreateMessageIdMultisigIsmResponse>): MsgCreateMessageIdMultisigIsmResponse {
    const message = createBaseMsgCreateMessageIdMultisigIsmResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMessageIdMultisigIsmResponseAmino): MsgCreateMessageIdMultisigIsmResponse {
    const message = createBaseMsgCreateMessageIdMultisigIsmResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateMessageIdMultisigIsmResponse): MsgCreateMessageIdMultisigIsmResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMessageIdMultisigIsmResponseAminoMsg): MsgCreateMessageIdMultisigIsmResponse {
    return MsgCreateMessageIdMultisigIsmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMessageIdMultisigIsmResponseProtoMsg): MsgCreateMessageIdMultisigIsmResponse {
    return MsgCreateMessageIdMultisigIsmResponse.decode(message.value);
  },
  toProto(message: MsgCreateMessageIdMultisigIsmResponse): Uint8Array {
    return MsgCreateMessageIdMultisigIsmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMessageIdMultisigIsmResponse): MsgCreateMessageIdMultisigIsmResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsmResponse",
      value: MsgCreateMessageIdMultisigIsmResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMerkleRootMultisigIsm(): MsgCreateMerkleRootMultisigIsm {
  return {
    creator: "",
    validators: [],
    threshold: 0
  };
}
/**
 * MsgCreateMultisigIsm ...
 * @name MsgCreateMerkleRootMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm
 */
export const MsgCreateMerkleRootMultisigIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm",
  aminoType: "hyperlane/v1/MsgCreateMerkleRootMultisigIsm",
  is(o: any): o is MsgCreateMerkleRootMultisigIsm {
    return o && (o.$typeUrl === MsgCreateMerkleRootMultisigIsm.typeUrl || typeof o.creator === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  isAmino(o: any): o is MsgCreateMerkleRootMultisigIsmAmino {
    return o && (o.$typeUrl === MsgCreateMerkleRootMultisigIsm.typeUrl || typeof o.creator === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  encode(message: MsgCreateMerkleRootMultisigIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.validators) {
      writer.uint32(18).string(v!);
    }
    if (message.threshold !== 0) {
      writer.uint32(24).uint32(message.threshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMerkleRootMultisigIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMerkleRootMultisigIsm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.validators.push(reader.string());
          break;
        case 3:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateMerkleRootMultisigIsm>): MsgCreateMerkleRootMultisigIsm {
    const message = createBaseMsgCreateMerkleRootMultisigIsm();
    message.creator = object.creator ?? "";
    message.validators = object.validators?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
  fromAmino(object: MsgCreateMerkleRootMultisigIsmAmino): MsgCreateMerkleRootMultisigIsm {
    const message = createBaseMsgCreateMerkleRootMultisigIsm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.validators = object.validators?.map(e => e) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    return message;
  },
  toAmino(message: MsgCreateMerkleRootMultisigIsm): MsgCreateMerkleRootMultisigIsmAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMerkleRootMultisigIsmAminoMsg): MsgCreateMerkleRootMultisigIsm {
    return MsgCreateMerkleRootMultisigIsm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateMerkleRootMultisigIsm): MsgCreateMerkleRootMultisigIsmAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateMerkleRootMultisigIsm",
      value: MsgCreateMerkleRootMultisigIsm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateMerkleRootMultisigIsmProtoMsg): MsgCreateMerkleRootMultisigIsm {
    return MsgCreateMerkleRootMultisigIsm.decode(message.value);
  },
  toProto(message: MsgCreateMerkleRootMultisigIsm): Uint8Array {
    return MsgCreateMerkleRootMultisigIsm.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMerkleRootMultisigIsm): MsgCreateMerkleRootMultisigIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm",
      value: MsgCreateMerkleRootMultisigIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateMerkleRootMultisigIsmResponse(): MsgCreateMerkleRootMultisigIsmResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateMultisigIsmResponse ...
 * @name MsgCreateMerkleRootMultisigIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsmResponse
 */
export const MsgCreateMerkleRootMultisigIsmResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsmResponse",
  is(o: any): o is MsgCreateMerkleRootMultisigIsmResponse {
    return o && (o.$typeUrl === MsgCreateMerkleRootMultisigIsmResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateMerkleRootMultisigIsmResponseAmino {
    return o && (o.$typeUrl === MsgCreateMerkleRootMultisigIsmResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateMerkleRootMultisigIsmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMerkleRootMultisigIsmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMerkleRootMultisigIsmResponse();
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
  fromPartial(object: DeepPartial<MsgCreateMerkleRootMultisigIsmResponse>): MsgCreateMerkleRootMultisigIsmResponse {
    const message = createBaseMsgCreateMerkleRootMultisigIsmResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateMerkleRootMultisigIsmResponseAmino): MsgCreateMerkleRootMultisigIsmResponse {
    const message = createBaseMsgCreateMerkleRootMultisigIsmResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateMerkleRootMultisigIsmResponse): MsgCreateMerkleRootMultisigIsmResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateMerkleRootMultisigIsmResponseAminoMsg): MsgCreateMerkleRootMultisigIsmResponse {
    return MsgCreateMerkleRootMultisigIsmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateMerkleRootMultisigIsmResponseProtoMsg): MsgCreateMerkleRootMultisigIsmResponse {
    return MsgCreateMerkleRootMultisigIsmResponse.decode(message.value);
  },
  toProto(message: MsgCreateMerkleRootMultisigIsmResponse): Uint8Array {
    return MsgCreateMerkleRootMultisigIsmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateMerkleRootMultisigIsmResponse): MsgCreateMerkleRootMultisigIsmResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsmResponse",
      value: MsgCreateMerkleRootMultisigIsmResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateNoopIsm(): MsgCreateNoopIsm {
  return {
    creator: ""
  };
}
/**
 * MsgCreateNoopIsm ...
 * @name MsgCreateNoopIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateNoopIsm
 */
export const MsgCreateNoopIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsm",
  aminoType: "hyperlane/v1/MsgCreateNoopIsm",
  is(o: any): o is MsgCreateNoopIsm {
    return o && (o.$typeUrl === MsgCreateNoopIsm.typeUrl || typeof o.creator === "string");
  },
  isAmino(o: any): o is MsgCreateNoopIsmAmino {
    return o && (o.$typeUrl === MsgCreateNoopIsm.typeUrl || typeof o.creator === "string");
  },
  encode(message: MsgCreateNoopIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateNoopIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNoopIsm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateNoopIsm>): MsgCreateNoopIsm {
    const message = createBaseMsgCreateNoopIsm();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgCreateNoopIsmAmino): MsgCreateNoopIsm {
    const message = createBaseMsgCreateNoopIsm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgCreateNoopIsm): MsgCreateNoopIsmAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNoopIsmAminoMsg): MsgCreateNoopIsm {
    return MsgCreateNoopIsm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateNoopIsm): MsgCreateNoopIsmAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateNoopIsm",
      value: MsgCreateNoopIsm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateNoopIsmProtoMsg): MsgCreateNoopIsm {
    return MsgCreateNoopIsm.decode(message.value);
  },
  toProto(message: MsgCreateNoopIsm): Uint8Array {
    return MsgCreateNoopIsm.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNoopIsm): MsgCreateNoopIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsm",
      value: MsgCreateNoopIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateNoopIsmResponse(): MsgCreateNoopIsmResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateNoopIsmResponse ...
 * @name MsgCreateNoopIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateNoopIsmResponse
 */
export const MsgCreateNoopIsmResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsmResponse",
  is(o: any): o is MsgCreateNoopIsmResponse {
    return o && (o.$typeUrl === MsgCreateNoopIsmResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateNoopIsmResponseAmino {
    return o && (o.$typeUrl === MsgCreateNoopIsmResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateNoopIsmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateNoopIsmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateNoopIsmResponse();
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
  fromPartial(object: DeepPartial<MsgCreateNoopIsmResponse>): MsgCreateNoopIsmResponse {
    const message = createBaseMsgCreateNoopIsmResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateNoopIsmResponseAmino): MsgCreateNoopIsmResponse {
    const message = createBaseMsgCreateNoopIsmResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateNoopIsmResponse): MsgCreateNoopIsmResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateNoopIsmResponseAminoMsg): MsgCreateNoopIsmResponse {
    return MsgCreateNoopIsmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateNoopIsmResponseProtoMsg): MsgCreateNoopIsmResponse {
    return MsgCreateNoopIsmResponse.decode(message.value);
  },
  toProto(message: MsgCreateNoopIsmResponse): Uint8Array {
    return MsgCreateNoopIsmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateNoopIsmResponse): MsgCreateNoopIsmResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsmResponse",
      value: MsgCreateNoopIsmResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAnnounceValidator(): MsgAnnounceValidator {
  return {
    validator: "",
    storageLocation: "",
    signature: "",
    mailboxId: "",
    creator: ""
  };
}
/**
 * MsgAnnounceValidator ...
 * @name MsgAnnounceValidator
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgAnnounceValidator
 */
export const MsgAnnounceValidator = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidator",
  aminoType: "hyperlane/v1/MsgAnnounceValidator",
  is(o: any): o is MsgAnnounceValidator {
    return o && (o.$typeUrl === MsgAnnounceValidator.typeUrl || typeof o.validator === "string" && typeof o.storageLocation === "string" && typeof o.signature === "string" && typeof o.mailboxId === "string" && typeof o.creator === "string");
  },
  isAmino(o: any): o is MsgAnnounceValidatorAmino {
    return o && (o.$typeUrl === MsgAnnounceValidator.typeUrl || typeof o.validator === "string" && typeof o.storage_location === "string" && typeof o.signature === "string" && typeof o.mailbox_id === "string" && typeof o.creator === "string");
  },
  encode(message: MsgAnnounceValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.storageLocation !== "") {
      writer.uint32(18).string(message.storageLocation);
    }
    if (message.signature !== "") {
      writer.uint32(26).string(message.signature);
    }
    if (message.mailboxId !== "") {
      writer.uint32(34).string(message.mailboxId);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnnounceValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnnounceValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.storageLocation = reader.string();
          break;
        case 3:
          message.signature = reader.string();
          break;
        case 4:
          message.mailboxId = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgAnnounceValidator>): MsgAnnounceValidator {
    const message = createBaseMsgAnnounceValidator();
    message.validator = object.validator ?? "";
    message.storageLocation = object.storageLocation ?? "";
    message.signature = object.signature ?? "";
    message.mailboxId = object.mailboxId ?? "";
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: MsgAnnounceValidatorAmino): MsgAnnounceValidator {
    const message = createBaseMsgAnnounceValidator();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.storage_location !== undefined && object.storage_location !== null) {
      message.storageLocation = object.storage_location;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: MsgAnnounceValidator): MsgAnnounceValidatorAmino {
    const obj: any = {};
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.storage_location = message.storageLocation === "" ? undefined : message.storageLocation;
    obj.signature = message.signature === "" ? undefined : message.signature;
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: MsgAnnounceValidatorAminoMsg): MsgAnnounceValidator {
    return MsgAnnounceValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAnnounceValidator): MsgAnnounceValidatorAminoMsg {
    return {
      type: "hyperlane/v1/MsgAnnounceValidator",
      value: MsgAnnounceValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAnnounceValidatorProtoMsg): MsgAnnounceValidator {
    return MsgAnnounceValidator.decode(message.value);
  },
  toProto(message: MsgAnnounceValidator): Uint8Array {
    return MsgAnnounceValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgAnnounceValidator): MsgAnnounceValidatorProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidator",
      value: MsgAnnounceValidator.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgAnnounceValidatorResponse(): MsgAnnounceValidatorResponse {
  return {};
}
/**
 * MsgAnnounceValidatorResponse ...
 * @name MsgAnnounceValidatorResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgAnnounceValidatorResponse
 */
export const MsgAnnounceValidatorResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidatorResponse",
  is(o: any): o is MsgAnnounceValidatorResponse {
    return o && o.$typeUrl === MsgAnnounceValidatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgAnnounceValidatorResponseAmino {
    return o && o.$typeUrl === MsgAnnounceValidatorResponse.typeUrl;
  },
  encode(_: MsgAnnounceValidatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnnounceValidatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnnounceValidatorResponse();
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
  fromPartial(_: DeepPartial<MsgAnnounceValidatorResponse>): MsgAnnounceValidatorResponse {
    const message = createBaseMsgAnnounceValidatorResponse();
    return message;
  },
  fromAmino(_: MsgAnnounceValidatorResponseAmino): MsgAnnounceValidatorResponse {
    const message = createBaseMsgAnnounceValidatorResponse();
    return message;
  },
  toAmino(_: MsgAnnounceValidatorResponse): MsgAnnounceValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAnnounceValidatorResponseAminoMsg): MsgAnnounceValidatorResponse {
    return MsgAnnounceValidatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnnounceValidatorResponseProtoMsg): MsgAnnounceValidatorResponse {
    return MsgAnnounceValidatorResponse.decode(message.value);
  },
  toProto(message: MsgAnnounceValidatorResponse): Uint8Array {
    return MsgAnnounceValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAnnounceValidatorResponse): MsgAnnounceValidatorResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidatorResponse",
      value: MsgAnnounceValidatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateRoutingIsm(): MsgCreateRoutingIsm {
  return {
    creator: "",
    routes: []
  };
}
/**
 * MsgCreateRoutingIsm ...
 * @name MsgCreateRoutingIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm
 */
export const MsgCreateRoutingIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm",
  aminoType: "hyperlane/v1/MsgCreateRoutingIsm",
  is(o: any): o is MsgCreateRoutingIsm {
    return o && (o.$typeUrl === MsgCreateRoutingIsm.typeUrl || typeof o.creator === "string" && Array.isArray(o.routes) && (!o.routes.length || Route.is(o.routes[0])));
  },
  isAmino(o: any): o is MsgCreateRoutingIsmAmino {
    return o && (o.$typeUrl === MsgCreateRoutingIsm.typeUrl || typeof o.creator === "string" && Array.isArray(o.routes) && (!o.routes.length || Route.isAmino(o.routes[0])));
  },
  encode(message: MsgCreateRoutingIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.routes) {
      Route.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRoutingIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRoutingIsm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.routes.push(Route.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateRoutingIsm>): MsgCreateRoutingIsm {
    const message = createBaseMsgCreateRoutingIsm();
    message.creator = object.creator ?? "";
    message.routes = object.routes?.map(e => Route.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateRoutingIsmAmino): MsgCreateRoutingIsm {
    const message = createBaseMsgCreateRoutingIsm();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.routes = object.routes?.map(e => Route.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateRoutingIsm): MsgCreateRoutingIsmAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? Route.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateRoutingIsmAminoMsg): MsgCreateRoutingIsm {
    return MsgCreateRoutingIsm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateRoutingIsm): MsgCreateRoutingIsmAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateRoutingIsm",
      value: MsgCreateRoutingIsm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateRoutingIsmProtoMsg): MsgCreateRoutingIsm {
    return MsgCreateRoutingIsm.decode(message.value);
  },
  toProto(message: MsgCreateRoutingIsm): Uint8Array {
    return MsgCreateRoutingIsm.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRoutingIsm): MsgCreateRoutingIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm",
      value: MsgCreateRoutingIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgCreateRoutingIsm.typeUrl)) {
      return;
    }
    Route.registerTypeUrl();
  }
};
function createBaseMsgCreateRoutingIsmResponse(): MsgCreateRoutingIsmResponse {
  return {
    id: ""
  };
}
/**
 * MsgCreateRoutingIsmResponse ...
 * @name MsgCreateRoutingIsmResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgCreateRoutingIsmResponse
 */
export const MsgCreateRoutingIsmResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsmResponse",
  is(o: any): o is MsgCreateRoutingIsmResponse {
    return o && (o.$typeUrl === MsgCreateRoutingIsmResponse.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is MsgCreateRoutingIsmResponseAmino {
    return o && (o.$typeUrl === MsgCreateRoutingIsmResponse.typeUrl || typeof o.id === "string");
  },
  encode(message: MsgCreateRoutingIsmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateRoutingIsmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRoutingIsmResponse();
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
  fromPartial(object: DeepPartial<MsgCreateRoutingIsmResponse>): MsgCreateRoutingIsmResponse {
    const message = createBaseMsgCreateRoutingIsmResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateRoutingIsmResponseAmino): MsgCreateRoutingIsmResponse {
    const message = createBaseMsgCreateRoutingIsmResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateRoutingIsmResponse): MsgCreateRoutingIsmResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRoutingIsmResponseAminoMsg): MsgCreateRoutingIsmResponse {
    return MsgCreateRoutingIsmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRoutingIsmResponseProtoMsg): MsgCreateRoutingIsmResponse {
    return MsgCreateRoutingIsmResponse.decode(message.value);
  },
  toProto(message: MsgCreateRoutingIsmResponse): Uint8Array {
    return MsgCreateRoutingIsmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRoutingIsmResponse): MsgCreateRoutingIsmResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsmResponse",
      value: MsgCreateRoutingIsmResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetRoutingIsmDomain(): MsgSetRoutingIsmDomain {
  return {
    ismId: "",
    route: Route.fromPartial({}),
    owner: ""
  };
}
/**
 * MsgSetRoutingIsmDomain ...
 * @name MsgSetRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain
 */
export const MsgSetRoutingIsmDomain = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain",
  aminoType: "hyperlane/v1/MsgCreateRoMsgSetRoutingIsmDomainutingIsm",
  is(o: any): o is MsgSetRoutingIsmDomain {
    return o && (o.$typeUrl === MsgSetRoutingIsmDomain.typeUrl || typeof o.ismId === "string" && Route.is(o.route) && typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgSetRoutingIsmDomainAmino {
    return o && (o.$typeUrl === MsgSetRoutingIsmDomain.typeUrl || typeof o.ism_id === "string" && Route.isAmino(o.route) && typeof o.owner === "string");
  },
  encode(message: MsgSetRoutingIsmDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.route !== undefined) {
      Route.encode(message.route, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRoutingIsmDomain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRoutingIsmDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismId = reader.string();
          break;
        case 2:
          message.route = Route.decode(reader, reader.uint32());
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
  fromPartial(object: DeepPartial<MsgSetRoutingIsmDomain>): MsgSetRoutingIsmDomain {
    const message = createBaseMsgSetRoutingIsmDomain();
    message.ismId = object.ismId ?? "";
    message.route = object.route !== undefined && object.route !== null ? Route.fromPartial(object.route) : undefined;
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgSetRoutingIsmDomainAmino): MsgSetRoutingIsmDomain {
    const message = createBaseMsgSetRoutingIsmDomain();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.route !== undefined && object.route !== null) {
      message.route = Route.fromAmino(object.route);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgSetRoutingIsmDomain): MsgSetRoutingIsmDomainAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.route = message.route ? Route.toAmino(message.route) : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgSetRoutingIsmDomainAminoMsg): MsgSetRoutingIsmDomain {
    return MsgSetRoutingIsmDomain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetRoutingIsmDomain): MsgSetRoutingIsmDomainAminoMsg {
    return {
      type: "hyperlane/v1/MsgCreateRoMsgSetRoutingIsmDomainutingIsm",
      value: MsgSetRoutingIsmDomain.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetRoutingIsmDomainProtoMsg): MsgSetRoutingIsmDomain {
    return MsgSetRoutingIsmDomain.decode(message.value);
  },
  toProto(message: MsgSetRoutingIsmDomain): Uint8Array {
    return MsgSetRoutingIsmDomain.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRoutingIsmDomain): MsgSetRoutingIsmDomainProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain",
      value: MsgSetRoutingIsmDomain.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSetRoutingIsmDomain.typeUrl)) {
      return;
    }
    Route.registerTypeUrl();
  }
};
function createBaseMsgSetRoutingIsmDomainResponse(): MsgSetRoutingIsmDomainResponse {
  return {};
}
/**
 * MsgSetRoutingIsmDomainResponse ...
 * @name MsgSetRoutingIsmDomainResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomainResponse
 */
export const MsgSetRoutingIsmDomainResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomainResponse",
  is(o: any): o is MsgSetRoutingIsmDomainResponse {
    return o && o.$typeUrl === MsgSetRoutingIsmDomainResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSetRoutingIsmDomainResponseAmino {
    return o && o.$typeUrl === MsgSetRoutingIsmDomainResponse.typeUrl;
  },
  encode(_: MsgSetRoutingIsmDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetRoutingIsmDomainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetRoutingIsmDomainResponse();
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
  fromPartial(_: DeepPartial<MsgSetRoutingIsmDomainResponse>): MsgSetRoutingIsmDomainResponse {
    const message = createBaseMsgSetRoutingIsmDomainResponse();
    return message;
  },
  fromAmino(_: MsgSetRoutingIsmDomainResponseAmino): MsgSetRoutingIsmDomainResponse {
    const message = createBaseMsgSetRoutingIsmDomainResponse();
    return message;
  },
  toAmino(_: MsgSetRoutingIsmDomainResponse): MsgSetRoutingIsmDomainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetRoutingIsmDomainResponseAminoMsg): MsgSetRoutingIsmDomainResponse {
    return MsgSetRoutingIsmDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetRoutingIsmDomainResponseProtoMsg): MsgSetRoutingIsmDomainResponse {
    return MsgSetRoutingIsmDomainResponse.decode(message.value);
  },
  toProto(message: MsgSetRoutingIsmDomainResponse): Uint8Array {
    return MsgSetRoutingIsmDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetRoutingIsmDomainResponse): MsgSetRoutingIsmDomainResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomainResponse",
      value: MsgSetRoutingIsmDomainResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRemoveRoutingIsmDomain(): MsgRemoveRoutingIsmDomain {
  return {
    ismId: "",
    domain: 0,
    owner: ""
  };
}
/**
 * MsgRemoveRoutingIsmDomain ...
 * @name MsgRemoveRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain
 */
export const MsgRemoveRoutingIsmDomain = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain",
  aminoType: "hyperlane/v1/MsgRemoveRoutingIsmDomain",
  is(o: any): o is MsgRemoveRoutingIsmDomain {
    return o && (o.$typeUrl === MsgRemoveRoutingIsmDomain.typeUrl || typeof o.ismId === "string" && typeof o.domain === "number" && typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgRemoveRoutingIsmDomainAmino {
    return o && (o.$typeUrl === MsgRemoveRoutingIsmDomain.typeUrl || typeof o.ism_id === "string" && typeof o.domain === "number" && typeof o.owner === "string");
  },
  encode(message: MsgRemoveRoutingIsmDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.domain !== 0) {
      writer.uint32(16).uint32(message.domain);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveRoutingIsmDomain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRoutingIsmDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismId = reader.string();
          break;
        case 2:
          message.domain = reader.uint32();
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
  fromPartial(object: DeepPartial<MsgRemoveRoutingIsmDomain>): MsgRemoveRoutingIsmDomain {
    const message = createBaseMsgRemoveRoutingIsmDomain();
    message.ismId = object.ismId ?? "";
    message.domain = object.domain ?? 0;
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveRoutingIsmDomainAmino): MsgRemoveRoutingIsmDomain {
    const message = createBaseMsgRemoveRoutingIsmDomain();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgRemoveRoutingIsmDomain): MsgRemoveRoutingIsmDomainAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.domain = message.domain === 0 ? undefined : message.domain;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveRoutingIsmDomainAminoMsg): MsgRemoveRoutingIsmDomain {
    return MsgRemoveRoutingIsmDomain.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveRoutingIsmDomain): MsgRemoveRoutingIsmDomainAminoMsg {
    return {
      type: "hyperlane/v1/MsgRemoveRoutingIsmDomain",
      value: MsgRemoveRoutingIsmDomain.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveRoutingIsmDomainProtoMsg): MsgRemoveRoutingIsmDomain {
    return MsgRemoveRoutingIsmDomain.decode(message.value);
  },
  toProto(message: MsgRemoveRoutingIsmDomain): Uint8Array {
    return MsgRemoveRoutingIsmDomain.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveRoutingIsmDomain): MsgRemoveRoutingIsmDomainProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain",
      value: MsgRemoveRoutingIsmDomain.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRemoveRoutingIsmDomainResponse(): MsgRemoveRoutingIsmDomainResponse {
  return {};
}
/**
 * MsgRemoveRoutingIsmDomainResponse ...
 * @name MsgRemoveRoutingIsmDomainResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomainResponse
 */
export const MsgRemoveRoutingIsmDomainResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomainResponse",
  is(o: any): o is MsgRemoveRoutingIsmDomainResponse {
    return o && o.$typeUrl === MsgRemoveRoutingIsmDomainResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveRoutingIsmDomainResponseAmino {
    return o && o.$typeUrl === MsgRemoveRoutingIsmDomainResponse.typeUrl;
  },
  encode(_: MsgRemoveRoutingIsmDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveRoutingIsmDomainResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveRoutingIsmDomainResponse();
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
  fromPartial(_: DeepPartial<MsgRemoveRoutingIsmDomainResponse>): MsgRemoveRoutingIsmDomainResponse {
    const message = createBaseMsgRemoveRoutingIsmDomainResponse();
    return message;
  },
  fromAmino(_: MsgRemoveRoutingIsmDomainResponseAmino): MsgRemoveRoutingIsmDomainResponse {
    const message = createBaseMsgRemoveRoutingIsmDomainResponse();
    return message;
  },
  toAmino(_: MsgRemoveRoutingIsmDomainResponse): MsgRemoveRoutingIsmDomainResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveRoutingIsmDomainResponseAminoMsg): MsgRemoveRoutingIsmDomainResponse {
    return MsgRemoveRoutingIsmDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveRoutingIsmDomainResponseProtoMsg): MsgRemoveRoutingIsmDomainResponse {
    return MsgRemoveRoutingIsmDomainResponse.decode(message.value);
  },
  toProto(message: MsgRemoveRoutingIsmDomainResponse): Uint8Array {
    return MsgRemoveRoutingIsmDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveRoutingIsmDomainResponse): MsgRemoveRoutingIsmDomainResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomainResponse",
      value: MsgRemoveRoutingIsmDomainResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateRoutingIsmOwner(): MsgUpdateRoutingIsmOwner {
  return {
    ismId: "",
    owner: "",
    newOwner: "",
    renounceOwnership: false
  };
}
/**
 * MsgUpdateRoutingIsmOwner ...
 * @name MsgUpdateRoutingIsmOwner
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner
 */
export const MsgUpdateRoutingIsmOwner = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner",
  aminoType: "hyperlane/v1/MsgUpdateRoutingIsmOwner",
  is(o: any): o is MsgUpdateRoutingIsmOwner {
    return o && (o.$typeUrl === MsgUpdateRoutingIsmOwner.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is MsgUpdateRoutingIsmOwnerAmino {
    return o && (o.$typeUrl === MsgUpdateRoutingIsmOwner.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: MsgUpdateRoutingIsmOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRoutingIsmOwner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRoutingIsmOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismId = reader.string();
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
  fromPartial(object: DeepPartial<MsgUpdateRoutingIsmOwner>): MsgUpdateRoutingIsmOwner {
    const message = createBaseMsgUpdateRoutingIsmOwner();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    message.newOwner = object.newOwner ?? "";
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateRoutingIsmOwnerAmino): MsgUpdateRoutingIsmOwner {
    const message = createBaseMsgUpdateRoutingIsmOwner();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
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
  toAmino(message: MsgUpdateRoutingIsmOwner): MsgUpdateRoutingIsmOwnerAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRoutingIsmOwnerAminoMsg): MsgUpdateRoutingIsmOwner {
    return MsgUpdateRoutingIsmOwner.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateRoutingIsmOwner): MsgUpdateRoutingIsmOwnerAminoMsg {
    return {
      type: "hyperlane/v1/MsgUpdateRoutingIsmOwner",
      value: MsgUpdateRoutingIsmOwner.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateRoutingIsmOwnerProtoMsg): MsgUpdateRoutingIsmOwner {
    return MsgUpdateRoutingIsmOwner.decode(message.value);
  },
  toProto(message: MsgUpdateRoutingIsmOwner): Uint8Array {
    return MsgUpdateRoutingIsmOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRoutingIsmOwner): MsgUpdateRoutingIsmOwnerProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner",
      value: MsgUpdateRoutingIsmOwner.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateRoutingIsmOwnerResponse(): MsgUpdateRoutingIsmOwnerResponse {
  return {};
}
/**
 * MsgUpdateRoutingIsmOwnerResponse ...
 * @name MsgUpdateRoutingIsmOwnerResponse
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwnerResponse
 */
export const MsgUpdateRoutingIsmOwnerResponse = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwnerResponse",
  is(o: any): o is MsgUpdateRoutingIsmOwnerResponse {
    return o && o.$typeUrl === MsgUpdateRoutingIsmOwnerResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateRoutingIsmOwnerResponseAmino {
    return o && o.$typeUrl === MsgUpdateRoutingIsmOwnerResponse.typeUrl;
  },
  encode(_: MsgUpdateRoutingIsmOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateRoutingIsmOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRoutingIsmOwnerResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateRoutingIsmOwnerResponse>): MsgUpdateRoutingIsmOwnerResponse {
    const message = createBaseMsgUpdateRoutingIsmOwnerResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRoutingIsmOwnerResponseAmino): MsgUpdateRoutingIsmOwnerResponse {
    const message = createBaseMsgUpdateRoutingIsmOwnerResponse();
    return message;
  },
  toAmino(_: MsgUpdateRoutingIsmOwnerResponse): MsgUpdateRoutingIsmOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRoutingIsmOwnerResponseAminoMsg): MsgUpdateRoutingIsmOwnerResponse {
    return MsgUpdateRoutingIsmOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRoutingIsmOwnerResponseProtoMsg): MsgUpdateRoutingIsmOwnerResponse {
    return MsgUpdateRoutingIsmOwnerResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRoutingIsmOwnerResponse): Uint8Array {
    return MsgUpdateRoutingIsmOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRoutingIsmOwnerResponse): MsgUpdateRoutingIsmOwnerResponseProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwnerResponse",
      value: MsgUpdateRoutingIsmOwnerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};