export const NETWORK: string = process.env.NETWORK ?? 'localhost';
export const CHAIN_URI: string = process.env.CHAIN_URI ?? '';
export const CHAIN_EXPLORER_URI: string = process.env.CHAIN_EXPLORER_URI ?? '';
export const CHAIN_NAME: string = process.env.CHAIN_NAME ?? '';
export const CHAIN_ID: number = parseInt(process.env.CHAIN_ID ?? '31337');
export const CHAIN_CURRENCY_NAME: string = process.env.CHAIN_CURRENCY_SYMBOL ?? '';
export const CHAIN_CURRENCY_SYMBOL: string = process.env.CHAIN_CURRENCY_SYMBOL ?? '';
export const CHAIN_CURRENCY_DECIMALS: number = parseInt(
  process.env.CHAIN_CURRENCY_DECIMALS ?? '18'
);

export const POAP: string = process.env.POAP_CONTRACT ?? '';