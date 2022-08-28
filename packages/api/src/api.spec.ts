import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse } from '@cosmjs/stargate';
import { BitsongApi } from './api';
import { QueryClientImpl } from './codec/cosmos/bank/v1beta1/query';
import { MsgSend } from './codec/cosmos/bank/v1beta1/tx';
import { ServiceClientImpl } from './codec/cosmos/tx/v1beta1/service';
import { stringToPath } from '@cosmjs/crypto';
import * as Constants from './constants';

const TEST_ADDRESS = 'bitsong1vgpsha4f8grmsqr6krfdxwpcf3x20h0q3ztaj2';
const NODE_TM_URL = 'http://localhost:26657/';
const TEST_FEE = {
    amount: [
        {
            denom: Constants.MicroDenom,
            amount: '5000',
        },
    ],
    gas: '200000',
};
const TEST_MEMO = `bitsongjs v${process.env.npm_package_version} tests`;
// This test msg just sends tokens to the same address
const TEST_MSG = MsgSend.fromPartial({
    fromAddress: TEST_ADDRESS,
    toAddress: TEST_ADDRESS,
    amount: [{ amount: '1000', denom: Constants.MicroDenom }],
});

const connect = async (): Promise<BitsongApi> => {
    const mnemonic = // mnemonic for TEST_ADDRESS
        'guard cream sadness conduct invite crumble clock pudding hole grit liar hotel maid produce squeeze return argue turtle know drive eight casino maze host';

    const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: Constants.Bech32PrefixAccAddr,
        hdPaths: [stringToPath(Constants.getHdPath())]
    });

    return BitsongApi.connect({
        connection: {
            type: 'tendermint',
            endpoint: NODE_TM_URL,
            signer,
        },
    });
};

let api: BitsongApi;

describe('BitSongApi with tendermint connection', () => {
    beforeAll(async () => {
        api = await connect();
    });
    describe('Querying', () => {
        it('should fetch balances using tendermint query client', async () => {
            const bankClient = new QueryClientImpl(api.queryClient);

            const res = await bankClient.AllBalances({
                address: TEST_ADDRESS,
                $type: 'cosmos.bank.v1beta1.QueryAllBalancesRequest'
            });
            expect(res.balances.length).toBeGreaterThanOrEqual(1);
        });

        it('should fetch a tx using tendermint service client', async () => {
            const txHash =
                '0B79928F320419163E5FF438075F47156F3B20C2FC3F49854CDF7932425868CE';
            const serviceClient = new ServiceClientImpl(api.queryClient);

            const res = await serviceClient.GetTx({
                hash: txHash,
                $type: 'cosmos.tx.v1beta1.GetTxRequest'
            });
            expect(res.txResponse).toBeTruthy();
            expect(res.txResponse?.data).toBeTruthy();
            expect(res.txResponse?.txhash).toEqual(txHash);
        });
    });
    describe('Signing and broadcasting txs', () => {
        it('should get data back with a signing client - signed transaction', async () => {
            const signedTxBytes = await api.msgClient?.sign(
                TEST_ADDRESS,
                [TEST_MSG],
                TEST_FEE,
                TEST_MEMO,
            );
            expect(api.msgClient).toBeTruthy();
            expect(signedTxBytes).toBeTruthy();
        });
        it('should return a tx hash when sending tokens', async () => {
            jest.setTimeout(10000);
            let txRes: DeliverTxResponse | undefined;
            const signingClient = api.msgClient;

            const signedTxBytes = await api.msgClient?.sign(
                TEST_ADDRESS,
                [TEST_MSG],
                TEST_FEE,
                TEST_MEMO,
            );
            expect(signedTxBytes).toBeTruthy();
            if (signedTxBytes) {
                txRes = await signingClient?.broadcast(signedTxBytes);
                expect(txRes).toBeTruthy();
            }
        });
    });
});