export { isNonNullObject, isUint8Array } from '@cosmjs/utils';
/**
 * Sorts an object properties recursively.
 *
 * @param jsonObj object to sort
 * @returns a new object with keys sorted alphabetically
 */
export declare const sortJSON: <T>(jsonObj: T) => T;
/**
 * Find the index of an Uint8Array element in an array of Uint8Array.
 *
 * @param arr Array to search elem
 * @param elem Elem to search in array
 * @returns The index of the element in the array or -1
 */
export declare const uint8IndexOf: (arr: Uint8Array[], elem: Uint8Array) => number;
