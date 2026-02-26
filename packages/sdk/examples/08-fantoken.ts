/**
 * Example 08: FanTokens — Issue, Mint, and Manage
 *
 * BitSong's native fan token module allows artists and creators
 * to issue custom tokens. This example shows the full lifecycle.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // Issue a new fan token
  const issueResult = await client.tx.fantoken.issue({
    name: "Artist Token",
    symbol: "ARTST",
    maxSupply: "1000000000000", // 1M tokens (6 decimals)
    authority: client.address,
    minter: client.address,
    uri: "https://example.com/artist-token-metadata.json",
  });
  console.log("Issue tx:", issueResult.transactionHash);

  // Query all fan tokens
  const { fantokens } = await client.query.fantoken.getFanTokens({
    authority: "",
    pagination: undefined,
  });
  console.log(`Total fan tokens: ${fantokens.length}`);

  // Query a specific fan token
  const token = await client.query.fantoken.getFanToken({
    denom: "ft" + client.address.slice(7),
  });
  console.log("Token:", token.fantoken);

  // Mint more tokens
  const mintResult = await client.tx.fantoken.mint({
    recipient: "bitsong1fan...",
    coin: { denom: token.fantoken!.denom, amount: "1000000" },
    minter: client.address,
  });
  console.log("Mint tx:", mintResult.transactionHash);

  // Burn tokens
  const burnResult = await client.tx.fantoken.burn({
    coin: { denom: token.fantoken!.denom, amount: "500000" },
    sender: client.address,
  });
  console.log("Burn tx:", burnResult.transactionHash);

  // Transfer minter role
  const setMinterResult = await client.tx.fantoken.setMinter({
    denom: token.fantoken!.denom,
    oldMinter: client.address,
    newMinter: "bitsong1newminter...",
  });
  console.log("Set minter tx:", setMinterResult.transactionHash);

  // Disable minting permanently
  const disableResult = await client.tx.fantoken.disableMint({
    denom: token.fantoken!.denom,
    minter: client.address,
  });
  console.log("Disable mint tx:", disableResult.transactionHash);
}

main().catch(console.error);
