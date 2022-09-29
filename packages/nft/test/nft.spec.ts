import { NFTUploader, streamToString } from '../dist';
import { getFilesFromPath } from 'files-from-path';
import { NFTStorageProvider } from '@bitsongjs/storage';
import path from 'path';

let client: NFTUploader;

describe('NFT tests', () => {
	beforeAll(async () => {
		const provider = new NFTStorageProvider({ token: '' });
		client = new NFTUploader(provider);
	});
	test('Should upload files to the storage', async () => {
		const imagesBasePath = path.join(__dirname, 'data/images');
		const metadataBasePath = path.join(__dirname, 'data/metadata');

		const imageFiles = await getFilesFromPath(imagesBasePath);

		expect(imageFiles.length).toBeGreaterThan(0);

		const metadataFiles = await getFilesFromPath(metadataBasePath);

		expect(metadataFiles.length).toBeGreaterThan(0);

		const imageFilesDom: File[] = [];
		const metadataFilesDom: File[] = [];

		for (const image of imageFiles) {
			const blob = (await streamToString(image.stream())) as string;

			const file = new File([blob], image.name, { type: 'image/png' });

			imageFilesDom.push(file);
		}

		for (const metadata of metadataFiles) {
			const blob = (await streamToString(metadata.stream())) as string;

			const file = new File([blob], metadata.name, { type: 'application/json' });

			metadataFilesDom.push(file);
		}

		console.log(imageFilesDom, metadataFilesDom);

		const cid = await client.upload(imageFilesDom, metadataFilesDom);

		expect(cid).toBeTruthy();

		console.info(cid);
	});
});
