import { chain as bitsong } from 'chain-registry/mainnet/bitsong'
import { chain as cosmoshub } from 'chain-registry/mainnet/cosmoshub'
import { chain as noble } from 'chain-registry/mainnet/noble'
import { chain as osmosis } from 'chain-registry/mainnet/osmosis'
import type { ChainNameParam } from './types'
import type { Chain } from '@chain-registry/types'

const ENABLED_CHAINS: readonly Chain[] = [
  bitsong,
  cosmoshub,
  noble,
  osmosis,
] as const

export const getChains = (chainName?: ChainNameParam): Chain[] => {
  if (!chainName) return [...ENABLED_CHAINS]

  const chainNames = Array.isArray(chainName) ? chainName : [chainName]
  const filteredChains = ENABLED_CHAINS.filter(chain => chainNames.includes(chain.chain_name))
  if (filteredChains.length === 0) {
    throw new Error(`No chains found for ${chainNames.join(', ')}`)
  }

  return filteredChains
}

export const getChain = (chainName: ChainNameParam): Chain => {
  const _chainName = Array.isArray(chainName) ? chainName[0] : chainName
  const chain = getChains(_chainName)[0]
  if (!chain) {
    throw new Error(`Chain not found for ${_chainName}`)
  }

  return chain
}