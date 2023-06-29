import { StorageProvider } from '../types';
export declare class IPFSStorageProvider implements StorageProvider {
    readonly url: string;
    readonly apikey?: string;
    readonly headers: Record<string, string>;
    constructor(url: string, apikey?: string);
    uploadAll(files: File[]): Promise<string>;
    upload(file: File): Promise<string>;
}
