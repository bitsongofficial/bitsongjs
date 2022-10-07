import { AminoConverter } from '@cosmjs/stargate';
import { aminoConverter as fantokenAminoConverter } from './bitsong/fantoken/v1beta1/amino';
import { aminoConverter as merkledropAminoConverter } from './bitsong/merkledrop/v1beta1/amino';
import { aminoConverter as nftAminoConverter } from './bitsong/nft/v1beta1/amino';
import { aminoConverter as launchpadAminoConverter } from './bitsong/launchpad/amino';
import { aminoConverter as marketplaceAminoConverter } from './bitsong/marketplace/amino';

export const aminoTypesRegistry = new Map<
	string,
	{ [key: string]: AminoConverter }
>();

aminoTypesRegistry.set('fantoken', fantokenAminoConverter);
aminoTypesRegistry.set('merkledrop', merkledropAminoConverter);
aminoTypesRegistry.set('nft', nftAminoConverter);
aminoTypesRegistry.set('launchpad', launchpadAminoConverter);
aminoTypesRegistry.set('marketplace', marketplaceAminoConverter);

export const bitsongAminoTypes = Array.from(aminoTypesRegistry.values()).reduce(
	(prev, next) => ({
		...prev,
		...next,
	}),
	{},
);
