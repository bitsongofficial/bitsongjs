import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgIssue defines a message for issuing a new fan token
 * @name MsgIssue
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgIssue
 */
export interface MsgIssue {
  /**
   * symbol which corresponds to the symbol of the fan token. It is a string and
   * cannot change for the whole life of the fan token
   */
  symbol: string;
  /**
   * name which corresponds to the name of the fan token. It is a string and
   * cannot change for the whole life of the fan token
   */
  name: string;
  /**
   * max_supply that represents the maximum number of possible mintable tokens.
   * It is an integer number, expressed in micro unit 10^6
   */
  maxSupply: string;
  /**
   * authority which is who can set a new uri metadata
   */
  authority: string;
  /**
   * minter who is who can mint new fantoken and disable the minter process, the
   * minter key also pay the gas fee
   */
  minter: string;
  /**
   * URI which is the current uri of the fan token. It is a string can change
   * during the fan token lifecycle thanks to the MsgEdit
   */
  uri: string;
}
export interface MsgIssueProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgIssue";
  value: Uint8Array;
}
/**
 * MsgIssue defines a message for issuing a new fan token
 * @name MsgIssueAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgIssue
 */
export interface MsgIssueAmino {
  /**
   * symbol which corresponds to the symbol of the fan token. It is a string and
   * cannot change for the whole life of the fan token
   */
  symbol: string;
  /**
   * name which corresponds to the name of the fan token. It is a string and
   * cannot change for the whole life of the fan token
   */
  name: string;
  /**
   * max_supply that represents the maximum number of possible mintable tokens.
   * It is an integer number, expressed in micro unit 10^6
   */
  max_supply: string;
  /**
   * authority which is who can set a new uri metadata
   */
  authority: string;
  /**
   * minter who is who can mint new fantoken and disable the minter process, the
   * minter key also pay the gas fee
   */
  minter: string;
  /**
   * URI which is the current uri of the fan token. It is a string can change
   * during the fan token lifecycle thanks to the MsgEdit
   */
  uri: string;
}
export interface MsgIssueAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgIssue";
  value: MsgIssueAmino;
}
/**
 * MsgIssueResponse defines the MsgIssue response type
 * @name MsgIssueResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgIssueResponse
 */
export interface MsgIssueResponse {
  denom: string;
}
export interface MsgIssueResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgIssueResponse";
  value: Uint8Array;
}
/**
 * MsgIssueResponse defines the MsgIssue response type
 * @name MsgIssueResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgIssueResponse
 */
export interface MsgIssueResponseAmino {
  denom: string;
}
export interface MsgIssueResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgIssueResponse";
  value: MsgIssueResponseAmino;
}
/**
 * MsgDisableMint defines a message for disable the mint function
 * @name MsgDisableMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgDisableMint
 */
export interface MsgDisableMint {
  denom: string;
  minter: string;
}
export interface MsgDisableMintProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMint";
  value: Uint8Array;
}
/**
 * MsgDisableMint defines a message for disable the mint function
 * @name MsgDisableMintAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgDisableMint
 */
export interface MsgDisableMintAmino {
  denom: string;
  minter: string;
}
export interface MsgDisableMintAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgDisableMint";
  value: MsgDisableMintAmino;
}
/**
 * MsgDisableMintResponse defines the MsgDisableMint response type
 * @name MsgDisableMintResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgDisableMintResponse
 */
export interface MsgDisableMintResponse {
  denom: string;
}
export interface MsgDisableMintResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMintResponse";
  value: Uint8Array;
}
/**
 * MsgDisableMintResponse defines the MsgDisableMint response type
 * @name MsgDisableMintResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgDisableMintResponse
 */
export interface MsgDisableMintResponseAmino {
  denom: string;
}
export interface MsgDisableMintResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgDisableMintResponse";
  value: MsgDisableMintResponseAmino;
}
/**
 * MsgMint defines a message for minting a new fan token
 * @name MsgMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgMint
 */
export interface MsgMint {
  recipient: string;
  /**
   * coin mean the amount + denom, eg: 10000ftFADJID34MCDM
   */
  coin: Coin;
  minter: string;
}
export interface MsgMintProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgMint";
  value: Uint8Array;
}
/**
 * MsgMint defines a message for minting a new fan token
 * @name MsgMintAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgMint
 */
