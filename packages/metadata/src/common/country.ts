import iso from 'iso-3166-1'
import { z } from 'zod';
import { Brand } from '../utils';

export const CountryType = iso.all()
  .map((country) => {
    return {
      id: country.alpha2,
      name: country.country,
    }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

export type Country = Brand<string, 'Country'>;

export function toCountry(value: string): Country {
  const lowerCaseValue = value.toLowerCase();
  const country = CountryType.find(country => country.id.toLowerCase() === lowerCaseValue || country.name.toLowerCase() === lowerCaseValue);
  return country ? (country.id as Country) : (value as Country);
}

export function countrySchema(
  description: string = 'The country of the track',
): z.ZodType<Country, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .refine(value => CountryType.some(country => country.id === value || country.name === value), {
      message: 'Invalid country'
    })
    .transform(toCountry);
}