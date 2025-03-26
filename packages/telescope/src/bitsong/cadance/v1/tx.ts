import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** MsgRegisterCadanceContract is the Msg/RegisterCadanceContract request type. */
export interface MsgRegisterCadanceContract {
  /** The address of the sender. */
  senderAddress: string;
  /** The address of the contract to register. */
  contractAddress: string;
}
export interface MsgRegisterCadanceContractProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContract";
  value: Uint8Array;
}
/** MsgRegisterCadanceContract is the Msg/RegisterCadanceContract request type. */
export interface MsgRegisterCadanceContractAmino {
  /** The address of the sender. */
  sender_address?: string;
  /** The address of the contract to register. */
  contract_address?: string;
}
export interface MsgRegisterCadanceContractAminoMsg {
  type: "/bitsong.cadance.v1.MsgRegisterCadanceContract";
  value: MsgRegisterCadanceContractAmino;
}
/** MsgRegisterCadanceContract is the Msg/RegisterCadanceContract request type. */
export interface MsgRegisterCadanceContractSDKType {
  sender_address: string;
  contract_address: string;
}
/**
 * MsgRegisterCadanceContractResponse defines the response structure for executing a
 * MsgRegisterCadanceContract message.
 */
export interface MsgRegisterCadanceContractResponse {}
export interface MsgRegisterCadanceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContractResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterCadanceContractResponse defines the response structure for executing a
 * MsgRegisterCadanceContract message.
 */
export interface MsgRegisterCadanceContractResponseAmino {}
export interface MsgRegisterCadanceContractResponseAminoMsg {
  type: "/bitsong.cadance.v1.MsgRegisterCadanceContractResponse";
  value: MsgRegisterCadanceContractResponseAmino;
}
/**
 * MsgRegisterCadanceContractResponse defines the response structure for executing a
 * MsgRegisterCadanceContract message.
 */
export interface MsgRegisterCadanceContractResponseSDKType {}
/** MsgUnregisterCadanceContract is the Msg/UnregisterCadanceContract request type. */
export interface MsgUnregisterCadanceContract {
  /** The address of the sender. */
  senderAddress: string;
  /** The address of the contract to unregister. */
  contractAddress: string;
}
export interface MsgUnregisterCadanceContractProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContract";
  value: Uint8Array;
}
/** MsgUnregisterCadanceContract is the Msg/UnregisterCadanceContract request type. */
export interface MsgUnregisterCadanceContractAmino {
  /** The address of the sender. */
  sender_address?: string;
  /** The address of the contract to unregister. */
  contract_address?: string;
}
export interface MsgUnregisterCadanceContractAminoMsg {
  type: "/bitsong.cadance.v1.MsgUnregisterCadanceContract";
  value: MsgUnregisterCadanceContractAmino;
}
/** MsgUnregisterCadanceContract is the Msg/UnregisterCadanceContract request type. */
export interface MsgUnregisterCadanceContractSDKType {
  sender_address: string;
  contract_address: string;
}
/**
 * MsgUnregisterCadanceContractResponse defines the response structure for executing a
 * MsgUnregisterCadanceContract message.
 */
export interface MsgUnregisterCadanceContractResponse {}
export interface MsgUnregisterCadanceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContractResponse";
  value: Uint8Array;
}
/**
 * MsgUnregisterCadanceContractResponse defines the response structure for executing a
 * MsgUnregisterCadanceContract message.
 */
export interface MsgUnregisterCadanceContractResponseAmino {}
export interface MsgUnregisterCadanceContractResponseAminoMsg {
  type: "/bitsong.cadance.v1.MsgUnregisterCadanceContractResponse";
  value: MsgUnregisterCadanceContractResponseAmino;
}
/**
 * MsgUnregisterCadanceContractResponse defines the response structure for executing a
 * MsgUnregisterCadanceContract message.
 */
