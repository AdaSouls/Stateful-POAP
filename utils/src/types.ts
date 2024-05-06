import type { IGetUserPoapsResult } from '@game/db';

export interface InvalidInput {
  input: 'invalidString';
}

// we have to re-specify this here because ABIs don't contain enums
// https://forum.soliditylang.org/t/reading-enum-values-directly-from-a-contract-with-js-ts-scripts/1155
export const poaps = ['poap', 'soulbound', 'consensual'] as const;
export type PoapType = (typeof poaps)[number];

export interface OwnedPoapsResponse {
  poaps: IGetUserPoapsResult[];
}
