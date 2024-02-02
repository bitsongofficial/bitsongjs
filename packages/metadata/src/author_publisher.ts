import { z } from "zod";
import { BitsongAddress, bitsongAddressSchema } from "./common";
import { Brand } from "./utils";

export const authorPublisherRoles = [{
  id: 'arranger',
  name: 'Arranger',
  description: 'The artist arranged the track.',
}, {
  id: 'composer',
  name: 'Composer',
  description: 'The artist composed the track.',
}, {
  id: 'lyricist',
  name: 'Lyricist',
  description: 'The artist wrote the lyrics of the track.',
}, {
  id: 'producer',
  name: 'Producer',
  description: 'The artist produced the track.',
}, {
  id: 'publisher',
  name: 'Publisher',
  description: 'The artist published the track.',
}, {
  id: 'songwriter',
  name: 'Songwriter',
  description: 'The artist wrote the song.',
}];

export type AuthorPublisherRole = Brand<string, 'AuthorPublisherRole'>;

export function toAuthorPublisherRole(value: string): AuthorPublisherRole {
  const role = authorPublisherRoles.find(role => role.id === value || role.name === value);
  return role ? (role.name as AuthorPublisherRole) : (value as AuthorPublisherRole);
}

export function authorPublisherRoleSchema(
  description: string = 'The role of the author or publisher',
): z.ZodType<AuthorPublisherRole, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .refine(value => authorPublisherRoles.some(role => role.id === value || role.name === value), {
      message: 'Invalid author or publisher role'
    })
    .transform(toAuthorPublisherRole);
}

export type AuthorPublisherDetails = {
  address?: BitsongAddress;
  name: string;
  role: AuthorPublisherRole;
}

export const AuthorPublisherDetailsSchema = z.object({
  address: bitsongAddressSchema().optional(),
  name: z.string({ description: 'The name of the author or publisher.' }),
  role: authorPublisherRoleSchema('The role of the author or publisher.'),
});