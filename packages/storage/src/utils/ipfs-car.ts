import { CarResult, FileObject } from '../types';
import { ImportCandidateStream, pack } from 'ipfs-car/pack';
import { MemoryBlockStore } from 'ipfs-car/blockstore/memory';
import { pipe } from 'it-pipe';
import { BlockstoreCarReader } from './bs-card-reader';

export const filesToCar = async (files: FileObject[]): Promise<CarResult> => {
	const blockstore = new MemoryBlockStore();
	let carOut: BlockstoreCarReader;
	let output: AsyncIterable<Uint8Array>;

	let cidString = '';

	try {
		const { packed } = await encodeDirectory(files, blockstore);

		carOut = packed.car;
		cidString = packed.cid.toString();
		output = packed.out;
	} finally {
		await blockstore.close();
	}

	return { cidString, carOut, output };
};

export const encodeDirectory = async (
	files: FileObject[],
	blockstore: MemoryBlockStore,
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

	return { packed, input };
};

export const packCar = async (
	input: ImportCandidateStream,
	blockstore: MemoryBlockStore,
	wrapWithDirectory: boolean,
) => {
	blockstore = blockstore || new MemoryBlockStore();
	const { root: cid, out } = await pack({
		input,
		blockstore,
		wrapWithDirectory,
	});
	const car = new BlockstoreCarReader(1, [cid], blockstore);
	return { cid, car, out };
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
