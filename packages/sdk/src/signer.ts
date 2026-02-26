import { DirectSigner, AminoSigner } from "@interchainjs/cosmos";
import { Secp256k1HDWallet } from "@interchainjs/cosmos/wallets/index";
import type { OfflineSigner } from "@interchainjs/cosmos/signers/types";
import type { IWallet } from "@interchainjs/types";
import type { BitsongSigner, ICosmosQueryClient } from "./types";
import type { CreateSigningClientOptions, OfflineSignerLike } from "./types";
import { createRpcClient } from "./rpc";

const BITSONG_PREFIX = "bitsong";
const BITSONG_HD_PATH = "m/44'/639'/0'/0/0";

export interface SigningClientResult {
  client: BitsongSigner;
  address: string;
  queryClient: ICosmosQueryClient;
}

export async function createSigningClient(
  options: CreateSigningClientOptions,
): Promise<SigningClientResult> {
  const prefix = options.prefix ?? BITSONG_PREFIX;
  const signerType = options.type ?? "direct";
  const hdPath = options.hdPath ?? BITSONG_HD_PATH;

  // Create the query client — extract endpoint URL string for createRpcClient
  const endpoint =
    typeof options.endpoint === "string"
      ? options.endpoint
      : options.endpoint.url;
  const queryClient = await createRpcClient(endpoint);

  // Resolve signer: mnemonic string or offline signer
  let wallet: Awaited<ReturnType<typeof Secp256k1HDWallet.fromMnemonic>> | undefined;
  let offlineSigner: OfflineSignerLike | undefined;

  if (typeof options.signer === "string") {
    wallet = await Secp256k1HDWallet.fromMnemonic(options.signer, {
      derivations: [{ hdPath, prefix }],
    });
  } else {
    offlineSigner = options.signer;
  }

  const signerConfig = {
    queryClient,
    ...(options.gasPrice ? { gasPrice: options.gasPrice } : {}),
  };

  const auth: OfflineSigner | IWallet = wallet ?? (offlineSigner as OfflineSigner);
  // Cast needed: BaseCosmosSigner implements both ICosmosSigner and ISigningClient
  // at runtime, but interchainjs has a minor type discrepancy in getConverterFromTypeUrl
  // return type (AminoConverter vs AminoConverter | undefined).
  let client: BitsongSigner;
  if (signerType === "amino") {
    client = new AminoSigner(auth, signerConfig) as BitsongSigner;
  } else {
    client = new DirectSigner(auth, signerConfig) as BitsongSigner;
  }

  // Get address from wallet or offline signer
  let address: string;
  if (wallet) {
    const accounts = await wallet.getAccountsData();
    address = accounts[0]!.address;
  } else {
    const accounts = await offlineSigner!.getAccounts();
    address = accounts[0]!.address;
  }

  return { client, address, queryClient };
}
