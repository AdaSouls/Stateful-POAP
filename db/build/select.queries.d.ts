/** Types generated for queries found in "src/select.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
import type { PoapType } from '@src/common.js';
/** 'GetUserCharacters' parameters type */
export interface IGetUserCharactersParams {
    characters: readonly (string)[];
}
/** 'GetUserCharacters' return type */
export interface IGetUserCharactersResult {
    address: string;
    level: number;
    nft_id: string;
    type: NftType;
}
/** 'GetUserPoaps' return type */
export interface IGetUserPoapsResult {
    address: string;
    events: number;
    nft_id: string;
    type: PoapType;
}
/** 'GetUserCharacters' query type */
export interface IGetUserCharactersQuery {
    params: IGetUserCharactersParams;
    result: IGetUserCharactersResult;
}
/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM characters
 * WHERE nft_id IN :characters!
 * ```
 */
export declare const getUserCharacters: PreparedQuery<IGetUserCharactersParams, IGetUserCharactersResult>;
