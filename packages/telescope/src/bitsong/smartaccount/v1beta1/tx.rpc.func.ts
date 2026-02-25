import { buildTx } from "../../../helper-func-types";
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
/**
 * @name addAuthenticator
 * @package bitsong.smartaccount.v1beta1
 * @see proto service: bitsong.smartaccount.v1beta1.AddAuthenticator
 */
export const addAuthenticator = buildTx<MsgAddAuthenticator>({
  msg: MsgAddAuthenticator
});
/**
 * @name removeAuthenticator
 * @package bitsong.smartaccount.v1beta1
 * @see proto service: bitsong.smartaccount.v1beta1.RemoveAuthenticator
 */
export const removeAuthenticator = buildTx<MsgRemoveAuthenticator>({
  msg: MsgRemoveAuthenticator
});
/**
 * SetActiveState sets the active state of the authenticator.
 * Primarily used for circuit breaking.
 * @name setActiveState
 * @package bitsong.smartaccount.v1beta1
 * @see proto service: bitsong.smartaccount.v1beta1.SetActiveState
 */
export const setActiveState = buildTx<MsgSetActiveState>({
  msg: MsgSetActiveState
});