import type { Chain } from "@chain-registry/types";
import type { SignerType } from "./types";
import { Client } from "./client";
import type { OfflineSigner } from "@cosmjs/proto-signing";

export * from './errors'
export * from './utils'

export async function createClient({
  chain,
  mnemonic,
  offlineSigner,
  signerType = 'auto'
}: {
  chain?: string | Chain;
  mnemonic?: string;
  offlineSigner?: OfflineSigner;
  signerType?: SignerType;
}) {
  return await Client.create({ chain, offlineSigner, mnemonic, signerType });
}