import type { OwnedPoapsResponse } from '@game/utils';
import { backendQueryOwnedPoaps } from '../helpers/query-constructors';
import type { Result } from '../types';

export async function getOwnedPoaps(wallet: string): Promise<Result<OwnedPoapsResponse>> {
  const query = backendQueryOwnedPoaps(wallet);
  const response = await fetch(query);

  const json = (await response.json()) as OwnedPoapsResponse;
  return {
    success: true,
    result: json,
  };
}

export const queryEndpoints = {
  getOwnedPoaps,
};
