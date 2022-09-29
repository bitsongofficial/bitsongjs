import { BitsongClient } from '../dist/client';
import { TEST_ADDRESS, connect, modules } from './config';
import { QueryAllBalancesRequest } from '../dist/codec/cosmos/bank/v1beta1/query';
import { lastValueFrom, switchMap } from 'rxjs';
import { QueryNFTInfoRequest } from '../dist/codec/bitsong/nft/v1beta1/query';

let api: BitsongClient<typeof modules>;

describe('BitSong NFT QueryClient', () => {
  beforeAll(async () => {
    api = await connect();
    await api.reconnect(api.clientOptions, api.modules);
  });
  describe('NFT Module', () => {
    test('should get nft list', async () => {
      const nftResponse = await lastValueFrom(
        api.query.pipe(
          switchMap(query =>
            query.nft.NFTInfo({
              $type: QueryNFTInfoRequest.$type,
              id: "5:1:0",
            }),
          ),
        ),
      );

      console.log(nftResponse);

      expect(nftResponse).toBeTruthy();
    });
  });
});
