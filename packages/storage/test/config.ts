import * as dotenv from 'dotenv';

const result = dotenv.config();

export const nftStorageApiKey = result.parsed?.NFT_STORAGE_API_KEY ?? '';
export const pinataApiKey = result.parsed?.PINATA_API_KEY ?? '';
export const pinataSecretApiKey = result.parsed?.PINATA_SECRET_API_KEY ?? '';
export const ipfsUrl = result.parsed?.IPFS_URL ?? '';
export const ipfsApiKey = result.parsed?.IPFS_API_KEY ?? '';