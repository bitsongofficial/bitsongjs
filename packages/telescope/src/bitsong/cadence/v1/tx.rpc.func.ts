import { buildTx } from "../../../helper-func-types";
import { MsgRegisterCadenceContract, MsgUnregisterCadenceContract, MsgUnjailCadenceContract, MsgUpdateParams } from "./tx";
/**
 * RegisterCadenceContract defines the endpoint for
 * registering a new cadence contract .
 * @name registerCadenceContract
 * @package bitsong.cadence.v1
 * @see proto service: bitsong.cadence.v1.RegisterCadenceContract
 */
export const registerCadenceContract = buildTx<MsgRegisterCadenceContract>({
  msg: MsgRegisterCadenceContract
});
/**
 * UnregisterCadenceContract defines the endpoint for
 * unregistering a cadence contract .
 * @name unregisterCadenceContract
 * @package bitsong.cadence.v1
 * @see proto service: bitsong.cadence.v1.UnregisterCadenceContract
 */
export const unregisterCadenceContract = buildTx<MsgUnregisterCadenceContract>({
  msg: MsgUnregisterCadenceContract
});
/**
 * UnjailCadenceContract defines the endpoint for
 * unjailing a cadence contract .
 * @name unjailCadenceContract
 * @package bitsong.cadence.v1
 * @see proto service: bitsong.cadence.v1.UnjailCadenceContract
 */
export const unjailCadenceContract = buildTx<MsgUnjailCadenceContract>({
  msg: MsgUnjailCadenceContract
});
/**
 * UpdateParams defines a governance operation for updating the x/cadence module
 * parameters. The authority is hard-coded to the x/gov module account.
 * 
 * Since: cosmos-sdk 0.47
 * @name updateParams
 * @package bitsong.cadence.v1
 * @see proto service: bitsong.cadence.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams
});