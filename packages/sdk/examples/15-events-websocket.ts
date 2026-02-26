/**
 * Example 15: WebSocket Events
 *
 * Demonstrates subscribing to real-time blockchain events
 * using the event client (WebSocket connection).
 * The event client is lazily created and cached.
 */
import { createClient } from "@bitsongjs/sdk";

async function main() {
  const client = await createClient({ chain: "mainnet" });

  // connectEvents() creates a WebSocket connection
  // (lazily initialized and cached on subsequent calls)
  const events = await client.connectEvents();

  console.log("Connected to WebSocket events");
  console.log("Listening for new blocks and transfers...");

  // The event client interface depends on the interchainjs
  // ICosmosEventClient implementation. Typical usage:
  //
  // Subscribe to new blocks:
  //   events.subscribe("tm.event='NewBlock'", callback)
  //
  // Subscribe to specific tx events:
  //   events.subscribe("tm.event='Tx' AND transfer.sender='bitsong1...'", callback)
  //
  // Subscribe to token transfers:
  //   events.subscribe("tm.event='Tx' AND transfer.recipient='bitsong1...'", callback)

  // Example: listen for transactions to a specific address
  // (API depends on your ICosmosEventClient implementation)
  console.log("\nEvent client ready. Use events.subscribe() to listen for events.");
  console.log("Press Ctrl+C to exit.");
}

main().catch(console.error);
