import { MsgAddAuthenticator, MsgRemoveAuthenticator, MsgSetActiveState } from "./tx";
export const AminoConverter = {
  "/bitsong.smartaccount.v1beta1.MsgAddAuthenticator": {
    aminoType: "bitsong/smartaccount/add-authenticator",
    toAmino: MsgAddAuthenticator.toAmino,
    fromAmino: MsgAddAuthenticator.fromAmino
  },
  "/bitsong.smartaccount.v1beta1.MsgRemoveAuthenticator": {
    aminoType: "bitsong/smartaccount/remove-authenticator",
    toAmino: MsgRemoveAuthenticator.toAmino,
    fromAmino: MsgRemoveAuthenticator.fromAmino
  },
  "/bitsong.smartaccount.v1beta1.MsgSetActiveState": {
    aminoType: "bitsong/smartaccount/set-active-state",
    toAmino: MsgSetActiveState.toAmino,
    fromAmino: MsgSetActiveState.fromAmino
  }
};