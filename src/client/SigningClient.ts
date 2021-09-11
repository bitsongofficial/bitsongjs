import { Coin, OfflineSigner } from '@cosmjs/proto-signing';
import { BroadcastTxResponse, createProtobufRpcClient, SigningStargateClient, SigningStargateClientOptions, StdFee } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { Constants } from '..';
import { FanToken } from '../codec/fantoken/fantoken';
import { MsgEditFanToken, MsgIssueFanToken, MsgMintFanToken, MsgBurnFanToken } from '../codec/fantoken/tx';
import { MsgIssueFanTokenEncodeObject, MsgEditFanTokenEncodeObject, MsgMintFanTokenEncodeObject, MsgBurnFanTokenEncodeObject } from '../messages';
import { FantokenExtension, setupFantokenExtension } from '../queries';
import { bitsongRegistry } from '../registry';
import { QueryClientImpl as FtQueryClientImpl, QueryFanTokensResponse } from '../codec/fantoken/query';

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

    public getAllFanTokens = async (owner: string): Promise<QueryFanTokensResponse> => {
        const queryService = new FtQueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
        return await queryService.FanTokens({ owner: owner });
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
}
