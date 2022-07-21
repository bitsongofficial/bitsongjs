import { Bech32, toHex, fromHex, toBase64, fromBase64, toAscii, fromAscii, toUtf8, fromUtf8, toRfc3339, fromRfc3339 } from '@cosmjs/encoding';
import { sha256 } from '@cosmjs/crypto';
/**
 * Sha3 hash
 *
 * @param hex hex bytes to hash
 */
export declare const sha3: (hex: string) => string;
/**
 * Convert a Uint8Array key into its hexadecimal version
 *
 * @param key (should be secp256k1 but works with anything though)
 * @param xPrefix whether or not to prefix the returned hex value by "0x"
 */
export declare const keyToHex: (key: Uint8Array, xPrefix?: boolean) => string;
/**
 * Convert an hex key into its Uint8Array verison
 *
 * @param hexKey hexadecimal key to convert
 */
export declare const keyFromHex: (hexKey: string) => Uint8Array;
/**
 * Converts the provided data recursively in order to obtain a json usable version by removing
 * complex types and making it serializable
 *
 * - Uint8Array will be converted to HEX
 * - Date will be converted to ISO string
 * - Anything else will not be touched
 *
 * @param data data to convert (can be anything)
 */
export declare const toJSON: (data: unknown) => unknown;
export { sha256, Bech32, toHex, fromHex, toBase64, fromBase64, toAscii, fromAscii, toUtf8, fromUtf8, toRfc3339, fromRfc3339 };
