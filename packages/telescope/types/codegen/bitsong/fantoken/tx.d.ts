import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** MsgIssue defines a message for issuing a new fan token */
export interface MsgIssue {
    /** symbol which corresponds to the symbol of the fan token. It is a string and cannot change for the whole life of the fan token */
    symbol: string;
    /** name which corresponds to the name of the fan token. It is a string and cannot change for the whole life of the fan token */
    name: string;
    /** max_supply that represents the maximum number of possible mintable tokens. It is an integer number, expressed in micro unit 10^6 */
    maxSupply: string;
    /** authority which is who can set a new uri metadata */
    authority: string;
    /** minter who is who can mint new fantoken and disable the minter process, the minter key also pay the gas fee */
    minter: string;
    /** URI which is the current uri of the fan token. It is a string can change during the fan token lifecycle thanks to the MsgEdit */
    uri: string;
}
/** MsgIssue defines a message for issuing a new fan token */
export interface MsgIssueSDKType {
    /** symbol which corresponds to the symbol of the fan token. It is a string and cannot change for the whole life of the fan token */
    symbol: string;
    /** name which corresponds to the name of the fan token. It is a string and cannot change for the whole life of the fan token */
    name: string;
    /** max_supply that represents the maximum number of possible mintable tokens. It is an integer number, expressed in micro unit 10^6 */
    max_supply: string;
    /** authority which is who can set a new uri metadata */
    authority: string;
    /** minter who is who can mint new fantoken and disable the minter process, the minter key also pay the gas fee */
    minter: string;
    /** URI which is the current uri of the fan token. It is a string can change during the fan token lifecycle thanks to the MsgEdit */
    uri: string;
}
/** MsgIssueResponse defines the MsgIssue response type */
export interface MsgIssueResponse {
}
/** MsgIssueResponse defines the MsgIssue response type */
export interface MsgIssueResponseSDKType {
}
/** MsgDisableMint defines a message for disable the mint function */
export interface MsgDisableMint {
    denom: string;
    minter: string;
}
/** MsgDisableMint defines a message for disable the mint function */
export interface MsgDisableMintSDKType {
    denom: string;
    minter: string;
}
/** MsgDisableMintResponse defines the MsgDisableMint response type */
export interface MsgDisableMintResponse {
}
/** MsgDisableMintResponse defines the MsgDisableMint response type */
export interface MsgDisableMintResponseSDKType {
}
/** MsgMint defines a message for minting a new fan token */
export interface MsgMint {
    recipient: string;
    /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
    coin?: Coin;
    minter: string;
}
/** MsgMint defines a message for minting a new fan token */
export interface MsgMintSDKType {
    recipient: string;
    /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
    coin?: CoinSDKType;
    minter: string;
}
/** MsgMintResponse defines the MsgMint response type */
export interface MsgMintResponse {
}
/** MsgMintResponse defines the MsgMint response type */
export interface MsgMintResponseSDKType {
}
/** MsgBurn defines a message for burning some fan tokens */
export interface MsgBurn {
    /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
    coin?: Coin;
    sender: string;
}
/** MsgBurn defines a message for burning some fan tokens */
export interface MsgBurnSDKType {
    /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
    coin?: CoinSDKType;
    sender: string;
}
/** MsgBurnResponse defines the MsgBurn response type */
export interface MsgBurnResponse {
}
/** MsgBurnResponse defines the MsgBurn response type */
export interface MsgBurnResponseSDKType {
}
/** MsgSetMinter defines a message for changing the fan token minter address */
export interface MsgSetMinter {
    /** denom the fan token denom */
    denom: string;
    /** old_minter, the actual minter */
    oldMinter: string;
    /** new_minter, the new fan token minter */
    newMinter: string;
}
/** MsgSetMinter defines a message for changing the fan token minter address */
export interface MsgSetMinterSDKType {
    /** denom the fan token denom */
    denom: string;
    /** old_minter, the actual minter */
    old_minter: string;
    /** new_minter, the new fan token minter */
    new_minter: string;
}
/** MsgSetMinterResponse defines the MsgTransferAuthority response type */
export interface MsgSetMinterResponse {
}
/** MsgSetMinterResponse defines the MsgTransferAuthority response type */
export interface MsgSetMinterResponseSDKType {
}
/** MsgSetAuthority defines a message for changing the fan token minter address */
export interface MsgSetAuthority {
    /** denom the fan token denom */
    denom: string;
    /** old_authority, the actual metadata authority */
    oldAuthority: string;
    /** new_authority, the new fan token metadata authority */
    newAuthority: string;
}
/** MsgSetAuthority defines a message for changing the fan token minter address */
export interface MsgSetAuthoritySDKType {
    /** denom the fan token denom */
    denom: string;
    /** old_authority, the actual metadata authority */
    old_authority: string;
    /** new_authority, the new fan token metadata authority */
    new_authority: string;
}
/** MsgSetAuthorityResponse defines the MsgTransferAuthority response type */
export interface MsgSetAuthorityResponse {
}
/** MsgSetAuthorityResponse defines the MsgTransferAuthority response type */
export interface MsgSetAuthorityResponseSDKType {
}
export interface MsgSetUri {
    authority: string;
    denom: string;
    uri: string;
}
export interface MsgSetUriSDKType {
    authority: string;
    denom: string;
    uri: string;
}
export interface MsgSetUriResponse {
}
export interface MsgSetUriResponseSDKType {
}
export declare const MsgIssue: {
    encode(message: MsgIssue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue;
    fromPartial(object: DeepPartial<MsgIssue>): MsgIssue;
};
export declare const MsgIssueResponse: {
    encode(_: MsgIssueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueResponse;
    fromPartial(_: DeepPartial<MsgIssueResponse>): MsgIssueResponse;
};
export declare const MsgDisableMint: {
    encode(message: MsgDisableMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableMint;
    fromPartial(object: DeepPartial<MsgDisableMint>): MsgDisableMint;
};
export declare const MsgDisableMintResponse: {
    encode(_: MsgDisableMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableMintResponse;
    fromPartial(_: DeepPartial<MsgDisableMintResponse>): MsgDisableMintResponse;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromPartial(object: DeepPartial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse;
};
export declare const MsgBurn: {
    encode(message: MsgBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn;
    fromPartial(object: DeepPartial<MsgBurn>): MsgBurn;
};
export declare const MsgBurnResponse: {
    encode(_: MsgBurnResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse;
    fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse;
};
export declare const MsgSetMinter: {
    encode(message: MsgSetMinter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinter;
    fromPartial(object: DeepPartial<MsgSetMinter>): MsgSetMinter;
};
export declare const MsgSetMinterResponse: {
    encode(_: MsgSetMinterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinterResponse;
    fromPartial(_: DeepPartial<MsgSetMinterResponse>): MsgSetMinterResponse;
};
export declare const MsgSetAuthority: {
    encode(message: MsgSetAuthority, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAuthority;
    fromPartial(object: DeepPartial<MsgSetAuthority>): MsgSetAuthority;
};
export declare const MsgSetAuthorityResponse: {
    encode(_: MsgSetAuthorityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAuthorityResponse;
    fromPartial(_: DeepPartial<MsgSetAuthorityResponse>): MsgSetAuthorityResponse;
};
export declare const MsgSetUri: {
    encode(message: MsgSetUri, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUri;
    fromPartial(object: DeepPartial<MsgSetUri>): MsgSetUri;
};
export declare const MsgSetUriResponse: {
    encode(_: MsgSetUriResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriResponse;
    fromPartial(_: DeepPartial<MsgSetUriResponse>): MsgSetUriResponse;
};
