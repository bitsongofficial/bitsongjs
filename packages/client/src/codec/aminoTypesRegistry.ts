import { AminoConverter } from '@cosmjs/stargate';
import { aminoConverter as fantokenAminoConverter } from './bitsong/fantoken/v1beta1/amino';
import { aminoConverter as merkledropAminoConverter } from './bitsong/merkledrop/v1beta1/amino';

export const aminoTypesRegistry = new Map<
  string,
  { [key: string]: AminoConverter }
>();

aminoTypesRegistry.set('fantoken', fantokenAminoConverter);
aminoTypesRegistry.set('merkledrop', merkledropAminoConverter);
