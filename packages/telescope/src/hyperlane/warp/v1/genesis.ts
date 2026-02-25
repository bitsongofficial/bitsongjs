import { Params, ParamsAmino, HypToken, HypTokenAmino, RemoteRouter, RemoteRouterAmino } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState is the state that must be provided at genesis.
 * @name GenesisState
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.GenesisState
 */
export interface GenesisState {
  params: Params;
  tokens: HypToken[];
  remoteRouters: GenesisRemoteRouterWrapper[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/hyperlane.warp.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState is the state that must be provided at genesis.
 * @name GenesisStateAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.GenesisState
 */
export interface GenesisStateAmino {
  params: ParamsAmino;
  tokens: HypTokenAmino[];
  remote_routers: GenesisRemoteRouterWrapperAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/hyperlane.warp.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisRemoteRouterWrapper ...
 * @name GenesisRemoteRouterWrapper
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.GenesisRemoteRouterWrapper
 */
export interface GenesisRemoteRouterWrapper {
  tokenId: bigint;
  remoteRouter: RemoteRouter;
}
export interface GenesisRemoteRouterWrapperProtoMsg {
  typeUrl: "/hyperlane.warp.v1.GenesisRemoteRouterWrapper";
  value: Uint8Array;
}
/**
 * GenesisRemoteRouterWrapper ...
 * @name GenesisRemoteRouterWrapperAmino
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.GenesisRemoteRouterWrapper
 */
export interface GenesisRemoteRouterWrapperAmino {
  token_id: string;
  remote_router: RemoteRouterAmino;
}
export interface GenesisRemoteRouterWrapperAminoMsg {
  type: "/hyperlane.warp.v1.GenesisRemoteRouterWrapper";
  value: GenesisRemoteRouterWrapperAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokens: [],
    remoteRouters: []
  };
}
/**
 * GenesisState is the state that must be provided at genesis.
 * @name GenesisState
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/hyperlane.warp.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.tokens) && (!o.tokens.length || HypToken.is(o.tokens[0])) && Array.isArray(o.remoteRouters) && (!o.remoteRouters.length || GenesisRemoteRouterWrapper.is(o.remoteRouters[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.tokens) && (!o.tokens.length || HypToken.isAmino(o.tokens[0])) && Array.isArray(o.remote_routers) && (!o.remote_routers.length || GenesisRemoteRouterWrapper.isAmino(o.remote_routers[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokens) {
      HypToken.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.remoteRouters) {
      GenesisRemoteRouterWrapper.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.tokens.push(HypToken.decode(reader, reader.uint32()));
          break;
        case 3:
          message.remoteRouters.push(GenesisRemoteRouterWrapper.decode(reader, reader.uint32()));
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
    message.tokens = object.tokens?.map(e => HypToken.fromPartial(e)) || [];
    message.remoteRouters = object.remoteRouters?.map(e => GenesisRemoteRouterWrapper.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokens = object.tokens?.map(e => HypToken.fromAmino(e)) || [];
    message.remoteRouters = object.remote_routers?.map(e => GenesisRemoteRouterWrapper.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokens) {
      obj.tokens = message.tokens.map(e => e ? HypToken.toAmino(e) : undefined);
    } else {
      obj.tokens = message.tokens;
    }
    if (message.remoteRouters) {
      obj.remote_routers = message.remoteRouters.map(e => e ? GenesisRemoteRouterWrapper.toAmino(e) : undefined);
    } else {
      obj.remote_routers = message.remoteRouters;
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
      typeUrl: "/hyperlane.warp.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    HypToken.registerTypeUrl();
    GenesisRemoteRouterWrapper.registerTypeUrl();
  }
};
function createBaseGenesisRemoteRouterWrapper(): GenesisRemoteRouterWrapper {
  return {
    tokenId: BigInt(0),
    remoteRouter: RemoteRouter.fromPartial({})
  };
}
/**
 * GenesisRemoteRouterWrapper ...
 * @name GenesisRemoteRouterWrapper
 * @package hyperlane.warp.v1
 * @see proto type: hyperlane.warp.v1.GenesisRemoteRouterWrapper
 */
export const GenesisRemoteRouterWrapper = {
  typeUrl: "/hyperlane.warp.v1.GenesisRemoteRouterWrapper",
  is(o: any): o is GenesisRemoteRouterWrapper {
    return o && (o.$typeUrl === GenesisRemoteRouterWrapper.typeUrl || typeof o.tokenId === "bigint" && RemoteRouter.is(o.remoteRouter));
  },
  isAmino(o: any): o is GenesisRemoteRouterWrapperAmino {
    return o && (o.$typeUrl === GenesisRemoteRouterWrapper.typeUrl || typeof o.token_id === "bigint" && RemoteRouter.isAmino(o.remote_router));
  },
  encode(message: GenesisRemoteRouterWrapper, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tokenId !== BigInt(0)) {
      writer.uint32(8).uint64(message.tokenId);
    }
    if (message.remoteRouter !== undefined) {
      RemoteRouter.encode(message.remoteRouter, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisRemoteRouterWrapper {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisRemoteRouterWrapper();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.uint64();
          break;
        case 2:
          message.remoteRouter = RemoteRouter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisRemoteRouterWrapper>): GenesisRemoteRouterWrapper {
    const message = createBaseGenesisRemoteRouterWrapper();
    message.tokenId = object.tokenId !== undefined && object.tokenId !== null ? BigInt(object.tokenId.toString()) : BigInt(0);
    message.remoteRouter = object.remoteRouter !== undefined && object.remoteRouter !== null ? RemoteRouter.fromPartial(object.remoteRouter) : undefined;
    return message;
  },
  fromAmino(object: GenesisRemoteRouterWrapperAmino): GenesisRemoteRouterWrapper {
    const message = createBaseGenesisRemoteRouterWrapper();
    if (object.token_id !== undefined && object.token_id !== null) {
      message.tokenId = BigInt(object.token_id);
    }
    if (object.remote_router !== undefined && object.remote_router !== null) {
      message.remoteRouter = RemoteRouter.fromAmino(object.remote_router);
    }
    return message;
  },
  toAmino(message: GenesisRemoteRouterWrapper): GenesisRemoteRouterWrapperAmino {
    const obj: any = {};
    obj.token_id = message.tokenId !== BigInt(0) ? message.tokenId?.toString() : undefined;
    obj.remote_router = message.remoteRouter ? RemoteRouter.toAmino(message.remoteRouter) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisRemoteRouterWrapperAminoMsg): GenesisRemoteRouterWrapper {
    return GenesisRemoteRouterWrapper.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisRemoteRouterWrapperProtoMsg): GenesisRemoteRouterWrapper {
    return GenesisRemoteRouterWrapper.decode(message.value);
  },
  toProto(message: GenesisRemoteRouterWrapper): Uint8Array {
    return GenesisRemoteRouterWrapper.encode(message).finish();
  },
  toProtoMsg(message: GenesisRemoteRouterWrapper): GenesisRemoteRouterWrapperProtoMsg {
    return {
      typeUrl: "/hyperlane.warp.v1.GenesisRemoteRouterWrapper",
      value: GenesisRemoteRouterWrapper.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisRemoteRouterWrapper.typeUrl)) {
      return;
    }
    RemoteRouter.registerTypeUrl();
  }
};