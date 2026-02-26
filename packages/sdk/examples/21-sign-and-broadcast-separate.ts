/**
 * Example 21: Sign and Broadcast Separately
 *
 * Demonstrates how to sign a transaction without broadcasting it,
 * then broadcast it as a separate step. This is useful for:
 * - Inspecting the signed tx bytes before sending
 * - Storing signed transactions for later broadcast
 * - Multi-party signing workflows
 *
 * Uses `client.signingClient.sign()` and `client.signingClient.broadcast()`
 * from the ICosmosSigner interface.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your twelve word mnemonic phrase goes here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  console.log("Sender address:", client.address);

  // 1. Sign a transaction without broadcasting
  const signed = await client.signingClient.sign({
    messages: [
      {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
          fromAddress: client.address,
          toAddress: "bitsong1recipient...",
          amount: [{ denom: "ubtsg", amount: "1000000" }],
        },
      },
    ],
    fee: { amount: [{ denom: "ubtsg", amount: "5000" }], gas: "200000" },
    memo: "signed separately",
  });

  // Inspect the signed transaction
  console.log("Signature:", signed.signature);
  console.log("Tx bytes length:", signed.txBytes.length);

  // 2. Broadcast the pre-signed transaction
  const result = await client.signingClient.broadcast(signed);
  console.log("Tx hash:", result.transactionHash);

  // Wait for the transaction to be included in a block
  const txResponse = await result.wait();
  console.log("Tx included in block:", txResponse);
}

main().catch(console.error);
