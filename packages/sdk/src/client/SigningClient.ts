import { Coin, EncodeObject, encodePubkey, isOfflineDirectSigner, makeAuthInfoBytes, makeSignDoc, OfflineSigner, Registry, TxBodyEncodeObject } from '@cosmjs/proto-signing';
import {
    AminoTypes,
    BroadcastTxResponse,
    SigningStargateClientOptions,
    StdFee,
    SignerData,
    MsgSendEncodeObject,
    MsgDelegateEncodeObject,
    MsgUndelegateEncodeObject,
    MsgWithdrawDelegatorRewardEncodeObject,
    MsgTransferEncodeObject,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { Constants } from '..';
import { MsgEditFanToken, MsgIssueFanToken, MsgMintFanToken, MsgBurnFanToken } from '../codec/fantoken/tx';
import { MsgIssueFanTokenEncodeObject, MsgEditFanTokenEncodeObject, MsgMintFanTokenEncodeObject, MsgBurnFanTokenEncodeObject } from '../messages';
import { bitsongRegistry } from '../registry';
import { MsgCreatePoolEncodeObject, MsgDepositWithinBatchEncodeObject, MsgSwapWithinBatchEncodeObject, MsgWithdrawWithinBatchEncodeObject } from '../messages/Liquidity';
import { MsgCreatePool, MsgDepositWithinBatch, MsgSwapWithinBatch, MsgWithdrawWithinBatch } from '../codec/tendermint/liquidity/v1beta1/tx';
import Long from 'long';
import { Int53, Uint53 } from '@cosmjs/math';
import { BitsongClient } from './Client';
import { assert } from '@cosmjs/utils';
import { encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino } from '@cosmjs/amino';
import { fromBase64 } from '@cosmjs/encoding';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing';
import { MsgDelegate, MsgUndelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx';
import { Height } from 'cosmjs-types/ibc/core/client/v1/client';
import { MsgTransfer } from 'cosmjs-types/ibc/applications/transfer/v1/tx';
import { MsgWithdrawDelegatorReward } from 'cosmjs-types/cosmos/distribution/v1beta1/tx';

export class SigningBitsongClient extends BitsongClient {
    public readonly registry: Registry;
    public readonly broadcastTimeoutMs: number | undefined;
    public readonly broadcastPollIntervalMs: number | undefined;

    private readonly signer: OfflineSigner;
    private readonly aminoTypes: AminoTypes;

    /**
     * Create a Client instance using a tendermint RPC client
     *
     * @param tmClient tendermint RPC client
     * @param signer OfflineSigner '@cosmjs/proto-sign'
     * @param opts SigningStargateClientOptions
     */
    constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, opts: SigningStargateClientOptions) {
        super(tmClient);

        const { registry = bitsongRegistry(), aminoTypes = new AminoTypes({ prefix: opts.prefix }) } = opts;
        this.registry = registry;
        this.aminoTypes = aminoTypes;
        this.signer = signer;
        this.broadcastTimeoutMs = opts.broadcastTimeoutMs;
        this.broadcastPollIntervalMs = opts.broadcastPollIntervalMs;
    }

    /**
     * Creates a new Client for the given endpoint
     * Uses HTTP when the URL schema is http or https, uses WebSockets otherwise
     *
     * @param endpoint Blockchain node RPC url
     * @param signer OfflineSigner '@cosmjs/proto-sign'
     */
    public static connectWithSigner = async (endpoint: string, signer: OfflineSigner): Promise<SigningBitsongClient> => {
        const tmClient = await Tendermint34Client.connect(endpoint);

        const opts: SigningStargateClientOptions = {
            prefix: Constants.Bech32PrefixAccAddr,
            registry: bitsongRegistry(),
        };

        return new SigningBitsongClient(tmClient, signer, opts);
    };

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

    public async signAndBroadcast(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const txRaw = await this.sign(signerAddress, messages, fee, memo);
        const txBytes = TxRaw.encode(txRaw).finish();
        return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
    }

    public async sendTokens(senderAddress: string, recipientAddress: string, amount: readonly Coin[], fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
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

    public async delegateTokens(delegatorAddress: string, validatorAddress: string, amount: Coin, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
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

    public async undelegateTokens(delegatorAddress: string, validatorAddress: string, amount: Coin, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
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

    public async withdrawRewards(delegatorAddress: string, validatorAddress: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
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
        fee: StdFee,
        memo = '',
    ): Promise<BroadcastTxResponse> {
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
    public issueFanToken(symbol: string, name: string, maxSupply: string, description: string, owner: string, issueFee: Coin, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgIssueFanTokenEncodeObject = {
            typeUrl: '/bitsong.fantoken.MsgIssueFanToken',
            value: MsgIssueFanToken.fromPartial({
                symbol: symbol,
                name: name,
                maxSupply: maxSupply,
                description: description,
                owner: owner,
                issueFee: issueFee,
            }),
        };

        return this.signAndBroadcast(owner, [msg], fee, memo);
    }

    /**
     * Edit a fantoken
     * @param
     */
    public editFanToken(symbol: string, mintable: boolean, owner: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgEditFanTokenEncodeObject = {
            typeUrl: '/bitsong.fantoken.MsgEditFanToken',
            value: MsgEditFanToken.fromPartial({
                symbol: symbol,
                mintable: mintable,
                owner: owner,
            }),
        };

        return this.signAndBroadcast(owner, [msg], fee, memo);
    }

    /**
     * Mint a fantoken to a recipient
     * @param
     */
    public mintFanToken(recipient: string, denom: string, amount: string, owner: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgMintFanTokenEncodeObject = {
            typeUrl: '/bitsong.fantoken.MsgMintFanToken',
            value: MsgMintFanToken.fromPartial({
                recipient: recipient,
                denom: denom,
                amount: amount,
                owner: owner,
            }),
        };

        return this.signAndBroadcast(owner, [msg], fee, memo);
    }

    /**
     * Burn a fantoken
     * @param
     */
    public burnFanToken(denom: string, amount: string, sender: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgBurnFanTokenEncodeObject = {
            typeUrl: '/bitsong.fantoken.MsgBurnFanToken',
            value: MsgBurnFanToken.fromPartial({
                denom: denom,
                amount: amount,
                sender: sender,
            }),
        };

        return this.signAndBroadcast(sender, [msg], fee, memo);
    }

    /**
     * Create a new pool
     */
    public createLiquidityPool(depositCoins: Coin[], creator: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgCreatePoolEncodeObject = {
            typeUrl: '/tendermint.liquidity.v1beta1.MsgCreatePool',
            value: MsgCreatePool.fromPartial({
                poolCreatorAddress: creator,
                poolTypeId: 1,
                depositCoins: depositCoins,
            }),
        };

        return this.signAndBroadcast(creator, [msg], fee, memo);
    }

    /**
     * Deposit in a pool
     */
    public depositLiquidityPool(poolId: number, depositCoins: Coin[], depositor: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgDepositWithinBatchEncodeObject = {
            typeUrl: '/tendermint.liquidity.v1beta1.MsgDepositWithinBatch',
            value: MsgDepositWithinBatch.fromPartial({
                depositorAddress: depositor,
                poolId: Long.fromString(new Uint53(poolId).toString()),
                depositCoins: depositCoins,
            }),
        };

        return this.signAndBroadcast(depositor, [msg], fee, memo);
    }

    /**
     * Withdraw liquidity from a pool
     */
    public withdrawFromLiquidityPool(poolId: number, poolCoin: Coin, withdrawer: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgWithdrawWithinBatchEncodeObject = {
            typeUrl: '/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch',
            value: MsgWithdrawWithinBatch.fromPartial({
                withdrawerAddress: withdrawer,
                poolId: Long.fromString(new Uint53(poolId).toString()),
                poolCoin: poolCoin,
            }),
        };

        return this.signAndBroadcast(withdrawer, [msg], fee, memo);
    }

    /**
     * Swap tokens
     */
    public swapTokens(requester: string, poolId: number, demandCoinDenom: string, offerCoin: Coin, offerCoinFee: Coin, orderPrice: string, fee: StdFee, memo = ''): Promise<BroadcastTxResponse> {
        const msg: MsgSwapWithinBatchEncodeObject = {
            typeUrl: '/tendermint.liquidity.v1beta1.MsgSwapWithinBatch',
            value: MsgSwapWithinBatch.fromPartial({
                swapRequesterAddress: requester,
                poolId: Long.fromString(new Uint53(poolId).toString()),
                swapTypeId: 1,
                demandCoinDenom: demandCoinDenom,
                offerCoin: offerCoin,
                offerCoinFee: offerCoinFee,
                orderPrice: orderPrice,
            }),
        };

        return this.signAndBroadcast(requester, [msg], fee, memo);
    }
}
