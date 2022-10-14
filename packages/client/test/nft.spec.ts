import { DeliverTxResponse, logs } from '@cosmjs/stargate';
import { lastValueFrom } from 'rxjs';
import { BitsongClient } from '../dist/client';
import {
	MsgCreateNFT,
	MsgCreateCollection,
} from '../dist/codec/bitsong/nft/v1beta1/tx';
import {
	TEST_ADDRESS,
	OTHER_TEST_ADDRESS,
	TEST_MNEMONIC,
	OTHER_TEST_MNEMONIC,
	TEST_FEE,
	connect,
	modules,
	getSigner,
	RPC_NODE_URL,
} from './config';

let api: BitsongClient<typeof modules>;
let apiOther: BitsongClient<typeof modules>;

let collectionId: string;
let nftId: string;

describe('BitSongApi NFT with tendermint connection', () => {
	beforeAll(async () => {
		api = await connect(TEST_MNEMONIC);
		const signer = await getSigner(TEST_MNEMONIC);

		await api.connectSigner({
			type: 'tendermint',
			endpoints: [RPC_NODE_URL],
			signer,
		});
		apiOther = await connect(OTHER_TEST_MNEMONIC);
	});
	describe('NFT Module', () => {
		test('should create a new Collection', async () => {
			const msg = MsgCreateCollection.fromPartial({
				sender: TEST_ADDRESS,
				updateAuthority: TEST_ADDRESS,
				name: 'Example NFT bitsongjs collection',
			});

			expect(api.txClient).toBeTruthy();

			const txClient = await lastValueFrom(api.txClient);

			const signedTxBytes = await txClient?.sign(
				TEST_ADDRESS,
				[msg],
				TEST_FEE,
				'',
			);

			expect(signedTxBytes).toBeTruthy();

			let txRes: DeliverTxResponse | undefined;

			if (signedTxBytes) {
				txRes = await txClient?.broadcast(signedTxBytes);
				expect(txRes).toBeTruthy();

				if (txRes) {
					console.log(txRes.transactionHash);

					expect(txRes.rawLog).not.toContain('failed');

					console.log(txRes.rawLog);

					const parsedLogs = logs.parseLogs(logs.parseRawLog(txRes.rawLog));

					const collectionIdAttr = logs.findAttribute(
						parsedLogs,
						'bitsong.nft.v1beta1.EventCollectionCreation',
						'collection_id',
					);

					collectionId = collectionIdAttr.value.slice(1, -1);

					console.log('Collection Created', collectionId);
				}
			}
		}, 10000);
		test('should create a new NFT', async () => {
			const msg = MsgCreateNFT.fromPartial({
				sender: TEST_ADDRESS,
				metadata: {
					name: 'Example NFT bitsongjs',
					collId: collectionId,
				},
			});

			expect(api.txClient).toBeTruthy();

			const txClient = await lastValueFrom(api.txClient);

			const signedTxBytes = await txClient?.sign(
				TEST_ADDRESS,
				[msg],
				TEST_FEE,
				'',
			);

			expect(signedTxBytes).toBeTruthy();

			let txRes: DeliverTxResponse | undefined;

			if (signedTxBytes) {
				txRes = await txClient?.broadcast(signedTxBytes);
				expect(txRes).toBeTruthy();

				if (txRes) {
					console.log(txRes.transactionHash);

					expect(txRes.rawLog).not.toContain('failed');

					const parsedLogs = logs.parseLogs(logs.parseRawLog(txRes.rawLog));

					const nftIdAttr = logs.findAttribute(
						parsedLogs,
						'bitsong.nft.v1beta1.EventNFTCreation',
						'nft_id',
					);

					nftId = nftIdAttr.value.slice(1, -1);

					console.log('NFT Created', nftId);
				}
			}
		}, 10000);
	});
});
