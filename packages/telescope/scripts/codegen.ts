import telescopePkg from "@hyperweb/telescope";
import type { TelescopeInput } from "@hyperweb/telescope";
import { join, resolve } from "path";
import { rimrafSync as rimraf } from "rimraf";

// Handle CJS/ESM interop - the default export may be nested
const telescope =
  typeof telescopePkg === "function"
    ? telescopePkg
    : (telescopePkg as any).default;

const ROOT = resolve(import.meta.dirname, "..");
const PROTO_DIR = join(ROOT, "proto");
const OUT_DIR = join(ROOT, "src");

const options: TelescopeInput = {
  protoDirs: [PROTO_DIR],
  outPath: OUT_DIR,
  options: {
    classesUseArrowFunctions: true,
    env: "v-next",
    useInterchainJs: true,
    useSDKTypes: false,
    prototypes: {
      enableRegistryLoader: false,
      enableMessageComposer: true,
      enabled: true,
      parser: {
        keepCase: false,
      },
      methods: {
        fromJSON: false,
        toJSON: false,
        encode: true,
        decode: true,
        fromPartial: true,
        toAmino: true,
        fromAmino: true,
        fromProto: false,
        toProto: false,
      },
      addTypeUrlToDecoders: true,
      addTypeUrlToObjects: true,
      addAminoTypeToObjects: true,
      typingsFormat: {
        duration: "duration",
        timestamp: "date",
        useExact: false,
        useDeepPartial: true,
        num64: "bigint",
        customTypes: {
          useCosmosSDKDec: true,
          useEnhancedDecimal: false,
        },
        useTelescopeGeneratedType: true,
        autoFixUndefinedEnumDefault: true,
      },
      includes: {
        packages: [
          "bitsong.fantoken.v1beta1",
          "bitsong.cadence.v1",
          "bitsong.smartaccount.v1beta1",
          "cosmos.auth.v1beta1",
          "cosmos.authz.v1beta1",
          "cosmos.bank.v1beta1",
          "cosmos.base.v1beta1",
          "cosmos.base.query.v1beta1",
          "cosmos.crypto.ed25519",
          "cosmos.crypto.multisig",
          "cosmos.crypto.secp256k1",
          "cosmos.distribution.v1beta1",
          "cosmos.feegrant.v1beta1",
          "cosmos.gov.v1",
          "cosmos.gov.v1beta1",
          "cosmos.group.v1",
          "cosmos.mint.v1beta1",
          "cosmos.params.v1beta1",
          "cosmos.slashing.v1beta1",
          "cosmos.staking.v1beta1",
          "cosmos.tx.signing.v1beta1",
          "cosmos.tx.v1beta1",
          "cosmos.upgrade.v1beta1",
          "cosmos.vesting.v1beta1",
          "ibc.applications.transfer.v1",
          "ibc.core.channel.v1",
          "ibc.core.client.v1",
          "ibc.core.connection.v1",
          "cosmwasm.wasm.v1",
          "hyperlane.core.v1",
          "hyperlane.core.interchain_security.v1",
          "hyperlane.core.post_dispatch.v1",
          "hyperlane.warp.v1",
        ],
      },
    },
    bundle: {
      enabled: true,
      type: "module",
      noAlias: [
        // Bank module
        { package: "cosmos.bank.v1beta1", name: "getBalance" },
        { package: "cosmos.bank.v1beta1", name: "getAllBalances" },
        { package: "cosmos.bank.v1beta1", name: "getSpendableBalances" },
        { package: "cosmos.bank.v1beta1", name: "getTotalSupply" },
        { package: "cosmos.bank.v1beta1", name: "getSupplyOf" },
        { package: "cosmos.bank.v1beta1", name: "getDenomMetadata" },
        { package: "cosmos.bank.v1beta1", name: "send" },
        { package: "cosmos.bank.v1beta1", name: "multiSend" },

        // Staking module
        { package: "cosmos.staking.v1beta1", name: "getValidators" },
        { package: "cosmos.staking.v1beta1", name: "getValidator" },
        { package: "cosmos.staking.v1beta1", name: "delegate" },
        { package: "cosmos.staking.v1beta1", name: "undelegate" },
        { package: "cosmos.staking.v1beta1", name: "beginRedelegate" },
        {
          package: "cosmos.staking.v1beta1",
          name: "cancelUnbondingDelegation",
        },

        // Gov module v1beta1
        { package: "cosmos.gov.v1beta1", name: "getProposal" },
        { package: "cosmos.gov.v1beta1", name: "getProposals" },
        { package: "cosmos.gov.v1beta1", name: "getVote" },
        { package: "cosmos.gov.v1beta1", name: "vote" },
        { package: "cosmos.gov.v1beta1", name: "deposit" },
        { package: "cosmos.gov.v1beta1", name: "submitProposal" },
        { package: "cosmos.gov.v1beta1", name: "getDeposit" },
        { package: "cosmos.gov.v1beta1", name: "getDeposits" },
        { package: "cosmos.gov.v1beta1", name: "getTallyResult" },

        // Auth module
        { package: "cosmos.auth.v1beta1", name: "getAccount" },
        { package: "cosmos.auth.v1beta1", name: "getAccounts" },
        { package: "cosmos.auth.v1beta1", name: "getParams" },

        // Distribution module
        { package: "cosmos.distribution.v1beta1", name: "setWithdrawAddress" },
        {
          package: "cosmos.distribution.v1beta1",
          name: "withdrawDelegatorReward",
        },
        {
          package: "cosmos.distribution.v1beta1",
          name: "withdrawValidatorCommission",
        },
        { package: "cosmos.distribution.v1beta1", name: "fundCommunityPool" },

        // Authz module
        { package: "cosmos.authz.v1beta1", name: "grant" },
        { package: "cosmos.authz.v1beta1", name: "revoke" },
        { package: "cosmos.authz.v1beta1", name: "exec" },

        // Message Types - Bank
        { package: "cosmos.bank.v1beta1", name: "MsgSend" },
        { package: "cosmos.bank.v1beta1", name: "MsgMultiSend" },
        { package: "cosmos.bank.v1beta1", name: "MsgUpdateParams" },
        { package: "cosmos.bank.v1beta1", name: "MsgSetSendEnabled" },

        // Message Types - Staking
        { package: "cosmos.staking.v1beta1", name: "MsgCreateValidator" },
        { package: "cosmos.staking.v1beta1", name: "MsgEditValidator" },
        { package: "cosmos.staking.v1beta1", name: "MsgDelegate" },
        { package: "cosmos.staking.v1beta1", name: "MsgBeginRedelegate" },
        { package: "cosmos.staking.v1beta1", name: "MsgUndelegate" },
        {
          package: "cosmos.staking.v1beta1",
          name: "MsgCancelUnbondingDelegation",
        },

        // Message Types - Gov v1beta1
        { package: "cosmos.gov.v1beta1", name: "MsgSubmitProposal" },
        { package: "cosmos.gov.v1beta1", name: "MsgVote" },
        { package: "cosmos.gov.v1beta1", name: "MsgVoteWeighted" },
        { package: "cosmos.gov.v1beta1", name: "MsgDeposit" },

        // Message Types - Distribution
        {
          package: "cosmos.distribution.v1beta1",
          name: "MsgSetWithdrawAddress",
        },
        {
          package: "cosmos.distribution.v1beta1",
          name: "MsgWithdrawDelegatorReward",
        },
        {
          package: "cosmos.distribution.v1beta1",
          name: "MsgWithdrawValidatorCommission",
        },
        {
          package: "cosmos.distribution.v1beta1",
          name: "MsgFundCommunityPool",
        },
        {
          package: "cosmos.distribution.v1beta1",
          name: "MsgCommunityPoolSpend",
        },
        {
          package: "cosmos.distribution.v1beta1",
          name: "MsgDepositValidatorRewardsPool",
        },

        // Message Types - Authz
        { package: "cosmos.authz.v1beta1", name: "MsgGrant" },
        { package: "cosmos.authz.v1beta1", name: "MsgExec" },
        { package: "cosmos.authz.v1beta1", name: "MsgRevoke" },

        // Common Types and Interfaces
        { package: "cosmos.base.v1beta1", name: "Coin" },
        { package: "cosmos.base.query.v1beta1", name: "PageRequest" },
        { package: "cosmos.base.query.v1beta1", name: "PageResponse" },
        { package: "cosmos.tx.v1beta1", name: "TxBody" },
        { package: "cosmos.tx.v1beta1", name: "AuthInfo" },
        { package: "cosmos.tx.v1beta1", name: "SignerInfo" },
        { package: "cosmos.tx.v1beta1", name: "ModeInfo" },
        { package: "cosmos.tx.v1beta1", name: "Fee" },
        { package: "cosmos.tx.v1beta1", name: "Tx" },
        { package: "cosmos.tx.v1beta1", name: "TxRaw" },
        { package: "cosmos.tx.v1beta1", name: "SignDoc" },
        { package: "cosmos.tx.signing.v1beta1", name: "SignMode" },

        // Google Protobuf Types
        { package: "google.protobuf", name: "Any" },
        { package: "google.protobuf", name: "Timestamp" },
        { package: "google.protobuf", name: "Duration" },
        { package: "google.protobuf", name: "Empty" },

        // Tendermint Types
        { package: "tendermint.types", name: "Validator" },
        { package: "tendermint.types", name: "Vote" },
        { package: "tendermint.types", name: "Proposal" },
        { package: "tendermint.types", name: "Header" },
        { package: "tendermint.types", name: "BlockID" },
        { package: "tendermint.types", name: "PartSetHeader" },
        { package: "tendermint.types", name: "Commit" },
        { package: "tendermint.types", name: "CommitSig" },
        { package: "tendermint.types", name: "Data" },
        { package: "tendermint.types", name: "Evidence" },
        { package: "tendermint.types", name: "EvidenceList" },
        { package: "tendermint.types", name: "Block" },
        { package: "tendermint.types", name: "LightBlock" },
        { package: "tendermint.types", name: "BlockMeta" },
        { package: "tendermint.types", name: "TxProof" },
      ],
    },
    stargateClients: {
      enabled: false,
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: false,
    },
    helperFunctions: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      hooks: {
        react: false,
        vue: false,
      },
      nameMappers: {
        Query: {
          "cosmos.tx.v1beta1.GetTx": {
            funcBody: "unchanged",
          },
          "cosmos.tx.v1beta1.GetTxsEvent": {
            funcBody: "unchanged",
          },
          "cosmos.tx.v1beta1.GetBlockWithTxs": {
            funcBody: "unchanged",
          },
        },
      },
    },
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      registerAllDecodersToGlobal: false,
      useUnionTypes: true,
    },
    aminoEncoding: {
      enabled: true,
      useLegacyInlineEncoding: false,
      disableMsgTypes: false,
      useProtoOptionality: true,
      customTypes: {
        useCosmosSDKDec: true,
      },
    },
  },
};

async function main() {
  console.log("🔭 Running telescope code generation...\n");

  // Clean existing generated source
  rimraf(OUT_DIR);

  await telescope(options);

  console.log("\n✅ Code generation complete!");
  console.log(`   Output: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error("❌ Codegen failed:", err);
  process.exit(1);
});
