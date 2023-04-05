import * as _0 from "./fantoken/v1beta1/events";
import * as _1 from "./fantoken/v1beta1/fantoken";
import * as _2 from "./fantoken/v1beta1/genesis";
import * as _3 from "./fantoken/v1beta1/gov";
import * as _4 from "./fantoken/v1beta1/params";
import * as _5 from "./fantoken/v1beta1/query";
import * as _6 from "./fantoken/v1beta1/tx";
import * as _101 from "./fantoken/v1beta1/tx.amino";
import * as _102 from "./fantoken/v1beta1/tx.registry";
import * as _103 from "./fantoken/v1beta1/query.lcd";
import * as _104 from "./fantoken/v1beta1/query.rpc.Query";
import * as _105 from "./fantoken/v1beta1/tx.rpc.msg";
import * as _166 from "./lcd";
import * as _167 from "./rpc.query";
import * as _168 from "./rpc.tx";
export namespace bitsong {
  export namespace fantoken {
    export const v1beta1 = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._101,
      ..._102,
      ..._103,
      ..._104,
      ..._105
    };
  }
  export const ClientFactory = { ..._166,
    ..._167,
    ..._168
  };
}