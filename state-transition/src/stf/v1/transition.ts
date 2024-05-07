import type { SQLUpdate } from '@paima/node-sdk/db';
import type { Pool } from 'pg';
import type { PoapMintInput, ScheduledDataInput } from './types';
import { isPoapMint } from './types';
import { persistCreate } from './persist';
import { isNftOwner } from '@paima/node-sdk/utils-backend';
import type { WalletAddress } from '@paima/sdk/utils';
import { POAP_CODE, SOULBOUND_POAP_CODE, CONSENSUAL_SOULBOUND_POAP_CODE } from '@game/utils';

export const poapMint = async (input: PoapMintInput): Promise<SQLUpdate[]> => {
  const poapCreateQuery = persistCreate(input.address, input.tokenId, input.type);
  return [poapCreateQuery];
};

export const scheduledData = async (input: ScheduledDataInput): Promise<SQLUpdate[]> => {
  if (isPoapMint(input)) {
    return poapMint(input);
  }
  return [];
};
