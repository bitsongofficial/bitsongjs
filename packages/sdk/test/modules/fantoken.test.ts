import { describe, expect, it, vi } from "vitest";

const { mockGetFanToken, mockGetFanTokens, mockIssue, mockMint } = vi.hoisted(() => ({
  mockGetFanToken: vi.fn().mockResolvedValue({ fantoken: { denom: "ft1" } }),
  mockGetFanTokens: vi.fn().mockResolvedValue({ fantokens: [] }),
  mockIssue: vi.fn().mockResolvedValue({ transactionHash: "ABC" }),
  mockMint: vi.fn().mockResolvedValue({ transactionHash: "DEF" }),
}));

vi.mock("@bitsongjs/telescope/bitsong/fantoken/v1beta1/query.rpc.func", () => ({
  getFanToken: mockGetFanToken,
  getFanTokens: mockGetFanTokens,
  getParams: vi.fn(),
}));

vi.mock("@bitsongjs/telescope/bitsong/fantoken/v1beta1/tx.rpc.func", () => ({
  issue: mockIssue,
  mint: mockMint,
  burn: vi.fn(),
  disableMint: vi.fn(),
  setMinter: vi.fn(),
  setAuthority: vi.fn(),
  setUri: vi.fn(),
}));

import { fantokenQuery, fantokenTx } from "../../src/modules/fantoken";

describe("fantokenQuery", () => {
  const rpc = { request: vi.fn() } as any;

  it("binds rpc to getFanToken", async () => {
    const query = fantokenQuery(rpc);
    const request = { denom: "ft1" };
    await query.getFanToken(request);

    expect(mockGetFanToken).toHaveBeenCalledWith(rpc, request);
  });

  it("binds rpc to getFanTokens", async () => {
    const query = fantokenQuery(rpc);
    await query.getFanTokens({});
    expect(mockGetFanTokens).toHaveBeenCalledWith(rpc, {});
  });

  it("returns all expected query methods", () => {
    const query = fantokenQuery(rpc);
    expect(Object.keys(query)).toEqual(
      expect.arrayContaining(["getFanToken", "getFanTokens", "getParams"]),
    );
  });
});

describe("fantokenTx", () => {
  const client = { signAndBroadcast: vi.fn() } as any;
  const address = "bitsong1creator";

  it("binds client and address to issue", async () => {
    const tx = fantokenTx(client, address);
    const msg = { symbol: "ROCK", name: "RockToken", uri: "", maxSupply: "1000000", authority: address };
    await tx.issue(msg);

    expect(mockIssue).toHaveBeenCalledWith(client, address, msg, "auto", "");
  });

  it("binds client and address to mint", async () => {
    const tx = fantokenTx(client, address);
    const msg = { recipient: "bitsong1recipient", coin: { denom: "ft1", amount: "100" }, minter: address };
    await tx.mint(msg);

    expect(mockMint).toHaveBeenCalledWith(client, address, msg, "auto", "");
  });

  it("returns all expected tx methods", () => {
    const tx = fantokenTx(client, address);
    expect(Object.keys(tx)).toEqual(
      expect.arrayContaining([
        "issue", "mint", "burn", "disableMint",
        "setMinter", "setAuthority", "setUri",
      ]),
    );
  });
});
