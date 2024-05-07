/** Types generated for queries found in "src/insert.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
import type { PoapType } from './common.js';
/** 'CreatePoap' parameters type */
export interface ICreatePoapParams {
    address: string;
    nft_id: string;
    type: PoapType;
}
/** 'CreatePoap' return type */
export type ICreatePoapResult = void;
/** 'CreatePoap' query type */
export interface ICreatePoapQuery {
    params: ICreatePoapParams;
    result: ICreatePoapResult;
}
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
export declare const createPoap: PreparedQuery<ICreatePoapParams, void>;
