import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        issue(value: MsgIssue): {
            typeUrl: string;
            value: Uint8Array;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: Uint8Array;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
        disableMint(value: MsgDisableMint): {
            typeUrl: string;
            value: Uint8Array;
        };
        setMinter(value: MsgSetMinter): {
            typeUrl: string;
            value: Uint8Array;
        };
        setAuthority(value: MsgSetAuthority): {
            typeUrl: string;
            value: Uint8Array;
        };
        setUri(value: MsgSetUri): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        issue(value: MsgIssue): {
            typeUrl: string;
            value: MsgIssue;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        disableMint(value: MsgDisableMint): {
            typeUrl: string;
            value: MsgDisableMint;
        };
        setMinter(value: MsgSetMinter): {
            typeUrl: string;
            value: MsgSetMinter;
        };
        setAuthority(value: MsgSetAuthority): {
            typeUrl: string;
            value: MsgSetAuthority;
        };
        setUri(value: MsgSetUri): {
            typeUrl: string;
            value: MsgSetUri;
        };
    };
    fromPartial: {
        issue(value: MsgIssue): {
            typeUrl: string;
            value: MsgIssue;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        disableMint(value: MsgDisableMint): {
            typeUrl: string;
            value: MsgDisableMint;
        };
        setMinter(value: MsgSetMinter): {
            typeUrl: string;
            value: MsgSetMinter;
        };
        setAuthority(value: MsgSetAuthority): {
            typeUrl: string;
            value: MsgSetAuthority;
        };
        setUri(value: MsgSetUri): {
            typeUrl: string;
            value: MsgSetUri;
        };
    };
};
