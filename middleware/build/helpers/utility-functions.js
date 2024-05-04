import { getDefaultActiveAddress } from '@paima/sdk/mw-core';
export const getUserWallet = (errorFxn) => {
    try {
        const wallet = getDefaultActiveAddress();
        if (wallet.length === 0) {
            return errorFxn(1008 /* PaimaMiddlewareErrorCode.WALLET_NOT_CONNECTED */);
        }
        return { result: wallet, success: true };
    }
    catch (err) {
        return errorFxn(4001 /* PaimaMiddlewareErrorCode.INTERNAL_INVALID_POSTING_MODE */, err);
    }
};
