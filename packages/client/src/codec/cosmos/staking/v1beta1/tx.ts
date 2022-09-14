/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import { Description, CommissionRates } from './staking';
import { Any } from '../../../google/protobuf/any';
import { Coin } from '../../base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.staking.v1beta1';

/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
  $type: 'cosmos.staking.v1beta1.MsgCreateValidator';
  description?: Description;
  commission?: CommissionRates;
  minSelfDelegation: string;
  delegatorAddress: string;
  validatorAddress: string;
  pubkey?: Any;
  value?: Coin;
}

/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
  $type: 'cosmos.staking.v1beta1.MsgCreateValidatorResponse';
}

/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
  $type: 'cosmos.staking.v1beta1.MsgEditValidator';
  description?: Description;
  validatorAddress: string;
  /**
   * We pass a reference to the new commission rate and min self delegation as
   * it's not mandatory to update. If not updated, the deserialized rate will be
   * zero with no way to distinguish if an update was intended.
   * REF: #2373
   */
  commissionRate: string;
  minSelfDelegation: string;
}

/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
  $type: 'cosmos.staking.v1beta1.MsgEditValidatorResponse';
}

/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
  $type: 'cosmos.staking.v1beta1.MsgDelegate';
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}

/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
  $type: 'cosmos.staking.v1beta1.MsgDelegateResponse';
}

/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
  $type: 'cosmos.staking.v1beta1.MsgBeginRedelegate';
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  amount?: Coin;
}

/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
  $type: 'cosmos.staking.v1beta1.MsgBeginRedelegateResponse';
  completionTime?: Timestamp;
}

/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
  $type: 'cosmos.staking.v1beta1.MsgUndelegate';
  delegatorAddress: string;
  validatorAddress: string;
  amount?: Coin;
}

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
  $type: 'cosmos.staking.v1beta1.MsgUndelegateResponse';
  completionTime?: Timestamp;
}

function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    $type: 'cosmos.staking.v1beta1.MsgCreateValidator',
    description: undefined,
    commission: undefined,
    minSelfDelegation: '',
    delegatorAddress: '',
    validatorAddress: '',
    pubkey: undefined,
    value: undefined,
  };
}

