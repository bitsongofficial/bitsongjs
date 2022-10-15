import { toUtf8 } from '@cosmjs/encoding';
import { DeliverTxResponse, logs } from '@cosmjs/stargate';
import {
	MsgInstantiateContractEncodeObject,
	isMsgInstantiateContractEncodeObject,
} from '@cosmjs/cosmwasm-stargate';
import { lastValueFrom } from 'rxjs';
import { BitsongClient } from '../dist/client';
import { InstantiateMsg } from '@bitsongjs/contracts/dist/codegen/CW721Base.types';
import { MsgInstantiateContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
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
import { Int53, Uint53 } from '@cosmjs/math';
import Long from 'long';

let api: BitsongClient<typeof modules>;
let apiOther: BitsongClient<typeof modules>;

let contractAddress: string;

describe('BitSongApi CosmWasm with tendermint connection', () => {
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
	describe('Cosmwasm Module', () => {
		test('should create a smart contract instance', async () => {
			const msg: InstantiateMsg = {
				name: 'Adam NFT Collection',
				symbol: 'ADFC',
				minter: TEST_ADDRESS,
				uri: 'ipfs://',
			};

			const message: MsgInstantiateContractEncodeObject = {
				typeUrl: '/cosmwasm.wasm.v1.MsgInstantiateContract',
				value: MsgInstantiateContract.fromPartial({
					sender: TEST_ADDRESS,
					codeId: Long.fromString(new Uint53(11).toString()),
					label: 'my collection',
					msg: toUtf8(JSON.stringify(msg)),
				}),
			};

			expect(api.txClient).toBeTruthy();

			const txClient = await lastValueFrom(api.txClient);

			const signedTxBytes = await txClient?.sign(
				TEST_ADDRESS,
				[message],
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

					const parsedLogs = logs.parseRawLog(txRes.rawLog);

					const contractAddressAttr = logs.findAttribute(
						parsedLogs,
						'instantiate',
						'_contract_address',
					);

					contractAddress = contractAddressAttr.value;

					console.log(contractAddress);
				}
			}
		}, 10000);
	});
});
