/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Duration = {
  height: number;
} | {
  time: number;
};
export type Threshold = {
  absolute_count: {
    weight: number;
  };
} | {
  absolute_percentage: {
    percentage: Decimal;
  };
} | {
  threshold_quorum: {
    quorum: Decimal;
    threshold: Decimal;
  };
};
export type Decimal = string;
export interface InstantiateMsg {
  max_voting_period: Duration;
  threshold: Threshold;
  voters: Voter[];
}
export interface Voter {
  addr: string;
  weight: number;
}
export type ExecuteMsg = {
  propose: {
    description: string;
    latest?: Expiration | null;
    msgs: CosmosMsgForEmpty[];
    title: string;
  };
} | {
  vote: {
    proposal_id: number;
    vote: Vote;
  };
} | {
  execute: {
    proposal_id: number;
  };
} | {
  close: {
    proposal_id: number;
  };
};
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  wasm: WasmMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
    [k: string]: unknown;
  };
} | {
  burn: {
    amount: Coin[];
    [k: string]: unknown;
  };
};
export type Uint128 = string;
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
    [k: string]: unknown;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
    [k: string]: unknown;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
    [k: string]: unknown;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
    [k: string]: unknown;
  };
};
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
    [k: string]: unknown;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
    [k: string]: unknown;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
    [k: string]: unknown;
  };
} | {
  clear_admin: {
    contract_addr: string;
    [k: string]: unknown;
  };
};
export type Binary = string;
export type Vote = "yes" | "no" | "abstain" | "veto";
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Empty {
  [k: string]: unknown;
}
export type QueryMsg = {
  threshold: {};
} | {
  proposal: {
    proposal_id: number;
  };
} | {
  list_proposals: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  reverse_proposals: {
    limit?: number | null;
    start_before?: number | null;
  };
} | {
  vote: {
    proposal_id: number;
    voter: string;
  };
} | {
  list_votes: {
    limit?: number | null;
    proposal_id: number;
    start_after?: string | null;
  };
} | {
  voter: {
    address: string;
  };
} | {
  list_voters: {
    limit?: number | null;
    start_after?: string | null;
  };
};
export type Status = "pending" | "open" | "rejected" | "passed" | "executed";
export type ThresholdResponse = {
  absolute_count: {
    total_weight: number;
    weight: number;
  };
} | {
  absolute_percentage: {
    percentage: Decimal;
    total_weight: number;
  };
} | {
  threshold_quorum: {
    quorum: Decimal;
    threshold: Decimal;
    total_weight: number;
  };
};
export interface ProposalListResponseForEmpty {
  proposals: ProposalResponseForEmpty[];
}
export interface ProposalResponseForEmpty {
  description: string;
  expires: Expiration;
  id: number;
  msgs: CosmosMsgForEmpty[];
  status: Status;
  threshold: ThresholdResponse;
  title: string;
}
export interface VoterListResponse {
  voters: VoterDetail[];
}
export interface VoterDetail {
  addr: string;
  weight: number;
}
export interface VoteListResponse {
  votes: VoteInfo[];
}
export interface VoteInfo {
  proposal_id: number;
  vote: Vote;
  voter: string;
  weight: number;
}
export interface VoteResponse {
  vote?: VoteInfo | null;
}
export interface VoterResponse {
  weight?: number | null;
}