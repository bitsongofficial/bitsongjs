import { describe, expect, it, vi } from "vitest";

const { mockGetBalance, mockGetAllBalances, mockSend, mockMultiSend } = vi.hoisted(() => ({
  mockGetBalance: vi.fn().mockResolvedValue({ balance: { denom: "ubtsg", amount: "1000" } }),
  mockGetAllBalances: vi.fn().mockResolvedValue({ balances: [] }),
  mockSend: vi.fn().mockResolvedValue({ transactionHash: "ABC" }),
  mockMultiSend: vi.fn().mockResolvedValue({ transactionHash: "DEF" }),
}));

vi.mock("@bitsongjs/telescope/cosmos/bank/v1beta1/query.rpc.func", () => ({
  getBalance: mockGetBalance,
  getAllBalances: mockGetAllBalances,
  getSpendableBalances: vi.fn(),
  getSpendableBalanceByDenom: vi.fn(),
  getTotalSupply: vi.fn(),
  getSupplyOf: vi.fn(),
  getParams: vi.fn(),
  getDenomsMetadata: vi.fn(),
  getDenomMetadata: vi.fn(),
  getDenomMetadataByQueryString: vi.fn(),
  getDenomOwners: vi.fn(),
  getDenomOwnersByQuery: vi.fn(),
  getSendEnabled: vi.fn(),
}));

vi.mock("@bitsongjs/telescope/cosmos/bank/v1beta1/tx.rpc.func", () => ({
  send: mockSend,
  multiSend: mockMultiSend,
  updateParams: vi.fn(),
  setSendEnabled: vi.fn(),
}));

import { bankQuery, bankTx } from "../../src/modules/bank";

describe("bankQuery", () => {
  const rpc = { request: vi.fn() } as any;

  it("binds rpc to getBalance", async () => {
    const query = bankQuery(rpc);
    const request = { address: "bitsong1test", denom: "ubtsg" };
    await query.getBalance(request);

    expect(mockGetBalance).toHaveBeenCalledWith(rpc, request);
  });

  it("binds rpc to getAllBalances", async () => {
    const query = bankQuery(rpc);
    const request = { address: "bitsong1test" };
    await query.getAllBalances(request);

    expect(mockGetAllBalances).toHaveBeenCalledWith(rpc, request);
  });

  it("returns all expected query methods", () => {
    const query = bankQuery(rpc);
    expect(Object.keys(query)).toEqual(
      expect.arrayContaining([
        "getBalance",
        "getAllBalances",
        "getSpendableBalances",
        "getTotalSupply",
        "getSupplyOf",
        "getParams",
        "getDenomsMetadata",
        "getDenomMetadata",
        "getDenomOwners",
        "getSendEnabled",
      ]),
    );
  });
});

describe("bankTx", () => {
  const client = { signAndBroadcast: vi.fn() } as any;
  const address = "bitsong1sender";

  it("binds client and address to send", async () => {
    const tx = bankTx(client, address);
    const msg = { fromAddress: address, toAddress: "bitsong1recipient", amount: [] };
    await tx.send(msg);

    expect(mockSend).toHaveBeenCalledWith(client, address, msg, "auto", "");
  });

  it("allows custom fee and memo", async () => {
    const tx = bankTx(client, address);
    const msg = { fromAddress: address, toAddress: "bitsong1recipient", amount: [] };
    const fee = { amount: [{ denom: "ubtsg", amount: "5000" }], gas: "200000" };
    await tx.send(msg, fee, "test memo");

    expect(mockSend).toHaveBeenCalledWith(client, address, msg, fee, "test memo");
  });

  it("returns all expected tx methods", () => {
    const tx = bankTx(client, address);
    expect(Object.keys(tx)).toEqual(
      expect.arrayContaining(["send", "multiSend", "updateParams", "setSendEnabled"]),
    );
  });
});
