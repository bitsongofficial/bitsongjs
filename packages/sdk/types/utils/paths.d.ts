import { HdPath } from "@cosmjs/crypto";
/**
 * The BitSong derivation path in the form `m/44'/639'/0'/0/a`
 * with 0-based account index `a`.
 */
export declare function makeBitsongPath(a: number): HdPath;
