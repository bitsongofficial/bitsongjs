/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.fantoken.v1beta1';

export interface Metadata {
  $type: 'bitsong.fantoken.v1beta1.Metadata';
  /** name defines the name of the fantoken (eg: Kitty Punk) */
  name: string;
  /** symbol is the token symbol usually shown on exchanges (eg: KITTY) */
  symbol: string;
  /**
   * URI to a document (on or off-chain) that contains additional
   * information.Optional.
   */
  uri: string;
  /** sdk.AccAddress allowed to set a new uri */
  authority: string;
}

/** FanToken defines a standard for the fungible token */
export interface FanToken {
  $type: 'bitsong.fantoken.v1beta1.FanToken';
  /** denom represents the string name of the given denom unit (e.g ft<hash>). */
  denom: string;
  maxSupply: string;
  /** sdk.AccAddress allowed to mint new fantoken */
  minter: string;
  metaData?: Metadata;
}

function createBaseMetadata(): Metadata {
  return {
    $type: 'bitsong.fantoken.v1beta1.Metadata',
    name: '',
    symbol: '',
    uri: '',
    authority: '',
  };
}

export const Metadata = {
  $type: 'bitsong.fantoken.v1beta1.Metadata' as const,

  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.symbol !== '') {
      writer.uint32(18).string(message.symbol);
    }
    if (message.uri !== '') {
      writer.uint32(26).string(message.uri);
    }
    if (message.authority !== '') {
      writer.uint32(34).string(message.authority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      $type: Metadata.$type,
      name: isSet(object.name) ? String(object.name) : '',
      symbol: isSet(object.symbol) ? String(object.symbol) : '',
      uri: isSet(object.uri) ? String(object.uri) : '',
      authority: isSet(object.authority) ? String(object.authority) : '',
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.uri !== undefined && (obj.uri = message.uri);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? '';
    message.symbol = object.symbol ?? '';
    message.uri = object.uri ?? '';
    message.authority = object.authority ?? '';
    return message;
  },
};

messageTypeRegistry.set(Metadata.$type, Metadata);

function createBaseFanToken(): FanToken {
  return {
    $type: 'bitsong.fantoken.v1beta1.FanToken',
    denom: '',
    maxSupply: '',
    minter: '',
    metaData: undefined,
  };
}

export const FanToken = {
  $type: 'bitsong.fantoken.v1beta1.FanToken' as const,

  encode(
    message: FanToken,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.maxSupply !== '') {
      writer.uint32(18).string(message.maxSupply);
    }
    if (message.minter !== '') {
      writer.uint32(26).string(message.minter);
    }
    if (message.metaData !== undefined) {
      Metadata.encode(message.metaData, writer.uint32(34).fork()).ldelim();
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
          message.denom = reader.string();
          break;
        case 2:
          message.maxSupply = reader.string();
          break;
        case 3:
          message.minter = reader.string();
          break;
        case 4:
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
      $type: FanToken.$type,
      denom: isSet(object.denom) ? String(object.denom) : '',
      maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : '',
      minter: isSet(object.minter) ? String(object.minter) : '',
      metaData: isSet(object.metaData)
        ? Metadata.fromJSON(object.metaData)
        : undefined,
    };
  },

  toJSON(message: FanToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.minter !== undefined && (obj.minter = message.minter);
    message.metaData !== undefined &&
      (obj.metaData = message.metaData
        ? Metadata.toJSON(message.metaData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FanToken>, I>>(object: I): FanToken {
    const message = createBaseFanToken();
    message.denom = object.denom ?? '';
    message.maxSupply = object.maxSupply ?? '';
    message.minter = object.minter ?? '';
    message.metaData =
      object.metaData !== undefined && object.metaData !== null
        ? Metadata.fromPartial(object.metaData)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(FanToken.$type, FanToken);

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P> | '$type'>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
