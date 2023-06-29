import { NftStorageOptions, StorageProvider, FileObject } from '../types';
import { NFTStorage } from 'nft.storage';
export declare class NFTStorageProvider implements StorageProvider {
    private options;
    client: NFTStorage;
    constructor(options: NftStorageOptions);
    uploadAll(files: FileObject[]): Promise<string>;
    upload(file: FileObject): Promise<string>;
}
