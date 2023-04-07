import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** MsgIssue defines a message for issuing a new fan token */

export interface MsgIssue {
  /** symbol which corresponds to the symbol of the fan token. It is a string and cannot change for the whole life of the fan token */
  symbol: string;
  /** name which corresponds to the name of the fan token. It is a string and cannot change for the whole life of the fan token */

  name: string;
  /** max_supply that represents the maximum number of possible mintable tokens. It is an integer number, expressed in micro unit 10^6 */

  maxSupply: string;
  /** authority which is who can set a new uri metadata */

  authority: string;
  /** minter who is who can mint new fantoken and disable the minter process, the minter key also pay the gas fee */

  minter: string;
  /** URI which is the current uri of the fan token. It is a string can change during the fan token lifecycle thanks to the MsgEdit */

  uri: string;
}
/** MsgIssue defines a message for issuing a new fan token */

export interface MsgIssueSDKType {
  symbol: string;
  name: string;
  max_supply: string;
  authority: string;
  minter: string;
  uri: string;
}
/** MsgIssueResponse defines the MsgIssue response type */

export interface MsgIssueResponse {}
/** MsgIssueResponse defines the MsgIssue response type */

export interface MsgIssueResponseSDKType {}
/** MsgDisableMint defines a message for disable the mint function */

export interface MsgDisableMint {
  denom: string;
  minter: string;
}
/** MsgDisableMint defines a message for disable the mint function */

export interface MsgDisableMintSDKType {
  denom: string;
  minter: string;
}
/** MsgDisableMintResponse defines the MsgDisableMint response type */

export interface MsgDisableMintResponse {}
/** MsgDisableMintResponse defines the MsgDisableMint response type */

export interface MsgDisableMintResponseSDKType {}
/** MsgMint defines a message for minting a new fan token */

export interface MsgMint {
  recipient: string;
  /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */

  coin?: Coin;
  minter: string;
}
/** MsgMint defines a message for minting a new fan token */

export interface MsgMintSDKType {
  recipient: string;
  coin?: CoinSDKType;
  minter: string;
}
/** MsgMintResponse defines the MsgMint response type */

export interface MsgMintResponse {}
/** MsgMintResponse defines the MsgMint response type */

export interface MsgMintResponseSDKType {}
/** MsgBurn defines a message for burning some fan tokens */

export interface MsgBurn {
  /** coin mean the amount + denom, eg: 10000ftFADJID34MCDM */
  coin?: Coin;
  sender: string;
}
/** MsgBurn defines a message for burning some fan tokens */

export interface MsgBurnSDKType {
  coin?: CoinSDKType;
  sender: string;
}
/** MsgBurnResponse defines the MsgBurn response type */

export interface MsgBurnResponse {}
/** MsgBurnResponse defines the MsgBurn response type */

export interface MsgBurnResponseSDKType {}
/** MsgSetMinter defines a message for changing the fan token minter address */

export interface MsgSetMinter {
  /** denom the fan token denom */
  denom: string;
  /** old_minter, the actual minter */

  oldMinter: string;
  /** new_minter, the new fan token minter */

  newMinter: string;
}
/** MsgSetMinter defines a message for changing the fan token minter address */

export interface MsgSetMinterSDKType {
  denom: string;
  old_minter: string;
  new_minter: string;
}
/** MsgSetMinterResponse defines the MsgTransferAuthority response type */

export interface MsgSetMinterResponse {}
/** MsgSetMinterResponse defines the MsgTransferAuthority response type */

export interface MsgSetMinterResponseSDKType {}
/** MsgSetAuthority defines a message for changing the fan token minter address */

export interface MsgSetAuthority {
  /** denom the fan token denom */
  denom: string;
  /** old_authority, the actual metadata authority */

  oldAuthority: string;
  /** new_authority, the new fan token metadata authority */

  newAuthority: string;
}
/** MsgSetAuthority defines a message for changing the fan token minter address */

export interface MsgSetAuthoritySDKType {
  denom: string;
  old_authority: string;
  new_authority: string;
}
/** MsgSetAuthorityResponse defines the MsgTransferAuthority response type */

export interface MsgSetAuthorityResponse {}
/** MsgSetAuthorityResponse defines the MsgTransferAuthority response type */

export interface MsgSetAuthorityResponseSDKType {}
export interface MsgSetUri {
  authority: string;
  denom: string;
  uri: string;
}
export interface MsgSetUriSDKType {
  authority: string;
  denom: string;
  uri: string;
}
export interface MsgSetUriResponse {}
export interface MsgSetUriResponseSDKType {}

function createBaseMsgIssue(): MsgIssue {
  return {
    symbol: "",
    name: "",
    maxSupply: "",
    authority: "",
    minter: "",
    uri: ""
  };
}

