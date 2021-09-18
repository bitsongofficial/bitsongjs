import { Coin, OfflineSigner } from '@cosmjs/proto-signing';
import { BroadcastTxResponse, createProtobufRpcClient, SigningStargateClient, SigningStargateClientOptions, StdFee } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { Constants } from '..';
import { MsgEditFanToken, MsgIssueFanToken, MsgMintFanToken, MsgBurnFanToken } from '../codec/fantoken/tx';
import { MsgIssueFanTokenEncodeObject, MsgEditFanTokenEncodeObject, MsgMintFanTokenEncodeObject, MsgBurnFanTokenEncodeObject } from '../messages';
import { bitsongRegistry } from '../registry';
import { QueryClientImpl as FtQueryClientImpl, QueryFanTokensResponse } from '../codec/fantoken/query';
import { MsgCreatePoolEncodeObject, MsgDepositWithinBatchEncodeObject, MsgSwapWithinBatchEncodeObject, MsgWithdrawWithinBatchEncodeObject } from '../messages/Liquidity';
import { MsgCreatePool, MsgDepositWithinBatch, MsgSwapWithinBatch, MsgWithdrawWithinBatch } from '../codec/tendermint/liquidity/v1beta1/tx';
import Long from 'long';
import { Uint53, Uint64 } from '@cosmjs/math';

export class SigningBitsongClient extends SigningStargateClient {
    /**
     * Create a Client instance using a tendermint RPC client
     *
     * @param tmClient tendermint RPC client
     * @param signer OfflineSigner '@cosmjs/proto-sign'
     * @param opts SigningStargateClientOptions
     */
    constructor(tmClient: Tendermint34Client, signer: OfflineSigner, opts: SigningStargateClientOptions) {
        super(tmClient, signer, opts);

        // this.tmClient = tmClient;
        // this.queryClient = StargateQueryClient.withExtensions(
        //     tmClient,
        //     StargateSetupAuthExtension,
        //     StargateSetupBankExtension,
        //     StargateDistributionExtension,
        //     StargateStakingExtension,
        //     StargateGovExtension,
        //     setupFantokenExtension,
        // );
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
