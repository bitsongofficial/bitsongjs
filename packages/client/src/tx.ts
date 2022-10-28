import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import {
	defaultRegistryTypes,
	StdFee,
	DeliverTxResponse,
	AminoTypes,
	QueryClient,
	ProtobufRpcClient,
	SigningStargateClient,
	createIbcAminoConverters,
	createBankAminoConverters,
	createAuthzAminoConverters,
	createStakingAminoConverters,
	createCrysisAminoConverters,
	createDistributionAminoConverters,
	createEvidenceAminoConverters,
	createFeegrantAminoConverters,
	createGovAminoConverters,
	createSlashingAminoConverters,
	createVestingAminoConverters
} from '@cosmjs/stargate';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Registry, EncodeObject } from '@cosmjs/proto-signing';

import { SigningConnectionOptions } from './types';
import { bitsongAminoTypes } from './codec';
import { bitsongRegistry } from './codec/customRegistry';
import {
	createStargateCosmWasmQueryClient,
	createStargateCosmWasmSigningClient,
	createStargateSigningClient,
} from './signing';

export interface TxClient {
	readonly sign: (
		signerAddress: string,
		msg: any,
		fee: StdFee,
		memo: string,
	) => Promise<Uint8Array>;
	readonly signCosmWasm: (
		signerAddress: string,
		msg: any,
		fee: StdFee,
		memo: string,
	) => Promise<Uint8Array>;
	readonly broadcast: (signedTxBytes: Uint8Array) => Promise<DeliverTxResponse>;
	readonly broadcastCosmWasm: (
		signedTxBytes: Uint8Array,
	) => Promise<DeliverTxResponse>;
	signingClient: SigningStargateClient;
	signingCosmWasmClient: SigningCosmWasmClient;
}

export function createBitsongProtobufRpcClient(
	base: QueryClient,
	desiredHeight?: number,
): ProtobufRpcClient {
	return {
		request: (
			service: string,
			method: string,
			data: Uint8Array,
		): Promise<Uint8Array> => {
			const path = `/${service}/${method}`;

			return base.queryUnverified(path, data, desiredHeight);
		},
	};
}

export async function setupQueryExtension(connection: SigningConnectionOptions) {
	const cosmWasmClient = await createStargateCosmWasmQueryClient(
		connection.endpoints,
	);

	return {
		cosmWasmClient
	}
}

export async function setupTxExtension(
	connection: SigningConnectionOptions,
): Promise<TxClient> {
	const registry = new Registry([...defaultRegistryTypes, ...bitsongRegistry()]);

	const aminoTypes = new AminoTypes({
		...bitsongAminoTypes,
		...createIbcAminoConverters(),
		...createBankAminoConverters(),
		...createAuthzAminoConverters(),
		...createStakingAminoConverters(''),
		...createGovAminoConverters(),
		...createVestingAminoConverters()
	});

	const signingClient = await createStargateSigningClient(
		connection.endpoints,
		connection.signer,
		{ ...connection.clientOptions, registry, aminoTypes },
	);

	const signingCosmWasmClient = await createStargateCosmWasmSigningClient(
		connection.endpoints,
		connection.signer,
		{ ...connection.clientOptions },
	);

	/**
	 * Sign a transaction with msgs
	 */
	const sign = async (
		signerAddress: string,
		msgs: any[],
		fee: StdFee,
		memo: string,
	): Promise<Uint8Array> => {
		const msgsAny: EncodeObject[] = [];
		for (const msg of msgs) {
			const typeUrl = msg.$type ? `/${msg.$type}` : msg.typeUrl;
			const value = msg.value
				? msg.value
				: (({ $type, typeUrl, ...rest }) => rest)(msg);

			msgsAny.push({
				typeUrl,
				value,
			});
		}
		try {
			const txRaw = await signingClient.sign(signerAddress, msgsAny, fee, memo);
			const txBytes = TxRaw.encode(txRaw).finish();

			return txBytes;
		} catch (err) {
			return Promise.reject(err);
		}
	};

	/**
	 * Sign a transaction with msgs
	 */
	const signCosmWasm = async (
		signerAddress: string,
		msgs: any[],
		fee: StdFee,
		memo: string,
	): Promise<Uint8Array> => {
		const msgsAny: EncodeObject[] = [];
		for (const msg of msgs) {
			const typeUrl = msg.$type ? `/${msg.$type}` : msg.typeUrl;
			const value = msg.value
				? msg.value
				: (({ $type, typeUrl, ...rest }) => rest)(msg);

			msgsAny.push({
				typeUrl,
				value,
			});
		}
		try {
			const txRaw = await signingCosmWasmClient.sign(
				signerAddress,
				msgsAny,
				fee,
				memo,
			);
			const txBytes = TxRaw.encode(txRaw).finish();

			return txBytes;
		} catch (err) {
			return Promise.reject(err);
		}
	};

	/**
	 * Broadcast a signed transaction and wait for the deliver tx response
	 */
	const broadcast = async (
		signedTxBytes: Uint8Array,
	): Promise<DeliverTxResponse> => {
		try {
			const result = await signingClient.broadcastTx(signedTxBytes);

			return result;
		} catch (err) {
			return Promise.reject(err);
		}
	};

	/**
	 * Broadcast a signed transaction and wait for the deliver tx response
	 */
	const broadcastCosmWasm = async (
		signedTxBytes: Uint8Array,
	): Promise<DeliverTxResponse> => {
		try {
			const result = await signingCosmWasmClient.broadcastTx(signedTxBytes);

			return result;
		} catch (err) {
			return Promise.reject(err);
		}
	};

	return {
		sign,
		signCosmWasm,
		broadcast,
		broadcastCosmWasm,
		signingClient,
		signingCosmWasmClient,
	};
}
