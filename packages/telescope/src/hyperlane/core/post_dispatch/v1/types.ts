import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * InterchainGasPaymaster ...
 * @name InterchainGasPaymaster
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.InterchainGasPaymaster
 */
export interface InterchainGasPaymaster {
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * denom ...
   */
  denom: string;
  /**
   * claimable_fees ...
   */
  claimableFees: Coin[];
}
export interface InterchainGasPaymasterProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.InterchainGasPaymaster";
  value: Uint8Array;
}
/**
 * InterchainGasPaymaster ...
 * @name InterchainGasPaymasterAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.InterchainGasPaymaster
 */
export interface InterchainGasPaymasterAmino {
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * denom ...
   */
  denom: string;
  /**
   * claimable_fees ...
   */
  claimable_fees: CoinAmino[];
}
export interface InterchainGasPaymasterAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.InterchainGasPaymaster";
  value: InterchainGasPaymasterAmino;
}
/**
 * DestinationGasConfig ...
 * @name DestinationGasConfig
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.DestinationGasConfig
 */
export interface DestinationGasConfig {
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
}
export interface DestinationGasConfigProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.DestinationGasConfig";
  value: Uint8Array;
}
/**
 * DestinationGasConfig ...
 * @name DestinationGasConfigAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.DestinationGasConfig
 */
export interface DestinationGasConfigAmino {
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
}
export interface DestinationGasConfigAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.DestinationGasConfig";
  value: DestinationGasConfigAmino;
}
/**
 * GasOracle ...
 * @name GasOracle
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GasOracle
 */
export interface GasOracle {
  /**
   * token_exchange_rate ...
   */
  tokenExchangeRate: string;
  /**
   * gas_price ...
   */
  gasPrice: string;
}
export interface GasOracleProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.GasOracle";
  value: Uint8Array;
}
/**
 * GasOracle ...
 * @name GasOracleAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GasOracle
 */
export interface GasOracleAmino {
  /**
   * token_exchange_rate ...
   */
  token_exchange_rate: string;
  /**
   * gas_price ...
   */
  gas_price: string;
}
export interface GasOracleAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.GasOracle";
  value: GasOracleAmino;
}
/**
 * MerkleTreeHook ...
 * @name MerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MerkleTreeHook
 */
export interface MerkleTreeHook {
  id: string;
  mailboxId: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * tree ...
   */
  tree?: Tree;
}
export interface MerkleTreeHookProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MerkleTreeHook";
  value: Uint8Array;
}
/**
 * MerkleTreeHook ...
 * @name MerkleTreeHookAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MerkleTreeHook
 */
export interface MerkleTreeHookAmino {
  id: string;
  mailbox_id: string;
  /**
   * owner ...
   */
  owner: string;
  /**
   * tree ...
   */
  tree?: TreeAmino;
}
export interface MerkleTreeHookAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.MerkleTreeHook";
  value: MerkleTreeHookAmino;
}
/**
 * Tree represents an incremental merkle tree.
 * Contains current branch and the number of inserted leaves in the tree.
 * @name Tree
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.Tree
 */
export interface Tree {
  /**
   * branch ...
   */
  branch: Uint8Array[];
  /**
   * count ...
   */
  count: number;
}
export interface TreeProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.Tree";
  value: Uint8Array;
}
/**
 * Tree represents an incremental merkle tree.
 * Contains current branch and the number of inserted leaves in the tree.
 * @name TreeAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.Tree
 */
export interface TreeAmino {
  /**
   * branch ...
   */
  branch: string[];
  /**
   * count ...
   */
  count: number;
}
export interface TreeAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.Tree";
  value: TreeAmino;
}
/**
 * NoopHook ...
 * @name NoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.NoopHook
 */
