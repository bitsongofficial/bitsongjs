import { StorageProvider, FileObject } from '../types';
import { filesToCar, validateUploadPayload } from '../utils';

export class IpfsStorageProvider implements StorageProvider {
	constructor(private ipfsUrl: string) {}

	async upload(files: FileObject[]): Promise<string> {
		validateUploadPayload(files);

		const data = await filesToCar(files);

		console.log(data);

		return 'filesBaseUri.IpfsHash';
	}
}
