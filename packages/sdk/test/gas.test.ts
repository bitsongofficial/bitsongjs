import { describe, expect, it } from "vitest";
import { calculateFee } from "../src/gas";

describe("calculateFee", () => {
  it("calculates fee from gas limit and gas price", () => {
    const fee = calculateFee(200_000, "0.025ubtsg");
    expect(fee.gas).toBe("200000");
    expect(fee.amount).toEqual([{ denom: "ubtsg", amount: "5000" }]);
  });

  it("rounds up fractional fees", () => {
    const fee = calculateFee(100_001, "0.025ubtsg");
    // 100001 * 0.025 = 2500.025 → ceil = 2501
    expect(fee.amount[0]!.amount).toBe("2501");
  });

  it("handles zero gas", () => {
    const fee = calculateFee(0, "0.025ubtsg");
    expect(fee.gas).toBe("0");
    expect(fee.amount[0]!.amount).toBe("0");
  });

  it("throws for invalid gas price format", () => {
    expect(() => calculateFee(100_000, "invalid")).toThrow(
      /Invalid gas price format/,
    );
  });

  it("handles different denoms", () => {
    const fee = calculateFee(100_000, "0.01uatom");
    expect(fee.amount[0]!.denom).toBe("uatom");
    expect(fee.amount[0]!.amount).toBe("1000");
  });
});
