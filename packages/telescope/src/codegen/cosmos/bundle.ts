import * as _9 from "./auth/v1beta1/auth";
import * as _10 from "./auth/v1beta1/genesis";
import * as _11 from "./auth/v1beta1/query";
import * as _12 from "./authz/v1beta1/authz";
import * as _13 from "./authz/v1beta1/event";
import * as _14 from "./authz/v1beta1/genesis";
import * as _15 from "./authz/v1beta1/query";
import * as _16 from "./authz/v1beta1/tx";
import * as _17 from "./bank/v1beta1/authz";
import * as _18 from "./bank/v1beta1/bank";
import * as _19 from "./bank/v1beta1/genesis";
import * as _20 from "./bank/v1beta1/query";
import * as _21 from "./bank/v1beta1/tx";
import * as _22 from "./base/abci/v1beta1/abci";
import * as _23 from "./base/node/v1beta1/query";
import * as _24 from "./base/query/v1beta1/pagination";
import * as _25 from "./base/reflection/v2alpha1/reflection";
import * as _26 from "./base/v1beta1/coin";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/multisig/keys";
import * as _29 from "./crypto/secp256k1/keys";
import * as _30 from "./crypto/secp256r1/keys";
import * as _31 from "./distribution/v1beta1/distribution";
import * as _32 from "./distribution/v1beta1/genesis";
import * as _33 from "./distribution/v1beta1/query";
import * as _34 from "./distribution/v1beta1/tx";
import * as _35 from "./gov/v1beta1/genesis";
import * as _36 from "./gov/v1beta1/gov";
import * as _37 from "./gov/v1beta1/query";
import * as _38 from "./gov/v1beta1/tx";
import * as _39 from "./staking/v1beta1/authz";
import * as _40 from "./staking/v1beta1/genesis";
import * as _41 from "./staking/v1beta1/query";
import * as _42 from "./staking/v1beta1/staking";
import * as _43 from "./staking/v1beta1/tx";
import * as _44 from "./tx/signing/v1beta1/signing";
import * as _45 from "./tx/v1beta1/service";
import * as _46 from "./tx/v1beta1/tx";
import * as _47 from "./upgrade/v1beta1/query";
import * as _48 from "./upgrade/v1beta1/upgrade";
import * as _100 from "./bank/v1beta1/tx.amino";
import * as _101 from "./distribution/v1beta1/tx.amino";
import * as _102 from "./gov/v1beta1/tx.amino";
import * as _103 from "./staking/v1beta1/tx.amino";
import * as _104 from "./bank/v1beta1/tx.registry";
import * as _105 from "./distribution/v1beta1/tx.registry";
import * as _106 from "./gov/v1beta1/tx.registry";
import * as _107 from "./staking/v1beta1/tx.registry";
import * as _108 from "./auth/v1beta1/query.lcd";
import * as _109 from "./authz/v1beta1/query.lcd";
import * as _110 from "./bank/v1beta1/query.lcd";
import * as _111 from "./base/node/v1beta1/query.lcd";
import * as _112 from "./distribution/v1beta1/query.lcd";
import * as _113 from "./gov/v1beta1/query.lcd";
import * as _114 from "./staking/v1beta1/query.lcd";
import * as _115 from "./tx/v1beta1/service.lcd";
import * as _116 from "./upgrade/v1beta1/query.lcd";
import * as _117 from "./auth/v1beta1/query.rpc.Query";
import * as _118 from "./authz/v1beta1/query.rpc.Query";
import * as _119 from "./bank/v1beta1/query.rpc.Query";
import * as _120 from "./base/node/v1beta1/query.rpc.Service";
import * as _121 from "./distribution/v1beta1/query.rpc.Query";
import * as _122 from "./gov/v1beta1/query.rpc.Query";
import * as _123 from "./staking/v1beta1/query.rpc.Query";
import * as _124 from "./tx/v1beta1/service.rpc.Service";
import * as _125 from "./upgrade/v1beta1/query.rpc.Query";
import * as _126 from "./authz/v1beta1/tx.rpc.msg";
import * as _127 from "./bank/v1beta1/tx.rpc.msg";
import * as _128 from "./distribution/v1beta1/tx.rpc.msg";
import * as _129 from "./gov/v1beta1/tx.rpc.msg";
import * as _130 from "./staking/v1beta1/tx.rpc.msg";
import * as _158 from "./lcd";
import * as _159 from "./rpc.query";
import * as _160 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._9,
      ..._10,
      ..._11,
      ..._108,
      ..._117
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._109,
      ..._118,
      ..._126
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._100,
      ..._104,
      ..._110,
      ..._119,
      ..._127
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._22
      };
    }
    export namespace node {
      export const v1beta1 = { ..._23,
        ..._111,
        ..._120
      };
    }
    export namespace query {
      export const v1beta1 = { ..._24
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._25
      };
    }
    export const v1beta1 = { ..._26
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._27
    };
    export const multisig = { ..._28
    };
    export const secp256k1 = { ..._29
    };
    export const secp256r1 = { ..._30
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._101,
      ..._105,
      ..._112,
      ..._121,
      ..._128
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._35,
      ..._36,
      ..._37,
      ..._38,
      ..._102,
      ..._106,
      ..._113,
      ..._122,
      ..._129
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._43,
      ..._103,
      ..._107,
      ..._114,
      ..._123,
      ..._130
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._44
      };
    }
    export const v1beta1 = { ..._45,
      ..._46,
      ..._115,
      ..._124
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._47,
      ..._48,
      ..._116,
      ..._125
    };
  }
  export const ClientFactory = { ..._158,
    ..._159,
    ..._160
  };
}