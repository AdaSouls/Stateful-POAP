import { buildErrorCodeTranslator } from '@paima/sdk/utils';
import { PAIMA_MIDDLEWARE_ERROR_MESSAGES, buildAbstractEndpointErrorFxn, } from '@paima/sdk/mw-core';
const MIDDLEWARE_ERROR_MESSAGES = {
    [1000001 /* MiddlewareErrorCode.GENERIC_ERROR */]: 'Unspecified generic Game error',
    [1000002 /* MiddlewareErrorCode.FAILURE_VERIFYING_NFT_OWNERSHIP */]: 'Failure while verifying nft ownership',
};
const errorMessageFxn = buildErrorCodeTranslator({
    ...PAIMA_MIDDLEWARE_ERROR_MESSAGES,
    ...MIDDLEWARE_ERROR_MESSAGES,
});
export function buildEndpointErrorFxn(endpointName) {
    return buildAbstractEndpointErrorFxn(errorMessageFxn, endpointName);
}
