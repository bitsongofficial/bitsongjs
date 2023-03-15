import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreate, MsgCreateResponse, MsgClaim, MsgClaimResponse } from "./tx";
export interface Msg {
  create(request: MsgCreate): Promise<MsgCreateResponse>;
  claim(request: MsgClaim): Promise<MsgClaimResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.create = this.create.bind(this);
    this.claim = this.claim.bind(this);
  }

  create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request("bitsong.merkledrop.v1beta1.Msg", "Create", data);
    return promise.then(data => MsgCreateResponse.decode(new _m0.Reader(data)));
  }

  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("bitsong.merkledrop.v1beta1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new _m0.Reader(data)));
  }

}