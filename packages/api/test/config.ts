import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { MicroDenom, Bech32PrefixAccAddr, getHdPath } from '../lib/constants';
import { BitsongClient } from '../lib/client';
import { stringToPath } from '@cosmjs/crypto';
import { Account } from '@bitsongjs/utils';

const TEST_FEE = {
  amount: [
    {
      denom: MicroDenom,
      amount: '5000',
    },
  ],
  gas: '200000',
};

const TEST_ADDRESS="<YOUR ADDRESS FOR TESTS>"
const OTHER_TEST_ADDRESS="<ANOTHER ADDRESS FOR TESTS>"
const RPC_NODE_URL="https://rpc.nft-devnet.bitsong.network/"
const TEST_MNEMONIC="<YOUR MNEMONIC RELATED WITH TEST_ADDRESS FOR TESTS>"
const OTHER_TEST_MNEMONIC="<YOUR MNEMONIC RELATED WITH OTHER_TEST_ADDRESS FOR TESTS>"

const accounts: Account[] = [
  {
    address: TEST_ADDRESS,
    amount: '1000000',
  },
  {
    address: OTHER_TEST_ADDRESS,
    amount: '1000000',
  },
];

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
  accounts,
  connect,
};
