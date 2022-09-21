/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import { LaunchPad } from './launchpad';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.launchpad';

export interface MsgCreateLaunchPad {
  $type: 'bitsong.launchpad.MsgCreateLaunchPad';
  sender: string;
  pad?: LaunchPad;
}

export interface MsgCreateLaunchPadResponse {
  $type: 'bitsong.launchpad.MsgCreateLaunchPadResponse';
}

export interface MsgUpdateLaunchPad {
  $type: 'bitsong.launchpad.MsgUpdateLaunchPad';
  sender: string;
  pad?: LaunchPad;
}

export interface MsgUpdateLaunchPadResponse {
  $type: 'bitsong.launchpad.MsgUpdateLaunchPadResponse';
}

export interface MsgCloseLaunchPad {
  $type: 'bitsong.launchpad.MsgCloseLaunchPad';
  sender: string;
  collId: Long;
}

export interface MsgCloseLaunchPadResponse {
  $type: 'bitsong.launchpad.MsgCloseLaunchPadResponse';
}

export interface MsgMintNFT {
  $type: 'bitsong.launchpad.MsgMintNFT';
  sender: string;
  collectionId: Long;
  name: string;
}

export interface MsgMintNFTResponse {
  $type: 'bitsong.launchpad.MsgMintNFTResponse';
  nftId: string;
}

export interface MsgMintNFTs {
  $type: 'bitsong.launchpad.MsgMintNFTs';
  sender: string;
  collectionId: Long;
  number: Long;
}

export interface MsgMintNFTsResponse {
  $type: 'bitsong.launchpad.MsgMintNFTsResponse';
  nftIds: string[];
}

function createBaseMsgCreateLaunchPad(): MsgCreateLaunchPad {
  return {
    $type: 'bitsong.launchpad.MsgCreateLaunchPad',
    sender: '',
    pad: undefined,
  };
}

