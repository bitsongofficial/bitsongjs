/**
 * Example 01: Query Balances
 *
 * Demonstrates how to create a query-only client and fetch
 * bank balances, supply, and denomination metadata.
 */
import { createClient } from "@bitsongjs/sdk";

async function main() {
  // Query-only client — no signer needed
  const client = await createClient({ chain: "mainnet" });

  // Query a single balance
  const balance = await client.query.bank.getBalance({
    address: "bitsong1...",
    denom: "ubtsg",
  });
  console.log("Balance:", balance.balance);

  // Query all balances for an address
  const allBalances = await client.query.bank.getAllBalances({
    address: "bitsong1...",
    pagination: undefined,
    resolveDenom: false,
  });
  console.log("All balances:", allBalances.balances);

  // Query total supply of a denom
  const supply = await client.query.bank.getSupplyOf({ denom: "ubtsg" });
  console.log("Total supply:", supply.amount);

  // Query spendable balances (excludes vesting locked tokens)
  const spendable = await client.query.bank.getSpendableBalances({
    address: "bitsong1...",
    pagination: undefined,
  });
  console.log("Spendable:", spendable.balances);

  // Query denom metadata
  const metadata = await client.query.bank.getDenomMetadata({
    denom: "ubtsg",
  });
  console.log("Denom metadata:", metadata.metadata);
}

main().catch(console.error);
