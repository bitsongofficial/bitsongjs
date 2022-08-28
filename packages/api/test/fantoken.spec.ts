import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { DeliverTxResponse, logs } from '@cosmjs/stargate';
import { BitsongApi } from '../lib/api';
import { QueryClientImpl } from '../lib/codec/cosmos/bank/v1beta1/query';
import { MsgBurn, MsgIssue, MsgMint } from '../lib/codec/bitsong/fantoken/v1beta1/tx';
import { ServiceClientImpl } from '../lib/codec/cosmos/tx/v1beta1/service';
import { stringToPath } from '@cosmjs/crypto';
import * as Constants from '../lib/constants';

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

let ftDenom: string;

describe('BitSongApi with tendermint connection', () => {
  beforeAll(async () => {
    api = await connect();
  });
  describe('Fantoken Module', () => {
    it('should issue a new fantoken', async () => {
      jest.setTimeout(10000);

      const msg = MsgIssue.fromPartial({
        name: "Bit Fantoken",
        symbol: "bft",
        uri: "ipfs://",
        maxSupply: "100000000000", // 100k
        authority: TEST_ADDRESS,
        minter: TEST_ADDRESS
      })

      const signedTxBytes = await api.msgClient?.sign(
        TEST_ADDRESS,
        [msg],
        TEST_FEE,
        "",
      );

      let txRes: DeliverTxResponse | undefined;
      if (signedTxBytes) {
        txRes = await api.msgClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
        console.log(txRes?.transactionHash)

        const parsedLogs = logs.parseLogs(logs.parseRawLog(txRes?.rawLog));
        const denomAttr = logs.findAttribute(parsedLogs, "bitsong.fantoken.v1beta1.EventIssue", "denom");
        ftDenom = denomAttr.value.slice(1, -1)

        console.log(ftDenom)
      }
    });

    it('should mint a fantoken issued', async () => {
      jest.setTimeout(10000);

      const msg = MsgMint.fromPartial({
        coin: {
          amount: "1",
          denom: ftDenom
        },
        recipient: TEST_ADDRESS,
        minter: TEST_ADDRESS
      })

      const signedTxBytes = await api.msgClient?.sign(
        TEST_ADDRESS,
        [msg],
        TEST_FEE,
        "",
      );

      let txRes: DeliverTxResponse | undefined;
      if (signedTxBytes) {
        txRes = await api.msgClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
        console.log(txRes?.transactionHash)
      }
    })

    it('should burn a fantoken minted', async () => {
      jest.setTimeout(10000);

      const msg = MsgBurn.fromPartial({
        coin: {
          amount: "1",
          denom: ftDenom
        },
        sender: TEST_ADDRESS
      })

      const signedTxBytes = await api.msgClient?.sign(
        TEST_ADDRESS,
        [msg],
        TEST_FEE,
        "",
      );

      let txRes: DeliverTxResponse | undefined;
      if (signedTxBytes) {
        txRes = await api.msgClient?.broadcast(signedTxBytes);
        expect(txRes).toBeTruthy();
        console.log(txRes?.transactionHash)
      }
    })
  });
});