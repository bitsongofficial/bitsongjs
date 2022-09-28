import { IpfsStorageProvider } from '../dist';
import { pinataApiKey, pinataSecretApiKey } from './config';
import { getFilesFromPath } from 'files-from-path';
import path from 'path';

let provider: IpfsStorageProvider;

describe('IPFS tests', () => {
	beforeAll(async () => {
		provider = new IpfsStorageProvider('');
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
