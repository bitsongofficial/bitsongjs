/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export type MediaType = "image" | "audio" | "video";
export type Timestamp = Uint64;
export type Uint64 = string;
export interface InstantiateMsg {
    bs721_metadata_code_id: number;
    bs721_royalties_code_id: number;
    collection_cover_image?: string | null;
    collection_image: string;
    contributors: ContributorMsg[];
    max_edition?: number | null;
    max_per_address?: number | null;
    metadata: Metadata;
    payment_denom: string;
    ratio: number;
    referral_fee_bps: number;
    seller_fee_bps: number;
    start_time: Timestamp;
    symbol: string;
}
export interface ContributorMsg {
    address: string;
    role: string;
    shares: number;
}
export interface Metadata {
    animation_url?: string | null;
    attributes?: Trait[] | null;
    background_color?: string | null;
    description: string;
    external_url?: string | null;
    image?: string | null;
    image_data?: string | null;
    media_type?: MediaType | null;
    name: string;
}
export interface Trait {
    display_type?: string | null;
    trait_type: string;
    value: string;
}
export type ExecuteMsg = {
    mint: {
        amount: number;
        referral?: string | null;
    };
} | {
    burn: {
        referral?: string | null;
        token_ids: number[];
    };
};
export type QueryMsg = {
    get_config: {};
} | {
    max_per_address: {
        address: string;
    };
} | {
    buy_price: {
        amount: number;
    };
} | {
    sell_price: {
        amount: number;
    };
};
export type Uint128 = string;
export interface PriceResponse {
    base_price: Uint128;
    protocol_fee: Uint128;
    referral: Uint128;
    royalties: Uint128;
    total_price: Uint128;
}
export type Addr = string;
export interface ConfigResponse {
    bs721_metadata?: Addr | null;
    bs721_royalties?: Addr | null;
    creator: Addr;
    max_edition?: number | null;
    max_per_address?: number | null;
    metadata: Metadata;
    next_token_id: number;
    payment_denom: string;
    ratio: number;
    referral_fee_bps: number;
    seller_fee_bps: number;
    start_time: Timestamp;
    symbol: string;
}
export interface MaxPerAddressResponse {
    remaining?: number | null;
}
