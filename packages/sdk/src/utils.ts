import { Bip39, Random, Slip10RawIndex } from '@cosmjs/crypto';

export function makeHdPath(coinType = 118, account = 0) {
  return [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(coinType),
    Slip10RawIndex.hardened(0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(account)
  ];
}

export function bitsongHdPath(account = 0) {
  return makeHdPath(639, account);
}

export function generateEntropy(length: 12 | 15 | 18 | 21 | 24 = 12): Uint8Array {
  const entropyLength = 4 * Math.floor((11 * length) / 33);
  return Random.getBytes(entropyLength);
}

export function generateMnemonic(length: 12 | 15 | 18 | 21 | 24 = 12): string {
  return Bip39.encode(generateEntropy(length)).toString();
}

export { coin } from '@cosmjs/amino'