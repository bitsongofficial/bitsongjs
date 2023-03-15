import { Rpc } from "../../../helpers";
import { MsgCreate, MsgCreateResponse, MsgClaim, MsgClaimResponse } from "./tx";
export interface Msg {
    create(request: MsgCreate): Promise<MsgCreateResponse>;
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    create(request: MsgCreate): Promise<MsgCreateResponse>;
    claim(request: MsgClaim): Promise<MsgClaimResponse>;
}
