/** Types generated for queries found in "src/insert.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

import type { PoapType } from '@src/common.js';

/** 'CreateIssuer' parameters type */
export interface ICreateIssuerParams {
  address: string;
  issuerId: number;
}

/** 'CreateIssuer' return type */
export type ICreateIssuerResult = void;

/** 'CreateIssuer' query type */
export interface ICreateIssuerQuery {
  params: ICreateIssuerParams;
  result: ICreateIssuerResult;
}

const createIssuerIR: any = {"usedParamSet":{"issuerId":true,"address":true},"params":[{"name":"issuerId","required":true,"transform":{"type":"scalar"},"locs":[{"a":57,"b":66}]},{"name":"address","required":true,"transform":{"type":"scalar"},"locs":[{"a":71,"b":79}]}],"statement":"INSERT INTO issuers(\n  \"issuerId\",\n  address)\nVALUES (\n  :issuerId!,\n  :address!\n)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO issuers(
 *   "issuerId",
 *   address)
 * VALUES (
 *   :issuerId!,
 *   :address!
 * )
 * ```
 */
export const createIssuer = new PreparedQuery<ICreateIssuerParams,ICreateIssuerResult>(createIssuerIR);


/** 'CreateEvent' parameters type */
export interface ICreateEventParams {
  eventId: number;
  eventMaxSupply: number;
  eventMetadata: string;
  eventMintExpiration: number;
  eventOrganizer: string;
  issuerId: number;
}

/** 'CreateEvent' return type */
export type ICreateEventResult = void;

/** 'CreateEvent' query type */
export interface ICreateEventQuery {
  params: ICreateEventParams;
  result: ICreateEventResult;
}

const createEventIR: any = {"usedParamSet":{"eventId":true,"issuerId":true,"eventMaxSupply":true,"eventMintExpiration":true,"eventOrganizer":true,"eventMetadata":true},"params":[{"name":"eventId","required":true,"transform":{"type":"scalar"},"locs":[{"a":142,"b":150}]},{"name":"issuerId","required":true,"transform":{"type":"scalar"},"locs":[{"a":155,"b":164}]},{"name":"eventMaxSupply","required":true,"transform":{"type":"scalar"},"locs":[{"a":169,"b":184}]},{"name":"eventMintExpiration","required":true,"transform":{"type":"scalar"},"locs":[{"a":189,"b":209}]},{"name":"eventOrganizer","required":true,"transform":{"type":"scalar"},"locs":[{"a":214,"b":229}]},{"name":"eventMetadata","required":true,"transform":{"type":"scalar"},"locs":[{"a":234,"b":248}]}],"statement":"INSERT INTO events(\n  \"eventId\",\n  \"issuerId\",\n  \"eventMaxSupply\",\n  \"eventMintExpiration\",\n  \"eventOrganizer\",\n  \"eventMetadata\")\nVALUES (\n  :eventId!,\n  :issuerId!,\n  :eventMaxSupply!,\n  :eventMintExpiration!,\n  :eventOrganizer!,\n  :eventMetadata!\n)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO events(
 *   "eventId",
 *   "issuerId",
 *   "eventMaxSupply",
 *   "eventMintExpiration",
 *   "eventOrganizer",
 *   "eventMetadata")
 * VALUES (
 *   :eventId!,
 *   :issuerId!,
 *   :eventMaxSupply!,
 *   :eventMintExpiration!,
 *   :eventOrganizer!,
 *   :eventMetadata!
 * )
 * ```
 */
export const createEvent = new PreparedQuery<ICreateEventParams,ICreateEventResult>(createEventIR);


/** 'CreatePoap' parameters type */
export interface ICreatePoapParams {
  address: string;
  eventId: number;
  instance: number;
  type: PoapType;
}

/** 'CreatePoap' return type */
export type ICreatePoapResult = void;

/** 'CreatePoap' query type */
export interface ICreatePoapQuery {
  params: ICreatePoapParams;
  result: ICreatePoapResult;
}

const createPoapIR: any = {"usedParamSet":{"address":true,"eventId":true,"instance":true,"type":true},"params":[{"name":"address","required":true,"transform":{"type":"scalar"},"locs":[{"a":80,"b":88}]},{"name":"eventId","required":true,"transform":{"type":"scalar"},"locs":[{"a":93,"b":101}]},{"name":"instance","required":true,"transform":{"type":"scalar"},"locs":[{"a":106,"b":115}]},{"name":"type","required":true,"transform":{"type":"scalar"},"locs":[{"a":120,"b":125}]}],"statement":"INSERT INTO poaps(\n  address,\n  \"eventId\",\n  instance,\n  \"poapType\")\nVALUES (\n  :address!,\n  :eventId!,\n  :instance!,\n  :type!\n)"};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO poaps(
 *   address,
 *   "eventId",
 *   instance,
 *   "poapType")
 * VALUES (
 *   :address!,
 *   :eventId!,
 *   :instance!,
 *   :type!
 * )
 * ```
 */
export const createPoap = new PreparedQuery<ICreatePoapParams,ICreatePoapResult>(createPoapIR);


