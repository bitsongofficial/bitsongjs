import { DirectSecp256k1HdWallet, decodeTxRaw } from '@cosmjs/proto-signing';
import { stringToPath } from '@cosmjs/crypto';
// eslint-disable-next-line node/no-unpublished-import
import { Constants, BitsongClient, SigningBitsongClient } from '../../packages/sdk/build';
import { assertIsDeliverTxSuccess, logs } from '@cosmjs/stargate';
import { MsgIssueEncodeObject } from '../../packages/sdk/build/messages';
import { MsgIssue, MsgMint } from '../../packages/sdk/build/codec/bitsong/fantoken/v1beta1/tx';
import { MsgMintEncodeObject } from 'packages/sdk/src/messages';

const rpcUrl = 'https://rpc.nft-devnet.bitsong.network/';

const user = {
  mnemonic: 'vessel hint uphold attitude piece prison fold staff cattle urban net chuckle',
  address: 'bitsong1fqhdc4lruy4l2pv25lnn8f8k6app8w9gkf4c6a',
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
  // Set Wallet
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(user.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
  const [account] = await wallet.getAccounts();

  console.log(`Mnemonic: ${wallet.mnemonic}`);
  console.log(`Address: ${account.address}`);

  // Init the client
  const signingBitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);

  console.log('issuing a new fantoken denom...');

  const msg: MsgIssueEncodeObject = {
    typeUrl: '/bitsong.fantoken.MsgIssue',
    value: MsgIssue.fromPartial({
      authority: account.address,
      maxSupply: "100000000000", // 100.000
      minter: account.address,
      name: "fantoken test",
      symbol: "test",
      uri: "ipfs://",
    }),
  };

  let result = await signingBitsong.signAndBroadcast(account.address, [msg], defaultFee, "test MsgIssue")
  assertIsDeliverTxSuccess(result);
  console.log(`Tx Hash: ${result.transactionHash}`);

  const parsedLogs = logs.parseLogs(logs.parseRawLog(result.rawLog));
  const denomAttr = logs.findAttribute(parsedLogs, "bitsong.fantoken.v1beta1.EventIssue", "denom");
  const denom = denomAttr.value.slice(1, -1)

  console.log('minting a new fantoken denom...');

  const msgMint: MsgMintEncodeObject = {
    typeUrl: '/bitsong.fantoken.MsgMint',
    value: MsgMint.fromPartial({
      recipient: account.address,
      coin: {
        amount: "10",
        denom: denom
      },
      minter: account.address
    }),
  };

  result = await signingBitsong.signAndBroadcast(account.address, [msgMint], defaultFee, "test MsgMint")
  assertIsDeliverTxSuccess(result);
  console.log(`Tx Hash: ${result.transactionHash}`);

  /*const balance = await bitsong.getBalance(account.address, 'utest22');
  console.log(`Your new balance is: ${balance.amount}${balance.denom}`);*/
})();
