import { AuctionPrizeType, auctionPrizeTypeFromJSON } from './auction';
import { Duration } from '../../google/protobuf/duration';
import { Coin } from '../../cosmos/base/v1beta1/coin';
import { AminoMsg } from '@cosmjs/amino';
import {
  MsgCreateAuction,
  MsgSetAuctionAuthority,
  MsgStartAuction,
  MsgEndAuction,
  MsgPlaceBid,
  MsgCancelBid,
  MsgClaimBid,
} from './tx';
import Long from 'long';

export interface AminoMsgCreateAuction extends AminoMsg {
  type: '/bitsong.marketplace.MsgCreateAuction';
  value: {
    sender: string;
    nft_id: string;
    prize_type: number;
    bid_denom: string;
    duration: {
      seconds: string;
      nanos: number;
    };
    price_floor: string;
    instant_sale_price: string;
    tick_size: string;
    edition_limit: string;
  };
}

export interface AminoMsgSetAuctionAuthority extends AminoMsg {
  type: '/bitsong.marketplace.MsgSetAuctionAuthority';
  value: {
    sender: string;
    auction_id: string;
    new_authority: string;
  };
}

export interface AminoMsgStartAuction extends AminoMsg {
  type: '/bitsong.marketplace.MsgStartAuction';
  value: {
    sender: string;
    auction_id: string;
  };
}

export interface AminoMsgEndAuction extends AminoMsg {
  type: '/bitsong.marketplace.MsgEndAuction';
  value: {
    sender: string;
    auction_id: string;
  };
}

