import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgIssue, MsgMint, MsgBurn, MsgDisableMint, MsgSetMinter, MsgSetAuthority, MsgSetUri } from "./tx";
export interface MsgIssueAminoType extends AminoMsg {
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
export interface MsgMintAminoType extends AminoMsg {
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
export interface MsgBurnAminoType extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgBurn";
  value: {
    coin: {
      denom: string;
      amount: string;
    };
    sender: string;
  };
}
export interface MsgDisableMintAminoType extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgDisableMint";
  value: {
    denom: string;
    minter: string;
  };
}
export interface MsgSetMinterAminoType extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetMinter";
  value: {
    denom: string;
    old_minter: string;
    new_minter: string;
  };
}
export interface MsgSetAuthorityAminoType extends AminoMsg {
  type: "/bitsong.fantoken.v1beta1.MsgSetAuthority";
  value: {
    denom: string;
    old_authority: string;
    new_authority: string;
  };
}
export interface MsgSetUriAminoType extends AminoMsg {
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
    }: MsgIssue): MsgIssueAminoType["value"] => {
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
    }: MsgIssueAminoType["value"]): MsgIssue => {
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
    }: MsgMint): MsgMintAminoType["value"] => {
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
    }: MsgMintAminoType["value"]): MsgMint => {
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
    }: MsgBurn): MsgBurnAminoType["value"] => {
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
    }: MsgBurnAminoType["value"]): MsgBurn => {
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
    }: MsgDisableMint): MsgDisableMintAminoType["value"] => {
      return {
        denom,
        minter
      };
    },
    fromAmino: ({
      denom,
      minter
    }: MsgDisableMintAminoType["value"]): MsgDisableMint => {
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
    }: MsgSetMinter): MsgSetMinterAminoType["value"] => {
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
    }: MsgSetMinterAminoType["value"]): MsgSetMinter => {
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
    }: MsgSetAuthority): MsgSetAuthorityAminoType["value"] => {
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
    }: MsgSetAuthorityAminoType["value"]): MsgSetAuthority => {
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
    }: MsgSetUri): MsgSetUriAminoType["value"] => {
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
    }: MsgSetUriAminoType["value"]): MsgSetUri => {
      return {
        authority,
        denom,
        uri
      };
    }
  }
};