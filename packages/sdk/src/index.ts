import type { BroadcastParams, CreateSigningClientParams, OfflineSignerParams, SignerType, SignParams } from "./types";
import { DirectSecp256k1HdWallet, type OfflineSigner } from "@cosmjs/proto-signing";
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { getSigningBitsongClient } from '@bitsongjs/telescope'
import { makeHdPath } from "./utils";
import { getChain } from "./chains";
import type { SigningStargateClient } from '@cosmjs/stargate';

export const getOfflineSignerDirect = async ({
  mnemonic,
  chain = {
    bech32_prefix: 'bitsong',
    slip44: 639
  }
}: OfflineSignerParams): Promise<DirectSecp256k1HdWallet> => {
  if (typeof chain === 'string') {
    chain = getChain(chain);
  }

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
  if (typeof chain === 'string') {
    chain = getChain(chain);
  }

  return await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: chain.bech32_prefix,
    hdPaths: [makeHdPath(chain.slip44, 0)]
  });
};

export const createOfflineSigner = async ({
  mnemonic,
  chain = {
    bech32_prefix: 'bitsong',
    slip44: 639
  },
  signerType = 'direct'
}: OfflineSignerParams & { signerType?: SignerType }): Promise<OfflineSigner> => {
  if (typeof chain === 'string') {
    chain = getChain(chain);
  }

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

export const createSigningClient = async ({
  chain = 'bitsong',
  signer,
  mnemonic
}: CreateSigningClientParams): Promise<SigningStargateClient> => {
  if (typeof chain === 'string') {
    chain = getChain(chain);
    if (chain.apis?.rpc?.length === 0 || !chain.apis?.rpc) {
      throw new Error(`Chain ${chain} does not have rpc endpoints`);
    }
  }

  if (signer && mnemonic) {
    throw new Error('Either mnemonic or signer must be provided, not both');
  }

  if (!signer) {
    if (!mnemonic) {
      throw new Error('Either mnemonic or signer must be provided, not both');
    }

    signer = await createOfflineSigner({
      mnemonic,
      chain: {
        bech32_prefix: chain.bech32_prefix,
        slip44: chain.slip44
      }
    });
  }

  return await getSigningBitsongClient({ 
    rpcEndpoint: chain.apis!.rpc![0]!.address,
    signer
  });
}

export const sign = async ({
  signingClient,
  sender,
  msgs,
  signerType = 'auto',
  fee = 'auto',
  feeMultiplier = 1.4,
  memo = ''
}: SignParams) => {
  const chainId = await signingClient.getChainId();
  
  const { accountNumber, sequence } = await signingClient.getSequence(sender);

  const txRaw = await signingClient.sign(sender, msgs, fee, memo, {
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