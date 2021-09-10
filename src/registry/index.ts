import { Registry, GeneratedType } from '@cosmjs/proto-signing';
import { AminoTypes, defaultRegistryTypes } from '@cosmjs/stargate';

import { Tx } from '../codec/cosmos/tx/v1beta1/tx';
import { MsgIssueFanToken, MsgMintFanToken, MsgBurnFanToken, MsgEditFanToken } from '../codec/fantoken/tx';

const registryTypes: Iterable<[string, GeneratedType]> = [
    ...defaultRegistryTypes,
    ['/bitsong.fantoken.MsgIssueFanToken', MsgIssueFanToken as GeneratedType],
    ['/bitsong.fantoken.MsgMintFanToken', MsgMintFanToken as GeneratedType],
    ['/bitsong.fantoken.MsgBurnFanToken', MsgBurnFanToken as GeneratedType],
    ['/bitsong.fantoken.MsgEditFanToken', MsgEditFanToken as GeneratedType],
];

class ExtendedRegistry extends Registry {
    decodeTx = (tx: Uint8Array): Tx => {
        return Tx.decode(tx);
    };
}

export const BAminoRegistry = new AminoTypes();
export const BRegistry = new ExtendedRegistry(registryTypes);
