import * as _49 from "./wasm/v1/genesis";
import * as _50 from "./wasm/v1/ibc";
import * as _51 from "./wasm/v1/proposal";
import * as _52 from "./wasm/v1/query";
import * as _53 from "./wasm/v1/tx";
import * as _54 from "./wasm/v1/types";
import * as _139 from "./wasm/v1/query.lcd";
import * as _140 from "./wasm/v1/query.rpc.Query";
import * as _141 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            QueryClientImpl: typeof _140.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _52.QueryContractInfoRequest): Promise<_52.QueryContractInfoResponse>;
                contractHistory(request: _52.QueryContractHistoryRequest): Promise<_52.QueryContractHistoryResponse>;
                contractsByCode(request: _52.QueryContractsByCodeRequest): Promise<_52.QueryContractsByCodeResponse>;
                allContractState(request: _52.QueryAllContractStateRequest): Promise<_52.QueryAllContractStateResponse>;
                rawContractState(request: _52.QueryRawContractStateRequest): Promise<_52.QueryRawContractStateResponse>;
                smartContractState(request: _52.QuerySmartContractStateRequest): Promise<_52.QuerySmartContractStateResponse>;
                code(request: _52.QueryCodeRequest): Promise<_52.QueryCodeResponse>;
                codes(request?: _52.QueryCodesRequest): Promise<_52.QueryCodesResponse>;
                pinnedCodes(request?: _52.QueryPinnedCodesRequest): Promise<_52.QueryPinnedCodesResponse>;
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _53.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _53.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _53.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _53.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _53.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _53.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _53.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _53.MsgStoreCode): {
                        typeUrl: string;
                        value: _53.MsgStoreCode;
                    };
                    instantiateContract(value: _53.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _53.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _53.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _53.MsgInstantiateContract2;
                    };
                    executeContract(value: _53.MsgExecuteContract): {
                        typeUrl: string;
                        value: _53.MsgExecuteContract;
                    };
                    migrateContract(value: _53.MsgMigrateContract): {
                        typeUrl: string;
                        value: _53.MsgMigrateContract;
                    };
                    updateAdmin(value: _53.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _53.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _53.MsgClearAdmin): {
                        typeUrl: string;
                        value: _53.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _53.MsgStoreCode): {
                        typeUrl: string;
                        value: _53.MsgStoreCode;
                    };
                    instantiateContract(value: _53.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _53.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _53.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _53.MsgInstantiateContract2;
                    };
                    executeContract(value: _53.MsgExecuteContract): {
                        typeUrl: string;
                        value: _53.MsgExecuteContract;
                    };
                    migrateContract(value: _53.MsgMigrateContract): {
                        typeUrl: string;
                        value: _53.MsgMigrateContract;
                    };
                    updateAdmin(value: _53.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _53.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _53.MsgClearAdmin): {
                        typeUrl: string;
                        value: _53.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _53.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _53.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _53.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _53.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _53.MsgInstantiateContract2) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _53.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _53.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _53.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _53.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _53.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _53.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _53.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _53.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _53.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _54.AccessType;
            accessTypeToJSON(object: _54.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _54.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _54.ContractCodeHistoryOperationType): string;
            AccessType: typeof _54.AccessType;
            AccessTypeSDKType: typeof _54.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _54.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _54.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _54.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.AccessTypeParam;
                fromPartial(object: any): _54.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _54.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.AccessConfig;
                fromPartial(object: any): _54.AccessConfig;
            };
            Params: {
                encode(message: _54.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Params;
                fromPartial(object: any): _54.Params;
            };
            CodeInfo: {
                encode(message: _54.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.CodeInfo;
                fromPartial(object: any): _54.CodeInfo;
            };
            ContractInfo: {
                encode(message: _54.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ContractInfo;
                fromPartial(object: any): _54.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _54.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ContractCodeHistoryEntry;
                fromPartial(object: any): _54.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _54.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.AbsoluteTxPosition;
                fromPartial(object: any): _54.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _54.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Model;
                fromPartial(object: any): _54.Model;
            };
            MsgStoreCode: {
                encode(message: _53.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgStoreCode;
                fromPartial(object: any): _53.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _53.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgStoreCodeResponse;
                fromPartial(object: any): _53.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _53.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgInstantiateContract;
                fromPartial(object: any): _53.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _53.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgInstantiateContract2;
                fromPartial(object: any): _53.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _53.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgInstantiateContractResponse;
                fromPartial(object: any): _53.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _53.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgInstantiateContract2Response;
                fromPartial(object: any): _53.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _53.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgExecuteContract;
                fromPartial(object: any): _53.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _53.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgExecuteContractResponse;
                fromPartial(object: any): _53.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _53.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgMigrateContract;
                fromPartial(object: any): _53.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _53.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgMigrateContractResponse;
                fromPartial(object: any): _53.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _53.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgUpdateAdmin;
                fromPartial(object: any): _53.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _53.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgUpdateAdminResponse;
                fromPartial(_: any): _53.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _53.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgClearAdmin;
                fromPartial(object: any): _53.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _53.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.MsgClearAdminResponse;
                fromPartial(_: any): _53.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _52.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryContractInfoRequest;
                fromPartial(object: any): _52.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _52.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryContractInfoResponse;
                fromPartial(object: any): _52.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _52.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryContractHistoryRequest;
                fromPartial(object: any): _52.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _52.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryContractHistoryResponse;
                fromPartial(object: any): _52.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _52.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryContractsByCodeRequest;
                fromPartial(object: any): _52.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _52.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryContractsByCodeResponse;
                fromPartial(object: any): _52.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _52.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllContractStateRequest;
                fromPartial(object: any): _52.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _52.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAllContractStateResponse;
                fromPartial(object: any): _52.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _52.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryRawContractStateRequest;
                fromPartial(object: any): _52.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _52.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryRawContractStateResponse;
                fromPartial(object: any): _52.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _52.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QuerySmartContractStateRequest;
                fromPartial(object: any): _52.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _52.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QuerySmartContractStateResponse;
                fromPartial(object: any): _52.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _52.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCodeRequest;
                fromPartial(object: any): _52.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _52.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.CodeInfoResponse;
                fromPartial(object: any): _52.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _52.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCodeResponse;
                fromPartial(object: any): _52.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _52.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCodesRequest;
                fromPartial(object: any): _52.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _52.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryCodesResponse;
                fromPartial(object: any): _52.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _52.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryPinnedCodesRequest;
                fromPartial(object: any): _52.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _52.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryPinnedCodesResponse;
                fromPartial(object: any): _52.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromPartial(_: any): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromPartial(object: any): _52.QueryParamsResponse;
            };
            StoreCodeProposal: {
                encode(message: _51.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.StoreCodeProposal;
                fromPartial(object: any): _51.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _51.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.InstantiateContractProposal;
                fromPartial(object: any): _51.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _51.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MigrateContractProposal;
                fromPartial(object: any): _51.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _51.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SudoContractProposal;
                fromPartial(object: any): _51.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _51.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ExecuteContractProposal;
                fromPartial(object: any): _51.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _51.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.UpdateAdminProposal;
                fromPartial(object: any): _51.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _51.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ClearAdminProposal;
                fromPartial(object: any): _51.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _51.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.PinCodesProposal;
                fromPartial(object: any): _51.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _51.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.UnpinCodesProposal;
                fromPartial(object: any): _51.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _51.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.AccessConfigUpdate;
                fromPartial(object: any): _51.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _51.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.UpdateInstantiateConfigProposal;
                fromPartial(object: any): _51.UpdateInstantiateConfigProposal;
            };
            MsgIBCSend: {
                encode(message: _50.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgIBCSend;
                fromPartial(object: any): _50.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _50.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgIBCCloseChannel;
                fromPartial(object: any): _50.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState;
                fromPartial(object: any): _49.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _49.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState_GenMsgs;
                fromPartial(object: any): _49.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _49.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Code;
                fromPartial(object: any): _49.Code;
            };
            Contract: {
                encode(message: _49.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Contract;
                fromPartial(object: any): _49.Contract;
            };
            Sequence: {
                encode(message: _49.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Sequence;
                fromPartial(object: any): _49.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
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
            cosmwasm: {
                wasm: {
                    v1: _141.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _52.QueryContractInfoRequest): Promise<_52.QueryContractInfoResponse>;
                        contractHistory(request: _52.QueryContractHistoryRequest): Promise<_52.QueryContractHistoryResponse>;
                        contractsByCode(request: _52.QueryContractsByCodeRequest): Promise<_52.QueryContractsByCodeResponse>;
                        allContractState(request: _52.QueryAllContractStateRequest): Promise<_52.QueryAllContractStateResponse>;
                        rawContractState(request: _52.QueryRawContractStateRequest): Promise<_52.QueryRawContractStateResponse>;
                        smartContractState(request: _52.QuerySmartContractStateRequest): Promise<_52.QuerySmartContractStateResponse>;
                        code(request: _52.QueryCodeRequest): Promise<_52.QueryCodeResponse>;
                        codes(request?: _52.QueryCodesRequest): Promise<_52.QueryCodesResponse>;
                        pinnedCodes(request?: _52.QueryPinnedCodesRequest): Promise<_52.QueryPinnedCodesResponse>;
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
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
            cosmwasm: {
                wasm: {
                    v1: _139.LCDQueryClient;
                };
            };
        }>;
    };
}
