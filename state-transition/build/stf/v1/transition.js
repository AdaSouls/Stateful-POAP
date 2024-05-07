import { isPoapMint } from './types';
import { persistCreate } from './persist';
export const poapMint = async (input) => {
    const poapCreateQuery = persistCreate(input.address, input.tokenId, input.type);
    return [poapCreateQuery];
};
export const scheduledData = async (input) => {
    if (isPoapMint(input)) {
        return poapMint(input);
    }
    return [];
};
