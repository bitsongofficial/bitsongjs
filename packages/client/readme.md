# 📡 @bitsongjs/client

This package defines an query client and tx client to interact with the bitsong chain, inside it there are also the definitions of the proto and amino files.

Feature list:
- Query client
- Tx client
- Proto definitions
- Amino definitions (compatibility with ledgers)

## 🚀 Tech Stack

Typescript, Lerna, NX, CosmJS

## ⚙️ Build

Install dependencies

```bash
  yarn
```

Get bitsong proto files

```bash
yarn get-proto
```

Build bitsong proto files

```bash
yarn define-proto
```

Build

```bash
  yarn build
```

Run tests

```bash
  yarn test
```

## 📘 Examples
The library exposes one main TypeScript class: the BitsongClient class.

We suggest using the [chain registry](https://github.com/cosmos/chain-registry) to get information about Bitsong, they also provide a [npm package](https://www.npmjs.com/package/chain-registry):

```ts
import { assets, chains, ibc } from 'chain-registry';

const chain = chains.find(({chain_name}) => chain_name==='bitsong');

console.log(chain);

const assetList = assets.find(({chain_name}) => chain_name==='bitsong');

console.log(assetList);
```

You can also get IBC denom and info by using the following [npm package](https://www.npmjs.com/package/@chain-registry/utils):
```ts
import { getIbcAssets } from '@chain-registry/utils';
import { assets, ibc } from 'chain-registry';

export const ibcMap = [
  ...getIbcAssets('osmosis', ibc, assets),
  ...getIbcAssets('juno', ibc, assets),
  ...getIbcAssets('bitsong', ibc, assets),
];
```

Here is an example of fetching the user's balance:

```ts
import { BitsongClient, Bech32PrefixAccAddr, MicroDenom } from '@bitsongjs/client';
import { QueryClientImpl as BankQueryClientImpl, QueryAllBalancesRequest } from '@bitsongjs/client/dist/codec/cosmos/bank/v1beta1/query';
import { lastValueFrom, switchMap } from 'rxjs';

const modules = {
  bank: BankQueryClientImpl,
}

const signer = await DirectSecp256k1HdWallet.fromMnemonic('YOUR MNEMONIC', {
  prefix: Bech32PrefixAccAddr,
  hdPaths: [stringToPath(getHdPath())],
});

const api = new BitsongClient<typeof modules>({
  connection: {
    type: 'tendermint',
    endpoints: ['<YOUR RPC URL>'],
    signer, // OfflineSigner from @cosmjs/proto-signing
  },
}, modules);

const [firstAccount] = await signer.getAccounts();
const myAddress = firstAccount.address;

const balancesResponse = await lastValueFrom(
  api.query.pipe(
    switchMap(query =>
      query.bank.AllBalances({
        $type: QueryAllBalancesRequest.$type,
        address: myAddress,
      }),
    ),
  ),
);

console.log(balancesResponse);
/*
    Prints example: `{
        "balances":[{"denom":"ubtsg","amount":"10000000000"}],
        "pagination":{"total":1}
    }`
*/

// Sign and broadcast a transaction with some x/bank MsgSend.
const msg = MsgSend.fromPartial({
  fromAddress: myAddress,
  toAddress: 'bitsong1...',
  amount: [{ amount: '1000000', denom: 'ubtsg' }],
});

// StdFee from @cosmjs/stargate
const fee = {
  amount: [
    {
      denom: MicroDenom,
      amount: '5000',
    },
  ],
  gas: '200000',
};

const txClient = await lastValueFrom(api.txClient);

const txBytes = await txClient.sign(
	myAddress,
	[msg],
	fee,
	'a memo text',
);

if (txBytes) {
	const deliverTxRes = await txClient.broadcast(txBytes);
}
```

## 👤 Authors

- `Angelo Recca` [@angelorc](https://github.com/angelorc)
- `Davide Segullo` [@DavideSegullo](https://github.com/DavideSegullo)

## 🆘 Support

For support, [open an issue](https://github.com/bitsongofficial/bitsongjs/issues) or join our [Discord](https://discord.gg/5VT5fJmF).

## 🔏 License

Copyright © 2022 [BitSong](https://github.com/bitsongofficial).

This project is licensed by [MIT License](https://api.github.com/licenses/mit).