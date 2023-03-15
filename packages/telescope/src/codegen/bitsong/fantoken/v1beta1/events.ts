import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface EventIssue {
  denom: string;
}
export interface EventIssueSDKType {
  denom: string;
}
export interface EventDisableMint {
  denom: string;
}
export interface EventDisableMintSDKType {
  denom: string;
}
export interface EventMint {
  recipient: string;
  coin: string;
}
export interface EventMintSDKType {
  recipient: string;
  coin: string;
}
export interface EventBurn {
  sender: string;
  coin: string;
}
export interface EventBurnSDKType {
  sender: string;
  coin: string;
}
export interface EventSetAuthority {
  denom: string;
  oldAuthority: string;
  newAuthority: string;
}
export interface EventSetAuthoritySDKType {
  denom: string;
  old_authority: string;
  new_authority: string;
}
export interface EventSetMinter {
  denom: string;
  oldMinter: string;
  newMinter: string;
}
export interface EventSetMinterSDKType {
  denom: string;
  old_minter: string;
  new_minter: string;
}
export interface EventSetUri {
  denom: string;
}
export interface EventSetUriSDKType {
  denom: string;
}

function createBaseEventIssue(): EventIssue {
  return {
    denom: ""
  };
}

export const EventIssue = {
  encode(message: EventIssue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventIssue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventIssue>): EventIssue {
    const message = createBaseEventIssue();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseEventDisableMint(): EventDisableMint {
  return {
    denom: ""
  };
}

export const EventDisableMint = {
  encode(message: EventDisableMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDisableMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDisableMint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventDisableMint>): EventDisableMint {
    const message = createBaseEventDisableMint();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseEventMint(): EventMint {
  return {
    recipient: "",
    coin: ""
  };
}

export const EventMint = {
  encode(message: EventMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }

    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;

        case 2:
          message.coin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.recipient = object.recipient ?? "";
    message.coin = object.coin ?? "";
    return message;
  }

};

function createBaseEventBurn(): EventBurn {
  return {
    sender: "",
    coin: ""
  };
}

export const EventBurn = {
  encode(message: EventBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.coin = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventBurn>): EventBurn {
    const message = createBaseEventBurn();
    message.sender = object.sender ?? "";
    message.coin = object.coin ?? "";
    return message;
  }

};

function createBaseEventSetAuthority(): EventSetAuthority {
  return {
    denom: "",
    oldAuthority: "",
    newAuthority: ""
  };
}

export const EventSetAuthority = {
  encode(message: EventSetAuthority, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.oldAuthority !== "") {
      writer.uint32(18).string(message.oldAuthority);
    }

    if (message.newAuthority !== "") {
      writer.uint32(26).string(message.newAuthority);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetAuthority();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.oldAuthority = reader.string();
          break;

        case 3:
          message.newAuthority = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSetAuthority>): EventSetAuthority {
    const message = createBaseEventSetAuthority();
    message.denom = object.denom ?? "";
    message.oldAuthority = object.oldAuthority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  }

};

function createBaseEventSetMinter(): EventSetMinter {
  return {
    denom: "",
    oldMinter: "",
    newMinter: ""
  };
}

export const EventSetMinter = {
  encode(message: EventSetMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.oldMinter !== "") {
      writer.uint32(18).string(message.oldMinter);
    }

    if (message.newMinter !== "") {
      writer.uint32(26).string(message.newMinter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetMinter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.oldMinter = reader.string();
          break;

        case 3:
          message.newMinter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSetMinter>): EventSetMinter {
    const message = createBaseEventSetMinter();
    message.denom = object.denom ?? "";
    message.oldMinter = object.oldMinter ?? "";
    message.newMinter = object.newMinter ?? "";
    return message;
  }

};

function createBaseEventSetUri(): EventSetUri {
  return {
    denom: ""
  };
}

export const EventSetUri = {
  encode(message: EventSetUri, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetUri {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetUri();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventSetUri>): EventSetUri {
    const message = createBaseEventSetUri();
    message.denom = object.denom ?? "";
    return message;
  }

};