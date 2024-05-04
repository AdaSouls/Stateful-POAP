import type { OwnedCharactersResponse } from '@game/utils';
import type { Result } from '../types';
export declare function getOwnedCharacters(wallet: string): Promise<Result<OwnedCharactersResponse>>;
export declare const queryEndpoints: {
    getOwnedCharacters: typeof getOwnedCharacters;
};
