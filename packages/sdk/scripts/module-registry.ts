/**
 * Declarative registry of all SDK modules.
 *
 * Each entry maps a module name to its telescope source paths,
 * exported function names, and any special-case overrides the
 * code-generator needs to honour.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ModuleSource {
  /** Telescope import path (e.g. "@bitsongjs/telescope/cosmos/bank/v1beta1/query.rpc.func") */
  path: string;
  /** Ordered list of exported function names from this source */
  functions: string[];
  /** Optional section comment rendered above the import block AND inside the return object */
  sectionComment?: string;
}

export interface TxRename {
  /** Original exported name from telescope */
  from: string;
  /** Alias used in the import statement (prefixed with _) */
  importAs: string;
  /** Property name exposed on the tx object */
  exposedAs: string;
}

export interface ModuleDefinition {
  /** Output file name (e.g. "bank.ts") */
  file: string;

  /** Name of the query factory function (e.g. "bankQuery"). Omit if query-only is false and no query. */
  queryFnName?: string;
  /** Name of the tx factory function (e.g. "bankTx"). Omit for query-only modules. */
  txFnName?: string;

  /** Telescope sources for query functions */
  querySources: ModuleSource[];
  /** Telescope sources for tx functions */
  txSources: ModuleSource[];

  /**
   * Query functions that must be placed in a SEPARATE import block
   * from the same source path (bank.ts special case).
   */
  separateQueryImports?: string[];

  /** Tx functions that need to be renamed on import (bank.ts `setSendEnabled` case). */
  txRenames?: TxRename[];

  // ---- barrel export ordering ----
  /** Explicit position in the barrel index (modules/index.ts) — 0-based */
  barrelOrder: number;
}

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

