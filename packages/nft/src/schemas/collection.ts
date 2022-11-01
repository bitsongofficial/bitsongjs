import { z } from 'zod';

export const CollectionMetadataSchema = z.object({
	image: z.string(),
	cover: z.string(),
	description: z.string(),
	external_urls: z.record(z.string()).optional(),
});
