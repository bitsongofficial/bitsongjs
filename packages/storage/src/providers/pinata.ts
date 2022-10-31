import { StorageProvider, FileObject } from '../types';
import { validateUploadPayload } from '../utils';
import { PinataService } from '../services';

export class PinataStorageProvider implements StorageProvider {
	client: PinataService;

	constructor(private pinataApiKey: string, private pinataSecretApiKey: string) {
		this.client = new PinataService(this.pinataApiKey, this.pinataSecretApiKey);
	}

	async uploadAll(files: FileObject[]): Promise<string> {
		validateUploadPayload(files);

		const data = await this.client.pinFileToIPFS(files);

		return data.IpfsHash;
	}

	async upload(files: FileObject): Promise<string> {
		const data = await this.client.pinFileToIPFS([files]);

		return data.IpfsHash;
	}
}
