import * as _9 from "./auth/v1beta1/auth";
import * as _10 from "./auth/v1beta1/genesis";
import * as _11 from "./auth/v1beta1/query";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./bank/v1beta1/authz";
import * as _18 from "./bank/v1beta1/bank";
import * as _19 from "./bank/v1beta1/genesis";
import * as _20 from "./bank/v1beta1/query";
import * as _21 from "./bank/v1beta1/tx";
import * as _22 from "./base/abci/v1beta1/abci";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/multisig/keys";
import * as _29 from "./crypto/secp256k1/keys";
import * as _30 from "./crypto/secp256r1/keys";
import * as _31 from "./distribution/v1beta1/distribution";
import * as _32 from "./distribution/v1beta1/genesis";
import * as _33 from "./distribution/v1beta1/query";
import * as _34 from "./distribution/v1beta1/tx";
import * as _35 from "./gov/v1beta1/genesis";
import * as _36 from "./gov/v1beta1/gov";
import * as _37 from "./gov/v1beta1/query";
import * as _38 from "./gov/v1beta1/tx";
import * as _39 from "./staking/v1beta1/authz";
import * as _40 from "./staking/v1beta1/genesis";
import * as _41 from "./staking/v1beta1/query";
import * as _42 from "./staking/v1beta1/staking";
import * as _43 from "./staking/v1beta1/tx";
import * as _44 from "./tx/signing/v1beta1/signing";
import * as _45 from "./tx/v1beta1/service";
import * as _46 from "./tx/v1beta1/tx";
import * as _47 from "./upgrade/v1beta1/query";
import * as _48 from "./upgrade/v1beta1/upgrade";
import * as _114 from "./auth/v1beta1/query.lcd";
import * as _115 from "./authz/v1beta1/query.lcd";
import * as _116 from "./bank/v1beta1/query.lcd";
import * as _117 from "./base/node/v1beta1/query.lcd";
import * as _118 from "./distribution/v1beta1/query.lcd";
import * as _119 from "./gov/v1beta1/query.lcd";
import * as _120 from "./staking/v1beta1/query.lcd";
import * as _121 from "./tx/v1beta1/service.lcd";
import * as _122 from "./upgrade/v1beta1/query.lcd";
import * as _123 from "./auth/v1beta1/query.rpc.Query";
import * as _124 from "./authz/v1beta1/query.rpc.Query";
import * as _125 from "./bank/v1beta1/query.rpc.Query";
import * as _126 from "./base/node/v1beta1/query.rpc.Service";
import * as _127 from "./distribution/v1beta1/query.rpc.Query";
import * as _128 from "./gov/v1beta1/query.rpc.Query";
import * as _129 from "./staking/v1beta1/query.rpc.Query";
import * as _130 from "./tx/v1beta1/service.rpc.Service";
import * as _131 from "./upgrade/v1beta1/query.rpc.Query";
import * as _132 from "./authz/v1beta1/tx.rpc.msg";
import * as _133 from "./bank/v1beta1/tx.rpc.msg";
import * as _134 from "./distribution/v1beta1/tx.rpc.msg";
import * as _135 from "./gov/v1beta1/tx.rpc.msg";
import * as _136 from "./staking/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _123.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _11.QueryAccountsRequest): Promise<_11.QueryAccountsResponse>;
                account(request: _11.QueryAccountRequest): Promise<_11.QueryAccountResponse>;
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                moduleAccountByName(request: _11.QueryModuleAccountByNameRequest): Promise<_11.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _114.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _11.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAccountsRequest;
                fromPartial(object: any): _11.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _11.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAccountsResponse;
                fromPartial(object: any): _11.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _11.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAccountRequest;
                fromPartial(object: any): _11.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _11.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAccountResponse;
                fromPartial(object: any): _11.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _11.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsRequest;
                fromPartial(_: any): _11.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _11.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsResponse;
                fromPartial(object: any): _11.QueryParamsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _11.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryModuleAccountByNameRequest;
                fromPartial(object: any): _11.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _11.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryModuleAccountByNameResponse;
                fromPartial(object: any): _11.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromPartial(object: any): _10.GenesisState;
            };
            BaseAccount: {
                encode(message: _9.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.BaseAccount;
                fromPartial(object: any): _9.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _9.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ModuleAccount;
                fromPartial(object: any): _9.ModuleAccount;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Params;
                fromPartial(object: any): _9.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _132.MsgClientImpl;
            QueryClientImpl: typeof _124.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _115.LCDQueryClient;
            MsgGrant: {
                encode(message: _16.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgGrant;
                fromPartial(object: any): _16.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _16.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgExecResponse;
                fromPartial(object: any): _16.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _16.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgExec;
                fromPartial(object: any): _16.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _16.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgGrantResponse;
                fromPartial(_: any): _16.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _16.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgRevoke;
                fromPartial(object: any): _16.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _16.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgRevokeResponse;
                fromPartial(_: any): _16.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _15.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGrantsRequest;
                fromPartial(object: any): _15.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _15.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGrantsResponse;
                fromPartial(object: any): _15.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _15.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranterGrantsRequest;
                fromPartial(object: any): _15.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _15.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranterGrantsResponse;
                fromPartial(object: any): _15.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _15.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranteeGrantsRequest;
                fromPartial(object: any): _15.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _15.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryGranteeGrantsResponse;
                fromPartial(object: any): _15.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisState;
                fromPartial(object: any): _14.GenesisState;
            };
            EventGrant: {
                encode(message: _13.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.EventGrant;
                fromPartial(object: any): _13.EventGrant;
            };
            EventRevoke: {
                encode(message: _13.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.EventRevoke;
                fromPartial(object: any): _13.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _12.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenericAuthorization;
                fromPartial(object: any): _12.GenericAuthorization;
            };
            Grant: {
                encode(message: _12.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Grant;
                fromPartial(object: any): _12.Grant;
            };
            GrantAuthorization: {
                encode(message: _12.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GrantAuthorization;
                fromPartial(object: any): _12.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _133.MsgClientImpl;
            QueryClientImpl: typeof _125.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _20.QueryBalanceRequest): Promise<_20.QueryBalanceResponse>;
                allBalances(request: _20.QueryAllBalancesRequest): Promise<_20.QueryAllBalancesResponse>;
                spendableBalances(request: _20.QuerySpendableBalancesRequest): Promise<_20.QuerySpendableBalancesResponse>;
                totalSupply(request?: _20.QueryTotalSupplyRequest): Promise<_20.QueryTotalSupplyResponse>;
                supplyOf(request: _20.QuerySupplyOfRequest): Promise<_20.QuerySupplyOfResponse>;
                params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                denomMetadata(request: _20.QueryDenomMetadataRequest): Promise<_20.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _20.QueryDenomsMetadataRequest): Promise<_20.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _116.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _21.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _21.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _21.MsgSend): {
                        typeUrl: string;
                        value: _21.MsgSend;
                    };
                    multiSend(value: _21.MsgMultiSend): {
                        typeUrl: string;
                        value: _21.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _21.MsgSend): {
                        typeUrl: string;
                        value: _21.MsgSend;
                    };
                    multiSend(value: _21.MsgMultiSend): {
                        typeUrl: string;
                        value: _21.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _21.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _21.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _21.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _21.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _21.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgSend;
                fromPartial(object: any): _21.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _21.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgSendResponse;
                fromPartial(_: any): _21.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _21.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgMultiSend;
                fromPartial(object: any): _21.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _21.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgMultiSendResponse;
                fromPartial(_: any): _21.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _20.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryBalanceRequest;
                fromPartial(object: any): _20.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _20.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryBalanceResponse;
                fromPartial(object: any): _20.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _20.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryAllBalancesRequest;
                fromPartial(object: any): _20.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _20.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryAllBalancesResponse;
                fromPartial(object: any): _20.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _20.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QuerySpendableBalancesRequest;
                fromPartial(object: any): _20.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _20.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QuerySpendableBalancesResponse;
                fromPartial(object: any): _20.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _20.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryTotalSupplyRequest;
                fromPartial(object: any): _20.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _20.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryTotalSupplyResponse;
                fromPartial(object: any): _20.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _20.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QuerySupplyOfRequest;
                fromPartial(object: any): _20.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _20.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QuerySupplyOfResponse;
                fromPartial(object: any): _20.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _20.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryParamsRequest;
                fromPartial(_: any): _20.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _20.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryParamsResponse;
                fromPartial(object: any): _20.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _20.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDenomsMetadataRequest;
                fromPartial(object: any): _20.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _20.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDenomsMetadataResponse;
                fromPartial(object: any): _20.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _20.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDenomMetadataRequest;
                fromPartial(object: any): _20.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _20.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryDenomMetadataResponse;
                fromPartial(object: any): _20.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GenesisState;
                fromPartial(object: any): _19.GenesisState;
            };
            Balance: {
                encode(message: _19.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Balance;
                fromPartial(object: any): _19.Balance;
            };
            Params: {
                encode(message: _18.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Params;
                fromPartial(object: any): _18.Params;
            };
            SendEnabled: {
                encode(message: _18.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SendEnabled;
                fromPartial(object: any): _18.SendEnabled;
            };
            Input: {
                encode(message: _18.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Input;
                fromPartial(object: any): _18.Input;
            };
            Output: {
                encode(message: _18.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Output;
                fromPartial(object: any): _18.Output;
            };
            Supply: {
                encode(message: _18.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Supply;
                fromPartial(object: any): _18.Supply;
            };
            DenomUnit: {
                encode(message: _18.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DenomUnit;
                fromPartial(object: any): _18.DenomUnit;
            };
            Metadata: {
                encode(message: _18.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Metadata;
                fromPartial(object: any): _18.Metadata;
            };
            SendAuthorization: {
                encode(message: _17.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SendAuthorization;
                fromPartial(object: any): _17.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _22.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TxResponse;
                    fromPartial(object: any): _22.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _22.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ABCIMessageLog;
                    fromPartial(object: any): _22.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _22.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.StringEvent;
                    fromPartial(object: any): _22.StringEvent;
                };
                Attribute: {
                    encode(message: _22.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Attribute;
                    fromPartial(object: any): _22.Attribute;
                };
                GasInfo: {
                    encode(message: _22.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GasInfo;
                    fromPartial(object: any): _22.GasInfo;
                };
                Result: {
                    encode(message: _22.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Result;
                    fromPartial(object: any): _22.Result;
                };
                SimulationResponse: {
                    encode(message: _22.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SimulationResponse;
                    fromPartial(object: any): _22.SimulationResponse;
                };
                MsgData: {
                    encode(message: _22.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.MsgData;
                    fromPartial(object: any): _22.MsgData;
                };
                TxMsgData: {
                    encode(message: _22.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TxMsgData;
                    fromPartial(object: any): _22.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _22.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SearchTxsResult;
                    fromPartial(object: any): _22.SearchTxsResult;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _126.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _23.ConfigRequest): Promise<_23.ConfigResponse>;
                };
                LCDQueryClient: typeof _117.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _23.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ConfigRequest;
                    fromPartial(_: any): _23.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _23.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ConfigResponse;
                    fromPartial(object: any): _23.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _24.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PageRequest;
                    fromPartial(object: any): _24.PageRequest;
                };
                PageResponse: {
                    encode(message: _24.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PageResponse;
                    fromPartial(object: any): _24.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _25.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AppDescriptor;
                    fromPartial(object: any): _25.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _25.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TxDescriptor;
                    fromPartial(object: any): _25.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _25.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.AuthnDescriptor;
                    fromPartial(object: any): _25.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _25.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.SigningModeDescriptor;
                    fromPartial(object: any): _25.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _25.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ChainDescriptor;
                    fromPartial(object: any): _25.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _25.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CodecDescriptor;
                    fromPartial(object: any): _25.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _25.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceDescriptor;
                    fromPartial(object: any): _25.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _25.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceImplementerDescriptor;
                    fromPartial(object: any): _25.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _25.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: any): _25.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _25.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ConfigurationDescriptor;
                    fromPartial(object: any): _25.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _25.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgDescriptor;
                    fromPartial(object: any): _25.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _25.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetAuthnDescriptorRequest;
                    fromPartial(_: any): _25.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _25.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetAuthnDescriptorResponse;
                    fromPartial(object: any): _25.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _25.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetChainDescriptorRequest;
                    fromPartial(_: any): _25.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _25.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetChainDescriptorResponse;
                    fromPartial(object: any): _25.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _25.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetCodecDescriptorRequest;
                    fromPartial(_: any): _25.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _25.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetCodecDescriptorResponse;
                    fromPartial(object: any): _25.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _25.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetConfigurationDescriptorRequest;
                    fromPartial(_: any): _25.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _25.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetConfigurationDescriptorResponse;
                    fromPartial(object: any): _25.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _25.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetQueryServicesDescriptorRequest;
                    fromPartial(_: any): _25.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _25.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetQueryServicesDescriptorResponse;
                    fromPartial(object: any): _25.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _25.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetTxDescriptorRequest;
                    fromPartial(_: any): _25.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _25.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GetTxDescriptorResponse;
                    fromPartial(object: any): _25.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _25.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryServicesDescriptor;
                    fromPartial(object: any): _25.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _25.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryServiceDescriptor;
                    fromPartial(object: any): _25.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _25.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryMethodDescriptor;
                    fromPartial(object: any): _25.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _26.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Coin;
                fromPartial(object: any): _26.Coin;
            };
            DecCoin: {
                encode(message: _26.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DecCoin;
                fromPartial(object: any): _26.DecCoin;
            };
            IntProto: {
                encode(message: _26.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.IntProto;
                fromPartial(object: any): _26.IntProto;
            };
            DecProto: {
                encode(message: _26.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DecProto;
                fromPartial(object: any): _26.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _27.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PubKey;
                fromPartial(object: any): _27.PubKey;
            };
            PrivKey: {
                encode(message: _27.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.PrivKey;
                fromPartial(object: any): _27.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _28.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.LegacyAminoPubKey;
                fromPartial(object: any): _28.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _29.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.PubKey;
                fromPartial(object: any): _29.PubKey;
            };
            PrivKey: {
                encode(message: _29.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.PrivKey;
                fromPartial(object: any): _29.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _30.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PubKey;
                fromPartial(object: any): _30.PubKey;
            };
            PrivKey: {
                encode(message: _30.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PrivKey;
                fromPartial(object: any): _30.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _134.MsgClientImpl;
            QueryClientImpl: typeof _127.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                validatorOutstandingRewards(request: _33.QueryValidatorOutstandingRewardsRequest): Promise<_33.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _33.QueryValidatorCommissionRequest): Promise<_33.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _33.QueryValidatorSlashesRequest): Promise<_33.QueryValidatorSlashesResponse>;
                delegationRewards(request: _33.QueryDelegationRewardsRequest): Promise<_33.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _33.QueryDelegationTotalRewardsRequest): Promise<_33.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _33.QueryDelegatorValidatorsRequest): Promise<_33.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _33.QueryDelegatorWithdrawAddressRequest): Promise<_33.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _33.QueryCommunityPoolRequest): Promise<_33.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _118.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _34.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _34.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _34.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _34.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _34.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _34.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _34.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _34.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _34.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _34.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _34.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _34.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _34.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _34.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _34.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _34.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _34.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _34.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _34.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _34.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _34.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _34.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _34.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _34.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _34.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _34.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _34.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _34.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _34.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSetWithdrawAddress;
                fromPartial(object: any): _34.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _34.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgSetWithdrawAddressResponse;
                fromPartial(_: any): _34.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _34.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawDelegatorReward;
                fromPartial(object: any): _34.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _34.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: any): _34.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _34.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawValidatorCommission;
                fromPartial(object: any): _34.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _34.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: any): _34.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _34.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgFundCommunityPool;
                fromPartial(object: any): _34.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _34.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.MsgFundCommunityPoolResponse;
                fromPartial(_: any): _34.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _33.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsRequest;
                fromPartial(_: any): _33.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _33.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryParamsResponse;
                fromPartial(object: any): _33.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _33.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: any): _33.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _33.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: any): _33.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _33.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorCommissionRequest;
                fromPartial(object: any): _33.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _33.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorCommissionResponse;
                fromPartial(object: any): _33.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _33.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorSlashesRequest;
                fromPartial(object: any): _33.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _33.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryValidatorSlashesResponse;
                fromPartial(object: any): _33.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _33.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationRewardsRequest;
                fromPartial(object: any): _33.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _33.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationRewardsResponse;
                fromPartial(object: any): _33.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _33.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationTotalRewardsRequest;
                fromPartial(object: any): _33.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _33.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegationTotalRewardsResponse;
                fromPartial(object: any): _33.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _33.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _33.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _33.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _33.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _33.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: any): _33.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _33.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: any): _33.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _33.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryCommunityPoolRequest;
                fromPartial(_: any): _33.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _33.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.QueryCommunityPoolResponse;
                fromPartial(object: any): _33.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _32.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DelegatorWithdrawInfo;
                fromPartial(object: any): _32.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _32.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorOutstandingRewardsRecord;
                fromPartial(object: any): _32.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _32.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: any): _32.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _32.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorHistoricalRewardsRecord;
                fromPartial(object: any): _32.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _32.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorCurrentRewardsRecord;
                fromPartial(object: any): _32.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _32.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DelegatorStartingInfoRecord;
                fromPartial(object: any): _32.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _32.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorSlashEventRecord;
                fromPartial(object: any): _32.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _32.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GenesisState;
                fromPartial(object: any): _32.GenesisState;
            };
            Params: {
                encode(message: _31.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Params;
                fromPartial(object: any): _31.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _31.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorHistoricalRewards;
                fromPartial(object: any): _31.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _31.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorCurrentRewards;
                fromPartial(object: any): _31.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _31.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorAccumulatedCommission;
                fromPartial(object: any): _31.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _31.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorOutstandingRewards;
                fromPartial(object: any): _31.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _31.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorSlashEvent;
                fromPartial(object: any): _31.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _31.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.ValidatorSlashEvents;
                fromPartial(object: any): _31.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _31.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.FeePool;
                fromPartial(object: any): _31.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _31.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.CommunityPoolSpendProposal;
                fromPartial(object: any): _31.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _31.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DelegatorStartingInfo;
                fromPartial(object: any): _31.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _31.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DelegationDelegatorReward;
                fromPartial(object: any): _31.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _31.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: any): _31.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _135.MsgClientImpl;
            QueryClientImpl: typeof _128.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _37.QueryProposalRequest): Promise<_37.QueryProposalResponse>;
                proposals(request: _37.QueryProposalsRequest): Promise<_37.QueryProposalsResponse>;
                vote(request: _37.QueryVoteRequest): Promise<_37.QueryVoteResponse>;
                votes(request: _37.QueryVotesRequest): Promise<_37.QueryVotesResponse>;
                params(request: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                deposit(request: _37.QueryDepositRequest): Promise<_37.QueryDepositResponse>;
                deposits(request: _37.QueryDepositsRequest): Promise<_37.QueryDepositsResponse>;
                tallyResult(request: _37.QueryTallyResultRequest): Promise<_37.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _119.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _38.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _38.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _38.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _38.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _38.MsgSubmitProposal;
                    };
                    vote(value: _38.MsgVote): {
                        typeUrl: string;
                        value: _38.MsgVote;
                    };
                    voteWeighted(value: _38.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _38.MsgVoteWeighted;
                    };
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: _38.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _38.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _38.MsgSubmitProposal;
                    };
                    vote(value: _38.MsgVote): {
                        typeUrl: string;
                        value: _38.MsgVote;
                    };
                    voteWeighted(value: _38.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _38.MsgVoteWeighted;
                    };
                    deposit(value: _38.MsgDeposit): {
                        typeUrl: string;
                        value: _38.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _38.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _38.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _38.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _38.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _38.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _38.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _38.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _38.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _38.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSubmitProposal;
                fromPartial(object: any): _38.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _38.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgSubmitProposalResponse;
                fromPartial(object: any): _38.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _38.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgVote;
                fromPartial(object: any): _38.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _38.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgVoteResponse;
                fromPartial(_: any): _38.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _38.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgVoteWeighted;
                fromPartial(object: any): _38.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _38.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgVoteWeightedResponse;
                fromPartial(_: any): _38.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _38.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDeposit;
                fromPartial(object: any): _38.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _38.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDepositResponse;
                fromPartial(_: any): _38.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _37.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryProposalRequest;
                fromPartial(object: any): _37.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _37.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryProposalResponse;
                fromPartial(object: any): _37.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _37.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryProposalsRequest;
                fromPartial(object: any): _37.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _37.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryProposalsResponse;
                fromPartial(object: any): _37.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _37.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryVoteRequest;
                fromPartial(object: any): _37.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _37.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryVoteResponse;
                fromPartial(object: any): _37.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _37.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryVotesRequest;
                fromPartial(object: any): _37.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _37.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryVotesResponse;
                fromPartial(object: any): _37.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _37.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsRequest;
                fromPartial(object: any): _37.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _37.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryParamsResponse;
                fromPartial(object: any): _37.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _37.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDepositRequest;
                fromPartial(object: any): _37.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _37.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDepositResponse;
                fromPartial(object: any): _37.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _37.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDepositsRequest;
                fromPartial(object: any): _37.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _37.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryDepositsResponse;
                fromPartial(object: any): _37.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _37.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryTallyResultRequest;
                fromPartial(object: any): _37.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _37.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryTallyResultResponse;
                fromPartial(object: any): _37.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _36.VoteOption;
            voteOptionToJSON(object: _36.VoteOption): string;
            proposalStatusFromJSON(object: any): _36.ProposalStatus;
            proposalStatusToJSON(object: _36.ProposalStatus): string;
            VoteOption: typeof _36.VoteOption;
            VoteOptionSDKType: typeof _36.VoteOption;
            ProposalStatus: typeof _36.ProposalStatus;
            ProposalStatusSDKType: typeof _36.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _36.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.WeightedVoteOption;
                fromPartial(object: any): _36.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _36.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.TextProposal;
                fromPartial(object: any): _36.TextProposal;
            };
            Deposit: {
                encode(message: _36.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Deposit;
                fromPartial(object: any): _36.Deposit;
            };
            Proposal: {
                encode(message: _36.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Proposal;
                fromPartial(object: any): _36.Proposal;
            };
            TallyResult: {
                encode(message: _36.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.TallyResult;
                fromPartial(object: any): _36.TallyResult;
            };
            Vote: {
                encode(message: _36.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Vote;
                fromPartial(object: any): _36.Vote;
            };
            DepositParams: {
                encode(message: _36.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DepositParams;
                fromPartial(object: any): _36.DepositParams;
            };
            VotingParams: {
                encode(message: _36.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.VotingParams;
                fromPartial(object: any): _36.VotingParams;
            };
            TallyParams: {
                encode(message: _36.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.TallyParams;
                fromPartial(object: any): _36.TallyParams;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromPartial(object: any): _35.GenesisState;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _136.MsgClientImpl;
            QueryClientImpl: typeof _129.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _41.QueryValidatorsRequest): Promise<_41.QueryValidatorsResponse>;
                validator(request: _41.QueryValidatorRequest): Promise<_41.QueryValidatorResponse>;
                validatorDelegations(request: _41.QueryValidatorDelegationsRequest): Promise<_41.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _41.QueryValidatorUnbondingDelegationsRequest): Promise<_41.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _41.QueryDelegationRequest): Promise<_41.QueryDelegationResponse>;
                unbondingDelegation(request: _41.QueryUnbondingDelegationRequest): Promise<_41.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _41.QueryDelegatorDelegationsRequest): Promise<_41.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _41.QueryDelegatorUnbondingDelegationsRequest): Promise<_41.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _41.QueryRedelegationsRequest): Promise<_41.QueryRedelegationsResponse>;
                delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _41.QueryDelegatorValidatorRequest): Promise<_41.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _41.QueryHistoricalInfoRequest): Promise<_41.QueryHistoricalInfoResponse>;
                pool(request?: _41.QueryPoolRequest): Promise<_41.QueryPoolResponse>;
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _120.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _43.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _43.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _43.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _43.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _43.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _43.MsgCreateValidator): {
                        typeUrl: string;
                        value: _43.MsgCreateValidator;
                    };
                    editValidator(value: _43.MsgEditValidator): {
                        typeUrl: string;
                        value: _43.MsgEditValidator;
                    };
                    delegate(value: _43.MsgDelegate): {
                        typeUrl: string;
                        value: _43.MsgDelegate;
                    };
                    beginRedelegate(value: _43.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _43.MsgBeginRedelegate;
                    };
                    undelegate(value: _43.MsgUndelegate): {
                        typeUrl: string;
                        value: _43.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _43.MsgCreateValidator): {
                        typeUrl: string;
                        value: _43.MsgCreateValidator;
                    };
                    editValidator(value: _43.MsgEditValidator): {
                        typeUrl: string;
                        value: _43.MsgEditValidator;
                    };
                    delegate(value: _43.MsgDelegate): {
                        typeUrl: string;
                        value: _43.MsgDelegate;
                    };
                    beginRedelegate(value: _43.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _43.MsgBeginRedelegate;
                    };
                    undelegate(value: _43.MsgUndelegate): {
                        typeUrl: string;
                        value: _43.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _43.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _43.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _43.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _43.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _43.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _43.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _43.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _43.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _43.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _43.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _43.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgCreateValidator;
                fromPartial(object: any): _43.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _43.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgCreateValidatorResponse;
                fromPartial(_: any): _43.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _43.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgEditValidator;
                fromPartial(object: any): _43.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _43.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgEditValidatorResponse;
                fromPartial(_: any): _43.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _43.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgDelegate;
                fromPartial(object: any): _43.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _43.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgDelegateResponse;
                fromPartial(_: any): _43.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _43.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgBeginRedelegate;
                fromPartial(object: any): _43.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _43.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgBeginRedelegateResponse;
                fromPartial(object: any): _43.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _43.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgUndelegate;
                fromPartial(object: any): _43.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _43.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgUndelegateResponse;
                fromPartial(object: any): _43.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _42.BondStatus;
            bondStatusToJSON(object: _42.BondStatus): string;
            BondStatus: typeof _42.BondStatus;
            BondStatusSDKType: typeof _42.BondStatus;
            HistoricalInfo: {
                encode(message: _42.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.HistoricalInfo;
                fromPartial(object: any): _42.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _42.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.CommissionRates;
                fromPartial(object: any): _42.CommissionRates;
            };
            Commission: {
                encode(message: _42.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Commission;
                fromPartial(object: any): _42.Commission;
            };
            Description: {
                encode(message: _42.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Description;
                fromPartial(object: any): _42.Description;
            };
            Validator: {
                encode(message: _42.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Validator;
                fromPartial(object: any): _42.Validator;
            };
            ValAddresses: {
                encode(message: _42.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.ValAddresses;
                fromPartial(object: any): _42.ValAddresses;
            };
            DVPair: {
                encode(message: _42.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DVPair;
                fromPartial(object: any): _42.DVPair;
            };
            DVPairs: {
                encode(message: _42.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DVPairs;
                fromPartial(object: any): _42.DVPairs;
            };
            DVVTriplet: {
                encode(message: _42.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DVVTriplet;
                fromPartial(object: any): _42.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _42.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DVVTriplets;
                fromPartial(object: any): _42.DVVTriplets;
            };
            Delegation: {
                encode(message: _42.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Delegation;
                fromPartial(object: any): _42.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _42.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.UnbondingDelegation;
                fromPartial(object: any): _42.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _42.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.UnbondingDelegationEntry;
                fromPartial(object: any): _42.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _42.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.RedelegationEntry;
                fromPartial(object: any): _42.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _42.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Redelegation;
                fromPartial(object: any): _42.Redelegation;
            };
            Params: {
                encode(message: _42.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Params;
                fromPartial(object: any): _42.Params;
            };
            DelegationResponse: {
                encode(message: _42.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DelegationResponse;
                fromPartial(object: any): _42.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _42.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.RedelegationEntryResponse;
                fromPartial(object: any): _42.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _42.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.RedelegationResponse;
                fromPartial(object: any): _42.RedelegationResponse;
            };
            Pool: {
                encode(message: _42.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Pool;
                fromPartial(object: any): _42.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _41.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorsRequest;
                fromPartial(object: any): _41.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _41.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorsResponse;
                fromPartial(object: any): _41.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _41.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorRequest;
                fromPartial(object: any): _41.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _41.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorResponse;
                fromPartial(object: any): _41.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _41.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorDelegationsRequest;
                fromPartial(object: any): _41.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _41.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorDelegationsResponse;
                fromPartial(object: any): _41.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _41.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: any): _41.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _41.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: any): _41.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _41.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationRequest;
                fromPartial(object: any): _41.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _41.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegationResponse;
                fromPartial(object: any): _41.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _41.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryUnbondingDelegationRequest;
                fromPartial(object: any): _41.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _41.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryUnbondingDelegationResponse;
                fromPartial(object: any): _41.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _41.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorDelegationsRequest;
                fromPartial(object: any): _41.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _41.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorDelegationsResponse;
                fromPartial(object: any): _41.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _41.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: any): _41.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _41.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: any): _41.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _41.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryRedelegationsRequest;
                fromPartial(object: any): _41.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _41.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryRedelegationsResponse;
                fromPartial(object: any): _41.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _41.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _41.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _41.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _41.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _41.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorRequest;
                fromPartial(object: any): _41.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _41.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryDelegatorValidatorResponse;
                fromPartial(object: any): _41.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _41.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryHistoricalInfoRequest;
                fromPartial(object: any): _41.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _41.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryHistoricalInfoResponse;
                fromPartial(object: any): _41.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _41.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryPoolRequest;
                fromPartial(_: any): _41.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _41.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryPoolResponse;
                fromPartial(object: any): _41.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsRequest;
                fromPartial(_: any): _41.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsResponse;
                fromPartial(object: any): _41.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromPartial(object: any): _40.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _40.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.LastValidatorPower;
                fromPartial(object: any): _40.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _39.AuthorizationType;
            authorizationTypeToJSON(object: _39.AuthorizationType): string;
            AuthorizationType: typeof _39.AuthorizationType;
            AuthorizationTypeSDKType: typeof _39.AuthorizationType;
            StakeAuthorization: {
                encode(message: _39.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.StakeAuthorization;
                fromPartial(object: any): _39.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _39.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.StakeAuthorization_Validators;
                fromPartial(object: any): _39.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _44.SignMode;
                signModeToJSON(object: _44.SignMode): string;
                SignMode: typeof _44.SignMode;
                SignModeSDKType: typeof _44.SignMode;
                SignatureDescriptors: {
                    encode(message: _44.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SignatureDescriptors;
                    fromPartial(object: any): _44.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _44.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SignatureDescriptor;
                    fromPartial(object: any): _44.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _44.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SignatureDescriptor_Data;
                    fromPartial(object: any): _44.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _44.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SignatureDescriptor_Data_Single;
                    fromPartial(object: any): _44.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _44.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SignatureDescriptor_Data_Multi;
                    fromPartial(object: any): _44.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _130.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _45.SimulateRequest): Promise<_45.SimulateResponse>;
                getTx(request: _45.GetTxRequest): Promise<_45.GetTxResponse>;
                broadcastTx(request: _45.BroadcastTxRequest): Promise<_45.BroadcastTxResponse>;
                getTxsEvent(request: _45.GetTxsEventRequest): Promise<_45.GetTxsEventResponse>;
                getBlockWithTxs(request: _45.GetBlockWithTxsRequest): Promise<_45.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _121.LCDQueryClient;
            Tx: {
                encode(message: _46.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Tx;
                fromPartial(object: any): _46.Tx;
            };
            TxRaw: {
                encode(message: _46.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.TxRaw;
                fromPartial(object: any): _46.TxRaw;
            };
            SignDoc: {
                encode(message: _46.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SignDoc;
                fromPartial(object: any): _46.SignDoc;
            };
            TxBody: {
                encode(message: _46.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.TxBody;
                fromPartial(object: any): _46.TxBody;
            };
            AuthInfo: {
                encode(message: _46.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.AuthInfo;
                fromPartial(object: any): _46.AuthInfo;
            };
            SignerInfo: {
                encode(message: _46.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SignerInfo;
                fromPartial(object: any): _46.SignerInfo;
            };
            ModeInfo: {
                encode(message: _46.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ModeInfo;
                fromPartial(object: any): _46.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _46.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ModeInfo_Single;
                fromPartial(object: any): _46.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _46.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ModeInfo_Multi;
                fromPartial(object: any): _46.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _46.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Fee;
                fromPartial(object: any): _46.Fee;
            };
            orderByFromJSON(object: any): _45.OrderBy;
            orderByToJSON(object: _45.OrderBy): string;
            broadcastModeFromJSON(object: any): _45.BroadcastMode;
            broadcastModeToJSON(object: _45.BroadcastMode): string;
            OrderBy: typeof _45.OrderBy;
            OrderBySDKType: typeof _45.OrderBy;
            BroadcastMode: typeof _45.BroadcastMode;
            BroadcastModeSDKType: typeof _45.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _45.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetTxsEventRequest;
                fromPartial(object: any): _45.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _45.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetTxsEventResponse;
                fromPartial(object: any): _45.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _45.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.BroadcastTxRequest;
                fromPartial(object: any): _45.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _45.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.BroadcastTxResponse;
                fromPartial(object: any): _45.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _45.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.SimulateRequest;
                fromPartial(object: any): _45.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _45.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.SimulateResponse;
                fromPartial(object: any): _45.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _45.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetTxRequest;
                fromPartial(object: any): _45.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _45.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetTxResponse;
                fromPartial(object: any): _45.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _45.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetBlockWithTxsRequest;
                fromPartial(object: any): _45.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _45.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GetBlockWithTxsResponse;
                fromPartial(object: any): _45.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _131.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _47.QueryCurrentPlanRequest): Promise<_47.QueryCurrentPlanResponse>;
                appliedPlan(request: _47.QueryAppliedPlanRequest): Promise<_47.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _47.QueryUpgradedConsensusStateRequest): Promise<_47.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _47.QueryModuleVersionsRequest): Promise<_47.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _122.LCDQueryClient;
            Plan: {
                encode(message: _48.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Plan;
                fromPartial(object: any): _48.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _48.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SoftwareUpgradeProposal;
                fromPartial(object: any): _48.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _48.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.CancelSoftwareUpgradeProposal;
                fromPartial(object: any): _48.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _48.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ModuleVersion;
                fromPartial(object: any): _48.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _47.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCurrentPlanRequest;
                fromPartial(_: any): _47.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _47.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCurrentPlanResponse;
                fromPartial(object: any): _47.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _47.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAppliedPlanRequest;
                fromPartial(object: any): _47.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _47.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAppliedPlanResponse;
                fromPartial(object: any): _47.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _47.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryUpgradedConsensusStateRequest;
                fromPartial(object: any): _47.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _47.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryUpgradedConsensusStateResponse;
                fromPartial(object: any): _47.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _47.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryModuleVersionsRequest;
                fromPartial(object: any): _47.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _47.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryModuleVersionsResponse;
                fromPartial(object: any): _47.QueryModuleVersionsResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _132.MsgClientImpl;
                };
                bank: {
                    v1beta1: _133.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _134.MsgClientImpl;
                };
                gov: {
                    v1beta1: _135.MsgClientImpl;
                };
                staking: {
                    v1beta1: _136.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _11.QueryAccountsRequest): Promise<_11.QueryAccountsResponse>;
                        account(request: _11.QueryAccountRequest): Promise<_11.QueryAccountResponse>;
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        moduleAccountByName(request: _11.QueryModuleAccountByNameRequest): Promise<_11.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _15.QueryGrantsRequest): Promise<_15.QueryGrantsResponse>;
                        granterGrants(request: _15.QueryGranterGrantsRequest): Promise<_15.QueryGranterGrantsResponse>;
                        granteeGrants(request: _15.QueryGranteeGrantsRequest): Promise<_15.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _20.QueryBalanceRequest): Promise<_20.QueryBalanceResponse>;
                        allBalances(request: _20.QueryAllBalancesRequest): Promise<_20.QueryAllBalancesResponse>;
                        spendableBalances(request: _20.QuerySpendableBalancesRequest): Promise<_20.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _20.QueryTotalSupplyRequest): Promise<_20.QueryTotalSupplyResponse>;
                        supplyOf(request: _20.QuerySupplyOfRequest): Promise<_20.QuerySupplyOfResponse>;
                        params(request?: _20.QueryParamsRequest): Promise<_20.QueryParamsResponse>;
                        denomMetadata(request: _20.QueryDenomMetadataRequest): Promise<_20.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _20.QueryDenomsMetadataRequest): Promise<_20.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _23.ConfigRequest): Promise<_23.ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _33.QueryParamsRequest): Promise<_33.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _33.QueryValidatorOutstandingRewardsRequest): Promise<_33.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _33.QueryValidatorCommissionRequest): Promise<_33.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _33.QueryValidatorSlashesRequest): Promise<_33.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _33.QueryDelegationRewardsRequest): Promise<_33.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _33.QueryDelegationTotalRewardsRequest): Promise<_33.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _33.QueryDelegatorValidatorsRequest): Promise<_33.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _33.QueryDelegatorWithdrawAddressRequest): Promise<_33.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _33.QueryCommunityPoolRequest): Promise<_33.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _37.QueryProposalRequest): Promise<_37.QueryProposalResponse>;
                        proposals(request: _37.QueryProposalsRequest): Promise<_37.QueryProposalsResponse>;
                        vote(request: _37.QueryVoteRequest): Promise<_37.QueryVoteResponse>;
                        votes(request: _37.QueryVotesRequest): Promise<_37.QueryVotesResponse>;
                        params(request: _37.QueryParamsRequest): Promise<_37.QueryParamsResponse>;
                        deposit(request: _37.QueryDepositRequest): Promise<_37.QueryDepositResponse>;
                        deposits(request: _37.QueryDepositsRequest): Promise<_37.QueryDepositsResponse>;
                        tallyResult(request: _37.QueryTallyResultRequest): Promise<_37.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _41.QueryValidatorsRequest): Promise<_41.QueryValidatorsResponse>;
                        validator(request: _41.QueryValidatorRequest): Promise<_41.QueryValidatorResponse>;
                        validatorDelegations(request: _41.QueryValidatorDelegationsRequest): Promise<_41.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _41.QueryValidatorUnbondingDelegationsRequest): Promise<_41.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _41.QueryDelegationRequest): Promise<_41.QueryDelegationResponse>;
                        unbondingDelegation(request: _41.QueryUnbondingDelegationRequest): Promise<_41.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _41.QueryDelegatorDelegationsRequest): Promise<_41.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _41.QueryDelegatorUnbondingDelegationsRequest): Promise<_41.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _41.QueryRedelegationsRequest): Promise<_41.QueryRedelegationsResponse>;
                        delegatorValidators(request: _41.QueryDelegatorValidatorsRequest): Promise<_41.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _41.QueryDelegatorValidatorRequest): Promise<_41.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _41.QueryHistoricalInfoRequest): Promise<_41.QueryHistoricalInfoResponse>;
                        pool(request?: _41.QueryPoolRequest): Promise<_41.QueryPoolResponse>;
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _45.SimulateRequest): Promise<_45.SimulateResponse>;
                        getTx(request: _45.GetTxRequest): Promise<_45.GetTxResponse>;
                        broadcastTx(request: _45.BroadcastTxRequest): Promise<_45.BroadcastTxResponse>;
                        getTxsEvent(request: _45.GetTxsEventRequest): Promise<_45.GetTxsEventResponse>;
                        getBlockWithTxs(request: _45.GetBlockWithTxsRequest): Promise<_45.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _47.QueryCurrentPlanRequest): Promise<_47.QueryCurrentPlanResponse>;
                        appliedPlan(request: _47.QueryAppliedPlanRequest): Promise<_47.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _47.QueryUpgradedConsensusStateRequest): Promise<_47.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _47.QueryModuleVersionsRequest): Promise<_47.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _114.LCDQueryClient;
                };
                authz: {
                    v1beta1: _115.LCDQueryClient;
                };
                bank: {
                    v1beta1: _116.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _117.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _118.LCDQueryClient;
                };
                gov: {
                    v1beta1: _119.LCDQueryClient;
                };
                staking: {
                    v1beta1: _120.LCDQueryClient;
                };
                tx: {
                    v1beta1: _121.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _122.LCDQueryClient;
                };
            };
        }>;
    };
}
