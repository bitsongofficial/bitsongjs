import { pack } from 'ipfs-car/pack'
import { File } from '@web-std/file'
import { CarReader } from '@ipld/car'
import { StorageProvider, FileObject } from '../types';
import { FsBlockStore as Blockstore } from 'ipfs-car/blockstore/fs';
import { TreewalkCarSplitter } from 'carbites/treewalk'
import { transform } from 'streaming-iterables'
import { toImportCandidate } from '../utils/file';

export class IPFSStorageProvider implements StorageProvider {
	readonly url: string;
	readonly apikey?: string;
	readonly headers: Record<string, string> = {};

	constructor(url: string, apikey?: string) {
		this.url = url;
		this.apikey = apikey;
		this.headers = apikey ? { apikey, 'Authorization': `Bearer ${apikey}` } : {};
	}

	async uploadAll(files: File[]): Promise<string> {
		const blockstore = new Blockstore();

		try {
			const { out } = await pack({
				input: Array.from(files).map(toImportCandidate),
				blockstore,
				wrapWithDirectory: true,
				maxChunkSize: 1048576,
				maxChildrenPerNode: 1024
			});
			const car = await CarReader.fromIterable(out)

			const roots = await car.getRoots()
			if (roots[0] == null) {
				throw new Error('missing root CID')
			}

			if (roots.length > 1) {
				throw new Error('too many roots')
			}

			const carRoot = roots[0].toString()
			const splitter = new TreewalkCarSplitter(car, 1048576)

			const onCarChunk = async (car: any) => {
				const carParts = []
				for await (const part of car) {
					carParts.push(part)
				}

				const carFile = new Blob(carParts, { type: 'application/vnd.ipld.car' })
				const formdata = new FormData()
				formdata.append('path', carFile)

				let response
				try {
					response = await fetch(this.url + '/api/v0/dag/import?pin-roots=true', {
						method: 'POST',
						headers: this.headers,
						body: formdata,
					})
				} catch (/** @type {any} */ err) {
					if (err instanceof Error) {
						throw err
					} else {
						throw new Error(err as string)
					}
				}
				/* c8 ignore next 3 */
				if (response.status === 429) {
					throw new Error('rate limited')
				}
				const res = (await response.json()).Root.Cid['/']
				if (!response.ok) {
					throw new Error('failed to import')
				}

				if (res !== carRoot) {
					throw new Error(`root CID mismatch, expected: ${carRoot}, received: ${res}`)
				}
				return res
			}

			const MAX_CONCURRENT_UPLOADS = 3
			const upload = transform(MAX_CONCURRENT_UPLOADS, onCarChunk)
			for await (const _ of upload(splitter.cars())) { } // eslint-disable-line

			return carRoot
		} catch (e) {
			throw e;
		}
	}

	async upload(file: File): Promise<string> {
		throw new Error('Method not implemented.');
	}
}
