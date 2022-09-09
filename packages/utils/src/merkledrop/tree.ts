import keccak256 from 'keccak256';
import { MerkleTree } from 'merkletreejs';
import { Account, AccountWithProofs } from 'src/types';

export class Merkledrop {
  private tree: MerkleTree;
  private accounts: Account[];

  constructor(accounts: Account[]) {
    this.accounts = accounts;
    const leaves = accounts.map(a => keccak256(a.address + a.amount));
    this.tree = new MerkleTree(leaves, keccak256, { sort: true });
  }

  public getMerkleRoot(): string {
    return this.tree.getHexRoot().replace('0x', '');
  }

  public getMerkleProof(account: Account): string[] {
    return this.tree
      .getHexProof(keccak256(account.address + account.amount))
      .map(v => v.replace('0x', ''));
  }

  public getAccountsWithProofs(): AccountWithProofs[] {
    return this.accounts.map((account) => ({
      ...account,
      proofs: this.getMerkleProof(account),
    }))
  }

  public verify(proof: string[], account: Account): boolean {
    let hashBuf = keccak256(account.address + account.amount);

    proof.forEach(proofElem => {
      const proofBuf = Buffer.from(proofElem, 'hex');

      if (Buffer.compare(hashBuf, proofBuf) === -1) {
        hashBuf = keccak256(Buffer.concat([hashBuf, proofBuf]));
      } else {
        hashBuf = keccak256(Buffer.concat([proofBuf, hashBuf]));
      }
    });

    return this.getMerkleRoot() === hashBuf.toString('hex');
  }
}
