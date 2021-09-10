import { Message } from './Message';
import { Fee } from './Fee';
import { DocSigner } from './DocSigner';

export interface Doc {
    /**
     * chain_id is the unique identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker
     */
    chainId: string;
    /**
     * Transaction requested Fee
     */
    fee: Fee;
    /**
     * Transaction memo
     */
    memo?: string;
    /**
     * Transactions messages
     */
    messages: Message[];
    /**
     * Transction auth signers
     */
    signers: DocSigner[];
}
