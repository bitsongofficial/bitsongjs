import type { EstimateFeeParams } from "./types";
import type { StdFee } from "@cosmjs/stargate";
import { GasPrice, calculateFee } from '@cosmjs/stargate';

export const estimateFee = async ({
  client,
  sender,
  msgs,
  gasPrice,
  feeMultiplier = 1.4,
  memo = ''
}: EstimateFeeParams): Promise<StdFee> => {
  if (typeof gasPrice === 'string') {
    gasPrice = GasPrice.fromString(gasPrice)
  }

  const gasEstimate = await client.simulate(sender, msgs, memo)
  return calculateFee(Math.round(gasEstimate * feeMultiplier), gasPrice)
}