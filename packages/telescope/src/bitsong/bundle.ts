import * as _1 from "./cadance/v1/cadance";
import * as _2 from "./cadance/v1/genesis";
import * as _3 from "./cadance/v1/query";
import * as _4 from "./cadance/v1/tx";
import * as _5 from "./fantoken/v1beta1/events";
import * as _6 from "./fantoken/v1beta1/fantoken";
import * as _7 from "./fantoken/v1beta1/genesis";
import * as _8 from "./fantoken/v1beta1/gov";
import * as _9 from "./fantoken/v1beta1/params";
import * as _10 from "./fantoken/v1beta1/query";
import * as _11 from "./fantoken/v1beta1/tx";
import * as _12 from "./smartaccount/v1beta1/genesis";
import * as _13 from "./smartaccount/v1beta1/models";
import * as _14 from "./smartaccount/v1beta1/params";
import * as _15 from "./smartaccount/v1beta1/query";
import * as _16 from "./smartaccount/v1beta1/tx";
import * as _146 from "./cadance/v1/tx.amino";
import * as _147 from "./fantoken/v1beta1/tx.amino";
import * as _148 from "./smartaccount/v1beta1/tx.amino";
import * as _149 from "./cadance/v1/tx.registry";
import * as _150 from "./fantoken/v1beta1/tx.registry";
import * as _151 from "./smartaccount/v1beta1/tx.registry";
import * as _152 from "./cadance/v1/query.lcd";
import * as _153 from "./fantoken/v1beta1/query.lcd";
import * as _154 from "./smartaccount/v1beta1/query.lcd";
import * as _155 from "./cadance/v1/query.rpc.Query";
import * as _156 from "./fantoken/v1beta1/query.rpc.Query";
import * as _157 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _158 from "./cadance/v1/tx.rpc.msg";
import * as _159 from "./fantoken/v1beta1/tx.rpc.msg";
import * as _160 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _253 from "./lcd";
import * as _254 from "./rpc.query";
import * as _255 from "./rpc.tx";
export namespace bitsong {
  export namespace cadance {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._146,
      ..._149,
      ..._152,
      ..._155,
      ..._158
    };
  }
  export namespace fantoken {
    export const v1beta1 = {
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._147,
      ..._150,
      ..._153,
      ..._156,
      ..._159
    };
  }
  export namespace smartaccount {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._148,
      ..._151,
      ..._154,
      ..._157,
      ..._160
    };
  }
  export const ClientFactory = {
    ..._253,
    ..._254,
    ..._255
  };
}