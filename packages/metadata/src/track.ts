import { z } from "zod";
import { v4 } from 'uuid';
import { ArtistDetails, ArtistDetailsSchema } from "./artist";
import { BaseDetails, BaseMetadata, BaseMetadataAttributeDisplayType, ContentMetadataCommon, Locale, LocaleSchema, Markdown, MediaAudioMimeType, URI, contentWith, markdown, metadataDetailsWith, nonEmptyStringSchema, uriSchema } from "./common";
import { LicenseType } from "./license";
import { ContentSchemaId } from "./schema";
import { InputForContentMetadataDetails } from "./utils";
import { evaluate } from "./common/validation";
import { Country } from "./common/country";
import { AuthorPublisherDetails, AuthorPublisherDetailsSchema } from "./author_publisher";

export enum TrackSuggestedVersions {
  ACAPELLA = 'Acapella',
  ACOUSTIC = 'Acoustic',
  CLUB_MIX = 'Club Mix',
  COVER = 'Cover',
  EXTENDED = 'Extended',
  INSTRUMENTAL = 'Instrumental',
  LIVE = 'Live',
  RADIO_EDIT = 'Radio Edit',
  REMASTERED = 'Remastered',
  REMIX = 'Remix',
}

export enum TrackGenre {
  ALTERNATIVE = 'Alternative',
  AMBIENT = 'Ambient',
  BLUES = 'Blues',
  CLASSICAL = 'Classical',
  COUNTRY = 'Country',
  DANCE = 'Dance',
  DUBSTEP = 'Dubstep',
  ELECTRONIC = 'Electronic',
  FOLK = 'Folk',
  FUNK = 'Funk',
  HIP_HOP = 'Hip-Hop',
  HOUSE = 'House',
  INDIE = 'Indie',
  JAZZ = 'Jazz',
  LATIN = 'Latin',
  METAL = 'Metal',
  POP = 'Pop',
  PUNK = 'Punk',
  R_AND_B = 'R&B',
  REGGAE = 'Reggae',
  ROCK = 'Rock',
  SOUL = 'Soul',
  TECHNO = 'Techno',
  TRANCE = 'Trance',
  TRAP = 'Trap',
  WORLD = 'World',
}

export enum TrackExpicit {
  EXPLICIT = 'Explicit',
  CLEAN = 'Clean',
}

export type TrackMetadataDetails = ContentMetadataCommon & {
  artwork: URI;
  audio: URI;
  video?: URI;
  title: string;
  titleLocale: Locale;
  description?: Markdown;
  artists: ArtistDetails[];
  version?: string | TrackSuggestedVersions;
  genre: TrackGenre;
  /**
   * A live recording is if it was performed on stage in front of an audience.
   */
  liveRecording?: boolean;
  /**
   * Recording Rights, this will appear under the p-line
   */
  pLine?: string;
  /**
   * Publishing Rights, this will appear under the c-line
   */
  cLine?: string;
  /**
   * This is where the track was recorded.
   */
  country: Country;
  /**
   * This track has been previously released online, on Vinyl, or CD.
   */
  previousRelease?: boolean;
  isrc?: string;
  iswc?: string;
  duration: number;
  license: LicenseType;
  /**
   * Track preview is a 30-sec snippet of your track that will be used for previewing it
   */
  previewStartTime?: number;
  lyrics?: Markdown;
  lyricsLocale?: Locale;
  explicit: TrackExpicit;
  authors_publishers?: AuthorPublisherDetails[];
  label?: string;
};

