import * as _49 from "./wasm/v1/genesis";
import * as _50 from "./wasm/v1/ibc";
import * as _51 from "./wasm/v1/proposal";
import * as _52 from "./wasm/v1/query";
import * as _53 from "./wasm/v1/tx";
import * as _54 from "./wasm/v1/types";
import * as _137 from "./wasm/v1/tx.amino";
import * as _138 from "./wasm/v1/tx.registry";
import * as _139 from "./wasm/v1/query.lcd";
import * as _140 from "./wasm/v1/query.rpc.Query";
import * as _141 from "./wasm/v1/tx.rpc.msg";
import * as _172 from "./lcd";
import * as _173 from "./rpc.query";
import * as _174 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141
    };
  }
  export const ClientFactory = { ..._172,
    ..._173,
    ..._174
  };
}