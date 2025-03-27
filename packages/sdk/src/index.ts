import type {
  BroadcastParams,
  SignerType,
  SignParams,
  EstimateFeeParams,
  GasPriceType,
} from "./types";
import { DirectSecp256k1HdWallet, type OfflineSigner } from "@cosmjs/proto-signing";
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { getSigningBitsongClient } from '@bitsongjs/telescope'
import { makeHdPath } from "./utils";
import { getChain } from "./chains";
import type { SigningStargateClient } from '@cosmjs/stargate';
import type { Chain } from "@chain-registry/types";
import { GasPrice, calculateFee } from '@cosmjs/stargate';
import { getGasPrice } from "./gas";

export class Client {
  private readonly chain: Chain;
  private readonly offlineSigner: OfflineSigner;
  private readonly stargateClient: SigningStargateClient;

  private constructor(
    chain: Chain,
    offlineSigner: OfflineSigner,
    stargateClient: SigningStargateClient
  ) {
    this.chain = chain;
    this.offlineSigner = offlineSigner;
    this.stargateClient = stargateClient;
  }

  public static async create({
    chain,
    mnemonic,
    signerType = 'auto'
  }: {
    chain?: string | Chain;
    mnemonic: string;
    signerType?: SignerType;
  }) {
    if (!chain) {
      chain = 'bitsong'
    }

    const _chain = typeof chain === 'string' ? getChain(chain) : chain;

    const offlineSigner = await Client.createOfflineSigner(
      mnemonic.trim(),
      _chain,
      signerType || 'auto'
    );

    const stargateClient = await getSigningBitsongClient({ 
      rpcEndpoint: _chain.apis!.rpc![0]!.address,
      signer: offlineSigner
    });

    return new Client(_chain, offlineSigner, stargateClient);
  }

  private static async createOfflineSigner(
    mnemonic: string,
    chain: Chain,
    signerType: SignerType
  ): Promise<OfflineSigner> {
    const options = {
      prefix: chain.bech32_prefix,
      hdPaths: [makeHdPath(chain.slip44, 0)]
    };

    try {
      switch (signerType) {
        case 'amino': {
          return await Secp256k1HdWallet.fromMnemonic(mnemonic, options);
        }
        // eslint-disable-next-line unicorn/no-useless-switch-case
        case 'direct':
        // eslint-disable-next-line unicorn/no-useless-switch-case, no-fallthrough
        case 'auto':
        default: {
          return await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, options);
        }
      }
    } catch (error) {
      throw new Error(
        `Failed to create offline signer: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  public getOfflineSigner(): OfflineSigner {
    return this.offlineSigner;
  }

  public getStargateClient(): SigningStargateClient {
    return this.stargateClient;
  }

  public async sign({
    sender,
    msgs,
    fee = 'auto',
    feeMultiplier = 1.4,
    memo = ''
  }: SignParams) {
    const chainId = await this.stargateClient.getChainId();

    if (!sender) {
      const accounts = await this.getOfflineSigner().getAccounts();
      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts found in the wallet');
      }
      sender = accounts[0]?.address;
      if (!sender) {
        throw new Error('Account address is undefined');
      }
    }

    const { accountNumber, sequence } = await this.stargateClient.getSequence(sender);

    const _fee = fee === 'auto' ? (await this.estimateFee({
        sender,
        msgs,
        feeMultiplier,
        memo
      })) : fee;

    const txRaw = await this.stargateClient.sign(sender, msgs, _fee, memo, {
      accountNumber,
      sequence,
      chainId
    });

    return TxRaw.encode(txRaw).finish();
  }

  public async broadcast({
    txBytes,
    timeoutMs,
    pollIntervalMs
  }: BroadcastParams) {
    return await this.stargateClient.broadcastTx(txBytes, timeoutMs, pollIntervalMs);
  }

  public async signAndBroadcast({
    sender,
    msgs,
    fee,
    memo = '',
    timeoutMs,
    pollIntervalMs
  }: SignParams & BroadcastParams) {
    const txBytes = await this.sign({ sender, msgs, fee, memo });
    return await this.broadcast({ txBytes, timeoutMs, pollIntervalMs });
  }

  public async estimateFee({
    sender,
    msgs,
    gasPrice,
    feeMultiplier = 1.4,
    memo = ''
  }: EstimateFeeParams) {
    if (typeof gasPrice === 'string') {
      gasPrice = GasPrice.fromString(gasPrice)
    }

    if (!gasPrice) {
      gasPrice = await this.getGasPrice();
    }

    if (!sender) {
      const accounts = await this.getOfflineSigner().getAccounts();
      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts found in the wallet');
      }
      sender = accounts[0]?.address;
      if (!sender) {
        throw new Error('Account address is undefined');
      }
    }

    const gasEstimate = await this.stargateClient.simulate(sender, msgs, memo);
    return calculateFee(Math.round(gasEstimate * feeMultiplier), gasPrice);
  }

  public async getGasPrice(gasPriceType: GasPriceType = 'low') {
    return await getGasPrice(this.chain, gasPriceType);
  }
}
