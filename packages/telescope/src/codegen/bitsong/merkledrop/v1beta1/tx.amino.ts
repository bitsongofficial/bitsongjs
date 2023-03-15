import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreate, MsgClaim } from "./tx";
export interface AminoMsgCreate extends AminoMsg {
  type: "/bitsong.merkledrop.v1beta1.MsgCreate";
  value: {
    owner: string;
    merkle_root: string;
    start_height: string;
    end_height: string;
    coin: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgClaim extends AminoMsg {
  type: "/bitsong.merkledrop.v1beta1.MsgClaim";
  value: {
    sender: string;
    merkledrop_id: string;
    index: string;
    amount: string;
    proofs: string[];
  };
}
export const AminoConverter = {
  "/bitsong.merkledrop.v1beta1.MsgCreate": {
    aminoType: "/bitsong.merkledrop.v1beta1.MsgCreate",
    toAmino: ({
      owner,
      merkleRoot,
      startHeight,
      endHeight,
      coin
    }: MsgCreate): AminoMsgCreate["value"] => {
      return {
        owner,
        merkle_root: merkleRoot,
        start_height: startHeight.toString(),
        end_height: endHeight.toString(),
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        }
      };
    },
    fromAmino: ({
      owner,
      merkle_root,
      start_height,
      end_height,
      coin
    }: AminoMsgCreate["value"]): MsgCreate => {
      return {
        owner,
        merkleRoot: merkle_root,
        startHeight: Long.fromString(start_height),
        endHeight: Long.fromString(end_height),
        coin: {
          denom: coin.denom,
          amount: coin.amount
        }
      };
    }
  },
  "/bitsong.merkledrop.v1beta1.MsgClaim": {
    aminoType: "/bitsong.merkledrop.v1beta1.MsgClaim",
    toAmino: ({
      sender,
      merkledropId,
      index,
      amount,
      proofs
    }: MsgClaim): AminoMsgClaim["value"] => {
      return {
        sender,
        merkledrop_id: merkledropId.toString(),
        index: index.toString(),
        amount,
        proofs
      };
    },
    fromAmino: ({
      sender,
      merkledrop_id,
      index,
      amount,
      proofs
    }: AminoMsgClaim["value"]): MsgClaim => {
      return {
        sender,
        merkledropId: Long.fromString(merkledrop_id),
        index: Long.fromString(index),
        amount,
        proofs
      };
    }
  }
};