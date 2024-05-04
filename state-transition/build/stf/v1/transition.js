import { isNftMint } from './types';
import { persistCreate, persistLvlUp } from './persist';
import { isNftOwner } from '@paima/node-sdk/utils-backend';
import { POAP_CODE } from '@game/utils';
export const lvlUp = async (user, input, dbConn) => {
    const nftId = BigInt(input.tokenId);
    if (!isNftOwner(dbConn, POAP_CODE, nftId, user)) {
        console.log('NFT to lvlup not owned by user');
        return [];
    }
    const lvlUpQuery = persistLvlUp(input.address, input.tokenId);
    return [lvlUpQuery];
};
export const nftMint = async (input) => {
    const characterCreateQuery = persistCreate(input.address, input.tokenId, input.type);
    return [characterCreateQuery];
};
export const scheduledData = async (input) => {
    if (isNftMint(input)) {
        return nftMint(input);
    }
    return [];
};
