import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { CadenceContract, CadenceContractAmino } from "./cadence";
import { Params, ParamsAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * QueryCadenceContracts is the request type to get all contracts.
 * @name QueryCadenceContracts
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContracts
 */
export interface QueryCadenceContracts {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryCadenceContractsProtoMsg {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContracts";
  value: Uint8Array;
}
/**
 * QueryCadenceContracts is the request type to get all contracts.
 * @name QueryCadenceContractsAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContracts
 */
export interface QueryCadenceContractsAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryCadenceContractsAminoMsg {
  type: "/bitsong.cadence.v1.QueryCadenceContracts";
  value: QueryCadenceContractsAmino;
}
/**
 * QueryCadenceContractsResponse is the response type for the Query/CadenceContracts RPC method.
 * @name QueryCadenceContractsResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContractsResponse
 */
export interface QueryCadenceContractsResponse {
  /**
   * cadence_contracts are the cadence contract s.
   */
  cadenceContracts: CadenceContract[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryCadenceContractsResponseProtoMsg {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContractsResponse";
  value: Uint8Array;
}
/**
 * QueryCadenceContractsResponse is the response type for the Query/CadenceContracts RPC method.
 * @name QueryCadenceContractsResponseAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContractsResponse
 */
export interface QueryCadenceContractsResponseAmino {
  /**
   * cadence_contracts are the cadence contract s.
   */
  cadence_contracts: CadenceContractAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryCadenceContractsResponseAminoMsg {
  type: "/bitsong.cadence.v1.QueryCadenceContractsResponse";
  value: QueryCadenceContractsResponseAmino;
}
/**
 * QueryCadenceContract is the request type to get a single contract.
 * @name QueryCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContract
 */
export interface QueryCadenceContract {
  /**
   * contract_address is the address of the contract to query.
   */
  contractAddress: string;
}
export interface QueryCadenceContractProtoMsg {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContract";
  value: Uint8Array;
}
/**
 * QueryCadenceContract is the request type to get a single contract.
 * @name QueryCadenceContractAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContract
 */
export interface QueryCadenceContractAmino {
  /**
   * contract_address is the address of the contract to query.
   */
  contract_address: string;
}
export interface QueryCadenceContractAminoMsg {
  type: "/bitsong.cadence.v1.QueryCadenceContract";
  value: QueryCadenceContractAmino;
}
/**
 * QueryCadenceContractResponse is the response type for the Query/CadenceContract RPC method.
 * @name QueryCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContractResponse
 */
export interface QueryCadenceContractResponse {
  /**
   * contract is the cadence contract .
   */
  cadenceContract: CadenceContract;
}
export interface QueryCadenceContractResponseProtoMsg {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContractResponse";
  value: Uint8Array;
}
/**
 * QueryCadenceContractResponse is the response type for the Query/CadenceContract RPC method.
 * @name QueryCadenceContractResponseAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContractResponse
 */
export interface QueryCadenceContractResponseAmino {
  /**
   * contract is the cadence contract .
   */
  cadence_contract: CadenceContractAmino;
}
export interface QueryCadenceContractResponseAminoMsg {
  type: "/bitsong.cadence.v1.QueryCadenceContractResponse";
  value: QueryCadenceContractResponseAmino;
}
/**
 * QueryParams is the request type to get all module params.
 * @name QueryParamsRequest
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/bitsong.cadence.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParams is the request type to get all module params.
 * @name QueryParamsRequestAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/bitsong.cadence.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryCadenceContractsResponse is the response type for the Query/CadenceContracts RPC method.
 * @name QueryParamsResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/bitsong.cadence.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryCadenceContractsResponse is the response type for the Query/CadenceContracts RPC method.
 * @name QueryParamsResponseAmino
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/bitsong.cadence.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryCadenceContracts(): QueryCadenceContracts {
  return {
    pagination: undefined
  };
}
/**
 * QueryCadenceContracts is the request type to get all contracts.
 * @name QueryCadenceContracts
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContracts
 */
export const QueryCadenceContracts = {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContracts",
  is(o: any): o is QueryCadenceContracts {
    return o && o.$typeUrl === QueryCadenceContracts.typeUrl;
  },
  isAmino(o: any): o is QueryCadenceContractsAmino {
    return o && o.$typeUrl === QueryCadenceContracts.typeUrl;
  },
  encode(message: QueryCadenceContracts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadenceContracts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadenceContracts();
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
  fromPartial(object: DeepPartial<QueryCadenceContracts>): QueryCadenceContracts {
    const message = createBaseQueryCadenceContracts();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCadenceContractsAmino): QueryCadenceContracts {
    const message = createBaseQueryCadenceContracts();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCadenceContracts): QueryCadenceContractsAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCadenceContractsAminoMsg): QueryCadenceContracts {
    return QueryCadenceContracts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadenceContractsProtoMsg): QueryCadenceContracts {
    return QueryCadenceContracts.decode(message.value);
  },
  toProto(message: QueryCadenceContracts): Uint8Array {
    return QueryCadenceContracts.encode(message).finish();
  },
  toProtoMsg(message: QueryCadenceContracts): QueryCadenceContractsProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.QueryCadenceContracts",
      value: QueryCadenceContracts.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCadenceContracts.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryCadenceContractsResponse(): QueryCadenceContractsResponse {
  return {
    cadenceContracts: [],
    pagination: undefined
  };
}
/**
 * QueryCadenceContractsResponse is the response type for the Query/CadenceContracts RPC method.
 * @name QueryCadenceContractsResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContractsResponse
 */
export const QueryCadenceContractsResponse = {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContractsResponse",
  is(o: any): o is QueryCadenceContractsResponse {
    return o && (o.$typeUrl === QueryCadenceContractsResponse.typeUrl || Array.isArray(o.cadenceContracts) && (!o.cadenceContracts.length || CadenceContract.is(o.cadenceContracts[0])));
  },
  isAmino(o: any): o is QueryCadenceContractsResponseAmino {
    return o && (o.$typeUrl === QueryCadenceContractsResponse.typeUrl || Array.isArray(o.cadence_contracts) && (!o.cadence_contracts.length || CadenceContract.isAmino(o.cadence_contracts[0])));
  },
  encode(message: QueryCadenceContractsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cadenceContracts) {
      CadenceContract.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadenceContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadenceContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cadenceContracts.push(CadenceContract.decode(reader, reader.uint32()));
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
  fromPartial(object: DeepPartial<QueryCadenceContractsResponse>): QueryCadenceContractsResponse {
    const message = createBaseQueryCadenceContractsResponse();
    message.cadenceContracts = object.cadenceContracts?.map(e => CadenceContract.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCadenceContractsResponseAmino): QueryCadenceContractsResponse {
    const message = createBaseQueryCadenceContractsResponse();
    message.cadenceContracts = object.cadence_contracts?.map(e => CadenceContract.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCadenceContractsResponse): QueryCadenceContractsResponseAmino {
    const obj: any = {};
    if (message.cadenceContracts) {
      obj.cadence_contracts = message.cadenceContracts.map(e => e ? CadenceContract.toAmino(e) : undefined);
    } else {
      obj.cadence_contracts = message.cadenceContracts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCadenceContractsResponseAminoMsg): QueryCadenceContractsResponse {
    return QueryCadenceContractsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadenceContractsResponseProtoMsg): QueryCadenceContractsResponse {
    return QueryCadenceContractsResponse.decode(message.value);
  },
  toProto(message: QueryCadenceContractsResponse): Uint8Array {
    return QueryCadenceContractsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCadenceContractsResponse): QueryCadenceContractsResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.QueryCadenceContractsResponse",
      value: QueryCadenceContractsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCadenceContractsResponse.typeUrl)) {
      return;
    }
    CadenceContract.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryCadenceContract(): QueryCadenceContract {
  return {
    contractAddress: ""
  };
}
/**
 * QueryCadenceContract is the request type to get a single contract.
 * @name QueryCadenceContract
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContract
 */
export const QueryCadenceContract = {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContract",
  is(o: any): o is QueryCadenceContract {
    return o && (o.$typeUrl === QueryCadenceContract.typeUrl || typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is QueryCadenceContractAmino {
    return o && (o.$typeUrl === QueryCadenceContract.typeUrl || typeof o.contract_address === "string");
  },
  encode(message: QueryCadenceContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadenceContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadenceContract();
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
  fromPartial(object: DeepPartial<QueryCadenceContract>): QueryCadenceContract {
    const message = createBaseQueryCadenceContract();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryCadenceContractAmino): QueryCadenceContract {
    const message = createBaseQueryCadenceContract();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryCadenceContract): QueryCadenceContractAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryCadenceContractAminoMsg): QueryCadenceContract {
    return QueryCadenceContract.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadenceContractProtoMsg): QueryCadenceContract {
    return QueryCadenceContract.decode(message.value);
  },
  toProto(message: QueryCadenceContract): Uint8Array {
    return QueryCadenceContract.encode(message).finish();
  },
  toProtoMsg(message: QueryCadenceContract): QueryCadenceContractProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.QueryCadenceContract",
      value: QueryCadenceContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryCadenceContractResponse(): QueryCadenceContractResponse {
  return {
    cadenceContract: CadenceContract.fromPartial({})
  };
}
/**
 * QueryCadenceContractResponse is the response type for the Query/CadenceContract RPC method.
 * @name QueryCadenceContractResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryCadenceContractResponse
 */
export const QueryCadenceContractResponse = {
  typeUrl: "/bitsong.cadence.v1.QueryCadenceContractResponse",
  is(o: any): o is QueryCadenceContractResponse {
    return o && (o.$typeUrl === QueryCadenceContractResponse.typeUrl || CadenceContract.is(o.cadenceContract));
  },
  isAmino(o: any): o is QueryCadenceContractResponseAmino {
    return o && (o.$typeUrl === QueryCadenceContractResponse.typeUrl || CadenceContract.isAmino(o.cadence_contract));
  },
  encode(message: QueryCadenceContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cadenceContract !== undefined) {
      CadenceContract.encode(message.cadenceContract, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCadenceContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCadenceContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cadenceContract = CadenceContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryCadenceContractResponse>): QueryCadenceContractResponse {
    const message = createBaseQueryCadenceContractResponse();
    message.cadenceContract = object.cadenceContract !== undefined && object.cadenceContract !== null ? CadenceContract.fromPartial(object.cadenceContract) : undefined;
    return message;
  },
  fromAmino(object: QueryCadenceContractResponseAmino): QueryCadenceContractResponse {
    const message = createBaseQueryCadenceContractResponse();
    if (object.cadence_contract !== undefined && object.cadence_contract !== null) {
      message.cadenceContract = CadenceContract.fromAmino(object.cadence_contract);
    }
    return message;
  },
  toAmino(message: QueryCadenceContractResponse): QueryCadenceContractResponseAmino {
    const obj: any = {};
    obj.cadence_contract = message.cadenceContract ? CadenceContract.toAmino(message.cadenceContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCadenceContractResponseAminoMsg): QueryCadenceContractResponse {
    return QueryCadenceContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCadenceContractResponseProtoMsg): QueryCadenceContractResponse {
    return QueryCadenceContractResponse.decode(message.value);
  },
  toProto(message: QueryCadenceContractResponse): Uint8Array {
    return QueryCadenceContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCadenceContractResponse): QueryCadenceContractResponseProtoMsg {
    return {
      typeUrl: "/bitsong.cadence.v1.QueryCadenceContractResponse",
      value: QueryCadenceContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryCadenceContractResponse.typeUrl)) {
      return;
    }
    CadenceContract.registerTypeUrl();
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParams is the request type to get all module params.
 * @name QueryParamsRequest
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/bitsong.cadence.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
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
      typeUrl: "/bitsong.cadence.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
/**
 * QueryCadenceContractsResponse is the response type for the Query/CadenceContracts RPC method.
 * @name QueryParamsResponse
 * @package bitsong.cadence.v1
 * @see proto type: bitsong.cadence.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/bitsong.cadence.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
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
      typeUrl: "/bitsong.cadence.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};