/**
 * Example 19: Batch with Fee Estimation
 *
 * Combines cross-module batching with pre-estimated fees.
 * Shows the full "estimate → confirm → send" flow that
 * wallet UIs typically implement.
 */
import {
  createClient,
  estimateFee,
  assertTxSuccess,
} from "@bitsongjs/sdk";
import { MsgSend } from "@bitsongjs/telescope/cosmos/bank/v1beta1/tx";
import { MsgDelegate } from "@bitsongjs/telescope/cosmos/staking/v1beta1/tx";
import { toEncoders, toConverters } from "@interchainjs/cosmos";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // Register encoders for the message types we'll use
  client.signingClient.addEncoders?.(toEncoders(MsgSend));
  client.signingClient.addEncoders?.(toEncoders(MsgDelegate));
  client.signingClient.addConverters?.(toConverters(MsgSend));
  client.signingClient.addConverters?.(toConverters(MsgDelegate));

  // Build the batch of cross-module messages
  const messages = [
    {
      typeUrl: MsgSend.typeUrl,
      value: {
        fromAddress: client.address,
        toAddress: "bitsong1alice...",
        amount: [{ denom: "ubtsg", amount: "500000" }],
      },
    },
    {
      typeUrl: MsgSend.typeUrl,
      value: {
        fromAddress: client.address,
        toAddress: "bitsong1bob...",
        amount: [{ denom: "ubtsg", amount: "300000" }],
      },
    },
    {
      typeUrl: MsgDelegate.typeUrl,
      value: {
        delegatorAddress: client.address,
        validatorAddress: "bitsongvaloper1...",
        amount: { denom: "ubtsg", amount: "2000000" },
      },
    },
  ];

  // Step 1: Estimate the fee for the entire batch
  const fee = await estimateFee(
    client.signingClient,
    client.address,
    messages,
    client.chain.gasPrice,
    1.4, // 40% safety margin
  );

  console.log("Estimated fee for batch:");
  console.log("  Gas limit:", fee.gas);
  console.log("  Fee:", fee.amount);

  // Step 2: Show user the fee and get confirmation
  // (In a real app, display this in the UI)
  const feeInBtsg = Number(fee.amount[0]!.amount) / 1_000_000;
  console.log(`  Total cost: ${feeInBtsg} BTSG`);
  console.log("  Messages in batch:", messages.length);

  // Step 3: Send with the pre-computed fee
  const result = await client.signingClient.signAndBroadcast!(
    client.address,
    messages,
    fee,
    "Batch: 2 sends + 1 delegation",
  );

  assertTxSuccess(result);
  console.log("\nBatch tx successful!");
  console.log("  Hash:", result.transactionHash);
}

main().catch(console.error);
