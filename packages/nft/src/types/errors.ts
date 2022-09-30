/**
 * Enum for NFT storage errors.
 * @readonly
 * @enum {string}
 */
export enum NftStorageError {
	/** The supplied metadata array is empty */
	EMPTY_METADATA = 'EMPTY_METADATA',
	/** The supplied assets array is empty */
	EMPTY_ASSETS = 'EMPTY_ASSETS',
	/** The supplied images array lenght is different from metadata array lenght */
	INVALID_MATCH = 'INVALID_MATCH',
	/** The supplied media is invalid, each image require a 'assets/' prefix in their name */
	INVALID_ASSET = 'INVALID_ASSET',
	/** The supplied metadata is invalid, each metadata require a 'metadata/' prefix in their name */
	INVALID_METADATA = 'INVALID_METADATA',
}
