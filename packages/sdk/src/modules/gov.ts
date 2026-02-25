import type { EndpointOrRpc, ISigningClient, StdFee } from "../types";
import {
  getConstitution,
  getProposal,
  getProposals,
  getVote,
  getVotes,
  getParams,
  getDeposit,
  getDeposits,
  getTallyResult,
} from "@bitsongjs/telescope/cosmos/gov/v1/query.rpc.func";
import {
  submitProposal,
  execLegacyContent,
  vote,
  voteWeighted,
  deposit,
  updateParams,
  cancelProposal,
} from "@bitsongjs/telescope/cosmos/gov/v1/tx.rpc.func";

export function govQuery(rpc: EndpointOrRpc) {
  return {
    getConstitution: (request: Parameters<typeof getConstitution>[1]) => getConstitution(rpc, request),
    getProposal: (request: Parameters<typeof getProposal>[1]) => getProposal(rpc, request),
    getProposals: (request: Parameters<typeof getProposals>[1]) => getProposals(rpc, request),
    getVote: (request: Parameters<typeof getVote>[1]) => getVote(rpc, request),
    getVotes: (request: Parameters<typeof getVotes>[1]) => getVotes(rpc, request),
    getParams: (request: Parameters<typeof getParams>[1]) => getParams(rpc, request),
    getDeposit: (request: Parameters<typeof getDeposit>[1]) => getDeposit(rpc, request),
    getDeposits: (request: Parameters<typeof getDeposits>[1]) => getDeposits(rpc, request),
    getTallyResult: (request: Parameters<typeof getTallyResult>[1]) => getTallyResult(rpc, request),
  };
}

export function govTx(client: ISigningClient, address: string) {
  return {
    submitProposal: (message: Parameters<typeof submitProposal>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      submitProposal(client, address, message, fee, memo),
    execLegacyContent: (message: Parameters<typeof execLegacyContent>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      execLegacyContent(client, address, message, fee, memo),
    vote: (message: Parameters<typeof vote>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      vote(client, address, message, fee, memo),
    voteWeighted: (message: Parameters<typeof voteWeighted>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      voteWeighted(client, address, message, fee, memo),
    deposit: (message: Parameters<typeof deposit>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      deposit(client, address, message, fee, memo),
    updateParams: (message: Parameters<typeof updateParams>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      updateParams(client, address, message, fee, memo),
    cancelProposal: (message: Parameters<typeof cancelProposal>[2], fee: StdFee | "auto" = "auto", memo = "") =>
      cancelProposal(client, address, message, fee, memo),
  };
}
