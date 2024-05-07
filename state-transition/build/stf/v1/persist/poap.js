import { createPoap } from '@game/db';
// this file deals with receiving blockchain data input and outputting SQL updates (imported from pgTyped output of our SQL files)
// PGTyped SQL updates are a tuple of the function calling the database and the params sent to it.
export function persistCreate(address, nftId, type) {
    const params = {
        type,
        address,
        nft_id: nftId,
    };
    return [createPoap, params];
}
