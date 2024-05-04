import type { LevelUpResponse } from '../types';
import type { Result } from '@paima/sdk/mw-core';
import type { WalletAddress } from '@paima/sdk/utils';
declare function levelUp(contractAddress: WalletAddress, nftId: string): Promise<Result<LevelUpResponse>>;
export declare const writeEndpoints: {
    levelUp: typeof levelUp;
};
export {};
