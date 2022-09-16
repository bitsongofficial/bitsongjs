import { BitsongClient } from '../dist/client';
import { TEST_ADDRESS, connect, modules } from './config';
import { QueryAllBalancesRequest } from '../dist/codec/cosmos/bank/v1beta1/query';
import { lastValueFrom, switchMap } from 'rxjs';

let api: BitsongClient<typeof modules>;

describe('BitSong QueryClient', () => {
  beforeAll(async () => {
    api = await connect();
  });
  describe('Banks Module', () => {
    test('should get account balances', async () => {
      const bankResponse = await lastValueFrom(
        api.query.pipe(
          switchMap(query =>
            query.bank.AllBalances({
              $type: QueryAllBalancesRequest.$type,
              address: TEST_ADDRESS,
            }),
          ),
        ),
      );

      expect(bankResponse).toBeTruthy();
    });
    test('should get account balances on a specific height', async () => {
      api.setQueryHeight(6700000);

      const bankResponse = await lastValueFrom(
        api.query.pipe(
          switchMap(query =>
            query.bank.AllBalances({
              $type: QueryAllBalancesRequest.$type,
              address: TEST_ADDRESS,
            }),
          ),
        ),
      );

      expect(bankResponse).toBeTruthy();
    });
  });
});
