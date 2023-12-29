import { ContentMetadata } from './content';

export type Brand<T, TBrand, ReservedName extends string = '__type__'> = T & {
  [K in ReservedName]: TBrand;
};

type BrandOf<A> = [A] extends [Brand<unknown, infer R>] ? R : never;

export type RecursiveUnbrand<T> = T extends Brand<infer R, BrandOf<T>>
  ? R
  : {
    [K in keyof T]: RecursiveUnbrand<T[K]>;
  };


export type ShapeCheck<T> = T extends {
  $schema: string;
  bitsong: unknown;
} ? T : never;

export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
export type Overwrite<T1, T2> = DistributiveOmit<T1, keyof T2> & T2;
type ExtractBitsongSpec<T extends { bitsong: unknown }> = T['bitsong'];

type ContentDefaults<Details extends ExtractBitsongSpec<ContentMetadata>> = Overwrite<
  Details,
  {
    id?: string;
  }
>;

export type InputForContentMetadataDetails<T extends ContentMetadata['bitsong']> =
  RecursiveUnbrand<ContentDefaults<T>>;

export type NonEmptyArray<T> = [T, ...T[]];
export function hasAtLeastOne<T>(items: ReadonlyArray<T>): items is NonEmptyArray<T> {
  return items.length > 0;
}

export type TwoAtLeastArray<T> = [T, T, ...T[]];

/**
 * @internal
 */
export function hasTwoOrMore<T>(items: ReadonlyArray<T>): items is TwoAtLeastArray<T> {
  return items.length >= 2;
}
