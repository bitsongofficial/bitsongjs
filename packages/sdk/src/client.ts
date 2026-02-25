import type {
  ISigningClient,
  ICosmosQueryClient,
  ICosmosEventClient,
  CreateClientOptions,
  ChainConfig,
  OfflineSignerLike,
} from "./types";
import { resolveChain } from "./chains";
import { createRpcClient } from "./rpc";
import { createSigningClient, type SigningClientResult } from "./signer";
import { createEventClient } from "./events";

import { bankQuery, bankTx } from "./modules/bank";
import { stakingQuery, stakingTx } from "./modules/staking";
import { distributionQuery, distributionTx } from "./modules/distribution";
import { govQuery, govTx } from "./modules/gov";
import { authQuery } from "./modules/auth";
import { authzQuery, authzTx } from "./modules/authz";
import { feegrantQuery, feegrantTx } from "./modules/feegrant";
import { slashingQuery, slashingTx } from "./modules/slashing";
import { mintQuery } from "./modules/mint";
import { upgradeQuery, upgradeTx } from "./modules/upgrade";
import { groupQuery, groupTx } from "./modules/group";
import { vestingTx } from "./modules/vesting";
import { fantokenQuery, fantokenTx } from "./modules/fantoken";
import { cadenceQuery, cadenceTx } from "./modules/cadence";
import { wasmQuery, wasmTx } from "./modules/wasm";
import { ibcTransferQuery, ibcTransferTx } from "./modules/ibc-transfer";
import { hyperlaneQuery, hyperlaneTx } from "./modules/hyperlane";

function buildQueryNamespaces(rpc: ICosmosQueryClient) {
  return {
    bank: bankQuery(rpc),
    staking: stakingQuery(rpc),
    distribution: distributionQuery(rpc),
    gov: govQuery(rpc),
    auth: authQuery(rpc),
    authz: authzQuery(rpc),
    feegrant: feegrantQuery(rpc),
    slashing: slashingQuery(rpc),
    mint: mintQuery(rpc),
    upgrade: upgradeQuery(rpc),
    group: groupQuery(rpc),
    fantoken: fantokenQuery(rpc),
    cadence: cadenceQuery(rpc),
    wasm: wasmQuery(rpc),
    ibcTransfer: ibcTransferQuery(rpc),
    hyperlane: hyperlaneQuery(rpc),
  };
}

function buildTxNamespaces(client: ISigningClient, address: string) {
  return {
    bank: bankTx(client, address),
    staking: stakingTx(client, address),
    distribution: distributionTx(client, address),
    gov: govTx(client, address),
    authz: authzTx(client, address),
    feegrant: feegrantTx(client, address),
    slashing: slashingTx(client, address),
    upgrade: upgradeTx(client, address),
    group: groupTx(client, address),
    vesting: vestingTx(client, address),
    fantoken: fantokenTx(client, address),
    cadence: cadenceTx(client, address),
    wasm: wasmTx(client, address),
    ibcTransfer: ibcTransferTx(client, address),
    hyperlane: hyperlaneTx(client, address),
  };
}

export interface BitsongClient {
  chain: ChainConfig;
  rpc: ICosmosQueryClient;
  query: ReturnType<typeof buildQueryNamespaces>;
  address?: string;
  signingClient?: ISigningClient;
  tx?: ReturnType<typeof buildTxNamespaces>;
  connectEvents: () => Promise<ICosmosEventClient>;
}

export async function createClient(
  options: CreateClientOptions = {},
): Promise<BitsongClient> {
  const chain = resolveChain(options.chain ?? "mainnet");

  // Create query client
  const rpc = await createRpcClient({
    endpoint: chain.endpoints.rpc,
  });

  // Build query namespaces
  const query = buildQueryNamespaces(rpc);

  // Optionally build signing/tx namespaces
  let signingResult: SigningClientResult | undefined;
  let tx: ReturnType<typeof buildTxNamespaces> | undefined;

  if (options.signer) {
    signingResult = await createSigningClient({
      endpoint: chain.endpoints.rpc,
      signer: options.signer,
      type: options.signerType,
      prefix: chain.prefix,
      hdPath: chain.hdPath,
      gasPrice: options.gasPrice ?? chain.gasPrice,
    });
    tx = buildTxNamespaces(signingResult.client, signingResult.address);
  }

  // Lazy event client
  let eventClient: ICosmosEventClient | undefined;
  const connectEvents = async (): Promise<ICosmosEventClient> => {
    if (!eventClient) {
      const wsEndpoint = chain.endpoints.ws ?? chain.endpoints.rpc.replace(/^http/, "ws") + "/websocket";
      eventClient = await createEventClient(wsEndpoint);
    }
    return eventClient;
  };

  return {
    chain,
    rpc,
    query,
    address: signingResult?.address,
    signingClient: signingResult?.client,
    tx,
    connectEvents,
  };
}
