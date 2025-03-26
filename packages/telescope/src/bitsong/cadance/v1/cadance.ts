import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface CadanceContract {
  /** The address of the contract. */
  contractAddress: string;
  /** The jail status of the contract. */
  isJailed: boolean;
}
export interface CadanceContractProtoMsg {
  typeUrl: "/bitsong.cadance.v1.CadanceContract";
  value: Uint8Array;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface CadanceContractAmino {
  /** The address of the contract. */
  contract_address?: string;
  /** The jail status of the contract. */
  is_jailed?: boolean;
}
export interface CadanceContractAminoMsg {
  type: "/bitsong.cadance.v1.CadanceContract";
  value: CadanceContractAmino;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 */
export interface CadanceContractSDKType {
  contract_address: string;
  is_jailed: boolean;
}
function createBaseCadanceContract(): CadanceContract {
  return {
    contractAddress: "",
    isJailed: false
  };
}
export const CadanceContract = {
  typeUrl: "/bitsong.cadance.v1.CadanceContract",
  is(o: any): o is CadanceContract {
    return o && (o.$typeUrl === CadanceContract.typeUrl || typeof o.contractAddress === "string" && typeof o.isJailed === "boolean");
  },
  isSDK(o: any): o is CadanceContractSDKType {
    return o && (o.$typeUrl === CadanceContract.typeUrl || typeof o.contract_address === "string" && typeof o.is_jailed === "boolean");
  },
  isAmino(o: any): o is CadanceContractAmino {
    return o && (o.$typeUrl === CadanceContract.typeUrl || typeof o.contract_address === "string" && typeof o.is_jailed === "boolean");
  },
  encode(message: CadanceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.isJailed === true) {
      writer.uint32(16).bool(message.isJailed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CadanceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCadanceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.isJailed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CadanceContract>): CadanceContract {
    const message = createBaseCadanceContract();
    message.contractAddress = object.contractAddress ?? "";
    message.isJailed = object.isJailed ?? false;
    return message;
  },
  fromAmino(object: CadanceContractAmino): CadanceContract {
    const message = createBaseCadanceContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.is_jailed !== undefined && object.is_jailed !== null) {
      message.isJailed = object.is_jailed;
    }
    return message;
  },
  toAmino(message: CadanceContract): CadanceContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.is_jailed = message.isJailed === false ? undefined : message.isJailed;
    return obj;
  },
  fromAminoMsg(object: CadanceContractAminoMsg): CadanceContract {
    return CadanceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: CadanceContractProtoMsg): CadanceContract {
    return CadanceContract.decode(message.value);
  },
  toProto(message: CadanceContract): Uint8Array {
    return CadanceContract.encode(message).finish();
  },
  toProtoMsg(message: CadanceContract): CadanceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.CadanceContract",
      value: CadanceContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CadanceContract.typeUrl, CadanceContract);