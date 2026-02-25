import { TelescopeGeneratedType } from "../../../../types";
import { MsgCreateMessageIdMultisigIsm, MsgCreateMerkleRootMultisigIsm, MsgCreateNoopIsm, MsgCreateRoutingIsm, MsgSetRoutingIsmDomain, MsgRemoveRoutingIsmDomain, MsgUpdateRoutingIsmOwner, MsgAnnounceValidator } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm", MsgCreateMessageIdMultisigIsm], ["/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm", MsgCreateMerkleRootMultisigIsm], ["/hyperlane.core.interchain_security.v1.MsgCreateNoopIsm", MsgCreateNoopIsm], ["/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm", MsgCreateRoutingIsm], ["/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain", MsgSetRoutingIsmDomain], ["/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain", MsgRemoveRoutingIsmDomain], ["/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner", MsgUpdateRoutingIsmOwner], ["/hyperlane.core.interchain_security.v1.MsgAnnounceValidator", MsgAnnounceValidator]];
export const MessageComposer = {
  encoded: {
    createMessageIdMultisigIsm(value: MsgCreateMessageIdMultisigIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm",
        value: MsgCreateMessageIdMultisigIsm.encode(value).finish()
      };
    },
    createMerkleRootMultisigIsm(value: MsgCreateMerkleRootMultisigIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm",
        value: MsgCreateMerkleRootMultisigIsm.encode(value).finish()
      };
    },
    createNoopIsm(value: MsgCreateNoopIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsm",
        value: MsgCreateNoopIsm.encode(value).finish()
      };
    },
    createRoutingIsm(value: MsgCreateRoutingIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm",
        value: MsgCreateRoutingIsm.encode(value).finish()
      };
    },
    setRoutingIsmDomain(value: MsgSetRoutingIsmDomain) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain",
        value: MsgSetRoutingIsmDomain.encode(value).finish()
      };
    },
    removeRoutingIsmDomain(value: MsgRemoveRoutingIsmDomain) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain",
        value: MsgRemoveRoutingIsmDomain.encode(value).finish()
      };
    },
    updateRoutingIsmOwner(value: MsgUpdateRoutingIsmOwner) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner",
        value: MsgUpdateRoutingIsmOwner.encode(value).finish()
      };
    },
    announceValidator(value: MsgAnnounceValidator) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidator",
        value: MsgAnnounceValidator.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createMessageIdMultisigIsm(value: MsgCreateMessageIdMultisigIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm",
        value
      };
    },
    createMerkleRootMultisigIsm(value: MsgCreateMerkleRootMultisigIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm",
        value
      };
    },
    createNoopIsm(value: MsgCreateNoopIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsm",
        value
      };
    },
    createRoutingIsm(value: MsgCreateRoutingIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm",
        value
      };
    },
    setRoutingIsmDomain(value: MsgSetRoutingIsmDomain) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain",
        value
      };
    },
    removeRoutingIsmDomain(value: MsgRemoveRoutingIsmDomain) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain",
        value
      };
    },
    updateRoutingIsmOwner(value: MsgUpdateRoutingIsmOwner) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner",
        value
      };
    },
    announceValidator(value: MsgAnnounceValidator) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidator",
        value
      };
    }
  },
  fromPartial: {
    createMessageIdMultisigIsm(value: MsgCreateMessageIdMultisigIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMessageIdMultisigIsm",
        value: MsgCreateMessageIdMultisigIsm.fromPartial(value)
      };
    },
    createMerkleRootMultisigIsm(value: MsgCreateMerkleRootMultisigIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateMerkleRootMultisigIsm",
        value: MsgCreateMerkleRootMultisigIsm.fromPartial(value)
      };
    },
    createNoopIsm(value: MsgCreateNoopIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateNoopIsm",
        value: MsgCreateNoopIsm.fromPartial(value)
      };
    },
    createRoutingIsm(value: MsgCreateRoutingIsm) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgCreateRoutingIsm",
        value: MsgCreateRoutingIsm.fromPartial(value)
      };
    },
    setRoutingIsmDomain(value: MsgSetRoutingIsmDomain) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgSetRoutingIsmDomain",
        value: MsgSetRoutingIsmDomain.fromPartial(value)
      };
    },
    removeRoutingIsmDomain(value: MsgRemoveRoutingIsmDomain) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgRemoveRoutingIsmDomain",
        value: MsgRemoveRoutingIsmDomain.fromPartial(value)
      };
    },
    updateRoutingIsmOwner(value: MsgUpdateRoutingIsmOwner) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgUpdateRoutingIsmOwner",
        value: MsgUpdateRoutingIsmOwner.fromPartial(value)
      };
    },
    announceValidator(value: MsgAnnounceValidator) {
      return {
        typeUrl: "/hyperlane.core.interchain_security.v1.MsgAnnounceValidator",
        value: MsgAnnounceValidator.fromPartial(value)
      };
    }
  }
};