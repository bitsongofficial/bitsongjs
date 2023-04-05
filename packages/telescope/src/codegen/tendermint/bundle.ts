import * as _90 from "./abci/types";
import * as _91 from "./crypto/keys";
import * as _92 from "./crypto/proof";
import * as _93 from "./libs/bits/types";
import * as _94 from "./p2p/types";
import * as _95 from "./types/block";
import * as _96 from "./types/evidence";
import * as _97 from "./types/params";
import * as _98 from "./types/types";
import * as _99 from "./types/validator";
import * as _100 from "./version/types";
export namespace tendermint {
  export const abci = { ..._90
  };
  export const crypto = { ..._91,
    ..._92
  };
  export namespace libs {
    export const bits = { ..._93
    };
  }
  export const p2p = { ..._94
  };
  export const types = { ..._95,
    ..._96,
    ..._97,
    ..._98,
    ..._99
  };
  export const version = { ..._100
  };
}