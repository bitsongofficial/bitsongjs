import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines fantoken module's parameters */
export interface Params {
    issueFee?: Coin;
    mintFee?: Coin;
    burnFee?: Coin;
}
/** Params defines fantoken module's parameters */
export interface ParamsSDKType {
    issue_fee?: CoinSDKType;
    mint_fee?: CoinSDKType;
    burn_fee?: CoinSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
