/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { FanToken, Params } from '../../../bitsong/fantoken/v1beta1/fantoken';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'bitsong.fantoken.v1beta1';

/** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
export interface QueryFanTokenRequest {
    denom: string;
}

/** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
export interface QueryFanTokenResponse {
    token?: FanToken;
}

/** QueryFanTokensRequest is request type for the Query/FanTokens RPC method */
export interface QueryFanTokensRequest {
    owner: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}

/** QueryFanTokensResponse is response type for the Query/FanTokens RPC method */
export interface QueryFanTokensResponse {
    tokens: FanToken[];
    pagination?: PageResponse;
}

/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {}

/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params?: Params;
}

/** QueryTotalBurnRequest is request type for the Query/TotalBurn RPC method */
export interface QueryTotalBurnRequest {}

/** QueryTotalBurnResponse is response type for the Query/TotalBurn RPC method */
export interface QueryTotalBurnResponse {
    burnedCoins: Coin[];
}

function createBaseQueryFanTokenRequest(): QueryFanTokenRequest {
    return { denom: '' };
}

export const QueryFanTokenRequest = {
    encode(message: QueryFanTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFanTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryFanTokenRequest {
        return {
            denom: isSet(object.denom) ? String(object.denom) : '',
        };
    },

    toJSON(message: QueryFanTokenRequest): unknown {
        const obj: any = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryFanTokenRequest>, I>>(object: I): QueryFanTokenRequest {
        const message = createBaseQueryFanTokenRequest();
        message.denom = object.denom ?? '';
        return message;
    },
};

function createBaseQueryFanTokenResponse(): QueryFanTokenResponse {
    return { token: undefined };
}

export const QueryFanTokenResponse = {
    encode(message: QueryFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.token !== undefined) {
            FanToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFanTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = FanToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryFanTokenResponse {
        return {
            token: isSet(object.token) ? FanToken.fromJSON(object.token) : undefined,
        };
    },

    toJSON(message: QueryFanTokenResponse): unknown {
        const obj: any = {};
        message.token !== undefined && (obj.token = message.token ? FanToken.toJSON(message.token) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryFanTokenResponse>, I>>(object: I): QueryFanTokenResponse {
        const message = createBaseQueryFanTokenResponse();
        message.token = object.token !== undefined && object.token !== null ? FanToken.fromPartial(object.token) : undefined;
        return message;
    },
};

function createBaseQueryFanTokensRequest(): QueryFanTokensRequest {
    return { owner: '', pagination: undefined };
}

export const QueryFanTokensRequest = {
    encode(message: QueryFanTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFanTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryFanTokensRequest {
        return {
            owner: isSet(object.owner) ? String(object.owner) : '',
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryFanTokensRequest): unknown {
        const obj: any = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryFanTokensRequest>, I>>(object: I): QueryFanTokensRequest {
        const message = createBaseQueryFanTokensRequest();
        message.owner = object.owner ?? '';
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryFanTokensResponse(): QueryFanTokensResponse {
    return { tokens: [], pagination: undefined };
}

export const QueryFanTokensResponse = {
    encode(message: QueryFanTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.tokens) {
            FanToken.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFanTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens.push(FanToken.decode(reader, reader.uint32()));
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

    fromJSON(object: any): QueryFanTokensResponse {
        return {
            tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => FanToken.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },

    toJSON(message: QueryFanTokensResponse): unknown {
        const obj: any = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => (e ? FanToken.toJSON(e) : undefined));
        } else {
            obj.tokens = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryFanTokensResponse>, I>>(object: I): QueryFanTokensResponse {
        const message = createBaseQueryFanTokensResponse();
        message.tokens = object.tokens?.map((e) => FanToken.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
    return {};
}

export const QueryParamsRequest = {
    encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

    fromJSON(_: any): QueryParamsRequest {
        return {};
    },

    toJSON(_: QueryParamsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
    return { params: undefined };
}

export const QueryParamsResponse = {
    encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

    fromJSON(object: any): QueryParamsResponse {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },

    toJSON(message: QueryParamsResponse): unknown {
        const obj: any = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
};

function createBaseQueryTotalBurnRequest(): QueryTotalBurnRequest {
    return {};
}

export const QueryTotalBurnRequest = {
    encode(_: QueryTotalBurnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBurnRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalBurnRequest();
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

    fromJSON(_: any): QueryTotalBurnRequest {
        return {};
    },

    toJSON(_: QueryTotalBurnRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryTotalBurnRequest>, I>>(_: I): QueryTotalBurnRequest {
        const message = createBaseQueryTotalBurnRequest();
        return message;
    },
};

function createBaseQueryTotalBurnResponse(): QueryTotalBurnResponse {
    return { burnedCoins: [] };
}

export const QueryTotalBurnResponse = {
    encode(message: QueryTotalBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.burnedCoins) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBurnResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalBurnResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.burnedCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryTotalBurnResponse {
        return {
            burnedCoins: Array.isArray(object?.burnedCoins) ? object.burnedCoins.map((e: any) => Coin.fromJSON(e)) : [],
        };
    },

    toJSON(message: QueryTotalBurnResponse): unknown {
        const obj: any = {};
        if (message.burnedCoins) {
            obj.burnedCoins = message.burnedCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
        } else {
            obj.burnedCoins = [];
        }
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<QueryTotalBurnResponse>, I>>(object: I): QueryTotalBurnResponse {
        const message = createBaseQueryTotalBurnResponse();
        message.burnedCoins = object.burnedCoins?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};

/** Query creates service with fantoken as RPC */
export interface Query {
    /** FanToken returns fantoken with fantoken name */
    FanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse>;
    /** FanTokens returns the fantoken list */
    FanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse>;
    /** Params queries the fantoken parameters */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** TotalBurn queries all the burnt coins */
    TotalBurn(request: QueryTotalBurnRequest): Promise<QueryTotalBurnResponse>;
}

export class QueryClientImpl implements Query {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.FanToken = this.FanToken.bind(this);
        this.FanTokens = this.FanTokens.bind(this);
        this.Params = this.Params.bind(this);
        this.TotalBurn = this.TotalBurn.bind(this);
    }
    FanToken(request: QueryFanTokenRequest): Promise<QueryFanTokenResponse> {
        const data = QueryFanTokenRequest.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.v1beta1.Query', 'FanToken', data);
        return promise.then((data) => QueryFanTokenResponse.decode(new _m0.Reader(data)));
    }

    FanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse> {
        const data = QueryFanTokensRequest.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.v1beta1.Query', 'FanTokens', data);
        return promise.then((data) => QueryFanTokensResponse.decode(new _m0.Reader(data)));
    }

    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.v1beta1.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }

    TotalBurn(request: QueryTotalBurnRequest): Promise<QueryTotalBurnResponse> {
        const data = QueryTotalBurnRequest.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.v1beta1.Query', 'TotalBurn', data);
        return promise.then((data) => QueryTotalBurnResponse.decode(new _m0.Reader(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Long
    ? string | number | Long
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
