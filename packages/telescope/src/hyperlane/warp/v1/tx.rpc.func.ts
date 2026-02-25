import { buildTx } from "../../../helper-func-types";
import { MsgCreateCollateralToken, MsgCreateSyntheticToken, MsgSetToken, MsgEnrollRemoteRouter, MsgUnrollRemoteRouter, MsgRemoteTransfer } from "./tx";
/**
 * CreateCollateralToken ...
 * @name createCollateralToken
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.CreateCollateralToken
 */
export const createCollateralToken = buildTx<MsgCreateCollateralToken>({
  msg: MsgCreateCollateralToken
});
/**
 * CreateSyntheticToken ...
 * @name createSyntheticToken
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.CreateSyntheticToken
 */
export const createSyntheticToken = buildTx<MsgCreateSyntheticToken>({
  msg: MsgCreateSyntheticToken
});
/**
 * SetToken ...
 * @name setToken
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.SetToken
 */
export const setToken = buildTx<MsgSetToken>({
  msg: MsgSetToken
});
/**
 * EnrollRemoteRouter ...
 * @name enrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.EnrollRemoteRouter
 */
export const enrollRemoteRouter = buildTx<MsgEnrollRemoteRouter>({
  msg: MsgEnrollRemoteRouter
});
/**
 * UnrollRemoteRouter ...
 * @name unrollRemoteRouter
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.UnrollRemoteRouter
 */
export const unrollRemoteRouter = buildTx<MsgUnrollRemoteRouter>({
  msg: MsgUnrollRemoteRouter
});
/**
 * RemoteTransfer ...
 * @name remoteTransfer
 * @package hyperlane.warp.v1
 * @see proto service: hyperlane.warp.v1.RemoteTransfer
 */
export const remoteTransfer = buildTx<MsgRemoteTransfer>({
  msg: MsgRemoteTransfer
});