import { LCDClient } from "@osmonauts/lcd";
import { QueryMerkledropRequest, QueryMerkledropResponseSDKType, QueryIndexClaimedRequest, QueryIndexClaimedResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.merkledrop = this.merkledrop.bind(this);
    this.indexClaimed = this.indexClaimed.bind(this);
    this.params = this.params.bind(this);
  }
  /* Merkledrop */


  async merkledrop(params: QueryMerkledropRequest): Promise<QueryMerkledropResponseSDKType> {
    const endpoint = `bitsong/merkledrop/v1beta1/markledrops/${params.id}`;
    return await this.req.get<QueryMerkledropResponseSDKType>(endpoint);
  }
  /* IndexClaimed */


  async indexClaimed(params: QueryIndexClaimedRequest): Promise<QueryIndexClaimedResponseSDKType> {
    const endpoint = `bitsong/merkledrop/v1beta1/markledrops/${params.id}/index_claimed/${params.index}`;
    return await this.req.get<QueryIndexClaimedResponseSDKType>(endpoint);
  }
  /* Params queries the fantoken parameters */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bitsong/merkledrop/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

}