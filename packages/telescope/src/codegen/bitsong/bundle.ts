import * as _0 from "./fantoken/v1beta1/events";
import * as _1 from "./fantoken/v1beta1/fantoken";
import * as _2 from "./fantoken/v1beta1/genesis";
import * as _3 from "./fantoken/v1beta1/gov";
import * as _4 from "./fantoken/v1beta1/params";
import * as _5 from "./fantoken/v1beta1/query";
import * as _6 from "./fantoken/v1beta1/tx";
import * as _95 from "./fantoken/v1beta1/tx.amino";
import * as _96 from "./fantoken/v1beta1/tx.registry";
import * as _97 from "./fantoken/v1beta1/query.lcd";
import * as _98 from "./fantoken/v1beta1/query.rpc.Query";
import * as _99 from "./fantoken/v1beta1/tx.rpc.msg";
import * as _155 from "./lcd";
import * as _156 from "./rpc.query";
import * as _157 from "./rpc.tx";
export namespace bitsong {
  export namespace fantoken {
    export const v1beta1 = { ..._0,
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99
    };
  }
  export const ClientFactory = { ..._155,
    ..._156,
    ..._157
  };
}