import { FileObject } from 'files-from-path';
import { StorageError } from '../types';

export const validateUploadPayload = (files: FileObject[]) => {
	if (files.length === 0) {
		throw Error(StorageError.EMPTY_FILES);
	}

	return true;
};