export const MsgCreateValidator = {
  $type: 'cosmos.staking.v1beta1.MsgCreateValidator' as const,

  encode(
    message: MsgCreateValidator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.commission !== undefined) {
      CommissionRates.encode(
        message.commission,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.minSelfDelegation !== '') {
      writer.uint32(26).string(message.minSelfDelegation);
    }
    if (message.delegatorAddress !== '') {
      writer.uint32(34).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(42).string(message.validatorAddress);
    }
    if (message.pubkey !== undefined) {
      Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.commission = CommissionRates.decode(reader, reader.uint32());
          break;
        case 3:
          message.minSelfDelegation = reader.string();
          break;
        case 4:
          message.delegatorAddress = reader.string();
          break;
        case 5:
          message.validatorAddress = reader.string();
          break;
        case 6:
          message.pubkey = Any.decode(reader, reader.uint32());
          break;
        case 7:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidator {
    return {
      $type: MsgCreateValidator.$type,
      description: isSet(object.description)
        ? Description.fromJSON(object.description)
        : undefined,
      commission: isSet(object.commission)
        ? CommissionRates.fromJSON(object.commission)
        : undefined,
      minSelfDelegation: isSet(object.minSelfDelegation)
        ? String(object.minSelfDelegation)
        : '',
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MsgCreateValidator): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? CommissionRates.toJSON(message.commission)
        : undefined);
    message.minSelfDelegation !== undefined &&
      (obj.minSelfDelegation = message.minSelfDelegation);
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.pubkey !== undefined &&
      (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
    message.value !== undefined &&
      (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidator>, I>>(
    object: I,
  ): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.description =
      object.description !== undefined && object.description !== null
        ? Description.fromPartial(object.description)
        : undefined;
    message.commission =
      object.commission !== undefined && object.commission !== null
        ? CommissionRates.fromPartial(object.commission)
        : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? '';
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.pubkey =
      object.pubkey !== undefined && object.pubkey !== null
        ? Any.fromPartial(object.pubkey)
        : undefined;
    message.value =
      object.value !== undefined && object.value !== null
        ? Coin.fromPartial(object.value)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateValidator.$type, MsgCreateValidator);

function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return { $type: 'cosmos.staking.v1beta1.MsgCreateValidatorResponse' };
}

export const MsgCreateValidatorResponse = {
  $type: 'cosmos.staking.v1beta1.MsgCreateValidatorResponse' as const,

  encode(
    _: MsgCreateValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
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

  fromJSON(_: any): MsgCreateValidatorResponse {
    return {
      $type: MsgCreateValidatorResponse.$type,
    };
  },

  toJSON(_: MsgCreateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidatorResponse>, I>>(
    _: I,
  ): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateValidatorResponse.$type,
  MsgCreateValidatorResponse,
);

function createBaseMsgEditValidator(): MsgEditValidator {
  return {
    $type: 'cosmos.staking.v1beta1.MsgEditValidator',
    description: undefined,
    validatorAddress: '',
    commissionRate: '',
    minSelfDelegation: '',
  };
}

export const MsgEditValidator = {
  $type: 'cosmos.staking.v1beta1.MsgEditValidator' as const,

  encode(
    message: MsgEditValidator,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.commissionRate !== '') {
      writer.uint32(26).string(message.commissionRate);
    }
    if (message.minSelfDelegation !== '') {
      writer.uint32(34).string(message.minSelfDelegation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.commissionRate = reader.string();
          break;
        case 4:
          message.minSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditValidator {
    return {
      $type: MsgEditValidator.$type,
      description: isSet(object.description)
        ? Description.fromJSON(object.description)
        : undefined,
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      commissionRate: isSet(object.commissionRate)
        ? String(object.commissionRate)
        : '',
      minSelfDelegation: isSet(object.minSelfDelegation)
        ? String(object.minSelfDelegation)
        : '',
    };
  },

  toJSON(message: MsgEditValidator): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.commissionRate !== undefined &&
      (obj.commissionRate = message.commissionRate);
    message.minSelfDelegation !== undefined &&
      (obj.minSelfDelegation = message.minSelfDelegation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidator>, I>>(
    object: I,
  ): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.description =
      object.description !== undefined && object.description !== null
        ? Description.fromPartial(object.description)
        : undefined;
    message.validatorAddress = object.validatorAddress ?? '';
    message.commissionRate = object.commissionRate ?? '';
    message.minSelfDelegation = object.minSelfDelegation ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgEditValidator.$type, MsgEditValidator);

function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return { $type: 'cosmos.staking.v1beta1.MsgEditValidatorResponse' };
}

export const MsgEditValidatorResponse = {
  $type: 'cosmos.staking.v1beta1.MsgEditValidatorResponse' as const,

  encode(
    _: MsgEditValidatorResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgEditValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
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

  fromJSON(_: any): MsgEditValidatorResponse {
    return {
      $type: MsgEditValidatorResponse.$type,
    };
  },

  toJSON(_: MsgEditValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidatorResponse>, I>>(
    _: I,
  ): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgEditValidatorResponse.$type,
  MsgEditValidatorResponse,
);

function createBaseMsgDelegate(): MsgDelegate {
  return {
    $type: 'cosmos.staking.v1beta1.MsgDelegate',
    delegatorAddress: '',
    validatorAddress: '',
    amount: undefined,
  };
}

export const MsgDelegate = {
  $type: 'cosmos.staking.v1beta1.MsgDelegate' as const,

  encode(
    message: MsgDelegate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegate {
    return {
      $type: MsgDelegate.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegate>, I>>(
    object: I,
  ): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgDelegate.$type, MsgDelegate);

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return { $type: 'cosmos.staking.v1beta1.MsgDelegateResponse' };
}

export const MsgDelegateResponse = {
  $type: 'cosmos.staking.v1beta1.MsgDelegateResponse' as const,

  encode(
    _: MsgDelegateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
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

  fromJSON(_: any): MsgDelegateResponse {
    return {
      $type: MsgDelegateResponse.$type,
    };
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(
    _: I,
  ): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgDelegateResponse.$type, MsgDelegateResponse);

function createBaseMsgBeginRedelegate(): MsgBeginRedelegate {
  return {
    $type: 'cosmos.staking.v1beta1.MsgBeginRedelegate',
    delegatorAddress: '',
    validatorSrcAddress: '',
    validatorDstAddress: '',
    amount: undefined,
  };
}

export const MsgBeginRedelegate = {
  $type: 'cosmos.staking.v1beta1.MsgBeginRedelegate' as const,

  encode(
    message: MsgBeginRedelegate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== '') {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== '') {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBeginRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginRedelegate {
    return {
      $type: MsgBeginRedelegate.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorSrcAddress: isSet(object.validatorSrcAddress)
        ? String(object.validatorSrcAddress)
        : '',
      validatorDstAddress: isSet(object.validatorDstAddress)
        ? String(object.validatorDstAddress)
        : '',
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgBeginRedelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegate>, I>>(
    object: I,
  ): MsgBeginRedelegate {
    const message = createBaseMsgBeginRedelegate();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorSrcAddress = object.validatorSrcAddress ?? '';
    message.validatorDstAddress = object.validatorDstAddress ?? '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgBeginRedelegate.$type, MsgBeginRedelegate);

function createBaseMsgBeginRedelegateResponse(): MsgBeginRedelegateResponse {
  return {
    $type: 'cosmos.staking.v1beta1.MsgBeginRedelegateResponse',
    completionTime: undefined,
  };
}

export const MsgBeginRedelegateResponse = {
  $type: 'cosmos.staking.v1beta1.MsgBeginRedelegateResponse' as const,

  encode(
    message: MsgBeginRedelegateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        message.completionTime,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgBeginRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBeginRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBeginRedelegateResponse {
    return {
      $type: MsgBeginRedelegateResponse.$type,
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
    };
  },

  toJSON(message: MsgBeginRedelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(
        message.completionTime,
      ).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBeginRedelegateResponse>, I>>(
    object: I,
  ): MsgBeginRedelegateResponse {
    const message = createBaseMsgBeginRedelegateResponse();
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? Timestamp.fromPartial(object.completionTime)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  MsgBeginRedelegateResponse.$type,
  MsgBeginRedelegateResponse,
);

function createBaseMsgUndelegate(): MsgUndelegate {
  return {
    $type: 'cosmos.staking.v1beta1.MsgUndelegate',
    delegatorAddress: '',
    validatorAddress: '',
    amount: undefined,
  };
}

export const MsgUndelegate = {
  $type: 'cosmos.staking.v1beta1.MsgUndelegate' as const,

  encode(
    message: MsgUndelegate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== '') {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    return {
      $type: MsgUndelegate.$type,
      delegatorAddress: isSet(object.delegatorAddress)
        ? String(object.delegatorAddress)
        : '',
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(
    object: I,
  ): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegatorAddress = object.delegatorAddress ?? '';
    message.validatorAddress = object.validatorAddress ?? '';
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? Coin.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgUndelegate.$type, MsgUndelegate);

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {
    $type: 'cosmos.staking.v1beta1.MsgUndelegateResponse',
    completionTime: undefined,
  };
}

export const MsgUndelegateResponse = {
  $type: 'cosmos.staking.v1beta1.MsgUndelegateResponse' as const,

  encode(
    message: MsgUndelegateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        message.completionTime,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegateResponse {
    return {
      $type: MsgUndelegateResponse.$type,
      completionTime: isSet(object.completionTime)
        ? fromJsonTimestamp(object.completionTime)
        : undefined,
    };
  },

  toJSON(message: MsgUndelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined &&
      (obj.completionTime = fromTimestamp(
        message.completionTime,
      ).toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(
    object: I,
  ): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime =
      object.completionTime !== undefined && object.completionTime !== null
        ? Timestamp.fromPartial(object.completionTime)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgUndelegateResponse.$type, MsgUndelegateResponse);

/** Msg defines the staking Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  CreateValidator(
    request: MsgCreateValidator,
  ): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /**
   * Delegate defines a method for performing a delegation of coins
   * from a delegator to a validator.
   */
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /**
   * BeginRedelegate defines a method for performing a redelegation
   * of coins from a delegator and source validator to a destination validator.
   */
  BeginRedelegate(
    request: MsgBeginRedelegate,
  ): Promise<MsgBeginRedelegateResponse>;
  /**
   * Undelegate defines a method for performing an undelegation from a
   * delegate and a validator.
   */
  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateValidator = this.CreateValidator.bind(this);
    this.EditValidator = this.EditValidator.bind(this);
    this.Delegate = this.Delegate.bind(this);
    this.BeginRedelegate = this.BeginRedelegate.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
  }
  CreateValidator(
    request: MsgCreateValidator,
  ): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'CreateValidator',
      data,
    );
    return promise.then(data =>
      MsgCreateValidatorResponse.decode(new _m0.Reader(data)),
    );
  }

  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'EditValidator',
      data,
    );
    return promise.then(data =>
      MsgEditValidatorResponse.decode(new _m0.Reader(data)),
    );
  }

  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'Delegate',
      data,
    );
    return promise.then(data =>
      MsgDelegateResponse.decode(new _m0.Reader(data)),
    );
  }

  BeginRedelegate(
    request: MsgBeginRedelegate,
  ): Promise<MsgBeginRedelegateResponse> {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'BeginRedelegate',
      data,
    );
    return promise.then(data =>
      MsgBeginRedelegateResponse.decode(new _m0.Reader(data)),
    );
  }

  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request(
      'cosmos.staking.v1beta1.Msg',
      'Undelegate',
      data,
    );
    return promise.then(data =>
      MsgUndelegateResponse.decode(new _m0.Reader(data)),
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Timestamp {
  if (o instanceof Date) {
    return toTimestamp(o);
  } else if (typeof o === 'string') {
    return toTimestamp(new Date(o));
  } else {
    return Timestamp.fromJSON(o);
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
