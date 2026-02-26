/**
 * Example 07: Governance — Proposals and Voting
 *
 * Demonstrates querying proposals, submitting a text proposal,
 * depositing, and voting.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  // Query all proposals in voting period
  const { proposals } = await client.query.gov.getProposals({
    proposalStatus: 2, // PROPOSAL_STATUS_VOTING_PERIOD
    voter: "",
    depositor: "",
    pagination: undefined,
  });
  console.log(`${proposals.length} proposals in voting period`);

  // Query a specific proposal
  if (proposals.length > 0) {
    const proposalId = proposals[0]!.id;
    const { proposal } = await client.query.gov.getProposal({ proposalId });
    console.log("Proposal title:", proposal?.title);
    console.log("Status:", proposal?.status);

    // Vote YES on the proposal
    const voteResult = await client.tx.gov.vote({
      proposalId,
      voter: client.address,
      option: 1, // VOTE_OPTION_YES
      metadata: "",
    });
    console.log("Vote tx:", voteResult.transactionHash);

    // Query tally
    const tally = await client.query.gov.getTallyResult({ proposalId });
    console.log("Tally:", tally.tally);
  }

  // Deposit on a proposal
  const depositResult = await client.tx.gov.deposit({
    proposalId: BigInt(1),
    depositor: client.address,
    amount: [{ denom: "ubtsg", amount: "10000000" }],
  });
  console.log("Deposit tx:", depositResult.transactionHash);
}

main().catch(console.error);
