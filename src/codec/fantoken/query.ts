/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { FanToken, Params } from '../fantoken/fantoken';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Coin } from '../cosmos/base/v1beta1/coin';

export const protobufPackage = 'bitsong.fantoken';

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
    res?: PageResponse;
}

/** QueryFanTokenRequest is request type for the Query/TotalBurn RPC method */
export interface QueryTotalBurnRequest {}

/** QueryTotalBurnResponse is response type for the Query/TotalBurn RPC method */
export interface QueryTotalBurnResponse {
    burnedCoins: Coin[];
}

const baseQueryFanTokenRequest: object = { denom: '' };

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
        const message = { ...baseQueryFanTokenRequest } as QueryFanTokenRequest;
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
        const message = { ...baseQueryFanTokenRequest } as QueryFanTokenRequest;
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = '';
        }
        return message;
    },

    toJSON(message: QueryFanTokenRequest): unknown {
        const obj: any = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryFanTokenRequest>): QueryFanTokenRequest {
        const message = { ...baseQueryFanTokenRequest } as QueryFanTokenRequest;
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = '';
        }
        return message;
    },
};

const baseQueryFanTokenResponse: object = {};

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
        const message = { ...baseQueryFanTokenResponse } as QueryFanTokenResponse;
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
        const message = { ...baseQueryFanTokenResponse } as QueryFanTokenResponse;
        if (object.token !== undefined && object.token !== null) {
            message.token = FanToken.fromJSON(object.token);
        } else {
            message.token = undefined;
        }
        return message;
    },

    toJSON(message: QueryFanTokenResponse): unknown {
        const obj: any = {};
        message.token !== undefined && (obj.token = message.token ? FanToken.toJSON(message.token) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryFanTokenResponse>): QueryFanTokenResponse {
        const message = { ...baseQueryFanTokenResponse } as QueryFanTokenResponse;
        if (object.token !== undefined && object.token !== null) {
            message.token = FanToken.fromPartial(object.token);
        } else {
            message.token = undefined;
        }
        return message;
    },
};

const baseQueryFanTokensRequest: object = { owner: '' };

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
        const message = { ...baseQueryFanTokensRequest } as QueryFanTokensRequest;
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
        const message = { ...baseQueryFanTokensRequest } as QueryFanTokensRequest;
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        } else {
            message.owner = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },

    toJSON(message: QueryFanTokensRequest): unknown {
        const obj: any = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryFanTokensRequest>): QueryFanTokensRequest {
        const message = { ...baseQueryFanTokensRequest } as QueryFanTokensRequest;
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        } else {
            message.owner = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryFanTokensResponse: object = {};

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
        const message = { ...baseQueryFanTokensResponse } as QueryFanTokensResponse;
        message.tokens = [];
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
        const message = { ...baseQueryFanTokensResponse } as QueryFanTokensResponse;
        message.tokens = [];
        if (object.tokens !== undefined && object.tokens !== null) {
            for (const e of object.tokens) {
                message.tokens.push(FanToken.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
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

    fromPartial(object: DeepPartial<QueryFanTokensResponse>): QueryFanTokensResponse {
        const message = { ...baseQueryFanTokensResponse } as QueryFanTokensResponse;
        message.tokens = [];
        if (object.tokens !== undefined && object.tokens !== null) {
            for (const e of object.tokens) {
                message.tokens.push(FanToken.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        } else {
            message.pagination = undefined;
        }
        return message;
    },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
    encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        return message;
    },

    toJSON(_: QueryParamsRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
        const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
        return message;
    },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
    encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.res !== undefined) {
            PageResponse.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.res = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): QueryParamsResponse {
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        } else {
            message.params = undefined;
        }
        if (object.res !== undefined && object.res !== null) {
            message.res = PageResponse.fromJSON(object.res);
        } else {
            message.res = undefined;
        }
        return message;
    },

    toJSON(message: QueryParamsResponse): unknown {
        const obj: any = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.res !== undefined && (obj.res = message.res ? PageResponse.toJSON(message.res) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
        const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        } else {
            message.params = undefined;
        }
        if (object.res !== undefined && object.res !== null) {
            message.res = PageResponse.fromPartial(object.res);
        } else {
            message.res = undefined;
        }
        return message;
    },
};

const baseQueryTotalBurnRequest: object = {};

export const QueryTotalBurnRequest = {
    encode(_: QueryTotalBurnRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBurnRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryTotalBurnRequest } as QueryTotalBurnRequest;
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
        const message = { ...baseQueryTotalBurnRequest } as QueryTotalBurnRequest;
        return message;
    },

    toJSON(_: QueryTotalBurnRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<QueryTotalBurnRequest>): QueryTotalBurnRequest {
        const message = { ...baseQueryTotalBurnRequest } as QueryTotalBurnRequest;
        return message;
    },
};

const baseQueryTotalBurnResponse: object = {};

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
        const message = { ...baseQueryTotalBurnResponse } as QueryTotalBurnResponse;
        message.burnedCoins = [];
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
        const message = { ...baseQueryTotalBurnResponse } as QueryTotalBurnResponse;
        message.burnedCoins = [];
        if (object.burnedCoins !== undefined && object.burnedCoins !== null) {
            for (const e of object.burnedCoins) {
                message.burnedCoins.push(Coin.fromJSON(e));
            }
        }
        return message;
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

    fromPartial(object: DeepPartial<QueryTotalBurnResponse>): QueryTotalBurnResponse {
        const message = { ...baseQueryTotalBurnResponse } as QueryTotalBurnResponse;
        message.burnedCoins = [];
        if (object.burnedCoins !== undefined && object.burnedCoins !== null) {
            for (const e of object.burnedCoins) {
                message.burnedCoins.push(Coin.fromPartial(e));
            }
        }
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
        const promise = this.rpc.request('bitsong.fantoken.Query', 'FanToken', data);
        return promise.then((data) => QueryFanTokenResponse.decode(new _m0.Reader(data)));
    }

    FanTokens(request: QueryFanTokensRequest): Promise<QueryFanTokensResponse> {
        const data = QueryFanTokensRequest.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Query', 'FanTokens', data);
        return promise.then((data) => QueryFanTokensResponse.decode(new _m0.Reader(data)));
    }

    Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Query', 'Params', data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }

    TotalBurn(request: QueryTotalBurnRequest): Promise<QueryTotalBurnResponse> {
        const data = QueryTotalBurnRequest.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Query', 'TotalBurn', data);
        return promise.then((data) => QueryTotalBurnResponse.decode(new _m0.Reader(data)));
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}
