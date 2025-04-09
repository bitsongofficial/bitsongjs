import {
  BroadcastTxError,
  coins,
  createClient,
  generateMnemonic,
} from "../dist";
import { cosmos } from "@bitsongjs/telescope";

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
  const client = await createClient({ 
    mnemonic,
    signerType: 'direct', // or 'amino' - optional
    chain: 'bitsong', // optional
  });

  // Retrieve Sender Address
  // Once the client is created, you can retrieve the sender address.
  const senderAddress = await client.getSenderAddress();
  console.log(`Sender Address: ${senderAddress}`);

  // Sign a transaction
  // Example of sending tokens
  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl

  // Estimate fees
  const fee = await client.estimateFee({
    gasPrice: '0.025ubtsg',
    feeMultiplier: 1.4,
    msgs: [
      send({
        fromAddress: senderAddress,
        toAddress: senderAddress,
        amount: coins('1', 'ubtsg')
      })
    ],
  })
  console.log(`Estimated Fee: ${JSON.stringify(fee, undefined, 2)}`);

  // Sign and Broadcast with manual fees
  try {
    const txResult = await client.signAndBroadcast({ 
      msgs: [
        send({
          fromAddress: senderAddress,
          toAddress: senderAddress,
          amount: coins('1', 'ubtsg')
        })
      ],
      fee,
    })
  
    console.log(`Transaction Result: ${JSON.stringify(txResult, undefined, 2)}`);
  } catch (error) {
    console.error(`\nError sending transaction:\n${(error as BroadcastTxError)}`);
  }

  const balance = await client.bank.getAllBalances({
    address: senderAddress,
    resolveDenom: false
  })

  console.log(`Balance: ${JSON.stringify(balance, undefined, 2)}`);

  // or more complex
  // client.rpcQueryClient.cosmos.bank.v1beta1.allBalances({
  //   address: senderAddress,
  //   resolveDenom: false
  // })
}

await main().catch(console.error).finally(process.exit);