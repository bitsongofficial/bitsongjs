import { AminoMsg, Coin } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { assertDefinedAndNotNull } from '@cosmjs/utils';
import { MsgClaim, MsgCreate } from 'src/codec/bitsong/merkledrop/v1beta1/tx';
import { MsgBurn, MsgDisableMint, MsgIssue, MsgMint, MsgSetAuthority, MsgSetMinter, MsgSetUri } from '../codec/bitsong/fantoken/v1beta1/tx';

export interface AminoFantokenMsgIssue extends AminoMsg {
  readonly type: "go-bitsong/fantoken/MsgIssue";
  readonly value: {
    readonly symbol: string;
    readonly name: string;
    readonly max_supply: string;
    readonly authority: string;
    readonly minter: string;
    readonly uri: string;
  };
}

export interface AminoFantokenMsgDisableMint extends AminoMsg {
  readonly type: "go-bitsong/fantoken/MsgDisableMint";
  readonly value: {
    readonly denom: string;
    readonly minter: string;
  };
}

export interface AminoFantokenMsgMint extends AminoMsg {
  readonly type: "go-bitsong/fantoken/MsgMint";
  readonly value: {
    readonly recipient: string;
    readonly coin?: Coin;
    readonly minter: string;
  };
}

export interface AminoFantokenMsgBurn extends AminoMsg {
  readonly type: "go-bitsong/fantoken/MsgBurn";
  readonly value: {
    readonly coin?: Coin;
    readonly sender: string;
  };
}

export interface AminoFantokenMsgSetMinter extends AminoMsg {
  readonly type: "go-bitsong/fantoken/MsgSetMinter";
  readonly value: {
    readonly denom: string;
    readonly old_minter: string;
    readonly new_minter: string;
  };
}

export interface AminoFantokenMsgSetAuthority extends AminoMsg {
  readonly type: "go-bitsong/fantoken/MsgSetAuthority";
  readonly value: {
    readonly denom: string;
    readonly old_authority: string;
    readonly new_authority: string;
  };
}

export interface AminoFantokenMsgSetUri extends AminoMsg {
  readonly type: "go-bitsong/fantoken/MsgSetUri";
  readonly value: {
    readonly authority: string;
    readonly denom: string;
    readonly uri: string;
  };
}

