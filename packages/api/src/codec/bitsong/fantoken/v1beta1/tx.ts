/* eslint-disable */
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.fantoken';

/** MsgIssue defines a message for issuing a new fan token */
export interface MsgIssue {
  /** symbol which corresponds to the symbol of the fan token. It is a string and cannot change for the whole life of the fan token */
  symbol: string;
  /** name which corresponds to the name of the fan token. It is a string and cannot change for the whole life of the fan token */
  name: string;
  /** max_supply that represents the maximum number of possible mintable tokens. It is an integer number, expressed in micro unit 10^6 */
  maxSupply: string;
  /** authority which is who can set a new uri metadata */
  authority: string;
  /** minter who is who can mint new fantoken and disable the minter process, the minter key also pay the gas fee */
  minter: string;
  /** URI which is the current uri of the fan token. It is a string can change during the fan token lifecycle thanks to the MsgEdit */
  uri: string;
}

/** MsgIssueResponse defines the MsgIssue response type */
export interface MsgIssueResponse {}

/** MsgDisableMint defines a message for disable the mint function */
export interface MsgDisableMint {
  denom: string;
  minter: string;
}

/** MsgDisableMintResponse defines the MsgDisableMint response type */
export interface MsgDisableMintResponse {}

/** MsgMint defines a message for minting a new fan token */
export interface MsgMint {
  recipient: string;
  /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
  coin?: Coin;
  minter: string;
}

/** MsgMintResponse defines the MsgMint response type */
export interface MsgMintResponse {}

/** MsgBurn defines a message for burning some fan tokens */
export interface MsgBurn {
  /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
  coin?: Coin;
  sender: string;
}

/** MsgBurnResponse defines the MsgBurn response type */
export interface MsgBurnResponse {}

/** MsgSetMinter defines a message for changing the fan token minter address */
export interface MsgSetMinter {
  /** denom the fan token denom */
  denom: string;
  /** old_minter, the actual minter */
  oldMinter: string;
  /** new_minter, the new fan token minter */
  newMinter: string;
}

/** MsgSetMinterResponse defines the MsgTransferAuthority response type */
export interface MsgSetMinterResponse {}

/** MsgSetAuthority defines a message for changing the fan token minter address */
export interface MsgSetAuthority {
  /** denom the fan token denom */
  denom: string;
  /** old_authority, the actual metadata authority */
  oldAuthority: string;
  /** new_authority, the new fan token metadata authority */
  newAuthority: string;
}

/** MsgSetAuthorityResponse defines the MsgTransferAuthority response type */
export interface MsgSetAuthorityResponse {}

export interface MsgSetUri {
  authority: string;
  denom: string;
  uri: string;
}

export interface MsgSetUriResponse {}

function createBaseMsgIssue(): MsgIssue {
  return {
    symbol: '',
    name: '',
    maxSupply: '',
    authority: '',
    minter: '',
    uri: '',
  };
}

export const MsgIssue = {
  encode(
    message: MsgIssue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.symbol !== '') {
      writer.uint32(10).string(message.symbol);
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name);
    }
    if (message.maxSupply !== '') {
      writer.uint32(26).string(message.maxSupply);
    }
    if (message.authority !== '') {
      writer.uint32(34).string(message.authority);
    }
    if (message.minter !== '') {
      writer.uint32(42).string(message.minter);
    }
    if (message.uri !== '') {
      writer.uint32(50).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();
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
          message.authority = reader.string();
          break;
        case 5:
          message.minter = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssue {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : '',
      name: isSet(object.name) ? String(object.name) : '',
      maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : '',
      authority: isSet(object.authority) ? String(object.authority) : '',
      minter: isSet(object.minter) ? String(object.minter) : '',
      uri: isSet(object.uri) ? String(object.uri) : '',
    };
  },

  toJSON(message: MsgIssue): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.name !== undefined && (obj.name = message.name);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    message.authority !== undefined && (obj.authority = message.authority);
    message.minter !== undefined && (obj.minter = message.minter);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssue>, I>>(object: I): MsgIssue {
    const message = createBaseMsgIssue();
    message.symbol = object.symbol ?? '';
    message.name = object.name ?? '';
    message.maxSupply = object.maxSupply ?? '';
    message.authority = object.authority ?? '';
    message.minter = object.minter ?? '';
    message.uri = object.uri ?? '';
    return message;
  },
};

function createBaseMsgIssueResponse(): MsgIssueResponse {
  return {};
}

