import { buildTx } from "../../../helper-func-types";
import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
/**
 * Issue defines a method for issuing a new fan token
 * @name issue
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.Issue
 */
export const issue = buildTx<MsgIssue>({
  msg: MsgIssue
});
/**
 * Mint defines a method for minting some fan tokens
 * @name mint
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.Mint
 */
export const mint = buildTx<MsgMint>({
  msg: MsgMint
});
/**
 * Burn defines a method for burning some fan tokens
 * @name burn
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.Burn
 */
export const burn = buildTx<MsgBurn>({
  msg: MsgBurn
});
/**
 * DisableMint defines a method for disable the mint function
 * @name disableMint
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.DisableMint
 */
export const disableMint = buildTx<MsgDisableMint>({
  msg: MsgDisableMint
});
/**
 * @name setMinter
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.SetMinter
 */
export const setMinter = buildTx<MsgSetMinter>({
  msg: MsgSetMinter
});
/**
 * @name setAuthority
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.SetAuthority
 */
export const setAuthority = buildTx<MsgSetAuthority>({
  msg: MsgSetAuthority
});
/**
 * @name setUri
 * @package bitsong.fantoken.v1beta1
 * @see proto service: bitsong.fantoken.v1beta1.SetUri
 */
export const setUri = buildTx<MsgSetUri>({
  msg: MsgSetUri
});