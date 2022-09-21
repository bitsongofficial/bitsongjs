/* eslint-disable */
import { messageTypeRegistry } from '../../typeRegistry';
import { Params, LaunchPad, MintableMetadataIds } from './launchpad';
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'bitsong.launchpad.v1beta1';

/** GenesisState defines the auction module's genesis state */
export interface GenesisState {
  $type: 'bitsong.launchpad.v1beta1.GenesisState';
  params?: Params;
  launchpads: LaunchPad[];
  mintableMetadataIds: MintableMetadataIds[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'bitsong.launchpad.v1beta1.GenesisState',
    params: undefined,
    launchpads: [],
    mintableMetadataIds: [],
  };
}

export const GenesisState = {
  $type: 'bitsong.launchpad.v1beta1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.launchpads) {
      LaunchPad.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.mintableMetadataIds) {
      MintableMetadataIds.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.launchpads.push(LaunchPad.decode(reader, reader.uint32()));
          break;
        case 3:
          message.mintableMetadataIds.push(
            MintableMetadataIds.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      launchpads: Array.isArray(object?.launchpads)
        ? object.launchpads.map((e: any) => LaunchPad.fromJSON(e))
        : [],
      mintableMetadataIds: Array.isArray(object?.mintableMetadataIds)
        ? object.mintableMetadataIds.map((e: any) =>
            MintableMetadataIds.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.launchpads) {
      obj.launchpads = message.launchpads.map(e =>
        e ? LaunchPad.toJSON(e) : undefined,
      );
    } else {
      obj.launchpads = [];
    }
    if (message.mintableMetadataIds) {
      obj.mintableMetadataIds = message.mintableMetadataIds.map(e =>
        e ? MintableMetadataIds.toJSON(e) : undefined,
      );
    } else {
      obj.mintableMetadataIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.launchpads =
      object.launchpads?.map(e => LaunchPad.fromPartial(e)) || [];
    message.mintableMetadataIds =
      object.mintableMetadataIds?.map(e =>
        MintableMetadataIds.fromPartial(e),
      ) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

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
