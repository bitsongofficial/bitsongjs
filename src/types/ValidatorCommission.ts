import { ValidatorCommissionRates } from './ValidatorCommissionRates';

/** Commission defines commission parameters for a given validator. */
export interface ValidatorCommission {
    commissionRates?: ValidatorCommissionRates;
    updateTime?: Date;
}
