import { describe, expect, it, vi } from "vitest";

vi.mock("@interchainjs/cosmos", () => ({
  CosmosClientFactory: {
    createQueryClient: vi.fn().mockResolvedValue({
      request: vi.fn(),
      getStatus: vi.fn(),
    }),
  },
}));

import { createRpcClient } from "../src/rpc";
import { CosmosClientFactory } from "@interchainjs/cosmos";

describe("createRpcClient", () => {
  it("accepts a string endpoint", async () => {
    const client = await createRpcClient("https://rpc.bitsong.io");
    expect(CosmosClientFactory.createQueryClient).toHaveBeenCalledWith(
      "https://rpc.bitsong.io",
      {},
    );
    expect(client).toBeDefined();
  });

  it("accepts options object", async () => {
    await createRpcClient({
      endpoint: "https://rpc.bitsong.io",
      timeout: 5000,
      headers: { "X-Custom": "value" },
    });
    expect(CosmosClientFactory.createQueryClient).toHaveBeenCalledWith(
      "https://rpc.bitsong.io",
      { timeout: 5000, headers: { "X-Custom": "value" } },
    );
  });

  it("accepts HttpEndpoint object", async () => {
    await createRpcClient({
      endpoint: { url: "https://rpc.bitsong.io", headers: { Auth: "token" } },
    });
    expect(CosmosClientFactory.createQueryClient).toHaveBeenCalledWith(
      "https://rpc.bitsong.io",
      { headers: { Auth: "token" } },
    );
  });
});
