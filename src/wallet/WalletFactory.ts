import { Wallet } from './Wallet';
import { PaperWallet } from './PaperWallet';
import { Constants, Utils } from '../';

export class WalletFactory {
    /**
     * Create a Wallet instance based on a private key (secp256k1)
     *
     * @param privateKey wallet private key (secp256k1)
     * @param addressPrefix prefix to use to derive the address from the public key (ex: bitsong)
     */
    static fromPrivateKey = async (privateKey: Uint8Array, addressPrefix = Constants.Bech32PrefixAccAddr): Promise<Wallet> => {
        const wallet = new PaperWallet(privateKey);
        await wallet.useAccount(Constants.getHdPath(0, 0), addressPrefix);
        return wallet;
    };

    /**
     * Create a Wallet instance based on a mnemonic and a derivation path
     *
     * @param mnemonic mnemonic used to derive the private key
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: bitsong)
     */
    static fromMnemonic = async (mnemonic: string, hdPath = Constants.getHdPath(0, 0), addressPrefix = Constants.Bech32PrefixAccAddr): Promise<Wallet> => {
        const wallet = new PaperWallet(mnemonic);
        await wallet.useAccount(hdPath, addressPrefix);
        return wallet;
    };

    /**
     * Create a Wallet instance based on a keystore
     *
     * @param keystore keystore used to decypher the private key
     * @param password keystore password
     * @param addressPrefix prefix to use to derive the address from the public key (ex: bitsong)
     */
    static fromKeyStore = async (keystore: string | Utils.KeyStore, password: string, addressPrefix = Constants.Bech32PrefixAccAddr): Promise<Wallet> => {
        const privateKey = Utils.getPrivateKeyFromKeystore(keystore, password);
        const wallet = new PaperWallet(privateKey);
        await wallet.useAccount(Constants.getHdPath(0, 0), addressPrefix);
        return wallet;
    };

    /**
     * TODO
     * Create a Wallet instance based on a ledger transport
     *
     * @param transport Ledger transport to use (https://github.com/LedgerHQ/ledgerjs)
     * @param hdPath BIP44 derivation path
     * @param addressPrefix prefix to use to derive the address from the public key (ex: bitsong)
     */
    /*static fromLedgerTransport = async (transport: Transport, hdPath = Constants.getHdPath(0, 0), addressPrefix = Constants.Bech32PrefixAccAddr): Promise<Wallet> => {
        const wallet = new LedgerWallet(transport);
        await wallet.useAccount(hdPath, addressPrefix);
        return wallet;
    };*/
}
