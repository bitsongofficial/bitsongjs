import { FileObject as FilesObjectFromPath } from 'files-from-path';
export interface FSFileObject extends FilesObjectFromPath {
    size: number;
}
export declare type FileObject = File;
