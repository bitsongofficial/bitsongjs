import type { Chain } from "@chain-registry/types";
import type { SignerType } from "./types";
import { Client } from "./client";

export * from './utils'

export async function createClient({
  chain,
  mnemonic,
  signerType = 'auto'
}: {
  chain?: string | Chain;
  mnemonic: string;
  signerType?: SignerType;
}) {
  return await Client.create({ chain, mnemonic, signerType });
}

// const client = await Client.create({ mnemonic: '...' })
// client.bank.getAllBalances({ ... })
// client.bank.send({ ... })