export interface NoopHook {
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface NoopHookProtoMsg {
  typeUrl: "/hyperlane.core.post_dispatch.v1.NoopHook";
  value: Uint8Array;
}
/**
 * NoopHook ...
 * @name NoopHookAmino
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.NoopHook
 */
export interface NoopHookAmino {
  /**
   * id ...
   */
  id: string;
  /**
   * owner ...
   */
  owner: string;
}
export interface NoopHookAminoMsg {
  type: "/hyperlane.core.post_dispatch.v1.NoopHook";
  value: NoopHookAmino;
}
function createBaseInterchainGasPaymaster(): InterchainGasPaymaster {
  return {
    id: "",
    owner: "",
    denom: "",
    claimableFees: []
  };
}
/**
 * InterchainGasPaymaster ...
 * @name InterchainGasPaymaster
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.InterchainGasPaymaster
 */
export const InterchainGasPaymaster = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.InterchainGasPaymaster",
  is(o: any): o is InterchainGasPaymaster {
    return o && (o.$typeUrl === InterchainGasPaymaster.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && typeof o.denom === "string" && Array.isArray(o.claimableFees) && (!o.claimableFees.length || Coin.is(o.claimableFees[0])));
  },
  isAmino(o: any): o is InterchainGasPaymasterAmino {
    return o && (o.$typeUrl === InterchainGasPaymaster.typeUrl || typeof o.id === "string" && typeof o.owner === "string" && typeof o.denom === "string" && Array.isArray(o.claimable_fees) && (!o.claimable_fees.length || Coin.isAmino(o.claimable_fees[0])));
  },
  encode(message: InterchainGasPaymaster, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    for (const v of message.claimableFees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterchainGasPaymaster {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainGasPaymaster();
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
          message.denom = reader.string();
          break;
        case 4:
          message.claimableFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InterchainGasPaymaster>): InterchainGasPaymaster {
    const message = createBaseInterchainGasPaymaster();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.claimableFees = object.claimableFees?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InterchainGasPaymasterAmino): InterchainGasPaymaster {
    const message = createBaseInterchainGasPaymaster();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.claimableFees = object.claimable_fees?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InterchainGasPaymaster): InterchainGasPaymasterAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.denom = message.denom === "" ? undefined : message.denom;
    if (message.claimableFees) {
      obj.claimable_fees = message.claimableFees.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.claimable_fees = message.claimableFees;
    }
    return obj;
  },
  fromAminoMsg(object: InterchainGasPaymasterAminoMsg): InterchainGasPaymaster {
    return InterchainGasPaymaster.fromAmino(object.value);
  },
  fromProtoMsg(message: InterchainGasPaymasterProtoMsg): InterchainGasPaymaster {
    return InterchainGasPaymaster.decode(message.value);
  },
  toProto(message: InterchainGasPaymaster): Uint8Array {
    return InterchainGasPaymaster.encode(message).finish();
  },
  toProtoMsg(message: InterchainGasPaymaster): InterchainGasPaymasterProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.InterchainGasPaymaster",
      value: InterchainGasPaymaster.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(InterchainGasPaymaster.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseDestinationGasConfig(): DestinationGasConfig {
  return {
    remoteDomain: 0,
    gasOracle: undefined,
    gasOverhead: ""
  };
}
/**
 * DestinationGasConfig ...
 * @name DestinationGasConfig
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.DestinationGasConfig
 */
export const DestinationGasConfig = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.DestinationGasConfig",
  is(o: any): o is DestinationGasConfig {
    return o && (o.$typeUrl === DestinationGasConfig.typeUrl || typeof o.remoteDomain === "number" && typeof o.gasOverhead === "string");
  },
  isAmino(o: any): o is DestinationGasConfigAmino {
    return o && (o.$typeUrl === DestinationGasConfig.typeUrl || typeof o.remote_domain === "number" && typeof o.gas_overhead === "string");
  },
  encode(message: DestinationGasConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.remoteDomain !== 0) {
      writer.uint32(8).uint32(message.remoteDomain);
    }
    if (message.gasOracle !== undefined) {
      GasOracle.encode(message.gasOracle, writer.uint32(18).fork()).ldelim();
    }
    if (message.gasOverhead !== "") {
      writer.uint32(26).string(message.gasOverhead);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DestinationGasConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDestinationGasConfig();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DestinationGasConfig>): DestinationGasConfig {
    const message = createBaseDestinationGasConfig();
    message.remoteDomain = object.remoteDomain ?? 0;
    message.gasOracle = object.gasOracle !== undefined && object.gasOracle !== null ? GasOracle.fromPartial(object.gasOracle) : undefined;
    message.gasOverhead = object.gasOverhead ?? "";
    return message;
  },
  fromAmino(object: DestinationGasConfigAmino): DestinationGasConfig {
    const message = createBaseDestinationGasConfig();
    if (object.remote_domain !== undefined && object.remote_domain !== null) {
      message.remoteDomain = object.remote_domain;
    }
    if (object.gas_oracle !== undefined && object.gas_oracle !== null) {
      message.gasOracle = GasOracle.fromAmino(object.gas_oracle);
    }
    if (object.gas_overhead !== undefined && object.gas_overhead !== null) {
      message.gasOverhead = object.gas_overhead;
    }
    return message;
  },
  toAmino(message: DestinationGasConfig): DestinationGasConfigAmino {
    const obj: any = {};
    obj.remote_domain = message.remoteDomain === 0 ? undefined : message.remoteDomain;
    obj.gas_oracle = message.gasOracle ? GasOracle.toAmino(message.gasOracle) : undefined;
    obj.gas_overhead = message.gasOverhead === "" ? undefined : message.gasOverhead;
    return obj;
  },
  fromAminoMsg(object: DestinationGasConfigAminoMsg): DestinationGasConfig {
    return DestinationGasConfig.fromAmino(object.value);
  },
  fromProtoMsg(message: DestinationGasConfigProtoMsg): DestinationGasConfig {
    return DestinationGasConfig.decode(message.value);
  },
  toProto(message: DestinationGasConfig): Uint8Array {
    return DestinationGasConfig.encode(message).finish();
  },
  toProtoMsg(message: DestinationGasConfig): DestinationGasConfigProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.DestinationGasConfig",
      value: DestinationGasConfig.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(DestinationGasConfig.typeUrl)) {
      return;
    }
    GasOracle.registerTypeUrl();
  }
};
function createBaseGasOracle(): GasOracle {
  return {
    tokenExchangeRate: "",
    gasPrice: ""
  };
}
/**
 * GasOracle ...
 * @name GasOracle
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.GasOracle
 */
