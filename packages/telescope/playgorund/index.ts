import { bitsong, cosmos, getSigningBitsongClient } from "../src"

async function main() {
  const { createLCDClient } = bitsong.ClientFactory
  const client = await createLCDClient({ restEndpoint: "https://lcd.explorebitsong.com" })

  // Query account balances
  const balance = await client.cosmos.bank.v1beta1.allBalances({
    address: 'bitsong1wcvhw2ts80ywk3avd9ad8qmrwaeqwmkpfwv7kl',
    resolveDenom: false
  })

  for (const b of balance.balances) {
    console.log(b.denom, b.amount)
  }

  // Message composer
  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl
  console.log(send({
    amount: [{ denom: 'ubtsg', amount: '1000000' }],
    fromAddress: 'bitsong1wcvhw2ts80ywk3avd9ad8qmrwaeqwmkpfwv7kl',
    toAddress: 'bitsong1wcvhw2ts80ywk3avd9ad8qmrwaeqwmkpfwv7kl'
  }))

  // Stargate client
  const stargate = await getSigningBitsongClient({
    rpcEndpoint: 'https://rpc.explorebitsong.com',
    signer: ''
  })
}

main().catch(console.error)