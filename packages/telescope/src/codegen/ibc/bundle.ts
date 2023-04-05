import * as _60 from "./applications/interchain_accounts/controller/v1/controller";
import * as _61 from "./applications/interchain_accounts/controller/v1/query";
import * as _62 from "./applications/interchain_accounts/host/v1/host";
import * as _63 from "./applications/interchain_accounts/host/v1/query";
import * as _64 from "./applications/interchain_accounts/v1/account";
import * as _65 from "./applications/interchain_accounts/v1/genesis";
import * as _66 from "./applications/interchain_accounts/v1/metadata";
import * as _67 from "./applications/interchain_accounts/v1/packet";
import * as _68 from "./applications/transfer/v1/genesis";
import * as _69 from "./applications/transfer/v1/query";
import * as _70 from "./applications/transfer/v1/transfer";
import * as _71 from "./applications/transfer/v1/tx";
import * as _72 from "./applications/transfer/v2/packet";
import * as _73 from "./core/channel/v1/channel";
import * as _74 from "./core/channel/v1/genesis";
import * as _75 from "./core/channel/v1/query";
import * as _76 from "./core/channel/v1/tx";
import * as _77 from "./core/client/v1/client";
import * as _78 from "./core/client/v1/genesis";
import * as _79 from "./core/client/v1/query";
import * as _80 from "./core/client/v1/tx";
import * as _81 from "./core/commitment/v1/commitment";
import * as _82 from "./core/connection/v1/connection";
import * as _83 from "./core/connection/v1/genesis";
import * as _84 from "./core/connection/v1/query";
import * as _85 from "./core/connection/v1/tx";
import * as _86 from "./lightclients/localhost/v1/localhost";
import * as _87 from "./lightclients/solomachine/v1/solomachine";
import * as _88 from "./lightclients/solomachine/v2/solomachine";
import * as _89 from "./lightclients/tendermint/v1/tendermint";
import * as _142 from "./applications/transfer/v1/tx.amino";
import * as _143 from "./core/channel/v1/tx.amino";
import * as _144 from "./core/client/v1/tx.amino";
import * as _145 from "./core/connection/v1/tx.amino";
import * as _146 from "./applications/transfer/v1/tx.registry";
import * as _147 from "./core/channel/v1/tx.registry";
import * as _148 from "./core/client/v1/tx.registry";
import * as _149 from "./core/connection/v1/tx.registry";
import * as _150 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _151 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _152 from "./applications/transfer/v1/query.lcd";
import * as _153 from "./core/channel/v1/query.lcd";
import * as _154 from "./core/client/v1/query.lcd";
import * as _155 from "./core/connection/v1/query.lcd";
import * as _156 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _157 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _158 from "./applications/transfer/v1/query.rpc.Query";
import * as _159 from "./core/channel/v1/query.rpc.Query";
import * as _160 from "./core/client/v1/query.rpc.Query";
import * as _161 from "./core/connection/v1/query.rpc.Query";
import * as _162 from "./applications/transfer/v1/tx.rpc.msg";
import * as _163 from "./core/channel/v1/tx.rpc.msg";
import * as _164 from "./core/client/v1/tx.rpc.msg";
import * as _165 from "./core/connection/v1/tx.rpc.msg";
import * as _175 from "./lcd";
import * as _176 from "./rpc.query";
import * as _177 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._60,
          ..._61,
          ..._150,
          ..._156
        };
      }
      export namespace host {
        export const v1 = { ..._62,
          ..._63,
          ..._151,
          ..._157
        };
      }
      export const v1 = { ..._64,
        ..._65,
        ..._66,
        ..._67
      };
    }
    export namespace transfer {
      export const v1 = { ..._68,
        ..._69,
        ..._70,
        ..._71,
        ..._142,
        ..._146,
        ..._152,
        ..._158,
        ..._162
      };
      export const v2 = { ..._72
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._73,
        ..._74,
        ..._75,
        ..._76,
        ..._143,
        ..._147,
        ..._153,
        ..._159,
        ..._163
      };
    }
    export namespace client {
      export const v1 = { ..._77,
        ..._78,
        ..._79,
        ..._80,
        ..._144,
        ..._148,
        ..._154,
        ..._160,
        ..._164
      };
    }
    export namespace commitment {
      export const v1 = { ..._81
      };
    }
    export namespace connection {
      export const v1 = { ..._82,
        ..._83,
        ..._84,
        ..._85,
        ..._145,
        ..._149,
        ..._155,
        ..._161,
        ..._165
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._86
      };
    }
    export namespace solomachine {
      export const v1 = { ..._87
      };
      export const v2 = { ..._88
      };
    }
    export namespace tendermint {
      export const v1 = { ..._89
      };
    }
  }
  export const ClientFactory = { ..._175,
    ..._176,
    ..._177
  };
}