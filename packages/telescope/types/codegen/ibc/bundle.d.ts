import * as _60 from "./applications/interchain_accounts/controller/v1/controller";
import * as _61 from "./applications/interchain_accounts/controller/v1/query";
import * as _62 from "./applications/interchain_accounts/host/v1/host";
import * as _63 from "./applications/interchain_accounts/host/v1/query";
import * as _64 from "./applications/interchain_accounts/v1/account";
import * as _65 from "./applications/interchain_accounts/v1/genesis";
import * as _66 from "./applications/interchain_accounts/v1/metadata";
import * as _67 from "./applications/interchain_accounts/v1/packet";
import * as _68 from "./applications/transfer/v1/genesis";
import * as _69 from "./applications/transfer/v1/query";
import * as _70 from "./applications/transfer/v1/transfer";
import * as _71 from "./applications/transfer/v1/tx";
import * as _72 from "./applications/transfer/v2/packet";
import * as _73 from "./core/channel/v1/channel";
import * as _74 from "./core/channel/v1/genesis";
import * as _75 from "./core/channel/v1/query";
import * as _76 from "./core/channel/v1/tx";
import * as _77 from "./core/client/v1/client";
import * as _78 from "./core/client/v1/genesis";
import * as _79 from "./core/client/v1/query";
import * as _80 from "./core/client/v1/tx";
import * as _81 from "./core/commitment/v1/commitment";
import * as _82 from "./core/connection/v1/connection";
import * as _83 from "./core/connection/v1/genesis";
import * as _84 from "./core/connection/v1/query";
import * as _85 from "./core/connection/v1/tx";
import * as _86 from "./lightclients/localhost/v1/localhost";
import * as _87 from "./lightclients/solomachine/v1/solomachine";
import * as _88 from "./lightclients/solomachine/v2/solomachine";
import * as _89 from "./lightclients/tendermint/v1/tendermint";
import * as _150 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _151 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _152 from "./applications/transfer/v1/query.lcd";
import * as _153 from "./core/channel/v1/query.lcd";
import * as _154 from "./core/client/v1/query.lcd";
import * as _155 from "./core/connection/v1/query.lcd";
import * as _156 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _157 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _158 from "./applications/transfer/v1/query.rpc.Query";
import * as _159 from "./core/channel/v1/query.rpc.Query";
import * as _160 from "./core/client/v1/query.rpc.Query";
import * as _161 from "./core/connection/v1/query.rpc.Query";
import * as _162 from "./applications/transfer/v1/tx.rpc.msg";
import * as _163 from "./core/channel/v1/tx.rpc.msg";
import * as _164 from "./core/client/v1/tx.rpc.msg";
import * as _165 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _156.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _61.QueryInterchainAccountRequest): Promise<_61.QueryInterchainAccountResponse>;
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _150.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        encode(message: _61.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryInterchainAccountRequest;
                        fromPartial(object: any): _61.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _61.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryInterchainAccountResponse;
                        fromPartial(object: any): _61.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                        fromPartial(_: any): _61.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                        fromPartial(object: any): _61.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _60.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Params;
                        fromPartial(object: any): _60.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _157.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _151.LCDQueryClient;
                    QueryParamsRequest: {
                        encode(_: _63.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsRequest;
                        fromPartial(_: any): _63.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _63.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsResponse;
                        fromPartial(object: any): _63.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                        fromPartial(object: any): _62.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _67.Type;
                typeToJSON(object: _67.Type): string;
                Type: typeof _67.Type;
                TypeSDKType: typeof _67.Type;
                InterchainAccountPacketData: {
                    encode(message: _67.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.InterchainAccountPacketData;
                    fromPartial(object: any): _67.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _67.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.CosmosTx;
                    fromPartial(object: any): _67.CosmosTx;
                };
                Metadata: {
                    encode(message: _66.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Metadata;
                    fromPartial(object: any): _66.Metadata;
                };
                GenesisState: {
                    encode(message: _65.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GenesisState;
                    fromPartial(object: any): _65.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _65.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ControllerGenesisState;
                    fromPartial(object: any): _65.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _65.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.HostGenesisState;
                    fromPartial(object: any): _65.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _65.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ActiveChannel;
                    fromPartial(object: any): _65.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _65.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.RegisteredInterchainAccount;
                    fromPartial(object: any): _65.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _64.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.InterchainAccount;
                    fromPartial(object: any): _64.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _162.MsgClientImpl;
                QueryClientImpl: typeof _158.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _69.QueryDenomTraceRequest): Promise<_69.QueryDenomTraceResponse>;
                    denomTraces(request?: _69.QueryDenomTracesRequest): Promise<_69.QueryDenomTracesResponse>;
                    params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                    denomHash(request: _69.QueryDenomHashRequest): Promise<_69.QueryDenomHashResponse>;
                    escrowAddress(request: _69.QueryEscrowAddressRequest): Promise<_69.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _152.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _71.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _71.MsgTransfer): {
                            typeUrl: string;
                            value: _71.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _71.MsgTransfer): {
                            typeUrl: string;
                            value: _71.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _71.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _71.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _71.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTransfer;
                    fromPartial(object: any): _71.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _71.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgTransferResponse;
                    fromPartial(_: any): _71.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _70.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.DenomTrace;
                    fromPartial(object: any): _70.DenomTrace;
                };
                Params: {
                    encode(message: _70.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Params;
                    fromPartial(object: any): _70.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _69.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomTraceRequest;
                    fromPartial(object: any): _69.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _69.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomTraceResponse;
                    fromPartial(object: any): _69.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _69.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomTracesRequest;
                    fromPartial(object: any): _69.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _69.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomTracesResponse;
                    fromPartial(object: any): _69.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _69.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsRequest;
                    fromPartial(_: any): _69.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _69.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryParamsResponse;
                    fromPartial(object: any): _69.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _69.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomHashRequest;
                    fromPartial(object: any): _69.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _69.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryDenomHashResponse;
                    fromPartial(object: any): _69.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _69.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryEscrowAddressRequest;
                    fromPartial(object: any): _69.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _69.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryEscrowAddressResponse;
                    fromPartial(object: any): _69.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                    fromPartial(object: any): _68.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _72.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.FungibleTokenPacketData;
                    fromPartial(object: any): _72.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _163.MsgClientImpl;
                QueryClientImpl: typeof _159.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _75.QueryChannelRequest): Promise<_75.QueryChannelResponse>;
                    channels(request?: _75.QueryChannelsRequest): Promise<_75.QueryChannelsResponse>;
                    connectionChannels(request: _75.QueryConnectionChannelsRequest): Promise<_75.QueryConnectionChannelsResponse>;
                    channelClientState(request: _75.QueryChannelClientStateRequest): Promise<_75.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _75.QueryChannelConsensusStateRequest): Promise<_75.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _75.QueryPacketCommitmentRequest): Promise<_75.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _75.QueryPacketCommitmentsRequest): Promise<_75.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _75.QueryPacketReceiptRequest): Promise<_75.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _75.QueryPacketAcknowledgementRequest): Promise<_75.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _75.QueryPacketAcknowledgementsRequest): Promise<_75.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _75.QueryUnreceivedPacketsRequest): Promise<_75.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _75.QueryUnreceivedAcksRequest): Promise<_75.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _75.QueryNextSequenceReceiveRequest): Promise<_75.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _153.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _76.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _76.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _76.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _76.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _76.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _76.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _76.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _76.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _76.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _76.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _76.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _76.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _76.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _76.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _76.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _76.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _76.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _76.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _76.MsgRecvPacket): {
                            typeUrl: string;
                            value: _76.MsgRecvPacket;
                        };
                        timeout(value: _76.MsgTimeout): {
                            typeUrl: string;
                            value: _76.MsgTimeout;
                        };
                        timeoutOnClose(value: _76.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _76.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _76.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _76.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _76.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _76.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _76.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _76.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _76.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _76.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _76.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _76.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _76.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _76.MsgRecvPacket): {
                            typeUrl: string;
                            value: _76.MsgRecvPacket;
                        };
                        timeout(value: _76.MsgTimeout): {
                            typeUrl: string;
                            value: _76.MsgTimeout;
                        };
                        timeoutOnClose(value: _76.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _76.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _76.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _76.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _76.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _76.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _76.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _76.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _76.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _76.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _76.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _76.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _76.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _76.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _76.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _76.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _76.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _76.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _76.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _76.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _76.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _76.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _76.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _76.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _76.ResponseResultType;
                responseResultTypeToJSON(object: _76.ResponseResultType): string;
                ResponseResultType: typeof _76.ResponseResultType;
                ResponseResultTypeSDKType: typeof _76.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _76.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenInit;
                    fromPartial(object: any): _76.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _76.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenInitResponse;
                    fromPartial(object: any): _76.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _76.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenTry;
                    fromPartial(object: any): _76.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _76.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenTryResponse;
                    fromPartial(object: any): _76.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _76.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenAck;
                    fromPartial(object: any): _76.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _76.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenAckResponse;
                    fromPartial(_: any): _76.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _76.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenConfirm;
                    fromPartial(object: any): _76.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _76.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelOpenConfirmResponse;
                    fromPartial(_: any): _76.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _76.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelCloseInit;
                    fromPartial(object: any): _76.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _76.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelCloseInitResponse;
                    fromPartial(_: any): _76.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _76.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelCloseConfirm;
                    fromPartial(object: any): _76.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _76.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgChannelCloseConfirmResponse;
                    fromPartial(_: any): _76.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _76.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgRecvPacket;
                    fromPartial(object: any): _76.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _76.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgRecvPacketResponse;
                    fromPartial(object: any): _76.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _76.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgTimeout;
                    fromPartial(object: any): _76.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _76.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgTimeoutResponse;
                    fromPartial(object: any): _76.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _76.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgTimeoutOnClose;
                    fromPartial(object: any): _76.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _76.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgTimeoutOnCloseResponse;
                    fromPartial(object: any): _76.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _76.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgAcknowledgement;
                    fromPartial(object: any): _76.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _76.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.MsgAcknowledgementResponse;
                    fromPartial(object: any): _76.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _75.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelRequest;
                    fromPartial(object: any): _75.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _75.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelResponse;
                    fromPartial(object: any): _75.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _75.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelsRequest;
                    fromPartial(object: any): _75.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _75.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelsResponse;
                    fromPartial(object: any): _75.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _75.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryConnectionChannelsRequest;
                    fromPartial(object: any): _75.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _75.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryConnectionChannelsResponse;
                    fromPartial(object: any): _75.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _75.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelClientStateRequest;
                    fromPartial(object: any): _75.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _75.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelClientStateResponse;
                    fromPartial(object: any): _75.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _75.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelConsensusStateRequest;
                    fromPartial(object: any): _75.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _75.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryChannelConsensusStateResponse;
                    fromPartial(object: any): _75.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _75.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketCommitmentRequest;
                    fromPartial(object: any): _75.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _75.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketCommitmentResponse;
                    fromPartial(object: any): _75.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _75.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketCommitmentsRequest;
                    fromPartial(object: any): _75.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _75.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketCommitmentsResponse;
                    fromPartial(object: any): _75.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _75.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketReceiptRequest;
                    fromPartial(object: any): _75.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _75.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketReceiptResponse;
                    fromPartial(object: any): _75.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _75.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketAcknowledgementRequest;
                    fromPartial(object: any): _75.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _75.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketAcknowledgementResponse;
                    fromPartial(object: any): _75.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _75.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: any): _75.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _75.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: any): _75.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _75.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryUnreceivedPacketsRequest;
                    fromPartial(object: any): _75.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _75.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryUnreceivedPacketsResponse;
                    fromPartial(object: any): _75.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _75.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryUnreceivedAcksRequest;
                    fromPartial(object: any): _75.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _75.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryUnreceivedAcksResponse;
                    fromPartial(object: any): _75.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _75.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryNextSequenceReceiveRequest;
                    fromPartial(object: any): _75.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _75.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryNextSequenceReceiveResponse;
                    fromPartial(object: any): _75.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisState;
                    fromPartial(object: any): _74.GenesisState;
                };
                PacketSequence: {
                    encode(message: _74.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PacketSequence;
                    fromPartial(object: any): _74.PacketSequence;
                };
                stateFromJSON(object: any): _73.State;
                stateToJSON(object: _73.State): string;
                orderFromJSON(object: any): _73.Order;
                orderToJSON(object: _73.Order): string;
                State: typeof _73.State;
                StateSDKType: typeof _73.State;
                Order: typeof _73.Order;
                OrderSDKType: typeof _73.Order;
                Channel: {
                    encode(message: _73.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Channel;
                    fromPartial(object: any): _73.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _73.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.IdentifiedChannel;
                    fromPartial(object: any): _73.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _73.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Counterparty;
                    fromPartial(object: any): _73.Counterparty;
                };
                Packet: {
                    encode(message: _73.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Packet;
                    fromPartial(object: any): _73.Packet;
                };
                PacketState: {
                    encode(message: _73.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.PacketState;
                    fromPartial(object: any): _73.PacketState;
                };
                Acknowledgement: {
                    encode(message: _73.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Acknowledgement;
                    fromPartial(object: any): _73.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _164.MsgClientImpl;
                QueryClientImpl: typeof _160.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _79.QueryClientStateRequest): Promise<_79.QueryClientStateResponse>;
                    clientStates(request?: _79.QueryClientStatesRequest): Promise<_79.QueryClientStatesResponse>;
                    consensusState(request: _79.QueryConsensusStateRequest): Promise<_79.QueryConsensusStateResponse>;
                    consensusStates(request: _79.QueryConsensusStatesRequest): Promise<_79.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _79.QueryConsensusStateHeightsRequest): Promise<_79.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _79.QueryClientStatusRequest): Promise<_79.QueryClientStatusResponse>;
                    clientParams(request?: _79.QueryClientParamsRequest): Promise<_79.QueryClientParamsResponse>;
                    upgradedClientState(request?: _79.QueryUpgradedClientStateRequest): Promise<_79.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _79.QueryUpgradedConsensusStateRequest): Promise<_79.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _154.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _80.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _80.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _80.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _80.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _80.MsgCreateClient): {
                            typeUrl: string;
                            value: _80.MsgCreateClient;
                        };
                        updateClient(value: _80.MsgUpdateClient): {
                            typeUrl: string;
                            value: _80.MsgUpdateClient;
                        };
                        upgradeClient(value: _80.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _80.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _80.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _80.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _80.MsgCreateClient): {
                            typeUrl: string;
                            value: _80.MsgCreateClient;
                        };
                        updateClient(value: _80.MsgUpdateClient): {
                            typeUrl: string;
                            value: _80.MsgUpdateClient;
                        };
                        upgradeClient(value: _80.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _80.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _80.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _80.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _80.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _80.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _80.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _80.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _80.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _80.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _80.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _80.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _80.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateClient;
                    fromPartial(object: any): _80.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _80.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgCreateClientResponse;
                    fromPartial(_: any): _80.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _80.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateClient;
                    fromPartial(object: any): _80.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _80.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpdateClientResponse;
                    fromPartial(_: any): _80.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _80.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpgradeClient;
                    fromPartial(object: any): _80.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _80.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgUpgradeClientResponse;
                    fromPartial(_: any): _80.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _80.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSubmitMisbehaviour;
                    fromPartial(object: any): _80.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _80.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: any): _80.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _79.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientStateRequest;
                    fromPartial(object: any): _79.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _79.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientStateResponse;
                    fromPartial(object: any): _79.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _79.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientStatesRequest;
                    fromPartial(object: any): _79.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _79.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientStatesResponse;
                    fromPartial(object: any): _79.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _79.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConsensusStateRequest;
                    fromPartial(object: any): _79.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _79.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConsensusStateResponse;
                    fromPartial(object: any): _79.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _79.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConsensusStatesRequest;
                    fromPartial(object: any): _79.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _79.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConsensusStatesResponse;
                    fromPartial(object: any): _79.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _79.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConsensusStateHeightsRequest;
                    fromPartial(object: any): _79.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _79.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryConsensusStateHeightsResponse;
                    fromPartial(object: any): _79.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _79.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientStatusRequest;
                    fromPartial(object: any): _79.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _79.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientStatusResponse;
                    fromPartial(object: any): _79.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _79.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientParamsRequest;
                    fromPartial(_: any): _79.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _79.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryClientParamsResponse;
                    fromPartial(object: any): _79.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _79.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryUpgradedClientStateRequest;
                    fromPartial(_: any): _79.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _79.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryUpgradedClientStateResponse;
                    fromPartial(object: any): _79.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _79.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: any): _79.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _79.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: any): _79.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _78.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisState;
                    fromPartial(object: any): _78.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _78.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.GenesisMetadata;
                    fromPartial(object: any): _78.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _78.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.IdentifiedGenesisMetadata;
                    fromPartial(object: any): _78.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _77.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.IdentifiedClientState;
                    fromPartial(object: any): _77.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _77.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ConsensusStateWithHeight;
                    fromPartial(object: any): _77.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _77.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientConsensusStates;
                    fromPartial(object: any): _77.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _77.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.ClientUpdateProposal;
                    fromPartial(object: any): _77.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _77.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.UpgradeProposal;
                    fromPartial(object: any): _77.UpgradeProposal;
                };
                Height: {
                    encode(message: _77.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Height;
                    fromPartial(object: any): _77.Height;
                };
                Params: {
                    encode(message: _77.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Params;
                    fromPartial(object: any): _77.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _81.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MerkleRoot;
                    fromPartial(object: any): _81.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _81.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MerklePrefix;
                    fromPartial(object: any): _81.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _81.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MerklePath;
                    fromPartial(object: any): _81.MerklePath;
                };
                MerkleProof: {
                    encode(message: _81.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MerkleProof;
                    fromPartial(object: any): _81.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _165.MsgClientImpl;
                QueryClientImpl: typeof _161.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _84.QueryConnectionRequest): Promise<_84.QueryConnectionResponse>;
                    connections(request?: _84.QueryConnectionsRequest): Promise<_84.QueryConnectionsResponse>;
                    clientConnections(request: _84.QueryClientConnectionsRequest): Promise<_84.QueryClientConnectionsResponse>;
                    connectionClientState(request: _84.QueryConnectionClientStateRequest): Promise<_84.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _84.QueryConnectionConsensusStateRequest): Promise<_84.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _155.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _85.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _85.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _85.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _85.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _85.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _85.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _85.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _85.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _85.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _85.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _85.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _85.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _85.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _85.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _85.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _85.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _85.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _85.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _85.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _85.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _85.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _85.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenInit;
                    fromPartial(object: any): _85.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _85.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenInitResponse;
                    fromPartial(_: any): _85.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _85.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenTry;
                    fromPartial(object: any): _85.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _85.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenTryResponse;
                    fromPartial(_: any): _85.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _85.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenAck;
                    fromPartial(object: any): _85.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _85.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenAckResponse;
                    fromPartial(_: any): _85.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _85.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenConfirm;
                    fromPartial(object: any): _85.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _85.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: any): _85.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _84.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionRequest;
                    fromPartial(object: any): _84.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _84.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionResponse;
                    fromPartial(object: any): _84.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _84.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionsRequest;
                    fromPartial(object: any): _84.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _84.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionsResponse;
                    fromPartial(object: any): _84.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _84.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientConnectionsRequest;
                    fromPartial(object: any): _84.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _84.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientConnectionsResponse;
                    fromPartial(object: any): _84.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _84.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionClientStateRequest;
                    fromPartial(object: any): _84.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _84.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionClientStateResponse;
                    fromPartial(object: any): _84.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _84.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionConsensusStateRequest;
                    fromPartial(object: any): _84.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _84.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConnectionConsensusStateResponse;
                    fromPartial(object: any): _84.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                    fromPartial(object: any): _83.GenesisState;
                };
                stateFromJSON(object: any): _82.State;
                stateToJSON(object: _82.State): string;
                State: typeof _82.State;
                StateSDKType: typeof _82.State;
                ConnectionEnd: {
                    encode(message: _82.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConnectionEnd;
                    fromPartial(object: any): _82.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _82.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.IdentifiedConnection;
                    fromPartial(object: any): _82.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _82.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Counterparty;
                    fromPartial(object: any): _82.Counterparty;
                };
                ClientPaths: {
                    encode(message: _82.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientPaths;
                    fromPartial(object: any): _82.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _82.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConnectionPaths;
                    fromPartial(object: any): _82.ConnectionPaths;
                };
                Version: {
                    encode(message: _82.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Version;
                    fromPartial(object: any): _82.Version;
                };
                Params: {
                    encode(message: _82.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Params;
                    fromPartial(object: any): _82.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _86.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ClientState;
                    fromPartial(object: any): _86.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _87.DataType;
                dataTypeToJSON(object: _87.DataType): string;
                DataType: typeof _87.DataType;
                DataTypeSDKType: typeof _87.DataType;
                ClientState: {
                    encode(message: _87.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientState;
                    fromPartial(object: any): _87.ClientState;
                };
                ConsensusState: {
                    encode(message: _87.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConsensusState;
                    fromPartial(object: any): _87.ConsensusState;
                };
                Header: {
                    encode(message: _87.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Header;
                    fromPartial(object: any): _87.Header;
                };
                Misbehaviour: {
                    encode(message: _87.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Misbehaviour;
                    fromPartial(object: any): _87.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _87.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignatureAndData;
                    fromPartial(object: any): _87.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _87.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TimestampedSignatureData;
                    fromPartial(object: any): _87.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _87.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SignBytes;
                    fromPartial(object: any): _87.SignBytes;
                };
                HeaderData: {
                    encode(message: _87.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.HeaderData;
                    fromPartial(object: any): _87.HeaderData;
                };
                ClientStateData: {
                    encode(message: _87.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientStateData;
                    fromPartial(object: any): _87.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _87.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConsensusStateData;
                    fromPartial(object: any): _87.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _87.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConnectionStateData;
                    fromPartial(object: any): _87.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _87.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ChannelStateData;
                    fromPartial(object: any): _87.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _87.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PacketCommitmentData;
                    fromPartial(object: any): _87.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _87.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PacketAcknowledgementData;
                    fromPartial(object: any): _87.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _87.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PacketReceiptAbsenceData;
                    fromPartial(object: any): _87.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _87.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.NextSequenceRecvData;
                    fromPartial(object: any): _87.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _88.DataType;
                dataTypeToJSON(object: _88.DataType): string;
                DataType: typeof _88.DataType;
                DataTypeSDKType: typeof _88.DataType;
                ClientState: {
                    encode(message: _88.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClientState;
                    fromPartial(object: any): _88.ClientState;
                };
                ConsensusState: {
                    encode(message: _88.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConsensusState;
                    fromPartial(object: any): _88.ConsensusState;
                };
                Header: {
                    encode(message: _88.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Header;
                    fromPartial(object: any): _88.Header;
                };
                Misbehaviour: {
                    encode(message: _88.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Misbehaviour;
                    fromPartial(object: any): _88.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _88.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignatureAndData;
                    fromPartial(object: any): _88.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _88.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TimestampedSignatureData;
                    fromPartial(object: any): _88.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _88.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignBytes;
                    fromPartial(object: any): _88.SignBytes;
                };
                HeaderData: {
                    encode(message: _88.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.HeaderData;
                    fromPartial(object: any): _88.HeaderData;
                };
                ClientStateData: {
                    encode(message: _88.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClientStateData;
                    fromPartial(object: any): _88.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _88.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConsensusStateData;
                    fromPartial(object: any): _88.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _88.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConnectionStateData;
                    fromPartial(object: any): _88.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _88.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ChannelStateData;
                    fromPartial(object: any): _88.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _88.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PacketCommitmentData;
                    fromPartial(object: any): _88.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _88.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PacketAcknowledgementData;
                    fromPartial(object: any): _88.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _88.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PacketReceiptAbsenceData;
                    fromPartial(object: any): _88.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _88.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.NextSequenceRecvData;
                    fromPartial(object: any): _88.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _89.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ClientState;
                    fromPartial(object: any): _89.ClientState;
                };
                ConsensusState: {
                    encode(message: _89.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConsensusState;
                    fromPartial(object: any): _89.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _89.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Misbehaviour;
                    fromPartial(object: any): _89.Misbehaviour;
                };
                Header: {
                    encode(message: _89.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Header;
                    fromPartial(object: any): _89.Header;
                };
                Fraction: {
                    encode(message: _89.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Fraction;
                    fromPartial(object: any): _89.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _162.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _163.MsgClientImpl;
                    };
                    client: {
                        v1: _164.MsgClientImpl;
                    };
                    connection: {
                        v1: _165.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _61.QueryInterchainAccountRequest): Promise<_61.QueryInterchainAccountResponse>;
                                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _69.QueryDenomTraceRequest): Promise<_69.QueryDenomTraceResponse>;
                            denomTraces(request?: _69.QueryDenomTracesRequest): Promise<_69.QueryDenomTracesResponse>;
                            params(request?: _69.QueryParamsRequest): Promise<_69.QueryParamsResponse>;
                            denomHash(request: _69.QueryDenomHashRequest): Promise<_69.QueryDenomHashResponse>;
                            escrowAddress(request: _69.QueryEscrowAddressRequest): Promise<_69.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _75.QueryChannelRequest): Promise<_75.QueryChannelResponse>;
                            channels(request?: _75.QueryChannelsRequest): Promise<_75.QueryChannelsResponse>;
                            connectionChannels(request: _75.QueryConnectionChannelsRequest): Promise<_75.QueryConnectionChannelsResponse>;
                            channelClientState(request: _75.QueryChannelClientStateRequest): Promise<_75.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _75.QueryChannelConsensusStateRequest): Promise<_75.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _75.QueryPacketCommitmentRequest): Promise<_75.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _75.QueryPacketCommitmentsRequest): Promise<_75.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _75.QueryPacketReceiptRequest): Promise<_75.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _75.QueryPacketAcknowledgementRequest): Promise<_75.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _75.QueryPacketAcknowledgementsRequest): Promise<_75.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _75.QueryUnreceivedPacketsRequest): Promise<_75.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _75.QueryUnreceivedAcksRequest): Promise<_75.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _75.QueryNextSequenceReceiveRequest): Promise<_75.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _79.QueryClientStateRequest): Promise<_79.QueryClientStateResponse>;
                            clientStates(request?: _79.QueryClientStatesRequest): Promise<_79.QueryClientStatesResponse>;
                            consensusState(request: _79.QueryConsensusStateRequest): Promise<_79.QueryConsensusStateResponse>;
                            consensusStates(request: _79.QueryConsensusStatesRequest): Promise<_79.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _79.QueryConsensusStateHeightsRequest): Promise<_79.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _79.QueryClientStatusRequest): Promise<_79.QueryClientStatusResponse>;
                            clientParams(request?: _79.QueryClientParamsRequest): Promise<_79.QueryClientParamsResponse>;
                            upgradedClientState(request?: _79.QueryUpgradedClientStateRequest): Promise<_79.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _79.QueryUpgradedConsensusStateRequest): Promise<_79.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _84.QueryConnectionRequest): Promise<_84.QueryConnectionResponse>;
                            connections(request?: _84.QueryConnectionsRequest): Promise<_84.QueryConnectionsResponse>;
                            clientConnections(request: _84.QueryClientConnectionsRequest): Promise<_84.QueryClientConnectionsResponse>;
                            connectionClientState(request: _84.QueryConnectionClientStateRequest): Promise<_84.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _84.QueryConnectionConsensusStateRequest): Promise<_84.QueryConnectionConsensusStateResponse>;
                        };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _150.LCDQueryClient;
                        };
                        host: {
                            v1: _151.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _152.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _153.LCDQueryClient;
                    };
                    client: {
                        v1: _154.LCDQueryClient;
                    };
                    connection: {
                        v1: _155.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
