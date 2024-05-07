import type { PoapType } from '@game/utils';
import type { SQLUpdate } from '@paima/node-sdk/db';
import type { WalletAddress } from '@paima/sdk/utils';
export declare function persistCreate(address: WalletAddress, nftId: string, type: PoapType): SQLUpdate;
