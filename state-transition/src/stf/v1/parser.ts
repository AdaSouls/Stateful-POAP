import type { InvalidInput } from '@game/utils';
import { poaps } from '@game/utils';
import type { ParserRecord } from '@paima/sdk/concise';
import { PaimaParser } from '@paima/sdk/concise';
import type { IssuerCreateInput, EventCreateInput, PoapMintInput, PoapUpdateInput, ParsedSubmittedInput } from './types';

// issuerCreate|{"0":"0","1":"0xfe02781cc0fe76Bfd2D211430bfa97D2889fd853","issuerId":"0","issuerAddress":"0xfe02781cc0fe76Bfd2D211430bfa97D2889fd853"}
// eventCreate|{"0":"0","1":"0","2":"0x2aced68f5c82922da1645b752558fe7882bb07c63e4a756afb4e11ad98345005","issuerId":"0","eventId":"0","eventData":"0x2aced68f5c82922da1645b752558fe7882bb07c63e4a756afb4e11ad98345005"}

const myGrammar = `
issuerCreate        = issuerCreate|payload
eventCreate         = eventCreate|payload
poapMint            = poapMint|address|eventId|tokenId|type
poapUpdate          = poapUpdate|address|eventId|tokenId|type
`;

/* const issuerCreate: ParserRecord<IssuerCreateInput> = {
  renameCommand: 'issuerCreate',
  effect: 'issuerCreate',
  issuerId: PaimaParser.NumberParser(),
  issuerAddress: PaimaParser.WalletAddress(),
}; */

const issuerCreate = {
  payload: (
    _: string,
    input: string
  ): { issuerId: number; issuerAddress: string } => {
    if (!input) throw new Error('Input expected for swap_commands');
    const data: Record<string, string> = JSON.parse(input);
    const issuerId = parseInt(data.issuerId, 10);
    const issuerAddress = data.issuerAddress;

    return { issuerId, issuerAddress };
  }
}

const eventCreate = {
  payload: (
    _: string,
    input: string
  ): { issuerId: number; eventId: number, eventMaxSupply: number, eventMintExpiration: number, eventOrganizer: string, eventMetadata: string } => {
    if (!input) throw new Error('Input expected for swap_commands');
    const data: Record<string, string> = JSON.parse(input);
    const issuerId = parseInt(data.issuerId, 10);
    const eventId = parseInt(data.issuerId, 10);
    const eventMaxSupply = parseInt(data.issuerId, 10);
    const eventMintExpiration = parseInt(data.issuerId, 10);
    const eventOrganizer = data.eventOrganizer;
    const eventMetadata = data.eventOrganizer;

    return { issuerId, eventId, eventMaxSupply, eventMintExpiration, eventOrganizer, eventMetadata };
  }
}

/* const eventCreate: ParserRecord<EventCreateInput> = {
  renameCommand: 'eventCreate',
  effect: 'eventCreate',
  issuerId: PaimaParser.NumberParser(),
  eventId: PaimaParser.NumberParser(),
  eventMaxSupply: PaimaParser.NumberParser(),
  eventMintExpiration: PaimaParser.NumberParser(),
  eventOrganizer: PaimaParser.WalletAddress(),
  eventMetadata: PaimaParser.HexParser(),
}; */

const poapMint: ParserRecord<PoapMintInput> = {
  renameCommand: 'scheduledData',
  effect: 'poapMint',
  address: PaimaParser.WalletAddress(),
  eventId: PaimaParser.NumberParser(),
  instance: PaimaParser.NumberParser(),
  type: PaimaParser.EnumParser(poaps),
};

const poapUpdate: ParserRecord<PoapUpdateInput> = {
  renameCommand: 'poapUpdate',
  effect: 'poapUpdate',
  address: PaimaParser.WalletAddress(),
  eventId: PaimaParser.NumberParser(),
  tokenId: PaimaParser.NumberParser(),
  type: PaimaParser.EnumParser(poaps),
};

