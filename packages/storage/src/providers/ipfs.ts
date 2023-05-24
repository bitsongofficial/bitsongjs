import { create, IPFSHTTPClient } from 'ipfs-http-client';
import { pack } from 'ipfs-car/pack'
import { StorageProvider, FileObject } from '../types';
import { MemoryBlockStore } from 'ipfs-car/blockstore/memory';
import all from '../utils/all';

function toImportCandidate(file: { name: any; stream: () => any; }) {
	/** @type {ReadableStream} */
	let stream: any
	return {
		path: file.name,
		get content() {
			stream = stream || file.stream()
			return stream
		}
	}
}

export class IPFSStorageProvider implements StorageProvider {
	client: IPFSHTTPClient;

	constructor(url: string, apikey?: string) {
		this.client = create({
			url,
			headers: apikey ? { apikey, 'Authorization': `Bearer ${apikey}` } : {},
		});
	}

	async uploadAll(files: FileObject[]): Promise<string> {
		try {
			const blockstore = new MemoryBlockStore();

			const { out, root } = await pack({
				input: Array.from(files).map(toImportCandidate),
				blockstore,
				wrapWithDirectory: true,
				maxChunkSize: 1048576,
				maxChildrenPerNode: 1024
			});

			await all(this.client.dag.import(out, { pinRoots: true }))

			return root.toV1().toString();
		} catch (e) {
			throw e;
		}
	}

	async upload(file: FileObject): Promise<string> {
		const data = await this.client.add(file)

		return data.cid.toV1().toString();
	}
}
