import { z } from 'zod';

export const NFTMetadataSchema = z.object({
	name: z.string(),
	image: z.string(),
	description: z.string().optional(),
	external_url: z.string().optional(),
	animation_url: z.string().optional(),
	youtube_url: z.string().optional(),
	attributes: z
		.array(
			z.object({
				/*
          A field indicating how you would like it to be displayed,
          for string traits, you don't have to worry about display_type.
        */
				display_type: z.string().optional(),
				/*
          The name of the trait
        */
				trait_type: z.string(),
				/*
          The value of the trait
        */
				value: z.any(),
			}),
		)
		.optional()
		.default([]),
});
