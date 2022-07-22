/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "bitsong.merkledrop.v1beta1";

export interface MsgCreate {
  /** owner of the merkledrop */
  owner: string;
  /** merkle_root used to compute proofs */
  merkleRoot: string;
  /** merkledrop start height */
  startHeight: string;
  /** merkledrop end height */
  endHeight: string;
  /** coins to distribute */
  coin?: Coin;
}

export interface MsgCreateResponse {
  owner: string;
  id: string;
}

export interface MsgClaim {
  sender: string;
  merkledropId: string;
  index: string;
  amount: string;
  proofs: string[];
}

export interface MsgClaimResponse {
  id: string;
  index: string;
  amount: string;
}

function createBaseMsgCreate(): MsgCreate {
  return {
    owner: "",
    merkleRoot: "",
    startHeight: "0",
    endHeight: "0",
    coin: undefined,
  };
}

export const MsgCreate = {
  encode(
    message: MsgCreate,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.merkleRoot !== "") {
      writer.uint32(18).string(message.merkleRoot);
    }
    if (message.startHeight !== "0") {
      writer.uint32(24).int64(message.startHeight);
    }
    if (message.endHeight !== "0") {
      writer.uint32(32).int64(message.endHeight);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.merkleRoot = reader.string();
          break;
        case 3:
          message.startHeight = longToString(reader.int64() as Long);
          break;
        case 4:
          message.endHeight = longToString(reader.int64() as Long);
          break;
        case 5:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      merkleRoot: isSet(object.merkleRoot) ? String(object.merkleRoot) : "",
      startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
      endHeight: isSet(object.endHeight) ? String(object.endHeight) : "0",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.merkleRoot !== undefined && (obj.merkleRoot = message.merkleRoot);
    message.startHeight !== undefined &&
      (obj.startHeight = message.startHeight);
    message.endHeight !== undefined && (obj.endHeight = message.endHeight);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreate>, I>>(
    object: I,
  ): MsgCreate {
    const message = createBaseMsgCreate();
    message.owner = object.owner ?? "";
    message.merkleRoot = object.merkleRoot ?? "";
    message.startHeight = object.startHeight ?? "0";
    message.endHeight = object.endHeight ?? "0";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    return message;
  },
};

function createBaseMsgCreateResponse(): MsgCreateResponse {
  return { owner: "", id: "0" };
}

export const MsgCreateResponse = {
  encode(
    message: MsgCreateResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      id: isSet(object.id) ? String(object.id) : "0",
    };
  },

  toJSON(message: MsgCreateResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponse>, I>>(
    object: I,
  ): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.owner = object.owner ?? "";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseMsgClaim(): MsgClaim {
  return { sender: "", merkledropId: "0", index: "0", amount: "", proofs: [] };
}

export const MsgClaim = {
  encode(
    message: MsgClaim,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.merkledropId !== "0") {
      writer.uint32(16).uint64(message.merkledropId);
    }
    if (message.index !== "0") {
      writer.uint32(24).uint64(message.index);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    for (const v of message.proofs) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.merkledropId = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.proofs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaim {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      merkledropId: isSet(object.merkledropId)
        ? String(object.merkledropId)
        : "0",
      index: isSet(object.index) ? String(object.index) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "",
      proofs: Array.isArray(object?.proofs)
        ? object.proofs.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: MsgClaim): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.merkledropId !== undefined &&
      (obj.merkledropId = message.merkledropId);
    message.index !== undefined && (obj.index = message.index);
    message.amount !== undefined && (obj.amount = message.amount);
    if (message.proofs) {
      obj.proofs = message.proofs.map((e) => e);
    } else {
      obj.proofs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
    const message = createBaseMsgClaim();
    message.sender = object.sender ?? "";
    message.merkledropId = object.merkledropId ?? "0";
    message.index = object.index ?? "0";
    message.amount = object.amount ?? "";
    message.proofs = object.proofs?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgClaimResponse(): MsgClaimResponse {
  return { id: "0", index: "0", amount: "" };
}

export const MsgClaimResponse = {
  encode(
    message: MsgClaimResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.id !== "0") {
      writer.uint32(8).uint64(message.id);
    }
    if (message.index !== "0") {
      writer.uint32(16).uint64(message.index);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 2:
          message.index = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimResponse {
    return {
      id: isSet(object.id) ? String(object.id) : "0",
      index: isSet(object.index) ? String(object.index) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgClaimResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.index !== undefined && (obj.index = message.index);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimResponse>, I>>(
    object: I,
  ): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.id = object.id ?? "0";
    message.index = object.index ?? "0";
    message.amount = object.amount ?? "";
    return message;
  },
};

export interface Msg {
  create(
    request: DeepPartial<MsgCreate>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateResponse>;
  claim(
    request: DeepPartial<MsgClaim>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.create = this.create.bind(this);
    this.claim = this.claim.bind(this);
  }

  create(
    request: DeepPartial<MsgCreate>,
    metadata?: grpc.Metadata,
  ): Promise<MsgCreateResponse> {
    return this.rpc.unary(
      MsgCreateDesc,
      MsgCreate.fromPartial(request),
      metadata,
    );
  }

  claim(
    request: DeepPartial<MsgClaim>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClaimResponse> {
    return this.rpc.unary(
      MsgClaimDesc,
      MsgClaim.fromPartial(request),
      metadata,
    );
  }
}

export const MsgDesc = {
  serviceName: "bitsong.merkledrop.v1beta1.Msg",
};

export const MsgCreateDesc: UnaryMethodDefinitionish = {
  methodName: "Create",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgCreate.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

export const MsgClaimDesc: UnaryMethodDefinitionish = {
  methodName: "Claim",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClaim.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgClaimResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
