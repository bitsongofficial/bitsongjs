import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { FanToken, FanTokenAmino, FanTokenSDKType } from "./fantoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the fantoken module's genesis state */
export interface GenesisState {
  params: Params;
  fanTokens: FanToken[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the fantoken module's genesis state */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  fan_tokens?: FanTokenAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/bitsong.fantoken.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the fantoken module's genesis state */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  fan_tokens: FanTokenSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    fanTokens: []
  };
}
export const GenesisState = {
  typeUrl: "/bitsong.fantoken.v1beta1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.fanTokens) && (!o.fanTokens.length || FanToken.is(o.fanTokens[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.fan_tokens) && (!o.fan_tokens.length || FanToken.isSDK(o.fan_tokens[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.fan_tokens) && (!o.fan_tokens.length || FanToken.isAmino(o.fan_tokens[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.fanTokens) {
      FanToken.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.fanTokens.push(FanToken.decode(reader, reader.uint32()));
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
    message.fanTokens = object.fanTokens?.map(e => FanToken.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.fanTokens = object.fan_tokens?.map(e => FanToken.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.fanTokens) {
      obj.fan_tokens = message.fanTokens.map(e => e ? FanToken.toAmino(e) : undefined);
    } else {
      obj.fan_tokens = message.fanTokens;
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
      typeUrl: "/bitsong.fantoken.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);