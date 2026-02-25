import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * EventCreateNoopIsm ...
 * @name EventCreateNoopIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateNoopIsm
 */
export interface EventCreateNoopIsm {
  /**
   * ism_id ...
   */
  ismId: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface EventCreateNoopIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateNoopIsm";
  value: Uint8Array;
}
/**
 * EventCreateNoopIsm ...
 * @name EventCreateNoopIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateNoopIsm
 */
export interface EventCreateNoopIsmAmino {
  /**
   * ism_id ...
   */
  ism_id: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface EventCreateNoopIsmAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventCreateNoopIsm";
  value: EventCreateNoopIsmAmino;
}
/**
 * EventCreateMerkleRootMultisigIsm ...
 * @name EventCreateMerkleRootMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateMerkleRootMultisigIsm
 */
export interface EventCreateMerkleRootMultisigIsm {
  ismId: string;
  owner: string;
  validators: string[];
  threshold: number;
}
export interface EventCreateMerkleRootMultisigIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateMerkleRootMultisigIsm";
  value: Uint8Array;
}
/**
 * EventCreateMerkleRootMultisigIsm ...
 * @name EventCreateMerkleRootMultisigIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateMerkleRootMultisigIsm
 */
export interface EventCreateMerkleRootMultisigIsmAmino {
  ism_id: string;
  owner: string;
  validators: string[];
  threshold: number;
}
export interface EventCreateMerkleRootMultisigIsmAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventCreateMerkleRootMultisigIsm";
  value: EventCreateMerkleRootMultisigIsmAmino;
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventCreateMessageIdMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateMessageIdMultisigIsm
 */
export interface EventCreateMessageIdMultisigIsm {
  ismId: string;
  owner: string;
  validators: string[];
  threshold: number;
}
export interface EventCreateMessageIdMultisigIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateMessageIdMultisigIsm";
  value: Uint8Array;
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventCreateMessageIdMultisigIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateMessageIdMultisigIsm
 */
export interface EventCreateMessageIdMultisigIsmAmino {
  ism_id: string;
  owner: string;
  validators: string[];
  threshold: number;
}
export interface EventCreateMessageIdMultisigIsmAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventCreateMessageIdMultisigIsm";
  value: EventCreateMessageIdMultisigIsmAmino;
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventAnnounceStorageLocation
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventAnnounceStorageLocation
 */
export interface EventAnnounceStorageLocation {
  mailboxId: string;
  sender: string;
  validator: string;
  storageLocation: string;
}
export interface EventAnnounceStorageLocationProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventAnnounceStorageLocation";
  value: Uint8Array;
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventAnnounceStorageLocationAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventAnnounceStorageLocation
 */
export interface EventAnnounceStorageLocationAmino {
  mailbox_id: string;
  sender: string;
  validator: string;
  storage_location: string;
}
export interface EventAnnounceStorageLocationAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventAnnounceStorageLocation";
  value: EventAnnounceStorageLocationAmino;
}
/**
 * EventSetRoutingIsmDomain ...
 * @name EventSetRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventSetRoutingIsmDomain
 */
export interface EventSetRoutingIsmDomain {
  ismId: string;
  owner: string;
  routeIsmId: string;
  routeDomain: number;
}
export interface EventSetRoutingIsmDomainProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsmDomain";
  value: Uint8Array;
}
/**
 * EventSetRoutingIsmDomain ...
 * @name EventSetRoutingIsmDomainAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventSetRoutingIsmDomain
 */
export interface EventSetRoutingIsmDomainAmino {
  ism_id: string;
  owner: string;
  route_ism_id: string;
  route_domain: number;
}
export interface EventSetRoutingIsmDomainAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsmDomain";
  value: EventSetRoutingIsmDomainAmino;
}
/**
 * EventRemoveRoutingIsmDomain ...
 * @name EventRemoveRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventRemoveRoutingIsmDomain
 */
export interface EventRemoveRoutingIsmDomain {
  ismId: string;
  owner: string;
  routeDomain: number;
}
export interface EventRemoveRoutingIsmDomainProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventRemoveRoutingIsmDomain";
  value: Uint8Array;
}
/**
 * EventRemoveRoutingIsmDomain ...
 * @name EventRemoveRoutingIsmDomainAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventRemoveRoutingIsmDomain
 */
