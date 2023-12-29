import { z } from "zod";
import { BitsongAddress, bitsongAddressSchema } from "./common";

export enum ArtistRole {
  MAIN_ARTIST = 'Main Artist',
  FEATURING = 'Featuring',
  REMIXED_BY = 'Remixed By',
  VERSUS = 'Versus (vs)',
  WITH = 'With',
}

export type ArtistDetails = {
  address?: BitsongAddress;
  name: string;
  role: ArtistRole;
}

export const ArtistDetailsSchema = z.object({
  address: bitsongAddressSchema().optional(),
  name: z.string({ description: 'The name of the artist.' }),
  role: z.nativeEnum(ArtistRole, { description: 'The role of the artist.' }),
});