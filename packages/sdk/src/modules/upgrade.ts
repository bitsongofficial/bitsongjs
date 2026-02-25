import type { EndpointOrRpc, ISigningClient, StdFee } from "../types";
import {
  getCurrentPlan,
  getAppliedPlan,
  getUpgradedConsensusState,
  getModuleVersions,
  getAuthority,
} from "@bitsongjs/telescope/cosmos/upgrade/v1beta1/query.rpc.func";
import {
  softwareUpgrade,
  cancelUpgrade,
} from "@bitsongjs/telescope/cosmos/upgrade/v1beta1/tx.rpc.func";

export function upgradeQuery(rpc: EndpointOrRpc) {
  return {
    getCurrentPlan: (request: Parameters<typeof getCurrentPlan>[1]) => getCurrentPlan(rpc, request),
    getAppliedPlan: (request: Parameters<typeof getAppliedPlan>[1]) => getAppliedPlan(rpc, request),
    getUpgradedConsensusState: (request: Parameters<typeof getUpgradedConsensusState>[1]) => getUpgradedConsensusState(rpc, request),
    getModuleVersions: (request: Parameters<typeof getModuleVersions>[1]) => getModuleVersions(rpc, request),
    getAuthority: (request: Parameters<typeof getAuthority>[1]) => getAuthority(rpc, request),
  };
}

export function upgradeTx(client: ISigningClient, address: string) {
  return {
    softwareUpgrade: (message: Parameters<typeof softwareUpgrade>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      softwareUpgrade(client, address, message, fee, memo),
    cancelUpgrade: (message: Parameters<typeof cancelUpgrade>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      cancelUpgrade(client, address, message, fee, memo),
  };
}
