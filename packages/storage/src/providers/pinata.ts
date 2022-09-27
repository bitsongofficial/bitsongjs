import { StorageProvider } from '../types';
import { validateUploadPayload } from '../utils';
import { FileObject } from 'files-from-path';
import { PinataService } from '../services';

export class PinataStorageProvider implements StorageProvider {
	client: PinataService;

	constructor(private pinataApiKey: string, private pinataSecretApiKey: string) {
		this.client = new PinataService(this.pinataApiKey, this.pinataSecretApiKey);
	}

	async upload(files: FileObject[]): Promise<string> {
		validateUploadPayload(files);

		const filesBaseUri = await this.client.pinFileToIPFS(files);

		return filesBaseUri.IpfsHash;
	}
}
