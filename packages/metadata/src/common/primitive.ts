import { Brand } from 'src/utils';
import { z } from 'zod';

/**
 * A locale identifier.
 *
 * Syntax: [language]-[region] where:
 * - [language] is a lowercase ISO 639-1 language code
 * - [region] is an optional uppercase ISO 3166-1 alpha-2 country code
 *
 * You can pass just the language code, or both the language and region codes.
 *
 * @example
 * - `en` any English
 * - `en-US` English as used in the United States
 * - `en-GB` English as used in the United Kingdom
 */
export type Locale = Brand<string, 'Locale'>;
/**
 * @internal
 */
export function toLocale(value: string): Locale {
  return value as Locale;
}

// using ranges instead of `i` flag so that resulting JSON Schema includes case-insensitivity.
const localeRegex = /^[a-z]{2}(?:-[a-zA-Z]{2})?$/;
const localeLikeRegex = /^([a-z]{2})(?:-[A-Z0-9]{2,3})?$/i;

const LocaleRegexSchema = z
  .string({
    description:
      'A Locale Identifier in the `[language]` OR `[language]-[region]` format (e.g. `en`, `en-GB`, `it`). ' +
      '[language] MUST be in the ISO 639-1 format. [region], if provided, MUST be in the ISO 3166-1 alpha-2 format.',
  })
  .regex(
    localeRegex,
    'Should be a valid Locale Identifier. Expected `[language]` OR `[language]-[region]` format (e.g. `en`, `en-GB`, `it`). ' +
    '[language] MUST be in the ISO 639-1 format. [region], if provided, MUST be in the ISO 3166-1 alpha-2 format.',
  );

/**
 * @internal
 */
export const LocaleSchema: z.ZodType<Locale, z.ZodTypeDef, unknown> = LocaleRegexSchema.catch(
  (ctx) => {
    // attempts to recover the language code at least
    const match = localeLikeRegex.exec(ctx.input);
    if (match) {
      return match[1] as string;
    }
    return ctx.input;
  },
)
  .superRefine((val, ctx): val is Locale => {
    const exact = LocaleRegexSchema.safeParse(val);

    if (!exact.success) {
      exact.error.issues.forEach((issue) => {
        ctx.addIssue(issue);
      });
    }
    return z.NEVER;
  })
  .transform(toLocale);

/**
 * A markdown text.
 */
export type Markdown = Brand<string, 'Markdown'>;

export function toMarkdown(value: string): Markdown {
  return value as Markdown;
}

export function markdown(
  schema: z.ZodType<string, z.ZodTypeDef, unknown>,
): z.ZodType<Markdown, z.ZodTypeDef, unknown> {
  return schema.transform(toMarkdown);
}

/**
 * A Uniform Resource Identifier.
 *
 * It could be a URL pointing to a specific resource,
 * an IPFS URI (e.g. ipfs://Qm...), or an Arweave URI (e.g. ar://Qm...).
 */
export type URI = Brand<string, 'URI'>;

export function toUri(value: string): URI {
  return value as URI;
}

export function uriSchema(
  description: string = 'A Uniform Resource Identifier.',
): z.ZodType<URI, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .min(6) // [ar://.]
    .url({ message: 'Should be a valid URI' }) // reads url() but works well with URIs too and uses format: 'uri' in the JSON schema
    .transform(toUri);
}

/**
 * The BitSong address.
 */
export type BitsongAddress = Brand<string, 'BitsongAddress'>;

export function toBitsongAddress(value: string): BitsongAddress {
  return value as BitsongAddress;
}

export function bitsongAddressSchema(
  description: string = 'The BitSong address.',
): z.ZodType<BitsongAddress, z.ZodTypeDef, unknown> {
  return z
    .string({ description })
    .min(1)
    .max(50)
    .regex(
      /^bitsong[a-z0-9]{38}$/,
      'Should be a valid BitSong address',
    ) // TODO: implement correct validation through cosmjs
    .transform(toBitsongAddress);
}

/**
 * Validates and sanitizes a string using Zod library, ensuring it is non-empty after trimming control and whitespace characters.
 *
 * @param schema - A ZodString schema for further validation.
 * @returns A ZodType which represents a string type post validation and sanitization.
 */
export function nonEmpty(schema: z.ZodString): z.ZodType<string, z.ZodTypeDef, unknown> {
  return z.preprocess((val, ctx) => {
    // Try to parse the value as a string
    const result = z.string().safeParse(val);

    // If parsing fails, add the parsing issues to the context and return NEVER type.
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        ctx.addIssue(issue);
      });
      return z.NEVER;
    }

    // Remove characters from the start and end of the string, then trim whitespace.
    return result.data
      .replace(
        // eslint-disable-next-line no-control-regex
        /^[\u0000\u0007\u000e\u000f\u200b-\u200d\ufeff]*/,
        '',
      )
      .replace(
        // eslint-disable-next-line no-control-regex
        /[\u0000\u0007\u000e\u000f\u200b-\u200d\ufeff]*$/,
        '',
      )
      .trim();
  }, schema.min(1)); // Ensure the string is at least 1 char long.
}

/**
 * Creates a Zod schema for a non-empty string, using the `nonEmpty` function for validation.
 * This function can be used to quickly generate a schema for string fields where emptiness is not allowed.
 *
 * @param description - Optional description for the string schema. This can be used to provide context or validation messages.
 * @returns A Zod schema for a non-empty string.
 */
export function nonEmptyStringSchema(description?: string) {
  return nonEmpty(z.string({ description }));
}