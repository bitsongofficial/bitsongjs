import { HdPath, Slip10RawIndex } from "@cosmjs/crypto";

/**
 * The BitSong derivation path in the form `m/44'/639'/0'/0/a`
 * with 0-based account index `a`.
 */
export function makeBitsongPath(a: number): HdPath {
  return [
    Slip10RawIndex.hardened(44),
    Slip10RawIndex.hardened(639),
    Slip10RawIndex.hardened(0),
    Slip10RawIndex.normal(0),
    Slip10RawIndex.normal(a),
  ];
}
