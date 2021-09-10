export interface DocSigner {
    /** the account number of the account in state */
    accountNumber: number;
    /** current account sequence */
    sequence: number;
    /** account public key */
    publicKey: Uint8Array;
}
