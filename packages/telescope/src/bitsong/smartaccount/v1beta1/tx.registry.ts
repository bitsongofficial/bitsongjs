import { TelescopeGeneratedType } from "../../../types";
import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/bitsong.smartaccount.v1beta1.MsgAddAuthenticator", MsgAddAuthenticator], ["/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator", MsgRemoveAuthenticator], ["/bitsong.smartaccount.v1beta1.MsgSetActiveState", MsgSetActiveState]];
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