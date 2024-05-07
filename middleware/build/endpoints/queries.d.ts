import type { OwnedPoapsResponse } from '@game/utils';
import type { Result } from '../types';
export declare function getOwnedPoaps(wallet: string): Promise<Result<OwnedPoapsResponse>>;
export declare const queryEndpoints: {
    getOwnedPoaps: typeof getOwnedPoaps;
};
