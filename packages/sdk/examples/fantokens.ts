/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable unicorn/no-process-exit */
import { bitsong } from "@bitsongjs/telescope";
import { createClient } from "../dist";

declare global {
  interface BigInt {
    toJSON(): number;
  }
}

BigInt.prototype.toJSON = function () { return Number(this) }

async function main() {
  const mnemonic = 'raccoon february today tank observe sing alter draw salt favorite during sustain' // or generateMnemonic();
  console.log(`Mnemonic: ${mnemonic}`);

  // Create a client with a mnemonic
  const client = await createClient({ mnemonic });

  // Retrieve Sender Address
  const sender = await client.getSenderAddress();
  console.log(`Sender Address: ${sender}`);

  // Get the balance of the sender address
  const balances = await client.bank.getAllBalances({
    address: sender,
    resolveDenom: false
  });

  console.log(JSON.stringify(balances, undefined, 2));

  // Issue a new fantoken
  const { issue } = bitsong.fantoken.v1beta1.MessageComposer.withTypeUrl

  const msgs = [
    issue({
      authority: sender,
      minter: sender,
      name: 'Test Token',
      symbol: 'tst',
      uri: 'ipfs://test....',
      maxSupply: '1000000000',
    })
  ]

  // Estimate fees
    const fee = await client.estimateFee({
      gasPrice: '0.025ubtsg',
      feeMultiplier: 1.4,
      msgs,
      sender,
    })
    console.log(`Estimated Fee: ${JSON.stringify(fee, undefined, 2)}`);
}

main().catch(console.error).finally(process.exit);