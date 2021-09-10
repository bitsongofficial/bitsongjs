import { Coin } from './Coin';

export interface Fee {
    amount: readonly Coin[];
    gas: string;
}
