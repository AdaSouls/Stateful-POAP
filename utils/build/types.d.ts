import type { IGetUserPoapsResult } from '@game/db';
export interface InvalidInput {
    input: 'invalidString';
}
export declare const poaps: readonly ["poap", "soulbound", "consensual"];
export type PoapType = (typeof poaps)[number];
export interface OwnedPoapsResponse {
    poaps: IGetUserPoapsResult[];
}
