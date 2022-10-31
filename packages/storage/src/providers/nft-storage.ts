import { NftStorageOptions, StorageProvider, FileObject } from '../types';
import { NFTStorage } from 'nft.storage';
import { validateUploadPayload } from '../utils';

export class NFTStorageProvider implements StorageProvider {
	client: NFTStorage;

	constructor(private options: NftStorageOptions) {
		this.client = new NFTStorage(this.options);
	}

	async uploadAll(files: FileObject[]): Promise<string> {
		validateUploadPayload(files);

		const filesBaseUri = await this.client.storeDirectory(files);

		return filesBaseUri;
	}

	async upload(file: FileObject): Promise<string> {
		const filesBaseUri = await this.client.storeBlob(file);

		return filesBaseUri;
	}
}
