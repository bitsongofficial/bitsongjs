import { SigningStargateClient } from '@cosmjs/stargate';

export interface OfflineSignerParams {
  mnemonic: string;
  chain: {
    bech32_prefix: string;
    slip44: number;
  }
}

export interface SignParams {
  client: SigningStargateClient;
  chainId: string;
  sender: string;
  msgs: readonly any[];
  fee: any;
  memo: string;
}

export interface BroadcastParams {
  client: SigningStargateClient;
  txBytes: Uint8Array;
  timeoutMs?: number;
  pollIntervalMs?: number;
}