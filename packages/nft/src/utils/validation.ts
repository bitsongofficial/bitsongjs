import { FileObject } from '@bitsongjs/storage';
import { assetPrefix, metadataPrefix } from '../configs';
import { NftStorageError } from '../types';

export const validateUploadPayload = (
	assets: FileObject[],
	metadata: FileObject[],
) => {
	if (assets.length === 0) {
		throw Error(NftStorageError.EMPTY_ASSETS);
	}

	if (metadata.length === 0) {
		throw Error(NftStorageError.EMPTY_METADATA);
	}

	if (metadata.length !== assets.length) {
		throw Error(NftStorageError.INVALID_MATCH);
	}

	const invalidAsset = assets.findIndex(asset => !asset.name.match(assetPrefix));

	if (invalidAsset !== -1) {
		throw Error(
			`${NftStorageError.INVALID_ASSET} at index: ${invalidAsset} on assets array.`,
		);
	}

	const invalidMetadata = metadata.findIndex(
		meta => !meta.name.match(metadataPrefix),
	);

	if (invalidMetadata !== -1) {
		throw Error(
			`${NftStorageError.INVALID_METADATA} at index: ${invalidMetadata} on metadata array.`,
		);
	}

	return true;
};
