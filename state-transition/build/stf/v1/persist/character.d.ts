import type { CharacterType } from '@game/utils';
import type { SQLUpdate } from '@paima/node-sdk/db';
import type { WalletAddress } from '@paima/sdk/utils';
export declare function persistLvlUp(address: WalletAddress, nftId: string): SQLUpdate;
export declare function persistCreate(address: WalletAddress, nftId: string, type: CharacterType): SQLUpdate;
