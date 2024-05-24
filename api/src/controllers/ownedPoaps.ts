import { Controller, Get, Query, Route } from 'tsoa';
import { getUserPoaps, requirePool } from '@game/db';
import { getAllOwnedNfts } from '@paima/node-sdk/utils-backend';
import { OwnedPoapsResponse } from '@game/utils';

@Route('owned_poaps')
export class OwnedPoapsController extends Controller {
  @Get()
  public async get(@Query() wallet: string): Promise<OwnedPoapsResponse> {
    const pool = requirePool();
    wallet = wallet.toLowerCase();

    const nfts = await getAllOwnedNfts(pool, wallet);

    if (nfts.length === 0) {
      return { poaps: [] };
    }

    const userPoaps = await getUserPoaps.run(
      { poaps: nfts.map(nft => nft.tokenId.toString()) },
      pool
    );
    return { poaps: userPoaps };
  }
}
