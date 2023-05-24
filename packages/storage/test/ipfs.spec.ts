import { IPFSStorageProvider } from '../dist';
import { getFilesFromPath } from 'files-from-path';
import path from 'path';
import { ipfsApiKey, ipfsUrl } from './config';

let provider: IPFSStorageProvider;

describe('IPFS tests', () => {
	beforeAll(async () => {
		provider = new IPFSStorageProvider(ipfsUrl, ipfsApiKey);
	});

	test('Should upload files to the storage', async () => {
		const imagesBasePath = path.join(__dirname, 'data/images');

		const imageFiles = await getFilesFromPath(imagesBasePath)
		expect(imageFiles.length).toBeGreaterThan(0);

		const cid = await provider.uploadAll(imageFiles as any);
		expect(cid).toBeTruthy();
		expect(cid).toEqual('bafybeibufj72c5g3t5t4w5ttuh3qytopzrjxve4araaoger6kofctnnjki');
	}, 10000);

	test('Should upload a file to the storage', async () => {
		const filePath = path.join(__dirname, 'data/images/image_1.jpg');

		const cid = await provider.upload(filePath as any);
		expect(cid).toBeTruthy();
		expect(cid).toEqual('bafybeibzn7gp3hdvb7axstwtsvnkpwgfm67bhchcbihwkbkccqnks4xjxe');
	}, 10000);
});
