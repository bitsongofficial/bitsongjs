import { DeliverTxResponse, logs } from '@cosmjs/stargate';
import { lastValueFrom } from 'rxjs';
import { BitsongClient } from '../dist/client';
import {
  MsgBurn,
  MsgIssue,
  MsgMint,
  MsgDisableMint,
  MsgSetMinter,
  MsgSetAuthority,
  MsgSetUri,
} from '../dist/codec/bitsong/fantoken/v1beta1/tx';
import {
  TEST_ADDRESS,
  OTHER_TEST_ADDRESS,
  TEST_MNEMONIC,
  OTHER_TEST_MNEMONIC,
  TEST_FEE,
  connect,
  modules,
} from './config';

let api: BitsongClient<typeof modules>;
let apiOther: BitsongClient<typeof modules>;

let ftDenom: string;

describe('BitSongApi Fantoken with tendermint connection', () => {
  beforeAll(async () => {
    api = await connect(TEST_MNEMONIC);
    await api.reconnect(api.clientOptions, api.modules);
    apiOther = await connect(OTHER_TEST_MNEMONIC);
  });
  describe('Fantoken Module', () => {
    test('should issue a new fantoken', async () => {
      const msg = MsgIssue.fromPartial({
        name: 'Bit Fantoken',
        symbol: 'bft',
        uri: 'ipfs://',
        maxSupply: '100000000000', // 100k
        authority: TEST_ADDRESS,
        minter: TEST_ADDRESS,
      });

      const txClient = await lastValueFrom(api.txClient);

      const signedTxBytes = await txClient?.sign(
        TEST_ADDRESS,
        [msg],
        TEST_FEE,
        '',
      );

      let txRes: DeliverTxResponse | undefined;

      expect(signedTxBytes).toBeTruthy();

      if (signedTxBytes) {
        txRes = await txClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();

        if (txRes) {
          console.log(txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');

          const parsedLogs = logs.parseLogs(logs.parseRawLog(txRes.rawLog));

          const denomAttr = logs.findAttribute(
            parsedLogs,
            'bitsong.fantoken.v1beta1.EventIssue',
            'denom',
          );

          ftDenom = denomAttr.value.slice(1, -1);

          console.log(ftDenom);
        }
      }
    }, 10000);

    test('should mint a fantoken issued', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgMint.fromPartial({
        coin: {
          amount: '1',
          denom: ftDenom,
        },
        recipient: TEST_ADDRESS,
        minter: TEST_ADDRESS,
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
          console.log('Fantoken minted: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);

    test('should burn a fantoken minted', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgBurn.fromPartial({
        coin: {
          amount: '1',
          denom: ftDenom,
        },
        sender: TEST_ADDRESS,
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
          console.log('Fantoken burned: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);

    test('should set a minter to an issued fantoken', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgSetMinter.fromPartial({
        denom: ftDenom,
        oldMinter: TEST_ADDRESS,
        newMinter: OTHER_TEST_ADDRESS,
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
          console.log('Set a new minter: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);

    test('should set the minter back to original address of an issued fantoken', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgSetMinter.fromPartial({
        denom: ftDenom,
        oldMinter: OTHER_TEST_ADDRESS,
        newMinter: TEST_ADDRESS,
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
          console.log(
            'Set a new minter back to original: ',
            txRes.transactionHash,
          );

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);

    test('should disable minting from an issued fantoken', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgDisableMint.fromPartial({
        denom: ftDenom,
        minter: TEST_ADDRESS,
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
          console.log('Minting disabled: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);

    test('should set a new URI to an issued fantoken', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgSetUri.fromPartial({
        denom: ftDenom,
        authority: TEST_ADDRESS,
        uri: 'https://test.bitsong.io',
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
          console.log('Set a new URI: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);

    test('should set a new authority to an issued fantoken', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgSetAuthority.fromPartial({
        denom: ftDenom,
        oldAuthority: TEST_ADDRESS,
        newAuthority: OTHER_TEST_ADDRESS,
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
          console.log('Set a new authority: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain('failed');
        }
      }
    }, 10000);
  });
});
