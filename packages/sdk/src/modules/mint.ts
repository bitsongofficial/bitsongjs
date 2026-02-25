import type { EndpointOrRpc } from "../types";
import {
  getParams,
  getInflation,
  getAnnualProvisions,
} from "@bitsongjs/telescope/cosmos/mint/v1beta1/query.rpc.func";

export function mintQuery(rpc: EndpointOrRpc) {
  return {
    getParams: (request: Parameters<typeof getParams>[1]) => getParams(rpc, request),
    getInflation: (request: Parameters<typeof getInflation>[1]) => getInflation(rpc, request),
    getAnnualProvisions: (request: Parameters<typeof getAnnualProvisions>[1]) => getAnnualProvisions(rpc, request),
  };
}
