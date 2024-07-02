/** Types generated for queries found in "src/select.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

import type { PoapType } from '@src/common.js';

/** 'GetUserPoaps' parameters type */
export interface IGetUserPoapsParams {
  poaps: readonly (number)[];
}

/** 'GetUserPoaps' return type */
export interface IGetUserPoapsResult {
  address: string;
  createdAt: Date | null;
  eventId: number;
  instance: number;
  issuerId: number;
  poap: string;
  poapType: PoapType;
  updatedAt: Date | null;
  uuid: string;
}

/** 'GetUserPoaps' query type */
export interface IGetUserPoapsQuery {
  params: IGetUserPoapsParams;
  result: IGetUserPoapsResult;
}

const getUserPoapsIR: any = {"usedParamSet":{"poaps":true},"params":[{"name":"poaps","required":true,"transform":{"type":"array_spread"},"locs":[{"a":39,"b":45}]}],"statement":"SELECT * FROM poaps \nWHERE instance IN :poaps!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM poaps 
 * WHERE instance IN :poaps!
 * ```
 */
export const getUserPoaps = new PreparedQuery<IGetUserPoapsParams,IGetUserPoapsResult>(getUserPoapsIR);


