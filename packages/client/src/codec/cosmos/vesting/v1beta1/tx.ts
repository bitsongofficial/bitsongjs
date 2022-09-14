/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import { Coin } from '../../base/v1beta1/coin';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.vesting.v1beta1';

/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  $type: 'cosmos.vesting.v1beta1.MsgCreateVestingAccount';
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
  endTime: Long;
  delayed: boolean;
}

/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
  $type: 'cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse';
}

function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    $type: 'cosmos.vesting.v1beta1.MsgCreateVestingAccount',
    fromAddress: '',
    toAddress: '',
    amount: [],
    endTime: Long.ZERO,
    delayed: false,
  };
}

export const MsgCreateVestingAccount = {
  $type: 'cosmos.vesting.v1beta1.MsgCreateVestingAccount' as const,

  encode(
    message: MsgCreateVestingAccount,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.fromAddress !== '') {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== '') {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.endTime.isZero()) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = reader.int64() as Long;
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateVestingAccount {
    return {
      $type: MsgCreateVestingAccount.$type,
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : '',
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : '',
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
      endTime: isSet(object.endTime)
        ? Long.fromValue(object.endTime)
        : Long.ZERO,
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false,
    };
  },

  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined &&
      (obj.endTime = (message.endTime || Long.ZERO).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVestingAccount>, I>>(
    object: I,
  ): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? '';
    message.toAddress = object.toAddress ?? '';
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.endTime =
      object.endTime !== undefined && object.endTime !== null
        ? Long.fromValue(object.endTime)
        : Long.ZERO;
    message.delayed = object.delayed ?? false;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateVestingAccount.$type, MsgCreateVestingAccount);

function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return { $type: 'cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse' };
}

export const MsgCreateVestingAccountResponse = {
  $type: 'cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse' as const,

  encode(
    _: MsgCreateVestingAccountResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateVestingAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateVestingAccountResponse {
    return {
      $type: MsgCreateVestingAccountResponse.$type,
    };
  },

  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateVestingAccountResponse>, I>>(
    _: I,
  ): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateVestingAccountResponse.$type,
  MsgCreateVestingAccountResponse,
);

/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(
    request: MsgCreateVestingAccount,
  ): Promise<MsgCreateVestingAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
  }
  CreateVestingAccount(
    request: MsgCreateVestingAccount,
  ): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.vesting.v1beta1.Msg',
      'CreateVestingAccount',
      data,
    );
    return promise.then(data =>
      MsgCreateVestingAccountResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

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
