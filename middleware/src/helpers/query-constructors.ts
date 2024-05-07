import { buildBackendQuery } from '@paima/sdk/mw-core';

export function backendQueryOwnedPoaps(wallet: string): string {
  const endpoint = 'owned_poaps';
  const options = { wallet };
  return buildBackendQuery(endpoint, options);
}