export const GasOracle = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.GasOracle",
  is(o: any): o is GasOracle {
    return o && (o.$typeUrl === GasOracle.typeUrl || typeof o.tokenExchangeRate === "string" && typeof o.gasPrice === "string");
  },
  isAmino(o: any): o is GasOracleAmino {
    return o && (o.$typeUrl === GasOracle.typeUrl || typeof o.token_exchange_rate === "string" && typeof o.gas_price === "string");
  },
  encode(message: GasOracle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenExchangeRate !== "") {
      writer.uint32(10).string(message.tokenExchangeRate);
    }
    if (message.gasPrice !== "") {
      writer.uint32(18).string(message.gasPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasOracle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasOracle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenExchangeRate = reader.string();
          break;
        case 2:
          message.gasPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GasOracle>): GasOracle {
    const message = createBaseGasOracle();
    message.tokenExchangeRate = object.tokenExchangeRate ?? "";
    message.gasPrice = object.gasPrice ?? "";
    return message;
  },
  fromAmino(object: GasOracleAmino): GasOracle {
    const message = createBaseGasOracle();
    if (object.token_exchange_rate !== undefined && object.token_exchange_rate !== null) {
      message.tokenExchangeRate = object.token_exchange_rate;
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = object.gas_price;
    }
    return message;
  },
  toAmino(message: GasOracle): GasOracleAmino {
    const obj: any = {};
    obj.token_exchange_rate = message.tokenExchangeRate === "" ? undefined : message.tokenExchangeRate;
    obj.gas_price = message.gasPrice === "" ? undefined : message.gasPrice;
    return obj;
  },
  fromAminoMsg(object: GasOracleAminoMsg): GasOracle {
    return GasOracle.fromAmino(object.value);
  },
  fromProtoMsg(message: GasOracleProtoMsg): GasOracle {
    return GasOracle.decode(message.value);
  },
  toProto(message: GasOracle): Uint8Array {
    return GasOracle.encode(message).finish();
  },
  toProtoMsg(message: GasOracle): GasOracleProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.GasOracle",
      value: GasOracle.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMerkleTreeHook(): MerkleTreeHook {
  return {
    id: "",
    mailboxId: "",
    owner: "",
    tree: undefined
  };
}
/**
 * MerkleTreeHook ...
 * @name MerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.MerkleTreeHook
 */
export const MerkleTreeHook = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.MerkleTreeHook",
  is(o: any): o is MerkleTreeHook {
    return o && (o.$typeUrl === MerkleTreeHook.typeUrl || typeof o.id === "string" && typeof o.mailboxId === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is MerkleTreeHookAmino {
    return o && (o.$typeUrl === MerkleTreeHook.typeUrl || typeof o.id === "string" && typeof o.mailbox_id === "string" && typeof o.owner === "string");
  },
  encode(message: MerkleTreeHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.mailboxId !== "") {
      writer.uint32(18).string(message.mailboxId);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.tree !== undefined) {
      Tree.encode(message.tree, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerkleTreeHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleTreeHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.mailboxId = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.tree = Tree.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MerkleTreeHook>): MerkleTreeHook {
    const message = createBaseMerkleTreeHook();
    message.id = object.id ?? "";
    message.mailboxId = object.mailboxId ?? "";
    message.owner = object.owner ?? "";
    message.tree = object.tree !== undefined && object.tree !== null ? Tree.fromPartial(object.tree) : undefined;
    return message;
  },
  fromAmino(object: MerkleTreeHookAmino): MerkleTreeHook {
    const message = createBaseMerkleTreeHook();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.mailbox_id !== undefined && object.mailbox_id !== null) {
      message.mailboxId = object.mailbox_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.tree !== undefined && object.tree !== null) {
      message.tree = Tree.fromAmino(object.tree);
    }
    return message;
  },
  toAmino(message: MerkleTreeHook): MerkleTreeHookAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.mailbox_id = message.mailboxId === "" ? undefined : message.mailboxId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.tree = message.tree ? Tree.toAmino(message.tree) : undefined;
    return obj;
  },
  fromAminoMsg(object: MerkleTreeHookAminoMsg): MerkleTreeHook {
    return MerkleTreeHook.fromAmino(object.value);
  },
  fromProtoMsg(message: MerkleTreeHookProtoMsg): MerkleTreeHook {
    return MerkleTreeHook.decode(message.value);
  },
  toProto(message: MerkleTreeHook): Uint8Array {
    return MerkleTreeHook.encode(message).finish();
  },
  toProtoMsg(message: MerkleTreeHook): MerkleTreeHookProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.MerkleTreeHook",
      value: MerkleTreeHook.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MerkleTreeHook.typeUrl)) {
      return;
    }
    Tree.registerTypeUrl();
  }
};
function createBaseTree(): Tree {
  return {
    branch: [],
    count: 0
  };
}
/**
 * Tree represents an incremental merkle tree.
 * Contains current branch and the number of inserted leaves in the tree.
 * @name Tree
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.Tree
 */
