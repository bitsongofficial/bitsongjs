import {
	GasPrice,
	SigningStargateClient,
	SigningStargateClientOptions,
} from '@cosmjs/stargate';
import {
	CosmWasmClient,
	SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import {
	BehaviorSubject,
	from,
	lastValueFrom,
	of,
	retry,
	switchMap,
	tap,
} from 'rxjs';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { MicroDenom } from './constants';

/**
 * createStargateCosmWasmSigningClient returns a SigningCosmWasmClient
 * to be used for signing and broading transactions.
 *
 * @param endpoint - string.
 * @param signer - OfflineSigner.
 * @param clientOptions - SigningCosmWasmClientOptions.
 */
export async function createStargateCosmWasmSigningClient(
	endpoints: string[],
	signer: OfflineSigner,
	clientOptions: SigningStargateClientOptions,
): Promise<SigningCosmWasmClient> {
	const connectionRetry = new BehaviorSubject<number>(0);

	const defaultClientOptions = {
		broadcastPollIntervalMs: 300,
		broadcastTimeoutMs: 600000,
		gasPrice: GasPrice.fromString(`0.35${MicroDenom}`),
	};

	const options: SigningStargateClientOptions = {
		...defaultClientOptions,
		...clientOptions,
	};

	try {
		/*
      We use rxjs utils to try different endpoints, until we get a connection
    */
		const signingClient = lastValueFrom(
			connectionRetry.pipe(
				switchMap(attempt => {
					return from(
						SigningCosmWasmClient.connectWithSigner(
							endpoints[attempt],
							signer,
							// @ts-ignore
							options,
						),
					).pipe(
						tap(() => {
							connectionRetry.complete();
						}),
					);
				}),
				retry({
					count: endpoints.length,
					delay: (_, retryCount) => {
						connectionRetry.next(retryCount);

						return of(retryCount);
					},
					resetOnSuccess: true,
				}),
			),
		);

		return signingClient;
	} catch (e) {
		return Promise.reject(e);
	}
}

/**
 * createStargateCosmWasmQueryClient returns a CosmWasmClient
 * to be used for queries.
 *
 * @param endpoints - strings array.
 */
 export async function createStargateCosmWasmQueryClient(
	endpoints: string[],
): Promise<CosmWasmClient> {
	const connectionRetry = new BehaviorSubject<number>(0);

	try {
		/*
      We use rxjs utils to try different endpoints, until we get a connection
    */
		const client = lastValueFrom(
			connectionRetry.pipe(
				switchMap(attempt => {
					return from(
						SigningCosmWasmClient.connect(
							endpoints[attempt],
						),
					).pipe(
						tap(() => {
							connectionRetry.complete();
						}),
					);
				}),
				retry({
					count: endpoints.length,
					delay: (_, retryCount) => {
						connectionRetry.next(retryCount);

						return of(retryCount);
					},
					resetOnSuccess: true,
				}),
			),
		);

		return client;
	} catch (e) {
		return Promise.reject(e);
	}
}

/**
 * createStargateSigningClient returns a SigningStargateClient
 * to be used for signing and broading transactions.
 *
 * @param endpoint - string.
 * @param signer - OfflineSigner.
 * @param clientOptions - SigningStargateClientOptions.
 */
export async function createStargateSigningClient(
	endpoints: string[],
	signer: OfflineSigner,
	clientOptions: SigningStargateClientOptions,
): Promise<SigningStargateClient> {
	const connectionRetry = new BehaviorSubject<number>(0);

	const defaultClientOptions = {
		broadcastPollIntervalMs: 300,
		broadcastTimeoutMs: 600000,
	};

	const options: SigningStargateClientOptions = {
		...defaultClientOptions,
		...clientOptions,
	};

	try {
		/*
      We use rxjs utils to try different endpoints, until we get a connection
    */
		const signingClient = lastValueFrom(
			connectionRetry.pipe(
				switchMap(attempt => {
					return from(
						SigningStargateClient.connectWithSigner(
							endpoints[attempt],
							signer,
							options,
						),
					).pipe(
						tap(() => {
							connectionRetry.complete();
						}),
					);
				}),
				retry({
					count: endpoints.length,
					delay: (_, retryCount) => {
						connectionRetry.next(retryCount);

						return of(retryCount);
					},
					resetOnSuccess: true,
				}),
			),
		);

		return signingClient;
	} catch (e) {
		return Promise.reject(e);
	}
}
