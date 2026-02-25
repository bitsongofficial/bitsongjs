import type { EndpointOrRpc, ISigningClient, StdFee } from "../types";
import {
  getBalance,
  getAllBalances,
  getSpendableBalances,
  getSpendableBalanceByDenom,
  getTotalSupply,
  getSupplyOf,
  getDenomsMetadata,
  getDenomMetadata,
  getDenomMetadataByQueryString,
  getDenomOwners,
  getDenomOwnersByQuery,
  getSendEnabled,
} from "@bitsongjs/telescope/cosmos/bank/v1beta1/query.rpc.func";
import {
  getParams,
} from "@bitsongjs/telescope/cosmos/bank/v1beta1/query.rpc.func";
import {
  send,
  multiSend,
  updateParams,
  setSendEnabled as _setSendEnabled,
} from "@bitsongjs/telescope/cosmos/bank/v1beta1/tx.rpc.func";

export function bankQuery(rpc: EndpointOrRpc) {
  return {
    getBalance: (request: Parameters<typeof getBalance>[1]) => getBalance(rpc, request),
    getAllBalances: (request: Parameters<typeof getAllBalances>[1]) => getAllBalances(rpc, request),
    getSpendableBalances: (request: Parameters<typeof getSpendableBalances>[1]) => getSpendableBalances(rpc, request),
    getSpendableBalanceByDenom: (request: Parameters<typeof getSpendableBalanceByDenom>[1]) => getSpendableBalanceByDenom(rpc, request),
    getTotalSupply: (request: Parameters<typeof getTotalSupply>[1]) => getTotalSupply(rpc, request),
    getSupplyOf: (request: Parameters<typeof getSupplyOf>[1]) => getSupplyOf(rpc, request),
    getParams: (request: Parameters<typeof getParams>[1]) => getParams(rpc, request),
    getDenomsMetadata: (request: Parameters<typeof getDenomsMetadata>[1]) => getDenomsMetadata(rpc, request),
    getDenomMetadata: (request: Parameters<typeof getDenomMetadata>[1]) => getDenomMetadata(rpc, request),
    getDenomMetadataByQueryString: (request: Parameters<typeof getDenomMetadataByQueryString>[1]) => getDenomMetadataByQueryString(rpc, request),
    getDenomOwners: (request: Parameters<typeof getDenomOwners>[1]) => getDenomOwners(rpc, request),
    getDenomOwnersByQuery: (request: Parameters<typeof getDenomOwnersByQuery>[1]) => getDenomOwnersByQuery(rpc, request),
    getSendEnabled: (request: Parameters<typeof getSendEnabled>[1]) => getSendEnabled(rpc, request),
  };
}

export function bankTx(client: ISigningClient, address: string) {
  return {
    send: (message: Parameters<typeof send>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      send(client, address, message, fee, memo),
    multiSend: (message: Parameters<typeof multiSend>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      multiSend(client, address, message, fee, memo),
    updateParams: (message: Parameters<typeof updateParams>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      updateParams(client, address, message, fee, memo),
    setSendEnabled: (message: Parameters<typeof _setSendEnabled>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      _setSendEnabled(client, address, message, fee, memo),
  };
}
