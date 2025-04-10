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
    "src/index"
  ],
  externals: [
    "@cosmjs/amino",
    "@cosmjs/math",
    "@cosmjs/proto-signing",
    "@cosmjs/stargate",
    "@cosmjs/tendermint-rpc",
    "@cosmology/lcd"
  ],
});