export interface MsgMintAmino {
  recipient: string;
  /**
   * coin mean the amount + denom, eg: 10000ftFADJID34MCDM
   */
  coin: CoinAmino;
  minter: string;
}
export interface MsgMintAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgMint";
  value: MsgMintAmino;
}
/**
 * MsgMintResponse defines the MsgMint response type
 * @name MsgMintResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgMintResponse
 */
export interface MsgMintResponse {
  recipient: string;
  coin: Coin;
}
export interface MsgMintResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgMintResponse";
  value: Uint8Array;
}
/**
 * MsgMintResponse defines the MsgMint response type
 * @name MsgMintResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgMintResponse
 */
export interface MsgMintResponseAmino {
  recipient: string;
  coin: CoinAmino;
}
export interface MsgMintResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgMintResponse";
  value: MsgMintResponseAmino;
}
/**
 * MsgBurn defines a message for burning some fan tokens
 * @name MsgBurn
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgBurn
 */
export interface MsgBurn {
  /**
   * coin mean the amount + denom, eg: 10000ftFADJID34MCDM
   */
  coin: Coin;
  sender: string;
}
export interface MsgBurnProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgBurn";
  value: Uint8Array;
}
/**
 * MsgBurn defines a message for burning some fan tokens
 * @name MsgBurnAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgBurn
 */
export interface MsgBurnAmino {
  /**
   * coin mean the amount + denom, eg: 10000ftFADJID34MCDM
   */
  coin: CoinAmino;
  sender: string;
}
export interface MsgBurnAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgBurn";
  value: MsgBurnAmino;
}
/**
 * MsgBurnResponse defines the MsgBurn response type
 * @name MsgBurnResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponse {
  sender: string;
  coin: Coin;
}
export interface MsgBurnResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgBurnResponse";
  value: Uint8Array;
}
/**
 * MsgBurnResponse defines the MsgBurn response type
 * @name MsgBurnResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgBurnResponse
 */
export interface MsgBurnResponseAmino {
  sender: string;
  coin: CoinAmino;
}
export interface MsgBurnResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgBurnResponse";
  value: MsgBurnResponseAmino;
}
/**
 * MsgSetMinter defines a message for changing the fan token minter address
 * @name MsgSetMinter
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetMinter
 */
export interface MsgSetMinter {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_minter, the actual minter
   */
  oldMinter: string;
  /**
   * new_minter, the new fan token minter
   */
  newMinter: string;
}
export interface MsgSetMinterProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinter";
  value: Uint8Array;
}
/**
 * MsgSetMinter defines a message for changing the fan token minter address
 * @name MsgSetMinterAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetMinter
 */
export interface MsgSetMinterAmino {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_minter, the actual minter
   */
  old_minter: string;
  /**
   * new_minter, the new fan token minter
   */
  new_minter: string;
}
export interface MsgSetMinterAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetMinter";
  value: MsgSetMinterAmino;
}
/**
 * MsgSetMinterResponse defines the MsgTransferAuthority response type
 * @name MsgSetMinterResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetMinterResponse
 */
export interface MsgSetMinterResponse {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_minter, the actual minter
   */
  oldMinter: string;
  /**
   * new_minter, the new fan token minter
   */
  newMinter: string;
}
export interface MsgSetMinterResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinterResponse";
  value: Uint8Array;
}
/**
 * MsgSetMinterResponse defines the MsgTransferAuthority response type
 * @name MsgSetMinterResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetMinterResponse
 */
export interface MsgSetMinterResponseAmino {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_minter, the actual minter
   */
  old_minter: string;
  /**
   * new_minter, the new fan token minter
   */
  new_minter: string;
}
export interface MsgSetMinterResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetMinterResponse";
  value: MsgSetMinterResponseAmino;
}
/**
 * MsgSetAuthority defines a message for changing the fan token minter address
 * @name MsgSetAuthority
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetAuthority
 */
