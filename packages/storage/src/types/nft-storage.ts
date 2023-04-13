export interface NftStorageOptions {
	token: string;
	endpoint?: URL;
	rateLimiter?: () => Promise<void>;
	did?: string;
}
