import * as _18 from "./auth/module/v1/module";
import * as _19 from "./auth/v1beta1/auth";
import * as _20 from "./auth/v1beta1/genesis";
import * as _21 from "./auth/v1beta1/query";
import * as _22 from "./auth/v1beta1/tx";
import * as _23 from "./authz/module/v1/module";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./autocli/v1/options";
import * as _30 from "./autocli/v1/query";
import * as _31 from "./bank/module/v1/module";
import * as _32 from "./bank/v1beta1/authz";
import * as _33 from "./bank/v1beta1/bank";
import * as _34 from "./bank/v1beta1/genesis";
import * as _35 from "./bank/v1beta1/query";
import * as _36 from "./bank/v1beta1/tx";
import * as _37 from "./base/abci/v1beta1/abci";
import * as _38 from "./base/node/v1beta1/query";
import * as _39 from "./base/query/v1beta1/pagination";
import * as _40 from "./base/reflection/v2alpha1/reflection";
import * as _41 from "./base/v1beta1/coin";
import * as _42 from "./crypto/ed25519/keys";
import * as _43 from "./crypto/hd/v1/hd";
import * as _44 from "./crypto/keyring/v1/record";
import * as _45 from "./crypto/multisig/keys";
import * as _46 from "./crypto/secp256k1/keys";
import * as _47 from "./crypto/secp256r1/keys";
import * as _48 from "./distribution/module/v1/module";
import * as _49 from "./distribution/v1beta1/distribution";
import * as _50 from "./distribution/v1beta1/genesis";
import * as _51 from "./distribution/v1beta1/query";
import * as _52 from "./distribution/v1beta1/tx";
import * as _53 from "./gov/module/v1/module";
import * as _54 from "./gov/v1/genesis";
import * as _55 from "./gov/v1/gov";
import * as _56 from "./gov/v1/query";
import * as _57 from "./gov/v1/tx";
import * as _58 from "./gov/v1beta1/genesis";
import * as _59 from "./gov/v1beta1/gov";
import * as _60 from "./gov/v1beta1/query";
import * as _61 from "./gov/v1beta1/tx";
import * as _62 from "./ics23/v1/proofs";
import * as _63 from "./params/module/v1/module";
import * as _64 from "./params/v1beta1/params";
import * as _65 from "./params/v1beta1/query";
import * as _66 from "./query/v1/query";
import * as _67 from "./slashing/module/v1/module";
import * as _68 from "./slashing/v1beta1/genesis";
import * as _69 from "./slashing/v1beta1/query";
import * as _70 from "./slashing/v1beta1/slashing";
import * as _71 from "./slashing/v1beta1/tx";
import * as _72 from "./staking/module/v1/module";
import * as _73 from "./staking/v1beta1/authz";
import * as _74 from "./staking/v1beta1/genesis";
import * as _75 from "./staking/v1beta1/query";
import * as _76 from "./staking/v1beta1/staking";
import * as _77 from "./staking/v1beta1/tx";
import * as _78 from "./tx/config/v1/config";
import * as _79 from "./tx/signing/v1beta1/signing";
import * as _80 from "./tx/v1beta1/service";
import * as _81 from "./tx/v1beta1/tx";
import * as _82 from "./upgrade/module/v1/module";
import * as _83 from "./upgrade/v1beta1/query";
import * as _84 from "./upgrade/v1beta1/tx";
import * as _85 from "./upgrade/v1beta1/upgrade";
import * as _161 from "./auth/v1beta1/tx.amino";
import * as _162 from "./authz/v1beta1/tx.amino";
import * as _163 from "./bank/v1beta1/tx.amino";
import * as _164 from "./distribution/v1beta1/tx.amino";
import * as _165 from "./gov/v1/tx.amino";
import * as _166 from "./gov/v1beta1/tx.amino";
import * as _167 from "./slashing/v1beta1/tx.amino";
import * as _168 from "./staking/v1beta1/tx.amino";
import * as _169 from "./upgrade/v1beta1/tx.amino";
import * as _170 from "./auth/v1beta1/tx.registry";
import * as _171 from "./authz/v1beta1/tx.registry";
import * as _172 from "./bank/v1beta1/tx.registry";
import * as _173 from "./distribution/v1beta1/tx.registry";
import * as _174 from "./gov/v1/tx.registry";
import * as _175 from "./gov/v1beta1/tx.registry";
import * as _176 from "./slashing/v1beta1/tx.registry";
import * as _177 from "./staking/v1beta1/tx.registry";
import * as _178 from "./upgrade/v1beta1/tx.registry";
import * as _179 from "./auth/v1beta1/query.lcd";
import * as _180 from "./authz/v1beta1/query.lcd";
import * as _181 from "./bank/v1beta1/query.lcd";
import * as _182 from "./base/node/v1beta1/query.lcd";
import * as _183 from "./distribution/v1beta1/query.lcd";
import * as _184 from "./gov/v1/query.lcd";
import * as _185 from "./gov/v1beta1/query.lcd";
import * as _186 from "./params/v1beta1/query.lcd";
import * as _187 from "./slashing/v1beta1/query.lcd";
import * as _188 from "./staking/v1beta1/query.lcd";
import * as _189 from "./tx/v1beta1/service.lcd";
import * as _190 from "./upgrade/v1beta1/query.lcd";
import * as _191 from "./auth/v1beta1/query.rpc.Query";
import * as _192 from "./authz/v1beta1/query.rpc.Query";
import * as _193 from "./autocli/v1/query.rpc.Query";
import * as _194 from "./bank/v1beta1/query.rpc.Query";
import * as _195 from "./base/node/v1beta1/query.rpc.Service";
import * as _196 from "./distribution/v1beta1/query.rpc.Query";
import * as _197 from "./gov/v1/query.rpc.Query";
import * as _198 from "./gov/v1beta1/query.rpc.Query";
import * as _199 from "./params/v1beta1/query.rpc.Query";
import * as _200 from "./slashing/v1beta1/query.rpc.Query";
import * as _201 from "./staking/v1beta1/query.rpc.Query";
import * as _202 from "./tx/v1beta1/service.rpc.Service";
import * as _203 from "./upgrade/v1beta1/query.rpc.Query";
import * as _204 from "./auth/v1beta1/tx.rpc.msg";
import * as _205 from "./authz/v1beta1/tx.rpc.msg";
import * as _206 from "./bank/v1beta1/tx.rpc.msg";
import * as _207 from "./distribution/v1beta1/tx.rpc.msg";
import * as _208 from "./gov/v1/tx.rpc.msg";
import * as _209 from "./gov/v1beta1/tx.rpc.msg";
import * as _210 from "./slashing/v1beta1/tx.rpc.msg";
import * as _211 from "./staking/v1beta1/tx.rpc.msg";
import * as _212 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _256 from "./lcd";
import * as _257 from "./rpc.query";
import * as _258 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._18
      };
    }
    export const v1beta1 = {
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._161,
      ..._170,
      ..._179,
      ..._191,
      ..._204
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._23
      };
    }
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._162,
      ..._171,
      ..._180,
      ..._192,
      ..._205
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._29,
      ..._30,
      ..._193
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._31
      };
    }
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._163,
      ..._172,
      ..._181,
      ..._194,
      ..._206
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._37
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._38,
        ..._182,
        ..._195
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._39
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._40
      };
    }
    export const v1beta1 = {
      ..._41
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._42
    };
    export namespace hd {
      export const v1 = {
        ..._43
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._44
      };
    }
    export const multisig = {
      ..._45
    };
    export const secp256k1 = {
      ..._46
    };
    export const secp256r1 = {
      ..._47
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._48
      };
    }
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._164,
      ..._173,
      ..._183,
      ..._196,
      ..._207
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._53
      };
    }
    export const v1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._165,
      ..._174,
      ..._184,
      ..._197,
      ..._208
    };
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._166,
      ..._175,
      ..._185,
      ..._198,
      ..._209
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._62
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._63
      };
    }
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._186,
      ..._199
    };
  }
  export namespace query {
    export const v1 = {
      ..._66
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._167,
      ..._176,
      ..._187,
      ..._200,
      ..._210
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._72
      };
    }
    export const v1beta1 = {
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._168,
      ..._177,
      ..._188,
      ..._201,
      ..._211
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._78
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._79
      };
    }
    export const v1beta1 = {
      ..._80,
      ..._81,
      ..._189,
      ..._202
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._82
      };
    }
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._169,
      ..._178,
      ..._190,
      ..._203,
      ..._212
    };
  }
  export const ClientFactory = {
    ..._256,
    ..._257,
    ..._258
  };
}