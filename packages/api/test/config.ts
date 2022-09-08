import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { MicroDenom, Bech32PrefixAccAddr, getHdPath } from '../lib/constants';
import { BitsongClient } from '../lib/client';
import { stringToPath } from '@cosmjs/crypto';
import * as dotenv from 'dotenv';

const config = dotenv.config();
const parsed = config.parsed ? config.parsed : {};

const TEST_FEE = {
  amount: [
    {
      denom: MicroDenom,
      amount: '5000',
    },
  ],
  gas: '200000',
};

const {
  TEST_ADDRESS,
  OTHER_TEST_ADDRESS,
  RPC_NODE_URL,
  TEST_MNEMONIC,
  OTHER_TEST_MNEMONIC,
} = parsed;

const connect = async (mnemonic: string): Promise<BitsongClient> => {
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: Bech32PrefixAccAddr,
    hdPaths: [stringToPath(getHdPath())],
  });

  return BitsongClient.connect({
    connection: {
      type: 'tendermint',
      endpoint: RPC_NODE_URL,
      signer,
    },
  });
};

export {
  TEST_ADDRESS,
  OTHER_TEST_ADDRESS,
  RPC_NODE_URL,
  TEST_MNEMONIC,
  OTHER_TEST_MNEMONIC,
  TEST_FEE,
  connect,
};
