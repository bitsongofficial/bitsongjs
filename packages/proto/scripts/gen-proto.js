#!/usr/bin/env node

const { join } = require("path");
const telescope = require("@osmonauts/telescope").default;

telescope({
  protoDirs: [join(__dirname, "/../proto")],
  outPath: join(__dirname, "/../src"),
  options: {
    includeAminos: true,
    includeLCDClient: false,
  },
});
