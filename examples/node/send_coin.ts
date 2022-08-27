import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { stringToPath } from '@cosmjs/crypto';
// eslint-disable-next-line node/no-unpublished-import
import { Constants, BitsongClient, SigningBitsongClient } from '../../packages/sdk/build';
import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';

const rpcUrl = 'https://rpc.nft-devnet.bitsong.network/';

const faucet = {
  mnemonic: 'friend excite rough reopen cover wheel spoon convince island path clean monkey play snow number walnut pull lock shoot hurry dream divide concert discover',
  address: 'bitsong1zm6wlhr622yr9d7hh4t70acdfg6c32kcv34duw',
};

const createWallet = async () => {
  return await DirectSecp256k1HdWallet.generate(12, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
};

const defaultFee = {
  amount: [
    {
      denom: Constants.MicroDenom,
      amount: '2000',
    },
  ],
  gas: '180000', // 180k
};

(async () => {
  // Faucet Wallet
  const faucetWallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
  // Create wallet
  const wallet = await createWallet();
  const [account] = await wallet.getAccounts();

  console.log(`Mnemonic: ${wallet.mnemonic}`);
  console.log(`Address: ${account.address}`);

  // Init the client
  const bitsong = await BitsongClient.connect(rpcUrl);
  const signingBitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, faucetWallet);

  let balance = await bitsong.getBalance(account.address, Constants.MicroDenom);
  console.log(`Your actual balance is: ${balance.amount}${balance.denom}`);

  // Send coins from faucet to the new account
  const amount = {
    denom: Constants.MicroDenom,
    amount: '100000000000', // 100.000btsg
  };

  console.log('sending tokens...');
  const result = await signingBitsong.sendTokens(faucet.address, account.address, [amount], defaultFee, 'Have fun!');

  assertIsDeliverTxSuccess(result);
  console.log(`Tx Hash: ${result.transactionHash}`);

  balance = await bitsong.getBalance(account.address, Constants.MicroDenom);
  console.log(`Your new balance is: ${balance.amount}${balance.denom}`);
})();
