/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../cosmos/base/v1beta1/coin';

export const protobufPackage = 'bitsong.fantoken';

/** MsgIssueFanToken defines an SDK message for issuing a new fan token */
export interface MsgIssueFanToken {
    symbol: string;
    name: string;
    maxSupply: Uint8Array;
    description: string;
    owner: string;
    issueFee?: Coin;
}

/** MsgIssueFanTokenResponse defines the Msg/IssueFanToken response type */
export interface MsgIssueFanTokenResponse {}

/** MsgTransferFanTokenOwner defines an SDK message for transferring the token owner */
export interface MsgTransferFanTokenOwner {
    symbol: string;
    srcOwner: string;
    dstOwner: string;
}

/** MsgTransferFanTokenOwnerResponse defines the Msg/TransferFanTokenOwner response type */
export interface MsgTransferFanTokenOwnerResponse {}

/** MsgEditFanToken defines an SDK message for editing a fan token */
export interface MsgEditFanToken {
    symbol: string;
    mintable: boolean;
    owner: string;
}

/** MsgEditFanTokenResponse defines the Msg/EditFanToken response type */
export interface MsgEditFanTokenResponse {}

/** MsgMintFanToken defines an SDK message for minting a new fan token */
export interface MsgMintFanToken {
    recipient: string;
    denom: string;
    amount: Uint8Array;
    owner: string;
}

/** MsgMintFanTokenResponse defines the Msg/MintFanToken response type */
export interface MsgMintFanTokenResponse {}

/** MsgBurnFanToken defines an SDK message for burning some fan tokens */
export interface MsgBurnFanToken {
    denom: string;
    amount: Uint8Array;
    sender: string;
}

/** MsgBurnFanTokenResponse defines the Msg/BurnFanToken response type */
export interface MsgBurnFanTokenResponse {}

const baseMsgIssueFanToken: object = { symbol: '', name: '', description: '', owner: '' };

export const MsgIssueFanToken = {
    encode(message: MsgIssueFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.symbol !== '') {
            writer.uint32(10).string(message.symbol);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.maxSupply.length !== 0) {
            writer.uint32(26).bytes(message.maxSupply);
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
        const message = { ...baseMsgIssueFanToken } as MsgIssueFanToken;
        message.maxSupply = new Uint8Array();
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
                    message.maxSupply = reader.bytes();
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
        const message = { ...baseMsgIssueFanToken } as MsgIssueFanToken;
        message.maxSupply = new Uint8Array();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        } else {
            message.symbol = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = bytesFromBase64(object.maxSupply);
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        } else {
            message.description = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        } else {
            message.owner = '';
        }
        if (object.issueFee !== undefined && object.issueFee !== null) {
            message.issueFee = Coin.fromJSON(object.issueFee);
        } else {
            message.issueFee = undefined;
        }
        return message;
    },

    toJSON(message: MsgIssueFanToken): unknown {
        const obj: any = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.name !== undefined && (obj.name = message.name);
        message.maxSupply !== undefined && (obj.maxSupply = base64FromBytes(message.maxSupply !== undefined ? message.maxSupply : new Uint8Array()));
        message.description !== undefined && (obj.description = message.description);
        message.owner !== undefined && (obj.owner = message.owner);
        message.issueFee !== undefined && (obj.issueFee = message.issueFee ? Coin.toJSON(message.issueFee) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgIssueFanToken>): MsgIssueFanToken {
        const message = { ...baseMsgIssueFanToken } as MsgIssueFanToken;
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        } else {
            message.symbol = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        } else {
            message.name = '';
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = object.maxSupply;
        } else {
            message.maxSupply = new Uint8Array();
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        } else {
            message.description = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        } else {
            message.owner = '';
        }
        if (object.issueFee !== undefined && object.issueFee !== null) {
            message.issueFee = Coin.fromPartial(object.issueFee);
        } else {
            message.issueFee = undefined;
        }
        return message;
    },
};

const baseMsgIssueFanTokenResponse: object = {};

