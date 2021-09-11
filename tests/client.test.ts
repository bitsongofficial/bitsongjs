import { stringToPath } from '@cosmjs/crypto';
import { DirectSecp256k1HdWallet, DirectSecp256k1Wallet } from '@cosmjs/proto-signing';
import { assertIsBroadcastTxSuccess, parseCoins } from '@cosmjs/stargate';
import { BitsongClient, Constants, SigningBitsongClient, Utils } from '../src';

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
    let bitsong: BitsongClient;
    let signingBitsong: SigningBitsongClient;
    let wallet: DirectSecp256k1HdWallet;
    let wallet2: DirectSecp256k1HdWallet;

    beforeAll(async () => {
        bitsong = await BitsongClient.connect(rpcUrl);
        wallet = await DirectSecp256k1HdWallet.fromMnemonic(faucet.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(acc1.mnemonic, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
        signingBitsong = await SigningBitsongClient.connectWithSigner(rpcUrl, wallet);
    });

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
    //     const [account] = await wallet.getAccounts();

    //     const symbol = 'test';
    //     const name = 'Test token';
    //     const description = 'Test description fantoken';
    //     const maxSupply = '100000000000'; // 100k
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
    //     const [account] = await wallet.getAccounts();

    //     const recipient = account.address;
    //     const denom = 'utest';
    //     const amount = '200000000';

    //     const result = await signingBitsong.mintFanToken(recipient, denom, amount, account.address, defaultFee);
    //     assertIsBroadcastTxSuccess(result);

    //     expect(result.height).toBeGreaterThan(0);
    //     expect(result.gasUsed).toBeGreaterThan(0);
    // });

    // it('Should burn a fantoken', async () => {
    //     const [account] = await wallet.getAccounts();

    //     const sender = account.address;
    //     const denom = 'uaaaa';
    //     const amount = '10';

    //     const result = await signingBitsong.burnFanToken(denom, amount, sender, defaultFee);
    //     assertIsBroadcastTxSuccess(result);

    //     expect(result.height).toBeGreaterThan(0);
    //     expect(result.gasUsed).toBeGreaterThan(0);
    // });

    it('Should query my balances', async () => {
        const [account] = await wallet.getAccounts();

        const balances = await bitsong.getAllBalances(account.address);
        console.log(balances);
    });

    // it('Should query a fantoken by denom', async () => {
    //     const response = await bitsong.getFanToken('aaaa');
    //     console.log(response);
    // });

    // it('Should query all fantokens by owner', async () => {
    //     const response = await bitsong.getAllFanTokensByOwner(faucet.address);
    //     console.log(response.tokens);
    // });

    // it('Should create a new liquidity pool', async () => {
    //     const [account] = await wallet.getAccounts();

    //     const creator = account.address;
    //     const coins = parseCoins('100000000ubtsg,100000000utest');
    //     const gasFee = {
    //         amount: [
    //             {
    //                 denom: Constants.MicroDenom,
    //                 amount: '2000',
    //             },
    //         ],
    //         gas: '200000', // 200k
    //     };

    //     const result = await signingBitsong.createLiquidityPool(coins, creator, gasFee);
    //     assertIsBroadcastTxSuccess(result);

    //     console.log(result);
    // });

    // it('Should deposit in a existent pool', async () => {
    //     const [account] = await wallet.getAccounts();

    //     const depositor = account.address;
    //     const poolId = 1;
    //     const coins = parseCoins('1000000ubtsg,1000000utest');
    //     const gasFee = {
    //         amount: [
    //             {
    //                 denom: Constants.MicroDenom,
    //                 amount: '2000',
    //             },
    //         ],
    //         gas: '200000', // 200k
    //     };

    //     const result = await signingBitsong.depositLiquidityPool(poolId, coins, depositor, gasFee);
    //     assertIsBroadcastTxSuccess(result);

    //     console.log(result);
    // });

    // it('Should withdraw from an existent pool', async () => {
    //     const [account] = await wallet.getAccounts();

    //     const withdrawer = account.address;
    //     const poolId = 1;
    //     const coin = parseCoins('2pool5F3C5315E21723FEE6044C7ADCEDFABD8BF5C1621F722A46D9E6DAA51FA2069A')[0];
    //     const gasFee = {
    //         amount: [
    //             {
    //                 denom: Constants.MicroDenom,
    //                 amount: '2000',
    //             },
    //         ],
    //         gas: '200000', // 200k
    //     };

    //     const result = await signingBitsong.withdrawFromLiquidityPool(poolId, coin, withdrawer, gasFee);
    //     assertIsBroadcastTxSuccess(result);

    //     console.log(result);
    // });

    // it('Should swap 2 tokens', async () => {
    //     const [account] = await wallet.getAccounts();

    //     const requester = account.address;
    //     const poolId = 1;
    //     const offerCoin = parseCoins('10000000ubtsg')[0]; // offer sdk.coin for the swap request, must match the denom in the pool.
    //     const offerCoinFee = parseCoins('15000ubtsg')[0]; // half of offer coin amount * params.swap_fee_rate for reservation to pay fees.
    //     const demandCoinDenom = 'utest'; // denom of demand coin to be exchanged on the swap request, must match the denom in the pool.
    //     const orderPrice = '2'; // limit order price for the order, the price is the exchange ratio of X/Y where X is the amount of the first coin and Y is the amount of the second coin when their denoms are sorted alphabetically.

    //     const gasFee = {
    //         amount: [
    //             {
    //                 denom: Constants.MicroDenom,
    //                 amount: '2000',
    //             },
    //         ],
    //         gas: '200000', // 200k
    //     };

    //     const result = await signingBitsong.swapTokens(requester, poolId, demandCoinDenom, offerCoin, offerCoinFee, orderPrice, gasFee);
    //     assertIsBroadcastTxSuccess(result);

    //     console.log(result);
    // });

    it('Should query all liquidity pools', async () => {
        const response = await bitsong.getLiquidityPools();
        console.log(response);
    });

    it('Should query a liquidity pool', async () => {
        const response = await bitsong.getLiquidityPool(1);
        console.log(response);
    });
});
