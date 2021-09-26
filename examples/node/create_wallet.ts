import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { stringToPath } from '@cosmjs/crypto';
// eslint-disable-next-line node/no-unpublished-import
import { Constants } from '../../packages/sdk/build';

const createWallet = async () => {
    return await DirectSecp256k1HdWallet.generate(12, { prefix: Constants.Bech32PrefixAccAddr, hdPaths: [stringToPath(Constants.getHdPath())] });
};

(async () => {
    const wallet = await createWallet();
    const [account] = await wallet.getAccounts();

    console.log(`Mnemonic: ${wallet.mnemonic}`);
    console.log(`Address: ${account.address}`);
})();
