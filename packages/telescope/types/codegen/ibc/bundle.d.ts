import * as _54 from "./applications/interchain_accounts/controller/v1/controller";
import * as _55 from "./applications/interchain_accounts/controller/v1/query";
import * as _56 from "./applications/interchain_accounts/host/v1/host";
import * as _57 from "./applications/interchain_accounts/host/v1/query";
import * as _58 from "./applications/interchain_accounts/v1/account";
import * as _59 from "./applications/interchain_accounts/v1/genesis";
import * as _60 from "./applications/interchain_accounts/v1/metadata";
import * as _61 from "./applications/interchain_accounts/v1/packet";
import * as _62 from "./applications/transfer/v1/genesis";
import * as _63 from "./applications/transfer/v1/query";
import * as _64 from "./applications/transfer/v1/transfer";
import * as _65 from "./applications/transfer/v1/tx";
import * as _66 from "./applications/transfer/v2/packet";
import * as _67 from "./core/channel/v1/channel";
import * as _68 from "./core/channel/v1/genesis";
import * as _69 from "./core/channel/v1/query";
import * as _70 from "./core/channel/v1/tx";
import * as _71 from "./core/client/v1/client";
import * as _72 from "./core/client/v1/genesis";
import * as _73 from "./core/client/v1/query";
import * as _74 from "./core/client/v1/tx";
import * as _75 from "./core/commitment/v1/commitment";
import * as _76 from "./core/connection/v1/connection";
import * as _77 from "./core/connection/v1/genesis";
import * as _78 from "./core/connection/v1/query";
import * as _79 from "./core/connection/v1/tx";
import * as _80 from "./lightclients/localhost/v1/localhost";
import * as _81 from "./lightclients/solomachine/v1/solomachine";
import * as _82 from "./lightclients/solomachine/v2/solomachine";
import * as _83 from "./lightclients/tendermint/v1/tendermint";
import * as _139 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _140 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _141 from "./applications/transfer/v1/query.lcd";
import * as _142 from "./core/channel/v1/query.lcd";
import * as _143 from "./core/client/v1/query.lcd";
import * as _144 from "./core/connection/v1/query.lcd";
import * as _145 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _146 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _147 from "./applications/transfer/v1/query.rpc.Query";
import * as _148 from "./core/channel/v1/query.rpc.Query";
import * as _149 from "./core/client/v1/query.rpc.Query";
import * as _150 from "./core/connection/v1/query.rpc.Query";
import * as _151 from "./applications/transfer/v1/tx.rpc.msg";
import * as _152 from "./core/channel/v1/tx.rpc.msg";
import * as _153 from "./core/client/v1/tx.rpc.msg";
import * as _154 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _145.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _55.QueryInterchainAccountRequest): Promise<_55.QueryInterchainAccountResponse>;
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _139.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        encode(message: _55.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryInterchainAccountRequest;
                        fromPartial(object: any): _55.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _55.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryInterchainAccountResponse;
                        fromPartial(object: any): _55.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsRequest;
                        fromPartial(_: any): _55.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsResponse;
                        fromPartial(object: any): _55.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _54.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Params;
                        fromPartial(object: any): _54.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _146.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _140.LCDQueryClient;
                    QueryParamsRequest: {
                        encode(_: _57.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsRequest;
                        fromPartial(_: any): _57.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _57.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryParamsResponse;
                        fromPartial(object: any): _57.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _56.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.Params;
                        fromPartial(object: any): _56.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _61.Type;
                typeToJSON(object: _61.Type): string;
                Type: typeof _61.Type;
                TypeSDKType: typeof _61.TypeSDKType;
                InterchainAccountPacketData: {
                    encode(message: _61.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.InterchainAccountPacketData;
                    fromPartial(object: any): _61.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _61.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.CosmosTx;
                    fromPartial(object: any): _61.CosmosTx;
                };
                Metadata: {
                    encode(message: _60.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Metadata;
                    fromPartial(object: any): _60.Metadata;
                };
                GenesisState: {
                    encode(message: _59.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.GenesisState;
                    fromPartial(object: any): _59.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _59.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ControllerGenesisState;
                    fromPartial(object: any): _59.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _59.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.HostGenesisState;
                    fromPartial(object: any): _59.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _59.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ActiveChannel;
                    fromPartial(object: any): _59.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _59.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.RegisteredInterchainAccount;
                    fromPartial(object: any): _59.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _58.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.InterchainAccount;
                    fromPartial(object: any): _58.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _151.MsgClientImpl;
                QueryClientImpl: typeof _147.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _63.QueryDenomTraceRequest): Promise<_63.QueryDenomTraceResponse>;
                    denomTraces(request?: _63.QueryDenomTracesRequest): Promise<_63.QueryDenomTracesResponse>;
                    params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                    denomHash(request: _63.QueryDenomHashRequest): Promise<_63.QueryDenomHashResponse>;
                    escrowAddress(request: _63.QueryEscrowAddressRequest): Promise<_63.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _141.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _65.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _65.MsgTransfer): {
                            typeUrl: string;
                            value: _65.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _65.MsgTransfer): {
                            typeUrl: string;
                            value: _65.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _65.MsgTransfer) => {
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
                        }) => _65.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _65.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTransfer;
                    fromPartial(object: any): _65.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _65.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.MsgTransferResponse;
                    fromPartial(_: any): _65.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _64.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.DenomTrace;
                    fromPartial(object: any): _64.DenomTrace;
                };
                Params: {
                    encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Params;
                    fromPartial(object: any): _64.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _63.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTraceRequest;
                    fromPartial(object: any): _63.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _63.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTraceResponse;
                    fromPartial(object: any): _63.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _63.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTracesRequest;
                    fromPartial(object: any): _63.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _63.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomTracesResponse;
                    fromPartial(object: any): _63.QueryDenomTracesResponse;
                };
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
                QueryDenomHashRequest: {
                    encode(message: _63.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomHashRequest;
                    fromPartial(object: any): _63.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _63.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDenomHashResponse;
                    fromPartial(object: any): _63.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _63.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryEscrowAddressRequest;
                    fromPartial(object: any): _63.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _63.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryEscrowAddressResponse;
                    fromPartial(object: any): _63.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _62.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GenesisState;
                    fromPartial(object: any): _62.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _66.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.FungibleTokenPacketData;
                    fromPartial(object: any): _66.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _152.MsgClientImpl;
                QueryClientImpl: typeof _148.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _69.QueryChannelRequest): Promise<_69.QueryChannelResponse>;
                    channels(request?: _69.QueryChannelsRequest): Promise<_69.QueryChannelsResponse>;
                    connectionChannels(request: _69.QueryConnectionChannelsRequest): Promise<_69.QueryConnectionChannelsResponse>;
                    channelClientState(request: _69.QueryChannelClientStateRequest): Promise<_69.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _69.QueryChannelConsensusStateRequest): Promise<_69.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _69.QueryPacketCommitmentRequest): Promise<_69.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _69.QueryPacketCommitmentsRequest): Promise<_69.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _69.QueryPacketReceiptRequest): Promise<_69.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _69.QueryPacketAcknowledgementRequest): Promise<_69.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _69.QueryPacketAcknowledgementsRequest): Promise<_69.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _69.QueryUnreceivedPacketsRequest): Promise<_69.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _69.QueryUnreceivedAcksRequest): Promise<_69.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _69.QueryNextSequenceReceiveRequest): Promise<_69.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _142.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _70.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _70.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _70.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _70.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _70.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _70.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _70.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _70.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _70.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _70.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _70.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _70.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _70.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _70.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _70.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _70.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _70.MsgRecvPacket): {
                            typeUrl: string;
                            value: _70.MsgRecvPacket;
                        };
                        timeout(value: _70.MsgTimeout): {
                            typeUrl: string;
                            value: _70.MsgTimeout;
                        };
                        timeoutOnClose(value: _70.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _70.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _70.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _70.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _70.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _70.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _70.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _70.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _70.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _70.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _70.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _70.MsgRecvPacket): {
                            typeUrl: string;
                            value: _70.MsgRecvPacket;
                        };
                        timeout(value: _70.MsgTimeout): {
                            typeUrl: string;
                            value: _70.MsgTimeout;
                        };
                        timeoutOnClose(value: _70.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _70.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _70.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _70.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _70.MsgChannelOpenInit) => {
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
                        }) => _70.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _70.MsgChannelOpenTry) => {
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
                        }) => _70.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _70.MsgChannelOpenAck) => {
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
                        }) => _70.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _70.MsgChannelOpenConfirm) => {
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
                        }) => _70.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _70.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _70.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _70.MsgChannelCloseConfirm) => {
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
                        }) => _70.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _70.MsgRecvPacket) => {
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
                        }) => _70.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _70.MsgTimeout) => {
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
                        }) => _70.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _70.MsgTimeoutOnClose) => {
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
                        }) => _70.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _70.MsgAcknowledgement) => {
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
                        }) => _70.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _70.ResponseResultType;
                responseResultTypeToJSON(object: _70.ResponseResultType): string;
                ResponseResultType: typeof _70.ResponseResultType;
                ResponseResultTypeSDKType: typeof _70.ResponseResultTypeSDKType;
                MsgChannelOpenInit: {
                    encode(message: _70.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenInit;
                    fromPartial(object: any): _70.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _70.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenInitResponse;
                    fromPartial(object: any): _70.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _70.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenTry;
                    fromPartial(object: any): _70.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _70.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenTryResponse;
                    fromPartial(object: any): _70.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _70.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenAck;
                    fromPartial(object: any): _70.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _70.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenAckResponse;
                    fromPartial(_: any): _70.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _70.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenConfirm;
                    fromPartial(object: any): _70.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _70.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelOpenConfirmResponse;
                    fromPartial(_: any): _70.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _70.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseInit;
                    fromPartial(object: any): _70.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _70.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseInitResponse;
                    fromPartial(_: any): _70.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _70.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseConfirm;
                    fromPartial(object: any): _70.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _70.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgChannelCloseConfirmResponse;
                    fromPartial(_: any): _70.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _70.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgRecvPacket;
                    fromPartial(object: any): _70.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _70.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgRecvPacketResponse;
                    fromPartial(object: any): _70.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _70.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeout;
                    fromPartial(object: any): _70.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _70.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeoutResponse;
                    fromPartial(object: any): _70.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _70.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeoutOnClose;
                    fromPartial(object: any): _70.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _70.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgTimeoutOnCloseResponse;
                    fromPartial(object: any): _70.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _70.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgAcknowledgement;
                    fromPartial(object: any): _70.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _70.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.MsgAcknowledgementResponse;
                    fromPartial(object: any): _70.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _69.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelRequest;
                    fromPartial(object: any): _69.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _69.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelResponse;
                    fromPartial(object: any): _69.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _69.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelsRequest;
                    fromPartial(object: any): _69.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _69.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelsResponse;
                    fromPartial(object: any): _69.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _69.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionChannelsRequest;
                    fromPartial(object: any): _69.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _69.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryConnectionChannelsResponse;
                    fromPartial(object: any): _69.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _69.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelClientStateRequest;
                    fromPartial(object: any): _69.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _69.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelClientStateResponse;
                    fromPartial(object: any): _69.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _69.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelConsensusStateRequest;
                    fromPartial(object: any): _69.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _69.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryChannelConsensusStateResponse;
                    fromPartial(object: any): _69.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _69.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentRequest;
                    fromPartial(object: any): _69.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _69.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentResponse;
                    fromPartial(object: any): _69.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _69.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentsRequest;
                    fromPartial(object: any): _69.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _69.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketCommitmentsResponse;
                    fromPartial(object: any): _69.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _69.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketReceiptRequest;
                    fromPartial(object: any): _69.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _69.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketReceiptResponse;
                    fromPartial(object: any): _69.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _69.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementRequest;
                    fromPartial(object: any): _69.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _69.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementResponse;
                    fromPartial(object: any): _69.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _69.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: any): _69.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _69.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: any): _69.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _69.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedPacketsRequest;
                    fromPartial(object: any): _69.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _69.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedPacketsResponse;
                    fromPartial(object: any): _69.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _69.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedAcksRequest;
                    fromPartial(object: any): _69.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _69.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryUnreceivedAcksResponse;
                    fromPartial(object: any): _69.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _69.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryNextSequenceReceiveRequest;
                    fromPartial(object: any): _69.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _69.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.QueryNextSequenceReceiveResponse;
                    fromPartial(object: any): _69.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                    fromPartial(object: any): _68.GenesisState;
                };
                PacketSequence: {
                    encode(message: _68.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.PacketSequence;
                    fromPartial(object: any): _68.PacketSequence;
                };
                stateFromJSON(object: any): _67.State;
                stateToJSON(object: _67.State): string;
                orderFromJSON(object: any): _67.Order;
                orderToJSON(object: _67.Order): string;
                State: typeof _67.State;
                StateSDKType: typeof _67.StateSDKType;
                Order: typeof _67.Order;
                OrderSDKType: typeof _67.OrderSDKType;
                Channel: {
                    encode(message: _67.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Channel;
                    fromPartial(object: any): _67.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _67.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.IdentifiedChannel;
                    fromPartial(object: any): _67.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _67.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Counterparty;
                    fromPartial(object: any): _67.Counterparty;
                };
                Packet: {
                    encode(message: _67.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Packet;
                    fromPartial(object: any): _67.Packet;
                };
                PacketState: {
                    encode(message: _67.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.PacketState;
                    fromPartial(object: any): _67.PacketState;
                };
                Acknowledgement: {
                    encode(message: _67.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Acknowledgement;
                    fromPartial(object: any): _67.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _153.MsgClientImpl;
                QueryClientImpl: typeof _149.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _73.QueryClientStateRequest): Promise<_73.QueryClientStateResponse>;
                    clientStates(request?: _73.QueryClientStatesRequest): Promise<_73.QueryClientStatesResponse>;
                    consensusState(request: _73.QueryConsensusStateRequest): Promise<_73.QueryConsensusStateResponse>;
                    consensusStates(request: _73.QueryConsensusStatesRequest): Promise<_73.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _73.QueryConsensusStateHeightsRequest): Promise<_73.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _73.QueryClientStatusRequest): Promise<_73.QueryClientStatusResponse>;
                    clientParams(request?: _73.QueryClientParamsRequest): Promise<_73.QueryClientParamsResponse>;
                    upgradedClientState(request?: _73.QueryUpgradedClientStateRequest): Promise<_73.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _143.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _74.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _74.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _74.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _74.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _74.MsgCreateClient): {
                            typeUrl: string;
                            value: _74.MsgCreateClient;
                        };
                        updateClient(value: _74.MsgUpdateClient): {
                            typeUrl: string;
                            value: _74.MsgUpdateClient;
                        };
                        upgradeClient(value: _74.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _74.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _74.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _74.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _74.MsgCreateClient): {
                            typeUrl: string;
                            value: _74.MsgCreateClient;
                        };
                        updateClient(value: _74.MsgUpdateClient): {
                            typeUrl: string;
                            value: _74.MsgUpdateClient;
                        };
                        upgradeClient(value: _74.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _74.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _74.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _74.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _74.MsgCreateClient) => {
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
                        }) => _74.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _74.MsgUpdateClient) => {
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
                        }) => _74.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _74.MsgUpgradeClient) => {
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
                        }) => _74.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _74.MsgSubmitMisbehaviour) => {
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
                        }) => _74.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _74.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgCreateClient;
                    fromPartial(object: any): _74.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _74.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgCreateClientResponse;
                    fromPartial(_: any): _74.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _74.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateClient;
                    fromPartial(object: any): _74.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _74.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateClientResponse;
                    fromPartial(_: any): _74.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _74.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpgradeClient;
                    fromPartial(object: any): _74.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _74.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpgradeClientResponse;
                    fromPartial(_: any): _74.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _74.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSubmitMisbehaviour;
                    fromPartial(object: any): _74.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _74.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: any): _74.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _73.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStateRequest;
                    fromPartial(object: any): _73.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _73.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStateResponse;
                    fromPartial(object: any): _73.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _73.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatesRequest;
                    fromPartial(object: any): _73.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _73.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatesResponse;
                    fromPartial(object: any): _73.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _73.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateRequest;
                    fromPartial(object: any): _73.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _73.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateResponse;
                    fromPartial(object: any): _73.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _73.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStatesRequest;
                    fromPartial(object: any): _73.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _73.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStatesResponse;
                    fromPartial(object: any): _73.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _73.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateHeightsRequest;
                    fromPartial(object: any): _73.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _73.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryConsensusStateHeightsResponse;
                    fromPartial(object: any): _73.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _73.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatusRequest;
                    fromPartial(object: any): _73.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _73.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientStatusResponse;
                    fromPartial(object: any): _73.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _73.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientParamsRequest;
                    fromPartial(_: any): _73.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _73.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryClientParamsResponse;
                    fromPartial(object: any): _73.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _73.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedClientStateRequest;
                    fromPartial(_: any): _73.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _73.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedClientStateResponse;
                    fromPartial(object: any): _73.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _73.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: any): _73.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _73.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: any): _73.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                    fromPartial(object: any): _72.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _72.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisMetadata;
                    fromPartial(object: any): _72.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _72.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.IdentifiedGenesisMetadata;
                    fromPartial(object: any): _72.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _71.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.IdentifiedClientState;
                    fromPartial(object: any): _71.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _71.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ConsensusStateWithHeight;
                    fromPartial(object: any): _71.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _71.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ClientConsensusStates;
                    fromPartial(object: any): _71.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _71.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ClientUpdateProposal;
                    fromPartial(object: any): _71.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _71.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.UpgradeProposal;
                    fromPartial(object: any): _71.UpgradeProposal;
                };
                Height: {
                    encode(message: _71.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Height;
                    fromPartial(object: any): _71.Height;
                };
                Params: {
                    encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Params;
                    fromPartial(object: any): _71.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _75.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerkleRoot;
                    fromPartial(object: any): _75.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _75.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerklePrefix;
                    fromPartial(object: any): _75.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _75.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerklePath;
                    fromPartial(object: any): _75.MerklePath;
                };
                MerkleProof: {
                    encode(message: _75.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MerkleProof;
                    fromPartial(object: any): _75.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _154.MsgClientImpl;
                QueryClientImpl: typeof _150.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _78.QueryConnectionRequest): Promise<_78.QueryConnectionResponse>;
                    connections(request?: _78.QueryConnectionsRequest): Promise<_78.QueryConnectionsResponse>;
                    clientConnections(request: _78.QueryClientConnectionsRequest): Promise<_78.QueryClientConnectionsResponse>;
                    connectionClientState(request: _78.QueryConnectionClientStateRequest): Promise<_78.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _78.QueryConnectionConsensusStateRequest): Promise<_78.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _144.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _79.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _79.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _79.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _79.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _79.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _79.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _79.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _79.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _79.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _79.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _79.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _79.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _79.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _79.MsgConnectionOpenInit) => {
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
                        }) => _79.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _79.MsgConnectionOpenTry) => {
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
                        }) => _79.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _79.MsgConnectionOpenAck) => {
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
                        }) => _79.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _79.MsgConnectionOpenConfirm) => {
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
                        }) => _79.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _79.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenInit;
                    fromPartial(object: any): _79.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _79.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenInitResponse;
                    fromPartial(_: any): _79.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _79.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenTry;
                    fromPartial(object: any): _79.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _79.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenTryResponse;
                    fromPartial(_: any): _79.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _79.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenAck;
                    fromPartial(object: any): _79.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _79.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenAckResponse;
                    fromPartial(_: any): _79.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _79.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenConfirm;
                    fromPartial(object: any): _79.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _79.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: any): _79.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _78.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionRequest;
                    fromPartial(object: any): _78.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _78.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionResponse;
                    fromPartial(object: any): _78.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _78.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionsRequest;
                    fromPartial(object: any): _78.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _78.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionsResponse;
                    fromPartial(object: any): _78.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _78.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientConnectionsRequest;
                    fromPartial(object: any): _78.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _78.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryClientConnectionsResponse;
                    fromPartial(object: any): _78.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _78.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionClientStateRequest;
                    fromPartial(object: any): _78.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _78.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionClientStateResponse;
                    fromPartial(object: any): _78.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _78.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionConsensusStateRequest;
                    fromPartial(object: any): _78.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _78.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.QueryConnectionConsensusStateResponse;
                    fromPartial(object: any): _78.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _77.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.GenesisState;
                    fromPartial(object: any): _77.GenesisState;
                };
                stateFromJSON(object: any): _76.State;
                stateToJSON(object: _76.State): string;
                State: typeof _76.State;
                StateSDKType: typeof _76.StateSDKType;
                ConnectionEnd: {
                    encode(message: _76.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConnectionEnd;
                    fromPartial(object: any): _76.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _76.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.IdentifiedConnection;
                    fromPartial(object: any): _76.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _76.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Counterparty;
                    fromPartial(object: any): _76.Counterparty;
                };
                ClientPaths: {
                    encode(message: _76.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ClientPaths;
                    fromPartial(object: any): _76.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _76.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.ConnectionPaths;
                    fromPartial(object: any): _76.ConnectionPaths;
                };
                Version: {
                    encode(message: _76.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Version;
                    fromPartial(object: any): _76.Version;
                };
                Params: {
                    encode(message: _76.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Params;
                    fromPartial(object: any): _76.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _80.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ClientState;
                    fromPartial(object: any): _80.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _81.DataType;
                dataTypeToJSON(object: _81.DataType): string;
                DataType: typeof _81.DataType;
                DataTypeSDKType: typeof _81.DataTypeSDKType;
                ClientState: {
                    encode(message: _81.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ClientState;
                    fromPartial(object: any): _81.ClientState;
                };
                ConsensusState: {
                    encode(message: _81.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ConsensusState;
                    fromPartial(object: any): _81.ConsensusState;
                };
                Header: {
                    encode(message: _81.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Header;
                    fromPartial(object: any): _81.Header;
                };
                Misbehaviour: {
                    encode(message: _81.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Misbehaviour;
                    fromPartial(object: any): _81.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _81.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SignatureAndData;
                    fromPartial(object: any): _81.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _81.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.TimestampedSignatureData;
                    fromPartial(object: any): _81.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _81.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.SignBytes;
                    fromPartial(object: any): _81.SignBytes;
                };
                HeaderData: {
                    encode(message: _81.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.HeaderData;
                    fromPartial(object: any): _81.HeaderData;
                };
                ClientStateData: {
                    encode(message: _81.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ClientStateData;
                    fromPartial(object: any): _81.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _81.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ConsensusStateData;
                    fromPartial(object: any): _81.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _81.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ConnectionStateData;
                    fromPartial(object: any): _81.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _81.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ChannelStateData;
                    fromPartial(object: any): _81.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _81.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PacketCommitmentData;
                    fromPartial(object: any): _81.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _81.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PacketAcknowledgementData;
                    fromPartial(object: any): _81.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _81.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.PacketReceiptAbsenceData;
                    fromPartial(object: any): _81.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _81.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.NextSequenceRecvData;
                    fromPartial(object: any): _81.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _82.DataType;
                dataTypeToJSON(object: _82.DataType): string;
                DataType: typeof _82.DataType;
                DataTypeSDKType: typeof _82.DataTypeSDKType;
                ClientState: {
                    encode(message: _82.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientState;
                    fromPartial(object: any): _82.ClientState;
                };
                ConsensusState: {
                    encode(message: _82.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusState;
                    fromPartial(object: any): _82.ConsensusState;
                };
                Header: {
                    encode(message: _82.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Header;
                    fromPartial(object: any): _82.Header;
                };
                Misbehaviour: {
                    encode(message: _82.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Misbehaviour;
                    fromPartial(object: any): _82.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _82.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SignatureAndData;
                    fromPartial(object: any): _82.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _82.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.TimestampedSignatureData;
                    fromPartial(object: any): _82.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _82.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.SignBytes;
                    fromPartial(object: any): _82.SignBytes;
                };
                HeaderData: {
                    encode(message: _82.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.HeaderData;
                    fromPartial(object: any): _82.HeaderData;
                };
                ClientStateData: {
                    encode(message: _82.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientStateData;
                    fromPartial(object: any): _82.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _82.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusStateData;
                    fromPartial(object: any): _82.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _82.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConnectionStateData;
                    fromPartial(object: any): _82.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _82.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ChannelStateData;
                    fromPartial(object: any): _82.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _82.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketCommitmentData;
                    fromPartial(object: any): _82.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _82.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketAcknowledgementData;
                    fromPartial(object: any): _82.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _82.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PacketReceiptAbsenceData;
                    fromPartial(object: any): _82.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _82.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.NextSequenceRecvData;
                    fromPartial(object: any): _82.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _83.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientState;
                    fromPartial(object: any): _83.ClientState;
                };
                ConsensusState: {
                    encode(message: _83.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusState;
                    fromPartial(object: any): _83.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _83.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Misbehaviour;
                    fromPartial(object: any): _83.Misbehaviour;
                };
                Header: {
                    encode(message: _83.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Header;
                    fromPartial(object: any): _83.Header;
                };
                Fraction: {
                    encode(message: _83.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Fraction;
                    fromPartial(object: any): _83.Fraction;
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
                        v1: _151.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _152.MsgClientImpl;
                    };
                    client: {
                        v1: _153.MsgClientImpl;
                    };
                    connection: {
                        v1: _154.MsgClientImpl;
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
                                interchainAccount(request: _55.QueryInterchainAccountRequest): Promise<_55.QueryInterchainAccountResponse>;
                                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _63.QueryDenomTraceRequest): Promise<_63.QueryDenomTraceResponse>;
                            denomTraces(request?: _63.QueryDenomTracesRequest): Promise<_63.QueryDenomTracesResponse>;
                            params(request?: _63.QueryParamsRequest): Promise<_63.QueryParamsResponse>;
                            denomHash(request: _63.QueryDenomHashRequest): Promise<_63.QueryDenomHashResponse>;
                            escrowAddress(request: _63.QueryEscrowAddressRequest): Promise<_63.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _69.QueryChannelRequest): Promise<_69.QueryChannelResponse>;
                            channels(request?: _69.QueryChannelsRequest): Promise<_69.QueryChannelsResponse>;
                            connectionChannels(request: _69.QueryConnectionChannelsRequest): Promise<_69.QueryConnectionChannelsResponse>;
                            channelClientState(request: _69.QueryChannelClientStateRequest): Promise<_69.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _69.QueryChannelConsensusStateRequest): Promise<_69.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _69.QueryPacketCommitmentRequest): Promise<_69.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _69.QueryPacketCommitmentsRequest): Promise<_69.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _69.QueryPacketReceiptRequest): Promise<_69.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _69.QueryPacketAcknowledgementRequest): Promise<_69.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _69.QueryPacketAcknowledgementsRequest): Promise<_69.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _69.QueryUnreceivedPacketsRequest): Promise<_69.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _69.QueryUnreceivedAcksRequest): Promise<_69.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _69.QueryNextSequenceReceiveRequest): Promise<_69.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _73.QueryClientStateRequest): Promise<_73.QueryClientStateResponse>;
                            clientStates(request?: _73.QueryClientStatesRequest): Promise<_73.QueryClientStatesResponse>;
                            consensusState(request: _73.QueryConsensusStateRequest): Promise<_73.QueryConsensusStateResponse>;
                            consensusStates(request: _73.QueryConsensusStatesRequest): Promise<_73.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _73.QueryConsensusStateHeightsRequest): Promise<_73.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _73.QueryClientStatusRequest): Promise<_73.QueryClientStatusResponse>;
                            clientParams(request?: _73.QueryClientParamsRequest): Promise<_73.QueryClientParamsResponse>;
                            upgradedClientState(request?: _73.QueryUpgradedClientStateRequest): Promise<_73.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _73.QueryUpgradedConsensusStateRequest): Promise<_73.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _78.QueryConnectionRequest): Promise<_78.QueryConnectionResponse>;
                            connections(request?: _78.QueryConnectionsRequest): Promise<_78.QueryConnectionsResponse>;
                            clientConnections(request: _78.QueryClientConnectionsRequest): Promise<_78.QueryClientConnectionsResponse>;
                            connectionClientState(request: _78.QueryConnectionClientStateRequest): Promise<_78.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _78.QueryConnectionConsensusStateRequest): Promise<_78.QueryConnectionConsensusStateResponse>;
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
                            v1: _139.LCDQueryClient;
                        };
                        host: {
                            v1: _140.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _141.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _142.LCDQueryClient;
                    };
                    client: {
                        v1: _143.LCDQueryClient;
                    };
                    connection: {
                        v1: _144.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
