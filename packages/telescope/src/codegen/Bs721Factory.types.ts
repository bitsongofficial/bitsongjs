/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export interface InstantiateMsg {
  bs721_code_id: number;
  bs721_curve_code_id: number;
  bs721_launchparty_code_id: number;
  bs721_royalties_code_id: number;
  create_nft_sale_fee: Coin;
  owner: string;
  protocol_fee_bps: number;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  update_config: {
    bs721_code_id?: number | null;
    bs721_curve_code_id?: number | null;
    bs721_launchparty_code_id?: number | null;
    bs721_royalties_code_id?: number | null;
    create_nft_sale_fee?: Coin | null;
    owner?: string | null;
    protocol_fee_bps?: number | null;
  };
} | {
  create_launchaparty: MsgCreateLaunchparty;
} | {
  create_curve: MsgCreateCurve;
} | {
  create_royalties_group: {
    contributors: ContributorMsg[];
    denom: string;
  };
};
export type PartyType = {
  max_edition: number;
} | {
  duration: number;
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface MsgCreateLaunchparty {
  contributors: ContributorMsg[];
  max_per_address?: number | null;
  name: string;
  party_type: PartyType;
  payment_address: string;
  price: Coin;
  referral_fee_bps: number;
  seller_fee_bps: number;
  start_time: Timestamp;
  symbol: string;
  uri: string;
}
export interface ContributorMsg {
  address: string;
  role: string;
  shares: number;
}
export interface MsgCreateCurve {
  max_edition?: number | null;
  max_per_address?: number | null;
  name: string;
  payment_address: string;
  payment_denom: string;
  ratio: number;
  referral_fee_bps: number;
  seller_fee_bps: number;
  start_time: Timestamp;
  symbol: string;
  uri: string;
}
export type QueryMsg = {
  config: {};
};
export type Addr = string;
export interface Config {
  bs721_code_id: number;
  bs721_curve_code_id: number;
  bs721_launchparty_code_id: number;
  bs721_royalties_code_id: number;
  create_nft_sale_fee: Coin;
  owner: Addr;
  protocol_fee_bps: number;
}