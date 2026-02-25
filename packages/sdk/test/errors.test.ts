import { describe, expect, it } from "vitest";
import {
  CosmosErrorCode,
  TxError,
  isTxError,
  assertTxSuccess,
} from "../src/errors";

describe("CosmosErrorCode", () => {
  it("has well-known codes", () => {
    expect(CosmosErrorCode.ErrInsufficientFunds).toBe(5);
    expect(CosmosErrorCode.ErrOutOfGas).toBe(11);
    expect(CosmosErrorCode.ErrInvalidAddress).toBe(7);
    expect(CosmosErrorCode.ErrTxDecode).toBe(2);
    expect(CosmosErrorCode.ErrPanic).toBe(111222);
  });
});

describe("TxError", () => {
  it("creates error with code and message", () => {
    const err = new TxError({ code: 5, codespace: "sdk", rawLog: "not enough", txHash: "ABCD" });
    expect(err.code).toBe(5);
    expect(err.codespace).toBe("sdk");
    expect(err.rawLog).toBe("not enough");
    expect(err.txHash).toBe("ABCD");
    expect(err.name).toBe("TxError");
    expect(err.message).toContain("code 5");
  });

  it("uses custom message when provided", () => {
    const err = new TxError({ code: 11, message: "Custom msg" });
    expect(err.message).toBe("Custom msg");
  });

  it("defaults optional fields", () => {
    const err = new TxError({ code: 3 });
    expect(err.codespace).toBe("");
    expect(err.rawLog).toBe("");
    expect(err.txHash).toBe("");
  });
});

describe("isTxError", () => {
  it("returns true for TxError instances", () => {
    expect(isTxError(new TxError({ code: 5 }))).toBe(true);
  });

  it("returns false for regular errors", () => {
    expect(isTxError(new Error("nope"))).toBe(false);
  });

  it("returns false for non-errors", () => {
    expect(isTxError("string")).toBe(false);
    expect(isTxError(null)).toBe(false);
  });
});

describe("assertTxSuccess", () => {
  it("does not throw for code 0", () => {
    expect(() =>
      assertTxSuccess({
        transactionHash: "ABC",
        rawResponse: { code: 0 },
      }),
    ).not.toThrow();
  });

  it("throws TxError for non-zero code", () => {
    expect(() =>
      assertTxSuccess({
        transactionHash: "DEF",
        rawResponse: { code: 5, codespace: "sdk", rawLog: "insufficient funds" },
      }),
    ).toThrow(TxError);
  });

  it("does not throw when rawResponse has no code", () => {
    expect(() =>
      assertTxSuccess({ transactionHash: "GHI", rawResponse: {} }),
    ).not.toThrow();
  });

  it("does not throw when rawResponse is undefined", () => {
    expect(() =>
      assertTxSuccess({ transactionHash: "JKL" }),
    ).not.toThrow();
  });
});