const TrackMetadataDetailsSchema: z.ZodType<TrackMetadataDetails, z.ZodTypeDef, object> =
  metadataDetailsWith({
    title: nonEmptyStringSchema('The title of the track.'),
    titleLocale: LocaleSchema,
    license: z.nativeEnum(LicenseType, { description: 'The license of the track.' }),
    artists: z.array(ArtistDetailsSchema, { description: 'The artists of the track.' }).min(1),
    artwork: uriSchema('The artwork of the track.'),
    audio: uriSchema('The audio of the track.'),
    video: uriSchema('The video of the track.').optional(),
    duration: z.number({ description: 'The duration of the track.' }).positive().int(),
    genre: z.nativeEnum(TrackGenre, { description: 'The genre of the track.' }),
    country: z.nativeEnum(Country, { description: 'The country of the track.' }),
    isrc: nonEmptyStringSchema('The ISRC of the track.').optional(),
    iswc: nonEmptyStringSchema('The ISWC of the track.').optional(),
    explicit: z.nativeEnum(TrackExpicit, { description: 'If the track is explicit' }),
    authors_publishers: z.array(AuthorPublisherDetailsSchema, { description: 'The authors and publishers of the track.' }).optional(),
    cLine: nonEmptyStringSchema('The c-line of the track.').optional(),
    pLine: nonEmptyStringSchema('The p-line of the track.').optional(),
    description: markdown(z.string({ description: 'The description of the track.' })).optional(),
    liveRecording: z.boolean({ description: 'If the track is a live recording.' }).optional(),
    lyrics: markdown(z.string({ description: 'The lyrics of the track.' })).optional(),
    lyricsLocale: LocaleSchema.optional(),
    previousRelease: z.boolean({ description: 'If the track was previously released.' }).optional(),
    previewStartTime: z.number({ description: 'The preview start time of the track.' }).positive().int().optional(),
    version: nonEmptyStringSchema('The version of the track.').optional(),
    label: nonEmptyStringSchema('The label of the track.').optional(),
  });

export type TrackMetadata = BaseMetadata & {
  $schema: ContentSchemaId.TRACK_LATEST,
  bitsong: TrackMetadataDetails;
}

export const TrackSchema = contentWith({
  $schema: z.literal(ContentSchemaId.TRACK_LATEST),
  bitsong: TrackMetadataDetailsSchema,
})

type TrackDetails = InputForContentMetadataDetails<TrackMetadataDetails>;

export type TrackOptions = TrackDetails & {
  base?: BaseDetails;
}

export function trackMetadata({
  id = v4(),
  base,
  ...options
}: TrackOptions): TrackMetadata {
  let data = {
    $schema: ContentSchemaId.TRACK_LATEST,
    bitsong: {
      id,
      ...options,
    },
    ...base,
  }

  if (!base?.name) {
    data.name = options.title
  }

  if (!base?.image) {
    data.image = options.artwork
  }

  if (!base?.animation_url && options.audio) {
    data.animation_url = options.audio
  }

  if (!base?.animation_url && options.video) {
    data.animation_url = options.video
  }

  if (!base?.description && options.description) {
    data.description = options.description
  }

  data.attributes = [
    {
      trait_type: 'License',
      value: options.license,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    },
    {
      trait_type: 'Duration',
      value: options.duration,
      display_type: BaseMetadataAttributeDisplayType.NUMBER,
    },
    {
      trait_type: 'Artists',
      value: options.artists.map(artist => artist.name).join(', '),
      display_type: BaseMetadataAttributeDisplayType.STRING,
    },
    {
      trait_type: 'Genre',
      value: options.genre,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    },
    {
      trait_type: 'Explicit',
      value: options.explicit,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    }
  ]

  if (options.version) {
    data.attributes.push({
      trait_type: 'Version',
      value: options.version,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.liveRecording) {
    data.attributes.push({
      trait_type: 'Live Recording',
      value: 'Yes',
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.pLine) {
    data.attributes.push({
      trait_type: 'P-Line',
      value: options.pLine,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.cLine) {
    data.attributes.push({
      trait_type: 'C-Line',
      value: options.cLine,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.country) {
    data.attributes.push({
      trait_type: 'Country',
      value: options.country,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.isrc) {
    data.attributes.push({
      trait_type: 'ISRC',
      value: options.isrc,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.iswc) {
    data.attributes.push({
      trait_type: 'ISWC',
      value: options.iswc,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.label) {
    data.attributes.push({
      trait_type: 'Label',
      value: options.label,
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  if (options.authors_publishers) {
    data.attributes.push({
      trait_type: 'Authors & Publishers',
      value: options.authors_publishers.map(author => author.name).join(', '),
      display_type: BaseMetadataAttributeDisplayType.STRING,
    })
  }

  return evaluate(TrackSchema.safeParse(data))
}