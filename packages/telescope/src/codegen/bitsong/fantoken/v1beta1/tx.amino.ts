import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
export interface AminoMsgIssue extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgIssue";
  value: {
    symbol: string;
    name: string;
    max_supply: string;
    authority: string;
    minter: string;
    uri: string;
  };
}
export interface AminoMsgMint extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgMint";
  value: {
    recipient: string;
    coin: {
      denom: string;
      amount: string;
    };
    minter: string;
  };
}
export interface AminoMsgBurn extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgBurn";
  value: {
    coin: {
      denom: string;
      amount: string;
    };
    sender: string;
  };
}
export interface AminoMsgDisableMint extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgDisableMint";
  value: {
    denom: string;
    minter: string;
  };
}
export interface AminoMsgSetMinter extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetMinter";
  value: {
    denom: string;
    old_minter: string;
    new_minter: string;
  };
}
export interface AminoMsgSetAuthority extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetAuthority";
  value: {
    denom: string;
    old_authority: string;
    new_authority: string;
  };
}
export interface AminoMsgSetUri extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetUri";
  value: {
    authority: string;
    denom: string;
    uri: string;
  };
}
export const AminoConverter = {
  "/bitsong.fantoken.v1beta1.MsgIssue": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgIssue",
    toAmino: ({
      symbol,
      name,
      maxSupply,
      authority,
      minter,
      uri
    }: MsgIssue): AminoMsgIssue["value"] => {
      return {
        symbol,
        name,
        max_supply: maxSupply,
        authority,
        minter,
        uri
      };
    },
    fromAmino: ({
      symbol,
      name,
      max_supply,
      authority,
      minter,
      uri
    }: AminoMsgIssue["value"]): MsgIssue => {
      return {
        symbol,
        name,
        maxSupply: max_supply,
        authority,
        minter,
        uri
      };
    }
  },
  "/bitsong.fantoken.v1beta1.MsgMint": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgMint",
    toAmino: ({
      recipient,
      coin,
      minter
    }: MsgMint): AminoMsgMint["value"] => {
      return {
        recipient,
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        },
        minter
      };
    },
    fromAmino: ({
      recipient,
      coin,
      minter
    }: AminoMsgMint["value"]): MsgMint => {
      return {
        recipient,
        coin: {
          denom: coin.denom,
          amount: coin.amount
        },
        minter
      };
    }
  },
  "/bitsong.fantoken.v1beta1.MsgBurn": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgBurn",
    toAmino: ({
      coin,
      sender
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        coin: {
          denom: coin.denom,
          amount: Long.fromValue(coin.amount).toString()
        },
        sender
      };
    },
    fromAmino: ({
      coin,
      sender
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        coin: {
          denom: coin.denom,
          amount: coin.amount
        },
        sender
      };
    }
  },
  "/bitsong.fantoken.v1beta1.MsgDisableMint": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgDisableMint",
    toAmino: ({
      denom,
      minter
    }: MsgDisableMint): AminoMsgDisableMint["value"] => {
      return {
        denom,
        minter
      };
    },
    fromAmino: ({
      denom,
      minter
    }: AminoMsgDisableMint["value"]): MsgDisableMint => {
      return {
        denom,
        minter
      };
    }
  },
  "/bitsong.fantoken.v1beta1.MsgSetMinter": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgSetMinter",
    toAmino: ({
      denom,
      oldMinter,
      newMinter
    }: MsgSetMinter): AminoMsgSetMinter["value"] => {
      return {
        denom,
        old_minter: oldMinter,
        new_minter: newMinter
      };
    },
    fromAmino: ({
      denom,
      old_minter,
      new_minter
    }: AminoMsgSetMinter["value"]): MsgSetMinter => {
      return {
        denom,
        oldMinter: old_minter,
        newMinter: new_minter
      };
    }
  },
  "/bitsong.fantoken.v1beta1.MsgSetAuthority": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgSetAuthority",
    toAmino: ({
      denom,
      oldAuthority,
      newAuthority
    }: MsgSetAuthority): AminoMsgSetAuthority["value"] => {
      return {
        denom,
        old_authority: oldAuthority,
        new_authority: newAuthority
      };
    },
    fromAmino: ({
      denom,
      old_authority,
      new_authority
    }: AminoMsgSetAuthority["value"]): MsgSetAuthority => {
      return {
        denom,
        oldAuthority: old_authority,
        newAuthority: new_authority
      };
    }
  },
  "/bitsong.fantoken.v1beta1.MsgSetUri": {
    aminoType: "/bitsong.fantoken.v1beta1.MsgSetUri",
    toAmino: ({
      authority,
      denom,
      uri
    }: MsgSetUri): AminoMsgSetUri["value"] => {
      return {
        authority,
        denom,
        uri
      };
    },
    fromAmino: ({
      authority,
      denom,
      uri
    }: AminoMsgSetUri["value"]): MsgSetUri => {
      return {
        authority,
        denom,
        uri
      };
    }
  }
};