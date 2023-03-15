import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface Merkledrop {
  /** merkledrop id */
  id: Long;
  /** merkle_root of the merkledrop */

  merkleRoot: string;
  /** merkledrop start height */

  startHeight: Long;
  /** merkledrop end height */

  endHeight: Long;
  /** denom to distribuite */

  denom: string;
  /** amount to distribuite */

  amount: string;
  /** claimed amount */

  claimed: string;
  /** merkledrop's owner */

  owner: string;
}
export interface MerkledropSDKType {
  /** merkledrop id */
  id: Long;
  /** merkle_root of the merkledrop */

  merkle_root: string;
  /** merkledrop start height */

  start_height: Long;
  /** merkledrop end height */

  end_height: Long;
  /** denom to distribuite */

  denom: string;
  /** amount to distribuite */

  amount: string;
  /** claimed amount */

  claimed: string;
  /** merkledrop's owner */

  owner: string;
}

function createBaseMerkledrop(): Merkledrop {
  return {
    id: Long.UZERO,
    merkleRoot: "",
    startHeight: Long.ZERO,
    endHeight: Long.ZERO,
    denom: "",
    amount: "",
    claimed: "",
    owner: ""
  };
}

export const Merkledrop = {
  encode(message: Merkledrop, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
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

    if (message.denom !== "") {
      writer.uint32(42).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }

    if (message.claimed !== "") {
      writer.uint32(58).string(message.claimed);
    }

    if (message.owner !== "") {
      writer.uint32(66).string(message.owner);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Merkledrop {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkledrop();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
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
          message.denom = reader.string();
          break;

        case 6:
          message.amount = reader.string();
          break;

        case 7:
          message.claimed = reader.string();
          break;

        case 8:
          message.owner = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Merkledrop>): Merkledrop {
    const message = createBaseMerkledrop();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.merkleRoot = object.merkleRoot ?? "";
    message.startHeight = object.startHeight !== undefined && object.startHeight !== null ? Long.fromValue(object.startHeight) : Long.ZERO;
    message.endHeight = object.endHeight !== undefined && object.endHeight !== null ? Long.fromValue(object.endHeight) : Long.ZERO;
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.claimed = object.claimed ?? "";
    message.owner = object.owner ?? "";
    return message;
  }

};