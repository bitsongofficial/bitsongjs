import { z } from "zod";
import { BitsongAddress, bitsongAddressSchema } from "./common";
import { Brand } from "./utils";

export const artistRoles = [{
  id: 'main_artist',
  name: 'Main Artist',
  description: 'The main artist of the track.',
}, {
  id: 'featuring',
  name: 'Featuring',
  description: 'The artist is featured in the track.',
}, {
  id: 'remixed_by',
  name: 'Remixed By',
  description: 'The artist remixed the track.',
}, {
  id: 'versus',
  name: 'Versus (vs)',
  description: 'The artist is against another artist.',
}, {
  id: 'with',
  name: 'With',
  description: 'The artist is with another artist.',
}];

export type ArtistRole = Brand<string, 'ArtistRole'>;

export function toArtistRole(value: string): ArtistRole {
  const role = artistRoles.find(role => role.id === value || role.name === value);
  return role ? (role.name as ArtistRole) : (value as ArtistRole);
}

export function artistRoleSchema(
  description: string = 'The role of the artist',
): z.ZodType<ArtistRole, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .refine(value => artistRoles.some(role => role.id === value || role.name === value), {
      message: 'Invalid artist role'
    })
    .transform(toArtistRole);
}

export type ArtistDetails = {
  address?: BitsongAddress;
  name: string;
  role: ArtistRole;
}

export const ArtistDetailsSchema = z.object({
  address: bitsongAddressSchema().optional(),
  name: z.string({ description: 'The name of the artist.' }),
  role: artistRoleSchema('The role of the artist.'),
});