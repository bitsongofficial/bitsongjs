import { LaunchPad } from "./launchpad";
import { AminoMsg } from "@cosmjs/amino";
import { Creator } from "../nft/v1beta1/nft";
import { MsgCreateLaunchPad, MsgUpdateLaunchPad, MsgCloseLaunchPad, MsgMintNFT, MsgMintNFTs } from "./tx";
import Long from "long";

export interface AminoMsgCreateLaunchPad extends AminoMsg {
  type: "/bitsong.launchpad.MsgCreateLaunchPad";
  value: {
    sender: string;
    pad: {
      coll_id: string;
      price: string;
      treasury: string;
      denom: string;
      go_live_date: string;
      end_timestamp: string;
      max_mint: string;
      minted: string;
      authority: string;
      metadata_base_url: string;
      mutable: boolean;
      seller_fee_basis_points: number;
      creators: {
        address: string;
        verified: boolean;
        share: number;
      }[];
      shuffle: boolean;
    };
  };
}
export interface AminoMsgUpdateLaunchPad extends AminoMsg {
  type: "/bitsong.launchpad.MsgUpdateLaunchPad";
  value: {
    sender: string;
    pad: {
      coll_id: string;
      price: string;
      treasury: string;
      denom: string;
      go_live_date: string;
      end_timestamp: string;
      max_mint: string;
      minted: string;
      authority: string;
      metadata_base_url: string;
      mutable: boolean;
      seller_fee_basis_points: number;
      creators: {
        address: string;
        verified: boolean;
        share: number;
      }[];
      shuffle: boolean;
    };
  };
}
export interface AminoMsgCloseLaunchPad extends AminoMsg {
  type: "/bitsong.launchpad.MsgCloseLaunchPad";
  value: {
    sender: string;
    coll_id: string;
  };
}
export interface AminoMsgMintNFT extends AminoMsg {
  type: "/bitsong.launchpad.MsgMintNFT";
  value: {
    sender: string;
    collection_id: string;
    name: string;
  };
}
export interface AminoMsgMintNFTs extends AminoMsg {
  type: "/bitsong.launchpad.MsgMintNFTs";
  value: {
    sender: string;
    collection_id: string;
    number: string;
  };
}
export const aminoConverter = {
  "/bitsong.launchpad.MsgCreateLaunchPad": {
    aminoType: "go-bitsong/launchpad/MsgCreateLaunchPad",
    toAmino: ({
      sender,
      pad
    }: MsgCreateLaunchPad): AminoMsgCreateLaunchPad["value"] => {
      return {
        sender,
        pad: {
          coll_id: pad?.collId.toString() ?? "",
          price: pad?.price.toString() ?? "",
          treasury: pad?.treasury ?? "",
          denom: pad?.denom ?? "",
          go_live_date: pad?.goLiveDate.toString() ?? "",
          end_timestamp: pad?.endTimestamp.toString() ?? "",
          max_mint: pad?.maxMint.toString() ?? "",
          minted: pad?.minted.toString() ?? "",
          authority: pad?.authority ?? "",
          metadata_base_url: pad?.metadataBaseUrl ?? "",
          mutable: pad?.mutable ?? true,
          seller_fee_basis_points: pad?.sellerFeeBasisPoints ?? 0,
          creators: pad?.creators.map(el0 => ({
            address: el0.address,
            verified: el0.verified,
            share: el0.share
          })) ?? [],
          shuffle: pad?.shuffle ?? false
        }
      };
    },
    fromAmino: ({
      sender,
      pad
    }: AminoMsgCreateLaunchPad["value"]): MsgCreateLaunchPad => {
      return {
        $type: MsgCreateLaunchPad.$type,
        sender,
        pad: {
          $type: LaunchPad.$type,
          collId: Long.fromString(pad.coll_id),
          price: Long.fromString(pad.price),
          treasury: pad.treasury,
          denom: pad.denom,
          goLiveDate: Long.fromString(pad.go_live_date),
          endTimestamp: Long.fromString(pad.end_timestamp),
          maxMint: Long.fromString(pad.max_mint),
          minted: Long.fromString(pad.minted),
          authority: pad.authority,
          metadataBaseUrl: pad.metadata_base_url,
          mutable: pad.mutable,
          sellerFeeBasisPoints: pad.seller_fee_basis_points,
          creators: pad.creators.map(el1 => ({
            $type: Creator.$type,
            address: el1.address,
            verified: el1.verified,
            share: el1.share
          })),
          shuffle: pad.shuffle
        }
      };
    }
  },
  "/bitsong.launchpad.MsgUpdateLaunchPad": {
    aminoType: "go-bitsong/launchpad/MsgUpdateLaunchPad",
    toAmino: ({
      sender,
      pad
    }: MsgUpdateLaunchPad): AminoMsgUpdateLaunchPad["value"] => {
      return {
        sender,
        pad: {
          coll_id: pad?.collId.toString() ?? "",
          price: pad?.price.toString() ?? "",
          treasury: pad?.treasury ?? "",
          denom: pad?.denom ?? "",
          go_live_date: pad?.goLiveDate.toString() ?? "",
          end_timestamp: pad?.endTimestamp.toString() ?? "",
          max_mint: pad?.maxMint.toString() ?? "",
          minted: pad?.minted.toString() ?? "",
          authority: pad?.authority ?? "",
          metadata_base_url: pad?.metadataBaseUrl ?? "",
          mutable: pad?.mutable ?? true,
          seller_fee_basis_points: pad?.sellerFeeBasisPoints ?? 0,
          creators: pad?.creators.map(el0 => ({
            address: el0.address,
            verified: el0.verified,
            share: el0.share
          })) ?? [],
          shuffle: pad?.shuffle ?? false
        }
      };
    },
    fromAmino: ({
      sender,
      pad
    }: AminoMsgUpdateLaunchPad["value"]): MsgUpdateLaunchPad => {
      return {
        $type: MsgUpdateLaunchPad.$type,
        sender,
        pad: {
          $type: LaunchPad.$type,
          collId: Long.fromString(pad.coll_id),
          price: Long.fromString(pad.price),
          treasury: pad.treasury,
          denom: pad.denom,
          goLiveDate: Long.fromString(pad.go_live_date),
          endTimestamp: Long.fromString(pad.end_timestamp),
          maxMint: Long.fromString(pad.max_mint),
          minted: Long.fromString(pad.minted),
          authority: pad.authority,
          metadataBaseUrl: pad.metadata_base_url,
          mutable: pad.mutable,
          sellerFeeBasisPoints: pad.seller_fee_basis_points,
          creators: pad.creators.map(el1 => ({
            $type: Creator.$type,
            address: el1.address,
            verified: el1.verified,
            share: el1.share
          })),
          shuffle: pad.shuffle
        }
      };
    }
  },
  "/bitsong.launchpad.MsgCloseLaunchPad": {
    aminoType: "go-bitsong/launchpad/MsgCloseLaunchPad",
    toAmino: ({
      sender,
      collId
    }: MsgCloseLaunchPad): AminoMsgCloseLaunchPad["value"] => {
      return {
        sender,
        coll_id: collId.toString()
      };
    },
    fromAmino: ({
      sender,
      coll_id
    }: AminoMsgCloseLaunchPad["value"]): MsgCloseLaunchPad => {
      return {
        $type: MsgCloseLaunchPad.$type,
        sender,
        collId: Long.fromString(coll_id)
      };
    }
  },
  "/bitsong.launchpad.MsgMintNFT": {
    aminoType: "go-bitsong/launchpad/MsgMintNFT",
    toAmino: ({
      sender,
      collectionId,
      name
    }: MsgMintNFT): AminoMsgMintNFT["value"] => {
      return {
        sender,
        collection_id: collectionId.toString(),
        name
      };
    },
    fromAmino: ({
      sender,
      collection_id,
      name
    }: AminoMsgMintNFT["value"]): MsgMintNFT => {
      return {
        $type: MsgMintNFT.$type,
        sender,
        collectionId: Long.fromString(collection_id),
        name
      };
    }
  },
  "/bitsong.launchpad.MsgMintNFTs": {
    aminoType: "go-bitsong/launchpad/MsgMintNFTs",
    toAmino: ({
      sender,
      collectionId,
      number
    }: MsgMintNFTs): AminoMsgMintNFTs["value"] => {
      return {
        sender,
        collection_id: collectionId.toString(),
        number: number.toString()
      };
    },
    fromAmino: ({
      sender,
      collection_id,
      number
    }: AminoMsgMintNFTs["value"]): MsgMintNFTs => {
      return {
        $type: MsgMintNFTs.$type,
        sender,
        collectionId: Long.fromString(collection_id),
        number: Long.fromString(number)
      };
    }
  }
};