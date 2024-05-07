import type { PoapType, InvalidInput } from '@game/utils';
import type { WalletAddress } from '@paima/sdk/utils';
export interface ScheduledDataInput {
    input: 'scheduledData';
}
export interface PoapMintInput extends ScheduledDataInput {
    effect: 'poapMint';
    tokenId: string;
    address: WalletAddress;
    type: PoapType;
}
export declare function isPoapMint(input: ScheduledDataInput): input is PoapMintInput;
export type ParsedSubmittedInput = PoapMintInput | InvalidInput;
