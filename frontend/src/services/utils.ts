import type { PoapType } from '@game/utils';

export const truncateAddress = (address: string): string => {
  const start = address?.slice(0, 5);
  const end = address?.slice(address.length - 5);
  return `${start}...${end}`;
};

export const poapToNumberMap: Record<PoapType, number> = {
  poap: 0,
  soulbound: 1,
  consensual: 2,
};