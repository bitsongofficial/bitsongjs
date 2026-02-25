import { Params, ParamsAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgRegisterCadenceContract is the Msg/RegisterCadenceContract request type.
 * @name MsgRegisterCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgRegisterCadenceContract
 */
export interface MsgRegisterCadenceContract {
  /**
   * The address of the sender.
   */
  senderAddress: string;
  /**
   * The address of the contract to register.
   */
  contractAddress: string;
}
export interface MsgRegisterCadenceContractProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContract";
  value: Uint8Array;
}
/**
 * MsgRegisterCadenceContract is the Msg/RegisterCadenceContract request type.
 * @name MsgRegisterCadenceContractAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgRegisterCadenceContract
 */
export interface MsgRegisterCadenceContractAmino {
  /**
   * The address of the sender.
   */
  sender_address: string;
  /**
   * The address of the contract to register.
   */
  contract_address: string;
}
export interface MsgRegisterCadenceContractAminoMsg {
  type: "/bitsong.cadence.v1.MsgRegisterCadenceContract";
  value: MsgRegisterCadenceContractAmino;
}
/**
 * MsgRegisterCadenceContractResponse defines the response structure for executing a
 * MsgRegisterCadenceContract message.
 * @name MsgRegisterCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgRegisterCadenceContractResponse
 */
export interface MsgRegisterCadenceContractResponse {}
export interface MsgRegisterCadenceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContractResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterCadenceContractResponse defines the response structure for executing a
 * MsgRegisterCadenceContract message.
 * @name MsgRegisterCadenceContractResponseAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgRegisterCadenceContractResponse
 */
export interface MsgRegisterCadenceContractResponseAmino {}
export interface MsgRegisterCadenceContractResponseAminoMsg {
  type: "/bitsong.cadence.v1.MsgRegisterCadenceContractResponse";
  value: MsgRegisterCadenceContractResponseAmino;
}
/**
 * MsgUnregisterCadenceContract is the Msg/UnregisterCadenceContract request type.
 * @name MsgUnregisterCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnregisterCadenceContract
 */
export interface MsgUnregisterCadenceContract {
  /**
   * The address of the sender.
   */
  senderAddress: string;
  /**
   * The address of the contract to unregister.
   */
  contractAddress: string;
}
export interface MsgUnregisterCadenceContractProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContract";
  value: Uint8Array;
}
/**
 * MsgUnregisterCadenceContract is the Msg/UnregisterCadenceContract request type.
 * @name MsgUnregisterCadenceContractAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnregisterCadenceContract
 */
export interface MsgUnregisterCadenceContractAmino {
  /**
   * The address of the sender.
   */
  sender_address: string;
  /**
   * The address of the contract to unregister.
   */
  contract_address: string;
}
export interface MsgUnregisterCadenceContractAminoMsg {
  type: "/bitsong.cadence.v1.MsgUnregisterCadenceContract";
  value: MsgUnregisterCadenceContractAmino;
}
/**
 * MsgUnregisterCadenceContractResponse defines the response structure for executing a
 * MsgUnregisterCadenceContract message.
 * @name MsgUnregisterCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnregisterCadenceContractResponse
 */
export interface MsgUnregisterCadenceContractResponse {}
export interface MsgUnregisterCadenceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContractResponse";
  value: Uint8Array;
}
/**
 * MsgUnregisterCadenceContractResponse defines the response structure for executing a
 * MsgUnregisterCadenceContract message.
 * @name MsgUnregisterCadenceContractResponseAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnregisterCadenceContractResponse
 */
export interface MsgUnregisterCadenceContractResponseAmino {}
export interface MsgUnregisterCadenceContractResponseAminoMsg {
  type: "/bitsong.cadence.v1.MsgUnregisterCadenceContractResponse";
  value: MsgUnregisterCadenceContractResponseAmino;
}
/**
 * MsgUnjailCadenceContract is the Msg/UnjailCadenceContract request type.
 * @name MsgUnjailCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnjailCadenceContract
 */
