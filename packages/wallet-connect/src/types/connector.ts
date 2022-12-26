import { StdSignature } from "@cosmjs/amino/build/signature";
import { StdSignDoc } from "@cosmjs/amino/build/signdoc";
import { AminoSignResponse } from "@cosmjs/amino/build/signer";
import { EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { SignClientTypes } from "@walletconnect/types";
import QRCodeModal from "@walletconnect/qrcode-modal"

export type ConnectorOptions = {
  qrcodeModal: typeof QRCodeModal,
  name: string,
  description: string,
  url: string,
  icon: string,
}

export interface IConnector {
  sign(chain: string, signDoc: StdSignDoc, signerAddress?: string): Promise<AminoSignResponse>
  signAndBroadcast(chain: string, messages: readonly EncodeObject[], fee: number | StdFee | "auto", memo?: string, signerAddress?: string): Promise<DeliverTxResponse>
  signArbitrary(chain: string, payload: any, signerAddress?: string): Promise<StdSignature>
  on(event: SignClientTypes.Event, callback: (error: Error | null, payload: any) => void): void
}