/** Types generated for queries found in "src/update.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
/** 'LvlUpCharacter' parameters type */
export interface ILvlUpCharacterParams {
    address: string;
    nft_id: string;
}
/** 'LvlUpCharacter' return type */
export type ILvlUpCharacterResult = void;
/** 'LvlUpCharacter' query type */
export interface ILvlUpCharacterQuery {
    params: ILvlUpCharacterParams;
    result: ILvlUpCharacterResult;
}
/**
 * Query generated from SQL:
 * ```
 * UPDATE characters
 * SET
 * level = level + 1
 * WHERE nft_id = :nft_id! AND address = :address!
 * ```
 */
export declare const lvlUpCharacter: PreparedQuery<ILvlUpCharacterParams, void>;
