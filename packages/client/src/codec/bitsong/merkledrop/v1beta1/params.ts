/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.merkledrop.v1beta1';

/** Params defines merkledrop module's parameters */
export interface Params {
  $type: 'bitsong.merkledrop.v1beta1.Params';
  creationFee?: Coin;
}

function createBaseParams(): Params {
  return { $type: 'bitsong.merkledrop.v1beta1.Params', creationFee: undefined };
}

export const Params = {
  $type: 'bitsong.merkledrop.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(10).fork()).ldelim();
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
          message.creationFee = Coin.decode(reader, reader.uint32());
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
      creationFee: isSet(object.creationFee)
        ? Coin.fromJSON(object.creationFee)
        : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.creationFee !== undefined &&
      (obj.creationFee = message.creationFee
        ? Coin.toJSON(message.creationFee)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.creationFee =
      object.creationFee !== undefined && object.creationFee !== null
        ? Coin.fromPartial(object.creationFee)
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