export const Tree = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.Tree",
  is(o: any): o is Tree {
    return o && (o.$typeUrl === Tree.typeUrl || Array.isArray(o.branch) && (!o.branch.length || o.branch[0] instanceof Uint8Array || typeof o.branch[0] === "string") && typeof o.count === "number");
  },
  isAmino(o: any): o is TreeAmino {
    return o && (o.$typeUrl === Tree.typeUrl || Array.isArray(o.branch) && (!o.branch.length || o.branch[0] instanceof Uint8Array || typeof o.branch[0] === "string") && typeof o.count === "number");
  },
  encode(message: Tree, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.branch) {
      writer.uint32(10).bytes(v!);
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Tree {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTree();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.branch.push(reader.bytes());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Tree>): Tree {
    const message = createBaseTree();
    message.branch = object.branch?.map(e => e) || [];
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: TreeAmino): Tree {
    const message = createBaseTree();
    message.branch = object.branch?.map(e => bytesFromBase64(e)) || [];
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: Tree): TreeAmino {
    const obj: any = {};
    if (message.branch) {
      obj.branch = message.branch.map(e => base64FromBytes(e));
    } else {
      obj.branch = message.branch;
    }
    obj.count = message.count === 0 ? undefined : message.count;
    return obj;
  },
  fromAminoMsg(object: TreeAminoMsg): Tree {
    return Tree.fromAmino(object.value);
  },
  fromProtoMsg(message: TreeProtoMsg): Tree {
    return Tree.decode(message.value);
  },
  toProto(message: Tree): Uint8Array {
    return Tree.encode(message).finish();
  },
  toProtoMsg(message: Tree): TreeProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.Tree",
      value: Tree.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseNoopHook(): NoopHook {
  return {
    id: "",
    owner: ""
  };
}
/**
 * NoopHook ...
 * @name NoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto type: hyperlane.core.post_dispatch.v1.NoopHook
 */
export const NoopHook = {
  typeUrl: "/hyperlane.core.post_dispatch.v1.NoopHook",
  is(o: any): o is NoopHook {
    return o && (o.$typeUrl === NoopHook.typeUrl || typeof o.id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is NoopHookAmino {
    return o && (o.$typeUrl === NoopHook.typeUrl || typeof o.id === "string" && typeof o.owner === "string");
  },
  encode(message: NoopHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NoopHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoopHook();
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
  fromPartial(object: DeepPartial<NoopHook>): NoopHook {
    const message = createBaseNoopHook();
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: NoopHookAmino): NoopHook {
    const message = createBaseNoopHook();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: NoopHook): NoopHookAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: NoopHookAminoMsg): NoopHook {
    return NoopHook.fromAmino(object.value);
  },
  fromProtoMsg(message: NoopHookProtoMsg): NoopHook {
    return NoopHook.decode(message.value);
  },
  toProto(message: NoopHook): Uint8Array {
    return NoopHook.encode(message).finish();
  },
  toProtoMsg(message: NoopHook): NoopHookProtoMsg {
    return {
      typeUrl: "/hyperlane.core.post_dispatch.v1.NoopHook",
      value: NoopHook.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};