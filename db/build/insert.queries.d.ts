/** Types generated for queries found in "src/insert.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
import type { NftType } from '@src/common.js';
/** 'CreateCharacter' parameters type */
export interface ICreateCharacterParams {
    address: string;
    nft_id: string;
    type: NftType;
}
/** 'CreateCharacter' return type */
export type ICreateCharacterResult = void;
/** 'CreateCharacter' query type */
export interface ICreateCharacterQuery {
    params: ICreateCharacterParams;
    result: ICreateCharacterResult;
}
/**
 * Query generated from SQL:
 * ```
 * INSERT INTO characters(
 *   address,
 *   nft_id,
 *   level,
 *   type)
 * VALUES (
 *   :address!,
 *   :nft_id!,
 *   1,
 *   :type!
 * )
 * ```
 */
export declare const createCharacter: PreparedQuery<ICreateCharacterParams, void>;
