import { Merkledrop } from '../merkledrop';
import { accounts } from './config';

let merkledrop: Merkledrop;

describe('Bitsong merkledrop tests', () => {
  beforeAll(async () => {
    merkledrop = new Merkledrop(accounts);
  });

  test('Should generate a merkletree from an MerkledropAccount array', () => {
    expect(accounts.length).toBeGreaterThan(0);
    expect(merkledrop.getMerkleRoot()).toBeTruthy();

    const account = accounts.pop();
    expect(account).toBeTruthy();

    if (account) {
        const proofs = merkledrop.getMerkleProof(account);

        expect(proofs.length).toBeGreaterThan(0);

        expect(merkledrop.verify(proofs, account)).toBeTruthy();

        console.log(proofs);
        console.log(account);
    }
  });
});
