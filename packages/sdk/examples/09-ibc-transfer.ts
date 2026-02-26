/**
 * Example 09: IBC Transfer
 *
 * Demonstrates cross-chain token transfers using IBC,
 * including querying denom traces and escrow info.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "mainnet",
    signer: MNEMONIC,
  });

  // Query IBC denom traces (shows where IBC tokens came from)
  const traces = await client.query.ibcTransfer.getDenomTraces({
    pagination: undefined,
  });
  console.log("IBC denom traces:", traces.denomTraces);

  // Query a specific denom trace
  const trace = await client.query.ibcTransfer.getDenomTrace({
    hash: "27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
  });
  console.log("Trace:", trace.denomTrace);

  // IBC transfer to Osmosis
  const transferResult = await client.tx.ibcTransfer.transfer({
    sourcePort: "transfer",
    sourceChannel: "channel-0", // BitSong → Osmosis channel
    token: { denom: "ubtsg", amount: "1000000" },
    sender: client.address,
    receiver: "osmo1recipient...",
    // Timeout: 10 minutes from now
    timeoutHeight: {
      revisionNumber: BigInt(1),
      revisionHeight: BigInt(0),
    },
    timeoutTimestamp: BigInt(Date.now() + 10 * 60 * 1000) * BigInt(1_000_000), // nanoseconds
    memo: "",
  });
  console.log("IBC transfer tx:", transferResult.transactionHash);

  // Query total escrowed tokens for a denom
  const escrow = await client.query.ibcTransfer.getTotalEscrowForDenom({
    denom: "ubtsg",
  });
  console.log("Total escrowed BTSG:", escrow.amount);
}

main().catch(console.error);
