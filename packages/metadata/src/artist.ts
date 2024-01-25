import { z } from "zod";
import { BitsongAddress, bitsongAddressSchema } from "./common";

export type ArtistRole = 'Main Artist' | 'Featuring' | 'Remixed By' | 'Versus (vs)' | 'With';

export type ArtistDetails = {
  address?: BitsongAddress;
  name: string;
  role: ArtistRole;
}

export const ArtistDetailsSchema = z.object({
  address: bitsongAddressSchema().optional(),
  name: z.string({ description: 'The name of the artist.' }),
  role: z.enum([
    'Main Artist',
    'Featuring',
    'Remixed By',
    'Versus (vs)',
    'With'
  ], { description: 'The role of the artist.' }),
});