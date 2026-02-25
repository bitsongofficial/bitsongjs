import { TelescopeGeneratedType } from "../../../types";
import { MsgRegisterCadenceContract, MsgUnregisterCadenceContract, MsgUnjailCadenceContract, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/bitsong.cadence.v1.MsgRegisterCadenceContract", MsgRegisterCadenceContract], ["/bitsong.cadence.v1.MsgUnregisterCadenceContract", MsgUnregisterCadenceContract], ["/bitsong.cadence.v1.MsgUnjailCadenceContract", MsgUnjailCadenceContract], ["/bitsong.cadence.v1.MsgUpdateParams", MsgUpdateParams]];
export const MessageComposer = {
  encoded: {
    registerCadenceContract(value: MsgRegisterCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContract",
        value: MsgRegisterCadenceContract.encode(value).finish()
      };
    },
    unregisterCadenceContract(value: MsgUnregisterCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContract",
        value: MsgUnregisterCadenceContract.encode(value).finish()
      };
    },
    unjailCadenceContract(value: MsgUnjailCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContract",
        value: MsgUnjailCadenceContract.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerCadenceContract(value: MsgRegisterCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContract",
        value
      };
    },
    unregisterCadenceContract(value: MsgUnregisterCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContract",
        value
      };
    },
    unjailCadenceContract(value: MsgUnjailCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContract",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerCadenceContract(value: MsgRegisterCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgRegisterCadenceContract",
        value: MsgRegisterCadenceContract.fromPartial(value)
      };
    },
    unregisterCadenceContract(value: MsgUnregisterCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUnregisterCadenceContract",
        value: MsgUnregisterCadenceContract.fromPartial(value)
      };
    },
    unjailCadenceContract(value: MsgUnjailCadenceContract) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUnjailCadenceContract",
        value: MsgUnjailCadenceContract.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bitsong.cadence.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};