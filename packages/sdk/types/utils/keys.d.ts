/**
 * Derives a bech32 wallet address from a public key (secp256k1)
 *
 * @param publicKey public key to derive the address from
 * @param prefix address prefix to use (ex: lum)
 */
export declare const getAddressFromPublicKey: (publicKey: Uint8Array, prefix?: string) => string;
/**
 * Get a public key from a private key (secp256k1)
 *
 * @param privateKey private key to get the public key from
 */
export declare const getPublicKeyFromPrivateKey: (privateKey: Uint8Array) => Promise<Uint8Array>;
/**
 * Get the seed from a mnemonic phrase
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
 *
 * @param mnemonic english mnemonic phrase
 */
export declare const getSeedFromMnemonic: (mnemonic: string) => Promise<Uint8Array>;
/**
 * Get the derivated private key from the provided seed
 *
 * @param seed to derive the private key from
 * @param hdPath derivation path to use
 */
export declare const getPrivateKeyFromSeed: (seed: Uint8Array, hdPath?: string) => Uint8Array;
/**
 * Get the derivated private key from the provided mnemonic
 *
 * @param mnemonic mnemonic phrase
 * @param hdPath derivation path to use
 */
export declare const getPrivateKeyFromMnemonic: (mnemonic: string, hdPath?: string) => Promise<Uint8Array>;
/**
 * Generates a cryptographically secure random private key
 */
export declare const generatePrivateKey: () => Uint8Array;
/**
 * Verify that a wallet address is valid
 *
 * @param address address to check
 * @param prefix prefix to check (will not be checked if not provided)
 */
export declare const isAddressValid: (address: string, prefix?: string | undefined) => boolean;
