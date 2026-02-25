import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * Params defines fantoken module's parameters
 * @name Params
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.Params
 */
export interface Params {
  issueFee: Coin;
  mintFee: Coin;
  burnFee: Coin;
}
export interface ParamsProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines fantoken module's parameters
 * @name ParamsAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.Params
 */
export interface ParamsAmino {
  issue_fee: CoinAmino;
  mint_fee: CoinAmino;
  burn_fee: CoinAmino;
}
export interface ParamsAminoMsg {
  type: "/bitsong.fantoken.v1beta1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    issueFee: Coin.fromPartial({}),
    mintFee: Coin.fromPartial({}),
    burnFee: Coin.fromPartial({})
  };
}
/**
 * Params defines fantoken module's parameters
 * @name Params
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.Params
 */
export const Params = {
  typeUrl: "/bitsong.fantoken.v1beta1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Coin.is(o.issueFee) && Coin.is(o.mintFee) && Coin.is(o.burnFee));
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Coin.isAmino(o.issue_fee) && Coin.isAmino(o.mint_fee) && Coin.isAmino(o.burn_fee));
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.issueFee !== undefined) {
      Coin.encode(message.issueFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issueFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burnFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.issueFee = object.issueFee !== undefined && object.issueFee !== null ? Coin.fromPartial(object.issueFee) : undefined;
    message.mintFee = object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    message.burnFee = object.burnFee !== undefined && object.burnFee !== null ? Coin.fromPartial(object.burnFee) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.issue_fee !== undefined && object.issue_fee !== null) {
      message.issueFee = Coin.fromAmino(object.issue_fee);
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mintFee = Coin.fromAmino(object.mint_fee);
    }
    if (object.burn_fee !== undefined && object.burn_fee !== null) {
      message.burnFee = Coin.fromAmino(object.burn_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.issue_fee = message.issueFee ? Coin.toAmino(message.issueFee) : undefined;
    obj.mint_fee = message.mintFee ? Coin.toAmino(message.mintFee) : undefined;
    obj.burn_fee = message.burnFee ? Coin.toAmino(message.burnFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};