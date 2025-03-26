import { Slip10RawIndex } from "@cosmjs/crypto";
import type { BroadcastParams, OfflineSignerParams, SignParams } from "./types";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { getSigningBitsongClient } from '@bitsongjs/telescope'

export function makeHdPath(coinType = 118, account = 0) {
  return [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(coinType),
    Slip10RawIndex.hardened(0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(account)
  ];
}

export function bitsongHdPath(account = 0) {
  return makeHdPath(639, account);
}

export const offlineSignerProto = async ({
  mnemonic,
  chain
}: OfflineSignerParams): Promise<DirectSecp256k1HdWallet> => {
  return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: chain.bech32_prefix,
    hdPaths: [makeHdPath(chain.slip44, 0)]
  });
};

export const offlineSignerAmino = async ({
  mnemonic,
  chain
}: OfflineSignerParams): Promise<Secp256k1HdWallet> => {
  return await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: chain.bech32_prefix,
    hdPaths: [makeHdPath(chain.slip44, 0)]
  });
};

export const sign = async ({
  client,
  chainId,
  sender,
  msgs,
  fee,
  memo = ''
}: SignParams) => {
  const { accountNumber, sequence } = await client.getSequence(sender);

  const txRaw = await client.sign(sender, msgs, fee, memo, {
    accountNumber: accountNumber,
    sequence: sequence,
    chainId
  });

  return TxRaw.encode(txRaw).finish();
};

export const broadcast = async ({
  client,
  txBytes,
  timeoutMs,
  pollIntervalMs
}: BroadcastParams) => {
  return await client.broadcastTx(txBytes, timeoutMs, pollIntervalMs);
};

export const signAndBroadcast = async ({
  client,
  chainId,
  sender,
  msgs,
  fee,
  memo = '',
  timeoutMs,
  pollIntervalMs
}: SignParams & BroadcastParams) => {
  const txBytes = await sign({ client, chainId, sender, msgs, fee, memo });
  return await broadcast({ client, txBytes, timeoutMs, pollIntervalMs });
}