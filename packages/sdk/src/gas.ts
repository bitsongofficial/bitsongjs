import type { Chain } from "@chain-registry/types";
import { getChain } from "./chains";
import type { GasPriceType } from "./types";
import { GasPrice } from '@cosmjs/stargate';

export const getGasPrice = async (chain: string | Chain, gasPriceType: GasPriceType = 'low') => {
  if (typeof chain === 'string') {
    chain = getChain(chain)
  }

  if (!chain.fees || chain.fees.fee_tokens.length === 0) {
    throw new Error(`No gas price found for ${chain.chain_name}`)
  }

  const feeToken = chain.fees.fee_tokens[0]
  if (!feeToken?.denom) {
    throw new Error(`No gas price 'denom' found for ${chain.chain_name}`)
  }

  const denom = feeToken.denom
  if (denom.startsWith('ibc/')) {
    throw new Error(`Gas price for IBC tokens not supported`)
  }

  let price = GasPrice.fromString(`0${denom}`)

  switch (gasPriceType) {
    case 'low': {
      price = GasPrice.fromString(`${feeToken.low_gas_price}${denom}`)
      break
    }
    case 'average': {
      price = GasPrice.fromString(`${feeToken.average_gas_price}${denom}`)
      break
    }
    case 'high': {
      price = GasPrice.fromString(`${feeToken.high_gas_price}${denom}`)
      break
    }
    default: {
      price = GasPrice.fromString(`${feeToken.average_gas_price}${denom}`)
      break
    }
  }

  return price  
}