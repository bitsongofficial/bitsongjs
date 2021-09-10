import { Types, Constants } from '..';

/**
 * Converts the Coin amount into the destination denom.
 * This method does not do any actual math and only "move" the floating precision of the amoun in order to avoid any
 * possible floating point precision issue.
 * It does nothing if src denom = dst denom.
 *
 * @param coin Coin to convert into toDenom
 * @param toDenom destination denom to convert into
 * @returns the amount converted
 */
export const convertUnit = (coin: Types.Coin, toDenom: string): string => {
    const parts = coin.amount.split('.');
    if (parts.length > 2) {
        throw new Error('More than one separator found');
    }

    if (coin.denom === toDenom) {
        return coin.amount;
    } else if (coin.denom.startsWith('u') && coin.denom.endsWith(toDenom)) {
        // from micro to base
        if (parts.length !== 1) {
            throw new Error('Micro units cannot have floating precision');
        }
        let res = parts[0];
        for (let i = res.length; res.length <= Constants.Exponent; i++) {
            res = '0' + res;
        }
        const floatIdx = res.length - Constants.Exponent;
        return (res.substring(0, floatIdx) + '.' + res.substring(floatIdx)).replace(/0+$/, '');
    } else if (toDenom.startsWith('u') && toDenom.endsWith(coin.denom)) {
        // form base to micro
        if (parts.length === 2 && parts[1].length > Constants.Exponent) {
            throw new Error(`Floating precision cannot exceed ${Constants.Exponent} digits`);
        }
        let res = parts[0] + (parts[1] || '');
        for (let i = parts.length === 2 ? parts[1].length : 0; i < Constants.Exponent; i++) {
            res += '0';
        }
        return res.replace(/^0+/, '');
    }
    return coin.amount;
};
