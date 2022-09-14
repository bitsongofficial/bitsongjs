import sha256 from 'crypto-js/sha256';
import { MerkleTree } from 'merkletreejs';
import { Account, AccountWithProofs } from 'src/types';

/*
  Utility class for Merkledrop tree generation.

  It can be used to generate a merkledrop for airdrop purpose,
  using bitsong chain module: https://docs.bitsong.io/features-and-modules/merkledrop

  accounts = [
    {
      address: 'bitsong1...',
      amount: '1000000' // ubtsg
    }
  ]
*/
export class Merkledrop {
  private tree: MerkleTree;
  private accounts: Account[];

  constructor(accounts: Account[]) {
    this.accounts = accounts;
    const leaves = accounts.map((a, index) => {
      return sha256(`${index}${a.address}${a.amount}`).toString()
    });

    this.tree = new MerkleTree(leaves, sha256);
  }

  public getMerkleRoot(): string {
    return this.tree.getHexRoot().replace('0x', '');
  }

  public getMerkleProof(account: Account, index: number): string[] {
    return this.tree
      .getHexProof(sha256(`${index}${account.address}${account.amount}`).toString())
      .map(v => v.replace('0x', ''));
  }

  public getAccountsWithProofs(): AccountWithProofs[] {
    return this.accounts.map((account, index) => ({
      ...account,
      proofs: this.getMerkleProof(account, index),
      index,
    }));
  }
}
