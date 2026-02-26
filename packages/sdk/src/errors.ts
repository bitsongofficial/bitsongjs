export enum CosmosErrorCode {
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
  ErrTxInMempoolCouldNotCheckTx = 19,
  ErrMempoolIsFull = 20,
  ErrTxTooLarge = 21,
  ErrKeyNotFound = 22,
  ErrWrongPassword = 23,
  ErrInvalidSigner = 24,
  ErrInvalidGasAdjustment = 25,
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
  ErrInvalidGasLimit = 41,
  ErrPanic = 111222,
}

export class TxError extends Error {
  readonly code: number;
  readonly codespace: string;
  readonly rawLog: string;
  readonly txHash: string;

  constructor(options: {
    code: number;
    codespace?: string;
    rawLog?: string;
    txHash?: string;
    message?: string;
  }) {
    const msg =
      options.message ??
      `Transaction failed with code ${options.code}${options.codespace ? ` (${options.codespace})` : ""}${options.rawLog ? `: ${options.rawLog}` : ""}`;
    super(msg);
    this.name = "TxError";
    this.code = options.code;
    this.codespace = options.codespace ?? "";
    this.rawLog = options.rawLog ?? "";
    this.txHash = options.txHash ?? "";
  }
}

export function isTxError(error: unknown): error is TxError {
  return error instanceof TxError;
}

interface RawTxResponse {
  code: number;
  codespace?: string;
  rawLog?: string;
  raw_log?: string;
  txhash?: string;
  transactionHash?: string;
}

function isRawTxResponse(value: unknown): value is RawTxResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "code" in value &&
    typeof (value as RawTxResponse).code === "number"
  );
}

export function assertTxSuccess(result: {
  transactionHash?: string;
  rawResponse?: unknown;
}): void {
  if (isRawTxResponse(result.rawResponse)) {
    const code = result.rawResponse.code;
    if (code !== 0) {
      throw new TxError({
        code,
        codespace: result.rawResponse.codespace ?? "",
        rawLog: result.rawResponse.rawLog ?? result.rawResponse.raw_log ?? "",
        txHash:
          result.transactionHash ??
          result.rawResponse.txhash ??
          result.rawResponse.transactionHash ??
          "",
      });
    }
  }
}
