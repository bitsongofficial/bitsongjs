import { StorageProvider, FileObject } from '../types';
import { PinataService } from '../services';
export declare class PinataStorageProvider implements StorageProvider {
    private pinataApiKey;
    private pinataSecretApiKey;
    client: PinataService;
    constructor(pinataApiKey: string, pinataSecretApiKey: string);
    uploadAll(files: FileObject[]): Promise<string>;
    upload(files: FileObject): Promise<string>;
}