export const MsgIssueResponse = {
  encode(
    _: MsgIssueResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueResponse();
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

  fromJSON(_: any): MsgIssueResponse {
    return {};
  },

  toJSON(_: MsgIssueResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIssueResponse>, I>>(
    _: I,
  ): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    return message;
  },
};

function createBaseMsgDisableMint(): MsgDisableMint {
  return { denom: '', minter: '' };
}

export const MsgDisableMint = {
  encode(
    message: MsgDisableMint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.minter !== '') {
      writer.uint32(18).string(message.minter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.minter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDisableMint {
    return {
      denom: isSet(object.denom) ? String(object.denom) : '',
      minter: isSet(object.minter) ? String(object.minter) : '',
    };
  },

  toJSON(message: MsgDisableMint): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.minter !== undefined && (obj.minter = message.minter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisableMint>, I>>(
    object: I,
  ): MsgDisableMint {
    const message = createBaseMsgDisableMint();
    message.denom = object.denom ?? '';
    message.minter = object.minter ?? '';
    return message;
  },
};

function createBaseMsgDisableMintResponse(): MsgDisableMintResponse {
  return {};
}

export const MsgDisableMintResponse = {
  encode(
    _: MsgDisableMintResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgDisableMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMintResponse();
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

  fromJSON(_: any): MsgDisableMintResponse {
    return {};
  },

  toJSON(_: MsgDisableMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDisableMintResponse>, I>>(
    _: I,
  ): MsgDisableMintResponse {
    const message = createBaseMsgDisableMintResponse();
    return message;
  },
};

function createBaseMsgMint(): MsgMint {
  return { recipient: '', coin: undefined, minter: '' };
}

export const MsgMint = {
  encode(
    message: MsgMint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.recipient !== '') {
      writer.uint32(10).string(message.recipient);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    if (message.minter !== '') {
      writer.uint32(26).string(message.minter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.minter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMint {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : '',
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      minter: isSet(object.minter) ? String(object.minter) : '',
    };
  },

  toJSON(message: MsgMint): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.minter !== undefined && (obj.minter = message.minter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
    const message = createBaseMsgMint();
    message.recipient = object.recipient ?? '';
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.minter = object.minter ?? '';
    return message;
  },
};

function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}

export const MsgMintResponse = {
  encode(
    _: MsgMintResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
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

  fromJSON(_: any): MsgMintResponse {
    return {};
  },

  toJSON(_: MsgMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(
    _: I,
  ): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  },
};

function createBaseMsgBurn(): MsgBurn {
  return { coin: undefined, sender: '' };
}

export const MsgBurn = {
  encode(
    message: MsgBurn,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : '',
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.sender = object.sender ?? '';
    return message;
  },
};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(
    _: MsgBurnResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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

  fromJSON(_: any): MsgBurnResponse {
    return {};
  },

  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(
    _: I,
  ): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  },
};

function createBaseMsgSetMinter(): MsgSetMinter {
  return { denom: '', oldMinter: '', newMinter: '' };
}

export const MsgSetMinter = {
  encode(
    message: MsgSetMinter,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.oldMinter !== '') {
      writer.uint32(18).string(message.oldMinter);
    }
    if (message.newMinter !== '') {
      writer.uint32(26).string(message.newMinter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oldMinter = reader.string();
          break;
        case 3:
          message.newMinter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetMinter {
    return {
      denom: isSet(object.denom) ? String(object.denom) : '',
      oldMinter: isSet(object.oldMinter) ? String(object.oldMinter) : '',
      newMinter: isSet(object.newMinter) ? String(object.newMinter) : '',
    };
  },

  toJSON(message: MsgSetMinter): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.oldMinter !== undefined && (obj.oldMinter = message.oldMinter);
    message.newMinter !== undefined && (obj.newMinter = message.newMinter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetMinter>, I>>(
    object: I,
  ): MsgSetMinter {
    const message = createBaseMsgSetMinter();
    message.denom = object.denom ?? '';
    message.oldMinter = object.oldMinter ?? '';
    message.newMinter = object.newMinter ?? '';
    return message;
  },
};

function createBaseMsgSetMinterResponse(): MsgSetMinterResponse {
  return {};
}

export const MsgSetMinterResponse = {
  encode(
    _: MsgSetMinterResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetMinterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinterResponse();
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

  fromJSON(_: any): MsgSetMinterResponse {
    return {};
  },

  toJSON(_: MsgSetMinterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetMinterResponse>, I>>(
    _: I,
  ): MsgSetMinterResponse {
    const message = createBaseMsgSetMinterResponse();
    return message;
  },
};

function createBaseMsgSetAuthority(): MsgSetAuthority {
  return { denom: '', oldAuthority: '', newAuthority: '' };
}

export const MsgSetAuthority = {
  encode(
    message: MsgSetAuthority,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }
    if (message.oldAuthority !== '') {
      writer.uint32(18).string(message.oldAuthority);
    }
    if (message.newAuthority !== '') {
      writer.uint32(26).string(message.newAuthority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthority();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oldAuthority = reader.string();
          break;
        case 3:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAuthority {
    return {
      denom: isSet(object.denom) ? String(object.denom) : '',
      oldAuthority: isSet(object.oldAuthority)
        ? String(object.oldAuthority)
        : '',
      newAuthority: isSet(object.newAuthority)
        ? String(object.newAuthority)
        : '',
    };
  },

  toJSON(message: MsgSetAuthority): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.oldAuthority !== undefined &&
      (obj.oldAuthority = message.oldAuthority);
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAuthority>, I>>(
    object: I,
  ): MsgSetAuthority {
    const message = createBaseMsgSetAuthority();
    message.denom = object.denom ?? '';
    message.oldAuthority = object.oldAuthority ?? '';
    message.newAuthority = object.newAuthority ?? '';
    return message;
  },
};

function createBaseMsgSetAuthorityResponse(): MsgSetAuthorityResponse {
  return {};
}

export const MsgSetAuthorityResponse = {
  encode(
    _: MsgSetAuthorityResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgSetAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthorityResponse();
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

  fromJSON(_: any): MsgSetAuthorityResponse {
    return {};
  },

  toJSON(_: MsgSetAuthorityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAuthorityResponse>, I>>(
    _: I,
  ): MsgSetAuthorityResponse {
    const message = createBaseMsgSetAuthorityResponse();
    return message;
  },
};

function createBaseMsgSetUri(): MsgSetUri {
  return { authority: '', denom: '', uri: '' };
}

export const MsgSetUri = {
  encode(
    message: MsgSetUri,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.authority !== '') {
      writer.uint32(10).string(message.authority);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.uri !== '') {
      writer.uint32(26).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUri {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUri();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetUri {
    return {
      authority: isSet(object.authority) ? String(object.authority) : '',
      denom: isSet(object.denom) ? String(object.denom) : '',
      uri: isSet(object.uri) ? String(object.uri) : '',
    };
  },

  toJSON(message: MsgSetUri): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.denom !== undefined && (obj.denom = message.denom);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUri>, I>>(
    object: I,
  ): MsgSetUri {
    const message = createBaseMsgSetUri();
    message.authority = object.authority ?? '';
    message.denom = object.denom ?? '';
    message.uri = object.uri ?? '';
    return message;
  },
};

function createBaseMsgSetUriResponse(): MsgSetUriResponse {
  return {};
}

export const MsgSetUriResponse = {
  encode(
    _: MsgSetUriResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUriResponse();
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

  fromJSON(_: any): MsgSetUriResponse {
    return {};
  },

  toJSON(_: MsgSetUriResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetUriResponse>, I>>(
    _: I,
  ): MsgSetUriResponse {
    const message = createBaseMsgSetUriResponse();
    return message;
  },
};

/** Msg defines the oracle Msg service */
export interface Msg {
  /** Issue defines a method for issuing a new fan token */
  Issue(request: MsgIssue): Promise<MsgIssueResponse>;
  /** Mint defines a method for minting some fan tokens */
  Mint(request: MsgMint): Promise<MsgMintResponse>;
  /** Burn defines a method for burning some fan tokens */
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
  /** DisableMint defines a method for disable the mint function */
  DisableMint(request: MsgDisableMint): Promise<MsgDisableMintResponse>;
  SetMinter(request: MsgSetMinter): Promise<MsgSetMinterResponse>;
  SetAuthority(request: MsgSetAuthority): Promise<MsgSetAuthorityResponse>;
  SetUri(request: MsgSetUri): Promise<MsgSetUriResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Issue = this.Issue.bind(this);
    this.Mint = this.Mint.bind(this);
    this.Burn = this.Burn.bind(this);
    this.DisableMint = this.DisableMint.bind(this);
    this.SetMinter = this.SetMinter.bind(this);
    this.SetAuthority = this.SetAuthority.bind(this);
    this.SetUri = this.SetUri.bind(this);
  }
  Issue(request: MsgIssue): Promise<MsgIssueResponse> {
    const data = MsgIssue.encode(request).finish();
    const promise = this.rpc.request('bitsong.fantoken.Msg', 'Issue', data);
    return promise.then(data => MsgIssueResponse.decode(new _m0.Reader(data)));
  }

  Mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request('bitsong.fantoken.Msg', 'Mint', data);
    return promise.then(data => MsgMintResponse.decode(new _m0.Reader(data)));
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request('bitsong.fantoken.Msg', 'Burn', data);
    return promise.then(data => MsgBurnResponse.decode(new _m0.Reader(data)));
  }

  DisableMint(request: MsgDisableMint): Promise<MsgDisableMintResponse> {
    const data = MsgDisableMint.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.fantoken.Msg',
      'DisableMint',
      data,
    );
    return promise.then(data =>
      MsgDisableMintResponse.decode(new _m0.Reader(data)),
    );
  }

  SetMinter(request: MsgSetMinter): Promise<MsgSetMinterResponse> {
    const data = MsgSetMinter.encode(request).finish();
    const promise = this.rpc.request('bitsong.fantoken.Msg', 'SetMinter', data);
    return promise.then(data =>
      MsgSetMinterResponse.decode(new _m0.Reader(data)),
    );
  }

  SetAuthority(request: MsgSetAuthority): Promise<MsgSetAuthorityResponse> {
    const data = MsgSetAuthority.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.fantoken.Msg',
      'SetAuthority',
      data,
    );
    return promise.then(data =>
      MsgSetAuthorityResponse.decode(new _m0.Reader(data)),
    );
  }

  SetUri(request: MsgSetUri): Promise<MsgSetUriResponse> {
    const data = MsgSetUri.encode(request).finish();
    const promise = this.rpc.request('bitsong.fantoken.Msg', 'SetUri', data);
    return promise.then(data => MsgSetUriResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

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
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
