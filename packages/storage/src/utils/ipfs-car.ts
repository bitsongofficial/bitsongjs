import { FileObject } from '../types';
import { ImportCandidateStream, pack } from 'ipfs-car/pack';
import { FsBlockStore as Blockstore } from 'ipfs-car/blockstore/fs';
import { pipe } from 'it-pipe';
import { BlockstoreCarReader } from './bs-card-reader';

export const filesToCar = async (files: FileObject[]) => {
	const blockstore = new Blockstore();
	let carOut: BlockstoreCarReader;

	let cidString = '';

	try {
		const { cid, car } = await encodeDirectory(files, blockstore);

		carOut = car;
		cidString = cid.toString();
	} finally {
		await blockstore.close();
	}

	return { cidString, carOut };
};

export const encodeDirectory = async (
	files: FileObject[],
	blockstore: Blockstore,
) => {
	let size = 0;

	const input = pipe(files, async function* (files) {
		for await (const file of files) {
			yield toImportCandidate(file.name, file);
			size += file.size ?? 0;
		}
	});

	const packed = await packCar(input, blockstore, true);

	if (size === 0) {
		throw new Error(
			'Total size of files should exceed 0, make sure to provide some content',
		);
	}

	return packed;
};

export const packCar = async (
	input: ImportCandidateStream,
	blockstore: Blockstore,
	wrapWithDirectory: boolean,
) => {
	blockstore = blockstore || new Blockstore();
	const { root: cid } = await pack({ input, blockstore, wrapWithDirectory });
	const car = new BlockstoreCarReader(1, [cid], blockstore);
	return { cid, car };
};

export const toImportCandidate = (
	path: string,
	blob:
		| Pick<Blob, 'stream'>
		| {
				stream: () => AsyncIterable<Uint8Array>;
		  },
) => {
	return {
		path,
		get content() {
			return blob.stream();
		},
	};
};