export interface MsgSetAuthority {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_authority, the actual metadata authority
   */
  oldAuthority: string;
  /**
   * new_authority, the new fan token metadata authority
   */
  newAuthority: string;
}
export interface MsgSetAuthorityProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthority";
  value: Uint8Array;
}
/**
 * MsgSetAuthority defines a message for changing the fan token minter address
 * @name MsgSetAuthorityAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetAuthority
 */
export interface MsgSetAuthorityAmino {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_authority, the actual metadata authority
   */
  old_authority: string;
  /**
   * new_authority, the new fan token metadata authority
   */
  new_authority: string;
}
export interface MsgSetAuthorityAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetAuthority";
  value: MsgSetAuthorityAmino;
}
/**
 * MsgSetAuthorityResponse defines the MsgTransferAuthority response type
 * @name MsgSetAuthorityResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetAuthorityResponse
 */
export interface MsgSetAuthorityResponse {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_authority, the actual metadata authority
   */
  oldAuthority: string;
  /**
   * new_authority, the new fan token metadata authority
   */
  newAuthority: string;
}
export interface MsgSetAuthorityResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthorityResponse";
  value: Uint8Array;
}
/**
 * MsgSetAuthorityResponse defines the MsgTransferAuthority response type
 * @name MsgSetAuthorityResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetAuthorityResponse
 */
export interface MsgSetAuthorityResponseAmino {
  /**
   * denom the fan token denom
   */
  denom: string;
  /**
   * old_authority, the actual metadata authority
   */
  old_authority: string;
  /**
   * new_authority, the new fan token metadata authority
   */
  new_authority: string;
}
export interface MsgSetAuthorityResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetAuthorityResponse";
  value: MsgSetAuthorityResponseAmino;
}
/**
 * @name MsgSetUri
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetUri
 */
export interface MsgSetUri {
  authority: string;
  denom: string;
  uri: string;
}
export interface MsgSetUriProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUri";
  value: Uint8Array;
}
/**
 * @name MsgSetUriAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetUri
 */
export interface MsgSetUriAmino {
  authority: string;
  denom: string;
  uri: string;
}
export interface MsgSetUriAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetUri";
  value: MsgSetUriAmino;
}
/**
 * @name MsgSetUriResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetUriResponse
 */
export interface MsgSetUriResponse {
  denom: string;
}
export interface MsgSetUriResponseProtoMsg {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUriResponse";
  value: Uint8Array;
}
/**
 * @name MsgSetUriResponseAmino
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetUriResponse
 */
export interface MsgSetUriResponseAmino {
  denom: string;
}
export interface MsgSetUriResponseAminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetUriResponse";
  value: MsgSetUriResponseAmino;
}
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
/**
 * MsgIssue defines a message for issuing a new fan token
 * @name MsgIssue
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgIssue
 */
export const MsgIssue = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgIssue",
  is(o: any): o is MsgIssue {
    return o && (o.$typeUrl === MsgIssue.typeUrl || typeof o.symbol === "string" && typeof o.name === "string" && typeof o.maxSupply === "string" && typeof o.authority === "string" && typeof o.minter === "string" && typeof o.uri === "string");
  },
  isAmino(o: any): o is MsgIssueAmino {
    return o && (o.$typeUrl === MsgIssue.typeUrl || typeof o.symbol === "string" && typeof o.name === "string" && typeof o.max_supply === "string" && typeof o.authority === "string" && typeof o.minter === "string" && typeof o.uri === "string");
  },
  encode(message: MsgIssue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIssue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgIssueAmino): MsgIssue {
    const message = createBaseMsgIssue();
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = object.max_supply;
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    return message;
  },
  toAmino(message: MsgIssue): MsgIssueAmino {
    const obj: any = {};
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.name = message.name === "" ? undefined : message.name;
    obj.max_supply = message.maxSupply === "" ? undefined : message.maxSupply;
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.minter = message.minter === "" ? undefined : message.minter;
    obj.uri = message.uri === "" ? undefined : message.uri;
    return obj;
  },
  fromAminoMsg(object: MsgIssueAminoMsg): MsgIssue {
    return MsgIssue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueProtoMsg): MsgIssue {
    return MsgIssue.decode(message.value);
  },
  toProto(message: MsgIssue): Uint8Array {
    return MsgIssue.encode(message).finish();
  },
  toProtoMsg(message: MsgIssue): MsgIssueProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgIssue",
      value: MsgIssue.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgIssueResponse(): MsgIssueResponse {
  return {
    denom: ""
  };
}
/**
 * MsgIssueResponse defines the MsgIssue response type
 * @name MsgIssueResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgIssueResponse
 */
