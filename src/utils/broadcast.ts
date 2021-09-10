import { BroadcastTxSyncResponse, BroadcastTxCommitResponse } from '../types';

/**
 * Returns true if transaction made it sucessfully into the transaction pool
 */
export const broadcastTxSyncSuccess = (res: BroadcastTxSyncResponse): boolean => {
    return res.code === 0;
};

/**
 * Returns true if transaction made it successfully into a block
 * (i.e. success in `check_tx` and `deliver_tx` field)
 */
export const broadcastTxCommitSuccess = (response: BroadcastTxCommitResponse): boolean => {
    return response.checkTx.code === 0 && !!response.deliverTx && response.deliverTx.code === 0;
};
