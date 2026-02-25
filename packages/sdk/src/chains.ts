import type { ChainConfig } from "./types";

export const bitsongMainnet: ChainConfig = {
  chainId: "bitsong-2b",
  prefix: "bitsong",
  denom: "ubtsg",
  gasPrice: "0.025ubtsg",
  coinType: 639,
  hdPath: "m/44'/639'/0'/0/0",
  endpoints: {
    rpc: "https://rpc.bitsong.io",
    rest: "https://lcd.bitsong.io",
    ws: "wss://rpc.bitsong.io/websocket",
  },
};

export const bitsongTestnet: ChainConfig = {
  chainId: "bobnet",
  prefix: "bitsong",
  denom: "ubtsg",
  gasPrice: "0.025ubtsg",
  coinType: 639,
  hdPath: "m/44'/639'/0'/0/0",
  endpoints: {
    rpc: "https://rpc.testnet.bitsong.io",
    rest: "https://lcd.testnet.bitsong.io",
    ws: "wss://rpc.testnet.bitsong.io/websocket",
  },
};

export const bitsongLocal: ChainConfig = {
  chainId: "bitsong-localnet",
  prefix: "bitsong",
  denom: "ubtsg",
  gasPrice: "0.025ubtsg",
  coinType: 639,
  hdPath: "m/44'/639'/0'/0/0",
  endpoints: {
    rpc: "http://localhost:26657",
    rest: "http://localhost:1317",
    ws: "ws://localhost:26657/websocket",
  },
};

const presets: Record<string, ChainConfig> = {
  mainnet: bitsongMainnet,
  testnet: bitsongTestnet,
  local: bitsongLocal,
};

export function registerChain(name: string, config: ChainConfig): void {
  presets[name] = config;
}

export function resolveChain(nameOrConfig: string | ChainConfig): ChainConfig {
  if (typeof nameOrConfig === "string") {
    const chain = presets[nameOrConfig];
    if (!chain) {
      throw new Error(
        `Unknown chain preset "${nameOrConfig}". Available: ${Object.keys(presets).join(", ")}`,
      );
    }
    return chain;
  }
  return nameOrConfig;
}
