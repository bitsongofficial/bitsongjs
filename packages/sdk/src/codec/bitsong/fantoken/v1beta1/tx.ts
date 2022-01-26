/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'bitsong.fantoken';

/** MsgIssueFanToken defines an SDK message for issuing a new fan token */
export interface MsgIssueFanToken {
    symbol: string;
    name: string;
    maxSupply: string;
    description: string;
    owner: string;
    issueFee?: Coin;
}

/** MsgIssueFanTokenResponse defines the Msg/IssueFanToken response type */
export interface MsgIssueFanTokenResponse {}

/**
 * MsgTransferFanTokenOwner defines an SDK message for transferring the token
 * owner
 */
export interface MsgTransferFanTokenOwner {
    denom: string;
    srcOwner: string;
    dstOwner: string;
}

/**
 * MsgTransferFanTokenOwnerResponse defines the Msg/TransferFanTokenOwner
 * response type
 */
export interface MsgTransferFanTokenOwnerResponse {}

/** MsgEditFanToken defines an SDK message for editing a fan token */
export interface MsgEditFanToken {
    denom: string;
    mintable: boolean;
    owner: string;
}

/** MsgEditFanTokenResponse defines the Msg/EditFanToken response type */
export interface MsgEditFanTokenResponse {}

/** MsgMintFanToken defines an SDK message for minting a new fan token */
export interface MsgMintFanToken {
    recipient: string;
    denom: string;
    amount: string;
    owner: string;
}

/** MsgMintFanTokenResponse defines the Msg/MintFanToken response type */
export interface MsgMintFanTokenResponse {}

/** MsgBurnFanToken defines an SDK message for burning some fan tokens */
export interface MsgBurnFanToken {
    denom: string;
    amount: string;
    sender: string;
}

/** MsgBurnFanTokenResponse defines the Msg/BurnFanToken response type */
export interface MsgBurnFanTokenResponse {}

function createBaseMsgIssueFanToken(): MsgIssueFanToken {
    return { symbol: '', name: '', maxSupply: '', description: '', owner: '', issueFee: undefined };
}