export const MsgIssueResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgIssueResponse",
  is(o: any): o is MsgIssueResponse {
    return o && (o.$typeUrl === MsgIssueResponse.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgIssueResponseAmino {
    return o && (o.$typeUrl === MsgIssueResponse.typeUrl || typeof o.denom === "string");
  },
  encode(message: MsgIssueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIssueResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIssueResponse();
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
  fromPartial(object: DeepPartial<MsgIssueResponse>): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgIssueResponseAmino): MsgIssueResponse {
    const message = createBaseMsgIssueResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgIssueResponse): MsgIssueResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgIssueResponseAminoMsg): MsgIssueResponse {
    return MsgIssueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgIssueResponseProtoMsg): MsgIssueResponse {
    return MsgIssueResponse.decode(message.value);
  },
  toProto(message: MsgIssueResponse): Uint8Array {
    return MsgIssueResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIssueResponse): MsgIssueResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgIssueResponse",
      value: MsgIssueResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDisableMint(): MsgDisableMint {
  return {
    denom: "",
    minter: ""
  };
}
/**
 * MsgDisableMint defines a message for disable the mint function
 * @name MsgDisableMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgDisableMint
 */
export const MsgDisableMint = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMint",
  is(o: any): o is MsgDisableMint {
    return o && (o.$typeUrl === MsgDisableMint.typeUrl || typeof o.denom === "string" && typeof o.minter === "string");
  },
  isAmino(o: any): o is MsgDisableMintAmino {
    return o && (o.$typeUrl === MsgDisableMint.typeUrl || typeof o.denom === "string" && typeof o.minter === "string");
  },
  encode(message: MsgDisableMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgDisableMintAmino): MsgDisableMint {
    const message = createBaseMsgDisableMint();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    return message;
  },
  toAmino(message: MsgDisableMint): MsgDisableMintAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.minter = message.minter === "" ? undefined : message.minter;
    return obj;
  },
  fromAminoMsg(object: MsgDisableMintAminoMsg): MsgDisableMint {
    return MsgDisableMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableMintProtoMsg): MsgDisableMint {
    return MsgDisableMint.decode(message.value);
  },
  toProto(message: MsgDisableMint): Uint8Array {
    return MsgDisableMint.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableMint): MsgDisableMintProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMint",
      value: MsgDisableMint.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDisableMintResponse(): MsgDisableMintResponse {
  return {
    denom: ""
  };
}
/**
 * MsgDisableMintResponse defines the MsgDisableMint response type
 * @name MsgDisableMintResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgDisableMintResponse
 */
