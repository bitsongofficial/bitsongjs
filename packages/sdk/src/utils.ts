import { coin } from '@cosmjs/amino'
import { Slip10RawIndex } from '@cosmjs/crypto';

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

export {
  coin
}