import type { EndpointErrorFxn } from '@paima/sdk/mw-core';
export declare const enum MiddlewareErrorCode {
    GENERIC_ERROR = 1000001,
    FAILURE_VERIFYING_NFT_OWNERSHIP = 1000002
}
export declare function buildEndpointErrorFxn(endpointName: string): EndpointErrorFxn;
