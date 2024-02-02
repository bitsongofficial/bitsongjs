import { z } from 'zod';
import { Brand } from './utils';

/**
 * Explicit Type
 */
export const ExplicitType = [{
  id: 'clean',
  name: 'Clean',
  description: 'No explicit content',
}, {
  id: 'explicit',
  name: 'Explicit',
  description: 'Explicit content',
}];

export type Explicit = Brand<string, 'Explicit'>;

export function toExplicit(value: string): Explicit {
  const explicit = ExplicitType.find(explicit => explicit.id === value || explicit.name === value);
  return explicit ? (explicit.name as Explicit) : (value as Explicit);
}

export function explicitSchema(
  description: string = 'If the content is explicit or not'
): z.ZodType<Explicit, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .refine(value => ExplicitType.some(explicit => explicit.id === value || explicit.name === value), {
      message: 'Invalid explicit'
    })
    .transform(toExplicit);
}