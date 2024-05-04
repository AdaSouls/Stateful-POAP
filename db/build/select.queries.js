/** Types generated for queries found in "src/select.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
const getUserCharactersIR = { "usedParamSet": { "characters": true }, "params": [{ "name": "characters", "required": true, "transform": { "type": "array_spread" }, "locs": [{ "a": 42, "b": 53 }] }], "statement": "SELECT * FROM characters \nWHERE nft_id IN :characters!" };
/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM characters
 * WHERE nft_id IN :characters!
 * ```
 */
export const getUserCharacters = new PreparedQuery(getUserCharactersIR);
