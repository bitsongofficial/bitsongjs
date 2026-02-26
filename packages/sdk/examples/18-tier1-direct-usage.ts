/**
 * Example 18: Tier 1 — Direct Module Usage (Without createClient)
 *
 * The SDK has a 3-tier architecture:
 *   Tier 1: Individual module functions (bankQuery, bankTx, etc.)
 *   Tier 2: Low-level factories (createRpcClient, createSigningClient)
 *   Tier 3: Convenience client (createClient)
 *
 * This example shows Tier 1+2 usage for maximum control and
 * minimal bundle size — only import what you need.
 */
import { createRpcClient } from "@bitsongjs/sdk/rpc";
import { createSigningClient } from "@bitsongjs/sdk/signer";
import { bankQuery, bankTx } from "@bitsongjs/sdk/modules";
import { stakingQuery } from "@bitsongjs/sdk/modules";
import { calculateFee } from "@bitsongjs/sdk/gas";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  // ─── Tier 2: Create clients directly ────────────────────
  const rpc = await createRpcClient("https://rpc.bitsong.io");

  const { client: signingClient, address } = await createSigningClient({
    endpoint: "https://rpc.bitsong.io",
    signer: MNEMONIC,
    prefix: "bitsong",
    hdPath: "m/44'/639'/0'/0/0",
    gasPrice: "0.025ubtsg",
  });

  // ─── Tier 1: Use module functions directly ──────────────
  // Only bankQuery and stakingQuery are imported — tree-shaking
  // eliminates all other modules from the bundle.

  // Query
  const bank = bankQuery(rpc);
  const balance = await bank.getBalance({
    address,
    denom: "ubtsg",
  });
  console.log("Balance:", balance.balance);

  const staking = stakingQuery(rpc);
  const pool = await staking.getPool({});
  console.log("Bonded tokens:", pool.pool?.bondedTokens);

  // Transaction
  const bankTxns = bankTx(signingClient, address);
  const fee = calculateFee(100_000, "0.025ubtsg");

  const result = await bankTxns.send(
    {
      fromAddress: address,
      toAddress: "bitsong1recipient...",
      amount: [{ denom: "ubtsg", amount: "1000000" }],
    },
    fee,
  );
  console.log("Tx hash:", result.transactionHash);
}

main().catch(console.error);
