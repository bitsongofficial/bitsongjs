import { DeliverTxResponse, logs } from '@cosmjs/stargate';
import { AccountWithProofs, Merkledrop } from '@bitsongjs/utils';
import { BitsongClient } from '../lib/client';
import { MsgCreate, MsgClaim } from '../lib/codec/bitsong/merkledrop/v1beta1/tx';
import {
  TEST_ADDRESS,
  TEST_MNEMONIC,
  OTHER_TEST_ADDRESS,
  OTHER_TEST_MNEMONIC,
  TEST_FEE,
  accounts,
  connect,
} from './config';
import { MicroDenom } from '../lib/constants';

let api: BitsongClient;
let apiOther: BitsongClient;
let merkledrop: Merkledrop;

let merkledropId: string;

describe('BitSongApi Merkledrop with tendermint connection', () => {
  beforeAll(async () => {
    api = await connect(TEST_MNEMONIC);
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
        endHeight: 600000,
      });

      const signedTxBytes = await api.txClient?.sign(
        TEST_ADDRESS,
        [msg],
        TEST_FEE,
        '',
      );

      let txRes: DeliverTxResponse | undefined;

      if (signedTxBytes) {
        txRes = await api.txClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();

        if (txRes) {
          expect(txRes.rawLog).not.toContain('failed');

          const parsedLogs = logs.parseLogs(logs.parseRawLog(txRes.rawLog));

          console.log(txRes.rawLog, parsedLogs);

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

      const signedTxBytes = await apiOther.txClient?.sign(
        OTHER_TEST_ADDRESS,
        [msg],
        TEST_FEE,
        '',
      );

      let txRes: DeliverTxResponse | undefined;

      if (signedTxBytes) {
        txRes = await api.txClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();

        if (txRes) {
          console.log('Merkledrop claimed: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);
  });
});