export const MsgIssueFanTokenResponse = {
    encode(_: MsgIssueFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgIssueFanTokenResponse } as MsgIssueFanTokenResponse;
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
        const message = { ...baseMsgIssueFanTokenResponse } as MsgIssueFanTokenResponse;
        return message;
    },

    toJSON(_: MsgIssueFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgIssueFanTokenResponse>): MsgIssueFanTokenResponse {
        const message = { ...baseMsgIssueFanTokenResponse } as MsgIssueFanTokenResponse;
        return message;
    },
};

const baseMsgTransferFanTokenOwner: object = { symbol: '', srcOwner: '', dstOwner: '' };

export const MsgTransferFanTokenOwner = {
    encode(message: MsgTransferFanTokenOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.symbol !== '') {
            writer.uint32(10).string(message.symbol);
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
        const message = { ...baseMsgTransferFanTokenOwner } as MsgTransferFanTokenOwner;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
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
        const message = { ...baseMsgTransferFanTokenOwner } as MsgTransferFanTokenOwner;
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        } else {
            message.symbol = '';
        }
        if (object.srcOwner !== undefined && object.srcOwner !== null) {
            message.srcOwner = String(object.srcOwner);
        } else {
            message.srcOwner = '';
        }
        if (object.dstOwner !== undefined && object.dstOwner !== null) {
            message.dstOwner = String(object.dstOwner);
        } else {
            message.dstOwner = '';
        }
        return message;
    },

    toJSON(message: MsgTransferFanTokenOwner): unknown {
        const obj: any = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.srcOwner !== undefined && (obj.srcOwner = message.srcOwner);
        message.dstOwner !== undefined && (obj.dstOwner = message.dstOwner);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgTransferFanTokenOwner>): MsgTransferFanTokenOwner {
        const message = { ...baseMsgTransferFanTokenOwner } as MsgTransferFanTokenOwner;
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        } else {
            message.symbol = '';
        }
        if (object.srcOwner !== undefined && object.srcOwner !== null) {
            message.srcOwner = object.srcOwner;
        } else {
            message.srcOwner = '';
        }
        if (object.dstOwner !== undefined && object.dstOwner !== null) {
            message.dstOwner = object.dstOwner;
        } else {
            message.dstOwner = '';
        }
        return message;
    },
};

const baseMsgTransferFanTokenOwnerResponse: object = {};

export const MsgTransferFanTokenOwnerResponse = {
    encode(_: MsgTransferFanTokenOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferFanTokenOwnerResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgTransferFanTokenOwnerResponse } as MsgTransferFanTokenOwnerResponse;
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
        const message = { ...baseMsgTransferFanTokenOwnerResponse } as MsgTransferFanTokenOwnerResponse;
        return message;
    },

    toJSON(_: MsgTransferFanTokenOwnerResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgTransferFanTokenOwnerResponse>): MsgTransferFanTokenOwnerResponse {
        const message = { ...baseMsgTransferFanTokenOwnerResponse } as MsgTransferFanTokenOwnerResponse;
        return message;
    },
};

const baseMsgEditFanToken: object = { symbol: '', mintable: false, owner: '' };

export const MsgEditFanToken = {
    encode(message: MsgEditFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.symbol !== '') {
            writer.uint32(10).string(message.symbol);
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
        const message = { ...baseMsgEditFanToken } as MsgEditFanToken;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
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
        const message = { ...baseMsgEditFanToken } as MsgEditFanToken;
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        } else {
            message.symbol = '';
        }
        if (object.mintable !== undefined && object.mintable !== null) {
            message.mintable = Boolean(object.mintable);
        } else {
            message.mintable = false;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        } else {
            message.owner = '';
        }
        return message;
    },

    toJSON(message: MsgEditFanToken): unknown {
        const obj: any = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.mintable !== undefined && (obj.mintable = message.mintable);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgEditFanToken>): MsgEditFanToken {
        const message = { ...baseMsgEditFanToken } as MsgEditFanToken;
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        } else {
            message.symbol = '';
        }
        if (object.mintable !== undefined && object.mintable !== null) {
            message.mintable = object.mintable;
        } else {
            message.mintable = false;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        } else {
            message.owner = '';
        }
        return message;
    },
};

const baseMsgEditFanTokenResponse: object = {};

