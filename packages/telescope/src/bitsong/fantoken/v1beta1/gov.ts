import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * @name UpdateFeesProposal
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.UpdateFeesProposal
 */
export interface UpdateFeesProposal {
  title: string;
  description: string;
  issueFee: Coin;
  mintFee: Coin;
  burnFee: Coin;
}
export interface UpdateFeesProposalProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.UpdateFeesProposal";
  value: Uint8Array;
}
/**
 * @name UpdateFeesProposalAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.UpdateFeesProposal
 */
export interface UpdateFeesProposalAmino {
  title: string;
  description: string;
  issue_fee: CoinAmino;
  mint_fee: CoinAmino;
  burn_fee: CoinAmino;
}
export interface UpdateFeesProposalAminoMsg {
  type: "/bitsong.fantoken.v1beta1.UpdateFeesProposal";
  value: UpdateFeesProposalAmino;
}
/**
 * @name UpdateFeesProposalWithDeposit
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.UpdateFeesProposalWithDeposit
 */
export interface UpdateFeesProposalWithDeposit {
  title: string;
  description: string;
  issueFee: string;
  mintFee: string;
  burnFee: string;
  deposit: string;
}
export interface UpdateFeesProposalWithDepositProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.UpdateFeesProposalWithDeposit";
  value: Uint8Array;
}
/**
 * @name UpdateFeesProposalWithDepositAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.UpdateFeesProposalWithDeposit
 */
export interface UpdateFeesProposalWithDepositAmino {
  title: string;
  description: string;
  issue_fee: string;
  mint_fee: string;
  burn_fee: string;
  deposit: string;
}
export interface UpdateFeesProposalWithDepositAminoMsg {
  type: "/bitsong.fantoken.v1beta1.UpdateFeesProposalWithDeposit";
  value: UpdateFeesProposalWithDepositAmino;
}
function createBaseUpdateFeesProposal(): UpdateFeesProposal {
  return {
    title: "",
    description: "",
    issueFee: Coin.fromPartial({}),
    mintFee: Coin.fromPartial({}),
    burnFee: Coin.fromPartial({})
  };
}
/**
 * @name UpdateFeesProposal
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.UpdateFeesProposal
 */
export const UpdateFeesProposal = {
  typeUrl: "/bitsong.fantoken.v1beta1.UpdateFeesProposal",
  is(o: any): o is UpdateFeesProposal {
    return o && (o.$typeUrl === UpdateFeesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Coin.is(o.issueFee) && Coin.is(o.mintFee) && Coin.is(o.burnFee));
  },
  isAmino(o: any): o is UpdateFeesProposalAmino {
    return o && (o.$typeUrl === UpdateFeesProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Coin.isAmino(o.issue_fee) && Coin.isAmino(o.mint_fee) && Coin.isAmino(o.burn_fee));
  },
  encode(message: UpdateFeesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateFeesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: UpdateFeesProposalAmino): UpdateFeesProposal {
    const message = createBaseUpdateFeesProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.issue_fee !== undefined && object.issue_fee !== null) {
      message.issueFee = Coin.fromAmino(object.issue_fee);
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mintFee = Coin.fromAmino(object.mint_fee);
    }
    if (object.burn_fee !== undefined && object.burn_fee !== null) {
      message.burnFee = Coin.fromAmino(object.burn_fee);
    }
    return message;
  },
  toAmino(message: UpdateFeesProposal): UpdateFeesProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.issue_fee = message.issueFee ? Coin.toAmino(message.issueFee) : undefined;
    obj.mint_fee = message.mintFee ? Coin.toAmino(message.mintFee) : undefined;
    obj.burn_fee = message.burnFee ? Coin.toAmino(message.burnFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateFeesProposalAminoMsg): UpdateFeesProposal {
    return UpdateFeesProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateFeesProposalProtoMsg): UpdateFeesProposal {
    return UpdateFeesProposal.decode(message.value);
  },
  toProto(message: UpdateFeesProposal): Uint8Array {
    return UpdateFeesProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateFeesProposal): UpdateFeesProposalProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.UpdateFeesProposal",
      value: UpdateFeesProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(UpdateFeesProposal.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
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
/**
 * @name UpdateFeesProposalWithDeposit
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.UpdateFeesProposalWithDeposit
 */
export const UpdateFeesProposalWithDeposit = {
  typeUrl: "/bitsong.fantoken.v1beta1.UpdateFeesProposalWithDeposit",
  is(o: any): o is UpdateFeesProposalWithDeposit {
    return o && (o.$typeUrl === UpdateFeesProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.issueFee === "string" && typeof o.mintFee === "string" && typeof o.burnFee === "string" && typeof o.deposit === "string");
  },
  isAmino(o: any): o is UpdateFeesProposalWithDepositAmino {
    return o && (o.$typeUrl === UpdateFeesProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.issue_fee === "string" && typeof o.mint_fee === "string" && typeof o.burn_fee === "string" && typeof o.deposit === "string");
  },
  encode(message: UpdateFeesProposalWithDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateFeesProposalWithDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: UpdateFeesProposalWithDepositAmino): UpdateFeesProposalWithDeposit {
    const message = createBaseUpdateFeesProposalWithDeposit();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.issue_fee !== undefined && object.issue_fee !== null) {
      message.issueFee = object.issue_fee;
    }
    if (object.mint_fee !== undefined && object.mint_fee !== null) {
      message.mintFee = object.mint_fee;
    }
    if (object.burn_fee !== undefined && object.burn_fee !== null) {
      message.burnFee = object.burn_fee;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    return message;
  },
  toAmino(message: UpdateFeesProposalWithDeposit): UpdateFeesProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.issue_fee = message.issueFee === "" ? undefined : message.issueFee;
    obj.mint_fee = message.mintFee === "" ? undefined : message.mintFee;
    obj.burn_fee = message.burnFee === "" ? undefined : message.burnFee;
    obj.deposit = message.deposit === "" ? undefined : message.deposit;
    return obj;
  },
  fromAminoMsg(object: UpdateFeesProposalWithDepositAminoMsg): UpdateFeesProposalWithDeposit {
    return UpdateFeesProposalWithDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateFeesProposalWithDepositProtoMsg): UpdateFeesProposalWithDeposit {
    return UpdateFeesProposalWithDeposit.decode(message.value);
  },
  toProto(message: UpdateFeesProposalWithDeposit): Uint8Array {
    return UpdateFeesProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: UpdateFeesProposalWithDeposit): UpdateFeesProposalWithDepositProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.UpdateFeesProposalWithDeposit",
      value: UpdateFeesProposalWithDeposit.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};