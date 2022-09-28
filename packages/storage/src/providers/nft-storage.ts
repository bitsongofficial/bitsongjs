import { NftStorageOptions, StorageProvider, FileObject } from '../types';
import { NFTStorage } from 'nft.storage';
import { validateUploadPayload } from '../utils';

export class NftStorageProvider implements StorageProvider {
	client: NFTStorage;

	constructor(private options: NftStorageOptions) {
		this.client = new NFTStorage(this.options);
	}

	async upload(files: FileObject[]): Promise<string> {
		validateUploadPayload(files);

		const filesBaseUri = await this.client.storeDirectory(files);

		return filesBaseUri;
	}
}