export function createFantokenAminoConverters(): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/bitsong.fantoken.MsgIssue": {
      aminoType: "go-bitsong/fantoken/MsgIssue",
      toAmino: ({
        symbol,
        name,
        maxSupply,
        authority,
        minter,
        uri
      }: MsgIssue): AminoFantokenMsgIssue["value"] => {
        assertDefinedAndNotNull(symbol, "missing symbol");
        assertDefinedAndNotNull(name, "missing name");
        assertDefinedAndNotNull(maxSupply, "missing max_supply");
        assertDefinedAndNotNull(authority, "missing authority");
        assertDefinedAndNotNull(minter, "missing minter");
        return {
          symbol: symbol,
          name: name,
          max_supply: maxSupply,
          authority: authority,
          minter: minter,
          uri: uri,
        };
      },
      fromAmino: ({
        symbol,
        name,
        max_supply,
        authority,
        minter,
        uri
      }: AminoFantokenMsgIssue["value"]): MsgIssue => {
        assertDefinedAndNotNull(symbol, "missing symbol");
        assertDefinedAndNotNull(name, "missing name");
        assertDefinedAndNotNull(max_supply, "missing max_supply");
        assertDefinedAndNotNull(authority, "missing authority");
        assertDefinedAndNotNull(minter, "missing minter");
        return {
          symbol: symbol,
          name: name,
          maxSupply: max_supply,
          authority: authority,
          minter: minter,
          uri: uri
        }
      },
    },
    "/bitsong.fantoken.MsgDisableMint": {
      aminoType: "go-bitsong/fantoken/MsgDisableMint",
      toAmino: ({
        denom,
        minter
      }: MsgDisableMint): AminoFantokenMsgDisableMint["value"] => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(minter, "missing minter");
        return {
          denom: denom,
          minter: minter
        };
      },
      fromAmino: ({
        denom,
        minter
      }: AminoFantokenMsgDisableMint["value"]): MsgDisableMint => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(minter, "missing minter");
        return {
          denom: denom,
          minter: minter
        }
      },
    },
    "/bitsong.fantoken.MsgMint": {
      aminoType: "go-bitsong/fantoken/MsgMint",
      toAmino: ({
        recipient,
        coin,
        minter
      }: MsgMint): AminoFantokenMsgMint["value"] => {
        assertDefinedAndNotNull(recipient, "missing recipient");
        return {
          recipient: recipient,
          coin: coin,
          minter: minter
        };
      },
      fromAmino: ({
        recipient,
        coin,
        minter
      }: AminoFantokenMsgMint["value"]): MsgMint => {
        assertDefinedAndNotNull(recipient, "missing recipient");
        return {
          recipient: recipient,
          coin: coin,
          minter: minter
        }
      },
    },
    "/bitsong.fantoken.MsgBurn": {
      aminoType: "go-bitsong/fantoken/MsgBurn",
      toAmino: ({
        coin,
        sender
      }: MsgBurn): AminoFantokenMsgBurn["value"] => {
        assertDefinedAndNotNull(sender, "missing sender");
        return {
          coin: coin,
          sender: sender
        };
      },
      fromAmino: ({
        coin,
        sender
      }: AminoFantokenMsgBurn["value"]): MsgBurn => {
        assertDefinedAndNotNull(sender, "missing sender");
        return {
          coin: coin,
          sender: sender
        };
      },
    },
    "/bitsong.fantoken.MsgSetMinter": {
      aminoType: "go-bitsong/fantoken/MsgSetMinter",
      toAmino: ({
        denom,
        oldMinter,
        newMinter
      }: MsgSetMinter): AminoFantokenMsgSetMinter["value"] => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(oldMinter, "missing oldMinter");
        assertDefinedAndNotNull(newMinter, "missing newMinter");
        return {
          denom: denom,
          old_minter: oldMinter,
          new_minter: newMinter
        };
      },
      fromAmino: ({
        denom,
        old_minter,
        new_minter
      }: AminoFantokenMsgSetMinter["value"]): MsgSetMinter => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(old_minter, "missing old_minter");
        assertDefinedAndNotNull(new_minter, "missing new_minter");
        return {
          denom: denom,
          oldMinter: old_minter,
          newMinter: new_minter
        };
      },
    },
    "/bitsong.fantoken.MsgSetAuthority": {
      aminoType: "go-bitsong/fantoken/MsgSetAuthority",
      toAmino: ({
        denom,
        oldAuthority,
        newAuthority
      }: MsgSetAuthority): AminoFantokenMsgSetAuthority["value"] => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(oldAuthority, "missing oldAuthority");
        assertDefinedAndNotNull(newAuthority, "missing newAuthority");
        return {
          denom: denom,
          old_authority: oldAuthority,
          new_authority: newAuthority
        };
      },
      fromAmino: ({
        denom,
        old_authority,
        new_authority
      }: AminoFantokenMsgSetAuthority["value"]): MsgSetAuthority => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(old_authority, "missing old_authority");
        assertDefinedAndNotNull(new_authority, "missing new_authority");
        return {
          denom: denom,
          oldAuthority: old_authority,
          newAuthority: new_authority
        };
      },
    },
    "/bitsong.fantoken.MsgSetUri": {
      aminoType: "go-bitsong/fantoken/MsgSetUri",
      toAmino: ({
        authority,
        denom,
        uri
      }: MsgSetUri): AminoFantokenMsgSetUri["value"] => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(authority, "missing authority");
        return {
          authority: authority,
          denom: denom,
          uri: uri
        };
      },
      fromAmino: ({
        authority,
        denom,
        uri
      }: AminoFantokenMsgSetUri["value"]): MsgSetUri => {
        assertDefinedAndNotNull(denom, "missing denom");
        assertDefinedAndNotNull(authority, "missing authority");
        return {
          authority: authority,
          denom: denom,
          uri: uri
        };
      },
    },
  }
}

