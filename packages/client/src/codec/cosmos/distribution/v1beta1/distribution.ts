/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import { DecCoin, Coin } from '../../base/v1beta1/coin';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cosmos.distribution.v1beta1';

/** Params defines the set of params for the distribution module. */
export interface Params {
  $type: 'cosmos.distribution.v1beta1.Params';
  communityTax: string;
  baseProposerReward: string;
  bonusProposerReward: string;
  withdrawAddrEnabled: boolean;
}

/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
  $type: 'cosmos.distribution.v1beta1.ValidatorHistoricalRewards';
  cumulativeRewardRatio: DecCoin[];
  referenceCount: number;
}

/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
  $type: 'cosmos.distribution.v1beta1.ValidatorCurrentRewards';
  rewards: DecCoin[];
  period: Long;
}

/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
  $type: 'cosmos.distribution.v1beta1.ValidatorAccumulatedCommission';
  commission: DecCoin[];
}

/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
  $type: 'cosmos.distribution.v1beta1.ValidatorOutstandingRewards';
  rewards: DecCoin[];
}

/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
  $type: 'cosmos.distribution.v1beta1.ValidatorSlashEvent';
  validatorPeriod: Long;
  fraction: string;
}

/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
  $type: 'cosmos.distribution.v1beta1.ValidatorSlashEvents';
  validatorSlashEvents: ValidatorSlashEvent[];
}

/** FeePool is the global fee pool for distribution. */
export interface FeePool {
  $type: 'cosmos.distribution.v1beta1.FeePool';
  communityPool: DecCoin[];
}

/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposal {
  $type: 'cosmos.distribution.v1beta1.CommunityPoolSpendProposal';
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}

/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
  $type: 'cosmos.distribution.v1beta1.DelegatorStartingInfo';
  previousPeriod: Long;
  stake: string;
  height: Long;
}

/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
  $type: 'cosmos.distribution.v1beta1.DelegationDelegatorReward';
  validatorAddress: string;
  reward: DecCoin[];
}

/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
  $type: 'cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit';
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}

function createBaseParams(): Params {
  return {
    $type: 'cosmos.distribution.v1beta1.Params',
    communityTax: '',
    baseProposerReward: '',
    bonusProposerReward: '',
    withdrawAddrEnabled: false,
  };
}

export const Params = {
  $type: 'cosmos.distribution.v1beta1.Params' as const,

  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.communityTax !== '') {
      writer.uint32(10).string(message.communityTax);
    }
    if (message.baseProposerReward !== '') {
      writer.uint32(18).string(message.baseProposerReward);
    }
    if (message.bonusProposerReward !== '') {
      writer.uint32(26).string(message.bonusProposerReward);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
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
          message.communityTax = reader.string();
          break;
        case 2:
          message.baseProposerReward = reader.string();
          break;
        case 3:
          message.bonusProposerReward = reader.string();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
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
      communityTax: isSet(object.communityTax)
        ? String(object.communityTax)
        : '',
      baseProposerReward: isSet(object.baseProposerReward)
        ? String(object.baseProposerReward)
        : '',
      bonusProposerReward: isSet(object.bonusProposerReward)
        ? String(object.bonusProposerReward)
        : '',
      withdrawAddrEnabled: isSet(object.withdrawAddrEnabled)
        ? Boolean(object.withdrawAddrEnabled)
        : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.communityTax !== undefined &&
      (obj.communityTax = message.communityTax);
    message.baseProposerReward !== undefined &&
      (obj.baseProposerReward = message.baseProposerReward);
    message.bonusProposerReward !== undefined &&
      (obj.bonusProposerReward = message.bonusProposerReward);
    message.withdrawAddrEnabled !== undefined &&
      (obj.withdrawAddrEnabled = message.withdrawAddrEnabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.communityTax = object.communityTax ?? '';
    message.baseProposerReward = object.baseProposerReward ?? '';
    message.bonusProposerReward = object.bonusProposerReward ?? '';
    message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
    return message;
  },
};

messageTypeRegistry.set(Params.$type, Params);

