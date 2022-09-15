import { BitsongClient } from '../dist/client';
import { TEST_ADDRESS, connect } from './config';
import {
  QueryClientImpl as BankQueryClientImpl,
  QueryAllBalancesRequest,
} from '../dist/codec/cosmos/bank/v1beta1/query';

let api: BitsongClient;
let bankClient: BankQueryClientImpl;

describe('BitSong QueryClient', () => {
  beforeAll(async () => {
    api = await connect();
    bankClient = new BankQueryClientImpl(api.queryClient);
  });
  describe('Banks Module', () => {
    test('should get account balances', async () => {
      const bankResponse = await bankClient.AllBalances({
        $type: QueryAllBalancesRequest.$type,
        address: TEST_ADDRESS,
      });

      expect(bankResponse).toBeTruthy();
    });
    test('should get account balances on a specific height', async () => {
      api.setQueryHeight(6700000)
      bankClient = new BankQueryClientImpl(api.queryClient);

      const bankResponse = await bankClient.AllBalances({
        $type: QueryAllBalancesRequest.$type,
        address: TEST_ADDRESS,
      });

      expect(bankResponse).toBeTruthy();
    });
  });
});