export const MsgEditFanTokenResponse = {
    encode(_: MsgEditFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgEditFanTokenResponse } as MsgEditFanTokenResponse;
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
        const message = { ...baseMsgEditFanTokenResponse } as MsgEditFanTokenResponse;
        return message;
    },

    toJSON(_: MsgEditFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgEditFanTokenResponse>): MsgEditFanTokenResponse {
        const message = { ...baseMsgEditFanTokenResponse } as MsgEditFanTokenResponse;
        return message;
    },
};

const baseMsgMintFanToken: object = { recipient: '', denom: '', owner: '' };

export const MsgMintFanToken = {
    encode(message: MsgMintFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.recipient !== '') {
            writer.uint32(10).string(message.recipient);
        }
        if (message.denom !== '') {
            writer.uint32(18).string(message.denom);
        }
        if (message.amount.length !== 0) {
            writer.uint32(26).bytes(message.amount);
        }
        if (message.owner !== '') {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFanToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintFanToken } as MsgMintFanToken;
        message.amount = new Uint8Array();
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
                    message.amount = reader.bytes();
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
        const message = { ...baseMsgMintFanToken } as MsgMintFanToken;
        message.amount = new Uint8Array();
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        } else {
            message.recipient = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = bytesFromBase64(object.amount);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        } else {
            message.owner = '';
        }
        return message;
    },

    toJSON(message: MsgMintFanToken): unknown {
        const obj: any = {};
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgMintFanToken>): MsgMintFanToken {
        const message = { ...baseMsgMintFanToken } as MsgMintFanToken;
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        } else {
            message.recipient = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        } else {
            message.amount = new Uint8Array();
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        } else {
            message.owner = '';
        }
        return message;
    },
};

const baseMsgMintFanTokenResponse: object = {};

export const MsgMintFanTokenResponse = {
    encode(_: MsgMintFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintFanTokenResponse } as MsgMintFanTokenResponse;
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
        const message = { ...baseMsgMintFanTokenResponse } as MsgMintFanTokenResponse;
        return message;
    },

    toJSON(_: MsgMintFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgMintFanTokenResponse>): MsgMintFanTokenResponse {
        const message = { ...baseMsgMintFanTokenResponse } as MsgMintFanTokenResponse;
        return message;
    },
};

const baseMsgBurnFanToken: object = { denom: '', sender: '' };

export const MsgBurnFanToken = {
    encode(message: MsgBurnFanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.denom !== '') {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount.length !== 0) {
            writer.uint32(18).bytes(message.amount);
        }
        if (message.sender !== '') {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFanToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBurnFanToken } as MsgBurnFanToken;
        message.amount = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.bytes();
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
        const message = { ...baseMsgBurnFanToken } as MsgBurnFanToken;
        message.amount = new Uint8Array();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        } else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = bytesFromBase64(object.amount);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        } else {
            message.sender = '';
        }
        return message;
    },

    toJSON(message: MsgBurnFanToken): unknown {
        const obj: any = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },

    fromPartial(object: DeepPartial<MsgBurnFanToken>): MsgBurnFanToken {
        const message = { ...baseMsgBurnFanToken } as MsgBurnFanToken;
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        } else {
            message.denom = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        } else {
            message.amount = new Uint8Array();
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        } else {
            message.sender = '';
        }
        return message;
    },
};

const baseMsgBurnFanTokenResponse: object = {};

export const MsgBurnFanTokenResponse = {
    encode(_: MsgBurnFanTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnFanTokenResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBurnFanTokenResponse } as MsgBurnFanTokenResponse;
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
        const message = { ...baseMsgBurnFanTokenResponse } as MsgBurnFanTokenResponse;
        return message;
    },

    toJSON(_: MsgBurnFanTokenResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MsgBurnFanTokenResponse>): MsgBurnFanTokenResponse {
        const message = { ...baseMsgBurnFanTokenResponse } as MsgBurnFanTokenResponse;
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof self !== 'undefined') return self;
    if (typeof window !== 'undefined') return window;
    if (typeof global !== 'undefined') return global;
    throw 'Unable to locate global object';
})();

const atob: (b64: string) => string = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
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