export interface MsgUnjailCadenceContract {
  /**
   * The address of the sender.
   */
  senderAddress: string;
  /**
   * The address of the contract to unjail.
   */
  contractAddress: string;
}
export interface MsgUnjailCadenceContractProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContract";
  value: Uint8Array;
}
/**
 * MsgUnjailCadenceContract is the Msg/UnjailCadenceContract request type.
 * @name MsgUnjailCadenceContractAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnjailCadenceContract
 */
export interface MsgUnjailCadenceContractAmino {
  /**
   * The address of the sender.
   */
  sender_address: string;
  /**
   * The address of the contract to unjail.
   */
  contract_address: string;
}
export interface MsgUnjailCadenceContractAminoMsg {
  type: "/bitsong.cadence.v1.MsgUnjailCadenceContract";
  value: MsgUnjailCadenceContractAmino;
}
/**
 * MsgUnjailCadenceContractResponse defines the response structure for executing a
 * MsgUnjailCadenceContract message.
 * @name MsgUnjailCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnjailCadenceContractResponse
 */
export interface MsgUnjailCadenceContractResponse {}
export interface MsgUnjailCadenceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContractResponse";
  value: Uint8Array;
}
/**
 * MsgUnjailCadenceContractResponse defines the response structure for executing a
 * MsgUnjailCadenceContract message.
 * @name MsgUnjailCadenceContractResponseAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnjailCadenceContractResponse
 */
