/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { MediaType, PartyType, Uint128, Timestamp, Uint64, InstantiateMsg, ContributorMsg, Metadata, Trait, Coin, ExecuteMsg, QueryMsg, Addr, ConfigResponse, MaxPerAddressResponse } from "./LaunchpartyFixed.types";
export interface LaunchpartyFixedReadOnlyInterface {
  contractAddress: string;
  getConfig: () => Promise<ConfigResponse>;
  maxPerAddress: ({
    address
  }: {
    address: string;
  }) => Promise<MaxPerAddressResponse>;
}
export class LaunchpartyFixedQueryClient implements LaunchpartyFixedReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.getConfig = this.getConfig.bind(this);
    this.maxPerAddress = this.maxPerAddress.bind(this);
  }

  getConfig = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_config: {}
    });
  };
  maxPerAddress = async ({
    address
  }: {
    address: string;
  }): Promise<MaxPerAddressResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      max_per_address: {
        address
      }
    });
  };
}
export interface LaunchpartyFixedInterface extends LaunchpartyFixedReadOnlyInterface {
  contractAddress: string;
  sender: string;
  mint: ({
    amount,
    referral
  }: {
    amount: number;
    referral?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class LaunchpartyFixedClient extends LaunchpartyFixedQueryClient implements LaunchpartyFixedInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
  }

  mint = async ({
    amount,
    referral
  }: {
    amount: number;
    referral?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      mint: {
        amount,
        referral
      }
    }, fee, memo, funds);
  };
}