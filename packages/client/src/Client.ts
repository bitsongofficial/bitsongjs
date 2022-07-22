import { SimulateResponse } from "@bitsongjs/proto/build/cosmos/tx/v1beta1/service";
import { AuthInfo } from "@bitsongjs/proto/build/cosmos/tx/v1beta1/tx";
import { Any } from "@bitsongjs/proto/build/google/protobuf/any";
import { Event } from "@bitsongjs/proto/build/tendermint/abci/types";
import { Signer } from "@bitsongjs/wallet";

export type ClientOpts = {
  grpcWebUrl: string;
  chainId: string;
  wallet?: Signer;
  walletAddress?: string;
};

export type SingleMsgTx<T> = {
  (params: T, txOptions?: TxOptions): Promise<Tx>;
  simulate(params: T, txOptions?: TxOptions): Promise<SimulateResponse>;
};

export type TxOptions = {
  gasLimit?: number;
  gasPriceInFeeDenom?: number;
  feeDenom?: string;
  memo?: string;
  waitForCommit?: boolean;
  broadcastTimeoutMs?: number;
  broadcastCheckIntervalMs?: number;
  broadcastMode?: BroadcastMode;
};

export enum BroadcastMode {
  Sync = "Sync",
  Async = "Async",
}

export type ArrayLog = Array<{
  msg: number;
  type: string;
  key: string;
  value: string;
}>;

export type JsonLog = Array<{
  msg_index: number;
  events: Array<{
    type: string;
    attributes: Array<{ key: string; value: string }>;
  }>;
}>;

export type Tx = {
  readonly height: number;
  readonly timestamp: string;
  readonly transactionHash: string;
  readonly code: TxResultCode;
  readonly rawLog: string;
  readonly jsonLog?: JsonLog;
  readonly arrayLog?: ArrayLog;
  readonly events: Array<Event>;
  readonly data: Array<Uint8Array>;
  readonly tx: TxContent;
  readonly txBytes: Uint8Array;
  readonly gasUsed: number;
  readonly gasWanted: number;
};

export type TxContent = {
  body: TxBody;
  authInfo: AuthInfo;
  signatures: Uint8Array[];
};

export interface TxBody {
  messages: Array<{ typeUrl: string; value: any }>;
  memo: string;
  timeoutHeight: string;
  extensionOptions: Any[];
  nonCriticalExtensionOptions: Any[];
}

export enum TxResultCode {
  Success = 0,
  ErrInternal = 1,
  ErrTxDecode = 2,
  ErrInvalidSequence = 3,
  ErrUnauthorized = 4,
  ErrInsufficientFunds = 5,
  ErrUnknownRequest = 6,
  ErrInvalidAddress = 7,
  ErrInvalidPubKey = 8,
  ErrUnknownAddress = 9,
  ErrInvalidCoins = 10,
  ErrOutOfGas = 11,
  ErrMemoTooLarge = 12,
  ErrInsufficientFee = 13,
  ErrTooManySignatures = 14,
  ErrNoSignatures = 15,
  ErrJSONMarshal = 16,
  ErrJSONUnmarshal = 17,
  ErrInvalidRequest = 18,
  ErrTxInMempoolCache = 19,
  ErrMempoolIsFull = 20,
  ErrTxTooLarge = 21,
  ErrKeyNotFound = 22,
  ErrWrongPassword = 23,
  ErrorInvalidSigner = 24,
  ErrorInvalidGasAdjustment = 25,
  ErrInvalidHeight = 26,
  ErrInvalidVersion = 27,
  ErrInvalidChainID = 28,
  ErrInvalidType = 29,
  ErrTxTimeoutHeight = 30,
  ErrUnknownExtensionOptions = 31,
  ErrWrongSequence = 32,
  ErrPackAny = 33,
  ErrUnpackAny = 34,
  ErrLogic = 35,
  ErrConflict = 36,
  ErrNotSupported = 37,
  ErrNotFound = 38,
  ErrIO = 39,
  ErrAppConfig = 40,
  ErrPanic = 111222,
}

export type TxSender = {
  broadcast: (messages: Msg[], txOptions?: TxOptions) => Promise<Tx>;
  simulate: (
    messages: Msg[],
    txOptions?: TxOptions,
  ) => Promise<
    import("./protobuf_stuff/cosmos/tx/v1beta1/service").SimulateResponse
  >;

  bank: {
    /** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
    multiSend: SingleMsgTx<MsgMultiSendParams>;
    /** MsgSend represents a message to send coins from one account to another. */
    send: SingleMsgTx<MsgSendParams>;
  };
};
