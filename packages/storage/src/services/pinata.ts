import axios, {
	AxiosInstance,
	AxiosRequestHeaders,
	AxiosRequestConfig,
} from 'axios';
import { FileObject } from 'files-from-path';
import NodeFormData from 'form-data';
import { PinataPinResponse, PinataPinOptions } from '../types';
import { pinataBaseUrl } from '../configs';

export class PinataService {
	client: AxiosInstance;

	constructor(private pinataApiKey: string, private pinataSecretApiKey: string) {
		this.client = axios.create(this.options);
	}

	async pinFileToIPFS(
		files: FileObject[],
		options?: PinataPinOptions,
	): Promise<PinataPinResponse> {
		try {
			let data = new NodeFormData();

			files.forEach(file => {
				//for each file stream, we need to include the correct relative file path
				data.append('file', file.stream(), {
					filepath: file.name,
				});
			});

			if (options) {
				if (options.pinataMetadata) {
					data.append('pinataMetadata', JSON.stringify(options.pinataMetadata));
				}
				if (options.pinataOptions) {
					data.append('pinataOptions', JSON.stringify(options.pinataOptions));
				}
			}

			const response = await this.client.post<PinataPinResponse>(
				'pinning/pinFileToIPFS',
				data,
				{
					headers: {
						'Content-type': `multipart/form-data; boundary= ${data.getBoundary()}`,
						...this.headers,
					},
				},
			);

			if (response.status !== 200) {
				throw new Error(
					`unknown server response while pinning File to IPFS: ${response}`,
				);
			}

			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	get options(): AxiosRequestConfig {
		return {
			withCredentials: true,
			maxContentLength: Infinity,
			maxBodyLength: Infinity,
			responseType: 'json',
			timeout: 15000,
			baseURL: pinataBaseUrl,
		};
	}

	get headers(): AxiosRequestHeaders {
		return {
			pinata_api_key: this.pinataApiKey,
			pinata_secret_api_key: this.pinataSecretApiKey,
		};
	}
}
