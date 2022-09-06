/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.fantoken.v1beta1';

/** Params defines fantoken module's parameters */
export interface Params {
  $type: 'bitsong.fantoken.v1beta1.Params';
  issueFee?: Coin;
  mintFee?: Coin;
  burnFee?: Coin;
}

function createBaseParams(): Params {
  return {
    $type: 'bitsong.fantoken.v1beta1.Params',
    issueFee: undefined,
    mintFee: undefined,
    burnFee: undefined,
  };
}

export const Params = {
  $type: 'bitsong.fantoken.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
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

  fromJSON(object: any): Params {
    return {
      $type: Params.$type,
      issueFee: isSet(object.issueFee)
        ? Coin.fromJSON(object.issueFee)
        : undefined,
      mintFee: isSet(object.mintFee)
        ? Coin.fromJSON(object.mintFee)
        : undefined,
      burnFee: isSet(object.burnFee)
        ? Coin.fromJSON(object.burnFee)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.issueFee !== undefined &&
      (obj.issueFee = message.issueFee
        ? Coin.toJSON(message.issueFee)
        : undefined);
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee
        ? Coin.toJSON(message.mintFee)
        : undefined);
    message.burnFee !== undefined &&
      (obj.burnFee = message.burnFee
        ? Coin.toJSON(message.burnFee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.issueFee =
      object.issueFee !== undefined && object.issueFee !== null
        ? Coin.fromPartial(object.issueFee)
        : undefined;
    message.mintFee =
      object.mintFee !== undefined && object.mintFee !== null
        ? Coin.fromPartial(object.mintFee)
        : undefined;
    message.burnFee =
      object.burnFee !== undefined && object.burnFee !== null
        ? Coin.fromPartial(object.burnFee)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | '$type'>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
