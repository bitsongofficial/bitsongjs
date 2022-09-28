import { PinataStorageProvider } from '../dist';
import { pinataApiKey, pinataSecretApiKey } from './config';
import { getFilesFromPath } from 'files-from-path';
import path from 'path';

let provider: PinataStorageProvider;

describe('Pinata tests', () => {
	beforeAll(async () => {
		provider = new PinataStorageProvider(pinataApiKey, pinataSecretApiKey);
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
	});
});
