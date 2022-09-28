import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { Block } from '@ipld/car/api';
import { StorageProvider, FileObject } from '../types';
import { filesToCar, validateUploadPayload } from '../utils';

export class IPFSStorageProvider implements StorageProvider {
	client: IPFSHTTPClient;

	constructor(url: string) {
		this.client = create({ url });
	}

	async upload(files: FileObject[]): Promise<string> {
		validateUploadPayload(files);

		const data = await filesToCar(files);

		console.log(data);

		/* console.log('Block: ', data.carOut.blockstore);

		const carParts: Block[] = [];

		console.log(data.output);

		for await (const part of data.carOut.blocks()) {
			carParts.push(part);
		}

		console.log(carParts);

		const response = await this.client.add(carParts);

		console.log(response); */

		return data.cidString;
	}
}
