import { AxiosInstance, AxiosRequestHeaders, AxiosRequestConfig } from 'axios';
import { PinataPinResponse, PinataPinOptions } from '../types';
export declare class PinataService {
    private pinataApiKey;
    private pinataSecretApiKey;
    client: AxiosInstance;
    constructor(pinataApiKey: string, pinataSecretApiKey: string);
    pinFileToIPFS(files: File[], options?: PinataPinOptions): Promise<PinataPinResponse>;
    get options(): AxiosRequestConfig;
    get headers(): AxiosRequestHeaders;
}
