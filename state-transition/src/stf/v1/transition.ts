import type { SQLUpdate } from '@paima/node-sdk/db';
import type { Pool } from 'pg';
import type { IssuerCreateInput, EventCreateInput, PoapMintInput, PoapUpdateInput, ScheduledDataInput } from './types';
import { isPoapMint, isPoapUpdate } from './types';
import { persistIssuerCreate, persistEventCreate } from './persist';
import { isNftOwner } from '@paima/node-sdk/utils-backend';
import type { WalletAddress } from '@paima/sdk/utils';
import { POAP_CODE, SOULBOUND_POAP_CODE, CONSENSUAL_SOULBOUND_POAP_CODE } from '@game/utils';

export const issuerCreate = async (input: IssuerCreateInput): Promise<SQLUpdate[]> => {
  const issuerCreateQuery = persistIssuerCreate(input.payload.issuerId, input.payload.issuerAddress);
  return [issuerCreateQuery];
};

export const eventCreate = async (input: EventCreateInput): Promise<SQLUpdate[]> => {
  const eventCreateQuery = persistEventCreate(input.payload.eventId, input.payload.issuerId, input.payload.eventOrganizer, input.payload.eventMaxSupply, input.payload.eventMintExpiration, input.payload.eventMetadata);
  return [eventCreateQuery];
};

/*
export const poapMint = async (input: PoapMintInput): Promise<SQLUpdate[]> => {
  const poapCreateQuery = persistCreate(input.address, input.eventId, input.instance, input.type);
  return [poapCreateQuery];
}; */

/* export const poapUpdate = async (input: PoapUpdateInput): Promise<SQLUpdate[]> => {
  const poapUpdateQuery = persistCreate(input.address, input.tokenId, input.type, input.poapInitialData);
  return [poapUpdateQuery];
}; */

/* export const scheduledData = async (input: IssuerCreateInput | EventCreateInput | PoapMintInput | PoapUpdateInput): Promise<SQLUpdate[]> => {
/*   if (isEventCreate(input)) {
    return eventCreate(input);
  } */
/*   console.log("this is scheduled data: ", input);
  if (isPoapMint(input)) {
    return poapMint(input);
  } */
/*   if (isPoapUpdate(input)) {
    return poapUpdate(input);
  } */
/*   return [];
}; */
