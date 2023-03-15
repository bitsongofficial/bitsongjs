import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface UpdateFeesProposal {
  title: string;
  description: string;
  issueFee?: Coin;
  mintFee?: Coin;
  burnFee?: Coin;
}
export interface UpdateFeesProposalSDKType {
  title: string;
  description: string;
  issue_fee?: CoinSDKType;
  mint_fee?: CoinSDKType;
  burn_fee?: CoinSDKType;
}
export interface UpdateFeesProposalWithDeposit {
  title: string;
  description: string;
  issueFee: string;
  mintFee: string;
  burnFee: string;
  deposit: string;
}
export interface UpdateFeesProposalWithDepositSDKType {
  title: string;
  description: string;
  issue_fee: string;
  mint_fee: string;
  burn_fee: string;
  deposit: string;
}

function createBaseUpdateFeesProposal(): UpdateFeesProposal {
  return {
    title: "",
    description: "",
    issueFee: undefined,
    mintFee: undefined,
    burnFee: undefined
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

    if (message.issueFee !== undefined) {
      Coin.encode(message.issueFee, writer.uint32(26).fork()).ldelim();
    }

    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(34).fork()).ldelim();
    }

    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(42).fork()).ldelim();
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
          message.issueFee = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;

        case 5:
          message.burnFee = Coin.decode(reader, reader.uint32());
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
    message.issueFee = object.issueFee !== undefined && object.issueFee !== null ? Coin.fromPartial(object.issueFee) : undefined;
    message.mintFee = object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    message.burnFee = object.burnFee !== undefined && object.burnFee !== null ? Coin.fromPartial(object.burnFee) : undefined;
    return message;
  }

};

function createBaseUpdateFeesProposalWithDeposit(): UpdateFeesProposalWithDeposit {
  return {
    title: "",
    description: "",
    issueFee: "",
    mintFee: "",
    burnFee: "",
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

    if (message.issueFee !== "") {
      writer.uint32(26).string(message.issueFee);
    }

    if (message.mintFee !== "") {
      writer.uint32(34).string(message.mintFee);
    }

    if (message.burnFee !== "") {
      writer.uint32(42).string(message.burnFee);
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
          message.issueFee = reader.string();
          break;

        case 4:
          message.mintFee = reader.string();
          break;

        case 5:
          message.burnFee = reader.string();
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
    message.issueFee = object.issueFee ?? "";
    message.mintFee = object.mintFee ?? "";
    message.burnFee = object.burnFee ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  }

};