export interface MsgUnregisterCadanceContractResponseSDKType {}
/** MsgUnjailCadanceContract is the Msg/UnjailCadanceContract request type. */
export interface MsgUnjailCadanceContract {
  /** The address of the sender. */
  senderAddress: string;
  /** The address of the contract to unjail. */
  contractAddress: string;
}
export interface MsgUnjailCadanceContractProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContract";
  value: Uint8Array;
}
/** MsgUnjailCadanceContract is the Msg/UnjailCadanceContract request type. */
export interface MsgUnjailCadanceContractAmino {
  /** The address of the sender. */
  sender_address?: string;
  /** The address of the contract to unjail. */
  contract_address?: string;
}
export interface MsgUnjailCadanceContractAminoMsg {
  type: "/bitsong.cadance.v1.MsgUnjailCadanceContract";
  value: MsgUnjailCadanceContractAmino;
}
/** MsgUnjailCadanceContract is the Msg/UnjailCadanceContract request type. */
export interface MsgUnjailCadanceContractSDKType {
  sender_address: string;
  contract_address: string;
}
/**
 * MsgUnjailCadanceContractResponse defines the response structure for executing a
 * MsgUnjailCadanceContract message.
 */
export interface MsgUnjailCadanceContractResponse {}
export interface MsgUnjailCadanceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContractResponse";
  value: Uint8Array;
}
/**
 * MsgUnjailCadanceContractResponse defines the response structure for executing a
 * MsgUnjailCadanceContract message.
 */
export interface MsgUnjailCadanceContractResponseAmino {}
export interface MsgUnjailCadanceContractResponseAminoMsg {
  type: "/bitsong.cadance.v1.MsgUnjailCadanceContractResponse";
  value: MsgUnjailCadanceContractResponseAmino;
}
/**
 * MsgUnjailCadanceContractResponse defines the response structure for executing a
 * MsgUnjailCadanceContract message.
 */
