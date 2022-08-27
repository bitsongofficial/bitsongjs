/* eslint-disable node/no-extraneous-import */
import { Coin, EncodeObject, encodePubkey, isOfflineDirectSigner, makeAuthInfoBytes, makeSignDoc, OfflineSigner, Registry, TxBodyEncodeObject } from '@cosmjs/proto-signing';
import {
  AminoTypes,
  DeliverTxResponse,
  SigningStargateClientOptions,
  StdFee,
  SignerData,
  MsgSendEncodeObject,
  MsgDelegateEncodeObject,
  MsgUndelegateEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
  MsgTransferEncodeObject,
  AminoConverters,
  createAuthzAminoConverters,
  createBankAminoConverters,
  createDistributionAminoConverters,
  createGovAminoConverters,
  createStakingAminoConverters,
  createIbcAminoConverters,
  createFreegrantAminoConverters,
  GasPrice,
  calculateFee,
} from '@cosmjs/stargate';
import { HttpEndpoint, Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { MsgIssue, MsgDisableMint, MsgBurn, MsgSetMinter, MsgSetAuthority, MsgSetUri } from '../codec/bitsong/fantoken/v1beta1/tx';
import {
  MsgIssueEncodeObject,
  MsgBurnEncodeObject,
  MsgDisableMintEncodeObject,
  MsgSetAuthorityEncodeObject,
  MsgSetMinterEncodeObject,
  MsgSetUriEncodeObject,
  MsgClaimEncodeObject,
  MsgCreateEncodeObject,
} from '../messages';
import { MsgCreate, MsgClaim } from '../codec/bitsong/merkledrop/v1beta1/tx';
import { bitsongRegistry } from '../registry';
import Long from 'long';
import { Int53, Uint53 } from '@cosmjs/math';
import { BitsongClient } from './Client';
import { assert, assertDefined } from '@cosmjs/utils';
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino } from '@cosmjs/amino';
import { fromBase64 } from '@cosmjs/encoding';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing';
import { MsgDelegate, MsgUndelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx';
import { Height } from 'cosmjs-types/ibc/core/client/v1/client';
import { MsgTransfer } from 'cosmjs-types/ibc/applications/transfer/v1/tx';
import { MsgWithdrawDelegatorReward } from 'cosmjs-types/cosmos/distribution/v1beta1/tx';
import { createVestingAminoConverters } from '@cosmjs/stargate/build/modules';
import { createFantokenAminoConverters, createMerkledropAminoConverters } from './AminoMsgs';

function createDefaultTypes(prefix: string): AminoConverters {
  return {
    ...createAuthzAminoConverters(),
    ...createBankAminoConverters(),
    ...createDistributionAminoConverters(),
    ...createGovAminoConverters(),
    ...createStakingAminoConverters(prefix),
    ...createIbcAminoConverters(),
    ...createFreegrantAminoConverters(),
    ...createVestingAminoConverters(),
    ...createFantokenAminoConverters(),
    ...createMerkledropAminoConverters(),
  };
}

export class SigningBitsongClient extends BitsongClient {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: OfflineSigner;
  private readonly aminoTypes: AminoTypes;
  private readonly gasPrice: GasPrice | undefined;

  /**
   * Create a Client instance using a tendermint RPC client
   *
   * @param tmClient tendermint RPC client
   * @param signer OfflineSigner '@cosmjs/proto-sign'
   * @param opts SigningStargateClientOptions
   */
  constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, opts: SigningStargateClientOptions) {
    super(tmClient);

    const prefix = opts.prefix ?? 'cosmos';
    const { registry = bitsongRegistry(), aminoTypes = new AminoTypes(createDefaultTypes(prefix)) } = opts;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = opts.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = opts.broadcastPollIntervalMs;
    this.gasPrice = opts.gasPrice;
  }

  /**
   * Creates a new Client for the given endpoint
   * Uses HTTP when the URL schema is http or https, uses WebSockets otherwise
   *
   * @param endpoint Blockchain node RPC url
   * @param signer OfflineSigner '@cosmjs/proto-sign'
   */
  public static async connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, options: SigningStargateClientOptions = {}): Promise<SigningBitsongClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new SigningBitsongClient(tmClient, signer, options);
  }

  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   */
  public static async offline(signer: OfflineSigner, options: SigningStargateClientOptions = {}): Promise<SigningBitsongClient> {
    return new SigningBitsongClient(undefined, signer, options);
  }

  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async sign(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, explicitSignerData?: SignerData): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const { accountNumber, sequence } = await this.getSequence(signerAddress);
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
      };
    }

    return isOfflineDirectSigner(this.signer) ? this.signDirect(signerAddress, messages, fee, memo, signerData) : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  private async signAmino(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, { accountNumber, sequence, chainId }: SignerData): Promise<TxRaw> {
    assert(!isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer');
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const { signature, signed } = await this.signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo,
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: signedTxBody,
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes([{ pubkey, sequence: signedSequence }], signed.fee.amount, signedGasLimit, signMode);
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  private async signDirect(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, { accountNumber, sequence, chainId }: SignerData): Promise<TxRaw> {
    assert(isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer');
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: '/cosmos.tx.v1beta1.TxBody',
      value: {
        messages: messages,
        memo: memo,
      },
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes([{ pubkey, sequence }], fee.amount, gasLimit);
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
    const { signature, signed } = await this.signer.signDirect(signerAddress, signDoc);
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
  }

  public async simulate(signerAddress: string, messages: readonly EncodeObject[], memo: string | undefined): Promise<number> {
    const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error('Failed to retrieve account from signer');
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey);
    const { sequence } = await this.getSequence(signerAddress);
    const { gasInfo } = await this.forceGetQueryClient().tx.simulate(anyMsgs, memo, pubkey, sequence);
    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
  }

  public async signAndBroadcast(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee | 'auto' | number, memo = ''): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee === 'auto' || typeof fee === 'number') {
      assertDefined(this.gasPrice, 'Gas price must be set in the client options when auto gas is used.');
      const gasEstimation = await this.simulate(signerAddress, messages, memo);
      const multiplier = typeof fee === 'number' ? fee : 1.3;
      usedFee = calculateFee(Math.round(gasEstimation * multiplier), this.gasPrice);
    } else {
      usedFee = fee;
    }
    const txRaw = await this.sign(signerAddress, messages, usedFee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
  }

  public async sendTokens(senderAddress: string, recipientAddress: string, amount: readonly Coin[], fee: StdFee, memo = ''): Promise<DeliverTxResponse> {
    const sendMsg: MsgSendEncodeObject = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: senderAddress,
        toAddress: recipientAddress,
        amount: [...amount],
      },
    };
    return this.signAndBroadcast(senderAddress, [sendMsg], fee, memo);
  }

  public async delegateTokens(delegatorAddress: string, validatorAddress: string, amount: Coin, fee: StdFee, memo = ''): Promise<DeliverTxResponse> {
    const delegateMsg: MsgDelegateEncodeObject = {
      typeUrl: '/cosmos.staking.v1beta1.MsgDelegate',
      value: MsgDelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [delegateMsg], fee, memo);
  }

  public async undelegateTokens(delegatorAddress: string, validatorAddress: string, amount: Coin, fee: StdFee, memo = ''): Promise<DeliverTxResponse> {
    const undelegateMsg: MsgUndelegateEncodeObject = {
      typeUrl: '/cosmos.staking.v1beta1.MsgUndelegate',
      value: MsgUndelegate.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
        amount: amount,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [undelegateMsg], fee, memo);
  }

  public async withdrawRewards(delegatorAddress: string, validatorAddress: string, fee: StdFee, memo = ''): Promise<DeliverTxResponse> {
    const withdrawMsg: MsgWithdrawDelegatorRewardEncodeObject = {
      typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      value: MsgWithdrawDelegatorReward.fromPartial({
        delegatorAddress: delegatorAddress,
        validatorAddress: validatorAddress,
      }),
    };
    return this.signAndBroadcast(delegatorAddress, [withdrawMsg], fee, memo);
  }

  public async sendIbcTokens(
    senderAddress: string,
    recipientAddress: string,
    transferAmount: Coin,
    sourcePort: string,
    sourceChannel: string,
    timeoutHeight: Height | undefined,
    /** timeout in seconds */
    timeoutTimestamp: number | undefined,
    fee: StdFee | 'auto' | number,
    memo = '',
  ): Promise<DeliverTxResponse> {
    const timeoutTimestampNanoseconds = timeoutTimestamp ? Long.fromNumber(timeoutTimestamp).multiply(1_000_000_000) : undefined;
    const transferMsg: MsgTransferEncodeObject = {
      typeUrl: '/ibc.applications.transfer.v1.MsgTransfer',
      value: MsgTransfer.fromPartial({
        sourcePort: sourcePort,
        sourceChannel: sourceChannel,
        sender: senderAddress,
        receiver: recipientAddress,
        token: transferAmount,
        timeoutHeight: timeoutHeight,
        timeoutTimestamp: timeoutTimestampNanoseconds,
      }),
    };
    return this.signAndBroadcast(senderAddress, [transferMsg], fee, memo);
  }

  /**
   * Issue a new fantoken denom
   * @param
   */
  public issueFanToken(symbol: string, name: string, uri: string, maxSupply: string, authority: string, minter: string, fee: StdFee, memo = ''): Promise<DeliverTxResponse> {
    const msg: MsgIssueEncodeObject = {
      typeUrl: '/bitsong.fantoken.MsgIssue',
      value: MsgIssue.fromPartial({
        authority: authority,
        maxSupply: maxSupply,
        minter: minter,
        name: name,
        symbol: symbol,
        uri: uri,
      }),
    };

    return this.signAndBroadcast(authority, [msg], fee, memo);
  }

  /**
   * Disable the mint of a fantoken
   * @param
   */
  public disableMintFanToken(denom: string, minter: string, fee: StdFee, memo = ''): Promise<DeliverTxResponse> {
    const msg: MsgDisableMintEncodeObject = {
      typeUrl: '/bitsong.fantoken.MsgDisableMint',
      value: MsgDisableMint.fromPartial({
        denom: denom,
        minter: minter,
      }),
    };

    return this.signAndBroadcast(minter, [msg], fee, memo);
  }

  public claimMerkledrop(merkledropId: string, index: string, amount: string, proofs: string[], sender: string, fee: StdFee, memo = ''): Promise<DeliverTxResponse> {
    const msg: MsgClaimEncodeObject = {
      typeUrl: '/bitsong.merkledrop.v1beta1.MsgClaim',
      value: MsgClaim.fromPartial({
        merkledropId: Long.fromString(merkledropId),
        amount: amount,
        index: Long.fromString(index),
        proofs: proofs,
        sender: sender,
      }),
    };

    return this.signAndBroadcast(sender, [msg], fee, memo);
  }
}
