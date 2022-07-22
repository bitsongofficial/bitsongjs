import { toBase64, toUtf8 } from "@cosmjs/encoding";
import { ripemd160 } from "@noble/hashes/ripemd160";
import { sha256 } from "@noble/hashes/sha256";
import * as secp256k1 from "@noble/secp256k1";
import { bech32 } from "bech32";
import * as bip32 from "bip32";
import * as bip39 from "bip39";
import { SignDoc } from "../../proto/build/cosmos/tx/v1beta1/tx";

export const COIN_TYPE = 639;
export const BECH32_PREFIX = "bitsong";

export type WalletOpts = {
  hdAccountIndex?: number;
  coinType?: number;
  bech32Prefix?: string;
};

export class LegacyWallet {
  public readonly mnemonic: string;
  public readonly hdAccountIndex: number;
  public readonly coinType: number;
  public readonly privateKey: Uint8Array;
  public readonly publicKey: Uint8Array;
  public readonly address: string;
  public readonly bech32Prefix: string;

  constructor(mnemonic: string = "", options: WalletOpts = {}) {
    if (mnemonic === "") {
      mnemonic = bip39.generateMnemonic(256); // 24 words
    }
    this.mnemonic = mnemonic;

    this.hdAccountIndex = options.hdAccountIndex ?? 0;
    this.coinType = options.coinType ?? COIN_TYPE;
    this.bech32Prefix = options.bech32Prefix ?? BECH32_PREFIX;

    const seed = bip39.mnemonicToSeedSync(this.mnemonic);
    const node = bip32.fromSeed(seed);
    const secretHD = node.derivePath(
      `m/44'/${this.coinType}'/0'/0/${this.hdAccountIndex}`,
    );
    const privateKey = secretHD.privateKey;

    if (!privateKey) {
      throw new Error("Failed to derive key pair");
    }

    this.privateKey = new Uint8Array(privateKey);
    this.publicKey = secp256k1.getPublicKey(this.privateKey, true);

    this.address = pubkeyToAddress(this.publicKey, this.bech32Prefix);
  }

  public async getAccounts(): Promise<readonly AccountData[]> {
    return [
      {
        address: this.address,
        algo: "secp256k1",
        pubkey: this.publicKey,
      },
    ];
  }

  public async signAmino(
    signerAddress: string,
    signDoc: StdSignDoc,
  ): Promise<AminoSignResponse> {
    if (signerAddress !== this.address) {
      throw new Error(`Address ${signerAddress} not found in wallet`);
    }

    const messageHash = sha256(serializeStdSignDoc(signDoc));

    const signature = await secp256k1.sign(messageHash, this.privateKey, {
      extraEntropy: true,
      der: false,
    });

    return {
      signed: signDoc,
      signature: encodeSecp256k1Signature(this.publicKey, signature),
    };
  }
}

export function pubkeyToAddress(
  pubkey: Uint8Array,
  prefix: string = "secret",
): string {
  return bech32.encode(prefix, bech32.toWords(ripemd160(sha256(pubkey))));
}

export function serializeStdSignDoc(signDoc: StdSignDoc): Uint8Array {
  return toUtf8(JsonSortedStringify(signDoc));
}

export function encodeSecp256k1Signature(
  pubkey: Uint8Array,
  signature: Uint8Array,
): StdSignature {
  if (signature.length !== 64) {
    throw new Error(
      "Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.",
    );
  }

  return {
    pub_key: encodeSecp256k1Pubkey(pubkey),
    signature: toBase64(signature),
  };
}

export function encodeSecp256k1Pubkey(pubkey: Uint8Array): Pubkey {
  if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
    throw new Error(
      "Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03",
    );
  }
  return {
    type: "tendermint/PubKeySecp256k1",
    value: toBase64(pubkey),
  };
}

function JsonSortedStringify(obj: any): string {
  return JSON.stringify(sortedObject(obj));
}

function sortedObject(obj: any): any {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(sortedObject);
  }
  const sortedKeys = Object.keys(obj).sort();
  const result: Record<string, any> = {};
  sortedKeys.forEach((key) => {
    result[key] = sortedObject(obj[key]);
  });
  return result;
}

export type StdSignDoc = {
  readonly chain_id: string;
  readonly account_number: string;
  readonly sequence: string;
  readonly fee: StdFee;
  readonly msgs: readonly AminoMsg[];
  readonly memo: string;
};

export type StdSignature = {
  readonly pub_key: Pubkey;
  readonly signature: string;
};

export type Pubkey = {
  // type is one of the strings defined in pubkeyType
  // I don't use a string literal union here as that makes trouble with json test data:
  // https://github.com/cosmos/cosmjs/pull/44#pullrequestreview-353280504
  readonly type: string;
  readonly value: any;
};

export type StdFee = {
  readonly amount: readonly Coin[];
  readonly gas: string;
};

export type AminoMsg = {
  type: string;
  value: any;
};

export type Coin = {
  denom: string;
  amount: string;
};

export type AccountData = {
  /** A printable address (typically bech32 encoded) */
  readonly address: string;
  readonly algo: Algo;
  readonly pubkey: Uint8Array;
};

type Algo = "secp256k1" | "ed25519" | "sr25519";

export type AminoSignResponse = {
  /**
   * The sign doc that was signed.
   * This may be different from the input signDoc when the signer modifies it as part of the signing process.
   */
  readonly signed: StdSignDoc;
  readonly signature: StdSignature;
};

export class Wallet extends LegacyWallet {
  public async signDirect(
    address: string,
    signDoc: SignDoc,
  ): Promise<DirectSignResponse> {
    if (address !== this.address) {
      throw new Error(`Address ${address} not found in wallet`);
    }

    const messageHash = sha256(await serializeSignDoc(signDoc));
    const signature = await secp256k1.sign(messageHash, this.privateKey, {
      extraEntropy: true,
      der: false,
    });

    return {
      signed: signDoc,
      signature: encodeSecp256k1Signature(this.publicKey, signature),
    };
  }
}

type DirectSignResponse = {
  /**
   * The sign doc that was signed.
   * This may be different from the input signDoc when the signer modifies it as part of the signing process.
   */
  readonly signed: SignDoc;
  readonly signature: StdSignature;
};

async function serializeSignDoc({
  accountNumber,
  authInfoBytes,
  bodyBytes,
  chainId,
}: SignDoc): Promise<Uint8Array> {
  return SignDoc.encode(
    SignDoc.fromPartial({
      accountNumber: accountNumber,
      authInfoBytes: authInfoBytes,
      bodyBytes: bodyBytes,
      chainId: chainId,
    }),
  ).finish();
}
