import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { MicroDenom, Bech32PrefixAccAddr, getHdPath } from '../dist/constants';
import { BitsongClient } from '../dist/client';
import { stringToPath } from '@cosmjs/crypto';
import { Account } from '@bitsongjs/utils';
import {
  QueryClientImpl as BankQueryClientImpl,
} from '../dist/codec/cosmos/bank/v1beta1/query';

const TEST_FEE = {
  amount: [
    {
      denom: MicroDenom,
      amount: '5000',
    },
  ],
  gas: '200000',
};

const TEST_ADDRESS="bitsong1dhqmhaksj5qw4ays64pp9mff3fwkxtugvn0at5"
const OTHER_TEST_ADDRESS="bitsong1s0aj6f7hgzr3gfcmm9xz0lg0442qdq9su9llq0"
const RPC_NODE_URL="https://rpc.nft-devnet.bitsong.network/"
const TEST_MNEMONIC="brief number pudding flock timber coast drive street body torch enact erupt"
const OTHER_TEST_MNEMONIC="drastic upset unlock rich patch liberty stereo move enroll undo avocado arrive"

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

const modules = {
  bank: BankQueryClientImpl,
}

const getSigner = async (mnemonic?: string) => {
  return mnemonic ? await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: Bech32PrefixAccAddr,
    hdPaths: [stringToPath(getHdPath())],
  }) : undefined;
}

const connect = async (mnemonic?: string) => {
  const signer = await getSigner(mnemonic);

  return new BitsongClient<typeof modules>({
    connection: {
      type: 'tendermint',
      endpoints: [RPC_NODE_URL],
      signer,
    },
  }, modules);
};

export {
  TEST_ADDRESS,
  OTHER_TEST_ADDRESS,
  RPC_NODE_URL,
  TEST_MNEMONIC,
  OTHER_TEST_MNEMONIC,
  TEST_FEE,
  modules,
  accounts,
  connect,
  getSigner,
};
