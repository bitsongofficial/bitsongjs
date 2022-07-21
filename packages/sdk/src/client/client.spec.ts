/* eslint-disable @typescript-eslint/naming-convention,no-bitwise */
import { stringToPath } from '@cosmjs/crypto';
import { DirectSecp256k1HdWallet, DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { assertIsDeliverTxSuccess, parseCoins } from '@cosmjs/stargate';
import { BitsongClient, Constants, SigningBitsongClient, Utils } from '..';

const validator = {
    mnemonic: 'human visual corn anchor pond buffalo limit radar used winner orphan taxi library warm finger pattern doctor disagree ask minimum frequent electric foam program',
    address: 'bitsong1app8yxq5fth6x45cm74k0d07gg586qmdee42el',
};

const user1 = {
    mnemonic: 'satisfy town rack armed black belt equip ribbon such course drip float measure nature shift gospel flight monster abuse daughter stone canyon picnic satisfy',
    address: 'bitsong1zwyt5styty8aa9snray69jtnyhhntq3yuvdpce',
};

const user2 = {
    mnemonic: 'idle popular match scissors news pumpkin slush legend cup one estate purchase drill history cheese field liar follow ripple gown since skate dirt stone',
    address: 'bitsong1whd73l9dkkey8ru8vj8rvzgxt5pm2kd8sz6wuy',
};

const user3 = {
    mnemonic: 'orient suit behave effort curious skate wild parade about sing farm such teach gesture chest size flavor evil shrug slush canoe fold trumpet muffin',
    address: 'bitsong15wvtc7c9ujew5zn7p6ym7s7wkywvemgek708lt',
};


const rpcUrl: string = 'http://localhost:26657';

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
    let bitsong: BitsongClient;
    let signingBitsong: SigningBitsongClient;
    let wallet: DirectSecp256k1HdWallet;
    let wallet2: DirectSecp256k1HdWallet;
    // let wallet3: DirectSecp256k1HdWallet;

    beforeAll(async () => {
        bitsong = await BitsongClient.connect(rpcUrl);
        wallet = await DirectSecp256k1HdWallet.fromMnemonic(user1.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(user2.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        signingBitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);
    });

    it('Should issue a fantoken', async () => {
        const [account] = await wallet.getAccounts();
        console.log(account.address)

        const result = await signingBitsong.issueFanToken("bitangel", "BitAngel", "", "100", account.address, account.address, defaultFee)
        assertIsDeliverTxSuccess(result);
    })

    // it('Should connect without a signer', async () => {
    //     expect(await bitsong.getChainId()).toEqual('localnet');
    // });

    // it('Should generate a valid account', async () => {
    //     const accounts = await wallet.getAccounts();

    //     expect(Utils.isAddressValid(accounts[0].address)).toBe(true);
    //     expect(Utils.isAddressValid(accounts[0].address, Constants.Bech32PrefixAccAddr)).toBe(true);
    //     expect(Utils.isAddressValid(accounts[0].address, undefined)).toBe(true);
    //     expect(Utils.isAddressValid(accounts[0].address, 'cosmos')).toBe(false);

    //     expect(accounts[0].address).toEqual(faucet.address);
    // });

    // it('Should send coins', async () => {
    //     const [account] = await wallet.getAccounts();

    //     const recipient = account.address;
    //     const amount = {
    //         denom: Constants.MicroDenom,
    //         amount: '10000000',
    //     };

    //     const result = await signingBitsong.sendTokens(account.address, recipient, [amount], defaultFee, 'Have fun!');
    //     assertIsBroadcastTxSuccess(result);

    //     expect(result.height).toBeGreaterThan(0);
    //     expect(result.gasUsed).toBeGreaterThan(0);
    // });

    // it('Should issue a new fantoken denom', async () => {
    //     const [account] = await wallet2.getAccounts();

    //     const symbol = 'test';
    //     const name = 'Test token';
    //     const description = 'Test description fantoken';
    //     const maxSupply = ''+((100 * 1000) * 1000000); // 100k
    //     const issueFee = {
    //         denom: Constants.MicroDenom,
    //         amount: '1000000',
    //     };

    //     const result = await signingBitsong.issueFanToken(symbol, name, maxSupply, description, account.address, issueFee, defaultFee, 'my first fantoken');
    //     assertIsBroadcastTxSuccess(result);

    //     expect(result.height).toBeGreaterThan(0);
    //     expect(result.gasUsed).toBeGreaterThan(0);
    // });

    // it('Should mint a new fantoken', async () => {
    //     const [account] = await wallet2.getAccounts();

    //     const recipient = account.address;
    //     const denom = 'utest';
    //     const amount = ''+((200) * 1000000);

    //     const result = await signingBitsong.mintFanToken(recipient, denom, amount, account.address, defaultFee);
    //     assertIsBroadcastTxSuccess(result);

    //     expect(result.height).toBeGreaterThan(0);
    //     expect(result.gasUsed).toBeGreaterThan(0);
    // });

    // it('Should burn a fantoken', async () => {
    //     const [account] = await wallet2.getAccounts();

    //     const sender = account.address;
    //     const denom = 'uaaaa';
    //     const amount = ''+((1)*1000000);

    //     const result = await signingBitsong.burnFanToken(denom, amount, sender, defaultFee);
    //     assertIsBroadcastTxSuccess(result);

    //     expect(result.height).toBeGreaterThan(0);
    //     expect(result.gasUsed).toBeGreaterThan(0);
    // });

    // it('Should transfer a fantoken', async () => {
    //     const [account] = await wallet2.getAccounts();

    //     const sender = account.address;
    //     const denom = 'uaaaa';
    //     const receiver = acc2.address;

    //     const result = await signingBitsong.transferFanTokenOwner(denom, sender, receiver, defaultFee);
    //     assertIsBroadcastTxSuccess(result);

    //     expect(result.height).toBeGreaterThan(0);
    //     expect(result.gasUsed).toBeGreaterThan(0);
    // });

    // it('Should query my balances', async () => {
    //     const [account] = await wallet2.getAccounts();

    //     const balances = await bitsong.getAllBalances(account.address);
    //     console.log(balances);
    // });

    // it('Should query a fantoken by denom', async () => {
    //     const response = await bitsong.getFanToken('aaaa');
    //     console.log(response);
    // });

    // it('Should query all fantokens by owner', async () => {
    //     const response = await bitsong.getAllFanTokensByOwner(acc2.address);
    //     console.log(response);
    // });
});
