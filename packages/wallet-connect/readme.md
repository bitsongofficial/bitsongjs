# 🧰 @bitsongjs/wallet-connect

This package defines a custom interface for the [Wallet Connect](https://docs.walletconnect.com/1.0/) protocol tailored around [Cosmonautico Wallet](https://github.com/bitsongofficial/wallet-mobile).

## 🚀 Tech Stack

Typescript, Lerna, NX

## ⚙️ Build

Install dependencies

```bash
  yarn
```

Build

```bash
  yarn build
```

Run tests

```bash
  yarn test
```

## 📃 Usage

Right now only types and a single class are exported. This is the Connector class, the interface through the mobile app.
Import it

```ts
  import { Connector } from "@bitsongjs/wallet-connect"
```

Connector constructor accepts one optional argument containing Wallet Connect configurations. Class `QRCodeModal` is defined in `@walletconnect/qrcode-modal`

```ts
  type ConnectorOptions = {
    qrcodeModal: typeof QRCodeModal,
    name: string,
    description: string,
    url: string,
    icon: string,
  }
```

qrcodeModal is always used if provided, other informations are discarded by Wallet Connect if he can retrieve them from the environment.
Instantiating the object is enough to make the QRCode appear so do so only when the user is ready to connect. You can still add event listeners immediatly after instantiating it but before connection.

Event listeners are added with the `on` method that accepts a `SignClientTypes.Event` event and a callback. `SignClientTypes` is specified in `@walletconnect/types`

After user connection (He will be prompted to accept from the mobile app) three methods become available from the connector

```ts
  sign(chain: string, signDoc: StdSignDoc, signerAddress?: string): Promise<AminoSignResponse>

  signAndBroadcast(chain: string, messages: readonly EncodeObject[], fee: number | StdFee | "auto", memo?: string, signerAddress?: string): Promise<DeliverTxResponse>

  signArbitrary(chain: string, payload: any, signerAddress?: string): Promise<StdSignature>
```

Cosmonautico is a multi chain wallet and as such the connection is made with a "Profile" that is a collection of one wallet per chain. The `chain` parameter all this methods share is used to select on which chain to perform the operation. It can be a chain name or a chain id. The best matching chain among the supported ones will be selected.

Types `StdSignDoc`, `AminoSignResponse`, `StdSignature` are defined in `@cosmjs/amino`. Type `EncodeObject` in `@cosmjs/proto-signing`. Types `StdFee`, `DeliverTxResponse` in `@cosmjs/stargate`

## 👤 Authors

- `Angelo Recca` [@angelorc](https://github.com/angelorc)
- `Enrico Barbieri` [@EnricoBarbieri1997](https://github.com/EnricoBarbieri1997)

## 🆘 Support

For support, [open an issue](https://github.com/bitsongofficial/bitsongjs/issues) or join our [Discord](https://discord.gg/5VT5fJmF).

## 🔏 License

Copyright © 2022 [BitSong](https://github.com/bitsongofficial).

This project is licensed by [MIT License](https://api.github.com/licenses/mit).