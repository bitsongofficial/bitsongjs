/**
 * Enum for NFT storage errors.
 * @readonly
 * @enum {string}
 */
export enum NftStorageError {
	/** The supplied metadata array is empty */
	EMPTY_METADATA = 'EMPTY_METADATA',
	/** The supplied images array is empty */
	EMPTY_IMAGES = 'EMPTY_IMAGES',
	/** The supplied images array lenght is different from metadata array lenght */
	INVALID_MATCH = 'INVALID_MATCH',
	/** The supplied image is invalid, each image require a 'images/' prefix in their name */
	INVALID_IMAGE = 'INVALID_IMAGE',
	/** The supplied metadata is invalid, each metadata require a 'metadata/' prefix in their name */
	INVALID_METADATA = 'INVALID_METADATA',
}
