import { NFTStorageProvider } from '../dist';
import { nftStorageApiKey } from './config';
import { getFilesFromPath } from 'files-from-path';
import path from 'path';

let provider: NFTStorageProvider;

describe('NFT.storage tests', () => {
	beforeAll(async () => {
		provider = new NFTStorageProvider({
			token: nftStorageApiKey,
		});
	});
	test('Should upload files to the storage', async () => {
		const imagesBasePath = path.join(__dirname, 'data/images');

		const imageFiles = await getFilesFromPath(imagesBasePath);

		expect(imageFiles.length).toBeGreaterThan(0);

		const cid = await provider.upload(imageFiles);

		expect(cid).toBeTruthy();

		console.info(cid);
	});
});
