const VERSION_MAJOR = 1;
const VERSION_MINOR = 1;
const VERSION_PATCH = 1;
export const gameBackendVersion = `${VERSION_MAJOR}.${VERSION_MINOR}.${VERSION_PATCH}`;
export const GAME_NAME = 'Stateful POAP';
export const PRACTICE_BOT_ADDRESS = '0x0101';
/**
 * Taken from deployed contract data in extensions.yml
 */
export const POAP_CODE = 'statefulPoap';
export const SOULBOUND_POAP_CODE = 'statefulSoulboundPoap';
export const CONSENSUAL_SOULBOUND_POAP_CODE = 'statefulConsensualSoulboundPoap';
export * from './types.js';
