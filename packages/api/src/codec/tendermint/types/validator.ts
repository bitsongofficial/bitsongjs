/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import { PublicKey } from '../crypto/keys';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'tendermint.types';

export interface ValidatorSet {
  $type: 'tendermint.types.ValidatorSet';
  validators: Validator[];
  proposer?: Validator;
  totalVotingPower: Long;
}

export interface Validator {
  $type: 'tendermint.types.Validator';
  address: Uint8Array;
  pubKey?: PublicKey;
  votingPower: Long;
  proposerPriority: Long;
}

export interface SimpleValidator {
  $type: 'tendermint.types.SimpleValidator';
  pubKey?: PublicKey;
  votingPower: Long;
}

function createBaseValidatorSet(): ValidatorSet {
  return {
    $type: 'tendermint.types.ValidatorSet',
    validators: [],
    proposer: undefined,
    totalVotingPower: Long.ZERO,
  };
}

export const ValidatorSet = {
  $type: 'tendermint.types.ValidatorSet' as const,

  encode(
    message: ValidatorSet,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    if (!message.totalVotingPower.isZero()) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSet {
    return {
      $type: ValidatorSet.$type,
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => Validator.fromJSON(e))
        : [],
      proposer: isSet(object.proposer)
        ? Validator.fromJSON(object.proposer)
        : undefined,
      totalVotingPower: isSet(object.totalVotingPower)
        ? Long.fromValue(object.totalVotingPower)
        : Long.ZERO,
    };
  },

  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e =>
        e ? Validator.toJSON(e) : undefined,
      );
    } else {
      obj.validators = [];
    }
    message.proposer !== undefined &&
      (obj.proposer = message.proposer
        ? Validator.toJSON(message.proposer)
        : undefined);
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (
        message.totalVotingPower || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSet>, I>>(
    object: I,
  ): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators =
      object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.proposer =
      object.proposer !== undefined && object.proposer !== null
        ? Validator.fromPartial(object.proposer)
        : undefined;
    message.totalVotingPower =
      object.totalVotingPower !== undefined && object.totalVotingPower !== null
        ? Long.fromValue(object.totalVotingPower)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(ValidatorSet.$type, ValidatorSet);

function createBaseValidator(): Validator {
  return {
    $type: 'tendermint.types.Validator',
    address: new Uint8Array(),
    pubKey: undefined,
    votingPower: Long.ZERO,
    proposerPriority: Long.ZERO,
  };
}

export const Validator = {
  $type: 'tendermint.types.Validator' as const,

  encode(
    message: Validator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64() as Long;
          break;
        case 4:
          message.proposerPriority = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      $type: Validator.$type,
      address: isSet(object.address)
        ? bytesFromBase64(object.address)
        : new Uint8Array(),
      pubKey: isSet(object.pubKey)
        ? PublicKey.fromJSON(object.pubKey)
        : undefined,
      votingPower: isSet(object.votingPower)
        ? Long.fromValue(object.votingPower)
        : Long.ZERO,
      proposerPriority: isSet(object.proposerPriority)
        ? Long.fromValue(object.proposerPriority)
        : Long.ZERO,
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array(),
      ));
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey
        ? PublicKey.toJSON(message.pubKey)
        : undefined);
    message.votingPower !== undefined &&
      (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    message.proposerPriority !== undefined &&
      (obj.proposerPriority = (
        message.proposerPriority || Long.ZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(
    object: I,
  ): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromPartial(object.pubKey)
        : undefined;
    message.votingPower =
      object.votingPower !== undefined && object.votingPower !== null
        ? Long.fromValue(object.votingPower)
        : Long.ZERO;
    message.proposerPriority =
      object.proposerPriority !== undefined && object.proposerPriority !== null
        ? Long.fromValue(object.proposerPriority)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(Validator.$type, Validator);

function createBaseSimpleValidator(): SimpleValidator {
  return {
    $type: 'tendermint.types.SimpleValidator',
    pubKey: undefined,
    votingPower: Long.ZERO,
  };
}

export const SimpleValidator = {
  $type: 'tendermint.types.SimpleValidator' as const,

  encode(
    message: SimpleValidator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (!message.votingPower.isZero()) {
      writer.uint32(16).int64(message.votingPower);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.votingPower = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimpleValidator {
    return {
      $type: SimpleValidator.$type,
      pubKey: isSet(object.pubKey)
        ? PublicKey.fromJSON(object.pubKey)
        : undefined,
      votingPower: isSet(object.votingPower)
        ? Long.fromValue(object.votingPower)
        : Long.ZERO,
    };
  },

  toJSON(message: SimpleValidator): unknown {
    const obj: any = {};
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey
        ? PublicKey.toJSON(message.pubKey)
        : undefined);
    message.votingPower !== undefined &&
      (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleValidator>, I>>(
    object: I,
  ): SimpleValidator {
    const message = createBaseSimpleValidator();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? PublicKey.fromPartial(object.pubKey)
        : undefined;
    message.votingPower =
      object.votingPower !== undefined && object.votingPower !== null
        ? Long.fromValue(object.votingPower)
        : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(SimpleValidator.$type, SimpleValidator);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach(byte => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
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
