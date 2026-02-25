# @bitsongjs/telescope

<!-- automd:badges color=yellow packageName="@bitsongjs/telescope" -->

[![npm version](https://img.shields.io/npm/v/@bitsongjs/telescope?color=yellow)](https://npmjs.com/package/@bitsongjs/telescope)
[![npm downloads](https://img.shields.io/npm/dm/@bitsongjs/telescope?color=yellow)](https://npm.chart.dev/@bitsongjs/telescope)

<!-- /automd -->

Auto-generated TypeScript types and encoders for the [BitSong](https://bitsong.io) blockchain, built with [Telescope](https://github.com/hyperweb-io/telescope).

## Modules

| Module | Description |
|--------|-------------|
| `bitsong/fantoken` | Fan Token issuance, minting, burning |
| `bitsong/cadence` | Cadence streaming payments |
| `bitsong/smartaccount` | Smart account abstraction |
| `cosmos/*` | Cosmos SDK (bank, staking, gov, auth, etc.) |
| `cosmwasm/wasm` | CosmWasm smart contracts |
| `hyperlane/*` | Hyperlane cross-chain messaging |
| `ibc/*` | IBC transfers and core |

## Usage

<!-- automd:pm-install -->

```sh
# ✨ Auto-detect
npx nypm install @bitsongjs/telescope

# npm
npm install @bitsongjs/telescope

# yarn
yarn add @bitsongjs/telescope

# pnpm
pnpm add @bitsongjs/telescope

# bun
bun install @bitsongjs/telescope

# deno
deno install npm:@bitsongjs/telescope
```

<!-- /automd -->

### Barrel import

```ts
import { MsgSend } from "@bitsongjs/telescope";
```

### Deep import (tree-shakable)

```ts
import { MsgIssue } from "@bitsongjs/telescope/bitsong/fantoken/v1beta1/tx";
import { MsgExecuteContract } from "@bitsongjs/telescope/cosmwasm/wasm/v1/tx";
```

Each message type provides `encode`, `decode`, `fromPartial`, `toAmino`, and `fromAmino` methods.

## Development

```bash
pnpm codegen:download  # download proto files
pnpm codegen           # generate TypeScript from protos
pnpm typecheck         # type check
pnpm test              # run tests
pnpm build             # build for publishing
```

## License

<!-- automd:contributors author="bitsongofficial,angelorc" -->

Made by [@bitsongofficial](https://github.com/bitsongofficial), [@angelorc](https://github.com/angelorc) and [community](https://github.com/bitsongofficial/bitsongjs/graphs/contributors) 💛
<br><br>
<a href="https://github.com/bitsongofficial/bitsongjs/graphs/contributors">
<img src="https://contrib.rocks/image?repo=bitsongofficial/bitsongjs" />
</a>

<!-- /automd -->

Published under the [MIT](https://github.com/bitsongofficial/bitsongjs/blob/next/LICENSE) license.
