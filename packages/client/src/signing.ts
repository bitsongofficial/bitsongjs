import {
  SigningStargateClient,
  SigningStargateClientOptions,
} from '@cosmjs/stargate';
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
