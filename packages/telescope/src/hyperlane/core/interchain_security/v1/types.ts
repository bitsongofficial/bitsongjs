import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * Route
 * @name Route
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.Route
 */
export interface Route {
  /**
   * ism ...
   */
  ism: string;
  /**
   * domain ...
   */
  domain: number;
}
export interface RouteProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.Route";
  value: Uint8Array;
}
/**
 * Route
 * @name RouteAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.Route
 */
export interface RouteAmino {
  /**
   * ism ...
   */
  ism: string;
  /**
   * domain ...
   */
  domain: number;
}
export interface RouteAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.Route";
  value: RouteAmino;
}
/**
 * Routing ISM ...
 * @name RoutingISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.RoutingISM
 */
export interface RoutingISM {
  $typeUrl?: "/hyperlane.core.interchain_security.v1.RoutingISM";
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * Routes associated with the Routing ISM.
   * These are stored directly within the ISM to simplify the design,
   * as the number of routes is expected to remain small.
   * This approach avoids the added complexity of managing a separate
   * collection.
   */
  routes: Route[];
}
export interface RoutingISMProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.RoutingISM";
  value: Uint8Array;
}
/**
 * Routing ISM ...
 * @name RoutingISMAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.RoutingISM
 */
export interface RoutingISMAmino {
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * Routes associated with the Routing ISM.
   * These are stored directly within the ISM to simplify the design,
   * as the number of routes is expected to remain small.
   * This approach avoids the added complexity of managing a separate
   * collection.
   */
  routes: RouteAmino[];
}
export interface RoutingISMAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.RoutingISM";
  value: RoutingISMAmino;
}
/**
 * MessageIdMultisigISM ...
 * @name MessageIdMultisigISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MessageIdMultisigISM
 */
export interface MessageIdMultisigISM {
  $typeUrl?: "/hyperlane.core.interchain_security.v1.MessageIdMultisigISM";
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
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
export interface MessageIdMultisigISMProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MessageIdMultisigISM";
  value: Uint8Array;
}
/**
 * MessageIdMultisigISM ...
 * @name MessageIdMultisigISMAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MessageIdMultisigISM
 */
export interface MessageIdMultisigISMAmino {
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
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
export interface MessageIdMultisigISMAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MessageIdMultisigISM";
  value: MessageIdMultisigISMAmino;
}
/**
 * MerkleRootMultisigISM ...
 * @name MerkleRootMultisigISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MerkleRootMultisigISM
 */
