import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface EventCreate {
    owner: string;
    merkledropId: Long;
}
export interface EventCreateSDKType {
    owner: string;
    merkledrop_id: Long;
}
export interface EventClaim {
    merkledropId: Long;
    index: Long;
    coin?: Coin;
}
export interface EventClaimSDKType {
    merkledrop_id: Long;
    index: Long;
    coin?: CoinSDKType;
}
export interface EventWithdraw {
    merkledropId: Long;
    coin?: Coin;
}
export interface EventWithdrawSDKType {
    merkledrop_id: Long;
    coin?: CoinSDKType;
}
export declare const EventCreate: {
    encode(message: EventCreate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreate;
    fromPartial(object: DeepPartial<EventCreate>): EventCreate;
};
export declare const EventClaim: {
    encode(message: EventClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventClaim;
    fromPartial(object: DeepPartial<EventClaim>): EventClaim;
};
export declare const EventWithdraw: {
    encode(message: EventWithdraw, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventWithdraw;
    fromPartial(object: DeepPartial<EventWithdraw>): EventWithdraw;
};
