import * as _0 from "./fantoken/v1beta1/events";
import * as _1 from "./fantoken/v1beta1/fantoken";
import * as _2 from "./fantoken/v1beta1/genesis";
import * as _3 from "./fantoken/v1beta1/gov";
import * as _4 from "./fantoken/v1beta1/params";
import * as _5 from "./fantoken/v1beta1/query";
import * as _6 from "./fantoken/v1beta1/tx";
import * as _97 from "./fantoken/v1beta1/query.lcd";
import * as _98 from "./fantoken/v1beta1/query.rpc.Query";
import * as _99 from "./fantoken/v1beta1/tx.rpc.msg";
export declare namespace bitsong {
    namespace fantoken {
        const v1beta1: {
            MsgClientImpl: typeof _99.MsgClientImpl;
            QueryClientImpl: typeof _98.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                fanToken(request: _5.QueryFanTokenRequest): Promise<_5.QueryFanTokenResponse>;
                fanTokens(request: _5.QueryFanTokensRequest): Promise<_5.QueryFanTokensResponse>;
                params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _97.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    issue(value: _6.MsgIssue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _6.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _6.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    disableMint(value: _6.MsgDisableMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setMinter(value: _6.MsgSetMinter): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setAuthority(value: _6.MsgSetAuthority): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setUri(value: _6.MsgSetUri): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    issue(value: _6.MsgIssue): {
                        typeUrl: string;
                        value: _6.MsgIssue;
                    };
                    mint(value: _6.MsgMint): {
                        typeUrl: string;
                        value: _6.MsgMint;
                    };
                    burn(value: _6.MsgBurn): {
                        typeUrl: string;
                        value: _6.MsgBurn;
                    };
                    disableMint(value: _6.MsgDisableMint): {
                        typeUrl: string;
                        value: _6.MsgDisableMint;
                    };
                    setMinter(value: _6.MsgSetMinter): {
                        typeUrl: string;
                        value: _6.MsgSetMinter;
                    };
                    setAuthority(value: _6.MsgSetAuthority): {
                        typeUrl: string;
                        value: _6.MsgSetAuthority;
                    };
                    setUri(value: _6.MsgSetUri): {
                        typeUrl: string;
                        value: _6.MsgSetUri;
                    };
                };
                fromPartial: {
                    issue(value: _6.MsgIssue): {
                        typeUrl: string;
                        value: _6.MsgIssue;
                    };
                    mint(value: _6.MsgMint): {
                        typeUrl: string;
                        value: _6.MsgMint;
                    };
                    burn(value: _6.MsgBurn): {
                        typeUrl: string;
                        value: _6.MsgBurn;
                    };
                    disableMint(value: _6.MsgDisableMint): {
                        typeUrl: string;
                        value: _6.MsgDisableMint;
                    };
                    setMinter(value: _6.MsgSetMinter): {
                        typeUrl: string;
                        value: _6.MsgSetMinter;
                    };
                    setAuthority(value: _6.MsgSetAuthority): {
                        typeUrl: string;
                        value: _6.MsgSetAuthority;
                    };
                    setUri(value: _6.MsgSetUri): {
                        typeUrl: string;
                        value: _6.MsgSetUri;
                    };
                };
            };
            AminoConverter: {
                "/bitsong.fantoken.v1beta1.MsgIssue": {
                    aminoType: string;
                    toAmino: ({ symbol, name, maxSupply, authority, minter, uri }: _6.MsgIssue) => {
                        symbol: string;
                        name: string;
                        max_supply: string;
                        authority: string;
                        minter: string;
                        uri: string;
                    };
                    fromAmino: ({ symbol, name, max_supply, authority, minter, uri }: {
                        symbol: string;
                        name: string;
                        max_supply: string;
                        authority: string;
                        minter: string;
                        uri: string;
                    }) => _6.MsgIssue;
                };
                "/bitsong.fantoken.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: ({ recipient, coin, minter }: _6.MsgMint) => {
                        recipient: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        minter: string;
                    };
                    fromAmino: ({ recipient, coin, minter }: {
                        recipient: string;
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        minter: string;
                    }) => _6.MsgMint;
                };
                "/bitsong.fantoken.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ coin, sender }: _6.MsgBurn) => {
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        sender: string;
                    };
                    fromAmino: ({ coin, sender }: {
                        coin: {
                            denom: string;
                            amount: string;
                        };
                        sender: string;
                    }) => _6.MsgBurn;
                };
                "/bitsong.fantoken.v1beta1.MsgDisableMint": {
                    aminoType: string;
                    toAmino: ({ denom, minter }: _6.MsgDisableMint) => {
                        denom: string;
                        minter: string;
                    };
                    fromAmino: ({ denom, minter }: {
                        denom: string;
                        minter: string;
                    }) => _6.MsgDisableMint;
                };
                "/bitsong.fantoken.v1beta1.MsgSetMinter": {
                    aminoType: string;
                    toAmino: ({ denom, oldMinter, newMinter }: _6.MsgSetMinter) => {
                        denom: string;
                        old_minter: string;
                        new_minter: string;
                    };
                    fromAmino: ({ denom, old_minter, new_minter }: {
                        denom: string;
                        old_minter: string;
                        new_minter: string;
                    }) => _6.MsgSetMinter;
                };
                "/bitsong.fantoken.v1beta1.MsgSetAuthority": {
                    aminoType: string;
                    toAmino: ({ denom, oldAuthority, newAuthority }: _6.MsgSetAuthority) => {
                        denom: string;
                        old_authority: string;
                        new_authority: string;
                    };
                    fromAmino: ({ denom, old_authority, new_authority }: {
                        denom: string;
                        old_authority: string;
                        new_authority: string;
                    }) => _6.MsgSetAuthority;
                };
                "/bitsong.fantoken.v1beta1.MsgSetUri": {
                    aminoType: string;
                    toAmino: ({ authority, denom, uri }: _6.MsgSetUri) => {
                        authority: string;
                        denom: string;
                        uri: string;
                    };
                    fromAmino: ({ authority, denom, uri }: {
                        authority: string;
                        denom: string;
                        uri: string;
                    }) => _6.MsgSetUri;
                };
            };
            MsgIssue: {
                encode(message: _6.MsgIssue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgIssue;
                fromPartial(object: any): _6.MsgIssue;
            };
            MsgIssueResponse: {
                encode(_: _6.MsgIssueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgIssueResponse;
                fromPartial(_: any): _6.MsgIssueResponse;
            };
            MsgDisableMint: {
                encode(message: _6.MsgDisableMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgDisableMint;
                fromPartial(object: any): _6.MsgDisableMint;
            };
            MsgDisableMintResponse: {
                encode(_: _6.MsgDisableMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgDisableMintResponse;
                fromPartial(_: any): _6.MsgDisableMintResponse;
            };
            MsgMint: {
                encode(message: _6.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgMint;
                fromPartial(object: any): _6.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _6.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgMintResponse;
                fromPartial(_: any): _6.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _6.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgBurn;
                fromPartial(object: any): _6.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _6.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgBurnResponse;
                fromPartial(_: any): _6.MsgBurnResponse;
            };
            MsgSetMinter: {
                encode(message: _6.MsgSetMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgSetMinter;
                fromPartial(object: any): _6.MsgSetMinter;
            };
            MsgSetMinterResponse: {
                encode(_: _6.MsgSetMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgSetMinterResponse;
                fromPartial(_: any): _6.MsgSetMinterResponse;
            };
            MsgSetAuthority: {
                encode(message: _6.MsgSetAuthority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgSetAuthority;
                fromPartial(object: any): _6.MsgSetAuthority;
            };
            MsgSetAuthorityResponse: {
                encode(_: _6.MsgSetAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgSetAuthorityResponse;
                fromPartial(_: any): _6.MsgSetAuthorityResponse;
            };
            MsgSetUri: {
                encode(message: _6.MsgSetUri, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgSetUri;
                fromPartial(object: any): _6.MsgSetUri;
            };
            MsgSetUriResponse: {
                encode(_: _6.MsgSetUriResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgSetUriResponse;
                fromPartial(_: any): _6.MsgSetUriResponse;
            };
            QueryFanTokenRequest: {
                encode(message: _5.QueryFanTokenRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryFanTokenRequest;
                fromPartial(object: any): _5.QueryFanTokenRequest;
            };
            QueryFanTokenResponse: {
                encode(message: _5.QueryFanTokenResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryFanTokenResponse;
                fromPartial(object: any): _5.QueryFanTokenResponse;
            };
            QueryFanTokensRequest: {
                encode(message: _5.QueryFanTokensRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryFanTokensRequest;
                fromPartial(object: any): _5.QueryFanTokensRequest;
            };
            QueryFanTokensResponse: {
                encode(message: _5.QueryFanTokensResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryFanTokensResponse;
                fromPartial(object: any): _5.QueryFanTokensResponse;
            };
            QueryParamsRequest: {
                encode(_: _5.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsRequest;
                fromPartial(_: any): _5.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _5.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryParamsResponse;
                fromPartial(object: any): _5.QueryParamsResponse;
            };
            Params: {
                encode(message: _4.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Params;
                fromPartial(object: any): _4.Params;
            };
            UpdateFeesProposal: {
                encode(message: _3.UpdateFeesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.UpdateFeesProposal;
                fromPartial(object: any): _3.UpdateFeesProposal;
            };
            UpdateFeesProposalWithDeposit: {
                encode(message: _3.UpdateFeesProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.UpdateFeesProposalWithDeposit;
                fromPartial(object: any): _3.UpdateFeesProposalWithDeposit;
            };
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
                fromPartial(object: any): _2.GenesisState;
            };
            Metadata: {
                encode(message: _1.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Metadata;
                fromPartial(object: any): _1.Metadata;
            };
            FanToken: {
                encode(message: _1.FanToken, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.FanToken;
                fromPartial(object: any): _1.FanToken;
            };
            EventIssue: {
                encode(message: _0.EventIssue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventIssue;
                fromPartial(object: any): _0.EventIssue;
            };
            EventDisableMint: {
                encode(message: _0.EventDisableMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventDisableMint;
                fromPartial(object: any): _0.EventDisableMint;
            };
            EventMint: {
                encode(message: _0.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventMint;
                fromPartial(object: any): _0.EventMint;
            };
            EventBurn: {
                encode(message: _0.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventBurn;
                fromPartial(object: any): _0.EventBurn;
            };
            EventSetAuthority: {
                encode(message: _0.EventSetAuthority, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventSetAuthority;
                fromPartial(object: any): _0.EventSetAuthority;
            };
            EventSetMinter: {
                encode(message: _0.EventSetMinter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventSetMinter;
                fromPartial(object: any): _0.EventSetMinter;
            };
            EventSetUri: {
                encode(message: _0.EventSetUri, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.EventSetUri;
                fromPartial(object: any): _0.EventSetUri;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            bitsong: {
                fantoken: {
                    v1beta1: _99.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            bitsong: {
                fantoken: {
                    v1beta1: {
                        fanToken(request: _5.QueryFanTokenRequest): Promise<_5.QueryFanTokenResponse>;
                        fanTokens(request: _5.QueryFanTokensRequest): Promise<_5.QueryFanTokensResponse>;
                        params(request?: _5.QueryParamsRequest): Promise<_5.QueryParamsResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            bitsong: {
                fantoken: {
                    v1beta1: _97.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
