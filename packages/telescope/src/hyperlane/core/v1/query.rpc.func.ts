import { buildQuery } from "../../../helper-func-types";
import { QueryMailboxesRequest, QueryMailboxesResponse, QueryMailboxRequest, QueryMailboxResponse, QueryDeliveredRequest, QueryDeliveredResponse, QueryRecipientIsmRequest, QueryRecipientIsmResponse, QueryVerifyDryRunRequest, QueryVerifyDryRunResponse, QueryRegisteredISMs, QueryRegisteredISMsResponse, QueryRegisteredHooks, QueryRegisteredHooksResponse, QueryRegisteredApps, QueryRegisteredAppsResponse } from "./query";
/**
 * Mailboxes ...
 * @name getMailboxes
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.Mailboxes
 */
export const getMailboxes = buildQuery<QueryMailboxesRequest, QueryMailboxesResponse>({
  encode: QueryMailboxesRequest.encode,
  decode: QueryMailboxesResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "Mailboxes",
  deps: [QueryMailboxesRequest, QueryMailboxesResponse]
});
/**
 * Mailbox ...
 * @name getMailbox
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.Mailbox
 */
export const getMailbox = buildQuery<QueryMailboxRequest, QueryMailboxResponse>({
  encode: QueryMailboxRequest.encode,
  decode: QueryMailboxResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "Mailbox",
  deps: [QueryMailboxRequest, QueryMailboxResponse]
});
/**
 * Delivered ...
 * @name getDelivered
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.Delivered
 */
export const getDelivered = buildQuery<QueryDeliveredRequest, QueryDeliveredResponse>({
  encode: QueryDeliveredRequest.encode,
  decode: QueryDeliveredResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "Delivered",
  deps: [QueryDeliveredRequest, QueryDeliveredResponse]
});
/**
 * RecipientIsm returns the recipient ISM ID for a registered application.
 * 
 * The recipient is globally unique as every application ID registered on the
 * core module is unique. This means that one application cannot be registered
 * to two mailboxes, resulting in a mailbox-independent lookup.
 * @name getRecipientIsm
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.RecipientIsm
 */
export const getRecipientIsm = buildQuery<QueryRecipientIsmRequest, QueryRecipientIsmResponse>({
  encode: QueryRecipientIsmRequest.encode,
  decode: QueryRecipientIsmResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "RecipientIsm",
  deps: [QueryRecipientIsmRequest, QueryRecipientIsmResponse]
});
/**
 * VerifyDryRun ...
 * @name getVerifyDryRun
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.VerifyDryRun
 */
export const getVerifyDryRun = buildQuery<QueryVerifyDryRunRequest, QueryVerifyDryRunResponse>({
  encode: QueryVerifyDryRunRequest.encode,
  decode: QueryVerifyDryRunResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "VerifyDryRun",
  deps: [QueryVerifyDryRunRequest, QueryVerifyDryRunResponse]
});
/**
 * RegisteredISMs ...
 * @name getRegisteredISMs
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.RegisteredISMs
 */
export const getRegisteredISMs = buildQuery<QueryRegisteredISMs, QueryRegisteredISMsResponse>({
  encode: QueryRegisteredISMs.encode,
  decode: QueryRegisteredISMsResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "RegisteredISMs",
  deps: [QueryRegisteredISMs, QueryRegisteredISMsResponse]
});
/**
 * RegisteredHooks ...
 * @name getRegisteredHooks
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.RegisteredHooks
 */
export const getRegisteredHooks = buildQuery<QueryRegisteredHooks, QueryRegisteredHooksResponse>({
  encode: QueryRegisteredHooks.encode,
  decode: QueryRegisteredHooksResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "RegisteredHooks",
  deps: [QueryRegisteredHooks, QueryRegisteredHooksResponse]
});
/**
 * RegisteredApps ...
 * @name getRegisteredApps
 * @package hyperlane.core.v1
 * @see proto service: hyperlane.core.v1.RegisteredApps
 */
export const getRegisteredApps = buildQuery<QueryRegisteredApps, QueryRegisteredAppsResponse>({
  encode: QueryRegisteredApps.encode,
  decode: QueryRegisteredAppsResponse.decode,
  service: "hyperlane.core.v1.Query",
  method: "RegisteredApps",
  deps: [QueryRegisteredApps, QueryRegisteredAppsResponse]
});