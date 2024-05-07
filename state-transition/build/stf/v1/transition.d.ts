import type { SQLUpdate } from '@paima/node-sdk/db';
import type { PoapMintInput, ScheduledDataInput } from './types';
export declare const poapMint: (input: PoapMintInput) => Promise<SQLUpdate[]>;
export declare const scheduledData: (input: ScheduledDataInput) => Promise<SQLUpdate[]>;
