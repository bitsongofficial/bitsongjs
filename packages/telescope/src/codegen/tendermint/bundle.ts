import * as _84 from "./abci/types";
import * as _85 from "./crypto/keys";
import * as _86 from "./crypto/proof";
import * as _87 from "./libs/bits/types";
import * as _88 from "./p2p/types";
import * as _89 from "./types/block";
import * as _90 from "./types/evidence";
import * as _91 from "./types/params";
import * as _92 from "./types/types";
import * as _93 from "./types/validator";
import * as _94 from "./version/types";
export namespace tendermint {
  export const abci = { ..._84
  };
  export const crypto = { ..._85,
    ..._86
  };
  export namespace libs {
    export const bits = { ..._87
    };
  }
  export const p2p = { ..._88
  };
  export const types = { ..._89,
    ..._90,
    ..._91,
    ..._92,
    ..._93
  };
  export const version = { ..._94
  };
}