import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterCadanceContract, MsgUnregisterCadanceContract, MsgUnjailCadanceContract, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/bitsong.cadance.v1.MsgRegisterCadanceContract", MsgRegisterCadanceContract], ["/bitsong.cadance.v1.MsgUnregisterCadanceContract", MsgUnregisterCadanceContract], ["/bitsong.cadance.v1.MsgUnjailCadanceContract", MsgUnjailCadanceContract], ["/bitsong.cadance.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerCadanceContract(value: MsgRegisterCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContract",
        value: MsgRegisterCadanceContract.encode(value).finish()
      };
    },
    unregisterCadanceContract(value: MsgUnregisterCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContract",
        value: MsgUnregisterCadanceContract.encode(value).finish()
      };
    },
    unjailCadanceContract(value: MsgUnjailCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContract",
        value: MsgUnjailCadanceContract.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerCadanceContract(value: MsgRegisterCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContract",
        value
      };
    },
    unregisterCadanceContract(value: MsgUnregisterCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContract",
        value
      };
    },
    unjailCadanceContract(value: MsgUnjailCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContract",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromPartial: {
    registerCadanceContract(value: MsgRegisterCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgRegisterCadanceContract",
        value: MsgRegisterCadanceContract.fromPartial(value)
      };
    },
    unregisterCadanceContract(value: MsgUnregisterCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUnregisterCadanceContract",
        value: MsgUnregisterCadanceContract.fromPartial(value)
      };
    },
    unjailCadanceContract(value: MsgUnjailCadanceContract) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUnjailCadanceContract",
        value: MsgUnjailCadanceContract.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/bitsong.cadance.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};