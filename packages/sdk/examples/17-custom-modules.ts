/**
 * Example 17: Custom Module Extension
 *
 * The createClient() `modules` option lets you inject custom
 * query and tx modules into the convenience client without forking.
 * This is useful for chains with proprietary modules or for
 * adding your own application-specific helpers.
 */
import { createClient, type ICosmosQueryClient, type ISigningClient } from "@bitsongjs/sdk";

// ─── Define a custom query module ──────────────────────────
// This could wrap a chain-specific module not included in the SDK.
function myCustomQuery(rpc: ICosmosQueryClient) {
  return {
    async getConfig() {
      // Custom RPC call or query logic
      return { version: "1.0.0", enabled: true };
    },
    async getStatus(address: string) {
      // Another custom query
      return { address, status: "active" };
    },
  };
}

// ─── Define a custom tx module ─────────────────────────────
function myCustomTx(client: ISigningClient, address: string) {
  return {
    async registerUser(username: string) {
      // Custom transaction logic
      console.log(`Registering ${username} from ${address}`);
    },
    async updateProfile(data: Record<string, string>) {
      console.log(`Updating profile for ${address}:`, data);
    },
  };
}

const MNEMONIC = "your mnemonic here ...";

async function main() {
  // Inject custom modules at client creation
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
    modules: {
      query: {
        myApp: myCustomQuery,
      },
      tx: {
        myApp: myCustomTx,
      },
    },
  });

  // Standard modules still work
  const balance = await client.query.bank.getBalance({
    address: client.address,
    denom: "ubtsg",
  });
  console.log("Balance:", balance.balance);

  // Custom modules are accessible on the client
  // (typed as Record<string, any> since they're dynamic)
  const query = client.query as any;
  const config = await query.myApp.getConfig();
  console.log("Custom config:", config);

  const tx = client.tx as any;
  await tx.myApp.registerUser("alice");
}

main().catch(console.error);