export const MsgDisableMintResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMintResponse",
  is(o: any): o is MsgDisableMintResponse {
    return o && (o.$typeUrl === MsgDisableMintResponse.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgDisableMintResponseAmino {
    return o && (o.$typeUrl === MsgDisableMintResponse.typeUrl || typeof o.denom === "string");
  },
  encode(message: MsgDisableMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDisableMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableMintResponse();
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
  fromPartial(object: DeepPartial<MsgDisableMintResponse>): MsgDisableMintResponse {
    const message = createBaseMsgDisableMintResponse();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgDisableMintResponseAmino): MsgDisableMintResponse {
    const message = createBaseMsgDisableMintResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgDisableMintResponse): MsgDisableMintResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgDisableMintResponseAminoMsg): MsgDisableMintResponse {
    return MsgDisableMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDisableMintResponseProtoMsg): MsgDisableMintResponse {
    return MsgDisableMintResponse.decode(message.value);
  },
  toProto(message: MsgDisableMintResponse): Uint8Array {
    return MsgDisableMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableMintResponse): MsgDisableMintResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgDisableMintResponse",
      value: MsgDisableMintResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgMint(): MsgMint {
  return {
    recipient: "",
    coin: Coin.fromPartial({}),
    minter: ""
  };
}
/**
 * MsgMint defines a message for minting a new fan token
 * @name MsgMint
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgMint
 */
export const MsgMint = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgMint",
  is(o: any): o is MsgMint {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.recipient === "string" && Coin.is(o.coin) && typeof o.minter === "string");
  },
  isAmino(o: any): o is MsgMintAmino {
    return o && (o.$typeUrl === MsgMint.typeUrl || typeof o.recipient === "string" && Coin.isAmino(o.coin) && typeof o.minter === "string");
  },
  encode(message: MsgMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgMintAmino): MsgMint {
    const message = createBaseMsgMint();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.minter !== undefined && object.minter !== null) {
      message.minter = object.minter;
    }
    return message;
  },
  toAmino(message: MsgMint): MsgMintAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.minter = message.minter === "" ? undefined : message.minter;
    return obj;
  },
  fromAminoMsg(object: MsgMintAminoMsg): MsgMint {
    return MsgMint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintProtoMsg): MsgMint {
    return MsgMint.decode(message.value);
  },
  toProto(message: MsgMint): Uint8Array {
    return MsgMint.encode(message).finish();
  },
  toProtoMsg(message: MsgMint): MsgMintProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgMint",
      value: MsgMint.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMint.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgMintResponse(): MsgMintResponse {
  return {
    recipient: "",
    coin: Coin.fromPartial({})
  };
}
/**
 * MsgMintResponse defines the MsgMint response type
 * @name MsgMintResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgMintResponse
 */
export const MsgMintResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgMintResponse",
  is(o: any): o is MsgMintResponse {
    return o && (o.$typeUrl === MsgMintResponse.typeUrl || typeof o.recipient === "string" && Coin.is(o.coin));
  },
  isAmino(o: any): o is MsgMintResponseAmino {
    return o && (o.$typeUrl === MsgMintResponse.typeUrl || typeof o.recipient === "string" && Coin.isAmino(o.coin));
  },
  encode(message: MsgMintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgMintResponse>): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    message.recipient = object.recipient ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgMintResponseAmino): MsgMintResponse {
    const message = createBaseMsgMintResponse();
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgMintResponse): MsgMintResponseAmino {
    const obj: any = {};
    obj.recipient = message.recipient === "" ? undefined : message.recipient;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMintResponseAminoMsg): MsgMintResponse {
    return MsgMintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintResponseProtoMsg): MsgMintResponse {
    return MsgMintResponse.decode(message.value);
  },
  toProto(message: MsgMintResponse): Uint8Array {
    return MsgMintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintResponse): MsgMintResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgMintResponse",
      value: MsgMintResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgMintResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgBurn(): MsgBurn {
  return {
    coin: Coin.fromPartial({}),
    sender: ""
  };
}
/**
 * MsgBurn defines a message for burning some fan tokens
 * @name MsgBurn
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgBurn
 */
export const MsgBurn = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgBurn",
  is(o: any): o is MsgBurn {
    return o && (o.$typeUrl === MsgBurn.typeUrl || Coin.is(o.coin) && typeof o.sender === "string");
  },
  isAmino(o: any): o is MsgBurnAmino {
    return o && (o.$typeUrl === MsgBurn.typeUrl || Coin.isAmino(o.coin) && typeof o.sender === "string");
  },
  encode(message: MsgBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgBurnAmino): MsgBurn {
    const message = createBaseMsgBurn();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    return message;
  },
  toAmino(message: MsgBurn): MsgBurnAmino {
    const obj: any = {};
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    obj.sender = message.sender === "" ? undefined : message.sender;
    return obj;
  },
  fromAminoMsg(object: MsgBurnAminoMsg): MsgBurn {
    return MsgBurn.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnProtoMsg): MsgBurn {
    return MsgBurn.decode(message.value);
  },
  toProto(message: MsgBurn): Uint8Array {
    return MsgBurn.encode(message).finish();
  },
  toProtoMsg(message: MsgBurn): MsgBurnProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgBurn",
      value: MsgBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgBurn.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {
    sender: "",
    coin: Coin.fromPartial({})
  };
}
/**
 * MsgBurnResponse defines the MsgBurn response type
 * @name MsgBurnResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgBurnResponse
 */