export const MsgIssue = {
  encode(message: MsgIssue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.maxSupply !== "") {
      writer.uint32(26).string(message.maxSupply);
    }

    if (message.authority !== "") {
      writer.uint32(34).string(message.authority);
    }

    if (message.minter !== "") {
      writer.uint32(42).string(message.minter);
    }

    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.maxSupply = reader.string();
          break;

        case 4:
          message.authority = reader.string();
          break;

        case 5:
          message.minter = reader.string();
          break;

        case 6:
          message.uri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgIssue>): MsgIssue {
    const message = createBaseMsgIssue();
    message.symbol = object.symbol ?? "";
    message.name = object.name ?? "";
    message.maxSupply = object.maxSupply ?? "";
    message.authority = object.authority ?? "";
    message.minter = object.minter ?? "";
    message.uri = object.uri ?? "";
    return message;
  }

};

function createBaseMsgIssueResponse(): MsgIssueResponse {
  return {};
}

export const MsgIssueResponse = {
  encode(_: MsgIssueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgIssueResponse>): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    return message;
  }

};

function createBaseMsgDisableMint(): MsgDisableMint {
  return {
    denom: "",
    minter: ""
  };
}

export const MsgDisableMint = {
  encode(message: MsgDisableMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.minter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgDisableMint>): MsgDisableMint {
    const message = createBaseMsgDisableMint();
    message.denom = object.denom ?? "";
    message.minter = object.minter ?? "";
    return message;
  }

};

function createBaseMsgDisableMintResponse(): MsgDisableMintResponse {
  return {};
}

export const MsgDisableMintResponse = {
  encode(_: MsgDisableMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMintResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgDisableMintResponse>): MsgDisableMintResponse {
    const message = createBaseMsgDisableMintResponse();
    return message;
  }

};

function createBaseMsgMint(): MsgMint {
  return {
    recipient: "",
    coin: undefined,
    minter: ""
  };
}

export const MsgMint = {
  encode(message: MsgMint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }

    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }

    if (message.minter !== "") {
      writer.uint32(26).string(message.minter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;

        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.minter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgMint>): MsgMint {
    const message = createBaseMsgMint();
    message.recipient = object.recipient ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.minter = object.minter ?? "";
    return message;
  }

};

function createBaseMsgMintResponse(): MsgMintResponse {
  return {};
}

export const MsgMintResponse = {
  encode(_: MsgMintResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    return message;
  }

};

function createBaseMsgBurn(): MsgBurn {
  return {
    coin: undefined,
    sender: ""
  };
}

export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgBurn>): MsgBurn {
    const message = createBaseMsgBurn();
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  }

};

function createBaseMsgSetMinter(): MsgSetMinter {
  return {
    denom: "",
    oldMinter: "",
    newMinter: ""
  };
}

export const MsgSetMinter = {
  encode(message: MsgSetMinter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinter();

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

  fromPartial(object: DeepPartial<MsgSetMinter>): MsgSetMinter {
    const message = createBaseMsgSetMinter();
    message.denom = object.denom ?? "";
    message.oldMinter = object.oldMinter ?? "";
    message.newMinter = object.newMinter ?? "";
    return message;
  }

};

function createBaseMsgSetMinterResponse(): MsgSetMinterResponse {
  return {};
}

export const MsgSetMinterResponse = {
  encode(_: MsgSetMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetMinterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinterResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSetMinterResponse>): MsgSetMinterResponse {
    const message = createBaseMsgSetMinterResponse();
    return message;
  }

};

function createBaseMsgSetAuthority(): MsgSetAuthority {
  return {
    denom: "",
    oldAuthority: "",
    newAuthority: ""
  };
}

export const MsgSetAuthority = {
  encode(message: MsgSetAuthority, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthority();

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

  fromPartial(object: DeepPartial<MsgSetAuthority>): MsgSetAuthority {
    const message = createBaseMsgSetAuthority();
    message.denom = object.denom ?? "";
    message.oldAuthority = object.oldAuthority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  }

};

function createBaseMsgSetAuthorityResponse(): MsgSetAuthorityResponse {
  return {};
}

export const MsgSetAuthorityResponse = {
  encode(_: MsgSetAuthorityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthorityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSetAuthorityResponse>): MsgSetAuthorityResponse {
    const message = createBaseMsgSetAuthorityResponse();
    return message;
  }

};

function createBaseMsgSetUri(): MsgSetUri {
  return {
    authority: "",
    denom: "",
    uri: ""
  };
}

export const MsgSetUri = {
  encode(message: MsgSetUri, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUri {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUri();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.uri = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSetUri>): MsgSetUri {
    const message = createBaseMsgSetUri();
    message.authority = object.authority ?? "";
    message.denom = object.denom ?? "";
    message.uri = object.uri ?? "";
    return message;
  }

};

function createBaseMsgSetUriResponse(): MsgSetUriResponse {
  return {};
}

export const MsgSetUriResponse = {
  encode(_: MsgSetUriResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetUriResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUriResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSetUriResponse>): MsgSetUriResponse {
    const message = createBaseMsgSetUriResponse();
    return message;
  }

};