import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterCadanceContract, MsgRegisterCadanceContractResponse, MsgUnregisterCadanceContract, MsgUnregisterCadanceContractResponse, MsgUnjailCadanceContract, MsgUnjailCadanceContractResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * RegisterCadanceContract defines the endpoint for
   * registering a new cadance contract .
   */
  registerCadanceContract(request: MsgRegisterCadanceContract): Promise<MsgRegisterCadanceContractResponse>;
  /**
   * UnregisterCadanceContract defines the endpoint for
   * unregistering a cadance contract .
   */
  unregisterCadanceContract(request: MsgUnregisterCadanceContract): Promise<MsgUnregisterCadanceContractResponse>;
  /**
   * UnjailCadanceContract defines the endpoint for
   * unjailing a cadance contract .
   */
  unjailCadanceContract(request: MsgUnjailCadanceContract): Promise<MsgUnjailCadanceContractResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/cadance module
   * parameters. The authority is hard-coded to the x/gov module account.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerCadanceContract = this.registerCadanceContract.bind(this);
    this.unregisterCadanceContract = this.unregisterCadanceContract.bind(this);
    this.unjailCadanceContract = this.unjailCadanceContract.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerCadanceContract(request: MsgRegisterCadanceContract): Promise<MsgRegisterCadanceContractResponse> {
    const data = MsgRegisterCadanceContract.encode(request).finish();
    const promise = this.rpc.request("bitsong.cadance.v1.Msg", "RegisterCadanceContract", data);
    return promise.then(data => MsgRegisterCadanceContractResponse.decode(new BinaryReader(data)));
  }
  unregisterCadanceContract(request: MsgUnregisterCadanceContract): Promise<MsgUnregisterCadanceContractResponse> {
    const data = MsgUnregisterCadanceContract.encode(request).finish();
    const promise = this.rpc.request("bitsong.cadance.v1.Msg", "UnregisterCadanceContract", data);
    return promise.then(data => MsgUnregisterCadanceContractResponse.decode(new BinaryReader(data)));
  }
  unjailCadanceContract(request: MsgUnjailCadanceContract): Promise<MsgUnjailCadanceContractResponse> {
    const data = MsgUnjailCadanceContract.encode(request).finish();
    const promise = this.rpc.request("bitsong.cadance.v1.Msg", "UnjailCadanceContract", data);
    return promise.then(data => MsgUnjailCadanceContractResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("bitsong.cadance.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}