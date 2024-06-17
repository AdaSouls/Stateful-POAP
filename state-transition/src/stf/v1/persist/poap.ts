import type { ICreateIssuerParams, ICreateEventParams, ICreatePoapParams } from '@game/db';
import { createIssuer, createEvent, createPoap } from '@game/db';
import type { PoapType } from '@game/utils';
import type { SQLUpdate } from '@paima/node-sdk/db';
import type { WalletAddress } from '@paima/sdk/utils';

// this file deals with receiving blockchain data input and outputting SQL updates (imported from pgTyped output of our SQL files)
// PGTyped SQL updates are a tuple of the function calling the database and the params sent to it.

export function persistIssuerCreate(
  issuerId: number,
  address: WalletAddress,
): SQLUpdate {
  const params: ICreateIssuerParams = {
    issuerId,
    address,
  };
  return [createIssuer, params];
}

export function persistEventCreate(
  eventId: number,
  issuerId: number,
  eventOrganizer: WalletAddress,
  eventMaxSupply: number,
  eventMintExpiration: number,
  eventMetadata: string,
): SQLUpdate {
  const params: ICreateEventParams = {
    eventId,
    issuerId,
    eventOrganizer,
    eventMaxSupply,
    eventMintExpiration,
    eventMetadata,
  };
  return [createEvent, params];
}

/*
export function persistPoapCreate(
  address: WalletAddress,
  eventId: number,
  instance: number,
  type: PoapType,
): SQLUpdate {
  const params: ICreatePoapParams = {
    address,
    eventId,
    instance,
    type,
  };
  return [createPoap, params];
} */
