import { z } from 'zod';
import { nonEmptyStringSchema } from './primitive';

/**
 * The display type of a marketplace metadata attribute.
 *
 * @see https://docs.opensea.io/docs/metadata-standards#attributes
 */
export enum BaseMetadataAttributeDisplayType {
  NUMBER = 'number',
  STRING = 'string',
  DATE = 'date',
}

/**
 * Base metadata attribute.
 * 
 * @see https://docs.opensea.io/docs/metadata-standards#attributes
 */
export type BaseMetadataAttribute = {
  /**
   * The trait type.
   */
  trait_type?: string | undefined;
  /**
   * The trait value.
   */
  value?: string | number | undefined;
  /**
   * The trait display type.
   */
  display_type?: BaseMetadataAttributeDisplayType | undefined;
};

export const BaseMetadataAttributeSchema: z.ZodType<BaseMetadataAttribute, z.ZodTypeDef, object> = z
  .object({
    trait_type: nonEmptyStringSchema('The name of the trait.').optional(),
    value: z.union([z.string(), z.number()]).optional(),
    display_type: z.nativeEnum(BaseMetadataAttributeDisplayType).optional(),
  })
  .passthrough();