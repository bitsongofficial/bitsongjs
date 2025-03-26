import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCadanceContracts, QueryCadanceContractsResponseSDKType, QueryCadanceContract, QueryCadanceContractResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.cadanceContracts = this.cadanceContracts.bind(this);
    this.cadanceContract = this.cadanceContract.bind(this);
    this.params = this.params.bind(this);
  }
  /* CadanceContracts */
  async cadanceContracts(params: QueryCadanceContracts = {
    pagination: undefined
  }): Promise<QueryCadanceContractsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `bitsong/cadance/v1/contracts`;
    return await this.req.get<QueryCadanceContractsResponseSDKType>(endpoint, options);
  }
  /* CadanceContract */
  async cadanceContract(params: QueryCadanceContract): Promise<QueryCadanceContractResponseSDKType> {
    const endpoint = `bitsong/cadance/v1/contracts/${params.contractAddress}`;
    return await this.req.get<QueryCadanceContractResponseSDKType>(endpoint);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `bitsong/cadance/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}