export interface AminoMerkledropMsgCreate extends AminoMsg {
  readonly type: "go-bitsong/merkledrop/MsgCreate";
  readonly value: {
    readonly owner: string;
    readonly merkle_root: string;
    readonly start_height: Long;
    readonly end_height: Long;
    readonly coin?: Coin;
  };
}

export interface AminoMerkledropMsgClaim extends AminoMsg {
  readonly type: "go-bitsong/merkledrop/MsgClaim";
  readonly value: {
    readonly sender: string;
    readonly merkledrop_id: Long;
    readonly index: Long;
    readonly amount: string;
    readonly proofs: string[];
  };
}

export function createMerkledropAminoConverters(): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/bitsong.merkledrop.v1beta1.MsgCreate": {
      aminoType: "go-bitsong/merkledrop/MsgCreate",
      toAmino: ({
        owner,
        merkleRoot,
        startHeight,
        endHeight,
        coin
      }: MsgCreate): AminoMerkledropMsgCreate["value"] => {
        assertDefinedAndNotNull(owner, "missing owner");
        assertDefinedAndNotNull(merkleRoot, "missing merkleRoot");
        assertDefinedAndNotNull(startHeight, "missing startHeight");
        assertDefinedAndNotNull(endHeight, "missing endHeight");
        assertDefinedAndNotNull(coin, "missing coin");
        return {
          owner: owner,
          merkle_root: merkleRoot,
          start_height: startHeight,
          end_height: endHeight,
          coin: coin
        };
      },
      fromAmino: ({
        owner,
        merkle_root,
        start_height,
        end_height,
        coin
      }: AminoMerkledropMsgCreate["value"]): MsgCreate => {
        assertDefinedAndNotNull(owner, "missing owner");
        assertDefinedAndNotNull(merkle_root, "missing merkle_root");
        assertDefinedAndNotNull(start_height, "missing start_height");
        assertDefinedAndNotNull(end_height, "missing end_height");
        assertDefinedAndNotNull(coin, "missing coin");
        return {
          owner: owner,
          merkleRoot: merkle_root,
          startHeight: start_height,
          endHeight: end_height,
          coin: coin
        }
      },
    },
    "/bitsong.merkledrop.v1beta1.MsgClaim": {
      aminoType: "go-bitsong/merkledrop/MsgClaim",
      toAmino: ({
        sender,
        merkledropId,
        index,
        amount,
        proofs
      }: MsgClaim): AminoMerkledropMsgClaim["value"] => {
        assertDefinedAndNotNull(sender, "missing sender");
        assertDefinedAndNotNull(merkledropId, "missing merkledropId");
        assertDefinedAndNotNull(index, "missing index");
        assertDefinedAndNotNull(amount, "missing amount");
        assertDefinedAndNotNull(proofs, "missing proofs");
        return {
          sender: sender,
          merkledrop_id: merkledropId,
          index: index,
          amount: amount,
          proofs: proofs
        };
      },
      fromAmino: ({
        sender,
        merkledrop_id,
        index,
        amount,
        proofs
      }: AminoMerkledropMsgClaim["value"]): MsgClaim => {
        assertDefinedAndNotNull(sender, "missing sender");
        assertDefinedAndNotNull(merkledrop_id, "missing merkledrop_id");
        assertDefinedAndNotNull(index, "missing index");
        assertDefinedAndNotNull(amount, "missing amount");
        assertDefinedAndNotNull(proofs, "missing proofs");
        return {
          sender: sender,
          merkledropId: merkledrop_id,
          index: index,
          amount: amount,
          proofs: proofs
        }
      },
    }
  }
}