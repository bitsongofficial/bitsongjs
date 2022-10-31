import axios, {
	AxiosInstance,
	AxiosRequestHeaders,
	AxiosRequestConfig,
} from 'axios';
import { PinataPinResponse, PinataPinOptions } from '../types';
import { pinataBaseUrl } from '../configs';

export class PinataService {
	client: AxiosInstance;

	constructor(private pinataApiKey: string, private pinataSecretApiKey: string) {
		this.client = axios.create(this.options);
	}

	async pinFileToIPFS(
		files: File[],
		options?: PinataPinOptions,
	): Promise<PinataPinResponse> {
		try {
			let data = new FormData();

			files.forEach(file => {
				//for each file stream, we need to include the correct relative file path
				let prefix = '';

				if (files.length > 1) {
					prefix = file.name.startsWith('/') ? 'bitsong' : 'bitsong/'
				}

				data.append('file', file, `${prefix}${file.name}`);
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
			headers: this.headers,
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
