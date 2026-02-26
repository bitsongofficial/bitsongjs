/**
 * Example 14: Error Handling
 *
 * Demonstrates the SDK's error handling utilities:
 * - TxError class with structured error info
 * - assertTxSuccess() for automatic error checking
 * - isTxError() type guard for catch blocks
 * - CosmosErrorCode enum for matching specific errors
 */
import {
  createClient,
  TxError,
  isTxError,
  assertTxSuccess,
  CosmosErrorCode,
} from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // ─── Pattern 1: try/catch with isTxError ────────────────
  try {
    await client.tx.bank.send({
      fromAddress: client.address,
      toAddress: "bitsong1recipient...",
      amount: [{ denom: "ubtsg", amount: "999999999999999" }], // More than we have
    });
  } catch (err) {
    if (isTxError(err)) {
      // Structured error with code, codespace, rawLog, txHash
      console.log("Tx failed!");
      console.log("  Code:", err.code);
      console.log("  Codespace:", err.codespace);
      console.log("  Raw log:", err.rawLog);
      console.log("  Tx hash:", err.txHash);

      // Match specific error codes
      if (err.code === CosmosErrorCode.ErrInsufficientFunds) {
        console.log("  → Insufficient funds!");
      } else if (err.code === CosmosErrorCode.ErrOutOfGas) {
        console.log("  → Out of gas — try increasing gas limit");
      } else if (err.code === CosmosErrorCode.ErrInvalidSequence) {
        console.log("  → Sequence mismatch — another tx may be pending");
      }
    } else {
      // Non-tx error (network, encoding, etc.)
      console.log("Non-tx error:", err);
    }
  }

  // ─── Pattern 2: assertTxSuccess ─────────────────────────
  // Use with signAndBroadcast results when you want to throw
  // a structured TxError on failure instead of checking manually.
  try {
    const result = await client.tx.bank.send({
      fromAddress: client.address,
      toAddress: "bitsong1recipient...",
      amount: [{ denom: "ubtsg", amount: "1000" }],
    });

    // Throws TxError if result.rawResponse.code !== 0
    assertTxSuccess(result);
    console.log("Success! Hash:", result.transactionHash);
  } catch (err) {
    if (isTxError(err)) {
      console.log("Transaction failed:", err.message);
    }
  }

  // ─── Pattern 3: Construct TxError manually ──────────────
  // Useful when you need to wrap external tx results
  const customError = new TxError({
    code: CosmosErrorCode.ErrInsufficientFee,
    codespace: "sdk",
    rawLog: "insufficient fees; got: 100ubtsg required: 5000ubtsg",
    txHash: "ABC123...",
  });
  console.log("Custom error:", customError.message);
}

main().catch(console.error);
