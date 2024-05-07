/** Types generated for queries found in "src/select.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
import type { PoapType } from './common.js';
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
/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM poaps
 * WHERE nft_id IN :poaps!
 * ```
 */
export declare const getUserPoaps: PreparedQuery<IGetUserPoapsParams, IGetUserPoapsResult>;
