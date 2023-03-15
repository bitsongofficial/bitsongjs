import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventIssue {
    denom: string;
}
export interface EventIssueSDKType {
    denom: string;
}
export interface EventDisableMint {
    denom: string;
}
export interface EventDisableMintSDKType {
    denom: string;
}
export interface EventMint {
    recipient: string;
    coin: string;
}
export interface EventMintSDKType {
    recipient: string;
    coin: string;
}
export interface EventBurn {
    sender: string;
    coin: string;
}
export interface EventBurnSDKType {
    sender: string;
    coin: string;
}
export interface EventSetAuthority {
    denom: string;
    oldAuthority: string;
    newAuthority: string;
}
export interface EventSetAuthoritySDKType {
    denom: string;
    old_authority: string;
    new_authority: string;
}
export interface EventSetMinter {
    denom: string;
    oldMinter: string;
    newMinter: string;
}
export interface EventSetMinterSDKType {
    denom: string;
    old_minter: string;
    new_minter: string;
}
export interface EventSetUri {
    denom: string;
}
export interface EventSetUriSDKType {
    denom: string;
}
export declare const EventIssue: {
    encode(message: EventIssue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventIssue;
    fromPartial(object: DeepPartial<EventIssue>): EventIssue;
};
export declare const EventDisableMint: {
    encode(message: EventDisableMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDisableMint;
    fromPartial(object: DeepPartial<EventDisableMint>): EventDisableMint;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMint;
    fromPartial(object: DeepPartial<EventMint>): EventMint;
};
export declare const EventBurn: {
    encode(message: EventBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn;
    fromPartial(object: DeepPartial<EventBurn>): EventBurn;
};
export declare const EventSetAuthority: {
    encode(message: EventSetAuthority, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAuthority;
    fromPartial(object: DeepPartial<EventSetAuthority>): EventSetAuthority;
};
export declare const EventSetMinter: {
    encode(message: EventSetMinter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMinter;
    fromPartial(object: DeepPartial<EventSetMinter>): EventSetMinter;
};
export declare const EventSetUri: {
    encode(message: EventSetUri, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetUri;
    fromPartial(object: DeepPartial<EventSetUri>): EventSetUri;
};
