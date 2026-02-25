import { InterchainGasPaymaster, InterchainGasPaymasterAmino, MerkleTreeHook, MerkleTreeHookAmino, NoopHook, NoopHookAmino, GasOracle, GasOracleAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * GenesisState defines the post dispatch submodule's genesis state.
 * @name GenesisState
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GenesisState
 */
export interface GenesisState {
  igps: InterchainGasPaymaster[];
  igpGasConfigs: GenesisDestinationGasConfigWrapper[];
  merkleTreeHooks: MerkleTreeHook[];
  noopHooks: NoopHook[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the post dispatch submodule's genesis state.
 * @name GenesisStateAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GenesisState
 */
export interface GenesisStateAmino {
  igps: InterchainGasPaymasterAmino[];
  igp_gas_configs: GenesisDestinationGasConfigWrapperAmino[];
  merkle_tree_hooks: MerkleTreeHookAmino[];
  noop_hooks: NoopHookAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisDestinationGasConfigWrapper ...
 * @name GenesisDestinationGasConfigWrapper
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GenesisDestinationGasConfigWrapper
 */
export interface GenesisDestinationGasConfigWrapper {
  /**
   * remote_domain ...
   */
  remoteDomain: number;
  /**
   * gas_oracle ...
   */
  gasOracle?: GasOracle;
  /**
   * gas_overhead ...
   */
  gasOverhead: string;
  /**
   * igp_id is required for the Genesis handling.
   */
  igpId: bigint;
}
export interface GenesisDestinationGasConfigWrapperProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.GenesisDestinationGasConfigWrapper";
  value: Uint8Array;
}
/**
 * GenesisDestinationGasConfigWrapper ...
 * @name GenesisDestinationGasConfigWrapperAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GenesisDestinationGasConfigWrapper
 */
export interface GenesisDestinationGasConfigWrapperAmino {
  /**
   * remote_domain ...
   */
  remote_domain: number;
  /**
   * gas_oracle ...
   */
  gas_oracle?: GasOracleAmino;
  /**
   * gas_overhead ...
   */
  gas_overhead: string;
  /**
   * igp_id is required for the Genesis handling.
   */
  igp_id: string;
}
export interface GenesisDestinationGasConfigWrapperAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.GenesisDestinationGasConfigWrapper";
  value: GenesisDestinationGasConfigWrapperAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    igps: [],
    igpGasConfigs: [],
    merkleTreeHooks: [],
    noopHooks: []
  };
}
/**
 * GenesisState defines the post dispatch submodule's genesis state.
 * @name GenesisState
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.igps) && (!o.igps.length || InterchainGasPaymaster.is(o.igps[0])) && Array.isArray(o.igpGasConfigs) && (!o.igpGasConfigs.length || GenesisDestinationGasConfigWrapper.is(o.igpGasConfigs[0])) && Array.isArray(o.merkleTreeHooks) && (!o.merkleTreeHooks.length || MerkleTreeHook.is(o.merkleTreeHooks[0])) && Array.isArray(o.noopHooks) && (!o.noopHooks.length || NoopHook.is(o.noopHooks[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.igps) && (!o.igps.length || InterchainGasPaymaster.isAmino(o.igps[0])) && Array.isArray(o.igp_gas_configs) && (!o.igp_gas_configs.length || GenesisDestinationGasConfigWrapper.isAmino(o.igp_gas_configs[0])) && Array.isArray(o.merkle_tree_hooks) && (!o.merkle_tree_hooks.length || MerkleTreeHook.isAmino(o.merkle_tree_hooks[0])) && Array.isArray(o.noop_hooks) && (!o.noop_hooks.length || NoopHook.isAmino(o.noop_hooks[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.igps) {
      InterchainGasPaymaster.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.igpGasConfigs) {
      GenesisDestinationGasConfigWrapper.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.merkleTreeHooks) {
      MerkleTreeHook.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.noopHooks) {
      NoopHook.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.igps.push(InterchainGasPaymaster.decode(reader, reader.uint32()));
          break;
        case 2:
          message.igpGasConfigs.push(GenesisDestinationGasConfigWrapper.decode(reader, reader.uint32()));
          break;
        case 3:
          message.merkleTreeHooks.push(MerkleTreeHook.decode(reader, reader.uint32()));
          break;
        case 4:
          message.noopHooks.push(NoopHook.decode(reader, reader.uint32()));
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
    message.igps = object.igps?.map(e => InterchainGasPaymaster.fromPartial(e)) || [];
    message.igpGasConfigs = object.igpGasConfigs?.map(e => GenesisDestinationGasConfigWrapper.fromPartial(e)) || [];
    message.merkleTreeHooks = object.merkleTreeHooks?.map(e => MerkleTreeHook.fromPartial(e)) || [];
    message.noopHooks = object.noopHooks?.map(e => NoopHook.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.igps = object.igps?.map(e => InterchainGasPaymaster.fromAmino(e)) || [];
    message.igpGasConfigs = object.igp_gas_configs?.map(e => GenesisDestinationGasConfigWrapper.fromAmino(e)) || [];
    message.merkleTreeHooks = object.merkle_tree_hooks?.map(e => MerkleTreeHook.fromAmino(e)) || [];
    message.noopHooks = object.noop_hooks?.map(e => NoopHook.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.igps) {
      obj.igps = message.igps.map(e => e ? InterchainGasPaymaster.toAmino(e) : undefined);
    } else {
      obj.igps = message.igps;
    }
    if (message.igpGasConfigs) {
      obj.igp_gas_configs = message.igpGasConfigs.map(e => e ? GenesisDestinationGasConfigWrapper.toAmino(e) : undefined);
    } else {
      obj.igp_gas_configs = message.igpGasConfigs;
    }
    if (message.merkleTreeHooks) {
      obj.merkle_tree_hooks = message.merkleTreeHooks.map(e => e ? MerkleTreeHook.toAmino(e) : undefined);
    } else {
      obj.merkle_tree_hooks = message.merkleTreeHooks;
    }
    if (message.noopHooks) {
      obj.noop_hooks = message.noopHooks.map(e => e ? NoopHook.toAmino(e) : undefined);
    } else {
      obj.noop_hooks = message.noopHooks;
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
      typeUrl: "/hyperlane.core.post_dispatch.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    InterchainGasPaymaster.registerTypeUrl();
    GenesisDestinationGasConfigWrapper.registerTypeUrl();
    MerkleTreeHook.registerTypeUrl();
    NoopHook.registerTypeUrl();
  }
};
function createBaseGenesisDestinationGasConfigWrapper(): GenesisDestinationGasConfigWrapper {
  return {
    remoteDomain: 0,
    gasOracle: undefined,
    gasOverhead: "",
    igpId: BigInt(0)
  };
}
/**
 * GenesisDestinationGasConfigWrapper ...
 * @name GenesisDestinationGasConfigWrapper
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GenesisDestinationGasConfigWrapper
 */
export const GenesisDestinationGasConfigWrapper = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.GenesisDestinationGasConfigWrapper",
  is(o: any): o is GenesisDestinationGasConfigWrapper {
    return o && (o.$typeUrl === GenesisDestinationGasConfigWrapper.typeUrl || typeof o.remoteDomain === "number" && typeof o.gasOverhead === "string" && typeof o.igpId === "bigint");
  },
  isAmino(o: any): o is GenesisDestinationGasConfigWrapperAmino {
    return o && (o.$typeUrl === GenesisDestinationGasConfigWrapper.typeUrl || typeof o.remote_domain === "number" && typeof o.gas_overhead === "string" && typeof o.igp_id === "bigint");
  },
  encode(message: GenesisDestinationGasConfigWrapper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remoteDomain !== 0) {
      writer.uint32(8).uint32(message.remoteDomain);
    }
    if (message.gasOracle !== undefined) {
      GasOracle.encode(message.gasOracle, writer.uint32(18).fork()).ldelim();
    }
    if (message.gasOverhead !== "") {
      writer.uint32(26).string(message.gasOverhead);
    }
    if (message.igpId !== BigInt(0)) {
      writer.uint32(32).uint64(message.igpId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDestinationGasConfigWrapper {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDestinationGasConfigWrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.remoteDomain = reader.uint32();
          break;
        case 2:
          message.gasOracle = GasOracle.decode(reader, reader.uint32());
          break;
        case 3:
          message.gasOverhead = reader.string();
          break;
        case 4:
          message.igpId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisDestinationGasConfigWrapper>): GenesisDestinationGasConfigWrapper {
    const message = createBaseGenesisDestinationGasConfigWrapper();
    message.remoteDomain = object.remoteDomain ?? 0;
    message.gasOracle = object.gasOracle !== undefined && object.gasOracle !== null ? GasOracle.fromPartial(object.gasOracle) : undefined;
    message.gasOverhead = object.gasOverhead ?? "";
    message.igpId = object.igpId !== undefined && object.igpId !== null ? BigInt(object.igpId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisDestinationGasConfigWrapperAmino): GenesisDestinationGasConfigWrapper {
    const message = createBaseGenesisDestinationGasConfigWrapper();
    if (object.remote_domain !== undefined && object.remote_domain !== null) {
      message.remoteDomain = object.remote_domain;
    }
    if (object.gas_oracle !== undefined && object.gas_oracle !== null) {
      message.gasOracle = GasOracle.fromAmino(object.gas_oracle);
    }
    if (object.gas_overhead !== undefined && object.gas_overhead !== null) {
      message.gasOverhead = object.gas_overhead;
    }
    if (object.igp_id !== undefined && object.igp_id !== null) {
      message.igpId = BigInt(object.igp_id);
    }
    return message;
  },
  toAmino(message: GenesisDestinationGasConfigWrapper): GenesisDestinationGasConfigWrapperAmino {
    const obj: any = {};
    obj.remote_domain = message.remoteDomain === 0 ? undefined : message.remoteDomain;
    obj.gas_oracle = message.gasOracle ? GasOracle.toAmino(message.gasOracle) : undefined;
    obj.gas_overhead = message.gasOverhead === "" ? undefined : message.gasOverhead;
    obj.igp_id = message.igpId !== BigInt(0) ? message.igpId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisDestinationGasConfigWrapperAminoMsg): GenesisDestinationGasConfigWrapper {
    return GenesisDestinationGasConfigWrapper.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisDestinationGasConfigWrapperProtoMsg): GenesisDestinationGasConfigWrapper {
    return GenesisDestinationGasConfigWrapper.decode(message.value);
  },
  toProto(message: GenesisDestinationGasConfigWrapper): Uint8Array {
    return GenesisDestinationGasConfigWrapper.encode(message).finish();
  },
  toProtoMsg(message: GenesisDestinationGasConfigWrapper): GenesisDestinationGasConfigWrapperProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.GenesisDestinationGasConfigWrapper",
      value: GenesisDestinationGasConfigWrapper.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisDestinationGasConfigWrapper.typeUrl)) {
      return;
    }
    GasOracle.registerTypeUrl();
  }
};