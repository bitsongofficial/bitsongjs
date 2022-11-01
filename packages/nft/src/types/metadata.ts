export interface NFTMetadataAttribute {
	display_type?: string;
	trait_type: string;
	value: any;
}

export interface NFTMetadata {
	name: string;
	image: string;
	description?: string;
	external_url?: string;
	animation_url?: string;
	youtube_url?: string;
	attributes?: NFTMetadataAttribute[];
}

export interface CollectionMetadata {
	image: string;
	cover: string;
	description: string;
	external_urls?: { [key: string]: string };
}
