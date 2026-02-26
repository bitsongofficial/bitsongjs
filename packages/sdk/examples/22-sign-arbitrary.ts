/**
 * Example 22: Sign Arbitrary Data
 *
 * Demonstrates how to sign arbitrary bytes using `signArbitrary()`.
 * This is useful for off-chain authentication, message signing,
 * and proving ownership of an address without broadcasting a transaction.
 *
 * IMPORTANT: signArbitrary only works when the signer was created from
 * a mnemonic (IWallet). It will throw "Offline signers do not support
 * signArbitrary" when using an OfflineSigner (e.g., Keplr).
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your twelve word mnemonic phrase goes here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  console.log("Signer address:", client.address);

  // Sign arbitrary bytes (e.g., for off-chain authentication)
  const message = "Hello BitSong!";
  const data = new TextEncoder().encode(message);

  const signature = await client.signingClient.signArbitrary(data);

  console.log("Message:", message);
  console.log("Signature:", signature);
}

main().catch(console.error);
