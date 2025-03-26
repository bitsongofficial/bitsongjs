import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bitsong.smartaccount.v1beta1.MsgAddAuthenticator", MsgAddAuthenticator], ["/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator", MsgRemoveAuthenticator], ["/bitsong.smartaccount.v1beta1.MsgSetActiveState", MsgSetActiveState]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticator",
        value: MsgAddAuthenticator.encode(value).finish()
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator",
        value: MsgRemoveAuthenticator.encode(value).finish()
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveState",
        value: MsgSetActiveState.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticator",
        value
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator",
        value
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveState",
        value
      };
    }
  },
  fromPartial: {
    addAuthenticator(value: MsgAddAuthenticator) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgAddAuthenticator",
        value: MsgAddAuthenticator.fromPartial(value)
      };
    },
    removeAuthenticator(value: MsgRemoveAuthenticator) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator",
        value: MsgRemoveAuthenticator.fromPartial(value)
      };
    },
    setActiveState(value: MsgSetActiveState) {
      return {
        typeUrl: "/bitsong.smartaccount.v1beta1.MsgSetActiveState",
        value: MsgSetActiveState.fromPartial(value)
      };
    }
  }
};