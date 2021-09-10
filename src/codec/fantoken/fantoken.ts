/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Metadata } from '../cosmos/bank/v1beta1/bank';
import { Coin } from '../cosmos/base/v1beta1/coin';

export const protobufPackage = 'bitsong.fantoken';

/** FanToken defines a standard for the fungible token */
export interface FanToken {
    name: string;
    maxSupply: Uint8Array;
    mintable: boolean;
    owner: string;
    metaData?: Metadata;
}

/** Params defines fantoken module's parameters */
export interface Params {
    issuePrice?: Coin;
}

const baseFanToken: object = { name: '', mintable: false, owner: '' };

export const FanToken = {
    encode(message: FanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.maxSupply.length !== 0) {
            writer.uint32(18).bytes(message.maxSupply);
        }
        if (message.mintable === true) {
            writer.uint32(24).bool(message.mintable);
        }
        if (message.owner !== '') {
            writer.uint32(34).string(message.owner);
        }
        if (message.metaData !== undefined) {
            Metadata.encode(message.metaData, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): FanToken {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFanToken } as FanToken;
        message.maxSupply = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.maxSupply = reader.bytes();
                    break;
                case 3:
                    message.mintable = reader.bool();
                    break;
                case 4:
                    message.owner = reader.string();
                    break;
                case 5:
                    message.metaData = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FanToken {
        const message = { ...baseFanToken } as FanToken;
        message.maxSupply = new Uint8Array();
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        } else {
            message.name = '';
        }
        if (object.maxSupply !== undefined && object.maxSupply !== null) {
            message.maxSupply = bytesFromBase64(object.maxSupply);
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
        if (object.metaData !== undefined && object.metaData !== null) {
            message.metaData = Metadata.fromJSON(object.metaData);
        } else {
            message.metaData = undefined;
        }
        return message;
    },

    toJSON(message: FanToken): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.maxSupply !== undefined && (obj.maxSupply = base64FromBytes(message.maxSupply !== undefined ? message.maxSupply : new Uint8Array()));
        message.mintable !== undefined && (obj.mintable = message.mintable);
        message.owner !== undefined && (obj.owner = message.owner);
        message.metaData !== undefined && (obj.metaData = message.metaData ? Metadata.toJSON(message.metaData) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<FanToken>): FanToken {
        const message = { ...baseFanToken } as FanToken;
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
        if (object.metaData !== undefined && object.metaData !== null) {
            message.metaData = Metadata.fromPartial(object.metaData);
        } else {
            message.metaData = undefined;
        }
        return message;
    },
};

const baseParams: object = {};

export const Params = {
    encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.issuePrice !== undefined) {
            Coin.encode(message.issuePrice, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams } as Params;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.issuePrice = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Params {
        const message = { ...baseParams } as Params;
        if (object.issuePrice !== undefined && object.issuePrice !== null) {
            message.issuePrice = Coin.fromJSON(object.issuePrice);
        } else {
            message.issuePrice = undefined;
        }
        return message;
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        message.issuePrice !== undefined && (obj.issuePrice = message.issuePrice ? Coin.toJSON(message.issuePrice) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Params>): Params {
        const message = { ...baseParams } as Params;
        if (object.issuePrice !== undefined && object.issuePrice !== null) {
            message.issuePrice = Coin.fromPartial(object.issuePrice);
        } else {
            message.issuePrice = undefined;
        }
        return message;
    },
};

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
