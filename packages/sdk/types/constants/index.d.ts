/**
 * BitSong Exponent
 * 1 btsg = 10^6 ubtsg
 */
export declare const Exponent = 6;
/**
 * BitSong Coin denomination
 */
export declare const Denom = "btsg";
/**
 * Micro BitSong Coin denomination
 */
export declare const MicroDenom = "ubtsg";
/**
 * BitSong Bech32 prefix of an account's address
 */
export declare const Bech32PrefixAccAddr = "bitsong";
/**
 * BitSong Bech32 prefix of an account's public key
 */
export declare const Bech32PrefixAccPub: string;
/**
 * BitSong Bech32 prefix of a validator's operator address
 */
export declare const Bech32PrefixValAddr: string;
/**
 * BitSong Bech32 prefix of a validator's operator public key
 */
export declare const Bech32PrefixValPub: string;
/**
 * BitSong Bech32 prefix of a consensus node address
 */
export declare const Bech32PrefixConsAddr: string;
/**
 * BitSong Bech32 prefix of a consensus node public key
 */
export declare const Bech32PrefixConsPub: string;
/**
 * BitSong HDPath
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
 * @see https://github.com/satoshilabs/slips/blob/master/slip-0044.md
 */
export declare const HDPath = "m/44'/639'/0'/";
/**
 * Get a BitSong HDPath for a specified account index
 *
 * @param accountIndex appended at the end of the default bitsong derivation path
 */
export declare const getHdPath: (accountIndex?: number, walletIndex?: number) => string;
/**
 * Private Key length
 */
export declare const PrivateKeyLength = 32;
