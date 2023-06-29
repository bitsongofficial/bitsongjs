/**
 * Convert the passed file to an "import candidate" - an object suitable for
 * passing to the ipfs-unixfs-importer. Note: content is an accessor so that
 * the stream is only created when needed.
 *
 * @param {File} file
 */
export declare function toImportCandidate(file: File): {
    path: string;
    readonly content: ReadableStream<any>;
};
