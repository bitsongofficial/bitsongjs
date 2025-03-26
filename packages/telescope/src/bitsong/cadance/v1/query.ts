import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { CadanceContract, CadanceContractAmino, CadanceContractSDKType } from "./cadance";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/** QueryCadanceContracts is the request type to get all contracts. */
export interface QueryCadanceContracts {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryCadanceContractsProtoMsg {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContracts";
  value: Uint8Array;
}
/** QueryCadanceContracts is the request type to get all contracts. */
export interface QueryCadanceContractsAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryCadanceContractsAminoMsg {
  type: "/bitsong.cadance.v1.QueryCadanceContracts";
  value: QueryCadanceContractsAmino;
}
/** QueryCadanceContracts is the request type to get all contracts. */
export interface QueryCadanceContractsSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryCadanceContractsResponse is the response type for the Query/CadanceContracts RPC method. */
export interface QueryCadanceContractsResponse {
  /** cadance_contracts are the cadance contract s. */
  cadanceContracts: CadanceContract[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryCadanceContractsResponseProtoMsg {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContractsResponse";
  value: Uint8Array;
}
/** QueryCadanceContractsResponse is the response type for the Query/CadanceContracts RPC method. */
export interface QueryCadanceContractsResponseAmino {
  /** cadance_contracts are the cadance contract s. */
  cadance_contracts?: CadanceContractAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryCadanceContractsResponseAminoMsg {
  type: "/bitsong.cadance.v1.QueryCadanceContractsResponse";
  value: QueryCadanceContractsResponseAmino;
}
/** QueryCadanceContractsResponse is the response type for the Query/CadanceContracts RPC method. */
export interface QueryCadanceContractsResponseSDKType {
  cadance_contracts: CadanceContractSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryCadanceContract is the request type to get a single contract. */
export interface QueryCadanceContract {
  /** contract_address is the address of the contract to query. */
  contractAddress: string;
}
export interface QueryCadanceContractProtoMsg {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContract";
  value: Uint8Array;
}
/** QueryCadanceContract is the request type to get a single contract. */
export interface QueryCadanceContractAmino {
  /** contract_address is the address of the contract to query. */
  contract_address?: string;
}
export interface QueryCadanceContractAminoMsg {
  type: "/bitsong.cadance.v1.QueryCadanceContract";
  value: QueryCadanceContractAmino;
}
/** QueryCadanceContract is the request type to get a single contract. */
export interface QueryCadanceContractSDKType {
  contract_address: string;
}
/** QueryCadanceContractResponse is the response type for the Query/CadanceContract RPC method. */
export interface QueryCadanceContractResponse {
  /** contract is the cadance contract . */
  cadanceContract: CadanceContract;
}
export interface QueryCadanceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContractResponse";
  value: Uint8Array;
}
/** QueryCadanceContractResponse is the response type for the Query/CadanceContract RPC method. */
export interface QueryCadanceContractResponseAmino {
  /** contract is the cadance contract . */
  cadance_contract?: CadanceContractAmino;
}
export interface QueryCadanceContractResponseAminoMsg {
  type: "/bitsong.cadance.v1.QueryCadanceContractResponse";
  value: QueryCadanceContractResponseAmino;
}
/** QueryCadanceContractResponse is the response type for the Query/CadanceContract RPC method. */
export interface QueryCadanceContractResponseSDKType {
  cadance_contract: CadanceContractSDKType;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bitsong.cadance.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bitsong.cadance.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParams is the request type to get all module params. */
export interface QueryParamsRequestSDKType {}
/** QueryCadanceContractsResponse is the response type for the Query/CadanceContracts RPC method. */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bitsong.cadance.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryCadanceContractsResponse is the response type for the Query/CadanceContracts RPC method. */
export interface QueryParamsResponseAmino {
  params: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bitsong.cadance.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryCadanceContractsResponse is the response type for the Query/CadanceContracts RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseQueryCadanceContracts(): QueryCadanceContracts {
  return {
    pagination: undefined
  };
}
export const QueryCadanceContracts = {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContracts",
  is(o: any): o is QueryCadanceContracts {
    return o && o.$typeUrl === QueryCadanceContracts.typeUrl;
  },
  isSDK(o: any): o is QueryCadanceContractsSDKType {
    return o && o.$typeUrl === QueryCadanceContracts.typeUrl;
  },
  isAmino(o: any): o is QueryCadanceContractsAmino {
    return o && o.$typeUrl === QueryCadanceContracts.typeUrl;
  },
  encode(message: QueryCadanceContracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadanceContracts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadanceContracts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCadanceContracts>): QueryCadanceContracts {
    const message = createBaseQueryCadanceContracts();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCadanceContractsAmino): QueryCadanceContracts {
    const message = createBaseQueryCadanceContracts();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCadanceContracts): QueryCadanceContractsAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCadanceContractsAminoMsg): QueryCadanceContracts {
    return QueryCadanceContracts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadanceContractsProtoMsg): QueryCadanceContracts {
    return QueryCadanceContracts.decode(message.value);
  },
  toProto(message: QueryCadanceContracts): Uint8Array {
    return QueryCadanceContracts.encode(message).finish();
  },
  toProtoMsg(message: QueryCadanceContracts): QueryCadanceContractsProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.QueryCadanceContracts",
      value: QueryCadanceContracts.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCadanceContracts.typeUrl, QueryCadanceContracts);
function createBaseQueryCadanceContractsResponse(): QueryCadanceContractsResponse {
  return {
    cadanceContracts: [],
    pagination: undefined
  };
}
export const QueryCadanceContractsResponse = {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContractsResponse",
  is(o: any): o is QueryCadanceContractsResponse {
    return o && (o.$typeUrl === QueryCadanceContractsResponse.typeUrl || Array.isArray(o.cadanceContracts) && (!o.cadanceContracts.length || CadanceContract.is(o.cadanceContracts[0])));
  },
  isSDK(o: any): o is QueryCadanceContractsResponseSDKType {
    return o && (o.$typeUrl === QueryCadanceContractsResponse.typeUrl || Array.isArray(o.cadance_contracts) && (!o.cadance_contracts.length || CadanceContract.isSDK(o.cadance_contracts[0])));
  },
  isAmino(o: any): o is QueryCadanceContractsResponseAmino {
    return o && (o.$typeUrl === QueryCadanceContractsResponse.typeUrl || Array.isArray(o.cadance_contracts) && (!o.cadance_contracts.length || CadanceContract.isAmino(o.cadance_contracts[0])));
  },
  encode(message: QueryCadanceContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cadanceContracts) {
      CadanceContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadanceContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadanceContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cadanceContracts.push(CadanceContract.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCadanceContractsResponse>): QueryCadanceContractsResponse {
    const message = createBaseQueryCadanceContractsResponse();
    message.cadanceContracts = object.cadanceContracts?.map(e => CadanceContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCadanceContractsResponseAmino): QueryCadanceContractsResponse {
    const message = createBaseQueryCadanceContractsResponse();
    message.cadanceContracts = object.cadance_contracts?.map(e => CadanceContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCadanceContractsResponse): QueryCadanceContractsResponseAmino {
    const obj: any = {};
    if (message.cadanceContracts) {
      obj.cadance_contracts = message.cadanceContracts.map(e => e ? CadanceContract.toAmino(e) : undefined);
    } else {
      obj.cadance_contracts = message.cadanceContracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCadanceContractsResponseAminoMsg): QueryCadanceContractsResponse {
    return QueryCadanceContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadanceContractsResponseProtoMsg): QueryCadanceContractsResponse {
    return QueryCadanceContractsResponse.decode(message.value);
  },
  toProto(message: QueryCadanceContractsResponse): Uint8Array {
    return QueryCadanceContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCadanceContractsResponse): QueryCadanceContractsResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.QueryCadanceContractsResponse",
      value: QueryCadanceContractsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCadanceContractsResponse.typeUrl, QueryCadanceContractsResponse);
function createBaseQueryCadanceContract(): QueryCadanceContract {
  return {
    contractAddress: ""
  };
}
export const QueryCadanceContract = {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContract",
  is(o: any): o is QueryCadanceContract {
    return o && (o.$typeUrl === QueryCadanceContract.typeUrl || typeof o.contractAddress === "string");
  },
  isSDK(o: any): o is QueryCadanceContractSDKType {
    return o && (o.$typeUrl === QueryCadanceContract.typeUrl || typeof o.contract_address === "string");
  },
  isAmino(o: any): o is QueryCadanceContractAmino {
    return o && (o.$typeUrl === QueryCadanceContract.typeUrl || typeof o.contract_address === "string");
  },
  encode(message: QueryCadanceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadanceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadanceContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCadanceContract>): QueryCadanceContract {
    const message = createBaseQueryCadanceContract();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryCadanceContractAmino): QueryCadanceContract {
    const message = createBaseQueryCadanceContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryCadanceContract): QueryCadanceContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryCadanceContractAminoMsg): QueryCadanceContract {
    return QueryCadanceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadanceContractProtoMsg): QueryCadanceContract {
    return QueryCadanceContract.decode(message.value);
  },
  toProto(message: QueryCadanceContract): Uint8Array {
    return QueryCadanceContract.encode(message).finish();
  },
  toProtoMsg(message: QueryCadanceContract): QueryCadanceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.QueryCadanceContract",
      value: QueryCadanceContract.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCadanceContract.typeUrl, QueryCadanceContract);
function createBaseQueryCadanceContractResponse(): QueryCadanceContractResponse {
  return {
    cadanceContract: CadanceContract.fromPartial({})
  };
}
export const QueryCadanceContractResponse = {
  typeUrl: "/bitsong.cadance.v1.QueryCadanceContractResponse",
  is(o: any): o is QueryCadanceContractResponse {
    return o && (o.$typeUrl === QueryCadanceContractResponse.typeUrl || CadanceContract.is(o.cadanceContract));
  },
  isSDK(o: any): o is QueryCadanceContractResponseSDKType {
    return o && (o.$typeUrl === QueryCadanceContractResponse.typeUrl || CadanceContract.isSDK(o.cadance_contract));
  },
  isAmino(o: any): o is QueryCadanceContractResponseAmino {
    return o && (o.$typeUrl === QueryCadanceContractResponse.typeUrl || CadanceContract.isAmino(o.cadance_contract));
  },
  encode(message: QueryCadanceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cadanceContract !== undefined) {
      CadanceContract.encode(message.cadanceContract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadanceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadanceContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cadanceContract = CadanceContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCadanceContractResponse>): QueryCadanceContractResponse {
    const message = createBaseQueryCadanceContractResponse();
    message.cadanceContract = object.cadanceContract !== undefined && object.cadanceContract !== null ? CadanceContract.fromPartial(object.cadanceContract) : undefined;
    return message;
  },
  fromAmino(object: QueryCadanceContractResponseAmino): QueryCadanceContractResponse {
    const message = createBaseQueryCadanceContractResponse();
    if (object.cadance_contract !== undefined && object.cadance_contract !== null) {
      message.cadanceContract = CadanceContract.fromAmino(object.cadance_contract);
    }
    return message;
  },
  toAmino(message: QueryCadanceContractResponse): QueryCadanceContractResponseAmino {
    const obj: any = {};
    obj.cadance_contract = message.cadanceContract ? CadanceContract.toAmino(message.cadanceContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCadanceContractResponseAminoMsg): QueryCadanceContractResponse {
    return QueryCadanceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadanceContractResponseProtoMsg): QueryCadanceContractResponse {
    return QueryCadanceContractResponse.decode(message.value);
  },
  toProto(message: QueryCadanceContractResponse): Uint8Array {
    return QueryCadanceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCadanceContractResponse): QueryCadanceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.QueryCadanceContractResponse",
      value: QueryCadanceContractResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCadanceContractResponse.typeUrl, QueryCadanceContractResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/bitsong.cadance.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/bitsong.cadance.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadance.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);