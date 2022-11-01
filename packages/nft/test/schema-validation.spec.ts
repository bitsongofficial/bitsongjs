import { collectionMetadata } from './config';
import { CollectionMetadataSchema } from '../dist';

describe('Schema validation tests', () => {
	test('Should validate collection metadata object', async () => {
		const result = CollectionMetadataSchema.safeParse(collectionMetadata);

		expect(result.success).toEqual(true);
	}, 10000);
	test('Should fail validation for collection metadata object', async () => {
		// @ts-ignore
		delete collectionMetadata.external_urls;
		const result = CollectionMetadataSchema.safeParse(collectionMetadata);

		expect(result.success).toEqual(false);
	}, 10000);
});
