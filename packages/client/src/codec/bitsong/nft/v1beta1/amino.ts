import { Metadata, Creator, MasterEdition } from './nft';
import { AminoMsg } from '@cosmjs/amino';
import {
  MsgCreateNFT,
  MsgPrintEdition,
  MsgTransferNFT,
  MsgSignMetadata,
  MsgUpdateMetadata,
  MsgUpdateMetadataAuthority,
  MsgUpdateMintAuthority,
  MsgCreateCollection,
  MsgUpdateCollectionAuthority,
} from './tx';
import Long from 'long';

export interface AminoMsgCreateNFT extends AminoMsg {
  type: '/bitsong.nft.MsgCreateNFT';
  value: {
    sender: string;
    metadata: {
      id: string;
      coll_id: string;
      name: string;
      uri: string;
      seller_fee_basis_points: number;
      primary_sale_happened: boolean;
      is_mutable: boolean;
      creators: {
        address: string;
        verified: boolean;
        share: number;
      }[];
      metadata_authority: string;
      mint_authority: string;
      master_edition: {
        supply: string;
        max_supply: string;
      };
    };
  };
}
export interface AminoMsgPrintEdition extends AminoMsg {
  type: '/bitsong.nft.MsgPrintEdition';
  value: {
    sender: string;
    coll_id: string;
    metadata_id: string;
    owner: string;
  };
}
export interface AminoMsgTransferNFT extends AminoMsg {
  type: '/bitsong.nft.MsgTransferNFT';
  value: {
    sender: string;
    id: string;
    new_owner: string;
  };
}
export interface AminoMsgSignMetadata extends AminoMsg {
  type: '/bitsong.nft.MsgSignMetadata';
  value: {
    sender: string;
    coll_id: string;
    metadata_id: string;
  };
}
export interface AminoMsgUpdateMetadata extends AminoMsg {
  type: '/bitsong.nft.MsgUpdateMetadata';
  value: {
    sender: string;
    coll_id: string;
    metadata_id: string;
    name: string;
    uri: string;
    seller_fee_basis_points: number;
    creators: {
      address: string;
      verified: boolean;
      share: number;
    }[];
  };
}
export interface AminoMsgUpdateMetadataAuthority extends AminoMsg {
  type: '/bitsong.nft.MsgUpdateMetadataAuthority';
  value: {
    sender: string;
    coll_id: string;
    metadata_id: string;
    new_authority: string;
  };
}
export interface AminoMsgUpdateMintAuthority extends AminoMsg {
  type: '/bitsong.nft.MsgUpdateMintAuthority';
  value: {
    sender: string;
    coll_id: string;
    metadata_id: string;
    new_authority: string;
  };
}
export interface AminoMsgCreateCollection extends AminoMsg {
  type: '/bitsong.nft.MsgCreateCollection';
  value: {
    sender: string;
    symbol: string;
    name: string;
    uri: string;
    is_mutable: boolean;
    update_authority: string;
  };
}
export interface AminoMsgUpdateCollectionAuthority extends AminoMsg {
  type: '/bitsong.nft.MsgUpdateCollectionAuthority';
  value: {
    sender: string;
    collection_id: string;
    new_authority: string;
  };
}
export const aminoConverter = {
  '/bitsong.nft.MsgCreateNFT': {
    aminoType: 'go-bitsong/nft/MsgCreateNFT',
    toAmino: ({
      sender,
      metadata,
    }: MsgCreateNFT): AminoMsgCreateNFT['value'] => {
      return {
        sender,
        metadata: {
          id: metadata?.id.toString() ?? '',
          coll_id: metadata?.collId.toString() ?? '',
          name: metadata?.name ?? '',
          uri: metadata?.uri ?? '',
          seller_fee_basis_points: metadata?.sellerFeeBasisPoints ?? 0,
          primary_sale_happened: metadata?.primarySaleHappened ?? false,
          is_mutable: metadata?.isMutable ?? true,
          creators:
            metadata?.creators.map(el0 => ({
              address: el0.address,
              verified: el0.verified,
              share: el0.share,
            })) ?? [],
          metadata_authority: metadata?.metadataAuthority ?? '',
          mint_authority: metadata?.mintAuthority ?? '',
          master_edition: {
            supply: metadata?.masterEdition?.supply.toString() ?? '',
            max_supply: metadata?.masterEdition?.maxSupply.toString() ?? '',
          },
        },
      };
    },
    fromAmino: ({
      sender,
      metadata,
    }: AminoMsgCreateNFT['value']): MsgCreateNFT => {
      return {
        $type: MsgCreateNFT.$type,
        sender,
        metadata: {
          $type: Metadata.$type,
          id: Long.fromString(metadata.id),
          collId: Long.fromString(metadata.coll_id),
          name: metadata.name,
          uri: metadata.uri,
          sellerFeeBasisPoints: metadata.seller_fee_basis_points,
          primarySaleHappened: metadata.primary_sale_happened,
          isMutable: metadata.is_mutable,
          creators:
            metadata?.creators.map(el1 => ({
              $type: Creator.$type,
              address: el1.address,
              verified: el1.verified,
              share: el1.share,
            })) ?? [],
          metadataAuthority: metadata.metadata_authority,
          mintAuthority: metadata.mint_authority,
          masterEdition: {
            $type: MasterEdition.$type,
            supply: Long.fromString(metadata.master_edition.supply),
            maxSupply: Long.fromString(metadata.master_edition.max_supply),
          },
        },
      };
    },
  },
  '/bitsong.nft.MsgPrintEdition': {
    aminoType: '/bitsong.nft.MsgPrintEdition', // TODO: MsgPrintEdition amino type is missing
    toAmino: ({
      sender,
      collId,
      metadataId,
      owner,
    }: MsgPrintEdition): AminoMsgPrintEdition['value'] => {
      return {
        sender,
        coll_id: collId.toString(),
        metadata_id: metadataId.toString(),
        owner,
      };
    },
    fromAmino: ({
      sender,
      coll_id,
      metadata_id,
      owner,
    }: AminoMsgPrintEdition['value']): MsgPrintEdition => {
      return {
        $type: MsgPrintEdition.$type,
        sender,
        collId: Long.fromString(coll_id),
        metadataId: Long.fromString(metadata_id),
        owner,
      };
    },
  },
  '/bitsong.nft.MsgTransferNFT': {
    aminoType: 'go-bitsong/nft/MsgTransferNFT',
    toAmino: ({
      sender,
      id,
      newOwner,
    }: MsgTransferNFT): AminoMsgTransferNFT['value'] => {
      return {
        sender,
        id,
        new_owner: newOwner,
      };
    },
    fromAmino: ({
      sender,
      id,
      new_owner,
    }: AminoMsgTransferNFT['value']): MsgTransferNFT => {
      return {
        $type: MsgTransferNFT.$type,
        sender,
        id,
        newOwner: new_owner,
      };
    },
  },
  '/bitsong.nft.MsgSignMetadata': {
    aminoType: 'go-bitsong/nft/MsgSignMetadata',
    toAmino: ({
      sender,
      collId,
      metadataId,
    }: MsgSignMetadata): AminoMsgSignMetadata['value'] => {
      return {
        sender,
        coll_id: collId.toString(),
        metadata_id: metadataId.toString(),
      };
    },
    fromAmino: ({
      sender,
      coll_id,
      metadata_id,
    }: AminoMsgSignMetadata['value']): MsgSignMetadata => {
      return {
        $type: MsgSignMetadata.$type,
        sender,
        collId: Long.fromString(coll_id),
        metadataId: Long.fromString(metadata_id),
      };
    },
  },
  '/bitsong.nft.MsgUpdateMetadata': {
    aminoType: 'go-bitsong/nft/MsgUpdateMetadata',
    toAmino: ({
      sender,
      collId,
      metadataId,
      name,
      uri,
      sellerFeeBasisPoints,
      creators,
    }: MsgUpdateMetadata): AminoMsgUpdateMetadata['value'] => {
      return {
        sender,
        coll_id: collId.toString(),
        metadata_id: metadataId.toString(),
        name,
        uri,
        seller_fee_basis_points: sellerFeeBasisPoints,
        creators: creators.map(el0 => ({
          address: el0.address,
          verified: el0.verified,
          share: el0.share,
        })),
      };
    },
    fromAmino: ({
      sender,
      coll_id,
      metadata_id,
      name,
      uri,
      seller_fee_basis_points,
      creators,
    }: AminoMsgUpdateMetadata['value']): MsgUpdateMetadata => {
      return {
        $type: MsgUpdateMetadata.$type,
        sender,
        collId: Long.fromString(coll_id),
        metadataId: Long.fromString(metadata_id),
        name,
        uri,
        sellerFeeBasisPoints: seller_fee_basis_points,
        creators: creators.map(el0 => ({
          $type: Creator.$type,
          address: el0.address,
          verified: el0.verified,
          share: el0.share,
        })),
      };
    },
  },
  '/bitsong.nft.MsgUpdateMetadataAuthority': {
    aminoType: 'go-bitsong/nft/MsgUpdateMetadataAuthority',
    toAmino: ({
      sender,
      collId,
      metadataId,
      newAuthority,
    }: MsgUpdateMetadataAuthority): AminoMsgUpdateMetadataAuthority['value'] => {
      return {
        sender,
        coll_id: collId.toString(),
        metadata_id: metadataId.toString(),
        new_authority: newAuthority,
      };
    },
    fromAmino: ({
      sender,
      coll_id,
      metadata_id,
      new_authority,
    }: AminoMsgUpdateMetadataAuthority['value']): MsgUpdateMetadataAuthority => {
      return {
        $type: MsgUpdateMetadataAuthority.$type,
        sender,
        collId: Long.fromString(coll_id),
        metadataId: Long.fromString(metadata_id),
        newAuthority: new_authority,
      };
    },
  },
  '/bitsong.nft.MsgUpdateMintAuthority': {
    aminoType: 'go-bitsong/nft/MsgUpdateMintAuthority',
    toAmino: ({
      sender,
      collId,
      metadataId,
      newAuthority,
    }: MsgUpdateMintAuthority): AminoMsgUpdateMintAuthority['value'] => {
      return {
        sender,
        coll_id: collId.toString(),
        metadata_id: metadataId.toString(),
        new_authority: newAuthority,
      };
    },
    fromAmino: ({
      sender,
      coll_id,
      metadata_id,
      new_authority,
    }: AminoMsgUpdateMintAuthority['value']): MsgUpdateMintAuthority => {
      return {
        $type: MsgUpdateMintAuthority.$type,
        sender,
        collId: Long.fromString(coll_id),
        metadataId: Long.fromString(metadata_id),
        newAuthority: new_authority,
      };
    },
  },
  '/bitsong.nft.MsgCreateCollection': {
    aminoType: 'go-bitsong/nft/MsgCreateCollection',
    toAmino: ({
      sender,
      symbol,
      name,
      uri,
      isMutable,
      updateAuthority,
    }: MsgCreateCollection): AminoMsgCreateCollection['value'] => {
      return {
        sender,
        symbol,
        name,
        uri,
        is_mutable: isMutable,
        update_authority: updateAuthority,
      };
    },
    fromAmino: ({
      sender,
      symbol,
      name,
      uri,
      is_mutable,
      update_authority,
    }: AminoMsgCreateCollection['value']): MsgCreateCollection => {
      return {
        $type: MsgCreateCollection.$type,
        sender,
        symbol,
        name,
        uri,
        isMutable: is_mutable,
        updateAuthority: update_authority,
      };
    },
  },
  '/bitsong.nft.MsgUpdateCollectionAuthority': {
    aminoType: 'go-bitsong/nft/MsgUpdateCollectionAuthority',
    toAmino: ({
      sender,
      collectionId,
      newAuthority,
    }: MsgUpdateCollectionAuthority): AminoMsgUpdateCollectionAuthority['value'] => {
      return {
        sender,
        collection_id: collectionId.toString(),
        new_authority: newAuthority,
      };
    },
    fromAmino: ({
      sender,
      collection_id,
      new_authority,
    }: AminoMsgUpdateCollectionAuthority['value']): MsgUpdateCollectionAuthority => {
      return {
        $type: MsgUpdateCollectionAuthority.$type,
        sender,
        collectionId: Long.fromString(collection_id),
        newAuthority: new_authority,
      };
    },
  },
};
