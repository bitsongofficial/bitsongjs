import { Params, ParamsSDKType } from "./params";
import { FanToken, FanTokenSDKType } from "./fantoken";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the fantoken module's genesis state */
export interface GenesisState {
    params?: Params;
    fanTokens: FanToken[];
}
/** GenesisState defines the fantoken module's genesis state */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    fan_tokens: FanTokenSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
