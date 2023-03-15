import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/bitsong.merkledrop.v1beta1.MsgCreate": {
        aminoType: string;
        toAmino: ({ owner, merkleRoot, startHeight, endHeight, coin }: MsgCreate) => AminoMsgCreate["value"];
        fromAmino: ({ owner, merkle_root, start_height, end_height, coin }: AminoMsgCreate["value"]) => MsgCreate;
    };
    "/bitsong.merkledrop.v1beta1.MsgClaim": {
        aminoType: string;
        toAmino: ({ sender, merkledropId, index, amount, proofs }: MsgClaim) => AminoMsgClaim["value"];
        fromAmino: ({ sender, merkledrop_id, index, amount, proofs }: AminoMsgClaim["value"]) => MsgClaim;
    };
};