export const MsgIssueFanToken = {
    encode(message: MsgIssueFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.symbol !== '') {
            writer.uint32(10).string(message.symbol);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.maxSupply !== '') {
            writer.uint32(26).string(message.maxSupply);
        }
        if (message.description !== '') {
            writer.uint32(34).string(message.description);
        }
        if (message.owner !== '') {
            writer.uint32(42).string(message.owner);
        }
        if (message.issueFee !== undefined) {
            Coin.encode(message.issueFee, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueFanToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIssueFanToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.maxSupply = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.issueFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgIssueFanToken {
        return {
            symbol: isSet(object.symbol) ? String(object.symbol) : '',
            name: isSet(object.name) ? String(object.name) : '',
            maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : '',
            description: isSet(object.description) ? String(object.description) : '',
            owner: isSet(object.owner) ? String(object.owner) : '',
            issueFee: isSet(object.issueFee) ? Coin.fromJSON(object.issueFee) : undefined,
        };
    },

    toJSON(message: MsgIssueFanToken): unknown {
        const obj: any = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.name !== undefined && (obj.name = message.name);
        message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
        message.description !== undefined && (obj.description = message.description);
        message.owner !== undefined && (obj.owner = message.owner);
        message.issueFee !== undefined && (obj.issueFee = message.issueFee ? Coin.toJSON(message.issueFee) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgIssueFanToken>, I>>(object: I): MsgIssueFanToken {
        const message = createBaseMsgIssueFanToken();
        message.symbol = object.symbol ?? '';
        message.name = object.name ?? '';
        message.maxSupply = object.maxSupply ?? '';
        message.description = object.description ?? '';
        message.owner = object.owner ?? '';
        message.issueFee = object.issueFee !== undefined && object.issueFee !== null ? Coin.fromPartial(object.issueFee) : undefined;
        return message;
    },
};

function createBaseMsgIssueFanTokenResponse(): MsgIssueFanTokenResponse {
    return {};
}

export const MsgIssueFanTokenResponse = {
    encode(_: MsgIssueFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIssueFanTokenResponse();
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

    fromJSON(_: any): MsgIssueFanTokenResponse {
        return {};
    },

    toJSON(_: MsgIssueFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgIssueFanTokenResponse>, I>>(_: I): MsgIssueFanTokenResponse {
        const message = createBaseMsgIssueFanTokenResponse();
        return message;
    },
};

function createBaseMsgTransferFanTokenOwner(): MsgTransferFanTokenOwner {
    return { denom: '', srcOwner: '', dstOwner: '' };
}

export const MsgTransferFanTokenOwner = {
    encode(message: MsgTransferFanTokenOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.srcOwner !== '') {
            writer.uint32(18).string(message.srcOwner);
        }
        if (message.dstOwner !== '') {
            writer.uint32(26).string(message.dstOwner);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFanTokenOwner {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferFanTokenOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.srcOwner = reader.string();
                    break;
                case 3:
                    message.dstOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgTransferFanTokenOwner {
        return {
            denom: isSet(object.denom) ? String(object.denom) : '',
            srcOwner: isSet(object.srcOwner) ? String(object.srcOwner) : '',
            dstOwner: isSet(object.dstOwner) ? String(object.dstOwner) : '',
        };
    },

    toJSON(message: MsgTransferFanTokenOwner): unknown {
        const obj: any = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.srcOwner !== undefined && (obj.srcOwner = message.srcOwner);
        message.dstOwner !== undefined && (obj.dstOwner = message.dstOwner);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgTransferFanTokenOwner>, I>>(object: I): MsgTransferFanTokenOwner {
        const message = createBaseMsgTransferFanTokenOwner();
        message.denom = object.denom ?? '';
        message.srcOwner = object.srcOwner ?? '';
        message.dstOwner = object.dstOwner ?? '';
        return message;
    },
};

function createBaseMsgTransferFanTokenOwnerResponse(): MsgTransferFanTokenOwnerResponse {
    return {};
}

export const MsgTransferFanTokenOwnerResponse = {
    encode(_: MsgTransferFanTokenOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFanTokenOwnerResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferFanTokenOwnerResponse();
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

    fromJSON(_: any): MsgTransferFanTokenOwnerResponse {
        return {};
    },

    toJSON(_: MsgTransferFanTokenOwnerResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgTransferFanTokenOwnerResponse>, I>>(_: I): MsgTransferFanTokenOwnerResponse {
        const message = createBaseMsgTransferFanTokenOwnerResponse();
        return message;
    },
};

function createBaseMsgEditFanToken(): MsgEditFanToken {
    return { denom: '', mintable: false, owner: '' };
}

export const MsgEditFanToken = {
    encode(message: MsgEditFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.mintable === true) {
            writer.uint32(16).bool(message.mintable);
        }
        if (message.owner !== '') {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditFanToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditFanToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.mintable = reader.bool();
                    break;
                case 3:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgEditFanToken {
        return {
            denom: isSet(object.denom) ? String(object.denom) : '',
            mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
            owner: isSet(object.owner) ? String(object.owner) : '',
        };
    },

    toJSON(message: MsgEditFanToken): unknown {
        const obj: any = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.mintable !== undefined && (obj.mintable = message.mintable);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgEditFanToken>, I>>(object: I): MsgEditFanToken {
        const message = createBaseMsgEditFanToken();
        message.denom = object.denom ?? '';
        message.mintable = object.mintable ?? false;
        message.owner = object.owner ?? '';
        return message;
    },
};

function createBaseMsgEditFanTokenResponse(): MsgEditFanTokenResponse {
    return {};
}

export const MsgEditFanTokenResponse = {
    encode(_: MsgEditFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditFanTokenResponse();
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

    fromJSON(_: any): MsgEditFanTokenResponse {
        return {};
    },

    toJSON(_: MsgEditFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgEditFanTokenResponse>, I>>(_: I): MsgEditFanTokenResponse {
        const message = createBaseMsgEditFanTokenResponse();
        return message;
    },
};

function createBaseMsgMintFanToken(): MsgMintFanToken {
    return { recipient: '', denom: '', amount: '', owner: '' };
}

export const MsgMintFanToken = {
    encode(message: MsgMintFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.recipient !== '') {
            writer.uint32(10).string(message.recipient);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.amount !== '') {
            writer.uint32(26).string(message.amount);
        }
        if (message.owner !== '') {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFanToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintFanToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.amount = reader.string();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgMintFanToken {
        return {
            recipient: isSet(object.recipient) ? String(object.recipient) : '',
            denom: isSet(object.denom) ? String(object.denom) : '',
            amount: isSet(object.amount) ? String(object.amount) : '',
            owner: isSet(object.owner) ? String(object.owner) : '',
        };
    },

    toJSON(message: MsgMintFanToken): unknown {
        const obj: any = {};
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgMintFanToken>, I>>(object: I): MsgMintFanToken {
        const message = createBaseMsgMintFanToken();
        message.recipient = object.recipient ?? '';
        message.denom = object.denom ?? '';
        message.amount = object.amount ?? '';
        message.owner = object.owner ?? '';
        return message;
    },
};

function createBaseMsgMintFanTokenResponse(): MsgMintFanTokenResponse {
    return {};
}

export const MsgMintFanTokenResponse = {
    encode(_: MsgMintFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintFanTokenResponse();
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

    fromJSON(_: any): MsgMintFanTokenResponse {
        return {};
    },

    toJSON(_: MsgMintFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgMintFanTokenResponse>, I>>(_: I): MsgMintFanTokenResponse {
        const message = createBaseMsgMintFanTokenResponse();
        return message;
    },
};

function createBaseMsgBurnFanToken(): MsgBurnFanToken {
    return { denom: '', amount: '', sender: '' };
}

export const MsgBurnFanToken = {
    encode(message: MsgBurnFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        if (message.sender !== '') {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFanToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnFanToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MsgBurnFanToken {
        return {
            denom: isSet(object.denom) ? String(object.denom) : '',
            amount: isSet(object.amount) ? String(object.amount) : '',
            sender: isSet(object.sender) ? String(object.sender) : '',
        };
    },

    toJSON(message: MsgBurnFanToken): unknown {
        const obj: any = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgBurnFanToken>, I>>(object: I): MsgBurnFanToken {
        const message = createBaseMsgBurnFanToken();
        message.denom = object.denom ?? '';
        message.amount = object.amount ?? '';
        message.sender = object.sender ?? '';
        return message;
    },
};

function createBaseMsgBurnFanTokenResponse(): MsgBurnFanTokenResponse {
    return {};
}

export const MsgBurnFanTokenResponse = {
    encode(_: MsgBurnFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnFanTokenResponse();
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

    fromJSON(_: any): MsgBurnFanTokenResponse {
        return {};
    },

    toJSON(_: MsgBurnFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<MsgBurnFanTokenResponse>, I>>(_: I): MsgBurnFanTokenResponse {
        const message = createBaseMsgBurnFanTokenResponse();
        return message;
    },
};

/** Msg defines the oracle Msg service */
export interface Msg {
    /** IssueFanToken defines a method for issuing a new fan token */
    IssueFanToken(request: MsgIssueFanToken): Promise<MsgIssueFanTokenResponse>;
    /** EditFanToken defines a method for editing a fantoken */
    EditFanToken(request: MsgEditFanToken): Promise<MsgEditFanTokenResponse>;
    /** MintFanToken defines a method for minting some fan tokens */
    MintFanToken(request: MsgMintFanToken): Promise<MsgMintFanTokenResponse>;
    /** BurnFanToken defines a method for burning some fan tokens */
    BurnFanToken(request: MsgBurnFanToken): Promise<MsgBurnFanTokenResponse>;
    /** TransferFanTokenOwner defines a method for minting some fan tokens */
    TransferFanTokenOwner(request: MsgTransferFanTokenOwner): Promise<MsgTransferFanTokenOwnerResponse>;
}

export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc;
    constructor(rpc: Rpc) {
        this.rpc = rpc;
        this.IssueFanToken = this.IssueFanToken.bind(this);
        this.EditFanToken = this.EditFanToken.bind(this);
        this.MintFanToken = this.MintFanToken.bind(this);
        this.BurnFanToken = this.BurnFanToken.bind(this);
        this.TransferFanTokenOwner = this.TransferFanTokenOwner.bind(this);
    }
    IssueFanToken(request: MsgIssueFanToken): Promise<MsgIssueFanTokenResponse> {
        const data = MsgIssueFanToken.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Msg', 'IssueFanToken', data);
        return promise.then((data) => MsgIssueFanTokenResponse.decode(new _m0.Reader(data)));
    }

    EditFanToken(request: MsgEditFanToken): Promise<MsgEditFanTokenResponse> {
        const data = MsgEditFanToken.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Msg', 'EditFanToken', data);
        return promise.then((data) => MsgEditFanTokenResponse.decode(new _m0.Reader(data)));
    }

    MintFanToken(request: MsgMintFanToken): Promise<MsgMintFanTokenResponse> {
        const data = MsgMintFanToken.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Msg', 'MintFanToken', data);
        return promise.then((data) => MsgMintFanTokenResponse.decode(new _m0.Reader(data)));
    }

    BurnFanToken(request: MsgBurnFanToken): Promise<MsgBurnFanTokenResponse> {
        const data = MsgBurnFanToken.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Msg', 'BurnFanToken', data);
        return promise.then((data) => MsgBurnFanTokenResponse.decode(new _m0.Reader(data)));
    }

    TransferFanTokenOwner(request: MsgTransferFanTokenOwner): Promise<MsgTransferFanTokenOwnerResponse> {
        const data = MsgTransferFanTokenOwner.encode(request).finish();
        const promise = this.rpc.request('bitsong.fantoken.Msg', 'TransferFanTokenOwner', data);
        return promise.then((data) => MsgTransferFanTokenOwnerResponse.decode(new _m0.Reader(data)));
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
