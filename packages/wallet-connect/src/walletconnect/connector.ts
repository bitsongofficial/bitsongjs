import WalletConnect from "@walletconnect/client";

import { StdSignDoc, AminoSignResponse, StdSignature } from "@cosmjs/amino";
import { EncodeObject } from "@cosmjs/proto-signing";
import { StdFee, DeliverTxResponse } from "@cosmjs/stargate";
import { ConnectorOptions, IConnector, WalletConnectTransactions, WalletConnectTransactionsMethod } from "../types/index.js";
import { SignClientTypes } from "@walletconnect/types/dist/types/sign-client";

export class Connector implements IConnector {
  private connector?: WalletConnect
  readonly accounts: string[] = []
  
  constructor(options: ConnectorOptions)
  {
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org",
      qrcodeModal: options.qrcodeModal,
    })
    this.connector = connector
    connector.on("connect", (error, payload) => {
      if (error) {
        throw error
      }
      this.updateAccounts(payload.params[0].accounts)
    })

    connector.on("session_update", (error, payload) => {
      if (error) {
        throw error
      }
    
      this.updateAccounts(payload.params[0].accounts)
    })
  }
  private updateAccounts(accounts: string[])
  {
    this.accounts.splice(0, this.accounts.length, ...accounts)
  }

  private async sendCustomRequest(transaction: WalletConnectTransactions, chain: string, params: any)
  {
    const result = await this.connector?.sendCustomRequest({
      id: transaction,
      method: WalletConnectTransactionsMethod.get(transaction),
      jsonrpc: "2.0",
      params: [{
        chain,
        data: params
      }]
    })
    return result
  }
  on(event: SignClientTypes.Event, callback: (error: Error | null, payload: any) => void): void
  {
    this.connector?.on(event, callback)
  }
  sign(chain: string, signDoc: StdSignDoc, signerAddress?: string | undefined): Promise<AminoSignResponse>
  {
    return this.sendCustomRequest(WalletConnectTransactions.SIGN, chain, {
      signerAddress,
      signDoc
    })
  }
  signAndBroadcast(chain: string, messages: readonly EncodeObject[], fee: number | StdFee | "auto", memo?: string | undefined, signerAddress?: string | undefined): Promise<DeliverTxResponse> {
    return this.sendCustomRequest(WalletConnectTransactions.SIGN, chain, {
      messages,
      fee,
      memo,
      signerAddress,
    })
  }
  signArbitrary(chain: string, payload: any, signerAddress?: string | undefined): Promise<StdSignature>
  {
    return this.sendCustomRequest(WalletConnectTransactions.SIGN, chain, {
      payload,
      signerAddress,
    })
  }
}