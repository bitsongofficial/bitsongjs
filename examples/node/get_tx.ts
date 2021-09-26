import { BitsongClient } from '../../packages/sdk/build';

const rpcUrl = 'http://49.12.198.197:26657';

(async () => {
    const bitsong = await BitsongClient.connect(rpcUrl);

    const tx = await bitsong.getTx('5685C931FEEC799EB406920E6C2E6F0359070B192CEEFA0B78515CCA65087BB3');
    console.log(tx);

    // rawLog
    console.log(tx.rawLog);
})();
