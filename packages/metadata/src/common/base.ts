import { z } from 'zod';
import { BaseMetadataAttribute, BaseMetadataAttributeSchema } from "./attribute";
import { Markdown, URI, markdown, nonEmptyStringSchema, uriSchema } from "./primitive";
import { RecursiveUnbrand } from '../utils';

/**
 * BaseMetadata is the most used standard for nfts, used by opensea and other marketplaces
 * 
 * @see https://docs.opensea.io/docs/metadata-standards#metadata-structure
 */
export type BaseMetadata = {
  /**
   * Name of the NFT.
   */
  name?: string;
  /**
   * A human-readable description of the item. Markdown is supported.
   */
  description?: Markdown;
  /**
   * This is the URL to the image of the item. Can be just about any type of image, IPFS or Arweave URLs or paths
   */
  image?: URI;
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   */
  animation_url?: URI;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site.
   */
  external_url?: URI;
  /**
   * Attributes are traits that can be used to sort and filter items on Marketplaces. They are also displayed on the item page.
   */
  attributes?: BaseMetadataAttribute[];
}

export const BaseMetadataSchema = z.object({
  description: markdown(
    z.string({
      description: 'A human-readable description of the item. Markdown is supported.',
    }),
  ).optional(),

  external_url: uriSchema(
    'This is the URL to the image of the item. Can be just about any type of image, IPFS or Arweave URLs or paths.',
  ).optional(),

  name: z.string({ description: 'Name of the NFT.' }).optional(),

  attributes: BaseMetadataAttributeSchema.array()
    .optional()
    .describe(
      'Attributes are traits that can be used to sort and filter items on Marketplaces. They are also displayed on the item page.',
    ),

  image: uriSchema('Marketplaces will store any NFT image here.').optional(),

  animation_url: uriSchema(
    'A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, ' +
    'and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.',
  ).optional(),
});

export type ContentMetadataCommon = {
  id: string;
}

const ContentMetadataCommonSchema = z.object({
  id: nonEmptyStringSchema(
    'A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI. Use a UUID if unsure.',
  ),
});

export function metadataDetailsWith<Augmentation extends {}>(augmentation: Augmentation) {
  return ContentMetadataCommonSchema.extend(augmentation);
}

export function contentWith<Augmentation extends {
  $schema: z.ZodLiteral<string>;
  bitsong: ReturnType<typeof metadataDetailsWith>;
}>(augmentation: Augmentation) {
  return BaseMetadataSchema.extend(augmentation);
}

export type BaseDetails = RecursiveUnbrand<BaseMetadata>;