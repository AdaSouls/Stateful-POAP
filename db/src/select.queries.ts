/** Types generated for queries found in "src/select.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

import type { PoapType } from '@src/common.js';

/** 'GetUserPoaps' parameters type */
export interface IGetUserPoapsParams {
  poaps: readonly (string)[];
}

/** 'GetUserPoaps' return type */
export interface IGetUserPoapsResult {
  address: string;
  nft_id: string;
  type: PoapType;
}

/** 'GetUserPoaps' query type */
export interface IGetUserPoapsQuery {
  params: IGetUserPoapsParams;
  result: IGetUserPoapsResult;
}

const getUserPoapsIR: any = {"usedParamSet":{"poaps":true},"params":[{"name":"poaps","required":true,"transform":{"type":"array_spread"},"locs":[{"a":37,"b":43}]}],"statement":"SELECT * FROM poaps \nWHERE nft_id IN :poaps!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM poaps 
 * WHERE nft_id IN :poaps!
 * ```
 */
export const getUserPoaps = new PreparedQuery<IGetUserPoapsParams,IGetUserPoapsResult>(getUserPoapsIR);


