/**
 * Example 06: Withdraw Staking Rewards
 *
 * Demonstrates querying pending rewards and withdrawing them.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "mainnet",
    signer: MNEMONIC,
  });

  // Query total pending rewards across all validators
  const rewards = await client.query.distribution.getDelegationTotalRewards({
    delegatorAddress: client.address,
  });
  console.log("Total rewards:", rewards.total);

  // Query per-validator rewards
  for (const r of rewards.rewards) {
    console.log(`  ${r.validatorAddress}: ${r.reward}`);
  }

  // Withdraw from a specific validator
  const validatorAddr = rewards.rewards[0]!.validatorAddress;
  const result = await client.tx.distribution.withdrawDelegatorReward({
    delegatorAddress: client.address,
    validatorAddress: validatorAddr,
  });
  console.log("Withdraw tx:", result.transactionHash);

  // Optionally set a custom withdraw address
  const setAddrResult = await client.tx.distribution.setWithdrawAddress({
    delegatorAddress: client.address,
    withdrawAddress: "bitsong1customwithdraw...",
  });
  console.log("Set withdraw address tx:", setAddrResult.transactionHash);
}

main().catch(console.error);
