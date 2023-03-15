import { AminoMsg } from "@cosmjs/amino";
import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
export interface AminoMsgIssue extends AminoMsg {
    type: "/bitsong.fantoken.MsgIssue";
    value: {
        symbol: string;
        name: string;
        max_supply: string;
        authority: string;
        minter: string;
        uri: string;
    };
}
export interface AminoMsgMint extends AminoMsg {
    type: "/bitsong.fantoken.MsgMint";
    value: {
        recipient: string;
        coin: {
            denom: string;
            amount: string;
        };
        minter: string;
    };
}
export interface AminoMsgBurn extends AminoMsg {
    type: "/bitsong.fantoken.MsgBurn";
    value: {
        coin: {
            denom: string;
            amount: string;
        };
        sender: string;
    };
}
export interface AminoMsgDisableMint extends AminoMsg {
    type: "/bitsong.fantoken.MsgDisableMint";
    value: {
        denom: string;
        minter: string;
    };
}
export interface AminoMsgSetMinter extends AminoMsg {
    type: "/bitsong.fantoken.MsgSetMinter";
    value: {
        denom: string;
        old_minter: string;
        new_minter: string;
    };
}
export interface AminoMsgSetAuthority extends AminoMsg {
    type: "/bitsong.fantoken.MsgSetAuthority";
    value: {
        denom: string;
        old_authority: string;
        new_authority: string;
    };
}
export interface AminoMsgSetUri extends AminoMsg {
    type: "/bitsong.fantoken.MsgSetUri";
    value: {
        authority: string;
        denom: string;
        uri: string;
    };
}
export declare const AminoConverter: {
    "/bitsong.fantoken.MsgIssue": {
        aminoType: string;
        toAmino: ({ symbol, name, maxSupply, authority, minter, uri }: MsgIssue) => AminoMsgIssue["value"];
        fromAmino: ({ symbol, name, max_supply, authority, minter, uri }: AminoMsgIssue["value"]) => MsgIssue;
    };
    "/bitsong.fantoken.MsgMint": {
        aminoType: string;
        toAmino: ({ recipient, coin, minter }: MsgMint) => AminoMsgMint["value"];
        fromAmino: ({ recipient, coin, minter }: AminoMsgMint["value"]) => MsgMint;
    };
    "/bitsong.fantoken.MsgBurn": {
        aminoType: string;
        toAmino: ({ coin, sender }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ coin, sender }: AminoMsgBurn["value"]) => MsgBurn;
    };
    "/bitsong.fantoken.MsgDisableMint": {
        aminoType: string;
        toAmino: ({ denom, minter }: MsgDisableMint) => AminoMsgDisableMint["value"];
        fromAmino: ({ denom, minter }: AminoMsgDisableMint["value"]) => MsgDisableMint;
    };
    "/bitsong.fantoken.MsgSetMinter": {
        aminoType: string;
        toAmino: ({ denom, oldMinter, newMinter }: MsgSetMinter) => AminoMsgSetMinter["value"];
        fromAmino: ({ denom, old_minter, new_minter }: AminoMsgSetMinter["value"]) => MsgSetMinter;
    };
    "/bitsong.fantoken.MsgSetAuthority": {
        aminoType: string;
        toAmino: ({ denom, oldAuthority, newAuthority }: MsgSetAuthority) => AminoMsgSetAuthority["value"];
        fromAmino: ({ denom, old_authority, new_authority }: AminoMsgSetAuthority["value"]) => MsgSetAuthority;
    };
    "/bitsong.fantoken.MsgSetUri": {
        aminoType: string;
        toAmino: ({ authority, denom, uri }: MsgSetUri) => AminoMsgSetUri["value"];
        fromAmino: ({ authority, denom, uri }: AminoMsgSetUri["value"]) => MsgSetUri;
    };
};
