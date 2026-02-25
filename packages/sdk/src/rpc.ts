import { CosmosClientFactory } from "@interchainjs/cosmos";
import type { ICosmosQueryClient, CreateRpcClientOptions } from "./types";

export async function createRpcClient(
  options: CreateRpcClientOptions | string,
): Promise<ICosmosQueryClient> {
  const opts = typeof options === "string" ? { endpoint: options } : options;

  const endpoint =
    typeof opts.endpoint === "string"
      ? opts.endpoint
      : opts.endpoint.url;

  const clientOptions: { timeout?: number; headers?: Record<string, string> } =
    {};
  if (opts.timeout) clientOptions.timeout = opts.timeout;

  if (typeof opts.endpoint !== "string" && opts.endpoint.headers) {
    clientOptions.headers = opts.endpoint.headers;
  }
  if (opts.headers) {
    clientOptions.headers = { ...clientOptions.headers, ...opts.headers };
  }

  return CosmosClientFactory.createQueryClient(endpoint, clientOptions);
}
