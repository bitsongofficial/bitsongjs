import { z } from "zod";
import { BitsongAddress, bitsongAddressSchema } from "./common";

export enum AuthorPublisherRole {
  ARRANGER = 'Arranger',
  COMPOSER = 'Composer',
  LYRICIST = 'Lyricist',
  PRODUCER = 'Producer',
  PUBLISHER = 'Publisher',
  SONGWRITER = 'Songwriter',
}

export type AuthorPublisherDetails = {
  address?: BitsongAddress;
  name: string;
  role: AuthorPublisherRole;
}

export const AuthorPublisherDetailsSchema = z.object({
  address: bitsongAddressSchema().optional(),
  name: z.string({ description: 'The name of the author or publisher.' }),
  role: z.nativeEnum(AuthorPublisherRole, { description: 'The role of the author or publisher.' }),
});