/**
 * Example 12: Batch Messages (Same Module)
 *
 * The telescope-generated tx functions accept a single message OR
 * an array of messages. This lets you batch multiple operations of
 * the same type into a single transaction for efficiency.
 */
import { createClient, calculateFee } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // ─── Batch bank sends ──────────────────────────────────
  // Send to 3 recipients in a single transaction.
  // Each element in the array becomes a separate MsgSend
  // but they're all included in one tx.
  const sendResult = await client.tx.bank.send(
    [
      {
        fromAddress: client.address,
        toAddress: "bitsong1alice...",
        amount: [{ denom: "ubtsg", amount: "1000000" }],
      },
      {
        fromAddress: client.address,
        toAddress: "bitsong1bob...",
        amount: [{ denom: "ubtsg", amount: "2000000" }],
      },
      {
        fromAddress: client.address,
        toAddress: "bitsong1carol...",
        amount: [{ denom: "ubtsg", amount: "500000" }],
      },
    ],
    calculateFee(300_000, "0.025ubtsg"),
    "Batch payment",
  );
  console.log("Batch send tx:", sendResult.transactionHash);

  // ─── Batch delegate to multiple validators ─────────────
  const delegateResult = await client.tx.staking.delegate(
    [
      {
        delegatorAddress: client.address,
        validatorAddress: "bitsongvaloper1aaa...",
        amount: { denom: "ubtsg", amount: "5000000" },
      },
      {
        delegatorAddress: client.address,
        validatorAddress: "bitsongvaloper1bbb...",
        amount: { denom: "ubtsg", amount: "3000000" },
      },
    ],
    "auto",
    "Split delegation",
  );
  console.log("Batch delegate tx:", delegateResult.transactionHash);

  // ─── Batch fan token mints ─────────────────────────────
  const mintResult = await client.tx.fantoken.mint(
    [
      {
        recipient: "bitsong1fan1...",
        coin: { denom: "ftartist123", amount: "100000" },
        minter: client.address,
      },
      {
        recipient: "bitsong1fan2...",
        coin: { denom: "ftartist123", amount: "200000" },
        minter: client.address,
      },
      {
        recipient: "bitsong1fan3...",
        coin: { denom: "ftartist123", amount: "50000" },
        minter: client.address,
      },
    ],
    "auto",
    "Airdrop batch",
  );
  console.log("Batch mint tx:", mintResult.transactionHash);
}

main().catch(console.error);
