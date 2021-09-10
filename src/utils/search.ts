/**
 * Create a search query by block height
 *
 * @param height block height
 */
export const searchTxByBlockHeight = (height: number): string => {
    return `tx.height=${height}`;
};

/**
 * Create a search query by tags
 *
 * @param tags tags to search for
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
export const searchTxByTags = (tags: { key: string; value: string }[], minHeight?: number, maxHeight?: number): string => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = tags.map((t) => `${t.key}='${t.value}'`).join(' AND ');
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};

/**
 * Create a search query by sender address
 *
 * @param senderAddress wallet address (bech32)
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
export const searchTxFrom = (senderAddress: string, minHeight?: number, maxHeight?: number): string => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = `message.module='bank' AND transfer.sender='${senderAddress}'`;
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};

/**
 * Create a search query by recipient address
 *
 * @param recipientAddress wallet address (bech32)
 * @param minHeight min block height (filter)
 * @param maxHeight max block height (filter)
 */
export const searchTxTo = (recipientAddress: string, minHeight?: number, maxHeight?: number): string => {
    minHeight = minHeight || 0;
    maxHeight = maxHeight || Number.MAX_SAFE_INTEGER;
    const query = `message.module='bank' AND transfer.recipient='${recipientAddress}'`;
    return `${query} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
};
