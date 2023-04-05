import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bitsong.fantoken.v1beta1.MsgIssue", MsgIssue], ["/bitsong.fantoken.v1beta1.MsgMint", MsgMint], ["/bitsong.fantoken.v1beta1.MsgBurn", MsgBurn], ["/bitsong.fantoken.v1beta1.MsgDisableMint", MsgDisableMint], ["/bitsong.fantoken.v1beta1.MsgSetMinter", MsgSetMinter], ["/bitsong.fantoken.v1beta1.MsgSetAuthority", MsgSetAuthority], ["/bitsong.fantoken.v1beta1.MsgSetUri", MsgSetUri]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    issue(value: MsgIssue) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgIssue",
        value: MsgIssue.encode(value).finish()
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },

    disableMint(value: MsgDisableMint) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMint",
        value: MsgDisableMint.encode(value).finish()
      };
    },

    setMinter(value: MsgSetMinter) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinter",
        value: MsgSetMinter.encode(value).finish()
      };
    },

    setAuthority(value: MsgSetAuthority) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthority",
        value: MsgSetAuthority.encode(value).finish()
      };
    },

    setUri(value: MsgSetUri) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUri",
        value: MsgSetUri.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    issue(value: MsgIssue) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgIssue",
        value
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgMint",
        value
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgBurn",
        value
      };
    },

    disableMint(value: MsgDisableMint) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMint",
        value
      };
    },

    setMinter(value: MsgSetMinter) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinter",
        value
      };
    },

    setAuthority(value: MsgSetAuthority) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthority",
        value
      };
    },

    setUri(value: MsgSetUri) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUri",
        value
      };
    }

  },
  fromPartial: {
    issue(value: MsgIssue) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgIssue",
        value: MsgIssue.fromPartial(value)
      };
    },

    mint(value: MsgMint) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },

    burn(value: MsgBurn) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },

    disableMint(value: MsgDisableMint) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMint",
        value: MsgDisableMint.fromPartial(value)
      };
    },

    setMinter(value: MsgSetMinter) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinter",
        value: MsgSetMinter.fromPartial(value)
      };
    },

    setAuthority(value: MsgSetAuthority) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthority",
        value: MsgSetAuthority.fromPartial(value)
      };
    },

    setUri(value: MsgSetUri) {
      return {
        typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUri",
        value: MsgSetUri.fromPartial(value)
      };
    }

  }
};