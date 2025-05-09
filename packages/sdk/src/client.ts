import type {
  BroadcastParams,
  SignerType,
  SignParams,
  EstimateFeeParams,
  GasPriceType,
} from "./types";
import { DirectSecp256k1HdWallet, encodePubkey } from "@cosmjs/proto-signing";
import type { OfflineSigner } from "@cosmjs/proto-signing";
import { Secp256k1HdWallet } from "@cosmjs/amino";
import { getSigningBitsongClient, bitsong, getSigningBitsongClientOptions } from '@bitsongjs/telescope'
import type { StdFee } from '@bitsongjs/telescope'
import { makeHdPath } from "./utils";
import { getChain } from "./chains";
import type { SigningStargateClient } from '@cosmjs/stargate';
import type { Chain } from "@chain-registry/types";
import { GasPrice, calculateFee } from '@cosmjs/stargate';
import { getGasPrice } from "./gas";
import { BankClient } from "./bank";
import { AuthInfo, Fee, Tx, TxBody, TxRaw } from "@bitsongjs/telescope/cosmos/tx/v1beta1/tx";
import { SignMode } from "@bitsongjs/telescope/cosmos/tx/signing/v1beta1/signing";
import { SimulateRequest } from "@bitsongjs/telescope/cosmos/tx/v1beta1/service";
import { fromBech32, toBase64 } from "@cosmjs/encoding";
import { QueryAccountRequest } from "@bitsongjs/telescope/cosmos/auth/v1beta1/query";
import { assertDefined } from "@cosmjs/utils";
import { Uint53 } from "@cosmjs/math";

export class Client {
  private readonly chain: Chain;
  private readonly offlineSigner: OfflineSigner;
  private readonly stargateClient: SigningStargateClient;

  public rpcQueryClient: Awaited<ReturnType<typeof bitsong.ClientFactory.createRPCQueryClient>>;

  public bank: BankClient;

  private constructor(
    chain: Chain,
    offlineSigner: OfflineSigner,
    stargateClient: SigningStargateClient,
    rpcQueryClient: Awaited<ReturnType<typeof bitsong.ClientFactory.createRPCQueryClient>>
  ) {
    this.chain = chain;
    this.offlineSigner = offlineSigner;
    this.stargateClient = stargateClient;
    this.rpcQueryClient = rpcQueryClient;

    this.bank = new BankClient(this);
  }

  public static async create({
    chain,
    mnemonic,
    offlineSigner,
    signerType = 'auto'
  }: {
    chain?: string | Chain;
    mnemonic?: string;
    offlineSigner?: OfflineSigner;
    signerType?: SignerType;
  }) {
    if (!chain) {
      chain = 'bitsong'
    }

    const _chain = typeof chain === 'string' ? getChain(chain) : chain;

    if (mnemonic && offlineSigner) {
      throw new Error('You can only provide either mnemonic or offlineSigner, not both');
    } else if (!mnemonic && !offlineSigner) {
      throw new Error('You must provide either mnemonic or offlineSigner');
    }

    if (!offlineSigner) {
      offlineSigner = await Client.createOfflineSigner(
        mnemonic!.trim(),
        _chain,
        signerType || 'auto'
      );
    }

    const stargateClient = await getSigningBitsongClient({ 
      rpcEndpoint: _chain.apis!.rpc![0]!.address,
      signer: offlineSigner
    });

    const { createRPCQueryClient } = bitsong.ClientFactory
    const rpcQueryClient = await createRPCQueryClient({ rpcEndpoint: _chain.apis!.rpc![0]!.address })

    return new Client(
      _chain,
      offlineSigner,
      stargateClient,
      rpcQueryClient
    );
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

  public async getSenderAddress(): Promise<string> {
    const accounts = await this.getOfflineSigner().getAccounts();
    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found in the wallet');
    }

    const sender = accounts[0]?.address;
    if (!sender) {
      throw new Error('Account address is undefined');
    }

    return sender;
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
      sender = await this.getSenderAddress();
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
  }: SignParams & Omit<BroadcastParams, 'txBytes'>) {
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

    const gasEstimate = await this.stargateClient.simulate(sender, msgs, memo);
    return calculateFee(Math.round(gasEstimate * feeMultiplier), gasPrice);
  }

  /**
   * Estimates the gas consumption for a transaction without broadcasting it.
   *
   * This function constructs a simulated transaction using the provided messages and sender address,
   * then queries the chain to estimate gas consumption without broadcasting the transaction.
   *
   * @param {Object} params - The parameters for the simulation.
   * @param {string|Chain} [params.chain='bitsong'] - The target blockchain or its identifier. Defaults to 'bitsong'.
   * @param {readonly EncodeObject[]} params.messages - The transaction messages to simulate.
   * @param {string} [params.memo=''] - Optional memo to include in the transaction.
   * @param {string} params.sender - Bech32 address of the sender/account initiating the transaction.
   * 
   * @returns {Promise<StdFee>} The estimated gas used for the transaction.
   *
   * @example
   * const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;
   * const msg = send({
   *   fromAddress: 'bitsong1...',
   *   toAddress: 'bitsong1...',
   *   amount: [coin(1000, "ubtsg")],
   * });
   *
   * const gasUsed = await Client.experimental_simulate({
   *   sender: 'bitsong1...',
   *   messages: [msg],
   * });
   */
  public static async experimental_estimateFee({
    chain = 'bitsong',
    sender,
    msgs,
    gasPrice,
    feeMultiplier = 1.4,
    memo = ''
  }: EstimateFeeParams): Promise<StdFee> {
    const _chain = typeof chain === 'string' ? getChain(chain) : chain;

    if (typeof gasPrice === 'string') {
      gasPrice = GasPrice.fromString(gasPrice)
    }

    if (!gasPrice) {
      gasPrice = await getGasPrice(chain, 'low');
    }

    const { createRPCQueryClient } = bitsong.ClientFactory
    const rpcQueryClient = await createRPCQueryClient({ rpcEndpoint: _chain.apis!.rpc![0]!.address })

    const { account } = await rpcQueryClient.cosmos.auth.v1beta1.account(
      QueryAccountRequest.fromPartial({
        address: sender
      })
    )

    const sequence = (account && 'sequence' in account) ? account.sequence : BigInt(0);

    const { registry } = getSigningBitsongClientOptions()
    
    const anyMsgs = msgs.map((m) => registry.encodeAsAny(m));

    const tx = Tx.fromPartial({
      authInfo: AuthInfo.fromPartial({
        fee: Fee.fromPartial({}),
        signerInfos: [{
          publicKey: encodePubkey({
            type: "tendermint/PubKeySecp256k1",
            value: toBase64(fromBech32(sender).data),
          }),
          sequence,
          modeInfo: {
            single: {
              mode: SignMode.SIGN_MODE_UNSPECIFIED
            }
          }
        }]
      }),
      body: TxBody.fromPartial({
        messages: anyMsgs,
        memo: memo,
      }),
      signatures: [new Uint8Array()]
    })

    const request = SimulateRequest.fromPartial({
      txBytes: Tx.encode(tx).finish(),
    })

    const { gasInfo } = await rpcQueryClient.cosmos.tx.v1beta1.simulate(request)
    assertDefined(gasInfo)
    
    const gasEstimate = Uint53.fromString(gasInfo.gasUsed.toString()).toNumber()
    const fee = calculateFee(Math.round(gasEstimate * feeMultiplier), gasPrice);
    
    return { ...fee, amount: [...fee.amount] };
  }

  public async getGasPrice(gasPriceType: GasPriceType = 'low') {
    return await getGasPrice(this.chain, gasPriceType);
  }
}