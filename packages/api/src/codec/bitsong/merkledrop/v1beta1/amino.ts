import { MicroDenom } from '../../../../constants';
import { AminoMsg } from '@cosmjs/amino';
import { MsgCreate, MsgClaim } from './tx';
import { AminoConverter } from '@cosmjs/stargate';
import Long from 'long';

export interface AminoMsgCreate extends AminoMsg {
  type: '/bitsong.merkledrop.v1beta1.MsgCreate';
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
  type: '/bitsong.merkledrop.v1beta1.MsgClaim';
  value: {
    sender: string;
    merkledrop_id: string;
    index: string;
    amount: string;
    proofs: string[];
  };
}

export const aminoConverter: { [key: string]: AminoConverter } = {
  '/bitsong.merkledrop.v1beta1.MsgCreate': {
    aminoType: 'go-bitsong/merkledrop/MsgCreate',
    toAmino: ({
      owner,
      merkleRoot,
      startHeight,
      endHeight,
      coin,
    }: MsgCreate): AminoMsgCreate['value'] => {
      return {
        owner,
        merkle_root: merkleRoot,
        start_height: startHeight.toString(),
        end_height: endHeight.toString(),
        coin: {
          denom: coin ? coin.denom : MicroDenom,
          amount: Long.fromString(coin ? coin.amount : '0').toString(),
        },
      };
    },
    fromAmino: ({
      owner,
      merkle_root,
      start_height,
      end_height,
      coin,
    }: AminoMsgCreate['value']): MsgCreate => {
      return {
        $type: 'bitsong.merkledrop.v1beta1.MsgCreate',
        owner,
        merkleRoot: merkle_root,
        startHeight: Long.fromString(start_height),
        endHeight: Long.fromString(end_height),
        coin: {
          $type: 'cosmos.base.v1beta1.Coin',
          denom: coin.denom,
          amount: coin.amount,
        },
      };
    },
  },
  '/bitsong.merkledrop.v1beta1.MsgClaim': {
    aminoType: 'go-bitsong/merkledrop/MsgClaim',
    toAmino: ({
      sender,
      merkledropId,
      index,
      amount,
      proofs,
    }: MsgClaim): AminoMsgClaim['value'] => {
      return {
        sender,
        merkledrop_id: merkledropId.toString(),
        index: index.toString(),
        amount,
        proofs,
      };
    },
    fromAmino: ({
      sender,
      merkledrop_id,
      index,
      amount,
      proofs,
    }: AminoMsgClaim['value']): MsgClaim => {
      return {
        $type: 'bitsong.merkledrop.v1beta1.MsgClaim',
        sender,
        merkledropId: Long.fromString(merkledrop_id),
        index: Long.fromString(index),
        amount,
        proofs,
      };
    },
  },
};