export interface EventRemoveRoutingIsmDomainAmino {
  ism_id: string;
  owner: string;
  route_domain: number;
}
export interface EventRemoveRoutingIsmDomainAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventRemoveRoutingIsmDomain";
  value: EventRemoveRoutingIsmDomainAmino;
}
/**
 * EventRemoveRoutingIsmDomain ...
 * @name EventSetRoutingIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventSetRoutingIsm
 */
export interface EventSetRoutingIsm {
  ismId: string;
  owner: string;
  newOwner: string;
  renounceOwnership: boolean;
}
export interface EventSetRoutingIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsm";
  value: Uint8Array;
}
/**
 * EventRemoveRoutingIsmDomain ...
 * @name EventSetRoutingIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventSetRoutingIsm
 */
export interface EventSetRoutingIsmAmino {
  ism_id: string;
  owner: string;
  new_owner: string;
  renounce_ownership: boolean;
}
export interface EventSetRoutingIsmAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsm";
  value: EventSetRoutingIsmAmino;
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventCreateRoutingIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateRoutingIsm
 */
export interface EventCreateRoutingIsm {
  ismId: string;
  owner: string;
}
export interface EventCreateRoutingIsmProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateRoutingIsm";
  value: Uint8Array;
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventCreateRoutingIsmAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateRoutingIsm
 */
export interface EventCreateRoutingIsmAmino {
  ism_id: string;
  owner: string;
}
export interface EventCreateRoutingIsmAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.EventCreateRoutingIsm";
  value: EventCreateRoutingIsmAmino;
}
function createBaseEventCreateNoopIsm(): EventCreateNoopIsm {
  return {
    ismId: "",
    owner: ""
  };
}
/**
 * EventCreateNoopIsm ...
 * @name EventCreateNoopIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateNoopIsm
 */
