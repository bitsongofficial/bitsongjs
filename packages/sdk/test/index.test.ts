import { describe, expect, it } from "vitest";

describe("@bitsongjs/sdk exports", () => {
  it("exports chain presets and utilities (pure logic)", async () => {
    const { bitsongMainnet, bitsongTestnet, bitsongLocal, resolveChain, registerChain } =
      await import("../src/chains");
    expect(bitsongMainnet).toBeDefined();
    expect(bitsongTestnet).toBeDefined();
    expect(bitsongLocal).toBeDefined();
    expect(typeof resolveChain).toBe("function");
    expect(typeof registerChain).toBe("function");
  });

  it("exports error handling (pure logic)", async () => {
    const { CosmosErrorCode, TxError, isTxError, assertTxSuccess } =
      await import("../src/errors");
    expect(CosmosErrorCode).toBeDefined();
    expect(typeof TxError).toBe("function");
    expect(typeof isTxError).toBe("function");
    expect(typeof assertTxSuccess).toBe("function");
  });

  it("exports gas utilities (pure logic)", async () => {
    const { calculateFee, estimateGas, estimateFee } =
      await import("../src/gas");
    expect(typeof calculateFee).toBe("function");
    expect(typeof estimateGas).toBe("function");
    expect(typeof estimateFee).toBe("function");
  });
});
