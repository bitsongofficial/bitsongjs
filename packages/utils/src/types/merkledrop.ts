export interface Account {
    address: string;
    amount: string;
}

export interface AccountWithProofs extends Account {
    proofs: string[];
    index: number;
}