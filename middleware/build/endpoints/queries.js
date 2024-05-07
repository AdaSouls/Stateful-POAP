import { backendQueryOwnedPoaps } from '../helpers/query-constructors';
export async function getOwnedPoaps(wallet) {
    const query = backendQueryOwnedPoaps(wallet);
    const response = await fetch(query);
    const json = (await response.json());
    return {
        success: true,
        result: json,
    };
}
export const queryEndpoints = {
    getOwnedPoaps,
};
