import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];

telescope({
  protoDirs,
  outPath: join(__dirname, '../src/codegen'),
  options: {
    prototypes: {
      excluded: {
        packages: [
          'cosmos.app.v1alpha1',
          'cosmos.app.v1beta1',
          'cosmos.base.kv.v1beta1',
          'cosmos.base.reflection.v1beta1',
          'cosmos.base.snapshots.v1beta1',
          'cosmos.base.store.v1beta1',
          'cosmos.base.tendermint.v1beta1',
          'cosmos.crisis.v1beta1',
          'cosmos.evidence.v1beta1',
          'cosmos.feegrant.v1beta1',
          'cosmos.genutil.v1beta1',
          'cosmos.group.v1beta1',
          'cosmos.mint.v1beta1',
          'cosmos.group.v1',
          'cosmos.msg.v1',
          'cosmos.nft.v1beta1',
          'cosmos.capability.v1beta1',
          'cosmos.orm.v1alpha1',
          'cosmos.orm.v1',
          'cosmos.params.v1beta1',
          'cosmos.slashing.v1beta1',
          'cosmos.vesting.v1beta1',
          'google.api',
          'ibc.core.port.v1',
          'ibc.core.types.v1',
        ],
      },
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: 'date',
        duration: 'duration',
      },
      parser: {
        keepCase: false,
      },
    },
    cosmwasm: {
      contracts: [
        {
          name: 'bs721-base',
          dir: join(__dirname, '../contracts/bs721-base/'),
        },
        {
          name: 'bs721-metadata-onchain',
          dir: join(__dirname, '../contracts/bs721-metadata-onchain/'),
        },
        {
          name: 'bs721-royalties',
          dir: join(__dirname, '../contracts/bs721-royalties/'),
        },
        {
          name: 'launchparty-fixed',
          dir: join(__dirname, '../contracts/launchparty-fixed/'),
        },
      ],
      outPath: join(__dirname, '../src/codegen'),
      options: {
        bundle: {
          enabled: true,
          bundleFile: 'contracts.ts',
          scope: 'contracts',
        },
        types: {
          enabled: true,
        },
        client: {
          enabled: true,
        },
        reactQuery: {
          enabled: false,
        },
        recoil: {
          enabled: false,
        },
        messageComposer: {
          enabled: false,
        },
      },
    },
    aminoEncoding: {
      enabled: true,
    },
    lcdClients: {
      enabled: true,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
    packages: {
      cosmos: {
        authz: {
          v1beta1: {
            aminoEncoding: {
              enabled: false,
            },
          },
        },
      },
    },
  },
}).then(() => {
  console.log('✨ all done!');
});
