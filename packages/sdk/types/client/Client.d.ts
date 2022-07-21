/// <reference types="long" />
import { Account, AuthExtension, BankExtension, Block, BroadcastTxResponse, Coin, GovExtension, IndexedTx, QueryClient, SearchTxFilter, SearchTxQuery, SequenceResponse, StakingExtension } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { FantokenExtension, MerkledropExtension } from '../queries';
import { QueryFanTokenResponse, QueryFanTokensResponse } from 'src/codec/bitsong/fantoken/v1beta1/query';
import { PageRequest } from 'src/codec/cosmos/base/query/v1beta1/pagination';
import { QueryIndexClaimedResponse, QueryMerkledropResponse } from 'src/codec/bitsong/merkledrop/v1beta1/query';
export declare class BitsongClient {
    private readonly tmClient;
    private readonly queryClient;
    private chainId;
    static connect(endpoint: string): Promise<BitsongClient>;
    protected constructor(tmClient: Tendermint34Client | undefined);
    protected getTmClient(): Tendermint34Client | undefined;
    protected forceGetTmClient(): Tendermint34Client;
    protected getQueryClient(): (QueryClient & AuthExtension & BankExtension & StakingExtension & GovExtension & FantokenExtension & MerkledropExtension) | undefined;
    protected forceGetQueryClient(): QueryClient & AuthExtension & BankExtension & StakingExtension & GovExtension & FantokenExtension & MerkledropExtension;
    getChainId(): Promise<string>;
    getHeight(): Promise<number>;
    getAccount(searchAddress: string): Promise<Account | null>;
    getAccountVerified(searchAddress: string): Promise<Account | null>;
    getSequence(address: string): Promise<SequenceResponse>;
    getBlock(height?: number): Promise<Block>;
    getBalance(address: string, searchDenom: string): Promise<Coin>;
    /**
     * Queries all balances for all denoms that belong to this address.
     *
     * Uses the grpc queries (which iterates over the store internally), and we cannot get
     * proofs from such a method.
     */
    getAllBalances(address: string): Promise<readonly Coin[]>;
    getDelegation(delegatorAddress: string, validatorAddress: string): Promise<Coin | null>;
    getTx(id: string): Promise<IndexedTx | null>;
    searchTx(query: SearchTxQuery, filter?: SearchTxFilter): Promise<readonly IndexedTx[]>;
    disconnect(): void;
    /**
     * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
     *
     * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
     * an error is thrown.
     *
     * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
     *
     * If the transaction is included in a block, a `BroadcastTxResponse` is returned. The caller then
     * usually needs to check for execution success or failure.
     */
    broadcastTx(tx: Uint8Array, timeoutMs?: number, pollIntervalMs?: number): Promise<BroadcastTxResponse>;
    private txsQuery;
    getFanToken(denom: string): Promise<QueryFanTokenResponse>;
    getFanTokensByAuthority(authority: string, pagination?: PageRequest): Promise<QueryFanTokensResponse>;
    getMerkledrop(id: Long): Promise<QueryMerkledropResponse>;
    getMerkledropIndexClaimed(id: Long, index: Long): Promise<QueryIndexClaimedResponse>;
}
