export enum WalletConnectTransactions {
  GET_ADDRESS,
  SIGN,
  SIGN_AND_BROADCAST,
  SIGN_ARBITRARY,
}

export const WalletConnectTransactionsMethod = new Map<WalletConnectTransactions, string>([
  [WalletConnectTransactions.GET_ADDRESS, "getAddress"],
  [WalletConnectTransactions.SIGN, "sign"],
  [WalletConnectTransactions.SIGN_AND_BROADCAST, "signAndBroadcast"],
  [WalletConnectTransactions.SIGN_ARBITRARY, "signArbitrary"],
])