export const MsgBurnResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgBurnResponse",
  is(o: any): o is MsgBurnResponse {
    return o && (o.$typeUrl === MsgBurnResponse.typeUrl || typeof o.sender === "string" && Coin.is(o.coin));
  },
  isAmino(o: any): o is MsgBurnResponseAmino {
    return o && (o.$typeUrl === MsgBurnResponse.typeUrl || typeof o.sender === "string" && Coin.isAmino(o.coin));
  },
  encode(message: MsgBurnResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgBurnResponse>): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    message.sender = object.sender ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromAmino(object: MsgBurnResponseAmino): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgBurnResponse): MsgBurnResponseAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBurnResponseAminoMsg): MsgBurnResponse {
    return MsgBurnResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnResponseProtoMsg): MsgBurnResponse {
    return MsgBurnResponse.decode(message.value);
  },
  toProto(message: MsgBurnResponse): Uint8Array {
    return MsgBurnResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnResponse): MsgBurnResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgBurnResponse",
      value: MsgBurnResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgBurnResponse.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseMsgSetMinter(): MsgSetMinter {
  return {
    denom: "",
    oldMinter: "",
    newMinter: ""
  };
}
/**
 * MsgSetMinter defines a message for changing the fan token minter address
 * @name MsgSetMinter
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetMinter
 */
export const MsgSetMinter = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinter",
  is(o: any): o is MsgSetMinter {
    return o && (o.$typeUrl === MsgSetMinter.typeUrl || typeof o.denom === "string" && typeof o.oldMinter === "string" && typeof o.newMinter === "string");
  },
  isAmino(o: any): o is MsgSetMinterAmino {
    return o && (o.$typeUrl === MsgSetMinter.typeUrl || typeof o.denom === "string" && typeof o.old_minter === "string" && typeof o.new_minter === "string");
  },
  encode(message: MsgSetMinter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMinter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSetMinterAmino): MsgSetMinter {
    const message = createBaseMsgSetMinter();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.old_minter !== undefined && object.old_minter !== null) {
      message.oldMinter = object.old_minter;
    }
    if (object.new_minter !== undefined && object.new_minter !== null) {
      message.newMinter = object.new_minter;
    }
    return message;
  },
  toAmino(message: MsgSetMinter): MsgSetMinterAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.old_minter = message.oldMinter === "" ? undefined : message.oldMinter;
    obj.new_minter = message.newMinter === "" ? undefined : message.newMinter;
    return obj;
  },
  fromAminoMsg(object: MsgSetMinterAminoMsg): MsgSetMinter {
    return MsgSetMinter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinterProtoMsg): MsgSetMinter {
    return MsgSetMinter.decode(message.value);
  },
  toProto(message: MsgSetMinter): Uint8Array {
    return MsgSetMinter.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinter): MsgSetMinterProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinter",
      value: MsgSetMinter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetMinterResponse(): MsgSetMinterResponse {
  return {
    denom: "",
    oldMinter: "",
    newMinter: ""
  };
}
/**
 * MsgSetMinterResponse defines the MsgTransferAuthority response type
 * @name MsgSetMinterResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetMinterResponse
 */
