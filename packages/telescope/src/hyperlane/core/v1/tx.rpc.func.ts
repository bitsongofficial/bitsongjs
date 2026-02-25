import { buildTx } from "../../../helper-func-types";
import { MsgCreateMailbox, MsgSetMailbox, MsgProcessMessage } from "./tx";
/**
 * CreateMailbox ...
 * @name createMailbox
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.CreateMailbox
 */
export const createMailbox = buildTx<MsgCreateMailbox>({
  msg: MsgCreateMailbox
});
/**
 * SetMailbox ...
 * @name setMailbox
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.SetMailbox
 */
export const setMailbox = buildTx<MsgSetMailbox>({
  msg: MsgSetMailbox
});
/**
 * ProcessMessage ...
 * @name processMessage
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.ProcessMessage
 */
export const processMessage = buildTx<MsgProcessMessage>({
  msg: MsgProcessMessage
});