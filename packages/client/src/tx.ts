import { TxRaw } from 'cosmjs-types/cosmos/tx/v1beta1/tx';
import {
    defaultRegistryTypes,
    StdFee,
    DeliverTxResponse,
    AminoTypes,
    QueryClient,
    ProtobufRpcClient,
} from '@cosmjs/stargate';
import { Registry, GeneratedType, EncodeObject } from '@cosmjs/proto-signing';

import { SigningConnectionOptions } from './types';
import { messageTypeRegistry, aminoTypesRegistry } from './codec';
import { createStargateSigningClient } from './signing';

export interface TxClient {
    readonly sign: (
        signerAddress: string,
        msg: any,
        fee: StdFee,
        memo: string,
    ) => Promise<Uint8Array>;
    readonly broadcast: (signedTxBytes: Uint8Array) => Promise<DeliverTxResponse>;
}

export function createBitsongProtobufRpcClient(base: QueryClient, desiredHeight?: number): ProtobufRpcClient {
    return {
      request: (service: string, method: string, data: Uint8Array): Promise<Uint8Array> => {
        const path = `/${service}/${method}`;

        return base.queryUnverified(path, data, desiredHeight);
      },
    };
  }

export async function setupTxExtension(
    connection: SigningConnectionOptions,
): Promise<TxClient> {
    const customRegistry: Array<[string, GeneratedType]> = [];

    messageTypeRegistry.forEach((value, key) => {
        customRegistry.push([`/${key}`, value]);
    });

    const registry = new Registry([...defaultRegistryTypes, ...customRegistry]);

    const aminoTypesObj = Array.from(aminoTypesRegistry.values()).reduce((prev, next) => ({
        ...prev,
        ...next,
    }), {});

    const aminoTypes = new AminoTypes(aminoTypesObj);

    const signingClient = await createStargateSigningClient(
        connection.endpoints,
        connection.signer,
        { ...connection.clientOptions, registry, aminoTypes },
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
            msgsAny.push({
                typeUrl: `/${msg.$type}`,
                value: (({ $type, ...rest }) => rest)(msg),
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

    return {
        sign,
        broadcast,
    };
}