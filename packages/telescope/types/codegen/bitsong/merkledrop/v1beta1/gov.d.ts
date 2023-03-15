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
export declare const UpdateFeesProposal: {
    encode(message: UpdateFeesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposal;
    fromPartial(object: DeepPartial<UpdateFeesProposal>): UpdateFeesProposal;
};
export declare const UpdateFeesProposalWithDeposit: {
    encode(message: UpdateFeesProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFeesProposalWithDeposit;
    fromPartial(object: DeepPartial<UpdateFeesProposalWithDeposit>): UpdateFeesProposalWithDeposit;
};
