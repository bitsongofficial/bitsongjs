import { buildQuery } from "../../../../helper-func-types";
import { QueryIsmsRequest, QueryIsmsResponse, QueryIsmRequest, QueryIsmResponse, QueryAnnouncedStorageLocationsRequest, QueryAnnouncedStorageLocationsResponse, QueryLatestAnnouncedStorageLocationRequest, QueryLatestAnnouncedStorageLocationResponse } from "./query";
/**
 * Isms ...
 * @name getIsms
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.Isms
 */
export const getIsms = buildQuery<QueryIsmsRequest, QueryIsmsResponse>({
  encode: QueryIsmsRequest.encode,
  decode: QueryIsmsResponse.decode,
  service: "hyperlane.core.interchain_security.v1.Query",
  method: "Isms",
  deps: [QueryIsmsRequest, QueryIsmsResponse]
});
/**
 * Ism ...
 * @name getIsm
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.Ism
 */
export const getIsm = buildQuery<QueryIsmRequest, QueryIsmResponse>({
  encode: QueryIsmRequest.encode,
  decode: QueryIsmResponse.decode,
  service: "hyperlane.core.interchain_security.v1.Query",
  method: "Ism",
  deps: [QueryIsmRequest, QueryIsmResponse]
});
/**
 * AnnouncedStorageLocations ...
 * @name getAnnouncedStorageLocations
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.AnnouncedStorageLocations
 */
export const getAnnouncedStorageLocations = buildQuery<QueryAnnouncedStorageLocationsRequest, QueryAnnouncedStorageLocationsResponse>({
  encode: QueryAnnouncedStorageLocationsRequest.encode,
  decode: QueryAnnouncedStorageLocationsResponse.decode,
  service: "hyperlane.core.interchain_security.v1.Query",
  method: "AnnouncedStorageLocations",
  deps: [QueryAnnouncedStorageLocationsRequest, QueryAnnouncedStorageLocationsResponse]
});
/**
 * LatestAnnouncedStorageLocation ...
 * @name getLatestAnnouncedStorageLocation
 * @package hyperlane.core.interchain_security.v1
 * @see proto service: hyperlane.core.interchain_security.v1.LatestAnnouncedStorageLocation
 */
export const getLatestAnnouncedStorageLocation = buildQuery<QueryLatestAnnouncedStorageLocationRequest, QueryLatestAnnouncedStorageLocationResponse>({
  encode: QueryLatestAnnouncedStorageLocationRequest.encode,
  decode: QueryLatestAnnouncedStorageLocationResponse.decode,
  service: "hyperlane.core.interchain_security.v1.Query",
  method: "LatestAnnouncedStorageLocation",
  deps: [QueryLatestAnnouncedStorageLocationRequest, QueryLatestAnnouncedStorageLocationResponse]
});