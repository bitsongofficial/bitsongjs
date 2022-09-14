import { Account } from '../dist';

const TEST_ADDRESS="<YOUR ADDRESS FOR TESTS>"
const OTHER_TEST_ADDRESS="<ANOTHER ADDRESS FOR TESTS>"

const accounts: Account[] = [
  {
    address: TEST_ADDRESS,
    amount: '1000000',
  },
  {
    address: OTHER_TEST_ADDRESS,
    amount: '1000000',
  },
];

export { TEST_ADDRESS, OTHER_TEST_ADDRESS, accounts };
