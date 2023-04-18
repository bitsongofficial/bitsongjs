import { AminoMsg } from "@cosmjs/amino";
import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
export interface MsgIssueAminoType extends AminoMsg {
    type: "/bitsong.fantoken.v1beta1.MsgIssue";
    value: {
        symbol: string;
        name: string;
        max_supply: string;
        authority: string;
        minter: string;
        uri: string;
    };
}
export interface MsgMintAminoType extends AminoMsg {
    type: "/bitsong.fantoken.v1beta1.MsgMint";
    value: {
        recipient: string;
        coin: {
            denom: string;
            amount: string;
        };
        minter: string;
    };
}
export interface MsgBurnAminoType extends AminoMsg {
    type: "/bitsong.fantoken.v1beta1.MsgBurn";
    value: {
        coin: {
            denom: string;
            amount: string;
        };
        sender: string;
    };
}
export interface MsgDisableMintAminoType extends AminoMsg {
    type: "/bitsong.fantoken.v1beta1.MsgDisableMint";
    value: {
        denom: string;
        minter: string;
    };
}
export interface MsgSetMinterAminoType extends AminoMsg {
    type: "/bitsong.fantoken.v1beta1.MsgSetMinter";
    value: {
        denom: string;
        old_minter: string;
        new_minter: string;
    };
}
export interface MsgSetAuthorityAminoType extends AminoMsg {
    type: "/bitsong.fantoken.v1beta1.MsgSetAuthority";
    value: {
        denom: string;
        old_authority: string;
        new_authority: string;
    };
}
export interface MsgSetUriAminoType extends AminoMsg {
    type: "/bitsong.fantoken.v1beta1.MsgSetUri";
    value: {
        authority: string;
        denom: string;
        uri: string;
    };
}
export declare const AminoConverter: {
    "/bitsong.fantoken.v1beta1.MsgIssue": {
        aminoType: string;
        toAmino: ({ symbol, name, maxSupply, authority, minter, uri }: MsgIssue) => MsgIssueAminoType["value"];
        fromAmino: ({ symbol, name, max_supply, authority, minter, uri }: MsgIssueAminoType["value"]) => MsgIssue;
    };
    "/bitsong.fantoken.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ recipient, coin, minter }: MsgMint) => MsgMintAminoType["value"];
        fromAmino: ({ recipient, coin, minter }: MsgMintAminoType["value"]) => MsgMint;
    };
    "/bitsong.fantoken.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ coin, sender }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ coin, sender }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/bitsong.fantoken.v1beta1.MsgDisableMint": {
        aminoType: string;
        toAmino: ({ denom, minter }: MsgDisableMint) => MsgDisableMintAminoType["value"];
        fromAmino: ({ denom, minter }: MsgDisableMintAminoType["value"]) => MsgDisableMint;
    };
    "/bitsong.fantoken.v1beta1.MsgSetMinter": {
        aminoType: string;
        toAmino: ({ denom, oldMinter, newMinter }: MsgSetMinter) => MsgSetMinterAminoType["value"];
        fromAmino: ({ denom, old_minter, new_minter }: MsgSetMinterAminoType["value"]) => MsgSetMinter;
    };
    "/bitsong.fantoken.v1beta1.MsgSetAuthority": {
        aminoType: string;
        toAmino: ({ denom, oldAuthority, newAuthority }: MsgSetAuthority) => MsgSetAuthorityAminoType["value"];
        fromAmino: ({ denom, old_authority, new_authority }: MsgSetAuthorityAminoType["value"]) => MsgSetAuthority;
    };
    "/bitsong.fantoken.v1beta1.MsgSetUri": {
        aminoType: string;
        toAmino: ({ authority, denom, uri }: MsgSetUri) => MsgSetUriAminoType["value"];
        fromAmino: ({ authority, denom, uri }: MsgSetUriAminoType["value"]) => MsgSetUri;
    };
};
