/**
 * Example 05: Staking — Delegate, Redelegate, Undelegate
 *
 * Demonstrates staking operations: querying validators,
 * delegating tokens, redelegating, and undelegating.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // Query active validators
  const { validators } = await client.query.staking.getValidators({
    status: "BOND_STATUS_BONDED",
    pagination: undefined,
  });
  console.log(`Found ${validators.length} active validators`);

  const validatorAddr = validators[0]!.operatorAddress;

  // Delegate 10 BTSG
  const delegateResult = await client.tx.staking.delegate({
    delegatorAddress: client.address,
    validatorAddress: validatorAddr,
    amount: { denom: "ubtsg", amount: "10000000" },
  });
  console.log("Delegated! Tx:", delegateResult.transactionHash);

  // Query current delegation
  const delegation = await client.query.staking.getDelegation({
    delegatorAddr: client.address,
    validatorAddr: validatorAddr,
  });
  console.log("Delegation:", delegation.delegationResponse?.balance);

  // Redelegate to another validator
  const newValidator = validators[1]!.operatorAddress;
  const redelegateResult = await client.tx.staking.beginRedelegate({
    delegatorAddress: client.address,
    validatorSrcAddress: validatorAddr,
    validatorDstAddress: newValidator,
    amount: { denom: "ubtsg", amount: "5000000" },
  });
  console.log("Redelegated! Tx:", redelegateResult.transactionHash);

  // Undelegate 2 BTSG
  const undelegateResult = await client.tx.staking.undelegate({
    delegatorAddress: client.address,
    validatorAddress: newValidator,
    amount: { denom: "ubtsg", amount: "2000000" },
  });
  console.log("Undelegated! Tx:", undelegateResult.transactionHash);
}

main().catch(console.error);
