/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  contributors: ContributorMsg[];
  denom: string;
}
export interface ContributorMsg {
  address: string;
  role: string;
  shares: number;
}
export type ExecuteMsg = {
  distribute: {};
} | {
  withdraw: {};
};
export type QueryMsg = {
  list_contributors: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  withdrawable_amount: {};
} | {
  distributable_amount: {};
};
export type Uint128 = string;
export type Decimal = string;
export interface ContributorListResponse {
  contributors: ContributorResponse[];
}
export interface ContributorResponse {
  address: string;
  initial_shares: number;
  percentage_shares: Decimal;
  role: string;
  withdrawable_royalties: Uint128;
}