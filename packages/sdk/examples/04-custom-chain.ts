/**
 * Example 04: Custom Chain Configuration
 *
 * Shows how to register a custom chain preset or use an inline
 * ChainConfig for connecting to any Cosmos SDK chain.
 */
import {
  createClient,
  registerChain,
  type ChainConfig,
} from "@bitsongjs/sdk";

async function main() {
  // Option 1: Register a named preset for reuse
  registerChain("my-devnet", {
    chainId: "bitsong-devnet-1",
    prefix: "bitsong",
    denom: "ubtsg",
    gasPrice: "0.01ubtsg",
    coinType: 639,
    hdPath: "m/44'/639'/0'/0/0",
    endpoints: {
      rpc: "http://devnet-rpc.example.com:26657",
      rest: "http://devnet-lcd.example.com:1317",
      ws: "ws://devnet-rpc.example.com:26657/websocket",
    },
  });

  // Now use by name
  const client1 = await createClient({ chain: "my-devnet" });
  console.log("Connected to:", client1.chain.chainId);

  // Option 2: Pass an inline ChainConfig (no registration needed)
  const customConfig: ChainConfig = {
    chainId: "osmosis-1",
    prefix: "osmo",
    denom: "uosmo",
    gasPrice: "0.025uosmo",
    coinType: 118,
    hdPath: "m/44'/118'/0'/0/0",
    endpoints: {
      rpc: "https://rpc.osmosis.zone",
    },
  };

  const client2 = await createClient({ chain: customConfig });
  console.log("Connected to:", client2.chain.chainId);

  // The same module queries work on any Cosmos SDK chain
  const balance = await client2.query.bank.getBalance({
    address: "osmo1...",
    denom: "uosmo",
  });
  console.log("Osmosis balance:", balance.balance);
}

main().catch(console.error);
