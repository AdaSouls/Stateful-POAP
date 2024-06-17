import type { PoapType, InvalidInput } from '@game/utils';
import type { WalletAddress } from '@paima/sdk/utils';

export interface ScheduledDataInput {
  input: 'scheduledData';
}

export interface IssuerCreateInput {
  input: 'issuerCreate';
  payload: {
    issuerId: number;
    issuerAddress: WalletAddress;
  }
}

export interface EventCreateInput {
  input: 'eventCreate';
  payload: {
    issuerId: number,
    eventId: number,
    eventMaxSupply: number,
    eventMintExpiration: number,
    eventOrganizer: WalletAddress,
    eventMetadata: string,
  }
}

export interface PoapMintInput extends ScheduledDataInput {
  effect: 'poapMint';
  address: WalletAddress;
  eventId: number;
  instance: number;
  type: PoapType;
}

export interface PoapUpdateInput {
  input: 'poapUpdate';
  effect: 'poapUpdate';
  address: WalletAddress;
  eventId: number;
  tokenId: string;
  type: PoapType;
}

export function isPoapMint(input: ScheduledDataInput): input is PoapMintInput {
  return (input as PoapMintInput).effect === 'poapMint';
}

export function isPoapUpdate(input: PoapUpdateInput): input is PoapUpdateInput {
  return (input as PoapUpdateInput).effect === 'poapUpdate';
}

export type ParsedSubmittedInput = IssuerCreateInput | EventCreateInput | PoapMintInput | PoapUpdateInput | InvalidInput;