export const EventCreateNoopIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateNoopIsm",
  is(o: any): o is EventCreateNoopIsm {
    return o && (o.$typeUrl === EventCreateNoopIsm.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventCreateNoopIsmAmino {
    return o && (o.$typeUrl === EventCreateNoopIsm.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string");
  },
  encode(message: EventCreateNoopIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateNoopIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateNoopIsm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismId = reader.string();
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
  fromPartial(object: DeepPartial<EventCreateNoopIsm>): EventCreateNoopIsm {
    const message = createBaseEventCreateNoopIsm();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventCreateNoopIsmAmino): EventCreateNoopIsm {
    const message = createBaseEventCreateNoopIsm();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventCreateNoopIsm): EventCreateNoopIsmAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventCreateNoopIsmAminoMsg): EventCreateNoopIsm {
    return EventCreateNoopIsm.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateNoopIsmProtoMsg): EventCreateNoopIsm {
    return EventCreateNoopIsm.decode(message.value);
  },
  toProto(message: EventCreateNoopIsm): Uint8Array {
    return EventCreateNoopIsm.encode(message).finish();
  },
  toProtoMsg(message: EventCreateNoopIsm): EventCreateNoopIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateNoopIsm",
      value: EventCreateNoopIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventCreateMerkleRootMultisigIsm(): EventCreateMerkleRootMultisigIsm {
  return {
    ismId: "",
    owner: "",
    validators: [],
    threshold: 0
  };
}
/**
 * EventCreateMerkleRootMultisigIsm ...
 * @name EventCreateMerkleRootMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateMerkleRootMultisigIsm
 */
export const EventCreateMerkleRootMultisigIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateMerkleRootMultisigIsm",
  is(o: any): o is EventCreateMerkleRootMultisigIsm {
    return o && (o.$typeUrl === EventCreateMerkleRootMultisigIsm.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  isAmino(o: any): o is EventCreateMerkleRootMultisigIsmAmino {
    return o && (o.$typeUrl === EventCreateMerkleRootMultisigIsm.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  encode(message: EventCreateMerkleRootMultisigIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    for (const v of message.validators) {
      writer.uint32(26).string(v!);
    }
    if (message.threshold !== 0) {
      writer.uint32(32).uint32(message.threshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateMerkleRootMultisigIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateMerkleRootMultisigIsm();
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
          message.validators.push(reader.string());
          break;
        case 4:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateMerkleRootMultisigIsm>): EventCreateMerkleRootMultisigIsm {
    const message = createBaseEventCreateMerkleRootMultisigIsm();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    message.validators = object.validators?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
  fromAmino(object: EventCreateMerkleRootMultisigIsmAmino): EventCreateMerkleRootMultisigIsm {
    const message = createBaseEventCreateMerkleRootMultisigIsm();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.validators = object.validators?.map(e => e) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    return message;
  },
  toAmino(message: EventCreateMerkleRootMultisigIsm): EventCreateMerkleRootMultisigIsmAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    return obj;
  },
  fromAminoMsg(object: EventCreateMerkleRootMultisigIsmAminoMsg): EventCreateMerkleRootMultisigIsm {
    return EventCreateMerkleRootMultisigIsm.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateMerkleRootMultisigIsmProtoMsg): EventCreateMerkleRootMultisigIsm {
    return EventCreateMerkleRootMultisigIsm.decode(message.value);
  },
  toProto(message: EventCreateMerkleRootMultisigIsm): Uint8Array {
    return EventCreateMerkleRootMultisigIsm.encode(message).finish();
  },
  toProtoMsg(message: EventCreateMerkleRootMultisigIsm): EventCreateMerkleRootMultisigIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateMerkleRootMultisigIsm",
      value: EventCreateMerkleRootMultisigIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventCreateMessageIdMultisigIsm(): EventCreateMessageIdMultisigIsm {
  return {
    ismId: "",
    owner: "",
    validators: [],
    threshold: 0
  };
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventCreateMessageIdMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateMessageIdMultisigIsm
 */
export const EventCreateMessageIdMultisigIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateMessageIdMultisigIsm",
  is(o: any): o is EventCreateMessageIdMultisigIsm {
    return o && (o.$typeUrl === EventCreateMessageIdMultisigIsm.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  isAmino(o: any): o is EventCreateMessageIdMultisigIsmAmino {
    return o && (o.$typeUrl === EventCreateMessageIdMultisigIsm.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  encode(message: EventCreateMessageIdMultisigIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    for (const v of message.validators) {
      writer.uint32(26).string(v!);
    }
    if (message.threshold !== 0) {
      writer.uint32(32).uint32(message.threshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateMessageIdMultisigIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateMessageIdMultisigIsm();
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
          message.validators.push(reader.string());
          break;
        case 4:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventCreateMessageIdMultisigIsm>): EventCreateMessageIdMultisigIsm {
    const message = createBaseEventCreateMessageIdMultisigIsm();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    message.validators = object.validators?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
  fromAmino(object: EventCreateMessageIdMultisigIsmAmino): EventCreateMessageIdMultisigIsm {
    const message = createBaseEventCreateMessageIdMultisigIsm();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.validators = object.validators?.map(e => e) || [];
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    return message;
  },
  toAmino(message: EventCreateMessageIdMultisigIsm): EventCreateMessageIdMultisigIsmAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    return obj;
  },
  fromAminoMsg(object: EventCreateMessageIdMultisigIsmAminoMsg): EventCreateMessageIdMultisigIsm {
    return EventCreateMessageIdMultisigIsm.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateMessageIdMultisigIsmProtoMsg): EventCreateMessageIdMultisigIsm {
    return EventCreateMessageIdMultisigIsm.decode(message.value);
  },
  toProto(message: EventCreateMessageIdMultisigIsm): Uint8Array {
    return EventCreateMessageIdMultisigIsm.encode(message).finish();
  },
  toProtoMsg(message: EventCreateMessageIdMultisigIsm): EventCreateMessageIdMultisigIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateMessageIdMultisigIsm",
      value: EventCreateMessageIdMultisigIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventAnnounceStorageLocation(): EventAnnounceStorageLocation {
  return {
    mailboxId: "",
    sender: "",
    validator: "",
    storageLocation: ""
  };
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventAnnounceStorageLocation
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventAnnounceStorageLocation
 */
export const EventAnnounceStorageLocation = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventAnnounceStorageLocation",
  is(o: any): o is EventAnnounceStorageLocation {
    return o && (o.$typeUrl === EventAnnounceStorageLocation.typeUrl || typeof o.mailboxId === "string" && typeof o.sender === "string" && typeof o.validator === "string" && typeof o.storageLocation === "string");
  },
  isAmino(o: any): o is EventAnnounceStorageLocationAmino {
    return o && (o.$typeUrl === EventAnnounceStorageLocation.typeUrl || typeof o.mailbox_id === "string" && typeof o.sender === "string" && typeof o.validator === "string" && typeof o.storage_location === "string");
  },
  encode(message: EventAnnounceStorageLocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== "") {
      writer.uint32(10).string(message.mailboxId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    if (message.storageLocation !== "") {
      writer.uint32(34).string(message.storageLocation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventAnnounceStorageLocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAnnounceStorageLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        case 4:
          message.storageLocation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventAnnounceStorageLocation>): EventAnnounceStorageLocation {
    const message = createBaseEventAnnounceStorageLocation();
    message.mailboxId = object.mailboxId ?? "";
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    message.storageLocation = object.storageLocation ?? "";
    return message;
  },
  fromAmino(object: EventAnnounceStorageLocationAmino): EventAnnounceStorageLocation {
    const message = createBaseEventAnnounceStorageLocation();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    }
    if (object.storage_location !== undefined && object.storage_location !== null) {
      message.storageLocation = object.storage_location;
    }
    return message;
  },
  toAmino(message: EventAnnounceStorageLocation): EventAnnounceStorageLocationAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.validator = message.validator === "" ? undefined : message.validator;
    obj.storage_location = message.storageLocation === "" ? undefined : message.storageLocation;
    return obj;
  },
  fromAminoMsg(object: EventAnnounceStorageLocationAminoMsg): EventAnnounceStorageLocation {
    return EventAnnounceStorageLocation.fromAmino(object.value);
  },
  fromProtoMsg(message: EventAnnounceStorageLocationProtoMsg): EventAnnounceStorageLocation {
    return EventAnnounceStorageLocation.decode(message.value);
  },
  toProto(message: EventAnnounceStorageLocation): Uint8Array {
    return EventAnnounceStorageLocation.encode(message).finish();
  },
  toProtoMsg(message: EventAnnounceStorageLocation): EventAnnounceStorageLocationProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventAnnounceStorageLocation",
      value: EventAnnounceStorageLocation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetRoutingIsmDomain(): EventSetRoutingIsmDomain {
  return {
    ismId: "",
    owner: "",
    routeIsmId: "",
    routeDomain: 0
  };
}
/**
 * EventSetRoutingIsmDomain ...
 * @name EventSetRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventSetRoutingIsmDomain
 */
export const EventSetRoutingIsmDomain = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsmDomain",
  is(o: any): o is EventSetRoutingIsmDomain {
    return o && (o.$typeUrl === EventSetRoutingIsmDomain.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string" && typeof o.routeIsmId === "string" && typeof o.routeDomain === "number");
  },
  isAmino(o: any): o is EventSetRoutingIsmDomainAmino {
    return o && (o.$typeUrl === EventSetRoutingIsmDomain.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string" && typeof o.route_ism_id === "string" && typeof o.route_domain === "number");
  },
  encode(message: EventSetRoutingIsmDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.routeIsmId !== "") {
      writer.uint32(26).string(message.routeIsmId);
    }
    if (message.routeDomain !== 0) {
      writer.uint32(32).uint32(message.routeDomain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetRoutingIsmDomain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetRoutingIsmDomain();
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
          message.routeIsmId = reader.string();
          break;
        case 4:
          message.routeDomain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSetRoutingIsmDomain>): EventSetRoutingIsmDomain {
    const message = createBaseEventSetRoutingIsmDomain();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    message.routeIsmId = object.routeIsmId ?? "";
    message.routeDomain = object.routeDomain ?? 0;
    return message;
  },
  fromAmino(object: EventSetRoutingIsmDomainAmino): EventSetRoutingIsmDomain {
    const message = createBaseEventSetRoutingIsmDomain();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.route_ism_id !== undefined && object.route_ism_id !== null) {
      message.routeIsmId = object.route_ism_id;
    }
    if (object.route_domain !== undefined && object.route_domain !== null) {
      message.routeDomain = object.route_domain;
    }
    return message;
  },
  toAmino(message: EventSetRoutingIsmDomain): EventSetRoutingIsmDomainAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.route_ism_id = message.routeIsmId === "" ? undefined : message.routeIsmId;
    obj.route_domain = message.routeDomain === 0 ? undefined : message.routeDomain;
    return obj;
  },
  fromAminoMsg(object: EventSetRoutingIsmDomainAminoMsg): EventSetRoutingIsmDomain {
    return EventSetRoutingIsmDomain.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetRoutingIsmDomainProtoMsg): EventSetRoutingIsmDomain {
    return EventSetRoutingIsmDomain.decode(message.value);
  },
  toProto(message: EventSetRoutingIsmDomain): Uint8Array {
    return EventSetRoutingIsmDomain.encode(message).finish();
  },
  toProtoMsg(message: EventSetRoutingIsmDomain): EventSetRoutingIsmDomainProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsmDomain",
      value: EventSetRoutingIsmDomain.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventRemoveRoutingIsmDomain(): EventRemoveRoutingIsmDomain {
  return {
    ismId: "",
    owner: "",
    routeDomain: 0
  };
}
/**
 * EventRemoveRoutingIsmDomain ...
 * @name EventRemoveRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventRemoveRoutingIsmDomain
 */
export const EventRemoveRoutingIsmDomain = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventRemoveRoutingIsmDomain",
  is(o: any): o is EventRemoveRoutingIsmDomain {
    return o && (o.$typeUrl === EventRemoveRoutingIsmDomain.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string" && typeof o.routeDomain === "number");
  },
  isAmino(o: any): o is EventRemoveRoutingIsmDomainAmino {
    return o && (o.$typeUrl === EventRemoveRoutingIsmDomain.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string" && typeof o.route_domain === "number");
  },
  encode(message: EventRemoveRoutingIsmDomain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.routeDomain !== 0) {
      writer.uint32(24).uint32(message.routeDomain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRemoveRoutingIsmDomain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveRoutingIsmDomain();
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
          message.routeDomain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventRemoveRoutingIsmDomain>): EventRemoveRoutingIsmDomain {
    const message = createBaseEventRemoveRoutingIsmDomain();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    message.routeDomain = object.routeDomain ?? 0;
    return message;
  },
  fromAmino(object: EventRemoveRoutingIsmDomainAmino): EventRemoveRoutingIsmDomain {
    const message = createBaseEventRemoveRoutingIsmDomain();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.route_domain !== undefined && object.route_domain !== null) {
      message.routeDomain = object.route_domain;
    }
    return message;
  },
  toAmino(message: EventRemoveRoutingIsmDomain): EventRemoveRoutingIsmDomainAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.route_domain = message.routeDomain === 0 ? undefined : message.routeDomain;
    return obj;
  },
  fromAminoMsg(object: EventRemoveRoutingIsmDomainAminoMsg): EventRemoveRoutingIsmDomain {
    return EventRemoveRoutingIsmDomain.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRemoveRoutingIsmDomainProtoMsg): EventRemoveRoutingIsmDomain {
    return EventRemoveRoutingIsmDomain.decode(message.value);
  },
  toProto(message: EventRemoveRoutingIsmDomain): Uint8Array {
    return EventRemoveRoutingIsmDomain.encode(message).finish();
  },
  toProtoMsg(message: EventRemoveRoutingIsmDomain): EventRemoveRoutingIsmDomainProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventRemoveRoutingIsmDomain",
      value: EventRemoveRoutingIsmDomain.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventSetRoutingIsm(): EventSetRoutingIsm {
  return {
    ismId: "",
    owner: "",
    newOwner: "",
    renounceOwnership: false
  };
}
/**
 * EventRemoveRoutingIsmDomain ...
 * @name EventSetRoutingIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventSetRoutingIsm
 */
export const EventSetRoutingIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsm",
  is(o: any): o is EventSetRoutingIsm {
    return o && (o.$typeUrl === EventSetRoutingIsm.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string" && typeof o.newOwner === "string" && typeof o.renounceOwnership === "boolean");
  },
  isAmino(o: any): o is EventSetRoutingIsmAmino {
    return o && (o.$typeUrl === EventSetRoutingIsm.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string" && typeof o.new_owner === "string" && typeof o.renounce_ownership === "boolean");
  },
  encode(message: EventSetRoutingIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): EventSetRoutingIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetRoutingIsm();
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
  fromPartial(object: DeepPartial<EventSetRoutingIsm>): EventSetRoutingIsm {
    const message = createBaseEventSetRoutingIsm();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    message.newOwner = object.newOwner ?? "";
    message.renounceOwnership = object.renounceOwnership ?? false;
    return message;
  },
  fromAmino(object: EventSetRoutingIsmAmino): EventSetRoutingIsm {
    const message = createBaseEventSetRoutingIsm();
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
  toAmino(message: EventSetRoutingIsm): EventSetRoutingIsmAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.new_owner = message.newOwner === "" ? undefined : message.newOwner;
    obj.renounce_ownership = message.renounceOwnership === false ? undefined : message.renounceOwnership;
    return obj;
  },
  fromAminoMsg(object: EventSetRoutingIsmAminoMsg): EventSetRoutingIsm {
    return EventSetRoutingIsm.fromAmino(object.value);
  },
  fromProtoMsg(message: EventSetRoutingIsmProtoMsg): EventSetRoutingIsm {
    return EventSetRoutingIsm.decode(message.value);
  },
  toProto(message: EventSetRoutingIsm): Uint8Array {
    return EventSetRoutingIsm.encode(message).finish();
  },
  toProtoMsg(message: EventSetRoutingIsm): EventSetRoutingIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventSetRoutingIsm",
      value: EventSetRoutingIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventCreateRoutingIsm(): EventCreateRoutingIsm {
  return {
    ismId: "",
    owner: ""
  };
}
/**
 * EventCreateMessageIdMultisigIsm ...
 * @name EventCreateRoutingIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.EventCreateRoutingIsm
 */
export const EventCreateRoutingIsm = {
  typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateRoutingIsm",
  is(o: any): o is EventCreateRoutingIsm {
    return o && (o.$typeUrl === EventCreateRoutingIsm.typeUrl || typeof o.ismId === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventCreateRoutingIsmAmino {
    return o && (o.$typeUrl === EventCreateRoutingIsm.typeUrl || typeof o.ism_id === "string" && typeof o.owner === "string");
  },
  encode(message: EventCreateRoutingIsm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ismId !== "") {
      writer.uint32(10).string(message.ismId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateRoutingIsm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateRoutingIsm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ismId = reader.string();
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
  fromPartial(object: DeepPartial<EventCreateRoutingIsm>): EventCreateRoutingIsm {
    const message = createBaseEventCreateRoutingIsm();
    message.ismId = object.ismId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventCreateRoutingIsmAmino): EventCreateRoutingIsm {
    const message = createBaseEventCreateRoutingIsm();
    if (object.ism_id !== undefined && object.ism_id !== null) {
      message.ismId = object.ism_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventCreateRoutingIsm): EventCreateRoutingIsmAmino {
    const obj: any = {};
    obj.ism_id = message.ismId === "" ? undefined : message.ismId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventCreateRoutingIsmAminoMsg): EventCreateRoutingIsm {
    return EventCreateRoutingIsm.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateRoutingIsmProtoMsg): EventCreateRoutingIsm {
    return EventCreateRoutingIsm.decode(message.value);
  },
  toProto(message: EventCreateRoutingIsm): Uint8Array {
    return EventCreateRoutingIsm.encode(message).finish();
  },
  toProtoMsg(message: EventCreateRoutingIsm): EventCreateRoutingIsmProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.EventCreateRoutingIsm",
      value: EventCreateRoutingIsm.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};