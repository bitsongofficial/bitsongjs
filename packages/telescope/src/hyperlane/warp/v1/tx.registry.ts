import { TelescopeGeneratedType } from "../../../types";
import { MsgCreateCollateralToken, MsgCreateSyntheticToken, MsgSetToken, MsgEnrollRemoteRouter, MsgUnrollRemoteRouter, MsgRemoteTransfer } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/hyperlane.warp.v1.MsgCreateCollateralToken", MsgCreateCollateralToken], ["/hyperlane.warp.v1.MsgCreateSyntheticToken", MsgCreateSyntheticToken], ["/hyperlane.warp.v1.MsgSetToken", MsgSetToken], ["/hyperlane.warp.v1.MsgEnrollRemoteRouter", MsgEnrollRemoteRouter], ["/hyperlane.warp.v1.MsgUnrollRemoteRouter", MsgUnrollRemoteRouter], ["/hyperlane.warp.v1.MsgRemoteTransfer", MsgRemoteTransfer]];
export const MessageComposer = {
  encoded: {
    createCollateralToken(value: MsgCreateCollateralToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralToken",
        value: MsgCreateCollateralToken.encode(value).finish()
      };
    },
    createSyntheticToken(value: MsgCreateSyntheticToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticToken",
        value: MsgCreateSyntheticToken.encode(value).finish()
      };
    },
    setToken(value: MsgSetToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgSetToken",
        value: MsgSetToken.encode(value).finish()
      };
    },
    enrollRemoteRouter(value: MsgEnrollRemoteRouter) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouter",
        value: MsgEnrollRemoteRouter.encode(value).finish()
      };
    },
    unrollRemoteRouter(value: MsgUnrollRemoteRouter) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouter",
        value: MsgUnrollRemoteRouter.encode(value).finish()
      };
    },
    remoteTransfer(value: MsgRemoteTransfer) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgRemoteTransfer",
        value: MsgRemoteTransfer.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createCollateralToken(value: MsgCreateCollateralToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralToken",
        value
      };
    },
    createSyntheticToken(value: MsgCreateSyntheticToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticToken",
        value
      };
    },
    setToken(value: MsgSetToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgSetToken",
        value
      };
    },
    enrollRemoteRouter(value: MsgEnrollRemoteRouter) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouter",
        value
      };
    },
    unrollRemoteRouter(value: MsgUnrollRemoteRouter) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouter",
        value
      };
    },
    remoteTransfer(value: MsgRemoteTransfer) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgRemoteTransfer",
        value
      };
    }
  },
  fromPartial: {
    createCollateralToken(value: MsgCreateCollateralToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgCreateCollateralToken",
        value: MsgCreateCollateralToken.fromPartial(value)
      };
    },
    createSyntheticToken(value: MsgCreateSyntheticToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgCreateSyntheticToken",
        value: MsgCreateSyntheticToken.fromPartial(value)
      };
    },
    setToken(value: MsgSetToken) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgSetToken",
        value: MsgSetToken.fromPartial(value)
      };
    },
    enrollRemoteRouter(value: MsgEnrollRemoteRouter) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgEnrollRemoteRouter",
        value: MsgEnrollRemoteRouter.fromPartial(value)
      };
    },
    unrollRemoteRouter(value: MsgUnrollRemoteRouter) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgUnrollRemoteRouter",
        value: MsgUnrollRemoteRouter.fromPartial(value)
      };
    },
    remoteTransfer(value: MsgRemoteTransfer) {
      return {
        typeUrl: "/hyperlane.warp.v1.MsgRemoteTransfer",
        value: MsgRemoteTransfer.fromPartial(value)
      };
    }
  }
};