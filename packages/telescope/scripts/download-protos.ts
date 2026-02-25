import { execSync } from "child_process";
import {
  existsSync,
  mkdirSync,
  cpSync,
  rmSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { join, resolve } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const PROTO_DIR = join(ROOT, "proto");
const TMP_DIR = join(ROOT, ".tmp-proto-download");

interface ProtoSource {
  repo: string;
  branch: string;
  /** Paths inside the repo to copy (relative to repo root) */
  paths: { src: string; dest: string }[];
  /** If set, only copy these specific files from the source paths */
  files?: string[];
}

const sources: ProtoSource[] = [
  // BitSong custom modules
  {
    repo: "bitsongofficial/go-bitsong",
    branch: "feat-hyperlane",
    paths: [{ src: "proto/bitsong", dest: "bitsong" }],
  },
  // Cosmos SDK (pinned to go.mod version)
  {
    repo: "cosmos/cosmos-sdk",
    branch: "v0.53.0",
    paths: [
      { src: "proto/cosmos", dest: "cosmos" },
      { src: "proto/amino", dest: "amino" },
    ],
  },
  // Cosmos proto (cosmos_proto) - pinned to go.mod version
  {
    repo: "cosmos/cosmos-proto",
    branch: "v1.0.0-beta.5",
    paths: [{ src: "proto/cosmos_proto", dest: "cosmos_proto" }],
  },
  // gogoproto - pinned to go.mod version
  {
    repo: "cosmos/gogoproto",
    branch: "v1.7.0",
    paths: [{ src: "gogoproto", dest: "gogoproto" }],
  },
  // ICS23
  {
    repo: "cosmos/ics23",
    branch: "master",
    paths: [{ src: "proto/cosmos/ics23/v1", dest: "cosmos/ics23/v1" }],
  },
  // Google APIs (only the specific files needed by cosmos protos)
  {
    repo: "googleapis/googleapis",
    branch: "master",
    paths: [{ src: "google/api", dest: "google/api" }],
    files: ["annotations.proto", "http.proto"],
  },
  // Google Protobuf well-known types (selective - only what cosmos protos need)
  {
    repo: "protocolbuffers/protobuf",
    branch: "v3.9.2",
    paths: [{ src: "src/google/protobuf", dest: "google/protobuf" }],
    files: [
      "any.proto",
      "descriptor.proto",
      "duration.proto",
      "timestamp.proto",
      "empty.proto",
      "struct.proto",
      "wrappers.proto",
      "field_mask.proto",
    ],
  },
  // IBC
  {
    repo: "cosmos/ibc-go",
    branch: "release/v8.7.x",
    paths: [{ src: "proto/ibc", dest: "ibc" }],
  },
  // CometBFT / Tendermint
  {
    repo: "cometbft/cometbft",
    branch: "v0.38.x",
    paths: [{ src: "proto/tendermint", dest: "tendermint" }],
  },
  // CosmWasm
  {
    repo: "CosmWasm/wasmd",
    branch: "v0.53.3",
    paths: [{ src: "proto/cosmwasm", dest: "cosmwasm" }],
  },
  // Hyperlane
  {
    repo: "bcp-innovations/hyperlane-cosmos",
    branch: "v1.1.0",
    paths: [{ src: "proto/hyperlane", dest: "hyperlane" }],
  },
];

function run(cmd: string, cwd?: string) {
  console.log(`  $ ${cmd}`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

function cloneShallow(repo: string, branch: string, dest: string) {
  run(
    `git clone --depth 1 --branch ${branch} https://github.com/${repo}.git ${dest}`
  );
}

function copyProtos(
  repoDir: string,
  paths: ProtoSource["paths"],
  destRoot: string,
  files?: string[]
) {
  for (const { src, dest } of paths) {
    const srcPath = join(repoDir, src);
    const destPath = join(destRoot, dest);

    if (!existsSync(srcPath)) {
      console.warn(`  ⚠ Source path not found: ${srcPath}`);
      continue;
    }

    mkdirSync(destPath, { recursive: true });

    if (files) {
      // Copy only specific files
      for (const file of files) {
        const fileSrc = join(srcPath, file);
        if (existsSync(fileSrc)) {
          cpSync(fileSrc, join(destPath, file));
        } else {
          console.warn(`  ⚠ File not found: ${fileSrc}`);
        }
      }
      console.log(`  ✓ Copied ${files.length} files → ${dest}`);
    } else {
      cpSync(srcPath, destPath, { recursive: true });
      const count = countProtoFiles(destPath);
      console.log(`  ✓ Copied ${count} .proto files → ${dest}`);
    }
  }
}

function countProtoFiles(dir: string): number {
  let count = 0;
  if (!existsSync(dir)) return 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      count += countProtoFiles(join(dir, entry.name));
    } else if (entry.name.endsWith(".proto")) {
      count++;
    }
  }
  return count;
}

/** Fix stray semicolons in proto files (e.g. cosmos-sdk v0.53.0 genesis.proto) */
function fixStraySemicolons(dir: string) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      fixStraySemicolons(fullPath);
    } else if (entry.name.endsWith(".proto")) {
      const content = readFileSync(fullPath, "utf-8");
      // Remove lines that contain only a semicolon (with optional whitespace)
      const fixed = content.replace(/^\s*;\s*$/gm, "");
      if (fixed !== content) {
        writeFileSync(fullPath, fixed);
        console.log(`  🔧 Fixed stray semicolons in ${entry.name}`);
      }
    }
  }
}

/** Remove proto files that use unsupported 'edition' syntax or are test files */
function removeIncompatibleProtos(dir: string) {
  if (!existsSync(dir)) return;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      removeIncompatibleProtos(fullPath);
    } else if (entry.name.endsWith(".proto")) {
      const content = readFileSync(fullPath, "utf-8");
      // Remove files with 'edition' syntax (unsupported by telescope's protobufjs parser)
      if (/^edition\s/m.test(content)) {
        rmSync(fullPath);
        continue;
      }
      // Remove test/unittest proto files
      if (entry.name.includes("test") || entry.name.includes("unittest")) {
        rmSync(fullPath);
      }
    }
  }
}

async function main() {
  console.log("🚀 Downloading proto files...\n");

  // Clean existing proto dir
  if (existsSync(PROTO_DIR)) {
    rmSync(PROTO_DIR, { recursive: true });
  }
  mkdirSync(PROTO_DIR, { recursive: true });

  // Clean tmp dir
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true });
  }
  mkdirSync(TMP_DIR, { recursive: true });

  try {
    for (const source of sources) {
      console.log(`📦 ${source.repo}@${source.branch}`);
      const repoDir = join(TMP_DIR, source.repo.replace("/", "_"));
      cloneShallow(source.repo, source.branch, repoDir);
      copyProtos(repoDir, source.paths, PROTO_DIR, source.files);
      console.log();
    }

    // Post-download cleanup
    console.log("🧹 Cleaning up incompatible protos...");
    removeIncompatibleProtos(PROTO_DIR);
    fixStraySemicolons(PROTO_DIR);

    const total = countProtoFiles(PROTO_DIR);
    console.log(`\n✅ Done! ${total} total .proto files in ${PROTO_DIR}`);
  } finally {
    // Clean up tmp dir
    if (existsSync(TMP_DIR)) {
      rmSync(TMP_DIR, { recursive: true });
    }
  }
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
