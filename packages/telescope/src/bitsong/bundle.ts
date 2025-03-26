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
import * as _101 from "./cadance/v1/tx.amino";
import * as _102 from "./fantoken/v1beta1/tx.amino";
import * as _103 from "./smartaccount/v1beta1/tx.amino";
import * as _104 from "./cadance/v1/tx.registry";
import * as _105 from "./fantoken/v1beta1/tx.registry";
import * as _106 from "./smartaccount/v1beta1/tx.registry";
import * as _107 from "./cadance/v1/query.lcd";
import * as _108 from "./fantoken/v1beta1/query.lcd";
import * as _109 from "./smartaccount/v1beta1/query.lcd";
import * as _110 from "./cadance/v1/query.rpc.Query";
import * as _111 from "./fantoken/v1beta1/query.rpc.Query";
import * as _112 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _113 from "./cadance/v1/tx.rpc.msg";
import * as _114 from "./fantoken/v1beta1/tx.rpc.msg";
import * as _115 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _168 from "./lcd";
import * as _169 from "./rpc.query";
import * as _170 from "./rpc.tx";
export namespace bitsong {
  export namespace cadance {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._101,
      ..._104,
      ..._107,
      ..._110,
      ..._113
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
      ..._102,
      ..._105,
      ..._108,
      ..._111,
      ..._114
    };
  }
  export namespace smartaccount {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._103,
      ..._106,
      ..._109,
      ..._112,
      ..._115
    };
  }
  export const ClientFactory = {
    ..._168,
    ..._169,
    ..._170
  };
}