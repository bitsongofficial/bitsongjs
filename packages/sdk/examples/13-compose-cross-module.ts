/**
 * Example 13: Compose Cross-Module Transactions
 *
 * For batching messages from DIFFERENT modules into a single tx,
 * you use the signing client's signAndBroadcast() directly.
 * This lets you atomically delegate + withdraw + send in one tx.
 */
import { createClient, calculateFee, assertTxSuccess } from "@bitsongjs/sdk";

// Import message codecs from telescope for proper encoding
import { MsgSend } from "@bitsongjs/telescope/cosmos/bank/v1beta1/tx";
import { MsgDelegate } from "@bitsongjs/telescope/cosmos/staking/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "@bitsongjs/telescope/cosmos/distribution/v1beta1/tx";
import { toEncoders, toConverters } from "@interchainjs/cosmos";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  const validatorAddr = "bitsongvaloper1...";

  // Register encoders for all message types we'll use.
  // This tells the signer how to serialize each message type.
  client.signingClient.addEncoders?.(toEncoders(MsgSend));
  client.signingClient.addEncoders?.(toEncoders(MsgDelegate));
  client.signingClient.addEncoders?.(toEncoders(MsgWithdrawDelegatorReward));
  client.signingClient.addConverters?.(toConverters(MsgSend));
  client.signingClient.addConverters?.(toConverters(MsgDelegate));
  client.signingClient.addConverters?.(toConverters(MsgWithdrawDelegatorReward));

  // Build messages from different modules
  const messages = [
    // 1. Withdraw staking rewards
    {
      typeUrl: MsgWithdrawDelegatorReward.typeUrl,
      value: {
        delegatorAddress: client.address,
        validatorAddress: validatorAddr,
      },
    },
    // 2. Delegate some tokens
    {
      typeUrl: MsgDelegate.typeUrl,
      value: {
        delegatorAddress: client.address,
        validatorAddress: validatorAddr,
        amount: { denom: "ubtsg", amount: "5000000" },
      },
    },
    // 3. Send tokens to a friend
    {
      typeUrl: MsgSend.typeUrl,
      value: {
        fromAddress: client.address,
        toAddress: "bitsong1friend...",
        amount: [{ denom: "ubtsg", amount: "1000000" }],
      },
    },
  ];

  // Calculate fee for 3 messages (higher gas needed)
  const fee = calculateFee(400_000, client.chain.gasPrice);

  // Send all 3 messages atomically in a single tx
  const result = await client.signingClient.signAndBroadcast!(
    client.address,
    messages,
    fee,
    "Withdraw + delegate + send in one tx",
  );

  // Verify success
  assertTxSuccess(result);
  console.log("Cross-module tx:", result.transactionHash);
  console.log("Gas used:", result.rawResponse);
}

main().catch(console.error);
