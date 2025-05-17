import * as _87 from "./applications/fee/v1/ack";
import * as _88 from "./applications/fee/v1/fee";
import * as _89 from "./applications/fee/v1/genesis";
import * as _90 from "./applications/fee/v1/metadata";
import * as _91 from "./applications/fee/v1/query";
import * as _92 from "./applications/fee/v1/tx";
import * as _93 from "./applications/interchain_accounts/controller/v1/controller";
import * as _94 from "./applications/interchain_accounts/controller/v1/query";
import * as _95 from "./applications/interchain_accounts/controller/v1/tx";
import * as _96 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _97 from "./applications/interchain_accounts/host/v1/host";
import * as _98 from "./applications/interchain_accounts/host/v1/query";
import * as _99 from "./applications/interchain_accounts/host/v1/tx";
import * as _100 from "./applications/interchain_accounts/v1/account";
import * as _101 from "./applications/interchain_accounts/v1/metadata";
import * as _102 from "./applications/interchain_accounts/v1/packet";
import * as _103 from "./applications/transfer/v1/authz";
import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./applications/transfer/v2/packet";
import * as _109 from "./core/channel/v1/channel";
import * as _110 from "./core/channel/v1/genesis";
import * as _111 from "./core/channel/v1/query";
import * as _112 from "./core/channel/v1/tx";
import * as _113 from "./core/channel/v1/upgrade";
import * as _114 from "./core/client/v1/client";
import * as _115 from "./core/client/v1/genesis";
import * as _116 from "./core/client/v1/query";
import * as _117 from "./core/client/v1/tx";
import * as _118 from "./core/commitment/v1/commitment";
import * as _119 from "./core/connection/v1/connection";
import * as _120 from "./core/connection/v1/genesis";
import * as _121 from "./core/connection/v1/query";
import * as _122 from "./core/connection/v1/tx";
import * as _123 from "./lightclients/localhost/v2/localhost";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/solomachine/v3/solomachine";
import * as _126 from "./lightclients/tendermint/v1/tendermint";
import * as _127 from "./lightclients/wasm/v1/genesis";
import * as _128 from "./lightclients/wasm/v1/query";
import * as _129 from "./lightclients/wasm/v1/tx";
import * as _130 from "./lightclients/wasm/v1/wasm";
import * as _213 from "./applications/fee/v1/tx.amino";
import * as _214 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _215 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _216 from "./applications/transfer/v1/tx.amino";
import * as _217 from "./core/channel/v1/tx.amino";
import * as _218 from "./core/client/v1/tx.amino";
import * as _219 from "./core/connection/v1/tx.amino";
import * as _220 from "./lightclients/wasm/v1/tx.amino";
import * as _221 from "./applications/fee/v1/tx.registry";
import * as _222 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _223 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _224 from "./applications/transfer/v1/tx.registry";
import * as _225 from "./core/channel/v1/tx.registry";
import * as _226 from "./core/client/v1/tx.registry";
import * as _227 from "./core/connection/v1/tx.registry";
import * as _228 from "./lightclients/wasm/v1/tx.registry";
import * as _229 from "./applications/fee/v1/query.lcd";
import * as _230 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _231 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _232 from "./applications/transfer/v1/query.lcd";
import * as _233 from "./core/channel/v1/query.lcd";
import * as _234 from "./core/client/v1/query.lcd";
import * as _235 from "./core/connection/v1/query.lcd";
import * as _236 from "./lightclients/wasm/v1/query.lcd";
import * as _237 from "./applications/fee/v1/query.rpc.Query";
import * as _238 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _239 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _240 from "./applications/transfer/v1/query.rpc.Query";
import * as _241 from "./core/channel/v1/query.rpc.Query";
import * as _242 from "./core/client/v1/query.rpc.Query";
import * as _243 from "./core/connection/v1/query.rpc.Query";
import * as _244 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _245 from "./applications/fee/v1/tx.rpc.msg";
import * as _246 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _247 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _248 from "./applications/transfer/v1/tx.rpc.msg";
import * as _249 from "./core/channel/v1/tx.rpc.msg";
import * as _250 from "./core/client/v1/tx.rpc.msg";
import * as _251 from "./core/connection/v1/tx.rpc.msg";
import * as _252 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _259 from "./lcd";
import * as _260 from "./rpc.query";
import * as _261 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._91,
        ..._92,
        ..._213,
        ..._221,
        ..._229,
        ..._237,
        ..._245
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._93,
          ..._94,
          ..._95,
          ..._214,
          ..._222,
          ..._230,
          ..._238,
          ..._246
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._96
        };
      }
      export namespace host {
        export const v1 = {
          ..._97,
          ..._98,
          ..._99,
          ..._215,
          ..._223,
          ..._231,
          ..._239,
          ..._247
        };
      }
      export const v1 = {
        ..._100,
        ..._101,
        ..._102
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._103,
        ..._104,
        ..._105,
        ..._106,
        ..._107,
        ..._216,
        ..._224,
        ..._232,
        ..._240,
        ..._248
      };
      export const v2 = {
        ..._108
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._217,
        ..._225,
        ..._233,
        ..._241,
        ..._249
      };
    }
    export namespace client {
      export const v1 = {
        ..._114,
        ..._115,
        ..._116,
        ..._117,
        ..._218,
        ..._226,
        ..._234,
        ..._242,
        ..._250
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._118
      };
    }
    export namespace connection {
      export const v1 = {
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._219,
        ..._227,
        ..._235,
        ..._243,
        ..._251
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._123
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._124
      };
      export const v3 = {
        ..._125
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._126
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._127,
        ..._128,
        ..._129,
        ..._130,
        ..._220,
        ..._228,
        ..._236,
        ..._244,
        ..._252
      };
    }
  }
  export const ClientFactory = {
    ..._259,
    ..._260,
    ..._261
  };
}