export const MsgSetMinterResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinterResponse",
  is(o: any): o is MsgSetMinterResponse {
    return o && (o.$typeUrl === MsgSetMinterResponse.typeUrl || typeof o.denom === "string" && typeof o.oldMinter === "string" && typeof o.newMinter === "string");
  },
  isAmino(o: any): o is MsgSetMinterResponseAmino {
    return o && (o.$typeUrl === MsgSetMinterResponse.typeUrl || typeof o.denom === "string" && typeof o.old_minter === "string" && typeof o.new_minter === "string");
  },
  encode(message: MsgSetMinterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetMinterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetMinterResponse();
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
  fromPartial(object: DeepPartial<MsgSetMinterResponse>): MsgSetMinterResponse {
    const message = createBaseMsgSetMinterResponse();
    message.denom = object.denom ?? "";
    message.oldMinter = object.oldMinter ?? "";
    message.newMinter = object.newMinter ?? "";
    return message;
  },
  fromAmino(object: MsgSetMinterResponseAmino): MsgSetMinterResponse {
    const message = createBaseMsgSetMinterResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.old_minter !== undefined && object.old_minter !== null) {
      message.oldMinter = object.old_minter;
    }
    if (object.new_minter !== undefined && object.new_minter !== null) {
      message.newMinter = object.new_minter;
    }
    return message;
  },
  toAmino(message: MsgSetMinterResponse): MsgSetMinterResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.old_minter = message.oldMinter === "" ? undefined : message.oldMinter;
    obj.new_minter = message.newMinter === "" ? undefined : message.newMinter;
    return obj;
  },
  fromAminoMsg(object: MsgSetMinterResponseAminoMsg): MsgSetMinterResponse {
    return MsgSetMinterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetMinterResponseProtoMsg): MsgSetMinterResponse {
    return MsgSetMinterResponse.decode(message.value);
  },
  toProto(message: MsgSetMinterResponse): Uint8Array {
    return MsgSetMinterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetMinterResponse): MsgSetMinterResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgSetMinterResponse",
      value: MsgSetMinterResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetAuthority(): MsgSetAuthority {
  return {
    denom: "",
    oldAuthority: "",
    newAuthority: ""
  };
}
/**
 * MsgSetAuthority defines a message for changing the fan token minter address
 * @name MsgSetAuthority
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetAuthority
 */
export const MsgSetAuthority = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthority",
  is(o: any): o is MsgSetAuthority {
    return o && (o.$typeUrl === MsgSetAuthority.typeUrl || typeof o.denom === "string" && typeof o.oldAuthority === "string" && typeof o.newAuthority === "string");
  },
  isAmino(o: any): o is MsgSetAuthorityAmino {
    return o && (o.$typeUrl === MsgSetAuthority.typeUrl || typeof o.denom === "string" && typeof o.old_authority === "string" && typeof o.new_authority === "string");
  },
  encode(message: MsgSetAuthority, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAuthority {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSetAuthorityAmino): MsgSetAuthority {
    const message = createBaseMsgSetAuthority();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.old_authority !== undefined && object.old_authority !== null) {
      message.oldAuthority = object.old_authority;
    }
    if (object.new_authority !== undefined && object.new_authority !== null) {
      message.newAuthority = object.new_authority;
    }
    return message;
  },
  toAmino(message: MsgSetAuthority): MsgSetAuthorityAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.old_authority = message.oldAuthority === "" ? undefined : message.oldAuthority;
    obj.new_authority = message.newAuthority === "" ? undefined : message.newAuthority;
    return obj;
  },
  fromAminoMsg(object: MsgSetAuthorityAminoMsg): MsgSetAuthority {
    return MsgSetAuthority.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAuthorityProtoMsg): MsgSetAuthority {
    return MsgSetAuthority.decode(message.value);
  },
  toProto(message: MsgSetAuthority): Uint8Array {
    return MsgSetAuthority.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAuthority): MsgSetAuthorityProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthority",
      value: MsgSetAuthority.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetAuthorityResponse(): MsgSetAuthorityResponse {
  return {
    denom: "",
    oldAuthority: "",
    newAuthority: ""
  };
}
/**
 * MsgSetAuthorityResponse defines the MsgTransferAuthority response type
 * @name MsgSetAuthorityResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetAuthorityResponse
 */
