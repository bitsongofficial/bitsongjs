# @bitsongjs/sdk

<!-- automd:badges color=yellow packageName="@bitsongjs/sdk" -->

[![npm version](https://img.shields.io/npm/v/@bitsongjs/sdk?color=yellow)](https://npmjs.com/package/@bitsongjs/sdk)
[![npm downloads](https://img.shields.io/npm/dm/@bitsongjs/sdk?color=yellow)](https://npm.chart.dev/@bitsongjs/sdk)

<!-- /automd -->

Composable, tree-shakable SDK for the [BitSong](https://bitsong.io) blockchain, built on top of [`@bitsongjs/telescope`](../telescope) and [`@interchainjs/cosmos`](https://github.com/hyperweb-io/interchainjs).

## Features

- **3-tier architecture** — use the convenience client, individual module functions, or low-level factories
- **Tree-shakable** — `sideEffects: false`, named imports, only pay for what you use
- **Type-safe** — full TypeScript types inferred from protobuf definitions, zero `as any`
- **Multi-chain** — works on any Cosmos SDK chain with built-in BitSong presets
- **Extensible** — inject custom modules into the convenience client

## Install

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @bitsongjs/sdk

# npm
npm install @bitsongjs/sdk

# yarn
yarn add @bitsongjs/sdk

# pnpm
pnpm add @bitsongjs/sdk

# bun
bun install @bitsongjs/sdk

# deno
deno install npm:@bitsongjs/sdk
```

<!-- /automd -->

> **Peer dependency:** `@bitsongjs/telescope` is required.

## Quick Start

### Query balances (no signer needed)

```ts
import { createClient } from "@bitsongjs/sdk";

const client = await createClient({ chain: "mainnet" });

const { balance } = await client.query.bank.getBalance({
  address: "bitsong1...",
  denom: "ubtsg",
});
console.log(balance);
```

### Send tokens

```ts
import { createClient } from "@bitsongjs/sdk";

const client = await createClient({
  chain: "mainnet",
  signer: "your mnemonic ...",
});

// TypeScript knows `client.address` and `client.tx` exist
const result = await client.tx.bank.send({
  fromAddress: client.address,
  toAddress: "bitsong1recipient...",
  amount: [{ denom: "ubtsg", amount: "1000000" }],
});
console.log("Tx hash:", result.transactionHash);
```

## Architecture

The SDK is organized in three tiers. Import from the tier that fits your use case:

```
┌─────────────────────────────────────────────────────────┐
│  Tier 3: Convenience Client                             │
│  createClient() → { query.*, tx.*, connectEvents() }    │
│  import { createClient } from "@bitsongjs/sdk"          │
├─────────────────────────────────────────────────────────┤
│  Tier 2: Module Functions                               │
│  bankQuery(rpc), bankTx(client, address), ...           │
│  import { bankQuery } from "@bitsongjs/sdk/modules"     │
├─────────────────────────────────────────────────────────┤
│  Tier 1: Low-Level Factories                            │
│  createRpcClient(), createSigningClient(), ...          │
│  import { createRpcClient } from "@bitsongjs/sdk/rpc"   │
└─────────────────────────────────────────────────────────┘
```

**Tier 3** is the recommended starting point. Use Tier 2 for minimal bundle size (tree-shaking eliminates unused modules). Use Tier 1 when you need full control over client creation.

## Modules

| Module | Query | Tx | Description |
|--------|:-----:|:--:|-------------|
| `bank` | ✓ | ✓ | Send tokens, query balances and supply |
| `staking` | ✓ | ✓ | Delegate, redelegate, undelegate |
| `distribution` | ✓ | ✓ | Withdraw rewards, community pool |
| `gov` | ✓ | ✓ | Proposals, voting, deposits |
| `auth` | ✓ | | Account queries, bech32 |
| `authz` | ✓ | ✓ | Authorization grants |
| `feegrant` | ✓ | ✓ | Fee allowances |
| `slashing` | ✓ | ✓ | Signing info, unjail |
| `mint` | ✓ | | Inflation, annual provisions |
| `upgrade` | ✓ | ✓ | Chain upgrade plans |
| `group` | ✓ | ✓ | Group policies and proposals |
| `vesting` | | ✓ | Vesting account creation |
| `fantoken` | ✓ | ✓ | Fan token issuance, minting, burning |
| `cadence` | ✓ | ✓ | Scheduled contract execution |
| `wasm` | ✓ | ✓ | CosmWasm smart contracts |
| `ibc-transfer` | ✓ | ✓ | IBC cross-chain transfers |
| `hyperlane` | ✓ | ✓ | Hyperlane cross-chain messaging and warp |

## Discriminated Client Types

When you pass a `signer`, TypeScript narrows the return type so `address`, `signingClient`, and `tx` are guaranteed to exist:

```ts
import { createClient, type BitsongClient, type BitsongSigningClient } from "@bitsongjs/sdk";

// No signer → BitsongClient (query-only)
const reader: BitsongClient = await createClient();
reader.query.bank.getBalance(...); // ✓
reader.tx;                         // type: undefined

// With signer → BitsongSigningClient
const writer: BitsongSigningClient = await createClient({ signer: "mnemonic ..." });
writer.tx.bank.send(...);          // ✓ — tx is guaranteed
writer.address;                    // ✓ — string, not string | undefined
```

Accessing `tx` on a query-only client throws a descriptive error at runtime:

```
Error: No signer provided. Pass a signer to createClient() to enable transactions.
```

## Fee Handling

Three approaches, from simplest to most flexible:

```ts
import { createClient, calculateFee, estimateFee } from "@bitsongjs/sdk";

const client = await createClient({ chain: "mainnet", signer: "..." });

// 1. Auto (default) — the signer simulates and estimates gas internally
await client.tx.bank.send(msg);

// 2. Pre-estimate — useful for showing fee to user before signing
const fee = await estimateFee(
  client.signingClient,
  client.address,
  [{ typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: msg }],
  client.chain.gasPrice,
  1.4, // safety multiplier
);
await client.tx.bank.send(msg, fee);

// 3. Manual — when you know the gas limit
const fee = calculateFee(200_000, "0.025ubtsg");
await client.tx.bank.send(msg, fee);
```

## Batching Transactions

### Same-module batch

Each tx function accepts a single message or an array:

```ts
// Send to 3 recipients in one tx
await client.tx.bank.send([
  { fromAddress: addr, toAddress: "bitsong1a...", amount: [{ denom: "ubtsg", amount: "1000000" }] },
  { fromAddress: addr, toAddress: "bitsong1b...", amount: [{ denom: "ubtsg", amount: "2000000" }] },
  { fromAddress: addr, toAddress: "bitsong1c...", amount: [{ denom: "ubtsg", amount: "500000" }] },
]);
```

### Cross-module batch

For messages from different modules, use `signAndBroadcast` directly:

```ts
import { MsgSend } from "@bitsongjs/telescope/cosmos/bank/v1beta1/tx";
import { MsgDelegate } from "@bitsongjs/telescope/cosmos/staking/v1beta1/tx";
import { toEncoders, toConverters } from "@interchainjs/cosmos";

// Register encoders
client.signingClient.addEncoders?.(toEncoders(MsgSend));
client.signingClient.addEncoders?.(toEncoders(MsgDelegate));
client.signingClient.addConverters?.(toConverters(MsgSend));
client.signingClient.addConverters?.(toConverters(MsgDelegate));

// Atomic batch: send + delegate in one tx
await client.signingClient.signAndBroadcast!(client.address, [
  { typeUrl: MsgSend.typeUrl, value: { fromAddress: addr, toAddress: "...", amount: [...] } },
  { typeUrl: MsgDelegate.typeUrl, value: { delegatorAddress: addr, validatorAddress: "...", amount: { denom: "ubtsg", amount: "5000000" } } },
], fee);
```

## Advanced Signing

The `signingClient` exposes the full `ICosmosSigner` interface, giving you low-level control over signing and broadcasting:

### Sign and broadcast separately

```ts
// Sign without broadcasting
const signed = await client.signingClient.sign({
  messages: [{ typeUrl: "/cosmos.bank.v1beta1.MsgSend", value: msg }],
  fee: { amount: [{ denom: "ubtsg", amount: "5000" }], gas: "200000" },
  memo: "offline-signed",
});

// Inspect signed tx bytes, store them, or broadcast later
console.log(signed.txBytes);

const result = await client.signingClient.broadcast(signed);
console.log("Tx hash:", result.transactionHash);
```

### Sign arbitrary data

Sign arbitrary bytes for off-chain authentication or message verification:

```ts
const sig = await client.signingClient.signArbitrary(
  new TextEncoder().encode("Hello BitSong!"),
);
```

> **Note:** `signArbitrary` only works with mnemonic-based signers (`IWallet`). With an `OfflineSigner` (e.g., Keplr) it throws because the `OfflineSigner` interface only exposes structured signing (`signAmino` / `signDirect`), not raw byte signing.

## Custom Chain Configuration

```ts
import { createClient, registerChain } from "@bitsongjs/sdk";

// Register a reusable preset
registerChain("my-devnet", {
  chainId: "bitsong-devnet-1",
  prefix: "bitsong",
  denom: "ubtsg",
  gasPrice: "0.01ubtsg",
  coinType: 639,
  hdPath: "m/44'/639'/0'/0/0",
  endpoints: { rpc: "http://localhost:26657" },
});

const client = await createClient({ chain: "my-devnet" });

// Or pass inline config
const client2 = await createClient({
  chain: {
    chainId: "osmosis-1",
    prefix: "osmo",
    denom: "uosmo",
    gasPrice: "0.025uosmo",
    coinType: 118,
    hdPath: "m/44'/118'/0'/0/0",
    endpoints: { rpc: "https://rpc.osmosis.zone" },
  },
});
```

Built-in presets: `"mainnet"` (default), `"testnet"`, `"localnet"`.

## Custom Module Extension

Add your own modules to the convenience client without forking:

```ts
const client = await createClient({
  chain: "mainnet",
  signer: "...",
  modules: {
    query: {
      myModule: (rpc) => ({
        getStatus: async () => { /* ... */ },
      }),
    },
    tx: {
      myModule: (signingClient, address) => ({
        doSomething: async () => { /* ... */ },
      }),
    },
  },
});
```

## Error Handling

```ts
import { assertTxSuccess, isTxError, CosmosErrorCode } from "@bitsongjs/sdk";

try {
  const result = await client.tx.bank.send(msg);
  assertTxSuccess(result); // throws TxError if code !== 0
} catch (err) {
  if (isTxError(err)) {
    console.log(err.code);      // numeric error code
    console.log(err.codespace);  // e.g. "sdk"
    console.log(err.rawLog);     // detailed error message
    console.log(err.txHash);     // transaction hash

    if (err.code === CosmosErrorCode.ErrInsufficientFunds) {
      console.log("Not enough tokens!");
    }
  }
}
```

## Direct Module Usage (Tier 2)

For maximum tree-shaking, import only the modules you need:

```ts
import { createRpcClient } from "@bitsongjs/sdk/rpc";
import { createSigningClient } from "@bitsongjs/sdk/signer";
import { bankQuery, bankTx } from "@bitsongjs/sdk/modules";
import { calculateFee } from "@bitsongjs/sdk/gas";

const rpc = await createRpcClient("https://rpc.bitsong.io");
const { client, address } = await createSigningClient({
  endpoint: "https://rpc.bitsong.io",
  signer: "mnemonic ...",
  prefix: "bitsong",
  hdPath: "m/44'/639'/0'/0/0",
  gasPrice: "0.025ubtsg",
});

const bank = bankQuery(rpc);
const balance = await bank.getBalance({ address, denom: "ubtsg" });

const txs = bankTx(client, address);
await txs.send({
  fromAddress: address,
  toAddress: "bitsong1...",
  amount: [{ denom: "ubtsg", amount: "1000000" }],
}, calculateFee(100_000, "0.025ubtsg"));
```

## Exports

| Subpath | Contents |
|---------|----------|
| `@bitsongjs/sdk` | Everything (types, chains, errors, gas, modules, client) |
| `@bitsongjs/sdk/chains` | Chain presets and `registerChain` / `resolveChain` |
| `@bitsongjs/sdk/errors` | `TxError`, `assertTxSuccess`, `CosmosErrorCode` |
| `@bitsongjs/sdk/gas` | `calculateFee`, `estimateGas`, `estimateFee` |
| `@bitsongjs/sdk/rpc` | `createRpcClient` |
| `@bitsongjs/sdk/signer` | `createSigningClient` |
| `@bitsongjs/sdk/events` | `createEventClient` |
| `@bitsongjs/sdk/modules` | All module functions (query + tx) |
| `@bitsongjs/sdk/client` | `createClient`, `BitsongClient`, `BitsongSigningClient` |

## Development

```bash
pnpm generate    # regenerate module files from registry
pnpm typecheck   # type check
pnpm test        # run tests
pnpm build       # build for publishing
pnpm fmt         # format with automd + oxlint + oxfmt
```

Module files in `src/modules/` are auto-generated from `scripts/module-registry.ts`. Edit the registry, then run `pnpm generate`.

## License

<!-- automd:contributors author="bitsongofficial,angelorc" -->

Made by [@bitsongofficial](https://github.com/bitsongofficial), [@angelorc](https://github.com/angelorc) and [community](https://github.com/bitsongofficial/bitsongjs/graphs/contributors) 💛
<br><br>
<a href="https://github.com/bitsongofficial/bitsongjs/graphs/contributors">
<img src="https://contrib.rocks/image?repo=bitsongofficial/bitsongjs" />
</a>

<!-- /automd -->

Published under the [MIT](https://github.com/bitsongofficial/bitsongjs/blob/next/LICENSE) license.
