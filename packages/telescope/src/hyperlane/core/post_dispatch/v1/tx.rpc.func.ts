import { buildTx } from "../../../../helper-func-types";
import { MsgCreateIgp, MsgSetIgpOwner, MsgSetDestinationGasConfig, MsgPayForGas, MsgClaim, MsgCreateMerkleTreeHook, MsgCreateNoopHook } from "./tx";
/**
 * CreateIgp ...
 * @name createIgp
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.CreateIgp
 */
export const createIgp = buildTx<MsgCreateIgp>({
  msg: MsgCreateIgp
});
/**
 * SetIgpOwner ...
 * @name setIgpOwner
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.SetIgpOwner
 */
export const setIgpOwner = buildTx<MsgSetIgpOwner>({
  msg: MsgSetIgpOwner
});
/**
 * SetDestinationGasConfig ...
 * @name setDestinationGasConfig
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.SetDestinationGasConfig
 */
export const setDestinationGasConfig = buildTx<MsgSetDestinationGasConfig>({
  msg: MsgSetDestinationGasConfig
});
/**
 * PayForGas ...
 * @name payForGas
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.PayForGas
 */
export const payForGas = buildTx<MsgPayForGas>({
  msg: MsgPayForGas
});
/**
 * Claim ...
 * @name claim
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.Claim
 */
export const claim = buildTx<MsgClaim>({
  msg: MsgClaim
});
/**
 * CreateMerkleTreeHook ...
 * @name createMerkleTreeHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.CreateMerkleTreeHook
 */
export const createMerkleTreeHook = buildTx<MsgCreateMerkleTreeHook>({
  msg: MsgCreateMerkleTreeHook
});
/**
 * CreateNoopHook ...
 * @name createNoopHook
 * @package hyperlane.core.post_dispatch.v1
 * @see proto service: hyperlane.core.post_dispatch.v1.CreateNoopHook
 */
export const createNoopHook = buildTx<MsgCreateNoopHook>({
  msg: MsgCreateNoopHook
});