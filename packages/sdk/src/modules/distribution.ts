import type { EndpointOrRpc, ISigningClient, StdFee } from "../types";
import {
  getParams,
  getValidatorDistributionInfo,
  getValidatorOutstandingRewards,
  getValidatorCommission,
  getValidatorSlashes,
  getDelegationRewards,
  getDelegationTotalRewards,
  getDelegatorValidators,
  getDelegatorWithdrawAddress,
  getCommunityPool,
} from "@bitsongjs/telescope/cosmos/distribution/v1beta1/query.rpc.func";
import {
  setWithdrawAddress,
  withdrawDelegatorReward,
  withdrawValidatorCommission,
  fundCommunityPool,
  updateParams,
  communityPoolSpend,
  depositValidatorRewardsPool,
} from "@bitsongjs/telescope/cosmos/distribution/v1beta1/tx.rpc.func";

export function distributionQuery(rpc: EndpointOrRpc) {
  return {
    getParams: (request: Parameters<typeof getParams>[1]) => getParams(rpc, request),
    getValidatorDistributionInfo: (request: Parameters<typeof getValidatorDistributionInfo>[1]) => getValidatorDistributionInfo(rpc, request),
    getValidatorOutstandingRewards: (request: Parameters<typeof getValidatorOutstandingRewards>[1]) => getValidatorOutstandingRewards(rpc, request),
    getValidatorCommission: (request: Parameters<typeof getValidatorCommission>[1]) => getValidatorCommission(rpc, request),
    getValidatorSlashes: (request: Parameters<typeof getValidatorSlashes>[1]) => getValidatorSlashes(rpc, request),
    getDelegationRewards: (request: Parameters<typeof getDelegationRewards>[1]) => getDelegationRewards(rpc, request),
    getDelegationTotalRewards: (request: Parameters<typeof getDelegationTotalRewards>[1]) => getDelegationTotalRewards(rpc, request),
    getDelegatorValidators: (request: Parameters<typeof getDelegatorValidators>[1]) => getDelegatorValidators(rpc, request),
    getDelegatorWithdrawAddress: (request: Parameters<typeof getDelegatorWithdrawAddress>[1]) => getDelegatorWithdrawAddress(rpc, request),
    getCommunityPool: (request: Parameters<typeof getCommunityPool>[1]) => getCommunityPool(rpc, request),
  };
}

export function distributionTx(client: ISigningClient, address: string) {
  return {
    setWithdrawAddress: (message: Parameters<typeof setWithdrawAddress>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      setWithdrawAddress(client, address, message, fee, memo),
    withdrawDelegatorReward: (message: Parameters<typeof withdrawDelegatorReward>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      withdrawDelegatorReward(client, address, message, fee, memo),
    withdrawValidatorCommission: (message: Parameters<typeof withdrawValidatorCommission>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      withdrawValidatorCommission(client, address, message, fee, memo),
    fundCommunityPool: (message: Parameters<typeof fundCommunityPool>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      fundCommunityPool(client, address, message, fee, memo),
    updateParams: (message: Parameters<typeof updateParams>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      updateParams(client, address, message, fee, memo),
    communityPoolSpend: (message: Parameters<typeof communityPoolSpend>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      communityPoolSpend(client, address, message, fee, memo),
    depositValidatorRewardsPool: (message: Parameters<typeof depositValidatorRewardsPool>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      depositValidatorRewardsPool(client, address, message, fee, memo),
  };
}
