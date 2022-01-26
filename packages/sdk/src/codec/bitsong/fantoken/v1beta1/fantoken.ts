/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Metadata } from '../../../cosmos/bank/v1beta1/bank';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'bitsong.fantoken.v1beta1';

/** FanToken defines a standard for the fungible token */
export interface FanToken {
    name: string;
    maxSupply: string;
    mintable: boolean;
    owner: string;
    metaData?: Metadata;
}

/** Params defines fantoken module's parameters */
export interface Params {
    issuePrice?: Coin;
}

function createBaseFanToken(): FanToken {
    return { name: '', maxSupply: '', mintable: false, owner: '', metaData: undefined };
}

export const FanToken = {
    encode(message: FanToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.maxSupply !== '') {
            writer.uint32(18).string(message.maxSupply);
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
        const message = createBaseFanToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.maxSupply = reader.string();
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
        return {
            name: isSet(object.name) ? String(object.name) : '',
            maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : '',
            mintable: isSet(object.mintable) ? Boolean(object.mintable) : false,
            owner: isSet(object.owner) ? String(object.owner) : '',
            metaData: isSet(object.metaData) ? Metadata.fromJSON(object.metaData) : undefined,
        };
    },

    toJSON(message: FanToken): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
        message.mintable !== undefined && (obj.mintable = message.mintable);
        message.owner !== undefined && (obj.owner = message.owner);
        message.metaData !== undefined && (obj.metaData = message.metaData ? Metadata.toJSON(message.metaData) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<FanToken>, I>>(object: I): FanToken {
        const message = createBaseFanToken();
        message.name = object.name ?? '';
        message.maxSupply = object.maxSupply ?? '';
        message.mintable = object.mintable ?? false;
        message.owner = object.owner ?? '';
        message.metaData = object.metaData !== undefined && object.metaData !== null ? Metadata.fromPartial(object.metaData) : undefined;
        return message;
    },
};

function createBaseParams(): Params {
    return { issuePrice: undefined };
}

export const Params = {
    encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.issuePrice !== undefined) {
            Coin.encode(message.issuePrice, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Params {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return {
            issuePrice: isSet(object.issuePrice) ? Coin.fromJSON(object.issuePrice) : undefined,
        };
    },

    toJSON(message: Params): unknown {
        const obj: any = {};
        message.issuePrice !== undefined && (obj.issuePrice = message.issuePrice ? Coin.toJSON(message.issuePrice) : undefined);
        return obj;
    },

    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
        const message = createBaseParams();
        message.issuePrice = object.issuePrice !== undefined && object.issuePrice !== null ? Coin.fromPartial(object.issuePrice) : undefined;
        return message;
    },
};

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
