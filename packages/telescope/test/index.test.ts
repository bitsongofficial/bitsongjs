import { describe, expect, it } from "vitest";

describe("@bitsongjs/telescope", () => {
  describe("bitsong fantoken", () => {
    it("exports MsgIssue with encode/decode/fromPartial", async () => {
      const mod = await import("../src/bitsong/fantoken/v1beta1/tx.ts");
      expect(mod.MsgIssue).toBeDefined();
      expect(mod.MsgIssue.encode).toBeTypeOf("function");
      expect(mod.MsgIssue.decode).toBeTypeOf("function");
      expect(mod.MsgIssue.fromPartial).toBeTypeOf("function");
    });

    it("exports MsgIssue with amino converters", async () => {
      const mod = await import("../src/bitsong/fantoken/v1beta1/tx.ts");
      expect(mod.MsgIssue.toAmino).toBeTypeOf("function");
      expect(mod.MsgIssue.fromAmino).toBeTypeOf("function");
    });

    it("exports fantoken types", async () => {
      const mod = await import(
        "../src/bitsong/fantoken/v1beta1/fantoken.ts"
      );
      expect(mod.FanToken).toBeDefined();
      expect(mod.FanToken.encode).toBeTypeOf("function");
    });
  });

  describe("bitsong cadence", () => {
    it("exports cadence types", async () => {
      const mod = await import("../src/bitsong/cadence/v1/cadence.ts");
      expect(mod).toBeDefined();
    });
  });

  describe("bitsong smartaccount", () => {
    it("exports smartaccount types", async () => {
      const mod = await import(
        "../src/bitsong/smartaccount/v1beta1/models.ts"
      );
      expect(mod).toBeDefined();
    });
  });

  describe("cosmos base types", () => {
    it("exports Coin with encode/decode", async () => {
      const mod = await import("../src/cosmos/base/v1beta1/coin.ts");
      expect(mod.Coin).toBeDefined();
      expect(mod.Coin.encode).toBeTypeOf("function");
      expect(mod.Coin.decode).toBeTypeOf("function");
      expect(mod.Coin.fromPartial).toBeTypeOf("function");
    });
  });

  describe("cosmos bank", () => {
    it("exports MsgSend", async () => {
      const mod = await import("../src/cosmos/bank/v1beta1/tx.ts");
      expect(mod.MsgSend).toBeDefined();
      expect(mod.MsgSend.encode).toBeTypeOf("function");
      expect(mod.MsgSend.decode).toBeTypeOf("function");
    });
  });

  describe("ibc transfer", () => {
    it("exports MsgTransfer", async () => {
      const mod = await import(
        "../src/ibc/applications/transfer/v1/tx.ts"
      );
      expect(mod.MsgTransfer).toBeDefined();
      expect(mod.MsgTransfer.encode).toBeTypeOf("function");
    });
  });

  describe("cosmwasm wasm", () => {
    it("exports MsgStoreCode with encode/decode/fromPartial", async () => {
      const mod = await import("../src/cosmwasm/wasm/v1/tx.ts");
      expect(mod.MsgStoreCode).toBeDefined();
      expect(mod.MsgStoreCode.encode).toBeTypeOf("function");
      expect(mod.MsgStoreCode.decode).toBeTypeOf("function");
      expect(mod.MsgStoreCode.fromPartial).toBeTypeOf("function");
    });

    it("exports MsgExecuteContract", async () => {
      const mod = await import("../src/cosmwasm/wasm/v1/tx.ts");
      expect(mod.MsgExecuteContract).toBeDefined();
      expect(mod.MsgExecuteContract.encode).toBeTypeOf("function");
      expect(mod.MsgExecuteContract.decode).toBeTypeOf("function");
    });
  });

  describe("hyperlane core", () => {
    it("exports hyperlane core types", async () => {
      const mod = await import("../src/hyperlane/core/v1/tx.ts");
      expect(mod).toBeDefined();
    });
  });

  describe("hyperlane warp", () => {
    it("exports hyperlane warp types", async () => {
      const mod = await import("../src/hyperlane/warp/v1/tx.ts");
      expect(mod).toBeDefined();
    });
  });
});
