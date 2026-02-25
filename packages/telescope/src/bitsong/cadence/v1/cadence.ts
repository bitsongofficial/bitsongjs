import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 * @name CadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.CadenceContract
 */
export interface CadenceContract {
  /**
   * The address of the contract.
   */
  contractAddress: string;
  /**
   * The jail status of the contract.
   */
  isJailed: boolean;
}
export interface CadenceContractProtoMsg {
  typeUrl: "/bitsong.cadence.v1.CadenceContract";
  value: Uint8Array;
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 * @name CadenceContractAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.CadenceContract
 */
export interface CadenceContractAmino {
  /**
   * The address of the contract.
   */
  contract_address: string;
  /**
   * The jail status of the contract.
   */
  is_jailed: boolean;
}
export interface CadenceContractAminoMsg {
  type: "/bitsong.cadence.v1.CadenceContract";
  value: CadenceContractAmino;
}
function createBaseCadenceContract(): CadenceContract {
  return {
    contractAddress: "",
    isJailed: false
  };
}
/**
 * This object is used to store the contract address and the
 * jail status of the contract.
 * @name CadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.CadenceContract
 */
export const CadenceContract = {
  typeUrl: "/bitsong.cadence.v1.CadenceContract",
  is(o: any): o is CadenceContract {
    return o && (o.$typeUrl === CadenceContract.typeUrl || typeof o.contractAddress === "string" && typeof o.isJailed === "boolean");
  },
  isAmino(o: any): o is CadenceContractAmino {
    return o && (o.$typeUrl === CadenceContract.typeUrl || typeof o.contract_address === "string" && typeof o.is_jailed === "boolean");
  },
  encode(message: CadenceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.isJailed === true) {
      writer.uint32(16).bool(message.isJailed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CadenceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCadenceContract();
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
  fromPartial(object: DeepPartial<CadenceContract>): CadenceContract {
    const message = createBaseCadenceContract();
    message.contractAddress = object.contractAddress ?? "";
    message.isJailed = object.isJailed ?? false;
    return message;
  },
  fromAmino(object: CadenceContractAmino): CadenceContract {
    const message = createBaseCadenceContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.is_jailed !== undefined && object.is_jailed !== null) {
      message.isJailed = object.is_jailed;
    }
    return message;
  },
  toAmino(message: CadenceContract): CadenceContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.is_jailed = message.isJailed === false ? undefined : message.isJailed;
    return obj;
  },
  fromAminoMsg(object: CadenceContractAminoMsg): CadenceContract {
    return CadenceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: CadenceContractProtoMsg): CadenceContract {
    return CadenceContract.decode(message.value);
  },
  toProto(message: CadenceContract): Uint8Array {
    return CadenceContract.encode(message).finish();
  },
  toProtoMsg(message: CadenceContract): CadenceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.CadenceContract",
      value: CadenceContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};