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
import * as _62 from "./params/module/v1/module";
import * as _63 from "./params/v1beta1/params";
import * as _64 from "./params/v1beta1/query";
import * as _65 from "./query/v1/query";
import * as _66 from "./slashing/module/v1/module";
import * as _67 from "./slashing/v1beta1/genesis";
import * as _68 from "./slashing/v1beta1/query";
import * as _69 from "./slashing/v1beta1/slashing";
import * as _70 from "./slashing/v1beta1/tx";
import * as _71 from "./staking/module/v1/module";
import * as _72 from "./staking/v1beta1/authz";
import * as _73 from "./staking/v1beta1/genesis";
import * as _74 from "./staking/v1beta1/query";
import * as _75 from "./staking/v1beta1/staking";
import * as _76 from "./staking/v1beta1/tx";
import * as _77 from "./tx/config/v1/config";
import * as _78 from "./tx/signing/v1beta1/signing";
import * as _79 from "./tx/v1beta1/service";
import * as _80 from "./tx/v1beta1/tx";
import * as _81 from "./upgrade/module/v1/module";
import * as _82 from "./upgrade/v1beta1/query";
import * as _83 from "./upgrade/v1beta1/tx";
import * as _84 from "./upgrade/v1beta1/upgrade";
import * as _116 from "./auth/v1beta1/tx.amino";
import * as _117 from "./authz/v1beta1/tx.amino";
import * as _118 from "./bank/v1beta1/tx.amino";
import * as _119 from "./distribution/v1beta1/tx.amino";
import * as _120 from "./gov/v1/tx.amino";
import * as _121 from "./gov/v1beta1/tx.amino";
import * as _122 from "./slashing/v1beta1/tx.amino";
import * as _123 from "./staking/v1beta1/tx.amino";
import * as _124 from "./upgrade/v1beta1/tx.amino";
import * as _125 from "./auth/v1beta1/tx.registry";
import * as _126 from "./authz/v1beta1/tx.registry";
import * as _127 from "./bank/v1beta1/tx.registry";
import * as _128 from "./distribution/v1beta1/tx.registry";
import * as _129 from "./gov/v1/tx.registry";
import * as _130 from "./gov/v1beta1/tx.registry";
import * as _131 from "./slashing/v1beta1/tx.registry";
import * as _132 from "./staking/v1beta1/tx.registry";
import * as _133 from "./upgrade/v1beta1/tx.registry";
import * as _134 from "./auth/v1beta1/query.lcd";
import * as _135 from "./authz/v1beta1/query.lcd";
import * as _136 from "./bank/v1beta1/query.lcd";
import * as _137 from "./base/node/v1beta1/query.lcd";
import * as _138 from "./distribution/v1beta1/query.lcd";
import * as _139 from "./gov/v1/query.lcd";
import * as _140 from "./gov/v1beta1/query.lcd";
import * as _141 from "./params/v1beta1/query.lcd";
import * as _142 from "./slashing/v1beta1/query.lcd";
import * as _143 from "./staking/v1beta1/query.lcd";
import * as _144 from "./tx/v1beta1/service.lcd";
import * as _145 from "./upgrade/v1beta1/query.lcd";
import * as _146 from "./auth/v1beta1/query.rpc.Query";
import * as _147 from "./authz/v1beta1/query.rpc.Query";
import * as _148 from "./autocli/v1/query.rpc.Query";
import * as _149 from "./bank/v1beta1/query.rpc.Query";
import * as _150 from "./base/node/v1beta1/query.rpc.Service";
import * as _151 from "./distribution/v1beta1/query.rpc.Query";
import * as _152 from "./gov/v1/query.rpc.Query";
import * as _153 from "./gov/v1beta1/query.rpc.Query";
import * as _154 from "./params/v1beta1/query.rpc.Query";
import * as _155 from "./slashing/v1beta1/query.rpc.Query";
import * as _156 from "./staking/v1beta1/query.rpc.Query";
import * as _157 from "./tx/v1beta1/service.rpc.Service";
import * as _158 from "./upgrade/v1beta1/query.rpc.Query";
import * as _159 from "./auth/v1beta1/tx.rpc.msg";
import * as _160 from "./authz/v1beta1/tx.rpc.msg";
import * as _161 from "./bank/v1beta1/tx.rpc.msg";
import * as _162 from "./distribution/v1beta1/tx.rpc.msg";
import * as _163 from "./gov/v1/tx.rpc.msg";
import * as _164 from "./gov/v1beta1/tx.rpc.msg";
import * as _165 from "./slashing/v1beta1/tx.rpc.msg";
import * as _166 from "./staking/v1beta1/tx.rpc.msg";
import * as _167 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _171 from "./lcd";
import * as _172 from "./rpc.query";
import * as _173 from "./rpc.tx";
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
      ..._116,
      ..._125,
      ..._134,
      ..._146,
      ..._159
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
      ..._117,
      ..._126,
      ..._135,
      ..._147,
      ..._160
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._29,
      ..._30,
      ..._148
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
      ..._118,
      ..._127,
      ..._136,
      ..._149,
      ..._161
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
        ..._137,
        ..._150
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
      ..._119,
      ..._128,
      ..._138,
      ..._151,
      ..._162
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
      ..._120,
      ..._129,
      ..._139,
      ..._152,
      ..._163
    };
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._121,
      ..._130,
      ..._140,
      ..._153,
      ..._164
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._62
      };
    }
    export const v1beta1 = {
      ..._63,
      ..._64,
      ..._141,
      ..._154
    };
  }
  export namespace query {
    export const v1 = {
      ..._65
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._66
      };
    }
    export const v1beta1 = {
      ..._67,
      ..._68,
      ..._69,
      ..._70,
      ..._122,
      ..._131,
      ..._142,
      ..._155,
      ..._165
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._71
      };
    }
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._76,
      ..._123,
      ..._132,
      ..._143,
      ..._156,
      ..._166
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._77
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._78
      };
    }
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._144,
      ..._157
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._81
      };
    }
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._124,
      ..._133,
      ..._145,
      ..._158,
      ..._167
    };
  }
  export const ClientFactory = {
    ..._171,
    ..._172,
    ..._173
  };
}