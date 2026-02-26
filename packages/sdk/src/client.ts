import type {
  BitsongSigner,
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

function buildTxNamespaces(client: BitsongSigner, address: string) {
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
  readonly chain: ChainConfig;
  readonly rpc: ICosmosQueryClient;
  readonly query: ReturnType<typeof buildQueryNamespaces>;
  readonly address?: string;
  readonly signingClient?: BitsongSigner;
  readonly tx?: ReturnType<typeof buildTxNamespaces>;
  connectEvents(): Promise<ICosmosEventClient>;
}

export type BitsongSigningClient = BitsongClient & {
  address: string;
  signingClient: BitsongSigner;
  tx: ReturnType<typeof buildTxNamespaces>;
};

class ClientImpl implements BitsongClient {
  private _query?: ReturnType<typeof buildQueryNamespaces>;
  private _tx?: ReturnType<typeof buildTxNamespaces>;
  private _eventClient?: ICosmosEventClient;

  constructor(
    readonly chain: ChainConfig,
    readonly rpc: ICosmosQueryClient,
    private signingResult?: SigningClientResult,
    private customModules?: CreateClientOptions["modules"],
  ) {}

  get query() {
    if (!this._query) {
      const base = buildQueryNamespaces(this.rpc);
      const custom = this.customModules?.query ?? {};
      for (const [name, factory] of Object.entries(custom)) {
        Object.assign(base, { [name]: factory(this.rpc) });
      }
      this._query = base;
    }
    return this._query!;
  }

  get tx() {
    if (!this.signingResult) {
      throw new Error("No signer provided. Pass a signer to createClient() to enable transactions.");
    }
    if (!this._tx) {
      const base = buildTxNamespaces(this.signingResult.client, this.signingResult.address);
      const custom = this.customModules?.tx ?? {};
      for (const [name, factory] of Object.entries(custom)) {
        Object.assign(base, { [name]: factory(this.signingResult.client, this.signingResult.address) });
      }
      this._tx = base;
    }
    return this._tx!;
  }

  get address(): string | undefined {
    return this.signingResult?.address;
  }

  get signingClient(): BitsongSigner | undefined {
    return this.signingResult?.client;
  }

  async connectEvents(): Promise<ICosmosEventClient> {
    if (!this._eventClient) {
      const ws = this.chain.endpoints.ws ?? this.chain.endpoints.rpc.replace(/^http/, "ws") + "/websocket";
      this._eventClient = await createEventClient(ws);
    }
    return this._eventClient;
  }
}

// Overload: signer provided -> BitsongSigningClient
export async function createClient(
  options: CreateClientOptions & { signer: string | OfflineSignerLike },
): Promise<BitsongSigningClient>;
// Overload: no signer -> BitsongClient
export async function createClient(options?: CreateClientOptions): Promise<BitsongClient>;
// Implementation
export async function createClient(
  options: CreateClientOptions = {},
): Promise<BitsongClient> {
  const chain = resolveChain(options.chain ?? "mainnet");

  const rpc = await createRpcClient({
    endpoint: chain.endpoints.rpc,
  });

  let signingResult: SigningClientResult | undefined;

  if (options.signer) {
    signingResult = await createSigningClient({
      endpoint: chain.endpoints.rpc,
      signer: options.signer,
      type: options.signerType,
      prefix: chain.prefix,
      hdPath: chain.hdPath,
      gasPrice: options.gasPrice ?? chain.gasPrice,
    });
  }

  return new ClientImpl(chain, rpc, signingResult, options.modules);
}