export interface AminoMsgPlaceBid extends AminoMsg {
  type: '/bitsong.marketplace.MsgPlaceBid';
  value: {
    sender: string;
    auction_id: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}

export interface AminoMsgCancelBid extends AminoMsg {
  type: '/bitsong.marketplace.MsgCancelBid';
  value: {
    sender: string;
    auction_id: string;
  };
}

export interface AminoMsgClaimBid extends AminoMsg {
  type: '/bitsong.marketplace.MsgClaimBid';
  value: {
    sender: string;
    auction_id: string;
  };
}

export const aminoConverter = {
  '/bitsong.marketplace.MsgCreateAuction': {
    aminoType: 'go-bitsong/marketplace/MsgCreateAuction',
    toAmino: ({
      sender,
      nftId,
      prizeType,
      bidDenom,
      duration,
      priceFloor,
      instantSalePrice,
      tickSize,
      editionLimit,
    }: MsgCreateAuction): AminoMsgCreateAuction['value'] => {
      return {
        sender,
        nft_id: nftId,
        prize_type: prizeType,
        bid_denom: bidDenom,
        duration: {
          seconds: (
            (duration?.seconds.toNumber() ?? 0) * 1_000_000_000
          ).toString(),
          nanos: duration?.nanos ?? 0,
        },
        price_floor: priceFloor.toString(),
        instant_sale_price: instantSalePrice.toString(),
        tick_size: tickSize.toString(),
        edition_limit: editionLimit.toString(),
      };
    },
    fromAmino: ({
      sender,
      nft_id,
      prize_type,
      bid_denom,
      duration,
      price_floor,
      instant_sale_price,
      tick_size,
      edition_limit,
    }: AminoMsgCreateAuction['value']): MsgCreateAuction => {
      return {
        $type: MsgCreateAuction.$type,
        sender,
        nftId: nft_id,
        prizeType: auctionPrizeTypeFromJSON(prize_type),
        bidDenom: bid_denom,
        duration: {
          $type: Duration.$type,
          seconds: Long.fromNumber(
            Math.floor(parseInt(duration.seconds) / 1_000_000_000),
          ),
          nanos: duration.nanos % 1_000_000_000,
        },
        priceFloor: Long.fromString(price_floor),
        instantSalePrice: Long.fromString(instant_sale_price),
        tickSize: Long.fromString(tick_size),
        editionLimit: Long.fromString(edition_limit),
      };
    },
  },
  '/bitsong.marketplace.MsgSetAuctionAuthority': {
    aminoType: 'go-bitsong/marketplace/MsgSetAuctionAuthority',
    toAmino: ({
      sender,
      auctionId,
      newAuthority,
    }: MsgSetAuctionAuthority): AminoMsgSetAuctionAuthority['value'] => {
      return {
        sender,
        auction_id: auctionId.toString(),
        new_authority: newAuthority,
      };
    },
    fromAmino: ({
      sender,
      auction_id,
      new_authority,
    }: AminoMsgSetAuctionAuthority['value']): MsgSetAuctionAuthority => {
      return {
        $type: MsgSetAuctionAuthority.$type,
        sender,
        auctionId: Long.fromString(auction_id),
        newAuthority: new_authority,
      };
    },
  },
  '/bitsong.marketplace.MsgStartAuction': {
    aminoType: 'go-bitsong/marketplace/MsgStartAuction',
    toAmino: ({
      sender,
      auctionId,
    }: MsgStartAuction): AminoMsgStartAuction['value'] => {
      return {
        sender,
        auction_id: auctionId.toString(),
      };
    },
    fromAmino: ({
      sender,
      auction_id,
    }: AminoMsgStartAuction['value']): MsgStartAuction => {
      return {
        $type: MsgStartAuction.$type,
        sender,
        auctionId: Long.fromString(auction_id),
      };
    },
  },
  '/bitsong.marketplace.MsgEndAuction': {
    aminoType: 'go-bitsong/marketplace/MsgEndAuction',
    toAmino: ({
      sender,
      auctionId,
    }: MsgEndAuction): AminoMsgEndAuction['value'] => {
      return {
        sender,
        auction_id: auctionId.toString(),
      };
    },
    fromAmino: ({
      sender,
      auction_id,
    }: AminoMsgEndAuction['value']): MsgEndAuction => {
      return {
        $type: MsgEndAuction.$type,
        sender,
        auctionId: Long.fromString(auction_id),
      };
    },
  },
  '/bitsong.marketplace.MsgPlaceBid': {
    aminoType: 'go-bitsong/marketplace/MsgPlaceBid',
    toAmino: ({
      sender,
      auctionId,
      amount,
    }: MsgPlaceBid): AminoMsgPlaceBid['value'] => {
      return {
        sender,
        auction_id: auctionId.toString(),
        amount: amount
          ? {
              denom: amount.denom,
              amount: Long.fromString(amount.amount).toString(),
            }
          : {
              denom: '',
              amount: '0',
            },
      };
    },
    fromAmino: ({
      sender,
      auction_id,
      amount,
    }: AminoMsgPlaceBid['value']): MsgPlaceBid => {
      return {
        $type: MsgPlaceBid.$type,
        sender,
        auctionId: Long.fromString(auction_id),
        amount: amount
          ? {
              $type: Coin.$type,
              denom: amount.denom,
              amount: amount.amount,
            }
          : {
              $type: Coin.$type,
              denom: '',
              amount: '0',
            },
      };
    },
  },
  '/bitsong.marketplace.MsgCancelBid': {
    aminoType: 'go-bitsong/marketplace/MsgCancelBid',
    toAmino: ({
      sender,
      auctionId,
    }: MsgCancelBid): AminoMsgCancelBid['value'] => {
      return {
        sender,
        auction_id: auctionId.toString(),
      };
    },
    fromAmino: ({
      sender,
      auction_id,
    }: AminoMsgCancelBid['value']): MsgCancelBid => {
      return {
        $type: MsgCancelBid.$type,
        sender,
        auctionId: Long.fromString(auction_id),
      };
    },
  },
  '/bitsong.marketplace.MsgClaimBid': {
    aminoType: 'go-bitsong/marketplace/MsgClaimBid',
    toAmino: ({
      sender,
      auctionId,
    }: MsgClaimBid): AminoMsgClaimBid['value'] => {
      return {
        sender,
        auction_id: auctionId.toString(),
      };
    },
    fromAmino: ({
      sender,
      auction_id,
    }: AminoMsgClaimBid['value']): MsgClaimBid => {
      return {
        $type: MsgClaimBid.$type,
        sender,
        auctionId: Long.fromString(auction_id),
      };
    },
  },
};
