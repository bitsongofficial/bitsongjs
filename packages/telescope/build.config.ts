import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  outDir: "dist",
  failOnWarn: false,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
  entries: [
    "src/index",
    "src/binary",
    "src/helpers",
    "src/registry",
    "src/types",
    "src/utf8",
    "src/varint",
    {
      input: "src/amino/",
      outDir: "dist/amino",
      format: "esm",
    },
    {
      input: "src/bitsong/",
      outDir: "dist/bitsong",
      format: "esm",
    },
    {
      input: "src/cosmos/",
      outDir: "dist/cosmos",
      format: "esm",
    },
    {
      input: "src/cosmos_proto/",
      outDir: "dist/cosmos_proto",
      format: "esm",
    },
    {
      input: "src/gogoproto/",
      outDir: "dist/gogoproto",
      format: "esm",
    },    
    {
      input: "src/google/",
      outDir: "dist/google",
      format: "esm",
    },
    {
      input: "src/ibc/",
      outDir: "dist/ibc",
      format: "esm",
    },
    {
      input: "src/tendermint/",
      outDir: "dist/tendermint",
      format: "esm",
    }
  ],
  externals: [
    "@cosmjs/amino",
    "@cosmjs/math",
    "@cosmjs/proto-signing",
    "@cosmjs/stargate",
    "@cosmjs/tendermint-rpc"
  ],
});