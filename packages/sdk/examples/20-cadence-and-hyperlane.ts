/**
 * Example 20: Cadence Contracts & Hyperlane Cross-Chain
 *
 * BitSong-specific modules:
 * - Cadence: scheduled contract execution
 * - Hyperlane: cross-chain messaging and token bridging
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // ═══════════════════════════════════════════════════════════
  // CADENCE — Scheduled Contract Execution
  // ═══════════════════════════════════════════════════════════

  // Query cadence module params
  const cadenceParams = await client.query.cadence.getParams({});
  console.log("Cadence params:", cadenceParams.params);

  // Query all registered cadence contracts
  const contracts = await client.query.cadence.getCadenceContracts({
    pagination: undefined,
  });
  console.log("Registered cadence contracts:", contracts.cadenceContracts?.length);

  // Register a cadence contract (scheduled execution)
  // Note: field is `senderAddress`, not `sender`
  const registerResult = await client.tx.cadence.registerCadenceContract({
    senderAddress: client.address,
    contractAddress: "bitsong1contract...",
  });
  console.log("Register cadence tx:", registerResult.transactionHash);

  // Unjail a cadence contract (if it was jailed for failures)
  // Note: field is `senderAddress`, not `authority`
  const unjailResult = await client.tx.cadence.unjailCadenceContract({
    senderAddress: client.address,
    contractAddress: "bitsong1contract...",
  });
  console.log("Unjail cadence tx:", unjailResult.transactionHash);

  // ═══════════════════════════════════════════════════════════
  // HYPERLANE — Cross-Chain Messaging
  // ═══════════════════════════════════════════════════════════

  // Query Hyperlane mailboxes
  const mailboxes = await client.query.hyperlane.getMailboxes({
    pagination: undefined,
  });
  console.log("Hyperlane mailboxes:", mailboxes.mailboxes?.length);

  // Query registered ISMs (Interchain Security Modules)
  const isms = await client.query.hyperlane.getIsms({
    pagination: undefined,
  });
  console.log("Registered ISMs:", isms.isms?.length);

  // Query warp tokens (bridged tokens)
  const tokens = await client.query.hyperlane.getTokens({
    pagination: undefined,
  });
  console.log("Warp tokens:", tokens.tokens?.length);

  // Query a remote transfer quote
  // Note: all fields are strings in the protobuf definition
  const quote = await client.query.hyperlane.getQuoteRemoteTransfer({
    id: "1",
    destinationDomain: "1",
    customHookId: "0",
    customHookMetadata: "",
  });
  console.log("Transfer quote (fees):", quote);

  // Execute a cross-chain remote transfer via Hyperlane Warp
  // Note: tokenId is a string, destinationDomain is a number
  const transferResult = await client.tx.hyperlane.remoteTransfer({
    sender: client.address,
    tokenId: "1",
    destinationDomain: 1,
    recipient: "0x1234...abcd", // destination chain address
    amount: "1000000",
    customHookId: "0",
    gasLimit: "300000",
    maxFee: { denom: "ubtsg", amount: "10000" },
    customHookMetadata: "",
  });
  console.log("Hyperlane transfer tx:", transferResult.transactionHash);

  // Query IGP (Interchain Gas Paymaster) for gas pricing
  const igps = await client.query.hyperlane.getIgps({
    pagination: undefined,
  });
  console.log("IGPs:", igps.igps?.length);

  // Query merkle tree hooks
  const hooks = await client.query.hyperlane.getMerkleTreeHooks({
    pagination: undefined,
  });
  console.log("Merkle tree hooks:", hooks.merkleTreeHooks?.length);
}

main().catch(console.error);
