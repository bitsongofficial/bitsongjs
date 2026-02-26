/**
 * Example 03: Query-Only Client
 *
 * Shows how TypeScript discriminates between BitsongClient and
 * BitsongSigningClient based on whether a signer is provided.
 * Accessing `tx` on a query-only client throws a descriptive error.
 */
import { createClient, type BitsongClient, type BitsongSigningClient } from "@bitsongjs/sdk";

async function main() {
  // No signer → BitsongClient (query-only)
  const queryClient: BitsongClient = await createClient({ chain: "mainnet" });

  // Queries work fine
  const pool = await queryClient.query.staking.getPool({});
  console.log("Bonded tokens:", pool.pool?.bondedTokens);

  const inflation = await queryClient.query.mint.getInflation({});
  console.log("Inflation:", inflation.inflation);

  // Accessing tx throws a descriptive error instead of
  // "Cannot read properties of undefined"
  try {
    // @ts-expect-error — tx is optional on BitsongClient
    await queryClient.tx.bank.send({ /* ... */ });
  } catch (err) {
    console.log("Expected error:", (err as Error).message);
    // → "No signer provided. Pass a signer to createClient() to enable transactions."
  }

  // With signer → BitsongSigningClient (tx available)
  const signingClient: BitsongSigningClient = await createClient({
    chain: "testnet",
    signer: "your mnemonic here ...",
  });

  // TypeScript knows tx, address, and signingClient are defined
  console.log("Address:", signingClient.address);
  console.log("Has tx:", !!signingClient.tx);
}

main().catch(console.error);
