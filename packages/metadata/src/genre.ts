import { z } from 'zod';
import { Brand } from './utils';

/**
 * Genre Type
 */
export const GenreType = [{
  id: 'alternative',
  name: 'Alternative',
  description: '',
}, {
  id: 'ambient',
  name: 'Ambient',
  description: '',
}, {
  id: 'blues',
  name: 'Blues',
  description: '',
}, {
  id: 'classical',
  name: 'Classical',
  description: '',
}, {
  id: 'country',
  name: 'Country',
  description: '',
}, {
  id: 'dance',
  name: 'Dance',
  description: '',
}, {
  id: 'drum_and_bass',
  name: 'Drum & Bass',
  description: '',
}, {
  id: 'dubstep',
  name: 'Dubstep',
  description: '',
}, {
  id: 'electronic',
  name: 'Electronic',
  description: '',
}, {
  id: 'folk',
  name: 'Folk',
  description: '',
}, {
  id: 'funk',
  name: 'Funk',
  description: '',
}, {
  id: 'hip_hop',
  name: 'Hip-Hop',
  description: '',
}, {
  id: 'house',
  name: 'House',
  description: '',
}, {
  id: 'indie',
  name: 'Indie',
  description: '',
}, {
  id: 'jazz',
  name: 'Jazz',
  description: '',
}, {
  id: 'latin',
  name: 'Latin',
  description: '',
}, {
  id: 'metal',
  name: 'Metal',
  description: '',
}, {
  id: 'pop',
  name: 'Pop',
  description: '',
}, {
  id: 'punk',
  name: 'Punk',
  description: '',
}, {
  id: 'r_and_b',
  name: 'R&B',
  description: '',
}, {
  id: 'reggae',
  name: 'Reggae',
  description: '',
}, {
  id: 'rock',
  name: 'Rock',
  description: '',
}, {
  id: 'soul',
  name: 'Soul',
  description: '',
}, {
  id: 'techno',
  name: 'Techno',
  description: '',
}, {
  id: 'trance',
  name: 'Trance',
  description: '',
}, {
  id: 'trap',
  name: 'Trap',
  description: '',
}, {
  id: 'world',
  name: 'World',
  description: '',
}];

export type TrackGenre = Brand<string, 'TrackGenre'>;

export function toTrackGenre(value: string): TrackGenre {
  const genre = GenreType.find(genre => genre.id === value || genre.name === value);
  return genre ? (genre.name as TrackGenre) : (value as TrackGenre);
}

export function trackGenreSchema(
  description: string = 'The genre of the track',
): z.ZodType<TrackGenre, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .refine(value => GenreType.some(genre => genre.id === value || genre.name === value), {
      message: 'Invalid genre'
    })
    .transform(toTrackGenre);
}