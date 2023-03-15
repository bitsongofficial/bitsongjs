import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface UpdateFeesProposal {
  title: string;
  description: string;
  creationFee?: Coin;
}
export interface UpdateFeesProposalSDKType {
  title: string;
  description: string;
  creation_fee?: CoinSDKType;
}
export interface UpdateFeesProposalWithDeposit {
  title: string;
  description: string;
  creationFee: string;
  deposit: string;
}
export interface UpdateFeesProposalWithDepositSDKType {
  title: string;
  description: string;
  creation_fee: string;
  deposit: string;
}

function createBaseUpdateFeesProposal(): UpdateFeesProposal {
  return {
    title: "",
    description: "",
    creationFee: undefined
  };
}

export const UpdateFeesProposal = {
  encode(message: UpdateFeesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.creationFee !== undefined) {
      Coin.encode(message.creationFee, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFeesProposal();

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
          message.creationFee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateFeesProposal>): UpdateFeesProposal {
    const message = createBaseUpdateFeesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
    return message;
  }

};

function createBaseUpdateFeesProposalWithDeposit(): UpdateFeesProposalWithDeposit {
  return {
    title: "",
    description: "",
    creationFee: "",
    deposit: ""
  };
}

export const UpdateFeesProposalWithDeposit = {
  encode(message: UpdateFeesProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.creationFee !== "") {
      writer.uint32(26).string(message.creationFee);
    }

    if (message.deposit !== "") {
      writer.uint32(58).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateFeesProposalWithDeposit();

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
          message.creationFee = reader.string();
          break;

        case 7:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateFeesProposalWithDeposit>): UpdateFeesProposalWithDeposit {
    const message = createBaseUpdateFeesProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.creationFee = object.creationFee ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  }

};