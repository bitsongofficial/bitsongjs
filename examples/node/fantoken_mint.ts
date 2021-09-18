import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { stringToPath } from '@cosmjs/crypto';
// eslint-disable-next-line node/no-unpublished-import
import { Constants, BitsongClient, SigningBitsongClient } from '../../build/build';
import { assertIsBroadcastTxSuccess } from '@cosmjs/stargate';

const rpcUrl = 'http://49.12.198.197:26657';

const user = {
    mnemonic: 'usage elegant version gold snake soap check maze chapter harsh put common',
    address: 'bitsong1qyglp2h28cq7eunmpusd4ngrfdsp0zjf3l9fz5',
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
    const bitsong = await BitsongClient.connect(rpcUrl);
    const signingBitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);

    console.log('minting a new fantoken...');

    const denom = 'utest22';
    const amount = '200000000';

    const result = await signingBitsong.mintFanToken(account.address, denom, amount, account.address, defaultFee);
    assertIsBroadcastTxSuccess(result);
    console.log(`Tx Hash: ${result.transactionHash}`);

    const balance = await bitsong.getBalance(account.address, 'utest22');
    console.log(`Your new balance is: ${balance.amount}${balance.denom}`);
})();
