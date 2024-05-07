declare const endpoints: {
    levelUp: (contractAddress: string, nftId: string) => Promise<import("@paima/sdk/mw-core").Result<import("./types").LevelUpResponse>>;
    getOwnedPoaps: typeof import("./endpoints/queries").getOwnedPoaps;
    exportLogs: () => string;
    pushLog: (message: any, ...optionalParams: any[]) => void;
    getLatestProcessedBlockHeight: () => Promise<import("@paima/sdk/mw-core").Result<number>>;
    userWalletLogin: (loginInfo: import("@paima/sdk/mw-core").LoginInfo, setDefault?: boolean | undefined) => Promise<import("@paima/sdk/mw-core").Result<import("@paima/sdk/mw-core").Wallet>>;
    checkWalletStatus: () => Promise<import("@paima/sdk/mw-core").OldResult>;
};
export * from './types';
export type * from './types';
export default endpoints;
