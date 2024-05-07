/** Types generated for queries found in "src/update.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
/** Query 'LvlUpCharacter' is invalid, so its result is assigned type 'never'.
 *  */
export type ILvlUpCharacterResult = never;
/** Query 'LvlUpCharacter' is invalid, so its parameters are assigned type 'never'.
 *  */
export type ILvlUpCharacterParams = never;
/**
 * Query generated from SQL:
 * ```
 * UPDATE characters
 * SET
 * level = level + 1
 * WHERE nft_id = :nft_id! AND address = :address!
 * ```
 */
export declare const lvlUpCharacter: PreparedQuery<never, never>;
