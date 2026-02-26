/**
 * Example 10: CosmWasm Smart Contracts
 *
 * Demonstrates storing, instantiating, querying, and
 * executing CosmWasm smart contracts.
 */
import { createClient } from "@bitsongjs/sdk";
import { readFileSync } from "node:fs";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // 1. Store a contract (upload wasm bytecode)
  const wasmCode = readFileSync("./my_contract.wasm");
  const storeResult = await client.tx.wasm.storeCode({
    sender: client.address,
    wasmByteCode: wasmCode,
    instantiatePermission: undefined,
  });
  console.log("Store tx:", storeResult.transactionHash);

  // 2. Query uploaded codes
  const { codeInfos } = await client.query.wasm.getCodes({
    pagination: undefined,
  });
  const codeId = BigInt(codeInfos[codeInfos.length - 1]!.codeId);
  console.log("Code ID:", codeId);

  // 3. Instantiate the contract
  const initMsg = JSON.stringify({ count: 0 });
  const instantiateResult = await client.tx.wasm.instantiateContract({
    sender: client.address,
    admin: client.address,
    codeId,
    label: "my-counter-v1",
    msg: new TextEncoder().encode(initMsg),
    funds: [],
  });
  console.log("Instantiate tx:", instantiateResult.transactionHash);

  // 4. Query contracts by code
  const { contracts } = await client.query.wasm.getContractsByCode({
    codeId,
    pagination: undefined,
  });
  const contractAddr = contracts[contracts.length - 1]!;
  console.log("Contract address:", contractAddr);

  // 5. Query smart contract state
  const queryMsg = JSON.stringify({ get_count: {} });
  const state = await client.query.wasm.getSmartContractState({
    address: contractAddr,
    queryData: new TextEncoder().encode(queryMsg),
  });
  console.log("Contract state:", JSON.parse(new TextDecoder().decode(state.data)));

  // 6. Execute a contract method
  const execMsg = JSON.stringify({ increment: {} });
  const execResult = await client.tx.wasm.executeContract({
    sender: client.address,
    contract: contractAddr,
    msg: new TextEncoder().encode(execMsg),
    funds: [],
  });
  console.log("Execute tx:", execResult.transactionHash);

  // 7. Migrate contract to new code
  const migrateMsg = JSON.stringify({});
  const migrateResult = await client.tx.wasm.migrateContract({
    sender: client.address,
    contract: contractAddr,
    codeId: codeId + BigInt(1),
    msg: new TextEncoder().encode(migrateMsg),
  });
  console.log("Migrate tx:", migrateResult.transactionHash);
}

main().catch(console.error);
