import type { ICreatePoapParams } from '@game/db';
import { createPoap } from '@game/db';
import type { PoapType } from '@game/utils';
import type { SQLUpdate } from '@paima/node-sdk/db';
import type { WalletAddress } from '@paima/sdk/utils';

// this file deals with receiving blockchain data input and outputting SQL updates (imported from pgTyped output of our SQL files)
// PGTyped SQL updates are a tuple of the function calling the database and the params sent to it.

export function persistCreate(
  address: WalletAddress,
  nftId: string,
  type: PoapType
): SQLUpdate {
  const params: ICreatePoapParams = {
    type,
    address,
    nft_id: nftId,
  };
  return [createPoap, params];
}