export interface MerkleRootMultisigISM {
  $typeUrl?: "/hyperlane.core.interchain_security.v1.MerkleRootMultisigISM";
  /**
   * XXX ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
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
export interface MerkleRootMultisigISMProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.MerkleRootMultisigISM";
  value: Uint8Array;
}
/**
 * MerkleRootMultisigISM ...
 * @name MerkleRootMultisigISMAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MerkleRootMultisigISM
 */
export interface MerkleRootMultisigISMAmino {
  /**
   * XXX ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
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
export interface MerkleRootMultisigISMAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.MerkleRootMultisigISM";
  value: MerkleRootMultisigISMAmino;
}
/**
 * NoopISM ...
 * @name NoopISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.NoopISM
 */
export interface NoopISM {
  $typeUrl?: "/hyperlane.core.interchain_security.v1.NoopISM";
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface NoopISMProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.NoopISM";
  value: Uint8Array;
}
/**
 * NoopISM ...
 * @name NoopISMAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.NoopISM
 */
export interface NoopISMAmino {
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface NoopISMAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.NoopISM";
  value: NoopISMAmino;
}
function createBaseRoute(): Route {
  return {
    ism: "",
    domain: 0
  };
}
/**
 * Route
 * @name Route
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.Route
 */
export const Route = {
  typeUrl: "/hyperlane.core.interchain_security.v1.Route",
  is(o: any): o is Route {
    return o && (o.$typeUrl === Route.typeUrl || typeof o.ism === "string" && typeof o.domain === "number");
  },
  isAmino(o: any): o is RouteAmino {
    return o && (o.$typeUrl === Route.typeUrl || typeof o.ism === "string" && typeof o.domain === "number");
  },
  encode(message: Route, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ism !== "") {
      writer.uint32(10).string(message.ism);
    }
    if (message.domain !== 0) {
      writer.uint32(16).uint32(message.domain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Route {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ism = reader.string();
          break;
        case 2:
          message.domain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Route>): Route {
    const message = createBaseRoute();
    message.ism = object.ism ?? "";
    message.domain = object.domain ?? 0;
    return message;
  },
  fromAmino(object: RouteAmino): Route {
    const message = createBaseRoute();
    if (object.ism !== undefined && object.ism !== null) {
      message.ism = object.ism;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    return message;
  },
  toAmino(message: Route): RouteAmino {
    const obj: any = {};
    obj.ism = message.ism === "" ? undefined : message.ism;
    obj.domain = message.domain === 0 ? undefined : message.domain;
    return obj;
  },
  fromAminoMsg(object: RouteAminoMsg): Route {
    return Route.fromAmino(object.value);
  },
  fromProtoMsg(message: RouteProtoMsg): Route {
    return Route.decode(message.value);
  },
  toProto(message: Route): Uint8Array {
    return Route.encode(message).finish();
  },
  toProtoMsg(message: Route): RouteProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.Route",
      value: Route.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRoutingISM(): RoutingISM {
  return {
    $typeUrl: "/hyperlane.core.interchain_security.v1.RoutingISM",
    id: "",
    owner: "",
    routes: []
  };
}
/**
 * Routing ISM ...
 * @name RoutingISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.RoutingISM
 */
export const RoutingISM = {
  typeUrl: "/hyperlane.core.interchain_security.v1.RoutingISM",
  is(o: any): o is RoutingISM {
    return o && (o.$typeUrl === RoutingISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && Array.isArray(o.routes) && (!o.routes.length || Route.is(o.routes[0])));
  },
  isAmino(o: any): o is RoutingISMAmino {
    return o && (o.$typeUrl === RoutingISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && Array.isArray(o.routes) && (!o.routes.length || Route.isAmino(o.routes[0])));
  },
  encode(message: RoutingISM, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    for (const v of message.routes) {
      Route.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RoutingISM {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoutingISM();
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
          message.routes.push(Route.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<RoutingISM>): RoutingISM {
    const message = createBaseRoutingISM();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.routes = object.routes?.map(e => Route.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: RoutingISMAmino): RoutingISM {
    const message = createBaseRoutingISM();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    message.routes = object.routes?.map(e => Route.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RoutingISM): RoutingISMAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? Route.toAmino(e) : undefined);
    } else {
      obj.routes = message.routes;
    }
    return obj;
  },
  fromAminoMsg(object: RoutingISMAminoMsg): RoutingISM {
    return RoutingISM.fromAmino(object.value);
  },
  fromProtoMsg(message: RoutingISMProtoMsg): RoutingISM {
    return RoutingISM.decode(message.value);
  },
  toProto(message: RoutingISM): Uint8Array {
    return RoutingISM.encode(message).finish();
  },
  toProtoMsg(message: RoutingISM): RoutingISMProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.RoutingISM",
      value: RoutingISM.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(RoutingISM.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(RoutingISM.typeUrl, RoutingISM);
    Route.registerTypeUrl();
  }
};
function createBaseMessageIdMultisigISM(): MessageIdMultisigISM {
  return {
    $typeUrl: "/hyperlane.core.interchain_security.v1.MessageIdMultisigISM",
    id: "",
    owner: "",
    validators: [],
    threshold: 0
  };
}
/**
 * MessageIdMultisigISM ...
 * @name MessageIdMultisigISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MessageIdMultisigISM
 */
export const MessageIdMultisigISM = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MessageIdMultisigISM",
  is(o: any): o is MessageIdMultisigISM {
    return o && (o.$typeUrl === MessageIdMultisigISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  isAmino(o: any): o is MessageIdMultisigISMAmino {
    return o && (o.$typeUrl === MessageIdMultisigISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  encode(message: MessageIdMultisigISM, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
  decode(input: BinaryReader | Uint8Array, length?: number): MessageIdMultisigISM {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageIdMultisigISM();
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
  fromPartial(object: DeepPartial<MessageIdMultisigISM>): MessageIdMultisigISM {
    const message = createBaseMessageIdMultisigISM();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.validators = object.validators?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
  fromAmino(object: MessageIdMultisigISMAmino): MessageIdMultisigISM {
    const message = createBaseMessageIdMultisigISM();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
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
  toAmino(message: MessageIdMultisigISM): MessageIdMultisigISMAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    return obj;
  },
  fromAminoMsg(object: MessageIdMultisigISMAminoMsg): MessageIdMultisigISM {
    return MessageIdMultisigISM.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageIdMultisigISMProtoMsg): MessageIdMultisigISM {
    return MessageIdMultisigISM.decode(message.value);
  },
  toProto(message: MessageIdMultisigISM): Uint8Array {
    return MessageIdMultisigISM.encode(message).finish();
  },
  toProtoMsg(message: MessageIdMultisigISM): MessageIdMultisigISMProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MessageIdMultisigISM",
      value: MessageIdMultisigISM.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MessageIdMultisigISM.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(MessageIdMultisigISM.typeUrl, MessageIdMultisigISM);
  }
};
function createBaseMerkleRootMultisigISM(): MerkleRootMultisigISM {
  return {
    $typeUrl: "/hyperlane.core.interchain_security.v1.MerkleRootMultisigISM",
    id: "",
    owner: "",
    validators: [],
    threshold: 0
  };
}
/**
 * MerkleRootMultisigISM ...
 * @name MerkleRootMultisigISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.MerkleRootMultisigISM
 */
export const MerkleRootMultisigISM = {
  typeUrl: "/hyperlane.core.interchain_security.v1.MerkleRootMultisigISM",
  is(o: any): o is MerkleRootMultisigISM {
    return o && (o.$typeUrl === MerkleRootMultisigISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  isAmino(o: any): o is MerkleRootMultisigISMAmino {
    return o && (o.$typeUrl === MerkleRootMultisigISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string") && typeof o.threshold === "number");
  },
  encode(message: MerkleRootMultisigISM, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
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
  decode(input: BinaryReader | Uint8Array, length?: number): MerkleRootMultisigISM {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRootMultisigISM();
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
  fromPartial(object: DeepPartial<MerkleRootMultisigISM>): MerkleRootMultisigISM {
    const message = createBaseMerkleRootMultisigISM();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.validators = object.validators?.map(e => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
  fromAmino(object: MerkleRootMultisigISMAmino): MerkleRootMultisigISM {
    const message = createBaseMerkleRootMultisigISM();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
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
  toAmino(message: MerkleRootMultisigISM): MerkleRootMultisigISMAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    if (message.validators) {
      obj.validators = message.validators.map(e => e);
    } else {
      obj.validators = message.validators;
    }
    obj.threshold = message.threshold === 0 ? undefined : message.threshold;
    return obj;
  },
  fromAminoMsg(object: MerkleRootMultisigISMAminoMsg): MerkleRootMultisigISM {
    return MerkleRootMultisigISM.fromAmino(object.value);
  },
  fromProtoMsg(message: MerkleRootMultisigISMProtoMsg): MerkleRootMultisigISM {
    return MerkleRootMultisigISM.decode(message.value);
  },
  toProto(message: MerkleRootMultisigISM): Uint8Array {
    return MerkleRootMultisigISM.encode(message).finish();
  },
  toProtoMsg(message: MerkleRootMultisigISM): MerkleRootMultisigISMProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.MerkleRootMultisigISM",
      value: MerkleRootMultisigISM.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MerkleRootMultisigISM.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(MerkleRootMultisigISM.typeUrl, MerkleRootMultisigISM);
  }
};
function createBaseNoopISM(): NoopISM {
  return {
    $typeUrl: "/hyperlane.core.interchain_security.v1.NoopISM",
    id: "",
    owner: ""
  };
}
/**
 * NoopISM ...
 * @name NoopISM
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.NoopISM
 */
export const NoopISM = {
  typeUrl: "/hyperlane.core.interchain_security.v1.NoopISM",
  is(o: any): o is NoopISM {
    return o && (o.$typeUrl === NoopISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is NoopISMAmino {
    return o && (o.$typeUrl === NoopISM.typeUrl || typeof o.id === "string" && typeof o.owner === "string");
  },
  encode(message: NoopISM, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NoopISM {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoopISM();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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
  fromPartial(object: DeepPartial<NoopISM>): NoopISM {
    const message = createBaseNoopISM();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: NoopISMAmino): NoopISM {
    const message = createBaseNoopISM();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: NoopISM): NoopISMAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: NoopISMAminoMsg): NoopISM {
    return NoopISM.fromAmino(object.value);
  },
  fromProtoMsg(message: NoopISMProtoMsg): NoopISM {
    return NoopISM.decode(message.value);
  },
  toProto(message: NoopISM): Uint8Array {
    return NoopISM.encode(message).finish();
  },
  toProtoMsg(message: NoopISM): NoopISMProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.NoopISM",
      value: NoopISM.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(NoopISM.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(NoopISM.typeUrl, NoopISM);
  }
};