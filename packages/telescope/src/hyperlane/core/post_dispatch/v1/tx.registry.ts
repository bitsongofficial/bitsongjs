import { TelescopeGeneratedType } from "../../../../types";
import { MsgCreateIgp, MsgSetIgpOwner, MsgSetDestinationGasConfig, MsgPayForGas, MsgClaim, MsgCreateMerkleTreeHook, MsgCreateNoopHook } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/hyperlane.core.post_dispatch.v1.MsgCreateIgp", MsgCreateIgp], ["/hyperlane.core.post_dispatch.v1.MsgSetIgpOwner", MsgSetIgpOwner], ["/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig", MsgSetDestinationGasConfig], ["/hyperlane.core.post_dispatch.v1.MsgPayForGas", MsgPayForGas], ["/hyperlane.core.post_dispatch.v1.MsgClaim", MsgClaim], ["/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook", MsgCreateMerkleTreeHook], ["/hyperlane.core.post_dispatch.v1.MsgCreateNoopHook", MsgCreateNoopHook]];
export const MessageComposer = {
  encoded: {
    createIgp(value: MsgCreateIgp) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgp",
        value: MsgCreateIgp.encode(value).finish()
      };
    },
    setIgpOwner(value: MsgSetIgpOwner) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwner",
        value: MsgSetIgpOwner.encode(value).finish()
      };
    },
    setDestinationGasConfig(value: MsgSetDestinationGasConfig) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig",
        value: MsgSetDestinationGasConfig.encode(value).finish()
      };
    },
    payForGas(value: MsgPayForGas) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGas",
        value: MsgPayForGas.encode(value).finish()
      };
    },
    claim(value: MsgClaim) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    },
    createMerkleTreeHook(value: MsgCreateMerkleTreeHook) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook",
        value: MsgCreateMerkleTreeHook.encode(value).finish()
      };
    },
    createNoopHook(value: MsgCreateNoopHook) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHook",
        value: MsgCreateNoopHook.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createIgp(value: MsgCreateIgp) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgp",
        value
      };
    },
    setIgpOwner(value: MsgSetIgpOwner) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwner",
        value
      };
    },
    setDestinationGasConfig(value: MsgSetDestinationGasConfig) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig",
        value
      };
    },
    payForGas(value: MsgPayForGas) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGas",
        value
      };
    },
    claim(value: MsgClaim) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaim",
        value
      };
    },
    createMerkleTreeHook(value: MsgCreateMerkleTreeHook) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook",
        value
      };
    },
    createNoopHook(value: MsgCreateNoopHook) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHook",
        value
      };
    }
  },
  fromPartial: {
    createIgp(value: MsgCreateIgp) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateIgp",
        value: MsgCreateIgp.fromPartial(value)
      };
    },
    setIgpOwner(value: MsgSetIgpOwner) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetIgpOwner",
        value: MsgSetIgpOwner.fromPartial(value)
      };
    },
    setDestinationGasConfig(value: MsgSetDestinationGasConfig) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgSetDestinationGasConfig",
        value: MsgSetDestinationGasConfig.fromPartial(value)
      };
    },
    payForGas(value: MsgPayForGas) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgPayForGas",
        value: MsgPayForGas.fromPartial(value)
      };
    },
    claim(value: MsgClaim) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    },
    createMerkleTreeHook(value: MsgCreateMerkleTreeHook) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateMerkleTreeHook",
        value: MsgCreateMerkleTreeHook.fromPartial(value)
      };
    },
    createNoopHook(value: MsgCreateNoopHook) {
      return {
        typeUrl: "/hyperlane.core.post_dispatch.v1.MsgCreateNoopHook",
        value: MsgCreateNoopHook.fromPartial(value)
      };
    }
  }
};