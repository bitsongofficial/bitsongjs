import { Wallet, WalletFactory, Utils, Constants } from '../src';

describe('Wallet', () => {
    it('Should be identical from mnemonic, privatekey and keystore recovery', async () => {
        const mnemonic = 'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put';
        const privateKey = '0xb8e62c34928025cdd3aef6cbebc68694b5ad9209b2aff6d3891c8e61d22d3a3b';
        const keystore =
            '{"version":1,"id":"f901e6d1-021a-4ac9-b0bb-494101ac52fa","crypto":{"ciphertext":"be5d10547f3c145f08f0a9f5fbb9051ae0175c78a8865c607253460b4cbe002d","cipherparams":{"iv":"9aa1ac8e7eb398e7d13b93e91dcaa191"},"cipher":"aes-256-ctr","kdf":"pbkdf2","kdfparams":{"dklen":32,"salt":"b3eff47ff6d30ff70320bb90187b5c5948104cbda89cdae9daf7ea6d4cacbea3","c":262144,"prf":"hmac-sha256"},"mac":"7b6ce598043d65cff9c78c7fd8fd3d659b845dee56c48daef6bca4accc0e0c5cfaea79a801c4a0dfd86480cd6e792010843923fb7a498dd883c14cd2495f9920"}}';

        const w1 = await WalletFactory.fromMnemonic(mnemonic);
        const w2 = await WalletFactory.fromPrivateKey(Utils.keyFromHex(privateKey));
        const w3 = await WalletFactory.fromKeyStore(keystore, 'bitsong');

        expect(Utils.isAddressValid(w1.getAddress())).toBe(true);
        expect(Utils.isAddressValid(w1.getAddress(), Constants.Bech32PrefixAccAddr)).toBe(true);
        expect(Utils.isAddressValid(w1.getAddress(), undefined)).toBe(true);
        expect(Utils.isAddressValid(w1.getAddress(), 'cosmos')).toBe(false);
        expect(w1.getAddress()).toEqual(w2.getAddress());
        expect(w1.getPublicKey()).toEqual(w2.getPublicKey());
        expect(w1.getAddress()).toEqual(w3.getAddress());
        expect(w1.getPublicKey()).toEqual(w3.getPublicKey());

        const randomPrivateKey = Utils.generatePrivateKey();
        expect(randomPrivateKey).toHaveLength(Constants.PrivateKeyLength);
        expect(WalletFactory.fromPrivateKey(randomPrivateKey)).resolves.toBeInstanceOf(Wallet);

        expect(Utils.generateMnemonic(12).split(' ')).toHaveLength(12);
        expect(Utils.generateMnemonic(24).split(' ')).toHaveLength(24);
        expect(WalletFactory.fromMnemonic(Utils.generateMnemonic(12))).resolves.toBeInstanceOf(Wallet);
        expect(WalletFactory.fromMnemonic(Utils.generateMnemonic(24))).resolves.toBeInstanceOf(Wallet);
    });

    it('Should be able to sign and verify messages', async () => {
        const message = 'BitSong is an awesome music decentralized protocol';

        const mnemonic = 'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put';
        const w1 = await WalletFactory.fromMnemonic(mnemonic);
        const w2 = await WalletFactory.fromMnemonic(Utils.generateMnemonic());

        const signed = await w1.signMessage(message);

        const v1 = await Utils.verifySignMsg(signed);
        expect(v1).toBeTruthy();
        const v2 = await Utils.verifySignMsg(Object.assign({}, signed, { msg: 'Wrong message input' }));
        expect(v2).toBeFalsy();
        const v3 = await Utils.verifySignMsg(Object.assign({}, signed, { publicKey: w2.getPublicKey() }));
        expect(v3).toBeFalsy();
        const v4 = await Utils.verifySignMsg(Object.assign({}, signed, { address: w2.getAddress() }));
        expect(v4).toBeFalsy();
    });
});
