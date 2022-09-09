import * as dotenv from 'dotenv';
import { Account } from 'src/types';

const config = dotenv.config();
const parsed = config.parsed ? config.parsed : {};

const { TEST_ADDRESS, OTHER_TEST_ADDRESS } = parsed;

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
