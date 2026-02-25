import { buildTx } from "../../../../helper-func-types";
import { MsgCreateMessageIdMultisigIsm, MsgCreateMerkleRootMultisigIsm, MsgCreateNoopIsm, MsgCreateRoutingIsm, MsgSetRoutingIsmDomain, MsgRemoveRoutingIsmDomain, MsgUpdateRoutingIsmOwner, MsgAnnounceValidator } from "./tx";
/**
 * CreateMessageIdMultisigIsm ...
 * @name createMessageIdMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.CreateMessageIdMultisigIsm
 */
export const createMessageIdMultisigIsm = buildTx<MsgCreateMessageIdMultisigIsm>({
  msg: MsgCreateMessageIdMultisigIsm
});
/**
 * CreateMerkleRootMultisigIsm ...
 * @name createMerkleRootMultisigIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.CreateMerkleRootMultisigIsm
 */
export const createMerkleRootMultisigIsm = buildTx<MsgCreateMerkleRootMultisigIsm>({
  msg: MsgCreateMerkleRootMultisigIsm
});
/**
 * CreateNoopIsm ...
 * @name createNoopIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.CreateNoopIsm
 */
export const createNoopIsm = buildTx<MsgCreateNoopIsm>({
  msg: MsgCreateNoopIsm
});
/**
 * CreateRoutingIsm ...
 * @name createRoutingIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.CreateRoutingIsm
 */
export const createRoutingIsm = buildTx<MsgCreateRoutingIsm>({
  msg: MsgCreateRoutingIsm
});
/**
 * SetRoutingIsmDomain ...
 * @name setRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.SetRoutingIsmDomain
 */
export const setRoutingIsmDomain = buildTx<MsgSetRoutingIsmDomain>({
  msg: MsgSetRoutingIsmDomain
});
/**
 * RemoveRoutingIsmDomain ...
 * @name removeRoutingIsmDomain
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.RemoveRoutingIsmDomain
 */
export const removeRoutingIsmDomain = buildTx<MsgRemoveRoutingIsmDomain>({
  msg: MsgRemoveRoutingIsmDomain
});
/**
 * UpdateRoutingIsmOwner ...
 * @name updateRoutingIsmOwner
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.UpdateRoutingIsmOwner
 */
export const updateRoutingIsmOwner = buildTx<MsgUpdateRoutingIsmOwner>({
  msg: MsgUpdateRoutingIsmOwner
});
/**
 * AnnounceValidator ...
 * @name announceValidator
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.AnnounceValidator
 */
export const announceValidator = buildTx<MsgAnnounceValidator>({
  msg: MsgAnnounceValidator
});