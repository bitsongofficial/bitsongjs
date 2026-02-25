import { CosmosClientFactory } from "@interchainjs/cosmos";
import type { ICosmosEventClient, CreateEventClientOptions } from "./types";

export async function createEventClient(
  options: CreateEventClientOptions | string,
): Promise<ICosmosEventClient> {
  const opts = typeof options === "string" ? { endpoint: options } : options;

  return CosmosClientFactory.createEventClient(opts.endpoint, {
    reconnect: opts.reconnect,
  });
}
