import { PubKey } from '../codec/cosmos/crypto/secp256k1/keys';
import { Any } from '..//codec/google/protobuf/any';
import { Secp256k1, sha256, ripemd160, EnglishMnemonic, Bip39, Slip10, Slip10Curve, stringToPath, Random } from '@cosmjs/crypto';

import { Bech32 } from './encoding';
import { Bech32PrefixAccAddr, getHdPath, PrivateKeyLength } from '../constants';

/**
 * Derives a bech32 wallet address from a public key (secp256k1)
 *
 * @param publicKey public key to derive the address from
 * @param prefix address prefix to use (ex: lum)
 */
export const getAddressFromPublicKey = (publicKey: Uint8Array, prefix = Bech32PrefixAccAddr) => {
    if (publicKey.length !== 33) {
        throw new Error(`Invalid Secp256k1 pubkey length (compressed): ${publicKey.length}`);
    }
    const hash1 = sha256(publicKey);
    const hash2 = ripemd160(hash1);
    return Bech32.encode(prefix, hash2);
};

/**
 * Get a public key from a private key (secp256k1)
 *
 * @param privateKey private key to get the public key from
 */
export const getPublicKeyFromPrivateKey = async (privateKey: Uint8Array): Promise<Uint8Array> => {
    const { pubkey } = await Secp256k1.makeKeypair(privateKey);
    return Secp256k1.compressPubkey(pubkey);
};

/**
 * Get the seed from a mnemonic phrase
 *
 * @see https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
 *
 * @param mnemonic english mnemonic phrase
 */
export const getSeedFromMnemonic = async (mnemonic: string): Promise<Uint8Array> => {
    const mnemonicChecked = new EnglishMnemonic(mnemonic);
    // TODO: add support for more languages
    return Bip39.mnemonicToSeed(mnemonicChecked);
};

/**
 * Get the derivated private key from the provided seed
 *
 * @param seed to derive the private key from
 * @param hdPath derivation path to use
 */
export const getPrivateKeyFromSeed = (seed: Uint8Array, hdPath = getHdPath(0)): Uint8Array => {
    const { privkey } = Slip10.derivePath(Slip10Curve.Secp256k1, seed, stringToPath(hdPath));
    return privkey;
};

/**
 * Get the derivated private key from the provided mnemonic
 *
 * @param mnemonic mnemonic phrase
 * @param hdPath derivation path to use
 */
export const getPrivateKeyFromMnemonic = async (mnemonic: string, hdPath = getHdPath(0)): Promise<Uint8Array> => {
    const seed = await getSeedFromMnemonic(mnemonic);
    return getPrivateKeyFromSeed(seed, hdPath);
};

/**
 * Generates a cryptographically secure random private key
 */
export const generatePrivateKey = (): Uint8Array => {
    return Random.getBytes(PrivateKeyLength);
};

/**
 * Verify that a wallet address is valid
 *
 * @param address address to check
 * @param prefix prefix to check (will not be checked if not provided)
 */
export const isAddressValid = (address: string, prefix: string | undefined = Bech32PrefixAccAddr): boolean => {
    try {
        const decoded = Bech32.decode(address);
        return (!prefix || prefix === decoded.prefix) && decoded.data.length === 20;
    } catch (err) {
        return false;
    }
};

/**
 * Converts a public key into its protorpc version
 *
 * @param publicKey public key to convert into proto
 */
export const publicKeyToProto = (publicKey: Uint8Array): Any => {
    const pubkeyProto = PubKey.fromPartial({ key: publicKey });
    return Any.fromPartial({
        typeUrl: '/cosmos.crypto.secp256k1.PubKey',
        value: Uint8Array.from(PubKey.encode(pubkeyProto).finish()),
    });
};
