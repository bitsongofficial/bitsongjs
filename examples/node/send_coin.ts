import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { stringToPath } from '@cosmjs/crypto';
// eslint-disable-next-line node/no-unpublished-import
import { Constants, BitsongClient, SigningBitsongClient } from '../../build/build';
import { assertIsBroadcastTxSuccess } from '@cosmjs/stargate';

const rpcUrl = 'http://49.12.198.197:26657';

const faucet = {
    mnemonic: 'fuel obscure melt april direct second usual hair leave hobby beef bacon solid drum used law mercy worry fat super must ritual bring faculty',
    address: 'bitsong1nzxmsks45e55d5edj4mcd08u8dycaxq5eplakw',
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
        amount: '10000000', // 10btsg
    };

    console.log('sending tokens...');
    const result = await signingBitsong.sendTokens(faucet.address, account.address, [amount], defaultFee, 'Have fun!');

    assertIsBroadcastTxSuccess(result);
    console.log(`Tx Hash: ${result.transactionHash}`);

    balance = await bitsong.getBalance(account.address, Constants.MicroDenom);
    console.log(`Your new balance is: ${balance.amount}${balance.denom}`);
})();
