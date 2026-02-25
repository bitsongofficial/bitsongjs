import { describe, expect, it, vi } from "vitest";

const { mockQueryClient } = vi.hoisted(() => ({
  mockQueryClient: {
    request: vi.fn(),
    getStatus: vi.fn(),
  },
}));

vi.mock("@interchainjs/cosmos", () => {
  function MockDirectSigner() {
    return { signAndBroadcast: vi.fn() };
  }
  function MockAminoSigner() {
    return { signAndBroadcast: vi.fn() };
  }
  return {
    CosmosClientFactory: {
      createQueryClient: vi.fn().mockResolvedValue(mockQueryClient),
    },
    DirectSigner: MockDirectSigner,
    AminoSigner: MockAminoSigner,
  };
});

vi.mock("@interchainjs/cosmos/wallets/index", () => ({
  Secp256k1HDWallet: {
    fromMnemonic: vi.fn().mockResolvedValue({
      getAccountsData: vi.fn().mockResolvedValue([
        { address: "bitsong1mock", algo: "secp256k1", pubkey: new Uint8Array() },
      ]),
    }),
  },
}));

import { createSigningClient } from "../src/signer";
import { Secp256k1HDWallet } from "@interchainjs/cosmos/wallets/index";

describe("createSigningClient", () => {
  it("creates DirectSigner from mnemonic", async () => {
    const result = await createSigningClient({
      endpoint: "https://rpc.bitsong.io",
      signer: "test mnemonic words here",
    });

    expect(Secp256k1HDWallet.fromMnemonic).toHaveBeenCalledWith(
      "test mnemonic words here",
      expect.objectContaining({
        derivations: [{ hdPath: "m/44'/639'/0'/0/0", prefix: "bitsong" }],
      }),
    );
    expect(result.address).toBe("bitsong1mock");
    expect(result.client).toBeDefined();
    expect(result.queryClient).toBe(mockQueryClient);
  });

  it("uses custom prefix and hdPath", async () => {
    await createSigningClient({
      endpoint: "https://rpc.bitsong.io",
      signer: "test mnemonic words here",
      prefix: "cosmos",
      hdPath: "m/44'/118'/0'/0/0",
    });

    expect(Secp256k1HDWallet.fromMnemonic).toHaveBeenCalledWith(
      "test mnemonic words here",
      expect.objectContaining({
        derivations: [{ hdPath: "m/44'/118'/0'/0/0", prefix: "cosmos" }],
      }),
    );
  });

  it("accepts offline signer", async () => {
    const offlineSigner = {
      getAccounts: vi.fn().mockResolvedValue([
        { address: "bitsong1offline", algo: "secp256k1", pubkey: new Uint8Array() },
      ]),
    };

    const result = await createSigningClient({
      endpoint: "https://rpc.bitsong.io",
      signer: offlineSigner,
    });

    expect(result.address).toBe("bitsong1offline");
  });
});
