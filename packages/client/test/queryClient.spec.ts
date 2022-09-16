import { BitsongClient } from '../dist/client';
import { TEST_ADDRESS, connect, modules } from './config';
import { QueryAllBalancesRequest } from '../dist/codec/cosmos/bank/v1beta1/query';

let api: BitsongClient<typeof modules>;

describe('BitSong QueryClient', () => {
  beforeAll(async () => {
    api = await connect();
  });
  describe('Banks Module', () => {
    test('should get account balances', async () => {
      const bankResponse = await api.query.bank.AllBalances({
        $type: QueryAllBalancesRequest.$type,
        address: TEST_ADDRESS,
      });

      expect(bankResponse).toBeTruthy();
    });
    test('should get account balances on a specific height', async () => {
      api.setQueryHeight(6700000);

      const bankResponse = await api.query.bank.AllBalances({
        $type: QueryAllBalancesRequest.$type,
        address: TEST_ADDRESS,
      });

      expect(bankResponse).toBeTruthy();
    });
  });
});
