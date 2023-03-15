import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface MsgCreate {
  /** owner of the merkledrop */
  owner: string;
  /** merkle_root used to compute proofs */

  merkleRoot: string;
  /** merkledrop start height */

  startHeight: Long;
  /** merkledrop end height */

  endHeight: Long;
  /** coins to distribute */

  coin?: Coin;
}
export interface MsgCreateSDKType {
  /** owner of the merkledrop */
  owner: string;
  /** merkle_root used to compute proofs */

  merkle_root: string;
  /** merkledrop start height */

  start_height: Long;
  /** merkledrop end height */

  end_height: Long;
  /** coins to distribute */

  coin?: CoinSDKType;
}
export interface MsgCreateResponse {
  owner: string;
  id: Long;
}
export interface MsgCreateResponseSDKType {
  owner: string;
  id: Long;
}
export interface MsgClaim {
  sender: string;
  merkledropId: Long;
  index: Long;
  amount: string;
  proofs: string[];
}
export interface MsgClaimSDKType {
  sender: string;
  merkledrop_id: Long;
  index: Long;
  amount: string;
  proofs: string[];
}
export interface MsgClaimResponse {
  id: Long;
  index: Long;
  amount: string;
}
export interface MsgClaimResponseSDKType {
  id: Long;
  index: Long;
  amount: string;
}

function createBaseMsgCreate(): MsgCreate {
  return {
    owner: "",
    merkleRoot: "",
    startHeight: Long.ZERO,
    endHeight: Long.ZERO,
    coin: undefined
  };
}

export const MsgCreate = {
  encode(message: MsgCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.merkleRoot !== "") {
      writer.uint32(18).string(message.merkleRoot);
    }

    if (!message.startHeight.isZero()) {
      writer.uint32(24).int64(message.startHeight);
    }

    if (!message.endHeight.isZero()) {
      writer.uint32(32).int64(message.endHeight);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.merkleRoot = reader.string();
          break;

        case 3:
          message.startHeight = (reader.int64() as Long);
          break;

        case 4:
          message.endHeight = (reader.int64() as Long);
          break;

        case 5:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = createBaseMsgCreate();
    message.owner = object.owner ?? "";
    message.merkleRoot = object.merkleRoot ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
    message.endHeight = object.endHeight !== undefined && object.endHeight !== null ? Long.fromValue(object.endHeight) : Long.ZERO;
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  }

};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {
    owner: "",
    id: Long.UZERO
  };
}

export const MsgCreateResponse = {
  encode(message: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.owner = object.owner ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgClaim(): MsgClaim {
  return {
    sender: "",
    merkledropId: Long.UZERO,
    index: Long.UZERO,
    amount: "",
    proofs: []
  };
}

export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.merkledropId.isZero()) {
      writer.uint32(16).uint64(message.merkledropId);
    }

    if (!message.index.isZero()) {
      writer.uint32(24).uint64(message.index);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    for (const v of message.proofs) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.merkledropId = (reader.uint64() as Long);
          break;

        case 3:
          message.index = (reader.uint64() as Long);
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.proofs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.sender = object.sender ?? "";
    message.merkledropId = object.merkledropId !== undefined && object.merkledropId !== null ? Long.fromValue(object.merkledropId) : Long.UZERO;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.amount = object.amount ?? "";
    message.proofs = object.proofs?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    id: Long.UZERO,
    index: Long.UZERO,
    amount: ""
  };
}

export const MsgClaimResponse = {
  encode(message: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.index.isZero()) {
      writer.uint32(16).uint64(message.index);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.index = (reader.uint64() as Long);
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.amount = object.amount ?? "";
    return message;
  }

};