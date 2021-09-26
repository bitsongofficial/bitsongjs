import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { stringToPath } from '@cosmjs/crypto';
// eslint-disable-next-line node/no-unpublished-import
import { Constants, BitsongClient, SigningBitsongClient } from '../../packages/sdk/build';
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

    console.log('issuing a new fantoken denom...');

    const symbol = 'test22';
    const name = 'Test token';
    const description = 'Test description fantoken';
    const maxSupply = '100000000000'; // 100k
    const issueFee = {
        denom: Constants.MicroDenom,
        amount: '1000000',
    };

    const result = await signingBitsong.issueFanToken(symbol, name, maxSupply, description, account.address, issueFee, defaultFee, 'my first fantoken');
    assertIsBroadcastTxSuccess(result);
    console.log(`Tx Hash: ${result.transactionHash}`);

    const balance = await bitsong.getBalance(account.address, 'utest22');
    console.log(`Your new balance is: ${balance.amount}${balance.denom}`);
})();