const parserCommands: Record<string, ParserRecord<ParsedSubmittedInput>> = {
  issuerCreate,
  eventCreate,
  poapMint,
  poapUpdate,
};

const myParser = new PaimaParser(myGrammar, parserCommands);
export function isInvalid(input: ParsedSubmittedInput): input is InvalidInput {
  console.log("IsInvalid received: ", input);
  return (input as InvalidInput).input == 'invalidString';
}

function parse(s: string): ParsedSubmittedInput {
  try {
    const parsed = myParser.start(s);
    return { input: parsed.command, ...parsed.args } as any;
  } catch (e) {
    console.log(e, 'Parsing error');
    return { input: 'invalidString' };
  }
}

export default parse;

/* Encode/Decode

import { ethers } from "ethers";

const abiEncoder = new ethers.AbiCoder();

const getTimestamp = (date: Date) => {
  return date.getTime() / 1000;
};

export const encodeStatus = (poapStatus: IEvent[]) => {
  const data = poapStatus.map((status) => {
    return {
      ...status,
      startDate: getTimestamp(status.startDate),
      endDate: getTimestamp(status.endDate),
      expiryDate: getTimestamp(
        status.expiryDate || new Date(Date.now() + 60 * 60 * 24 * 365 * 99)
      ),
    };
  });
  const encodedStatus = abiEncoder.encode(
    [
      "tuple(string title,string description,string city,string country,uint256 startDate,uint256 endDate,uint256 expiryDate,uint256 year,string eventUrl,bool virtualEvent,string image,uint256 secretCode,uint256 eventTemplateId,string email,uint256 requestedCodes,bool privateEvent,string purpose,string platform,string eventType,uint256 amountOfAttendees,string account,string poapType,uint256 poapsToBeMinted,uint256 mintedPoaps,uint256 idInContract)[]",
    ],
    [data]
  );
  return encodedStatus;
};

export const decodeStatus = (status: string) => {
  const decodedStatus = abiEncoder.decode(
    [
      "tuple(string title,string description,string city,string country,uint256 startDate,uint256 endDate,uint256 expiryDate,uint256 year,string eventUrl,bool virtualEvent,string image,uint256 secretCode,uint256 eventTemplateId,string email,uint256 requestedCodes,bool privateEvent,string purpose,string platform,string eventType,uint256 amountOfAttendees,string account,string poapType,uint256 poapsToBeMinted,uint256 mintedPoaps,uint256 idInContract)[]",
    ],
    status
  );

  const decodedArray = decodedStatus[0].map((inputArray: any) => ({
    title: inputArray[0] as string,
    description: inputArray[1] as string,
    city: inputArray[2] as string,
    country: inputArray[3] as string,
    startDate: new Date(Number(inputArray[4]) * 1000), // Convert to milliseconds
    endDate: new Date(Number(inputArray[5]) * 1000), // Convert to milliseconds
    expiryDate: new Date(Number(inputArray[6]) * 1000), // Convert to milliseconds
    year: Number(inputArray[7]),
    eventUrl: inputArray[8] as string,
    virtualEvent: inputArray[9] as boolean,
    image: inputArray[10] as string,
    secretCode: Number(inputArray[11]),
    eventTemplateId: Number(inputArray[12]),
    email: inputArray[13] as string,
    requestedCodes: Number(inputArray[14]),
    privateEvent: inputArray[15] as boolean,
    purpose: inputArray[16] as string,
    platform: inputArray[17] as string,
    eventType: inputArray[18] as string,
    amountOfAttendees: Number(inputArray[19]),
    account: inputArray[20] as string,
    poapType: inputArray[21] as string,
    poapsToBeMinted: Number(inputArray[22]),
    mintedPoaps: Number(inputArray[23]),
    idInContract: Number(inputArray[24])
  }));
  return decodedArray;
};
*/