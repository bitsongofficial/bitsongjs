/**
 * Example 16: Authz — Authorization Grants
 *
 * The authz module lets one account grant another account
 * permission to execute specific messages on its behalf.
 * This is useful for bots, DAOs, and delegated operations.
 */
import { createClient } from "@bitsongjs/sdk";

const MNEMONIC = "your mnemonic here ...";

async function main() {
  const client = await createClient({
    chain: "testnet",
    signer: MNEMONIC,
  });

  const grantee = "bitsong1bot..."; // The account receiving permission

  // Grant permission to send tokens on our behalf
  const grantResult = await client.tx.authz.grant({
    granter: client.address,
    grantee,
    grant: {
      authorization: {
        typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        value: new Uint8Array(), // encoded authorization
      },
      // Expiration is a Date — 30 days from now
      expiration: new Date(Date.now() + 86400 * 30 * 1000),
    },
  });
  console.log("Grant tx:", grantResult.transactionHash);

  // Query grants given by our account
  const granterGrants = await client.query.authz.getGranterGrants({
    granter: client.address,
    pagination: undefined,
  });
  console.log("Active grants:", granterGrants.grants.length);

  // Query grants received by the grantee
  const granteeGrants = await client.query.authz.getGranteeGrants({
    grantee,
    pagination: undefined,
  });
  console.log("Grantee's grants:", granteeGrants.grants.length);

  // Query a specific grant
  const specificGrant = await client.query.authz.getGrants({
    granter: client.address,
    grantee,
    msgTypeUrl: "/cosmos.bank.v1beta1.MsgSend",
    pagination: undefined,
  });
  console.log("Specific grant:", specificGrant.grants);

  // Revoke the grant
  const revokeResult = await client.tx.authz.revoke({
    granter: client.address,
    grantee,
    msgTypeUrl: "/cosmos.bank.v1beta1.MsgSend",
  });
  console.log("Revoke tx:", revokeResult.transactionHash);
}

main().catch(console.error);
