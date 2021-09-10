import { SignMode } from '../codec/cosmos/tx/signing/v1beta1/signing';
import { Utils, Constants, Types } from '..';
import { Wallet } from '.';

export class PaperWallet extends Wallet {
    private readonly mnemonic?: string;
    private privateKey?: Uint8Array;

    /**
     * Create a PaperWallet instance based on a mnemonic or a private key
     * This constructor is not intended to be used directly as it does not initialize the underlying key pair
     * Better use the provided static PaperWallet builders
     *
     * @param mnemonicOrPrivateKey mnemonic (string) used to derive the private key or private key (Uint8Array)
     */
    constructor(mnemonicOrPrivateKey: string | Uint8Array) {
        super();
        if (Utils.isUint8Array(mnemonicOrPrivateKey)) {
            this.privateKey = mnemonicOrPrivateKey;
        } else {
            this.mnemonic = mnemonicOrPrivateKey;
        }
    }

    signingMode = (): SignMode => {
        return SignMode.SIGN_MODE_DIRECT;
    };

    canChangeAccount = (): boolean => {
        return !!this.mnemonic;
    };

    useAccount = async (hdPath = Constants.getHdPath(0, 0), addressPrefix = Constants.Bech32PrefixAccAddr): Promise<boolean> => {
        if (this.mnemonic) {
            this.privateKey = await Utils.getPrivateKeyFromMnemonic(this.mnemonic, hdPath);
            this.publicKey = await Utils.getPublicKeyFromPrivateKey(this.privateKey);
            this.address = Utils.getAddressFromPublicKey(this.publicKey, addressPrefix);
            return true;
        } else if (this.privateKey) {
            this.publicKey = await Utils.getPublicKeyFromPrivateKey(this.privateKey);
            this.address = Utils.getAddressFromPublicKey(this.publicKey, addressPrefix);
            return false;
        }
        throw new Error('No available mnemonic or private key.');
    };

    sign = async (data: Uint8Array): Promise<Uint8Array> => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signature = await Utils.generateSignature(data, this.privateKey);
        return signature;
    };

    signTransaction = async (doc: Types.Doc): Promise<Uint8Array> => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signerIndex = Utils.uint8IndexOf(
            doc.signers.map((signer) => signer.publicKey),
            this.publicKey as Uint8Array,
        );
        if (signerIndex === -1) {
            throw new Error('Signer not found in document');
        }
        const signDoc = Utils.generateSignDoc(doc, signerIndex, this.signingMode());
        const signBytes = Utils.generateSignDocBytes(signDoc);
        const hashedMessage = Utils.sha256(signBytes);
        const signature = await Utils.generateSignature(hashedMessage, this.privateKey);
        return signature;
    };

    signMessage = async (msg: string): Promise<Types.SignMsg> => {
        if (!this.privateKey || !this.publicKey) {
            throw new Error('No account selected.');
        }
        const signature = await Utils.generateSignature(Utils.sha256(Utils.toAscii(msg)), this.privateKey);
        return {
            address: this.getAddress(),
            publicKey: this.getPublicKey(),
            msg: msg,
            sig: signature,
            version: Constants.WalletSigningVersion,
            signer: Constants.MessageSigner.PAPER,
        };
    };
}