function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return {
    $type: 'cosmos.distribution.v1beta1.ValidatorHistoricalRewards',
    cumulativeRewardRatio: [],
    referenceCount: 0,
  };
}

export const ValidatorHistoricalRewards = {
  $type: 'cosmos.distribution.v1beta1.ValidatorHistoricalRewards' as const,

  encode(
    message: ValidatorHistoricalRewards,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cumulativeRewardRatio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidatorHistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(
            DecCoin.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.referenceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorHistoricalRewards {
    return {
      $type: ValidatorHistoricalRewards.$type,
      cumulativeRewardRatio: Array.isArray(object?.cumulativeRewardRatio)
        ? object.cumulativeRewardRatio.map((e: any) => DecCoin.fromJSON(e))
        : [],
      referenceCount: isSet(object.referenceCount)
        ? Number(object.referenceCount)
        : 0,
    };
  },

  toJSON(message: ValidatorHistoricalRewards): unknown {
    const obj: any = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map(e =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.cumulativeRewardRatio = [];
    }
    message.referenceCount !== undefined &&
      (obj.referenceCount = Math.round(message.referenceCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorHistoricalRewards>, I>>(
    object: I,
  ): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio =
      object.cumulativeRewardRatio?.map(e => DecCoin.fromPartial(e)) || [];
    message.referenceCount = object.referenceCount ?? 0;
    return message;
  },
};

messageTypeRegistry.set(
  ValidatorHistoricalRewards.$type,
  ValidatorHistoricalRewards,
);

function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return {
    $type: 'cosmos.distribution.v1beta1.ValidatorCurrentRewards',
    rewards: [],
    period: Long.UZERO,
  };
}

export const ValidatorCurrentRewards = {
  $type: 'cosmos.distribution.v1beta1.ValidatorCurrentRewards' as const,

  encode(
    message: ValidatorCurrentRewards,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidatorCurrentRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorCurrentRewards {
    return {
      $type: ValidatorCurrentRewards.$type,
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
    };
  },

  toJSON(message: ValidatorCurrentRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.rewards = [];
    }
    message.period !== undefined &&
      (obj.period = (message.period || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorCurrentRewards>, I>>(
    object: I,
  ): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.period =
      object.period !== undefined && object.period !== null
        ? Long.fromValue(object.period)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(ValidatorCurrentRewards.$type, ValidatorCurrentRewards);

function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return {
    $type: 'cosmos.distribution.v1beta1.ValidatorAccumulatedCommission',
    commission: [],
  };
}

export const ValidatorAccumulatedCommission = {
  $type: 'cosmos.distribution.v1beta1.ValidatorAccumulatedCommission' as const,

  encode(
    message: ValidatorAccumulatedCommission,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidatorAccumulatedCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorAccumulatedCommission {
    return {
      $type: ValidatorAccumulatedCommission.$type,
      commission: Array.isArray(object?.commission)
        ? object.commission.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorAccumulatedCommission): unknown {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.commission = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorAccumulatedCommission>, I>>(
    object: I,
  ): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission =
      object.commission?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ValidatorAccumulatedCommission.$type,
  ValidatorAccumulatedCommission,
);

function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return {
    $type: 'cosmos.distribution.v1beta1.ValidatorOutstandingRewards',
    rewards: [],
  };
}

export const ValidatorOutstandingRewards = {
  $type: 'cosmos.distribution.v1beta1.ValidatorOutstandingRewards' as const,

  encode(
    message: ValidatorOutstandingRewards,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidatorOutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorOutstandingRewards {
    return {
      $type: ValidatorOutstandingRewards.$type,
      rewards: Array.isArray(object?.rewards)
        ? object.rewards.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorOutstandingRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorOutstandingRewards>, I>>(
    object: I,
  ): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  ValidatorOutstandingRewards.$type,
  ValidatorOutstandingRewards,
);

function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return {
    $type: 'cosmos.distribution.v1beta1.ValidatorSlashEvent',
    validatorPeriod: Long.UZERO,
    fraction: '',
  };
}

export const ValidatorSlashEvent = {
  $type: 'cosmos.distribution.v1beta1.ValidatorSlashEvent' as const,

  encode(
    message: ValidatorSlashEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.validatorPeriod.isZero()) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }
    if (message.fraction !== '') {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = reader.uint64() as Long;
          break;
        case 2:
          message.fraction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSlashEvent {
    return {
      $type: ValidatorSlashEvent.$type,
      validatorPeriod: isSet(object.validatorPeriod)
        ? Long.fromValue(object.validatorPeriod)
        : Long.UZERO,
      fraction: isSet(object.fraction) ? String(object.fraction) : '',
    };
  },

  toJSON(message: ValidatorSlashEvent): unknown {
    const obj: any = {};
    message.validatorPeriod !== undefined &&
      (obj.validatorPeriod = (
        message.validatorPeriod || Long.UZERO
      ).toString());
    message.fraction !== undefined && (obj.fraction = message.fraction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvent>, I>>(
    object: I,
  ): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    message.validatorPeriod =
      object.validatorPeriod !== undefined && object.validatorPeriod !== null
        ? Long.fromValue(object.validatorPeriod)
        : Long.UZERO;
    message.fraction = object.fraction ?? '';
    return message;
  },
};

messageTypeRegistry.set(ValidatorSlashEvent.$type, ValidatorSlashEvent);

function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return {
    $type: 'cosmos.distribution.v1beta1.ValidatorSlashEvents',
    validatorSlashEvents: [],
  };
}

export const ValidatorSlashEvents = {
  $type: 'cosmos.distribution.v1beta1.ValidatorSlashEvents' as const,

  encode(
    message: ValidatorSlashEvents,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ValidatorSlashEvents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(
            ValidatorSlashEvent.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSlashEvents {
    return {
      $type: ValidatorSlashEvents.$type,
      validatorSlashEvents: Array.isArray(object?.validatorSlashEvents)
        ? object.validatorSlashEvents.map((e: any) =>
            ValidatorSlashEvent.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: ValidatorSlashEvents): unknown {
    const obj: any = {};
    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map(e =>
        e ? ValidatorSlashEvent.toJSON(e) : undefined,
      );
    } else {
      obj.validatorSlashEvents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvents>, I>>(
    object: I,
  ): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents =
      object.validatorSlashEvents?.map(e =>
        ValidatorSlashEvent.fromPartial(e),
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(ValidatorSlashEvents.$type, ValidatorSlashEvents);

function createBaseFeePool(): FeePool {
  return { $type: 'cosmos.distribution.v1beta1.FeePool', communityPool: [] };
}

export const FeePool = {
  $type: 'cosmos.distribution.v1beta1.FeePool' as const,

  encode(
    message: FeePool,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.communityPool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeePool {
    return {
      $type: FeePool.$type,
      communityPool: Array.isArray(object?.communityPool)
        ? object.communityPool.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FeePool): unknown {
    const obj: any = {};
    if (message.communityPool) {
      obj.communityPool = message.communityPool.map(e =>
        e ? DecCoin.toJSON(e) : undefined,
      );
    } else {
      obj.communityPool = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeePool>, I>>(object: I): FeePool {
    const message = createBaseFeePool();
    message.communityPool =
      object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(FeePool.$type, FeePool);

function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return {
    $type: 'cosmos.distribution.v1beta1.CommunityPoolSpendProposal',
    title: '',
    description: '',
    recipient: '',
    amount: [],
  };
}

export const CommunityPoolSpendProposal = {
  $type: 'cosmos.distribution.v1beta1.CommunityPoolSpendProposal' as const,

  encode(
    message: CommunityPoolSpendProposal,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== '') {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CommunityPoolSpendProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommunityPoolSpendProposal {
    return {
      $type: CommunityPoolSpendProposal.$type,
      title: isSet(object.title) ? String(object.title) : '',
      description: isSet(object.description) ? String(object.description) : '',
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CommunityPoolSpendProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map(e => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommunityPoolSpendProposal>, I>>(
    object: I,
  ): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.recipient = object.recipient ?? '';
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  CommunityPoolSpendProposal.$type,
  CommunityPoolSpendProposal,
);

function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    $type: 'cosmos.distribution.v1beta1.DelegatorStartingInfo',
    previousPeriod: Long.UZERO,
    stake: '',
    height: Long.UZERO,
  };
}

export const DelegatorStartingInfo = {
  $type: 'cosmos.distribution.v1beta1.DelegatorStartingInfo' as const,

  encode(
    message: DelegatorStartingInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (!message.previousPeriod.isZero()) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    if (message.stake !== '') {
      writer.uint32(18).string(message.stake);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DelegatorStartingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = reader.uint64() as Long;
          break;
        case 2:
          message.stake = reader.string();
          break;
        case 3:
          message.height = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegatorStartingInfo {
    return {
      $type: DelegatorStartingInfo.$type,
      previousPeriod: isSet(object.previousPeriod)
        ? Long.fromValue(object.previousPeriod)
        : Long.UZERO,
      stake: isSet(object.stake) ? String(object.stake) : '',
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
    };
  },

  toJSON(message: DelegatorStartingInfo): unknown {
    const obj: any = {};
    message.previousPeriod !== undefined &&
      (obj.previousPeriod = (message.previousPeriod || Long.UZERO).toString());
    message.stake !== undefined && (obj.stake = message.stake);
    message.height !== undefined &&
      (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegatorStartingInfo>, I>>(
    object: I,
  ): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod =
      object.previousPeriod !== undefined && object.previousPeriod !== null
        ? Long.fromValue(object.previousPeriod)
        : Long.UZERO;
    message.stake = object.stake ?? '';
    message.height =
      object.height !== undefined && object.height !== null
        ? Long.fromValue(object.height)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(DelegatorStartingInfo.$type, DelegatorStartingInfo);

function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    $type: 'cosmos.distribution.v1beta1.DelegationDelegatorReward',
    validatorAddress: '',
    reward: [],
  };
}

export const DelegationDelegatorReward = {
  $type: 'cosmos.distribution.v1beta1.DelegationDelegatorReward' as const,

  encode(
    message: DelegationDelegatorReward,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.validatorAddress !== '') {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DelegationDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationDelegatorReward {
    return {
      $type: DelegationDelegatorReward.$type,
      validatorAddress: isSet(object.validatorAddress)
        ? String(object.validatorAddress)
        : '',
      reward: Array.isArray(object?.reward)
        ? object.reward.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DelegationDelegatorReward): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    if (message.reward) {
      obj.reward = message.reward.map(e => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.reward = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationDelegatorReward>, I>>(
    object: I,
  ): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = object.validatorAddress ?? '';
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  DelegationDelegatorReward.$type,
  DelegationDelegatorReward,
);

function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return {
    $type: 'cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit',
    title: '',
    description: '',
    recipient: '',
    amount: '',
    deposit: '',
  };
}

export const CommunityPoolSpendProposalWithDeposit = {
  $type:
    'cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit' as const,

  encode(
    message: CommunityPoolSpendProposalWithDeposit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== '') {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== '') {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== '') {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommunityPoolSpendProposalWithDeposit {
    return {
      $type: CommunityPoolSpendProposalWithDeposit.$type,
      title: isSet(object.title) ? String(object.title) : '',
      description: isSet(object.description) ? String(object.description) : '',
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      amount: isSet(object.amount) ? String(object.amount) : '',
      deposit: isSet(object.deposit) ? String(object.deposit) : '',
    };
  },

  toJSON(message: CommunityPoolSpendProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CommunityPoolSpendProposalWithDeposit>, I>,
  >(object: I): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? '';
    message.description = object.description ?? '';
    message.recipient = object.recipient ?? '';
    message.amount = object.amount ?? '';
    message.deposit = object.deposit ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  CommunityPoolSpendProposalWithDeposit.$type,
  CommunityPoolSpendProposalWithDeposit,
);

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
