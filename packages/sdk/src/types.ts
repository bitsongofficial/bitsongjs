import type { GasPrice, SignerData } from '@cosmjs/stargate';
import type { StdFee, Coin } from '@cosmjs/amino';
import type { Chain } from '@chain-registry/types'
import type { EncodeObject } from '@bitsongjs/telescope';
import type { OfflineSigner } from '@cosmjs/proto-signing';
import type {
  MsgMultiSend,
  MsgSend,
  MsgSetSendEnabled,
  MsgUpdateParams
} from '@bitsongjs/telescope/cosmos/bank/v1beta1/tx';

export type ChainNameParam = string | string[] | undefined

export type SignerType = 'auto' | 'amino' | 'direct';

export type GasPriceType = 'low' | 'average' | 'high';

export interface OfflineSignerParams {
  mnemonic: string;
  chain?: string | Pick<Chain, 'bech32_prefix' | 'slip44'>;
}

export interface SignParams {
  msgs: readonly EncodeObject[];
  sender?: string;
  fee?: StdFee | 'auto';
  feeMultiplier?: number;
  memo?: string;
  // explicitSignerData?: SignerData,
  timeoutHeight?: bigint
}

export interface BroadcastParams {
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

export type BankSendParams = {
  fromAddress?: string;
} & Omit<MsgSend, 'fromAddress'> & Omit<SignParams, 'msgs'> & Omit<BroadcastParams, 'txBytes'>;

export type BankMultiSendParams = MsgMultiSend & Omit<SignParams, 'msgs'> & Omit<BroadcastParams, 'txBytes'>;

export type BankSetSendEnabledParams = MsgSetSendEnabled & Omit<SignParams, 'msgs'> & Omit<BroadcastParams, 'txBytes'>;

export type BankUpdateParams = MsgUpdateParams & Omit<SignParams, 'msgs'> & Omit<BroadcastParams, 'txBytes'>;