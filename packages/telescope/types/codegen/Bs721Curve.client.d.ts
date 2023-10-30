/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { PriceResponse, ConfigResponse, MaxPerAddressResponse } from "./Bs721Curve.types";
export interface Bs721CurveReadOnlyInterface {
    contractAddress: string;
    getConfig: () => Promise<ConfigResponse>;
    maxPerAddress: ({ address }: {
        address: string;
    }) => Promise<MaxPerAddressResponse>;
    buyPrice: ({ amount }: {
        amount: number;
    }) => Promise<PriceResponse>;
    sellPrice: ({ amount }: {
        amount: number;
    }) => Promise<PriceResponse>;
}
export declare class Bs721CurveQueryClient implements Bs721CurveReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    getConfig: () => Promise<ConfigResponse>;
    maxPerAddress: ({ address }: {
        address: string;
    }) => Promise<MaxPerAddressResponse>;
    buyPrice: ({ amount }: {
        amount: number;
    }) => Promise<PriceResponse>;
    sellPrice: ({ amount }: {
        amount: number;
    }) => Promise<PriceResponse>;
}
export interface Bs721CurveInterface extends Bs721CurveReadOnlyInterface {
    contractAddress: string;
    sender: string;
    mint: ({ amount, referral }: {
        amount: number;
        referral?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ referral, tokenIds }: {
        referral?: string;
        tokenIds: number[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class Bs721CurveClient extends Bs721CurveQueryClient implements Bs721CurveInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    mint: ({ amount, referral }: {
        amount: number;
        referral?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    burn: ({ referral, tokenIds }: {
        referral?: string;
        tokenIds: number[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
