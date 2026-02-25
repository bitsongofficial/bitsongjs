import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateMailbox, MsgSetMailbox, MsgProcessMessage } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/hyperlane.core.v1.MsgCreateMailbox", MsgCreateMailbox], ["/hyperlane.core.v1.MsgSetMailbox", MsgSetMailbox], ["/hyperlane.core.v1.MsgProcessMessage", MsgProcessMessage]];
export const MessageComposer = {
  encoded: {
    createMailbox(value: MsgCreateMailbox) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgCreateMailbox",
        value: MsgCreateMailbox.encode(value).finish()
      };
    },
    setMailbox(value: MsgSetMailbox) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgSetMailbox",
        value: MsgSetMailbox.encode(value).finish()
      };
    },
    processMessage(value: MsgProcessMessage) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgProcessMessage",
        value: MsgProcessMessage.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createMailbox(value: MsgCreateMailbox) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgCreateMailbox",
        value
      };
    },
    setMailbox(value: MsgSetMailbox) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgSetMailbox",
        value
      };
    },
    processMessage(value: MsgProcessMessage) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgProcessMessage",
        value
      };
    }
  },
  fromPartial: {
    createMailbox(value: MsgCreateMailbox) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgCreateMailbox",
        value: MsgCreateMailbox.fromPartial(value)
      };
    },
    setMailbox(value: MsgSetMailbox) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgSetMailbox",
        value: MsgSetMailbox.fromPartial(value)
      };
    },
    processMessage(value: MsgProcessMessage) {
      return {
        typeUrl: "/hyperlane.core.v1.MsgProcessMessage",
        value: MsgProcessMessage.fromPartial(value)
      };
    }
  }
};