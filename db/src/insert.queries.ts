/** Types generated for queries found in "src/insert.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

import type { PoapType } from '@src/common.js';

/** 'CreatePoap' parameters type */
export interface ICreatePoapParams {
  address: string;
  nft_id: string;
  type: PoapType;
  initialEventData: string,
}

/** 'CreatePoap' return type */
export type ICreatePoapResult = void;

/** 'CreatePoap' query type */
export interface ICreatePoapQuery {
  params: ICreatePoapParams;
  result: ICreatePoapResult;
}

const createPoapIR: any = {"usedParamSet":{"address":true,"nft_id":true,"type":true},"params":[{"name":"address","required":true,"transform":{"type":"scalar"},"locs":[{"a":59,"b":67}]},{"name":"nft_id","required":true,"transform":{"type":"scalar"},"locs":[{"a":72,"b":79}]},{"name":"type","required":true,"transform":{"type":"scalar"},"locs":[{"a":84,"b":89}]}],"statement":"INSERT INTO poaps(\n  address,\n  nft_id,\n  type)\nVALUES (\n  :address!,\n  :nft_id!,\n  :type!\n)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO poaps(
 *   address,
 *   nft_id,
 *   type)
 * VALUES (
 *   :address!,
 *   :nft_id!,
 *   :type!
 * )
 * ```
 */
export const createPoap = new PreparedQuery<ICreatePoapParams,ICreatePoapResult>(createPoapIR);


