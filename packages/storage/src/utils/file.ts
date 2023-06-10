import { File } from '@web-std/file'
/**
 * Convert the passed file to an "import candidate" - an object suitable for
 * passing to the ipfs-unixfs-importer. Note: content is an accessor so that
 * the stream is only created when needed.
 *
 * @param {File} file
 */
export function toImportCandidate(file: File) {
  /** @type {ReadableStream} */
  let stream: ReadableStream
  return {
    path: file.name,
    get content() {
      stream = stream || file.stream()
      return stream
    }
  }
}