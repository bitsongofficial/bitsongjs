import { createProtobufRpcClient, StargateClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { FanToken } from '../codec/fantoken/fantoken';
import { QueryClientImpl as FtQueryClientImpl, QueryFanTokensResponse } from '../codec/fantoken/query';
import { QueryClientImpl as LiQueryClientImpl, QueryLiquidityPoolResponse, QueryLiquidityPoolsResponse } from '../codec/tendermint/liquidity/v1beta1/query';
import { Any } from '../codec/google/protobuf/any';
import Long from 'long';

const rpcErrMsgNotFound = /rpc error: code = NotFound/i;

export class BitsongClient extends StargateClient {
    constructor(tmClient: Tendermint34Client | undefined) {
        super(tmClient);
    }

    /**
     * Creates a BitsongClient.
     */
    static async connect(endpoint: string): Promise<BitsongClient> {
        const tmClient = await Tendermint34Client.connect(endpoint);
        return new BitsongClient(tmClient);
    }

    public async getFanToken(denom: string): Promise<FanToken | null> {
        const queryService = new FtQueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));

        try {
            const response = await queryService.FanToken({ denom: denom });
            return response.token ?? null;
        } catch (err) {
            if (rpcErrMsgNotFound.test(err)) {
                return null;
            }
            throw err;
        }
    }

    public async getAllFanTokensByOwner(owner: string): Promise<QueryFanTokensResponse> {
        const queryService = new FtQueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));

        return await queryService.FanTokens({ owner: owner });
    }

    public async getLiquidityPools(): Promise<QueryLiquidityPoolsResponse> {
        const queryService = new LiQueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));

        return await queryService.LiquidityPools({});
    }

    public async getLiquidityPool(poolId: number): Promise<QueryLiquidityPoolResponse> {
        const queryService = new LiQueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));

        return await queryService.LiquidityPool({ poolId: Long.fromNumber(poolId, true) });
    }
}
