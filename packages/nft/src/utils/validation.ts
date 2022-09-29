import { FileObject } from '@bitsongjs/storage';
import { imagePrefix, metadataPrefix } from '../configs';
import { NftStorageError } from '../types';

export const validateUploadPayload = (
	images: FileObject[],
	metadata: FileObject[],
) => {
	if (images.length === 0) {
		throw Error(NftStorageError.EMPTY_IMAGES);
	}

	if (metadata.length === 0) {
		throw Error(NftStorageError.EMPTY_METADATA);
	}

	if (metadata.length !== images.length) {
		throw Error(NftStorageError.INVALID_MATCH);
	}

	const invalidImage = images.findIndex(image => !image.name.match(imagePrefix));

	if (invalidImage !== -1) {
		throw Error(
			`${NftStorageError.INVALID_IMAGE} at index: ${invalidImage} on images array.`,
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
