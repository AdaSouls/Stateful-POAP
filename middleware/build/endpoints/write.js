import { builder } from '@paima/sdk/concise';
import { awaitBlock, postConciseData } from '@paima/sdk/mw-core';
import { buildEndpointErrorFxn } from '../errors';
import { getOwnedCharacters } from './queries';
import { getUserWallet } from '../helpers/utility-functions';
async function levelUp(contractAddress, nftId) {
    const errorFxn = buildEndpointErrorFxn('levelUp');
    const query = getUserWallet(errorFxn);
    if (!query.success)
        return query;
    const userWalletAddress = query.result;
    const conciseBuilder = builder.initialize(undefined);
    conciseBuilder.setPrefix('l');
    conciseBuilder.addValue({ value: contractAddress });
    conciseBuilder.addValue({ value: nftId, isStateIdentifier: true });
    const response = await postConciseData(conciseBuilder.build(), errorFxn);
    if (!response.success)
        return response;
    const currentBlock = response.blockHeight;
    try {
        await awaitBlock(currentBlock + 1);
        const ownedCharacters = await getOwnedCharacters(userWalletAddress);
        const updatedCharacter = ownedCharacters.success &&
            ownedCharacters.result.characters.find(character => character.nft_id === nftId);
        if (!updatedCharacter) {
            return errorFxn(1000002 /* MiddlewareErrorCode.FAILURE_VERIFYING_NFT_OWNERSHIP */);
        }
        return {
            success: true,
            result: { character: updatedCharacter },
        };
    }
    catch (err) {
        return errorFxn(1000002 /* MiddlewareErrorCode.FAILURE_VERIFYING_NFT_OWNERSHIP */);
    }
}
export const writeEndpoints = {
    levelUp,
};
