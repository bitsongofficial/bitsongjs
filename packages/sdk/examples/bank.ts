import {
  coin,
  createClient,
  generateMnemonic
} from "../dist";

async function main() {
  const client = await createClient({ mnemonic: generateMnemonic() });

  const balances = await client.bank.getAllBalances({
    address: 'bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2',
    resolveDenom: false
  });

  console.log(balances);

  // simple
  let response = await client.bank.send({
    toAddress: 'bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2',
    amount: [coin('1000000', 'ubtsg')]
  })

  console.log(response.transactionHash);

  // advanced
  response = await client.bank.send({
    toAddress: 'bitsong1h882ezq7dyewld6gfv2e06qymvjxnu842586h2',
    amount: [
      {
        denom: 'ubtsg',
        amount: '1000000'
      }
    ],
    fee: {
      gas: '80000',
      amount: [coin('800', 'ubtsg')]
    }
  })

  console.log(response.transactionHash);
}

try {
  await main();
} catch (error) {
  console.error(error);
}