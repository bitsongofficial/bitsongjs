import type { Client } from ".";
import { cosmos } from "@bitsongjs/telescope";
import type { BankMultiSendParams, BankSendParams, BankSetSendEnabledParams, BankUpdateParams } from "./types";
import type {
  QueryAllBalancesRequest,
  QueryAllBalancesResponse,
  QueryBalanceRequest,
  QueryBalanceResponse,
  QuerySpendableBalancesRequest,
  QuerySpendableBalancesResponse,
  QuerySpendableBalanceByDenomRequest,
  QuerySpendableBalanceByDenomResponse,
  QueryTotalSupplyRequest,
  QueryTotalSupplyResponse,
  QuerySupplyOfRequest,
  QuerySupplyOfResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryDenomMetadataByQueryStringRequest,
  QueryDenomMetadataByQueryStringResponse,
  QueryDenomMetadataRequest,
  QueryDenomMetadataResponse,
  QueryDenomsMetadataRequest,
  QueryDenomsMetadataResponse,
  QueryDenomOwnersRequest,
  QueryDenomOwnersResponse,
  QueryDenomOwnersByQueryRequest,
  QueryDenomOwnersByQueryResponse,
  QuerySendEnabledRequest,
  QuerySendEnabledResponse,
} from "@bitsongjs/telescope/cosmos/bank/v1beta1/query";

export class BankClient {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public async getAllBalances(req: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.allBalances(req);
  }

  public async getBalance(req: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.balance(req);
  }

  public async getSpendableBalances(req: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.spendableBalances(req);
  }

  public async getSpendableBalanceByDenom(req: QuerySpendableBalanceByDenomRequest): Promise<QuerySpendableBalanceByDenomResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.spendableBalanceByDenom(req);
  }

  public async getTotalSupply(req: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.totalSupply(req);
  }

  public async getSupplyOf(req: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.supplyOf(req);
  }

  public async getParams(req: QueryParamsRequest): Promise<QueryParamsResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.params(req);
  }

  public async getDenomMetadataByQueryString(req: QueryDenomMetadataByQueryStringRequest): Promise<QueryDenomMetadataByQueryStringResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.denomMetadataByQueryString(req);
  }

  public async getDenomMetadata(req: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.denomMetadata(req);
  }

  public async getDenomsMetadata(req: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.denomsMetadata(req);
  }

  public async getDenomOwners(req: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.denomOwners(req);
  }

  public async getDenomOwnersByQuery(req: QueryDenomOwnersByQueryRequest): Promise<QueryDenomOwnersByQueryResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.denomOwnersByQuery(req);
  }

  public async getSendEnabled(req: QuerySendEnabledRequest): Promise<QuerySendEnabledResponse> {
    return await this.client.rpcQueryClient.cosmos.bank.v1beta1.sendEnabled(req);
  }  

  public async send(params: BankSendParams) {
    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl
    const { 
      fromAddress = await this.client.getSenderAddress(),
      toAddress,
      amount
    } = params

    return await this.client.signAndBroadcast({ 
      msgs: [send({ fromAddress, toAddress, amount })],
      ...params
    })
  }

  public async multiSend(params: BankMultiSendParams) {
    const { multiSend } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl
    const { inputs, outputs } = params

    return await this.client.signAndBroadcast({
      msgs: [multiSend({ inputs, outputs })],
      ...params
    })
  }

  public async setSendEnabled(params: BankSetSendEnabledParams) {
    const { setSendEnabled } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl
    const { authority, sendEnabled, useDefaultFor } = params

    return await this.client.signAndBroadcast({
      msgs: [setSendEnabled({ authority, sendEnabled, useDefaultFor })],
      ...params
    })
  }

  public async updateParams(params: BankUpdateParams) {
    const { updateParams } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl
    const { authority, params: _params } = params

    return await this.client.signAndBroadcast({
      msgs: [updateParams({ authority, params: _params })],
      ...params
    })
  }
}