// import { z } from "zod";
// import { v4 } from 'uuid';
// import { ArtistDetails, ArtistDetailsSchema } from "./artist";
// import { BaseDetails, BaseMetadata, BaseMetadataAttributeDisplayType, ContentMetadataCommon, Locale, LocaleSchema, Markdown, MediaAudioMimeType, URI, contentWith, markdown, metadataDetailsWith, nonEmptyStringSchema, uriSchema } from "./common";
// import { LicenseType } from "./license";
// import { ContentSchemaId } from "./schema";
// import { InputForContentMetadataDetails } from "./utils";
// import { evaluate } from "./common/validation";
// import { Country } from "./common/country";
// import { AuthorPublisherDetails, AuthorPublisherDetailsSchema } from "./author_publisher";

// export type NftMetadata = BaseMetadata & {
//   $schema: ContentSchemaId.TRACK_LATEST,
// }

// export const NftSchema = metadataDetailsWith({
//   $schema: z.literal(ContentSchemaId.TRACK_LATEST),
// })

// export type NftMetadataDetails = ContentMetadataCommon

// type NftDetails = InputForContentMetadataDetails<NftMetadataDetails>;

// export type TrackOptions = TrackDetails & {
//   base?: BaseDetails;
// }

// export function trackMetadata({
//   id = v4(),
//   base,
//   ...options
// }: TrackOptions): TrackMetadata {
//   let data = {
//     $schema: ContentSchemaId.TRACK_LATEST,
//     bitsong: {
//       id,
//       ...options,
//     },
//     ...base,
//   }

//   if (!base?.name) {
//     data.name = options.title
//   }

//   if (!base?.image) {
//     data.image = options.artwork
//   }

//   if (!base?.animation_url && options.audio) {
//     data.animation_url = options.audio
//   }

//   if (!base?.animation_url && options.video) {
//     data.animation_url = options.video
//   }

//   if (!base?.description && options.description) {
//     data.description = options.description
//   }

//   data.attributes = [
//     {
//       trait_type: 'License',
//       value: options.license,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     },
//     {
//       trait_type: 'Duration',
//       value: options.duration,
//       display_type: BaseMetadataAttributeDisplayType.NUMBER,
//     },
//     {
//       trait_type: 'Artists',
//       value: options.artists.map(artist => artist.name).join(', '),
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     },
//     {
//       trait_type: 'Genre',
//       value: options.genre,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     },
//     {
//       trait_type: 'Explicit',
//       value: options.explicit,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     }
//   ]

//   if (options.version) {
//     data.attributes.push({
//       trait_type: 'Version',
//       value: options.version,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.liveRecording) {
//     data.attributes.push({
//       trait_type: 'Live Recording',
//       value: 'Yes',
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.pLine) {
//     data.attributes.push({
//       trait_type: 'P-Line',
//       value: options.pLine,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.cLine) {
//     data.attributes.push({
//       trait_type: 'C-Line',
//       value: options.cLine,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.country) {
//     data.attributes.push({
//       trait_type: 'Country',
//       value: options.country,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.isrc) {
//     data.attributes.push({
//       trait_type: 'ISRC',
//       value: options.isrc,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.iswc) {
//     data.attributes.push({
//       trait_type: 'ISWC',
//       value: options.iswc,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.label) {
//     data.attributes.push({
//       trait_type: 'Label',
//       value: options.label,
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   if (options.authors_publishers) {
//     data.attributes.push({
//       trait_type: 'Authors & Publishers',
//       value: options.authors_publishers.map(author => author.name).join(', '),
//       display_type: BaseMetadataAttributeDisplayType.STRING,
//     })
//   }

//   return evaluate(TrackSchema.safeParse(data))
// }