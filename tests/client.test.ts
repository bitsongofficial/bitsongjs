import { stringToPath } from '@cosmjs/crypto';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { assertIsBroadcastTxSuccess } from '@cosmjs/stargate';
import { BitsongClient, Constants, SigningBitsongClient, Utils } from '../src';
import { toUtf8 } from '@cosmjs/encoding';

const faucet = {
    mnemonic: 'fuel obscure melt april direct second usual hair leave hobby beef bacon solid drum used law mercy worry fat super must ritual bring faculty',
    address: 'bitsong1nzxmsks45e55d5edj4mcd08u8dycaxq5eplakw',
};

const acc1 = {
    mnemonic: 'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put',
    address: 'bitsong132fuyjqzew4kw87atymc66d03dta243avhh9ty',
};

const rpcUrl: string = 'http://49.12.198.197:26657';

const defaultFee = {
    amount: [
        {
            denom: Constants.MicroDenom,
            amount: '2000',
        },
    ],
    gas: '180000', // 180k
};

describe('Client', () => {
    it('Should connect without a signer', async () => {
        const bitsong = await BitsongClient.connect(rpcUrl);
        expect(await bitsong.getChainId()).toEqual('localnet');
    });

    it('Should generate a valid account', async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(acc1.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        const accounts = await wallet.getAccounts();

        expect(Utils.isAddressValid(accounts[0].address)).toBe(true);
        expect(Utils.isAddressValid(accounts[0].address, Constants.Bech32PrefixAccAddr)).toBe(true);
        expect(Utils.isAddressValid(accounts[0].address, undefined)).toBe(true);
        expect(Utils.isAddressValid(accounts[0].address, 'cosmos')).toBe(false);

        expect(accounts[0].address).toEqual(acc1.address);
    });

    it('Should send coins', async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        const [account] = await wallet.getAccounts();

        const bitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);

        const recipient = account.address;
        const amount = {
            denom: Constants.MicroDenom,
            amount: '10000000',
        };

        const result = await bitsong.sendTokens(account.address, recipient, [amount], defaultFee, 'Have fun!');
        assertIsBroadcastTxSuccess(result);

        expect(result.height).toBeGreaterThan(0);
        expect(result.gasUsed).toBeGreaterThan(0);
    });

    it('Should issue a new fantoken denom', async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        const [account] = await wallet.getAccounts();

        const bitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);

        const symbol = 'aaaa' + Math.floor(Math.random() * 1000);
        const name = 'Test token';
        const description = 'Test description fantoken';
        const maxSupply = '10000';
        const issueFee = {
            denom: Constants.MicroDenom,
            amount: '1000000',
        };

        const result = await bitsong.issueFanToken(symbol, name, maxSupply, description, account.address, issueFee, defaultFee, 'my first fantoken');
        assertIsBroadcastTxSuccess(result);

        expect(result.height).toBeGreaterThan(0);
        expect(result.gasUsed).toBeGreaterThan(0);
    });

    it('Should mint a new fantoken', async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        const [account] = await wallet.getAccounts();

        const bitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);

        const recipient = account.address;
        const denom = 'uaaaa';
        const amount = '10';

        const result = await bitsong.mintFanToken(recipient, denom, amount, account.address, defaultFee);
        assertIsBroadcastTxSuccess(result);

        expect(result.height).toBeGreaterThan(0);
        expect(result.gasUsed).toBeGreaterThan(0);
    });

    it('Should burn a fantoken', async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        const [account] = await wallet.getAccounts();

        const bitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);

        const sender = account.address;
        const denom = 'uaaaa';
        const amount = '10';

        const result = await bitsong.burnFanToken(denom, amount, sender, defaultFee);
        assertIsBroadcastTxSuccess(result);

        expect(result.height).toBeGreaterThan(0);
        expect(result.gasUsed).toBeGreaterThan(0);
    });

    it('Should query my balances', async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        const [account] = await wallet.getAccounts();

        const bitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);

        const balances = await bitsong.getAllBalances(account.address);
        console.log(balances);
    });

    it('Should query a fantoken by denom', async () => {
        const bitsong = await BitsongClient.connect(rpcUrl);
        const response = await bitsong.getFanToken('aaaa');
        console.log(response);
    });

    it('Should query all fantokens by owner', async () => {
        const bitsong = await BitsongClient.connect(rpcUrl);
        const response = await bitsong.getAllFanTokensByOwner(faucet.address);
        console.log(response.tokens);
    });
});