export const MsgCreateLaunchPad = {
  $type: 'bitsong.launchpad.MsgCreateLaunchPad' as const,

  encode(
    message: MsgCreateLaunchPad,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.pad !== undefined) {
      LaunchPad.encode(message.pad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLaunchPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLaunchPad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pad = LaunchPad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateLaunchPad {
    return {
      $type: MsgCreateLaunchPad.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      pad: isSet(object.pad) ? LaunchPad.fromJSON(object.pad) : undefined,
    };
  },

  toJSON(message: MsgCreateLaunchPad): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pad !== undefined &&
      (obj.pad = message.pad ? LaunchPad.toJSON(message.pad) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLaunchPad>, I>>(
    object: I,
  ): MsgCreateLaunchPad {
    const message = createBaseMsgCreateLaunchPad();
    message.sender = object.sender ?? '';
    message.pad =
      object.pad !== undefined && object.pad !== null
        ? LaunchPad.fromPartial(object.pad)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateLaunchPad.$type, MsgCreateLaunchPad);

function createBaseMsgCreateLaunchPadResponse(): MsgCreateLaunchPadResponse {
  return { $type: 'bitsong.launchpad.MsgCreateLaunchPadResponse' };
}

export const MsgCreateLaunchPadResponse = {
  $type: 'bitsong.launchpad.MsgCreateLaunchPadResponse' as const,

  encode(
    _: MsgCreateLaunchPadResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCreateLaunchPadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLaunchPadResponse();
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

  fromJSON(_: any): MsgCreateLaunchPadResponse {
    return {
      $type: MsgCreateLaunchPadResponse.$type,
    };
  },

  toJSON(_: MsgCreateLaunchPadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateLaunchPadResponse>, I>>(
    _: I,
  ): MsgCreateLaunchPadResponse {
    const message = createBaseMsgCreateLaunchPadResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCreateLaunchPadResponse.$type,
  MsgCreateLaunchPadResponse,
);

function createBaseMsgUpdateLaunchPad(): MsgUpdateLaunchPad {
  return {
    $type: 'bitsong.launchpad.MsgUpdateLaunchPad',
    sender: '',
    pad: undefined,
  };
}

export const MsgUpdateLaunchPad = {
  $type: 'bitsong.launchpad.MsgUpdateLaunchPad' as const,

  encode(
    message: MsgUpdateLaunchPad,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.pad !== undefined) {
      LaunchPad.encode(message.pad, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLaunchPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLaunchPad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pad = LaunchPad.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateLaunchPad {
    return {
      $type: MsgUpdateLaunchPad.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      pad: isSet(object.pad) ? LaunchPad.fromJSON(object.pad) : undefined,
    };
  },

  toJSON(message: MsgUpdateLaunchPad): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pad !== undefined &&
      (obj.pad = message.pad ? LaunchPad.toJSON(message.pad) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateLaunchPad>, I>>(
    object: I,
  ): MsgUpdateLaunchPad {
    const message = createBaseMsgUpdateLaunchPad();
    message.sender = object.sender ?? '';
    message.pad =
      object.pad !== undefined && object.pad !== null
        ? LaunchPad.fromPartial(object.pad)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateLaunchPad.$type, MsgUpdateLaunchPad);

function createBaseMsgUpdateLaunchPadResponse(): MsgUpdateLaunchPadResponse {
  return { $type: 'bitsong.launchpad.MsgUpdateLaunchPadResponse' };
}

export const MsgUpdateLaunchPadResponse = {
  $type: 'bitsong.launchpad.MsgUpdateLaunchPadResponse' as const,

  encode(
    _: MsgUpdateLaunchPadResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgUpdateLaunchPadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLaunchPadResponse();
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

  fromJSON(_: any): MsgUpdateLaunchPadResponse {
    return {
      $type: MsgUpdateLaunchPadResponse.$type,
    };
  },

  toJSON(_: MsgUpdateLaunchPadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateLaunchPadResponse>, I>>(
    _: I,
  ): MsgUpdateLaunchPadResponse {
    const message = createBaseMsgUpdateLaunchPadResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgUpdateLaunchPadResponse.$type,
  MsgUpdateLaunchPadResponse,
);

function createBaseMsgCloseLaunchPad(): MsgCloseLaunchPad {
  return {
    $type: 'bitsong.launchpad.MsgCloseLaunchPad',
    sender: '',
    collId: Long.UZERO,
  };
}

export const MsgCloseLaunchPad = {
  $type: 'bitsong.launchpad.MsgCloseLaunchPad' as const,

  encode(
    message: MsgCloseLaunchPad,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collId.isZero()) {
      writer.uint32(16).uint64(message.collId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLaunchPad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLaunchPad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCloseLaunchPad {
    return {
      $type: MsgCloseLaunchPad.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collId: isSet(object.collId) ? Long.fromValue(object.collId) : Long.UZERO,
    };
  },

  toJSON(message: MsgCloseLaunchPad): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collId !== undefined &&
      (obj.collId = (message.collId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLaunchPad>, I>>(
    object: I,
  ): MsgCloseLaunchPad {
    const message = createBaseMsgCloseLaunchPad();
    message.sender = object.sender ?? '';
    message.collId =
      object.collId !== undefined && object.collId !== null
        ? Long.fromValue(object.collId)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgCloseLaunchPad.$type, MsgCloseLaunchPad);

function createBaseMsgCloseLaunchPadResponse(): MsgCloseLaunchPadResponse {
  return { $type: 'bitsong.launchpad.MsgCloseLaunchPadResponse' };
}

export const MsgCloseLaunchPadResponse = {
  $type: 'bitsong.launchpad.MsgCloseLaunchPadResponse' as const,

  encode(
    _: MsgCloseLaunchPadResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgCloseLaunchPadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLaunchPadResponse();
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

  fromJSON(_: any): MsgCloseLaunchPadResponse {
    return {
      $type: MsgCloseLaunchPadResponse.$type,
    };
  },

  toJSON(_: MsgCloseLaunchPadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCloseLaunchPadResponse>, I>>(
    _: I,
  ): MsgCloseLaunchPadResponse {
    const message = createBaseMsgCloseLaunchPadResponse();
    return message;
  },
};

messageTypeRegistry.set(
  MsgCloseLaunchPadResponse.$type,
  MsgCloseLaunchPadResponse,
);

function createBaseMsgMintNFT(): MsgMintNFT {
  return {
    $type: 'bitsong.launchpad.MsgMintNFT',
    sender: '',
    collectionId: Long.UZERO,
    name: '',
  };
}

export const MsgMintNFT = {
  $type: 'bitsong.launchpad.MsgMintNFT' as const,

  encode(
    message: MsgMintNFT,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collectionId.isZero()) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64() as Long;
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    return {
      $type: MsgMintNFT.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : '',
    };
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFT>, I>>(
    object: I,
  ): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.sender = object.sender ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.name = object.name ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgMintNFT.$type, MsgMintNFT);

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return { $type: 'bitsong.launchpad.MsgMintNFTResponse', nftId: '' };
}

export const MsgMintNFTResponse = {
  $type: 'bitsong.launchpad.MsgMintNFTResponse' as const,

  encode(
    message: MsgMintNFTResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nftId !== '') {
      writer.uint32(10).string(message.nftId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFTResponse {
    return {
      $type: MsgMintNFTResponse.$type,
      nftId: isSet(object.nftId) ? String(object.nftId) : '',
    };
  },

  toJSON(message: MsgMintNFTResponse): unknown {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(
    object: I,
  ): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    message.nftId = object.nftId ?? '';
    return message;
  },
};

messageTypeRegistry.set(MsgMintNFTResponse.$type, MsgMintNFTResponse);

function createBaseMsgMintNFTs(): MsgMintNFTs {
  return {
    $type: 'bitsong.launchpad.MsgMintNFTs',
    sender: '',
    collectionId: Long.UZERO,
    number: Long.UZERO,
  };
}

export const MsgMintNFTs = {
  $type: 'bitsong.launchpad.MsgMintNFTs' as const,

  encode(
    message: MsgMintNFTs,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (!message.collectionId.isZero()) {
      writer.uint32(16).uint64(message.collectionId);
    }
    if (!message.number.isZero()) {
      writer.uint32(24).uint64(message.number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collectionId = reader.uint64() as Long;
          break;
        case 3:
          message.number = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFTs {
    return {
      $type: MsgMintNFTs.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      collectionId: isSet(object.collectionId)
        ? Long.fromValue(object.collectionId)
        : Long.UZERO,
      number: isSet(object.number) ? Long.fromValue(object.number) : Long.UZERO,
    };
  },

  toJSON(message: MsgMintNFTs): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collectionId !== undefined &&
      (obj.collectionId = (message.collectionId || Long.UZERO).toString());
    message.number !== undefined &&
      (obj.number = (message.number || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTs>, I>>(
    object: I,
  ): MsgMintNFTs {
    const message = createBaseMsgMintNFTs();
    message.sender = object.sender ?? '';
    message.collectionId =
      object.collectionId !== undefined && object.collectionId !== null
        ? Long.fromValue(object.collectionId)
        : Long.UZERO;
    message.number =
      object.number !== undefined && object.number !== null
        ? Long.fromValue(object.number)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(MsgMintNFTs.$type, MsgMintNFTs);

function createBaseMsgMintNFTsResponse(): MsgMintNFTsResponse {
  return { $type: 'bitsong.launchpad.MsgMintNFTsResponse', nftIds: [] };
}

export const MsgMintNFTsResponse = {
  $type: 'bitsong.launchpad.MsgMintNFTsResponse' as const,

  encode(
    message: MsgMintNFTsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.nftIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.nftIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFTsResponse {
    return {
      $type: MsgMintNFTsResponse.$type,
      nftIds: Array.isArray(object?.nftIds)
        ? object.nftIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgMintNFTsResponse): unknown {
    const obj: any = {};
    if (message.nftIds) {
      obj.nftIds = message.nftIds.map(e => e);
    } else {
      obj.nftIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTsResponse>, I>>(
    object: I,
  ): MsgMintNFTsResponse {
    const message = createBaseMsgMintNFTsResponse();
    message.nftIds = object.nftIds?.map(e => e) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgMintNFTsResponse.$type, MsgMintNFTsResponse);

/** Msg defines the Msg service */
export interface Msg {
  CreateLaunchPad(
    request: MsgCreateLaunchPad,
  ): Promise<MsgCreateLaunchPadResponse>;
  UpdateLaunchPad(
    request: MsgUpdateLaunchPad,
  ): Promise<MsgUpdateLaunchPadResponse>;
  CloseLaunchPad(
    request: MsgCloseLaunchPad,
  ): Promise<MsgCloseLaunchPadResponse>;
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  MintNFTs(request: MsgMintNFTs): Promise<MsgMintNFTsResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateLaunchPad = this.CreateLaunchPad.bind(this);
    this.UpdateLaunchPad = this.UpdateLaunchPad.bind(this);
    this.CloseLaunchPad = this.CloseLaunchPad.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.MintNFTs = this.MintNFTs.bind(this);
  }
  CreateLaunchPad(
    request: MsgCreateLaunchPad,
  ): Promise<MsgCreateLaunchPadResponse> {
    const data = MsgCreateLaunchPad.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.launchpad.Msg',
      'CreateLaunchPad',
      data,
    );
    return promise.then(data =>
      MsgCreateLaunchPadResponse.decode(new _m0.Reader(data)),
    );
  }

  UpdateLaunchPad(
    request: MsgUpdateLaunchPad,
  ): Promise<MsgUpdateLaunchPadResponse> {
    const data = MsgUpdateLaunchPad.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.launchpad.Msg',
      'UpdateLaunchPad',
      data,
    );
    return promise.then(data =>
      MsgUpdateLaunchPadResponse.decode(new _m0.Reader(data)),
    );
  }

  CloseLaunchPad(
    request: MsgCloseLaunchPad,
  ): Promise<MsgCloseLaunchPadResponse> {
    const data = MsgCloseLaunchPad.encode(request).finish();
    const promise = this.rpc.request(
      'bitsong.launchpad.Msg',
      'CloseLaunchPad',
      data,
    );
    return promise.then(data =>
      MsgCloseLaunchPadResponse.decode(new _m0.Reader(data)),
    );
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request('bitsong.launchpad.Msg', 'MintNFT', data);
    return promise.then(data =>
      MsgMintNFTResponse.decode(new _m0.Reader(data)),
    );
  }

  MintNFTs(request: MsgMintNFTs): Promise<MsgMintNFTsResponse> {
    const data = MsgMintNFTs.encode(request).finish();
    const promise = this.rpc.request('bitsong.launchpad.Msg', 'MintNFTs', data);
    return promise.then(data =>
      MsgMintNFTsResponse.decode(new _m0.Reader(data)),
    );
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
