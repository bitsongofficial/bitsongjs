/**
 * Example 11: Fee Estimation
 *
 * Shows three ways to handle fees:
 * 1. "auto" — let the signing client estimate automatically
 * 2. estimateFee() — estimate first, then send with the result
 * 3. calculateFee() — manual gas limit × gas price calculation
 */
import {
  createClient,
  calculateFee,
  estimateGas,
  estimateFee,
} from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  const msg = {
    fromAddress: client.address,
    toAddress: "bitsong1recipient...",
    amount: [{ denom: "ubtsg", amount: "1000000" }],
  };

  // ─── Approach 1: "auto" (default) ───────────────────────
  // The signing client simulates the tx internally to estimate gas.
  // This is the simplest approach — fee is computed automatically.
  const result1 = await client.tx.bank.send(msg);
  console.log("Auto fee tx:", result1.transactionHash);

  // ─── Approach 2: Pre-estimate with estimateFee() ────────
  // Useful when you want to show the user the fee before signing,
  // or when you need to adjust the multiplier for safety margin.
  const messages = [
    {
      typeUrl: "/cosmos.bank.v1beta1.MsgSend",
      value: msg,
    },
  ];

  // Estimate gas with 1.5x multiplier (default is 1.4x)
  const gasEstimate = await estimateGas(
    client.signingClient,
    client.address,
    messages,
    1.5,
  );
  console.log("Estimated gas:", gasEstimate);

  // Build fee from gas estimate + chain gas price
  const fee = await estimateFee(
    client.signingClient,
    client.address,
    messages,
    client.chain.gasPrice, // "0.025ubtsg"
    1.5,
  );
  console.log("Estimated fee:", fee);

  // Send with the pre-computed fee (no simulation needed)
  const result2 = await client.tx.bank.send(msg, fee);
  console.log("Pre-estimated fee tx:", result2.transactionHash);

  // ─── Approach 3: Manual calculateFee() ──────────────────
  // When you know the gas limit (e.g., from previous transactions)
  // and just want to compute the fee amount.
  const manualFee = calculateFee(200_000, "0.025ubtsg");
  console.log("Manual fee:", manualFee);
  // → { amount: [{ denom: "ubtsg", amount: "5000" }], gas: "200000" }

  const result3 = await client.tx.bank.send(msg, manualFee);
  console.log("Manual fee tx:", result3.transactionHash);
}

main().catch(console.error);
