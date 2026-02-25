import { defineBuildConfig } from "obuild/config";

export default defineBuildConfig({
  entries: [
    "./src/index.ts",
    "./src/chains.ts",
    "./src/errors.ts",
    "./src/gas.ts",
    "./src/rpc.ts",
    "./src/signer.ts",
    "./src/events.ts",
    "./src/client.ts",
    "./src/modules/index.ts",
  ],
});
