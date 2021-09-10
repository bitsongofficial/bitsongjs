import { MessageSigner } from '../constants';

export interface SignMsg {
    /**
     * Address of the signer
     */
    address: string;

    /**
     * publicKey of the signer
     */
    publicKey: Uint8Array;

    /**
     * Message
     */
    msg: string;

    /**
     * Message signature
     */
    sig: Uint8Array;

    /**
     * Signing version
     */
    version: string;

    /**
     * Signer wallet identifier
     */
    signer: MessageSigner;
}
