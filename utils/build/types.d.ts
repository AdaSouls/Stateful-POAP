import type { IGetUserCharactersResult } from '@game/db';
export interface InvalidInput {
    input: 'invalidString';
}
export declare const characters: readonly ["air", "earth", "fire", "water", "ether"];
export type CharacterType = (typeof characters)[number];
export interface OwnedCharactersResponse {
    characters: IGetUserCharactersResult[];
}
