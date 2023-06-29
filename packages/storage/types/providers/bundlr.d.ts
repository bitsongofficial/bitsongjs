import { StorageProvider, FileObject } from '../types';
import Bundlr from '@bundlr-network/client';
export declare class IPFSStorageProvider implements StorageProvider {
    client: Bundlr;
    constructor(url: string, jwk: object, currency?: string);
    uploadAll(files: FileObject[]): Promise<string>;
    upload(file: FileObject): Promise<string>;
}
