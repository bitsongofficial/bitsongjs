import { Message } from '../../types';
import { MsgMultiSend } from '../../codec/cosmos/bank/v1beta1/tx';
import { Input, Output } from '../../codec/cosmos/bank/v1beta1/bank';

export const MsgMultiSendUrl = '/cosmos.bank.v1beta1.MsgMultiSend';

export const BuildMsgMultiSend = (inputs: Input[], outputs: Output[]): Message => {
    return {
        typeUrl: MsgMultiSendUrl,
        value: {
            inputs,
            outputs,
        } as MsgMultiSend,
    };
};
