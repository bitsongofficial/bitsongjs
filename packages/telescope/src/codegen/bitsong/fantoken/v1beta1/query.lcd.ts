import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryFanTokenRequest, QueryFanTokenResponseSDKType, QueryFanTokensRequest, QueryFanTokensResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.fanToken = this.fanToken.bind(this);
    this.fanTokens = this.fanTokens.bind(this);
    this.params = this.params.bind(this);
  }
  /* FanToken returns fantoken with fantoken name */


  async fanToken(params: QueryFanTokenRequest): Promise<QueryFanTokenResponseSDKType> {
    const endpoint = `bitsong/fantoken/v1beta1/denom/${params.denom}`;
    return await this.req.get<QueryFanTokenResponseSDKType>(endpoint);
  }
  /* FanTokens returns the fantoken list */


  async fanTokens(params: QueryFanTokensRequest): Promise<QueryFanTokensResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.authority !== "undefined") {
      options.params.authority = params.authority;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `bitsong/fantoken/v1beta1/fantokens`;
    return await this.req.get<QueryFanTokensResponseSDKType>(endpoint, options);
  }
  /* Params queries the fantoken parameters */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bitsong/fantoken/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

}