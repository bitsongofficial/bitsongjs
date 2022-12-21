export enum WalletConnectTransactions {
  SIGN,
  SIGN_AND_BROADCAST,
  SIGN_ARBITRARY,
}

export const WalletConnectTransactionsMethod = new Map<WalletConnectTransactions, string>([
  [WalletConnectTransactions.SIGN, "sign"],
  [WalletConnectTransactions.SIGN_AND_BROADCAST, "signAndBroadcast"],
  [WalletConnectTransactions.SIGN_ARBITRARY, "signArbitrary"],
])