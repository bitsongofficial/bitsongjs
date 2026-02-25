import { AccountAuthenticator, AccountAuthenticatorAmino } from "./models";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 * @name AuthenticatorData
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.AuthenticatorData
 */
export interface AuthenticatorData {
  /**
   * address is an account address, one address can have many authenticators
   */
  address: string;
  /**
   * authenticators are the account's authenticators, these can be multiple
   * types including SignatureVerification, AllOfs, CosmWasmAuthenticators, etc
   */
  authenticators: AccountAuthenticator[];
}
export interface AuthenticatorDataProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.AuthenticatorData";
  value: Uint8Array;
}
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 * @name AuthenticatorDataAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.AuthenticatorData
 */
export interface AuthenticatorDataAmino {
  /**
   * address is an account address, one address can have many authenticators
   */
  address: string;
  /**
   * authenticators are the account's authenticators, these can be multiple
   * types including SignatureVerification, AllOfs, CosmWasmAuthenticators, etc
   */
  authenticators: AccountAuthenticatorAmino[];
}
export interface AuthenticatorDataAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.AuthenticatorData";
  value: AuthenticatorDataAmino;
}
/**
 * GenesisState defines the authenticator module's genesis state.
 * @name GenesisState
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * params define the parameters for the authenticator module.
   */
  params: Params;
  /**
   * next_authenticator_id is the next available authenticator ID.
   */
  nextAuthenticatorId: bigint;
  /**
   * authenticator_data contains the data for multiple accounts, each with their
   * authenticators.
   */
  authenticatorData: AuthenticatorData[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bitsong.smartaccount.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the authenticator module's genesis state.
 * @name GenesisStateAmino
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params define the parameters for the authenticator module.
   */
  params: ParamsAmino;
  /**
   * next_authenticator_id is the next available authenticator ID.
   */
  next_authenticator_id: string;
  /**
   * authenticator_data contains the data for multiple accounts, each with their
   * authenticators.
   */
  authenticator_data: AuthenticatorDataAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/bitsong.smartaccount.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseAuthenticatorData(): AuthenticatorData {
  return {
    address: "",
    authenticators: []
  };
}
/**
 * AuthenticatorData represents a genesis exported account with Authenticators.
 * The address is used as the key, and the account authenticators are stored in
 * the authenticators field.
 * @name AuthenticatorData
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.AuthenticatorData
 */
export const AuthenticatorData = {
  typeUrl: "/bitsong.smartaccount.v1beta1.AuthenticatorData",
  is(o: any): o is AuthenticatorData {
    return o && (o.$typeUrl === AuthenticatorData.typeUrl || typeof o.address === "string" && Array.isArray(o.authenticators) && (!o.authenticators.length || AccountAuthenticator.is(o.authenticators[0])));
  },
  isAmino(o: any): o is AuthenticatorDataAmino {
    return o && (o.$typeUrl === AuthenticatorData.typeUrl || typeof o.address === "string" && Array.isArray(o.authenticators) && (!o.authenticators.length || AccountAuthenticator.isAmino(o.authenticators[0])));
  },
  encode(message: AuthenticatorData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.authenticators) {
      AccountAuthenticator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthenticatorData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticatorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.authenticators.push(AccountAuthenticator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AuthenticatorData>): AuthenticatorData {
    const message = createBaseAuthenticatorData();
    message.address = object.address ?? "";
    message.authenticators = object.authenticators?.map(e => AccountAuthenticator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AuthenticatorDataAmino): AuthenticatorData {
    const message = createBaseAuthenticatorData();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.authenticators = object.authenticators?.map(e => AccountAuthenticator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuthenticatorData): AuthenticatorDataAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.authenticators) {
      obj.authenticators = message.authenticators.map(e => e ? AccountAuthenticator.toAmino(e) : undefined);
    } else {
      obj.authenticators = message.authenticators;
    }
    return obj;
  },
  fromAminoMsg(object: AuthenticatorDataAminoMsg): AuthenticatorData {
    return AuthenticatorData.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthenticatorDataProtoMsg): AuthenticatorData {
    return AuthenticatorData.decode(message.value);
  },
  toProto(message: AuthenticatorData): Uint8Array {
    return AuthenticatorData.encode(message).finish();
  },
  toProtoMsg(message: AuthenticatorData): AuthenticatorDataProtoMsg {
    return {
      typeUrl: "/bitsong.smartaccount.v1beta1.AuthenticatorData",
      value: AuthenticatorData.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(AuthenticatorData.typeUrl)) {
      return;
    }
    AccountAuthenticator.registerTypeUrl();
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    nextAuthenticatorId: BigInt(0),
    authenticatorData: []
  };
}
/**
 * GenesisState defines the authenticator module's genesis state.
 * @name GenesisState
 * @package bitsong.smartaccount.v1beta1
 * @see proto type: bitsong.smartaccount.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/bitsong.smartaccount.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && typeof o.nextAuthenticatorId === "bigint" && Array.isArray(o.authenticatorData) && (!o.authenticatorData.length || AuthenticatorData.is(o.authenticatorData[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && typeof o.next_authenticator_id === "bigint" && Array.isArray(o.authenticator_data) && (!o.authenticator_data.length || AuthenticatorData.isAmino(o.authenticator_data[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextAuthenticatorId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextAuthenticatorId);
    }
    for (const v of message.authenticatorData) {
      AuthenticatorData.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nextAuthenticatorId = reader.uint64();
          break;
        case 3:
          message.authenticatorData.push(AuthenticatorData.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.nextAuthenticatorId = object.nextAuthenticatorId !== undefined && object.nextAuthenticatorId !== null ? BigInt(object.nextAuthenticatorId.toString()) : BigInt(0);
    message.authenticatorData = object.authenticatorData?.map(e => AuthenticatorData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.next_authenticator_id !== undefined && object.next_authenticator_id !== null) {
      message.nextAuthenticatorId = BigInt(object.next_authenticator_id);
    }
    message.authenticatorData = object.authenticator_data?.map(e => AuthenticatorData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.next_authenticator_id = message.nextAuthenticatorId !== BigInt(0) ? message.nextAuthenticatorId?.toString() : undefined;
    if (message.authenticatorData) {
      obj.authenticator_data = message.authenticatorData.map(e => e ? AuthenticatorData.toAmino(e) : undefined);
    } else {
      obj.authenticator_data = message.authenticatorData;
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
      typeUrl: "/bitsong.smartaccount.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    AuthenticatorData.registerTypeUrl();
  }
};