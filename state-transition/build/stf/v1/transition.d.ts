import type { SQLUpdate } from '@paima/node-sdk/db';
import type { Pool } from 'pg';
import type { LvlUpInput, NftMintInput, ScheduledDataInput } from './types';
import type { WalletAddress } from '@paima/sdk/utils';
export declare const lvlUp: (user: WalletAddress, input: LvlUpInput, dbConn: Pool) => Promise<SQLUpdate[]>;
export declare const nftMint: (input: NftMintInput) => Promise<SQLUpdate[]>;
export declare const scheduledData: (input: ScheduledDataInput) => Promise<SQLUpdate[]>;
