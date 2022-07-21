import { Coin, EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import { BroadcastTxResponse, SigningStargateClientOptions, StdFee, SignerData } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { BitsongClient } from './Client';
import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import { Height } from 'cosmjs-types/ibc/core/client/v1/client';
export declare class SigningBitsongClient extends BitsongClient {
    readonly registry: Registry;
    readonly broadcastTimeoutMs: number | undefined;
    readonly broadcastPollIntervalMs: number | undefined;
    private readonly signer;
    private readonly aminoTypes;
    /**
     * Create a Client instance using a tendermint RPC client
     *
     * @param tmClient tendermint RPC client
     * @param signer OfflineSigner '@cosmjs/proto-sign'
     * @param opts SigningStargateClientOptions
     */
    constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, opts: SigningStargateClientOptions);
    /**
     * Creates a new Client for the given endpoint
     * Uses HTTP when the URL schema is http or https, uses WebSockets otherwise
     *
     * @param endpoint Blockchain node RPC url
     * @param signer OfflineSigner '@cosmjs/proto-sign'
     */
    static connectWithSigner: (endpoint: string, signer: OfflineSigner) => Promise<SigningBitsongClient>;
    /**
     * Creates a client in offline mode.
     *
     * This should only be used in niche cases where you know exactly what you're doing,
     * e.g. when building an offline signing application.
     *
     * When you try to use online functionality with such a signer, an
     * exception will be raised.
     */
    static offline(signer: OfflineSigner, options?: SigningStargateClientOptions): Promise<SigningBitsongClient>;
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
    sign(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo: string, explicitSignerData?: SignerData): Promise<TxRaw>;
    private signAmino;
    private signDirect;
    signAndBroadcast(signerAddress: string, messages: readonly EncodeObject[], fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    sendTokens(senderAddress: string, recipientAddress: string, amount: readonly Coin[], fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    delegateTokens(delegatorAddress: string, validatorAddress: string, amount: Coin, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    undelegateTokens(delegatorAddress: string, validatorAddress: string, amount: Coin, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    withdrawRewards(delegatorAddress: string, validatorAddress: string, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    sendIbcTokens(senderAddress: string, recipientAddress: string, transferAmount: Coin, sourcePort: string, sourceChannel: string, timeoutHeight: Height | undefined, 
    /** timeout in seconds */
    timeoutTimestamp: number | undefined, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    /**
     * Issue a new fantoken denom
     * @param
     */
    issueFanToken(symbol: string, name: string, uri: string, maxSupply: string, authority: string, minter: string, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    /**
     * Disable the mint of a fantoken
     * @param
     */
    disableMintFanToken(denom: string, minter: string, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
    claimMerkledrop(merkledropId: string, index: string, amount: string, proofs: string[], sender: string, fee: StdFee, memo?: string): Promise<BroadcastTxResponse>;
}
