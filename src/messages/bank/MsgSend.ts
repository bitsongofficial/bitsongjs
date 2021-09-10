import { Coin, Message } from '../../types';
import { MsgSend } from '../../codec/cosmos/bank/v1beta1/tx';

export const MsgSendUrl = '/cosmos.bank.v1beta1.MsgSend';

export const BuildMsgSend = (fromAddress: string, toAddress: string, amount: Coin[]): Message => {
    return {
        typeUrl: MsgSendUrl,
        value: {
            fromAddress,
            toAddress,
            amount,
        } as MsgSend,
    };
};
