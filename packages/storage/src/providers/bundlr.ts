import { StorageProvider, FileObject } from '../types';
import Bundlr from '@bundlr-network/client';

export class IPFSStorageProvider implements StorageProvider {
	client: Bundlr;

	constructor(url: string, jwk: object, currency: string = 'arweave') {
		this.client = new Bundlr(url, currency, jwk);
	}

	/*
	 * Not implemented
	 */
	async uploadAll(files: FileObject[]): Promise<string> {
		/* const data = await this.client.upload(files);

		console.log(data); */

		return '';
	}

	async upload(file: FileObject): Promise<string> {
		const buffer = await file.arrayBuffer();
		const data = await this.client.upload(Buffer.from(buffer));

		console.log(data);

		return data.id;
	}
}