export interface MsgUnjailCadanceContractResponseSDKType {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/cadance parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/cadance parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/bitsong.cadance.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bitsong.cadance.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bitsong.cadance.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {}
function createBaseMsgRegisterCadanceContract(): MsgRegisterCadanceContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
export const MsgRegisterCadanceContract = {
  typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContract",
  is(o: any): o is MsgRegisterCadanceContract {
    return o && (o.$typeUrl === MsgRegisterCadanceContract.typeUrl || typeof o.senderAddress === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is MsgRegisterCadanceContractSDKType {
    return o && (o.$typeUrl === MsgRegisterCadanceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is MsgRegisterCadanceContractAmino {
    return o && (o.$typeUrl === MsgRegisterCadanceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgRegisterCadanceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCadanceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCadanceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterCadanceContract>): MsgRegisterCadanceContract {
    const message = createBaseMsgRegisterCadanceContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCadanceContractAmino): MsgRegisterCadanceContract {
    const message = createBaseMsgRegisterCadanceContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterCadanceContract): MsgRegisterCadanceContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCadanceContractAminoMsg): MsgRegisterCadanceContract {
    return MsgRegisterCadanceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterCadanceContractProtoMsg): MsgRegisterCadanceContract {
    return MsgRegisterCadanceContract.decode(message.value);
  },
  toProto(message: MsgRegisterCadanceContract): Uint8Array {
    return MsgRegisterCadanceContract.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCadanceContract): MsgRegisterCadanceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContract",
      value: MsgRegisterCadanceContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterCadanceContract.typeUrl, MsgRegisterCadanceContract);
function createBaseMsgRegisterCadanceContractResponse(): MsgRegisterCadanceContractResponse {
  return {};
}
export const MsgRegisterCadanceContractResponse = {
  typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContractResponse",
  is(o: any): o is MsgRegisterCadanceContractResponse {
    return o && o.$typeUrl === MsgRegisterCadanceContractResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRegisterCadanceContractResponseSDKType {
    return o && o.$typeUrl === MsgRegisterCadanceContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterCadanceContractResponseAmino {
    return o && o.$typeUrl === MsgRegisterCadanceContractResponse.typeUrl;
  },
  encode(_: MsgRegisterCadanceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCadanceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCadanceContractResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterCadanceContractResponse>): MsgRegisterCadanceContractResponse {
    const message = createBaseMsgRegisterCadanceContractResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCadanceContractResponseAmino): MsgRegisterCadanceContractResponse {
    const message = createBaseMsgRegisterCadanceContractResponse();
    return message;
  },
  toAmino(_: MsgRegisterCadanceContractResponse): MsgRegisterCadanceContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCadanceContractResponseAminoMsg): MsgRegisterCadanceContractResponse {
    return MsgRegisterCadanceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterCadanceContractResponseProtoMsg): MsgRegisterCadanceContractResponse {
    return MsgRegisterCadanceContractResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCadanceContractResponse): Uint8Array {
    return MsgRegisterCadanceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCadanceContractResponse): MsgRegisterCadanceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContractResponse",
      value: MsgRegisterCadanceContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRegisterCadanceContractResponse.typeUrl, MsgRegisterCadanceContractResponse);
function createBaseMsgUnregisterCadanceContract(): MsgUnregisterCadanceContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
export const MsgUnregisterCadanceContract = {
  typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContract",
  is(o: any): o is MsgUnregisterCadanceContract {
    return o && (o.$typeUrl === MsgUnregisterCadanceContract.typeUrl || typeof o.senderAddress === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is MsgUnregisterCadanceContractSDKType {
    return o && (o.$typeUrl === MsgUnregisterCadanceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is MsgUnregisterCadanceContractAmino {
    return o && (o.$typeUrl === MsgUnregisterCadanceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgUnregisterCadanceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterCadanceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterCadanceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnregisterCadanceContract>): MsgUnregisterCadanceContract {
    const message = createBaseMsgUnregisterCadanceContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterCadanceContractAmino): MsgUnregisterCadanceContract {
    const message = createBaseMsgUnregisterCadanceContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgUnregisterCadanceContract): MsgUnregisterCadanceContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterCadanceContractAminoMsg): MsgUnregisterCadanceContract {
    return MsgUnregisterCadanceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterCadanceContractProtoMsg): MsgUnregisterCadanceContract {
    return MsgUnregisterCadanceContract.decode(message.value);
  },
  toProto(message: MsgUnregisterCadanceContract): Uint8Array {
    return MsgUnregisterCadanceContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterCadanceContract): MsgUnregisterCadanceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContract",
      value: MsgUnregisterCadanceContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnregisterCadanceContract.typeUrl, MsgUnregisterCadanceContract);
function createBaseMsgUnregisterCadanceContractResponse(): MsgUnregisterCadanceContractResponse {
  return {};
}
export const MsgUnregisterCadanceContractResponse = {
  typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContractResponse",
  is(o: any): o is MsgUnregisterCadanceContractResponse {
    return o && o.$typeUrl === MsgUnregisterCadanceContractResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUnregisterCadanceContractResponseSDKType {
    return o && o.$typeUrl === MsgUnregisterCadanceContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnregisterCadanceContractResponseAmino {
    return o && o.$typeUrl === MsgUnregisterCadanceContractResponse.typeUrl;
  },
  encode(_: MsgUnregisterCadanceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterCadanceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterCadanceContractResponse();
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
  fromPartial(_: DeepPartial<MsgUnregisterCadanceContractResponse>): MsgUnregisterCadanceContractResponse {
    const message = createBaseMsgUnregisterCadanceContractResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterCadanceContractResponseAmino): MsgUnregisterCadanceContractResponse {
    const message = createBaseMsgUnregisterCadanceContractResponse();
    return message;
  },
  toAmino(_: MsgUnregisterCadanceContractResponse): MsgUnregisterCadanceContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterCadanceContractResponseAminoMsg): MsgUnregisterCadanceContractResponse {
    return MsgUnregisterCadanceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterCadanceContractResponseProtoMsg): MsgUnregisterCadanceContractResponse {
    return MsgUnregisterCadanceContractResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterCadanceContractResponse): Uint8Array {
    return MsgUnregisterCadanceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterCadanceContractResponse): MsgUnregisterCadanceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContractResponse",
      value: MsgUnregisterCadanceContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnregisterCadanceContractResponse.typeUrl, MsgUnregisterCadanceContractResponse);
function createBaseMsgUnjailCadanceContract(): MsgUnjailCadanceContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
export const MsgUnjailCadanceContract = {
  typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContract",
  is(o: any): o is MsgUnjailCadanceContract {
    return o && (o.$typeUrl === MsgUnjailCadanceContract.typeUrl || typeof o.senderAddress === "string" && typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is MsgUnjailCadanceContractSDKType {
    return o && (o.$typeUrl === MsgUnjailCadanceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  isAmino(o: any): o is MsgUnjailCadanceContractAmino {
    return o && (o.$typeUrl === MsgUnjailCadanceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgUnjailCadanceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailCadanceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailCadanceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUnjailCadanceContract>): MsgUnjailCadanceContract {
    const message = createBaseMsgUnjailCadanceContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnjailCadanceContractAmino): MsgUnjailCadanceContract {
    const message = createBaseMsgUnjailCadanceContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgUnjailCadanceContract): MsgUnjailCadanceContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnjailCadanceContractAminoMsg): MsgUnjailCadanceContract {
    return MsgUnjailCadanceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnjailCadanceContractProtoMsg): MsgUnjailCadanceContract {
    return MsgUnjailCadanceContract.decode(message.value);
  },
  toProto(message: MsgUnjailCadanceContract): Uint8Array {
    return MsgUnjailCadanceContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailCadanceContract): MsgUnjailCadanceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContract",
      value: MsgUnjailCadanceContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnjailCadanceContract.typeUrl, MsgUnjailCadanceContract);
function createBaseMsgUnjailCadanceContractResponse(): MsgUnjailCadanceContractResponse {
  return {};
}
export const MsgUnjailCadanceContractResponse = {
  typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContractResponse",
  is(o: any): o is MsgUnjailCadanceContractResponse {
    return o && o.$typeUrl === MsgUnjailCadanceContractResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUnjailCadanceContractResponseSDKType {
    return o && o.$typeUrl === MsgUnjailCadanceContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnjailCadanceContractResponseAmino {
    return o && o.$typeUrl === MsgUnjailCadanceContractResponse.typeUrl;
  },
  encode(_: MsgUnjailCadanceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailCadanceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailCadanceContractResponse();
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
  fromPartial(_: DeepPartial<MsgUnjailCadanceContractResponse>): MsgUnjailCadanceContractResponse {
    const message = createBaseMsgUnjailCadanceContractResponse();
    return message;
  },
  fromAmino(_: MsgUnjailCadanceContractResponseAmino): MsgUnjailCadanceContractResponse {
    const message = createBaseMsgUnjailCadanceContractResponse();
    return message;
  },
  toAmino(_: MsgUnjailCadanceContractResponse): MsgUnjailCadanceContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnjailCadanceContractResponseAminoMsg): MsgUnjailCadanceContractResponse {
    return MsgUnjailCadanceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnjailCadanceContractResponseProtoMsg): MsgUnjailCadanceContractResponse {
    return MsgUnjailCadanceContractResponse.decode(message.value);
  },
  toProto(message: MsgUnjailCadanceContractResponse): Uint8Array {
    return MsgUnjailCadanceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailCadanceContractResponse): MsgUnjailCadanceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContractResponse",
      value: MsgUnjailCadanceContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUnjailCadanceContractResponse.typeUrl, MsgUnjailCadanceContractResponse);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/bitsong.cadance.v1.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isSDK(o: any): o is MsgUpdateParamsSDKType {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/bitsong.cadance.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateParamsResponseSDKType {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);