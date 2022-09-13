import { Merkledrop } from '../dist';
import { accounts } from './config';

let merkledrop: Merkledrop;

describe('Bitsong merkledrop tests', () => {
  beforeAll(async () => {
    merkledrop = new Merkledrop(accounts);
  });

  test('Should generate a merkletree from an MerkledropAccount array', () => {
    expect(accounts.length).toBeGreaterThan(0);
    expect(merkledrop.getMerkleRoot()).toBeTruthy();

    const account = [...merkledrop.getAccountsWithProofs()].pop();
    console.log(merkledrop.getAccountsWithProofs());
    expect(account).toBeTruthy();

    if (account) {
      expect(account.proofs.length).toBeGreaterThan(0);

      /* expect(
        merkledrop.verify(account.proofs, account, account.index),
      ).toBeTruthy(); */
    }
  });
});
