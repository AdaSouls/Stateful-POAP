/** Types generated for queries found in "src/select.sql" */
import { PreparedQuery } from '@pgtyped/runtime';
const getUserPoapsIR = { "usedParamSet": { "poaps": true }, "params": [{ "name": "poaps", "required": true, "transform": { "type": "array_spread" }, "locs": [{ "a": 37, "b": 43 }] }], "statement": "SELECT * FROM poaps \nWHERE nft_id IN :poaps!" };
/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM poaps
 * WHERE nft_id IN :poaps!
 * ```
 */
export const getUserPoaps = new PreparedQuery(getUserPoapsIR);