export const MODULE_REGISTRY: ModuleDefinition[] = [
  // ---- bank (barrelOrder 0) ----
  {
    file: "bank.ts",
    queryFnName: "bankQuery",
    txFnName: "bankTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/bank/v1beta1/query.rpc.func",
        functions: [
          "getBalance",
          "getAllBalances",
          "getSpendableBalances",
          "getSpendableBalanceByDenom",
          "getTotalSupply",
          "getSupplyOf",
          "getDenomsMetadata",
          "getDenomMetadata",
          "getDenomMetadataByQueryString",
          "getDenomOwners",
          "getDenomOwnersByQuery",
          "getSendEnabled",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/bank/v1beta1/tx.rpc.func",
        functions: ["send", "multiSend", "updateParams", "setSendEnabled"],
      },
    ],
    separateQueryImports: ["getParams"],
    txRenames: [
      {
        from: "setSendEnabled",
        importAs: "_setSendEnabled",
        exposedAs: "setSendEnabled",
      },
    ],
    barrelOrder: 0,
  },

  // ---- staking (barrelOrder 1) ----
  {
    file: "staking.ts",
    queryFnName: "stakingQuery",
    txFnName: "stakingTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/staking/v1beta1/query.rpc.func",
        functions: [
          "getValidators",
          "getValidator",
          "getValidatorDelegations",
          "getValidatorUnbondingDelegations",
          "getDelegation",
          "getUnbondingDelegation",
          "getDelegatorDelegations",
          "getDelegatorUnbondingDelegations",
          "getRedelegations",
          "getDelegatorValidator",
          "getDelegatorValidators",
          "getHistoricalInfo",
          "getPool",
          "getParams",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/staking/v1beta1/tx.rpc.func",
        functions: [
          "createValidator",
          "editValidator",
          "delegate",
          "beginRedelegate",
          "undelegate",
          "cancelUnbondingDelegation",
          "updateParams",
        ],
      },
    ],
    barrelOrder: 1,
  },

  // ---- distribution (barrelOrder 2) ----
  {
    file: "distribution.ts",
    queryFnName: "distributionQuery",
    txFnName: "distributionTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/distribution/v1beta1/query.rpc.func",
        functions: [
          "getParams",
          "getValidatorDistributionInfo",
          "getValidatorOutstandingRewards",
          "getValidatorCommission",
          "getValidatorSlashes",
          "getDelegationRewards",
          "getDelegationTotalRewards",
          "getDelegatorValidators",
          "getDelegatorWithdrawAddress",
          "getCommunityPool",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/distribution/v1beta1/tx.rpc.func",
        functions: [
          "setWithdrawAddress",
          "withdrawDelegatorReward",
          "withdrawValidatorCommission",
          "fundCommunityPool",
          "updateParams",
          "communityPoolSpend",
          "depositValidatorRewardsPool",
        ],
      },
    ],
    barrelOrder: 2,
  },

  // ---- gov (barrelOrder 3) ----
  {
    file: "gov.ts",
    queryFnName: "govQuery",
    txFnName: "govTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/gov/v1/query.rpc.func",
        functions: [
          "getConstitution",
          "getProposal",
          "getProposals",
          "getVote",
          "getVotes",
          "getParams",
          "getDeposit",
          "getDeposits",
          "getTallyResult",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/gov/v1/tx.rpc.func",
        functions: [
          "submitProposal",
          "execLegacyContent",
          "vote",
          "voteWeighted",
          "deposit",
          "updateParams",
          "cancelProposal",
        ],
      },
    ],
    barrelOrder: 3,
  },

  // ---- auth (barrelOrder 4) ----
  {
    file: "auth.ts",
    queryFnName: "authQuery",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/auth/v1beta1/query.rpc.func",
        functions: [
          "getAccounts",
          "getAccount",
          "getAccountAddressByID",
          "getParams",
          "getModuleAccounts",
          "getModuleAccountByName",
          "getBech32Prefix",
          "getAddressBytesToString",
          "getAddressStringToBytes",
          "getAccountInfo",
        ],
      },
    ],
    txSources: [],
    barrelOrder: 4,
  },

  // ---- authz (barrelOrder 5) ----
  {
    file: "authz.ts",
    queryFnName: "authzQuery",
    txFnName: "authzTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/authz/v1beta1/query.rpc.func",
        functions: ["getGrants", "getGranterGrants", "getGranteeGrants"],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/authz/v1beta1/tx.rpc.func",
        functions: ["grant", "exec", "revoke"],
      },
    ],
    barrelOrder: 5,
  },

  // ---- feegrant (barrelOrder 6) ----
  {
    file: "feegrant.ts",
    queryFnName: "feegrantQuery",
    txFnName: "feegrantTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/feegrant/v1beta1/query.rpc.func",
        functions: ["getAllowance", "getAllowances", "getAllowancesByGranter"],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/feegrant/v1beta1/tx.rpc.func",
        functions: ["grantAllowance", "revokeAllowance", "pruneAllowances"],
      },
    ],
    barrelOrder: 6,
  },

  // ---- slashing (barrelOrder 7) ----
  {
    file: "slashing.ts",
    queryFnName: "slashingQuery",
    txFnName: "slashingTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/slashing/v1beta1/query.rpc.func",
        functions: ["getParams", "getSigningInfo", "getSigningInfos"],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/slashing/v1beta1/tx.rpc.func",
        functions: ["unjail", "updateParams"],
      },
    ],
    barrelOrder: 7,
  },

  // ---- mint (barrelOrder 8) ----
  {
    file: "mint.ts",
    queryFnName: "mintQuery",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/mint/v1beta1/query.rpc.func",
        functions: ["getParams", "getInflation", "getAnnualProvisions"],
      },
    ],
    txSources: [],
    barrelOrder: 8,
  },

  // ---- upgrade (barrelOrder 9) ----
  {
    file: "upgrade.ts",
    queryFnName: "upgradeQuery",
    txFnName: "upgradeTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/upgrade/v1beta1/query.rpc.func",
        functions: [
          "getCurrentPlan",
          "getAppliedPlan",
          "getUpgradedConsensusState",
          "getModuleVersions",
          "getAuthority",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/upgrade/v1beta1/tx.rpc.func",
        functions: ["softwareUpgrade", "cancelUpgrade"],
      },
    ],
    barrelOrder: 9,
  },

  // ---- group (barrelOrder 10) ----
  {
    file: "group.ts",
    queryFnName: "groupQuery",
    txFnName: "groupTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmos/group/v1/query.rpc.func",
        functions: [
          "getGroupInfo",
          "getGroupPolicyInfo",
          "getGroupMembers",
          "getGroupsByAdmin",
          "getGroupPoliciesByGroup",
          "getGroupPoliciesByAdmin",
          "getProposal",
          "getProposalsByGroupPolicy",
          "getVoteByProposalVoter",
          "getVotesByProposal",
          "getVotesByVoter",
          "getGroupsByMember",
          "getTallyResult",
          "getGroups",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/group/v1/tx.rpc.func",
        functions: [
          "createGroup",
          "updateGroupMembers",
          "updateGroupAdmin",
          "updateGroupMetadata",
          "createGroupPolicy",
          "createGroupWithPolicy",
          "updateGroupPolicyAdmin",
          "updateGroupPolicyDecisionPolicy",
          "updateGroupPolicyMetadata",
          "submitProposal",
          "withdrawProposal",
          "vote",
          "exec",
          "leaveGroup",
        ],
      },
    ],
    barrelOrder: 10,
  },

  // ---- vesting (barrelOrder 11) ----
  {
    file: "vesting.ts",
    txFnName: "vestingTx",
    querySources: [],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmos/vesting/v1beta1/tx.rpc.func",
        functions: [
          "createVestingAccount",
          "createPermanentLockedAccount",
          "createPeriodicVestingAccount",
        ],
      },
    ],
    barrelOrder: 11,
  },

  // ---- fantoken (barrelOrder 12) ----
  {
    file: "fantoken.ts",
    queryFnName: "fantokenQuery",
    txFnName: "fantokenTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/bitsong/fantoken/v1beta1/query.rpc.func",
        functions: ["getFanToken", "getFanTokens", "getParams"],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/bitsong/fantoken/v1beta1/tx.rpc.func",
        functions: [
          "issue",
          "mint",
          "burn",
          "disableMint",
          "setMinter",
          "setAuthority",
          "setUri",
        ],
      },
    ],
    barrelOrder: 12,
  },

  // ---- cadence (barrelOrder 13) ----
  {
    file: "cadence.ts",
    queryFnName: "cadenceQuery",
    txFnName: "cadenceTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/bitsong/cadence/v1/query.rpc.func",
        functions: ["getParams", "getCadenceContract", "getCadenceContracts"],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/bitsong/cadence/v1/tx.rpc.func",
        functions: [
          "registerCadenceContract",
          "unregisterCadenceContract",
          "unjailCadenceContract",
          "updateParams",
        ],
      },
    ],
    barrelOrder: 13,
  },

  // ---- wasm (barrelOrder 14) ----
  {
    file: "wasm.ts",
    queryFnName: "wasmQuery",
    txFnName: "wasmTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/cosmwasm/wasm/v1/query.rpc.func",
        functions: [
          "getContractInfo",
          "getContractHistory",
          "getContractsByCode",
          "getAllContractState",
          "getRawContractState",
          "getSmartContractState",
          "getCode",
          "getCodes",
          "getPinnedCodes",
          "getParams",
          "getContractsByCreator",
          "getBuildAddress",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/cosmwasm/wasm/v1/tx.rpc.func",
        functions: [
          "storeCode",
          "instantiateContract",
          "instantiateContract2",
          "executeContract",
          "migrateContract",
          "updateAdmin",
          "clearAdmin",
          "updateInstantiateConfig",
          "updateParams",
          "sudoContract",
          "pinCodes",
          "unpinCodes",
          "storeAndInstantiateContract",
          "storeAndMigrateContract",
          "addCodeUploadParamsAddresses",
          "removeCodeUploadParamsAddresses",
          "updateContractLabel",
        ],
      },
    ],
    barrelOrder: 14,
  },

  // ---- ibc-transfer (barrelOrder 15) ----
  {
    file: "ibc-transfer.ts",
    queryFnName: "ibcTransferQuery",
    txFnName: "ibcTransferTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/ibc/applications/transfer/v1/query.rpc.func",
        functions: [
          "getDenomTraces",
          "getDenomTrace",
          "getParams",
          "getDenomHash",
          "getEscrowAddress",
          "getTotalEscrowForDenom",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/ibc/applications/transfer/v1/tx.rpc.func",
        functions: ["transfer", "updateParams"],
      },
    ],
    barrelOrder: 15,
  },

  // ---- hyperlane (barrelOrder 16) ----
  {
    file: "hyperlane.ts",
    queryFnName: "hyperlaneQuery",
    txFnName: "hyperlaneTx",
    querySources: [
      {
        path: "@bitsongjs/telescope/hyperlane/core/v1/query.rpc.func",
        sectionComment: "Core v1",
        functions: [
          "getMailbox",
          "getMailboxes",
          "getDelivered",
          "getRecipientIsm",
          "getRegisteredApps",
          "getRegisteredHooks",
          "getRegisteredISMs",
          "getVerifyDryRun",
        ],
      },
      {
        path: "@bitsongjs/telescope/hyperlane/core/interchain_security/v1/query.rpc.func",
        sectionComment: "Interchain Security",
        functions: [
          "getIsm",
          "getIsms",
          "getAnnouncedStorageLocations",
          "getLatestAnnouncedStorageLocation",
        ],
      },
      {
        path: "@bitsongjs/telescope/hyperlane/core/post_dispatch/v1/query.rpc.func",
        sectionComment: "Post Dispatch",
        functions: [
          "getIgp",
          "getIgps",
          "getDestinationGasConfigs",
          "getQuoteGasPayment",
          "getMerkleTreeHook",
          "getMerkleTreeHooks",
          "getNoopHook",
          "getNoopHooks",
        ],
      },
      {
        path: "@bitsongjs/telescope/hyperlane/warp/v1/query.rpc.func",
        sectionComment: "Warp",
        functions: [
          "getToken",
          "getTokens",
          "getRemoteRouters",
          "getBridgedSupply",
          "getQuoteRemoteTransfer",
        ],
      },
    ],
    txSources: [
      {
        path: "@bitsongjs/telescope/hyperlane/core/v1/tx.rpc.func",
        sectionComment: "Core v1",
        functions: ["createMailbox", "processMessage", "setMailbox"],
      },
      {
        path: "@bitsongjs/telescope/hyperlane/core/interchain_security/v1/tx.rpc.func",
        sectionComment: "Interchain Security",
        functions: [
          "createMerkleRootMultisigIsm",
          "createMessageIdMultisigIsm",
          "createNoopIsm",
          "createRoutingIsm",
          "setRoutingIsmDomain",
          "removeRoutingIsmDomain",
          "updateRoutingIsmOwner",
          "announceValidator",
        ],
      },
      {
        path: "@bitsongjs/telescope/hyperlane/core/post_dispatch/v1/tx.rpc.func",
        sectionComment: "Post Dispatch",
        functions: [
          "createIgp",
          "setDestinationGasConfig",
          "setIgpOwner",
          "payForGas",
          "claim",
          "createMerkleTreeHook",
          "createNoopHook",
        ],
      },
      {
        path: "@bitsongjs/telescope/hyperlane/warp/v1/tx.rpc.func",
        sectionComment: "Warp",
        functions: [
          "createCollateralToken",
          "createSyntheticToken",
          "enrollRemoteRouter",
          "unrollRemoteRouter",
          "remoteTransfer",
          "setToken",
        ],
      },
    ],
    barrelOrder: 16,
  },
];
