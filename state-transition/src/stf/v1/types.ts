import type { PoapType, InvalidInput } from '@game/utils';
import type { WalletAddress } from '@paima/sdk/utils';

export interface ScheduledDataInput {
  input: 'scheduledData';
}

export interface IssuerCreateInput {
  input: 'issuerCreate';
  issuerId: number;
  issuerAddress: WalletAddress;
}

export interface EventCreateInput {
  input: 'eventCreate';
  issuerId: number,
  eventId: number,
  eventMaxSupply: number,
  eventMintExpiration: number,
  eventOrganizer: WalletAddress,
  eventMetadata: string,
}

export interface PoapMintInput extends ScheduledDataInput {
  effect: 'poapMint';
  address: WalletAddress;
  eventId: number;
  tokenId: string;
  type: PoapType;
}

export interface PoapUpdateInput extends ScheduledDataInput {
  effect: 'poapUpdate';
  address: WalletAddress;
  eventId: number;
  tokenId: string;
  type: PoapType;
}

export function isPoapMint(input: ScheduledDataInput): input is PoapMintInput {
  return (input as PoapMintInput).effect === 'poapMint';
}

export function isPoapUpdate(input: ScheduledDataInput): input is PoapUpdateInput {
  return (input as PoapUpdateInput).effect === 'poapUpdate';
}

export type ParsedSubmittedInput = IssuerCreateInput | PoapMintInput | InvalidInput;
