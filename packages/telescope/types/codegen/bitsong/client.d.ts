import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const bitsongAminoConverters: {
    "/bitsong.fantoken.v1beta1.MsgIssue": {
        aminoType: string;
        toAmino: ({ symbol, name, maxSupply, authority, minter, uri }: import("./fantoken/v1beta1/tx").MsgIssue) => {
            symbol: string;
            name: string;
            max_supply: string;
            authority: string;
            minter: string;
            uri: string;
        };
        fromAmino: ({ symbol, name, max_supply, authority, minter, uri }: {
            symbol: string;
            name: string;
            max_supply: string;
            authority: string;
            minter: string;
            uri: string;
        }) => import("./fantoken/v1beta1/tx").MsgIssue;
    };
    "/bitsong.fantoken.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: ({ recipient, coin, minter }: import("./fantoken/v1beta1/tx").MsgMint) => {
            recipient: string;
            coin: {
                denom: string;
                amount: string;
            };
            minter: string;
        };
        fromAmino: ({ recipient, coin, minter }: {
            recipient: string;
            coin: {
                denom: string;
                amount: string;
            };
            minter: string;
        }) => import("./fantoken/v1beta1/tx").MsgMint;
    };
    "/bitsong.fantoken.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: ({ coin, sender }: import("./fantoken/v1beta1/tx").MsgBurn) => {
            coin: {
                denom: string;
                amount: string;
            };
            sender: string;
        };
        fromAmino: ({ coin, sender }: {
            coin: {
                denom: string;
                amount: string;
            };
            sender: string;
        }) => import("./fantoken/v1beta1/tx").MsgBurn;
    };
    "/bitsong.fantoken.v1beta1.MsgDisableMint": {
        aminoType: string;
        toAmino: ({ denom, minter }: import("./fantoken/v1beta1/tx").MsgDisableMint) => {
            denom: string;
            minter: string;
        };
        fromAmino: ({ denom, minter }: {
            denom: string;
            minter: string;
        }) => import("./fantoken/v1beta1/tx").MsgDisableMint;
    };
    "/bitsong.fantoken.v1beta1.MsgSetMinter": {
        aminoType: string;
        toAmino: ({ denom, oldMinter, newMinter }: import("./fantoken/v1beta1/tx").MsgSetMinter) => {
            denom: string;
            old_minter: string;
            new_minter: string;
        };
        fromAmino: ({ denom, old_minter, new_minter }: {
            denom: string;
            old_minter: string;
            new_minter: string;
        }) => import("./fantoken/v1beta1/tx").MsgSetMinter;
    };
    "/bitsong.fantoken.v1beta1.MsgSetAuthority": {
        aminoType: string;
        toAmino: ({ denom, oldAuthority, newAuthority }: import("./fantoken/v1beta1/tx").MsgSetAuthority) => {
            denom: string;
            old_authority: string;
            new_authority: string;
        };
        fromAmino: ({ denom, old_authority, new_authority }: {
            denom: string;
            old_authority: string;
            new_authority: string;
        }) => import("./fantoken/v1beta1/tx").MsgSetAuthority;
    };
    "/bitsong.fantoken.v1beta1.MsgSetUri": {
        aminoType: string;
        toAmino: ({ authority, denom, uri }: import("./fantoken/v1beta1/tx").MsgSetUri) => {
            authority: string;
            denom: string;
            uri: string;
        };
        fromAmino: ({ authority, denom, uri }: {
            authority: string;
            denom: string;
            uri: string;
        }) => import("./fantoken/v1beta1/tx").MsgSetUri;
    };
};
export declare const bitsongProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningBitsongClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningBitsongClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
