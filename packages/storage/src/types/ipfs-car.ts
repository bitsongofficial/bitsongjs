import { ImportCandidateStream } from 'ipfs-car/pack';
import { BlockstoreCarReader } from '../utils/bs-card-reader';

export interface CarResult {
	cidString: string;
	carOut: BlockstoreCarReader;
	output: AsyncIterable<Uint8Array>;
}
