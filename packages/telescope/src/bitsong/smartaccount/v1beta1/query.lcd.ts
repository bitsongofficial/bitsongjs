import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, GetAuthenticatorRequest, GetAuthenticatorResponseSDKType, GetAuthenticatorsRequest, GetAuthenticatorsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.getAuthenticator = this.getAuthenticator.bind(this);
    this.getAuthenticators = this.getAuthenticators.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bitsong/smartaccount/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* GetAuthenticator */
  async getAuthenticator(params: GetAuthenticatorRequest): Promise<GetAuthenticatorResponseSDKType> {
    const endpoint = `bitsong/smartaccount/authenticator/${params.account}/${params.authenticatorId}`;
    return await this.req.get<GetAuthenticatorResponseSDKType>(endpoint);
  }
  /* GetAuthenticators */
  async getAuthenticators(params: GetAuthenticatorsRequest): Promise<GetAuthenticatorsResponseSDKType> {
    const endpoint = `bitsong/smartaccount/authenticators/${params.account}`;
    return await this.req.get<GetAuthenticatorsResponseSDKType>(endpoint);
  }
}