import { Merkledrop, MerkledropSDKType } from "./merkledrop";
import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface Indexes {
    merkledropId: Long;
    index: Long[];
}
export interface IndexesSDKType {
    merkledrop_id: Long;
    index: Long[];
}
export interface GenesisState {
    lastMerkledropId: Long;
    merkledrops: Merkledrop[];
    indexes: Indexes[];
    params?: Params;
}
export interface GenesisStateSDKType {
    last_merkledrop_id: Long;
    merkledrops: MerkledropSDKType[];
    indexes: IndexesSDKType[];
    params?: ParamsSDKType;
}
export declare const Indexes: {
    encode(message: Indexes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Indexes;
    fromPartial(object: DeepPartial<Indexes>): Indexes;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
