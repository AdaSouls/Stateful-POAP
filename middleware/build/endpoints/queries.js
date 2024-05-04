import { backendQueryOwnedCharacters } from '../helpers/query-constructors';
export async function getOwnedCharacters(wallet) {
    const query = backendQueryOwnedCharacters(wallet);
    const response = await fetch(query);
    const json = (await response.json());
    return {
        success: true,
        result: json,
    };
}
export const queryEndpoints = {
    getOwnedCharacters,
};
