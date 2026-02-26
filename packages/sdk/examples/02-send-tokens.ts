/**
 * Example 02: Send Tokens
 *
 * Demonstrates a basic bank send transaction using a mnemonic signer.
 * When a signer is provided, createClient() returns a BitsongSigningClient
 * with the `tx` namespace available.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your twelve word mnemonic phrase goes here ...";

async function main() {
  // Signing client — signer enables the `tx` namespace
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  console.log("Sender address:", client.address);

  // Send tokens — fee defaults to "auto" (gas estimation)
  const result = await client.tx.bank.send({
    fromAddress: client.address,
    toAddress: "bitsong1recipient...",
    amount: [{ denom: "ubtsg", amount: "1000000" }], // 1 BTSG
  });

  console.log("Tx hash:", result.transactionHash);

  // Send with explicit memo
  const result2 = await client.tx.bank.send(
    {
      fromAddress: client.address,
      toAddress: "bitsong1recipient...",
      amount: [{ denom: "ubtsg", amount: "500000" }],
    },
    "auto",
    "Thanks for the coffee!",
  );

  console.log("Tx hash with memo:", result2.transactionHash);
}

main().catch(console.error);