export const MsgSetAuthorityResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthorityResponse",
  is(o: any): o is MsgSetAuthorityResponse {
    return o && (o.$typeUrl === MsgSetAuthorityResponse.typeUrl || typeof o.denom === "string" && typeof o.oldAuthority === "string" && typeof o.newAuthority === "string");
  },
  isAmino(o: any): o is MsgSetAuthorityResponseAmino {
    return o && (o.$typeUrl === MsgSetAuthorityResponse.typeUrl || typeof o.denom === "string" && typeof o.old_authority === "string" && typeof o.new_authority === "string");
  },
  encode(message: MsgSetAuthorityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetAuthorityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAuthorityResponse();
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
  fromPartial(object: DeepPartial<MsgSetAuthorityResponse>): MsgSetAuthorityResponse {
    const message = createBaseMsgSetAuthorityResponse();
    message.denom = object.denom ?? "";
    message.oldAuthority = object.oldAuthority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  },
  fromAmino(object: MsgSetAuthorityResponseAmino): MsgSetAuthorityResponse {
    const message = createBaseMsgSetAuthorityResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.old_authority !== undefined && object.old_authority !== null) {
      message.oldAuthority = object.old_authority;
    }
    if (object.new_authority !== undefined && object.new_authority !== null) {
      message.newAuthority = object.new_authority;
    }
    return message;
  },
  toAmino(message: MsgSetAuthorityResponse): MsgSetAuthorityResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.old_authority = message.oldAuthority === "" ? undefined : message.oldAuthority;
    obj.new_authority = message.newAuthority === "" ? undefined : message.newAuthority;
    return obj;
  },
  fromAminoMsg(object: MsgSetAuthorityResponseAminoMsg): MsgSetAuthorityResponse {
    return MsgSetAuthorityResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetAuthorityResponseProtoMsg): MsgSetAuthorityResponse {
    return MsgSetAuthorityResponse.decode(message.value);
  },
  toProto(message: MsgSetAuthorityResponse): Uint8Array {
    return MsgSetAuthorityResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetAuthorityResponse): MsgSetAuthorityResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgSetAuthorityResponse",
      value: MsgSetAuthorityResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetUri(): MsgSetUri {
  return {
    authority: "",
    denom: "",
    uri: ""
  };
}
/**
 * @name MsgSetUri
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetUri
 */
export const MsgSetUri = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUri",
  is(o: any): o is MsgSetUri {
    return o && (o.$typeUrl === MsgSetUri.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.uri === "string");
  },
  isAmino(o: any): o is MsgSetUriAmino {
    return o && (o.$typeUrl === MsgSetUri.typeUrl || typeof o.authority === "string" && typeof o.denom === "string" && typeof o.uri === "string");
  },
  encode(message: MsgSetUri, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUri {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: MsgSetUriAmino): MsgSetUri {
    const message = createBaseMsgSetUri();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    return message;
  },
  toAmino(message: MsgSetUri): MsgSetUriAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.uri = message.uri === "" ? undefined : message.uri;
    return obj;
  },
  fromAminoMsg(object: MsgSetUriAminoMsg): MsgSetUri {
    return MsgSetUri.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUriProtoMsg): MsgSetUri {
    return MsgSetUri.decode(message.value);
  },
  toProto(message: MsgSetUri): Uint8Array {
    return MsgSetUri.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUri): MsgSetUriProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUri",
      value: MsgSetUri.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSetUriResponse(): MsgSetUriResponse {
  return {
    denom: ""
  };
}
/**
 * @name MsgSetUriResponse
 * @package bitsong.fantoken.v1beta1
 * @see proto type: bitsong.fantoken.v1beta1.MsgSetUriResponse
 */
export const MsgSetUriResponse = {
  typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUriResponse",
  is(o: any): o is MsgSetUriResponse {
    return o && (o.$typeUrl === MsgSetUriResponse.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is MsgSetUriResponseAmino {
    return o && (o.$typeUrl === MsgSetUriResponse.typeUrl || typeof o.denom === "string");
  },
  encode(message: MsgSetUriResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetUriResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetUriResponse();
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
  fromPartial(object: DeepPartial<MsgSetUriResponse>): MsgSetUriResponse {
    const message = createBaseMsgSetUriResponse();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MsgSetUriResponseAmino): MsgSetUriResponse {
    const message = createBaseMsgSetUriResponse();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MsgSetUriResponse): MsgSetUriResponseAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: MsgSetUriResponseAminoMsg): MsgSetUriResponse {
    return MsgSetUriResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetUriResponseProtoMsg): MsgSetUriResponse {
    return MsgSetUriResponse.decode(message.value);
  },
  toProto(message: MsgSetUriResponse): Uint8Array {
    return MsgSetUriResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetUriResponse): MsgSetUriResponseProtoMsg {
    return {
      typeUrl: "/bitsong.fantoken.v1beta1.MsgSetUriResponse",
      value: MsgSetUriResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};