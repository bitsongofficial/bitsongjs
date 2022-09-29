import { IPFSStorageProvider } from '../dist';
import { getFilesFromPath } from 'files-from-path';
import path from 'path';

let provider: IPFSStorageProvider;

describe('IPFS tests', () => {
	beforeAll(async () => {
		provider = new IPFSStorageProvider('https://ipfs.bitsong.io');
	});
	test('Should upload files to the storage', async () => {
		const imagesBasePath = path.join(__dirname, 'data/images');

		const imageFiles = (await getFilesFromPath(imagesBasePath)).map(file => ({
			...file,
			// @ts-ignore
			size: file.size ? file.size : 0,
		}));

		expect(imageFiles.length).toBeGreaterThan(0);

		const cid = await provider.upload(imageFiles);

		expect(cid).toBeTruthy();

		console.info(cid);
	}, 10000);
});
