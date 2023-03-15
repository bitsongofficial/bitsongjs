import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "../../../helpers";
export interface Merkledrop {
    /** merkledrop id */
    id: Long;
    /** merkle_root of the merkledrop */
    merkleRoot: string;
    /** merkledrop start height */
    startHeight: Long;
    /** merkledrop end height */
    endHeight: Long;
    /** denom to distribuite */
    denom: string;
    /** amount to distribuite */
    amount: string;
    /** claimed amount */
    claimed: string;
    /** merkledrop's owner */
    owner: string;
}
export interface MerkledropSDKType {
    /** merkledrop id */
    id: Long;
    /** merkle_root of the merkledrop */
    merkle_root: string;
    /** merkledrop start height */
    start_height: Long;
    /** merkledrop end height */
    end_height: Long;
    /** denom to distribuite */
    denom: string;
    /** amount to distribuite */
    amount: string;
    /** claimed amount */
    claimed: string;
    /** merkledrop's owner */
    owner: string;
}
export declare const Merkledrop: {
    encode(message: Merkledrop, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Merkledrop;
    fromPartial(object: DeepPartial<Merkledrop>): Merkledrop;
};
