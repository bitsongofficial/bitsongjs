import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines fantoken module's parameters */

export interface Params {
  issueFee?: Coin;
  mintFee?: Coin;
  burnFee?: Coin;
}
/** Params defines fantoken module's parameters */

export interface ParamsSDKType {
  issue_fee?: CoinSDKType;
  mint_fee?: CoinSDKType;
  burn_fee?: CoinSDKType;
}

function createBaseParams(): Params {
  return {
    issueFee: undefined,
    mintFee: undefined,
    burnFee: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }

};