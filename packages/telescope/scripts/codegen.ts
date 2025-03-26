import { join } from 'path'
import { sync as rimraf } from 'rimraf'
import { TelescopeBuilder } from '@cosmology/telescope'

const protoDirs = [join(__dirname, '/../proto')]
const outPath = join(__dirname, '../src')
rimraf(outPath)

async function main() {
  const builder = new TelescopeBuilder({
    protoDirs,
    outPath,
    options: {
      interfaces: {
        enabled: true,
        useUnionTypes: true,
        useGlobalDecoderRegistry: true
      },
      prototypes: {
        excluded: {
          packages: [
            'cosmos.app.**',
            'cosmos.base.kv.v1beta1',
            'cosmos.base.reflection.v1beta1',
            'cosmos.base.snapshots.v1beta1',
            'cosmos.base.store.v1beta1',
            'cosmos.base.tendermint.v1beta1',
            'cosmos.circuit.**',
            'cosmos.consensus.**',
            'cosmos.crisis.**',
            'cosmos.evidence.**',
            'cosmos.feegrant.**',
            'cosmos.genutil.**',
            'cosmos.group.**',
            'cosmos.mint.**',
            'cosmos.msg.**',
            'cosmos.nft.**',
            'cosmos.orm.**',
            'cosmos.reflection.**',
            'cosmos.store.**',
            'cosmos.vesting.**',
            'google.api',
            'ibc.core.port.v1',
            'ibc.core.types.v1'
          ]
        },
        methods: {
          fromJSON: false,
          toJSON: false,
  
          encode: true,
          decode: true,
          fromPartial: true,
  
          // toSDK: true,
          // fromSDK: true,
  
          toAmino: true,
          fromAmino: true,
          fromProto: true,
          toProto: true
        },
        parser: {
          keepCase: false
        },
        includePackageVar: false,
        addAminoTypeToObjects: true,
        addTypeUrlToObjects: true,
        addTypeUrlToDecoders: true,
        typingsFormat: {
          duration: 'duration',
          timestamp: 'date',
          useExact: false,
          useDeepPartial: true,
          num64: 'bigint',
          customTypes: {
            useCosmosSDKDec: true
          }
        }
      },
      aminoEncoding: {
        enabled: true,
        omitEmptyTags: ['omitempty', 'dont_omitempty'],
        exceptions: {
          // BUG in telescope? why no workie?
          // maybe because it assumes that SDK annotations are the truth!
          '/cosmos.gov.v1beta1.MsgVote': {
            aminoType: 'cosmos-sdk/MsgVote'
          }
        }
      },
      lcdClients: {
        enabled: true
      },
      rpcClients: {
        enabled: true,
        camelCase: true,
        useConnectComet: true
      },
    }
  });
  await builder.build();
}

main().then(() => {
  console.log('✨ all done!');
}).catch(e => {
  console.error(e);
  process.exit(1);
})