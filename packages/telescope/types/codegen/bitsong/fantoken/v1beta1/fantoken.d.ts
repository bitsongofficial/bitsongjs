import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Metadata {
    /** name defines the name of the fantoken (eg: Kitty Punk) */
    name: string;
    /** symbol is the token symbol usually shown on exchanges (eg: KITTY) */
    symbol: string;
    /**
     * URI to a document (on or off-chain) that contains additional
     * information.Optional.
     */
    uri: string;
    /** sdk.AccAddress allowed to set a new uri */
    authority: string;
}
export interface MetadataSDKType {
    name: string;
    symbol: string;
    uri: string;
    authority: string;
}
/** FanToken defines a standard for the fungible token */
export interface FanToken {
    /** denom represents the string name of the given denom unit (e.g ft<hash>). */
    denom: string;
    maxSupply: string;
    /** sdk.AccAddress allowed to mint new fantoken */
    minter: string;
    metaData?: Metadata;
}
/** FanToken defines a standard for the fungible token */
export interface FanTokenSDKType {
    denom: string;
    max_supply: string;
    minter: string;
    meta_data?: MetadataSDKType;
}
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromPartial(object: DeepPartial<Metadata>): Metadata;
};
export declare const FanToken: {
    encode(message: FanToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FanToken;
    fromPartial(object: DeepPartial<FanToken>): FanToken;
};
