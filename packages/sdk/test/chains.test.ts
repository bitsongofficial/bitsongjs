import { describe, expect, it } from "vitest";
import {
  bitsongMainnet,
  bitsongTestnet,
  bitsongLocal,
  resolveChain,
  registerChain,
} from "../src/chains";

describe("chain presets", () => {
  it("bitsongMainnet has correct chainId", () => {
    expect(bitsongMainnet.chainId).toBe("bitsong-2b");
    expect(bitsongMainnet.prefix).toBe("bitsong");
    expect(bitsongMainnet.denom).toBe("ubtsg");
    expect(bitsongMainnet.coinType).toBe(639);
    expect(bitsongMainnet.hdPath).toBe("m/44'/639'/0'/0/0");
  });

  it("bitsongTestnet has correct chainId", () => {
    expect(bitsongTestnet.chainId).toBe("bobnet");
    expect(bitsongTestnet.prefix).toBe("bitsong");
  });

  it("bitsongLocal has localhost endpoints", () => {
    expect(bitsongLocal.endpoints.rpc).toContain("localhost");
    expect(bitsongLocal.endpoints.rest).toContain("localhost");
  });
});

describe("resolveChain", () => {
  it("resolves mainnet by name", () => {
    const chain = resolveChain("mainnet");
    expect(chain).toBe(bitsongMainnet);
  });

  it("resolves testnet by name", () => {
    const chain = resolveChain("testnet");
    expect(chain).toBe(bitsongTestnet);
  });

  it("resolves local by name", () => {
    const chain = resolveChain("local");
    expect(chain).toBe(bitsongLocal);
  });

  it("passes through ChainConfig objects", () => {
    const custom = {
      chainId: "custom-1",
      prefix: "custom",
      denom: "ucustom",
      gasPrice: "0.01ucustom",
      coinType: 118,
      hdPath: "m/44'/118'/0'/0/0",
      endpoints: { rpc: "http://custom:26657" },
    };
    expect(resolveChain(custom)).toBe(custom);
  });

  it("throws for unknown preset names", () => {
    expect(() => resolveChain("nonexistent")).toThrow(
      /Unknown chain preset "nonexistent"/,
    );
  });
});

describe("registerChain", () => {
  it("registers and resolves a custom chain", () => {
    const custom = {
      chainId: "mychain-1",
      prefix: "my",
      denom: "umy",
      gasPrice: "0.01umy",
      coinType: 118,
      hdPath: "m/44'/118'/0'/0/0",
      endpoints: { rpc: "http://mychain:26657" },
    };
    registerChain("mychain", custom);
    expect(resolveChain("mychain")).toBe(custom);
  });
});
