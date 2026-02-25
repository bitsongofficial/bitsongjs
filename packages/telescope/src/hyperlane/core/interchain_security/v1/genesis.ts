import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * GenesisState defines the 01_interchain_security submodule's genesis state.
 * @name GenesisState
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.GenesisState
 */
export interface GenesisState {
  /**
   * accounts are the accounts present at genesis.
   */
  isms: Any[];
  validatorStorageLocations: GenesisValidatorStorageLocationWrapper[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the 01_interchain_security submodule's genesis state.
 * @name GenesisStateAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * accounts are the accounts present at genesis.
   */
  isms: AnyAmino[];
  validator_storage_locations: GenesisValidatorStorageLocationWrapperAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisValidatorStorageLocationWrapper stores the information for
 * validator, mailbox and storage-location which validators have announced
 * @name GenesisValidatorStorageLocationWrapper
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.GenesisValidatorStorageLocationWrapper
 */
export interface GenesisValidatorStorageLocationWrapper {
  mailboxId: bigint;
  validatorAddress: string;
  index: bigint;
  storageLocation: string;
}
export interface GenesisValidatorStorageLocationWrapperProtoMsg {
  typeUrl: "/hyperlane.core.interchain_security.v1.GenesisValidatorStorageLocationWrapper";
  value: Uint8Array;
}
/**
 * GenesisValidatorStorageLocationWrapper stores the information for
 * validator, mailbox and storage-location which validators have announced
 * @name GenesisValidatorStorageLocationWrapperAmino
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.GenesisValidatorStorageLocationWrapper
 */
export interface GenesisValidatorStorageLocationWrapperAmino {
  mailbox_id: string;
  validator_address: string;
  index: string;
  storage_location: string;
}
export interface GenesisValidatorStorageLocationWrapperAminoMsg {
  type: "/hyperlane.core.interchain_security.v1.GenesisValidatorStorageLocationWrapper";
  value: GenesisValidatorStorageLocationWrapperAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    isms: [],
    validatorStorageLocations: []
  };
}
/**
 * GenesisState defines the 01_interchain_security submodule's genesis state.
 * @name GenesisState
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/hyperlane.core.interchain_security.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.isms) && (!o.isms.length || Any.is(o.isms[0])) && Array.isArray(o.validatorStorageLocations) && (!o.validatorStorageLocations.length || GenesisValidatorStorageLocationWrapper.is(o.validatorStorageLocations[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.isms) && (!o.isms.length || Any.isAmino(o.isms[0])) && Array.isArray(o.validator_storage_locations) && (!o.validator_storage_locations.length || GenesisValidatorStorageLocationWrapper.isAmino(o.validator_storage_locations[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.isms) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.validatorStorageLocations) {
      GenesisValidatorStorageLocationWrapper.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isms.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.validatorStorageLocations.push(GenesisValidatorStorageLocationWrapper.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.isms = object.isms?.map(e => Any.fromPartial(e)) || [];
    message.validatorStorageLocations = object.validatorStorageLocations?.map(e => GenesisValidatorStorageLocationWrapper.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.isms = object.isms?.map(e => Any.fromAmino(e)) || [];
    message.validatorStorageLocations = object.validator_storage_locations?.map(e => GenesisValidatorStorageLocationWrapper.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.isms) {
      obj.isms = message.isms.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.isms = message.isms;
    }
    if (message.validatorStorageLocations) {
      obj.validator_storage_locations = message.validatorStorageLocations.map(e => e ? GenesisValidatorStorageLocationWrapper.toAmino(e) : undefined);
    } else {
      obj.validator_storage_locations = message.validatorStorageLocations;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    GenesisValidatorStorageLocationWrapper.registerTypeUrl();
  }
};
function createBaseGenesisValidatorStorageLocationWrapper(): GenesisValidatorStorageLocationWrapper {
  return {
    mailboxId: BigInt(0),
    validatorAddress: "",
    index: BigInt(0),
    storageLocation: ""
  };
}
/**
 * GenesisValidatorStorageLocationWrapper stores the information for
 * validator, mailbox and storage-location which validators have announced
 * @name GenesisValidatorStorageLocationWrapper
 * @package hyperlane.core.interchain_security.v1
 * @see proto type: hyperlane.core.interchain_security.v1.GenesisValidatorStorageLocationWrapper
 */
export const GenesisValidatorStorageLocationWrapper = {
  typeUrl: "/hyperlane.core.interchain_security.v1.GenesisValidatorStorageLocationWrapper",
  is(o: any): o is GenesisValidatorStorageLocationWrapper {
    return o && (o.$typeUrl === GenesisValidatorStorageLocationWrapper.typeUrl || typeof o.mailboxId === "bigint" && typeof o.validatorAddress === "string" && typeof o.index === "bigint" && typeof o.storageLocation === "string");
  },
  isAmino(o: any): o is GenesisValidatorStorageLocationWrapperAmino {
    return o && (o.$typeUrl === GenesisValidatorStorageLocationWrapper.typeUrl || typeof o.mailbox_id === "bigint" && typeof o.validator_address === "string" && typeof o.index === "bigint" && typeof o.storage_location === "string");
  },
  encode(message: GenesisValidatorStorageLocationWrapper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mailboxId !== BigInt(0)) {
      writer.uint32(8).uint64(message.mailboxId);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(24).uint64(message.index);
    }
    if (message.storageLocation !== "") {
      writer.uint32(34).string(message.storageLocation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisValidatorStorageLocationWrapper {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisValidatorStorageLocationWrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailboxId = reader.uint64();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.index = reader.uint64();
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
  fromPartial(object: DeepPartial<GenesisValidatorStorageLocationWrapper>): GenesisValidatorStorageLocationWrapper {
    const message = createBaseGenesisValidatorStorageLocationWrapper();
    message.mailboxId = object.mailboxId !== undefined && object.mailboxId !== null ? BigInt(object.mailboxId.toString()) : BigInt(0);
    message.validatorAddress = object.validatorAddress ?? "";
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.storageLocation = object.storageLocation ?? "";
    return message;
  },
  fromAmino(object: GenesisValidatorStorageLocationWrapperAmino): GenesisValidatorStorageLocationWrapper {
    const message = createBaseGenesisValidatorStorageLocationWrapper();
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = BigInt(object.mailbox_id);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.storage_location !== undefined && object.storage_location !== null) {
      message.storageLocation = object.storage_location;
    }
    return message;
  },
  toAmino(message: GenesisValidatorStorageLocationWrapper): GenesisValidatorStorageLocationWrapperAmino {
    const obj: any = {};
    obj.mailbox_id = message.mailboxId !== BigInt(0) ? message.mailboxId?.toString() : undefined;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.storage_location = message.storageLocation === "" ? undefined : message.storageLocation;
    return obj;
  },
  fromAminoMsg(object: GenesisValidatorStorageLocationWrapperAminoMsg): GenesisValidatorStorageLocationWrapper {
    return GenesisValidatorStorageLocationWrapper.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisValidatorStorageLocationWrapperProtoMsg): GenesisValidatorStorageLocationWrapper {
    return GenesisValidatorStorageLocationWrapper.decode(message.value);
  },
  toProto(message: GenesisValidatorStorageLocationWrapper): Uint8Array {
    return GenesisValidatorStorageLocationWrapper.encode(message).finish();
  },
  toProtoMsg(message: GenesisValidatorStorageLocationWrapper): GenesisValidatorStorageLocationWrapperProtoMsg {
    return {
      typeUrl: "/hyperlane.core.interchain_security.v1.GenesisValidatorStorageLocationWrapper",
      value: GenesisValidatorStorageLocationWrapper.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};