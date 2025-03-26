import type { BroadcastParams, OfflineSignerParams, SignerType, SignParams } from "./types";
import { DirectSecp256k1HdWallet, type OfflineSigner } from "@cosmjs/proto-signing";
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { getSigningBitsongClient } from '@bitsongjs/telescope'
import { makeHdPath } from "./utils";

export const getOfflineSignerDirect = async ({
  mnemonic,
  chain = {
    bech32_prefix: 'bitsong',
    slip44: 639
  }
}: OfflineSignerParams): Promise<DirectSecp256k1HdWallet> => {
  return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: chain.bech32_prefix,
    hdPaths: [makeHdPath(chain.slip44, 0)]
  });
};

export const getOfflineSignerAmino = async ({
  mnemonic,
  chain = {
    bech32_prefix: 'bitsong',
    slip44: 639
  }
}: OfflineSignerParams): Promise<Secp256k1HdWallet> => {
  return await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: chain.bech32_prefix,
    hdPaths: [makeHdPath(chain.slip44, 0)]
  });
};

export const getOfflineSigner = async ({
  mnemonic,
  chain = {
    bech32_prefix: 'bitsong',
    slip44: 639
  },
  signerType = 'direct'
}: OfflineSignerParams & { signerType: SignerType }): Promise<OfflineSigner> => {
  switch (signerType) {
    case 'amino': {
      return await getOfflineSignerAmino({ mnemonic, chain });
    }
    case 'direct': {
      return await getOfflineSignerDirect({ mnemonic, chain });
    }
    default: {
      return await getOfflineSignerDirect({ mnemonic, chain });
    }
  }
};

export const sign = async ({
  client,
  sender,
  msgs,
  signerType = 'auto',
  fee = 'auto',
  feeMultiplier = 1.4,
  memo = ''
}: SignParams) => {
  const chainId = await client.getChainId();
  
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