export interface MsgUnjailCadenceContractResponseAmino {}
export interface MsgUnjailCadenceContractResponseAminoMsg {
  type: "/bitsong.cadence.v1.MsgUnjailCadenceContractResponse";
  value: MsgUnjailCadenceContractResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParams
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * params defines the x/cadence parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * params defines the x/cadence parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/bitsong.cadence.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/bitsong.cadence.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsResponseAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/bitsong.cadence.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgRegisterCadenceContract(): MsgRegisterCadenceContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
/**
 * MsgRegisterCadenceContract is the Msg/RegisterCadenceContract request type.
 * @name MsgRegisterCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgRegisterCadenceContract
 */
export const MsgRegisterCadenceContract = {
  typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContract",
  is(o: any): o is MsgRegisterCadenceContract {
    return o && (o.$typeUrl === MsgRegisterCadenceContract.typeUrl || typeof o.senderAddress === "string" && typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is MsgRegisterCadenceContractAmino {
    return o && (o.$typeUrl === MsgRegisterCadenceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgRegisterCadenceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCadenceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCadenceContract();
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
  fromPartial(object: DeepPartial<MsgRegisterCadenceContract>): MsgRegisterCadenceContract {
    const message = createBaseMsgRegisterCadenceContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCadenceContractAmino): MsgRegisterCadenceContract {
    const message = createBaseMsgRegisterCadenceContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgRegisterCadenceContract): MsgRegisterCadenceContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCadenceContractAminoMsg): MsgRegisterCadenceContract {
    return MsgRegisterCadenceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterCadenceContractProtoMsg): MsgRegisterCadenceContract {
    return MsgRegisterCadenceContract.decode(message.value);
  },
  toProto(message: MsgRegisterCadenceContract): Uint8Array {
    return MsgRegisterCadenceContract.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCadenceContract): MsgRegisterCadenceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContract",
      value: MsgRegisterCadenceContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRegisterCadenceContractResponse(): MsgRegisterCadenceContractResponse {
  return {};
}
/**
 * MsgRegisterCadenceContractResponse defines the response structure for executing a
 * MsgRegisterCadenceContract message.
 * @name MsgRegisterCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgRegisterCadenceContractResponse
 */
export const MsgRegisterCadenceContractResponse = {
  typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContractResponse",
  is(o: any): o is MsgRegisterCadenceContractResponse {
    return o && o.$typeUrl === MsgRegisterCadenceContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterCadenceContractResponseAmino {
    return o && o.$typeUrl === MsgRegisterCadenceContractResponse.typeUrl;
  },
  encode(_: MsgRegisterCadenceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCadenceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCadenceContractResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterCadenceContractResponse>): MsgRegisterCadenceContractResponse {
    const message = createBaseMsgRegisterCadenceContractResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCadenceContractResponseAmino): MsgRegisterCadenceContractResponse {
    const message = createBaseMsgRegisterCadenceContractResponse();
    return message;
  },
  toAmino(_: MsgRegisterCadenceContractResponse): MsgRegisterCadenceContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCadenceContractResponseAminoMsg): MsgRegisterCadenceContractResponse {
    return MsgRegisterCadenceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterCadenceContractResponseProtoMsg): MsgRegisterCadenceContractResponse {
    return MsgRegisterCadenceContractResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCadenceContractResponse): Uint8Array {
    return MsgRegisterCadenceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCadenceContractResponse): MsgRegisterCadenceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContractResponse",
      value: MsgRegisterCadenceContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnregisterCadenceContract(): MsgUnregisterCadenceContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
/**
 * MsgUnregisterCadenceContract is the Msg/UnregisterCadenceContract request type.
 * @name MsgUnregisterCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnregisterCadenceContract
 */
export const MsgUnregisterCadenceContract = {
  typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContract",
  is(o: any): o is MsgUnregisterCadenceContract {
    return o && (o.$typeUrl === MsgUnregisterCadenceContract.typeUrl || typeof o.senderAddress === "string" && typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is MsgUnregisterCadenceContractAmino {
    return o && (o.$typeUrl === MsgUnregisterCadenceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgUnregisterCadenceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterCadenceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterCadenceContract();
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
  fromPartial(object: DeepPartial<MsgUnregisterCadenceContract>): MsgUnregisterCadenceContract {
    const message = createBaseMsgUnregisterCadenceContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterCadenceContractAmino): MsgUnregisterCadenceContract {
    const message = createBaseMsgUnregisterCadenceContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgUnregisterCadenceContract): MsgUnregisterCadenceContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterCadenceContractAminoMsg): MsgUnregisterCadenceContract {
    return MsgUnregisterCadenceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterCadenceContractProtoMsg): MsgUnregisterCadenceContract {
    return MsgUnregisterCadenceContract.decode(message.value);
  },
  toProto(message: MsgUnregisterCadenceContract): Uint8Array {
    return MsgUnregisterCadenceContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterCadenceContract): MsgUnregisterCadenceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContract",
      value: MsgUnregisterCadenceContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnregisterCadenceContractResponse(): MsgUnregisterCadenceContractResponse {
  return {};
}
/**
 * MsgUnregisterCadenceContractResponse defines the response structure for executing a
 * MsgUnregisterCadenceContract message.
 * @name MsgUnregisterCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnregisterCadenceContractResponse
 */
export const MsgUnregisterCadenceContractResponse = {
  typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContractResponse",
  is(o: any): o is MsgUnregisterCadenceContractResponse {
    return o && o.$typeUrl === MsgUnregisterCadenceContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnregisterCadenceContractResponseAmino {
    return o && o.$typeUrl === MsgUnregisterCadenceContractResponse.typeUrl;
  },
  encode(_: MsgUnregisterCadenceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterCadenceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterCadenceContractResponse();
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
  fromPartial(_: DeepPartial<MsgUnregisterCadenceContractResponse>): MsgUnregisterCadenceContractResponse {
    const message = createBaseMsgUnregisterCadenceContractResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterCadenceContractResponseAmino): MsgUnregisterCadenceContractResponse {
    const message = createBaseMsgUnregisterCadenceContractResponse();
    return message;
  },
  toAmino(_: MsgUnregisterCadenceContractResponse): MsgUnregisterCadenceContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterCadenceContractResponseAminoMsg): MsgUnregisterCadenceContractResponse {
    return MsgUnregisterCadenceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterCadenceContractResponseProtoMsg): MsgUnregisterCadenceContractResponse {
    return MsgUnregisterCadenceContractResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterCadenceContractResponse): Uint8Array {
    return MsgUnregisterCadenceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterCadenceContractResponse): MsgUnregisterCadenceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContractResponse",
      value: MsgUnregisterCadenceContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnjailCadenceContract(): MsgUnjailCadenceContract {
  return {
    senderAddress: "",
    contractAddress: ""
  };
}
/**
 * MsgUnjailCadenceContract is the Msg/UnjailCadenceContract request type.
 * @name MsgUnjailCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnjailCadenceContract
 */
export const MsgUnjailCadenceContract = {
  typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContract",
  is(o: any): o is MsgUnjailCadenceContract {
    return o && (o.$typeUrl === MsgUnjailCadenceContract.typeUrl || typeof o.senderAddress === "string" && typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is MsgUnjailCadenceContractAmino {
    return o && (o.$typeUrl === MsgUnjailCadenceContract.typeUrl || typeof o.sender_address === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgUnjailCadenceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailCadenceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailCadenceContract();
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
  fromPartial(object: DeepPartial<MsgUnjailCadenceContract>): MsgUnjailCadenceContract {
    const message = createBaseMsgUnjailCadenceContract();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUnjailCadenceContractAmino): MsgUnjailCadenceContract {
    const message = createBaseMsgUnjailCadenceContract();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgUnjailCadenceContract): MsgUnjailCadenceContractAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress === "" ? undefined : message.senderAddress;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUnjailCadenceContractAminoMsg): MsgUnjailCadenceContract {
    return MsgUnjailCadenceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnjailCadenceContractProtoMsg): MsgUnjailCadenceContract {
    return MsgUnjailCadenceContract.decode(message.value);
  },
  toProto(message: MsgUnjailCadenceContract): Uint8Array {
    return MsgUnjailCadenceContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailCadenceContract): MsgUnjailCadenceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContract",
      value: MsgUnjailCadenceContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUnjailCadenceContractResponse(): MsgUnjailCadenceContractResponse {
  return {};
}
/**
 * MsgUnjailCadenceContractResponse defines the response structure for executing a
 * MsgUnjailCadenceContract message.
 * @name MsgUnjailCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUnjailCadenceContractResponse
 */
export const MsgUnjailCadenceContractResponse = {
  typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContractResponse",
  is(o: any): o is MsgUnjailCadenceContractResponse {
    return o && o.$typeUrl === MsgUnjailCadenceContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUnjailCadenceContractResponseAmino {
    return o && o.$typeUrl === MsgUnjailCadenceContractResponse.typeUrl;
  },
  encode(_: MsgUnjailCadenceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailCadenceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailCadenceContractResponse();
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
  fromPartial(_: DeepPartial<MsgUnjailCadenceContractResponse>): MsgUnjailCadenceContractResponse {
    const message = createBaseMsgUnjailCadenceContractResponse();
    return message;
  },
  fromAmino(_: MsgUnjailCadenceContractResponseAmino): MsgUnjailCadenceContractResponse {
    const message = createBaseMsgUnjailCadenceContractResponse();
    return message;
  },
  toAmino(_: MsgUnjailCadenceContractResponse): MsgUnjailCadenceContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnjailCadenceContractResponseAminoMsg): MsgUnjailCadenceContractResponse {
    return MsgUnjailCadenceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnjailCadenceContractResponseProtoMsg): MsgUnjailCadenceContractResponse {
    return MsgUnjailCadenceContractResponse.decode(message.value);
  },
  toProto(message: MsgUnjailCadenceContractResponse): Uint8Array {
    return MsgUnjailCadenceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailCadenceContractResponse): MsgUnjailCadenceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContractResponse",
      value: MsgUnjailCadenceContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParams
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/bitsong.cadence.v1.MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
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
      typeUrl: "/bitsong.cadence.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/bitsong.cadence.v1.MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
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
      typeUrl: "/bitsong.cadence.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};