import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse, logs } from '@cosmjs/stargate';
import { BitsongClient } from '../lib/client';
import {
  MsgBurn,
  MsgIssue,
  MsgMint,
  MsgDisableMint,
  MsgSetMinter,
  MsgSetAuthority,
  MsgSetUri
} from '../lib/codec/bitsong/fantoken/v1beta1/tx';
import { stringToPath } from '@cosmjs/crypto';
import * as Constants from '../lib/constants';
import * as dotenv from 'dotenv';

const config = dotenv.config();
const parsed = config.parsed ? config.parsed : {};

const TEST_ADDRESS = parsed.TEST_ADDRESS;
const OTHER_TEST_ADDRESS = parsed.OTHER_TEST_ADDRESS;
const NODE_TM_URL = parsed.NODE_TM_URL;
const TEST_MNEMONIC = parsed.TEST_MNEMONIC;
const OTHER_TEST_MNEMONIC = parsed.OTHER_TEST_MNEMONIC;

const TEST_FEE = {
  amount: [
    {
      denom: Constants.MicroDenom,
      amount: '5000',
    },
  ],
  gas: '200000',
};

const connect = async (mnemonic: string): Promise<BitsongClient> => {
  const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: Constants.Bech32PrefixAccAddr,
    hdPaths: [stringToPath(Constants.getHdPath())],
  });

  return BitsongClient.connect({
    connection: {
      type: 'tendermint',
      endpoint: NODE_TM_URL,
      signer,
    },
  });
};

let api: BitsongClient;
let apiOther: BitsongClient;

let ftDenom: string;

describe('BitSongApi with tendermint connection', () => {
  beforeAll(async () => {
    api = await connect(TEST_MNEMONIC);
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
          console.log(txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");

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
          console.log('Fantoken minted: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");
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
          console.log('Fantoken burned: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");
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
          console.log('Set a new minter: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");
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
          console.log('Set a new minter back to original: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");
        }
      }
    }, 10000);

    test('should disable minting from an issued fantoken', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgDisableMint.fromPartial({
        denom: ftDenom,
        minter: TEST_ADDRESS,
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
          console.log('Minting disabled: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");
        }
      }
    }, 10000);

    test('should set a new URI to an issued fantoken', async () => {
      expect(ftDenom).toBeTruthy();

      const msg = MsgSetUri.fromPartial({
        denom: ftDenom,
        authority: TEST_ADDRESS,
        uri: "https://test.bitsong.io"
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
          console.log('Set a new URI: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");
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
          console.log('Set a new authority: ', txRes.transactionHash);

          expect(txRes.rawLog).not.toContain("failed");
        }
      }
    }, 10000);
  });
});
