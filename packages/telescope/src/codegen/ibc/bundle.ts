import * as _54 from "./applications/interchain_accounts/controller/v1/controller";
import * as _55 from "./applications/interchain_accounts/controller/v1/query";
import * as _56 from "./applications/interchain_accounts/host/v1/host";
import * as _57 from "./applications/interchain_accounts/host/v1/query";
import * as _58 from "./applications/interchain_accounts/v1/account";
import * as _59 from "./applications/interchain_accounts/v1/genesis";
import * as _60 from "./applications/interchain_accounts/v1/metadata";
import * as _61 from "./applications/interchain_accounts/v1/packet";
import * as _62 from "./applications/transfer/v1/genesis";
import * as _63 from "./applications/transfer/v1/query";
import * as _64 from "./applications/transfer/v1/transfer";
import * as _65 from "./applications/transfer/v1/tx";
import * as _66 from "./applications/transfer/v2/packet";
import * as _67 from "./core/channel/v1/channel";
import * as _68 from "./core/channel/v1/genesis";
import * as _69 from "./core/channel/v1/query";
import * as _70 from "./core/channel/v1/tx";
import * as _71 from "./core/client/v1/client";
import * as _72 from "./core/client/v1/genesis";
import * as _73 from "./core/client/v1/query";
import * as _74 from "./core/client/v1/tx";
import * as _75 from "./core/commitment/v1/commitment";
import * as _76 from "./core/connection/v1/connection";
import * as _77 from "./core/connection/v1/genesis";
import * as _78 from "./core/connection/v1/query";
import * as _79 from "./core/connection/v1/tx";
import * as _80 from "./lightclients/localhost/v1/localhost";
import * as _81 from "./lightclients/solomachine/v1/solomachine";
import * as _82 from "./lightclients/solomachine/v2/solomachine";
import * as _83 from "./lightclients/tendermint/v1/tendermint";
import * as _131 from "./applications/transfer/v1/tx.amino";
import * as _132 from "./core/channel/v1/tx.amino";
import * as _133 from "./core/client/v1/tx.amino";
import * as _134 from "./core/connection/v1/tx.amino";
import * as _135 from "./applications/transfer/v1/tx.registry";
import * as _136 from "./core/channel/v1/tx.registry";
import * as _137 from "./core/client/v1/tx.registry";
import * as _138 from "./core/connection/v1/tx.registry";
import * as _139 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _140 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _141 from "./applications/transfer/v1/query.lcd";
import * as _142 from "./core/channel/v1/query.lcd";
import * as _143 from "./core/client/v1/query.lcd";
import * as _144 from "./core/connection/v1/query.lcd";
import * as _145 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _146 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _147 from "./applications/transfer/v1/query.rpc.Query";
import * as _148 from "./core/channel/v1/query.rpc.Query";
import * as _149 from "./core/client/v1/query.rpc.Query";
import * as _150 from "./core/connection/v1/query.rpc.Query";
import * as _151 from "./applications/transfer/v1/tx.rpc.msg";
import * as _152 from "./core/channel/v1/tx.rpc.msg";
import * as _153 from "./core/client/v1/tx.rpc.msg";
import * as _154 from "./core/connection/v1/tx.rpc.msg";
import * as _161 from "./lcd";
import * as _162 from "./rpc.query";
import * as _163 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._54,
          ..._55,
          ..._139,
          ..._145
        };
      }
      export namespace host {
        export const v1 = { ..._56,
          ..._57,
          ..._140,
          ..._146
        };
      }
      export const v1 = { ..._58,
        ..._59,
        ..._60,
        ..._61
      };
    }
    export namespace transfer {
      export const v1 = { ..._62,
        ..._63,
        ..._64,
        ..._65,
        ..._131,
        ..._135,
        ..._141,
        ..._147,
        ..._151
      };
      export const v2 = { ..._66
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._67,
        ..._68,
        ..._69,
        ..._70,
        ..._132,
        ..._136,
        ..._142,
        ..._148,
        ..._152
      };
    }
    export namespace client {
      export const v1 = { ..._71,
        ..._72,
        ..._73,
        ..._74,
        ..._133,
        ..._137,
        ..._143,
        ..._149,
        ..._153
      };
    }
    export namespace commitment {
      export const v1 = { ..._75
      };
    }
    export namespace connection {
      export const v1 = { ..._76,
        ..._77,
        ..._78,
        ..._79,
        ..._134,
        ..._138,
        ..._144,
        ..._150,
        ..._154
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._80
      };
    }
    export namespace solomachine {
      export const v1 = { ..._81
      };
      export const v2 = { ..._82
      };
    }
    export namespace tendermint {
      export const v1 = { ..._83
      };
    }
  }
  export const ClientFactory = { ..._161,
    ..._162,
    ..._163
  };
}