import { DeliverTxResponse, logs } from '@cosmjs/stargate';
import { AccountWithProofs, Merkledrop } from '@bitsongjs/utils';
import { BitsongClient } from '../dist/client';
import { MsgCreate, MsgClaim } from '../dist/codec/bitsong/merkledrop/v1beta1/tx';
import {
  TEST_ADDRESS,
  TEST_MNEMONIC,
  OTHER_TEST_ADDRESS,
  OTHER_TEST_MNEMONIC,
  RPC_NODE_URL,
  TEST_FEE,
  accounts,
  connect,
  modules,
  getSigner
} from './config';
import { MicroDenom } from '../dist/constants';
import { lastValueFrom } from 'rxjs';

let api: BitsongClient<typeof modules>;
let apiOther: BitsongClient<typeof modules>;
let merkledrop: Merkledrop;

let merkledropId: string;

describe('BitSongApi Merkledrop with tendermint connection', () => {
  beforeAll(async () => {
    api = await connect(TEST_MNEMONIC);
    const signer = await getSigner(TEST_MNEMONIC);

    await api.connectSigner({
      type: 'tendermint',
      endpoints: [RPC_NODE_URL],
      signer,
    })

    apiOther = await connect(OTHER_TEST_MNEMONIC);
    merkledrop = new Merkledrop(accounts);
  });

  describe('Merkledrop Module', () => {
    test('should create a merkledrop', async () => {
      expect(accounts.length).toBeGreaterThan(0);
      expect(merkledrop.getMerkleRoot()).toBeTruthy();

      const msg = MsgCreate.fromPartial({
        coin: {
          amount: '2000000',
          denom: MicroDenom,
        },
        owner: TEST_ADDRESS,
        merkleRoot: merkledrop.getMerkleRoot(),
        endHeight: 800000,
      });

      const txClient = await lastValueFrom(api.txClient);

      const signedTxBytes = await txClient?.sign(
        TEST_ADDRESS,
        [msg],
        TEST_FEE,
        '',
      );

      let txRes: DeliverTxResponse | undefined;

      if (signedTxBytes) {
        txRes = await txClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();

        if (txRes) {
          expect(txRes.rawLog).not.toContain('failed');

          const parsedLogs = logs.parseLogs(logs.parseRawLog(txRes.rawLog));

          const merkledropIdAttr = logs.findAttribute(
            parsedLogs,
            'bitsong.merkledrop.v1beta1.EventCreate',
            'merkledrop_id',
          );

          merkledropId = merkledropIdAttr.value.slice(1, -1);

          console.log('Merkledrop created with id: ', merkledropIdAttr.value, ' txhash:', txRes.transactionHash);

          expect(merkledropId).toBeTruthy();
        }
      }
    }, 10000);

    test('should claim a merkledrop', async () => {
      expect(accounts.length).toBeGreaterThan(0);
      expect(merkledrop.getMerkleRoot()).toBeTruthy();

      const accountsWithProofs = merkledrop.getAccountsWithProofs();
      const accountWithProof: AccountWithProofs = accountsWithProofs.find((account) => account.address === OTHER_TEST_ADDRESS);

      expect(accountWithProof).toBeTruthy();

      if (!accountWithProof) {
        return;
      }

      const msg = MsgClaim.fromPartial({
        amount: accountWithProof.amount,
        sender: OTHER_TEST_ADDRESS,
        merkledropId,
        index: accountWithProof.index,
        proofs: accountWithProof.proofs,
      });

      const txClient = await lastValueFrom(apiOther.txClient);

      const signedTxBytes = await txClient?.sign(
        OTHER_TEST_ADDRESS,
        [msg],
        TEST_FEE,
        '',
      );

      let txRes: DeliverTxResponse | undefined;

      if (signedTxBytes) {
        txRes = await txClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();

        if (txRes) {
          console.log('Merkledrop claimed: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);
  });
});
