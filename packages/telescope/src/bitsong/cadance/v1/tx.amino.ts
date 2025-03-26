import { MsgRegisterCadanceContract, MsgUnregisterCadanceContract, MsgUnjailCadanceContract, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/bitsong.cadance.v1.MsgRegisterCadanceContract": {
    aminoType: "/bitsong.cadance.v1.MsgRegisterCadanceContract",
    toAmino: MsgRegisterCadanceContract.toAmino,
    fromAmino: MsgRegisterCadanceContract.fromAmino
  },
  "/bitsong.cadance.v1.MsgUnregisterCadanceContract": {
    aminoType: "/bitsong.cadance.v1.MsgUnregisterCadanceContract",
    toAmino: MsgUnregisterCadanceContract.toAmino,
    fromAmino: MsgUnregisterCadanceContract.fromAmino
  },
  "/bitsong.cadance.v1.MsgUnjailCadanceContract": {
    aminoType: "/bitsong.cadance.v1.MsgUnjailCadanceContract",
    toAmino: MsgUnjailCadanceContract.toAmino,
    fromAmino: MsgUnjailCadanceContract.fromAmino
  },
  "/bitsong.cadance.v1.MsgUpdateParams": {
    aminoType: "/bitsong.cadance.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};