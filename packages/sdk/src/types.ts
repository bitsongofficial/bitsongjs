import type { GasPrice, SignerData, SigningStargateClient } from '@cosmjs/stargate';
import type { StdFee } from '@cosmjs/amino';
import type { Chain } from '@chain-registry/types'
import type { EncodeObject } from '@bitsongjs/telescope';
import type { OfflineSigner } from '@cosmjs/proto-signing';

export type ChainNameParam = string | string[] | undefined

export type SignerType = 'auto' | 'amino' | 'direct';

export type GasPriceType = 'low' | 'average' | 'high';

export interface OfflineSignerParams {
  mnemonic: string;
  chain?: string | Pick<Chain, 'bech32_prefix' | 'slip44'>;
}

export interface SignParams {
  // signingClient: SigningStargateClient;
  msgs: readonly EncodeObject[];
  sender?: string;
  // signerType?: SignerType;
  fee?: StdFee | 'auto';
  feeMultiplier?: number;
  memo?: string;
  explicitSignerData?: SignerData,
  timeoutHeight?: bigint
}

export interface BroadcastParams {
  // client: SigningStargateClient;
  txBytes: Uint8Array;
  timeoutMs?: number;
  pollIntervalMs?: number;
}

export interface EstimateFeeParams {
  msgs: readonly EncodeObject[];
  sender?: string;
  gasPrice?: string | GasPrice;
  feeMultiplier?: number;
  memo?: string;
}

export interface CreateSigningClientParams {
  chain?: string | Chain;
  signer?: OfflineSigner;
  mnemonic?: string;
}