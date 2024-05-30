import type { InvalidInput } from '@game/utils';
import { poaps } from '@game/utils';
import type { ParserRecord } from '@paima/sdk/concise';
import { PaimaParser } from '@paima/sdk/concise';
import type { IssuerCreateInput, EventCreateInput, PoapMintInput, PoapUpdateInput, ParsedSubmittedInput } from './types';

const myGrammar = `
issuerCreate        = issuerCreate|issuerId|issuerAddress
eventCreate         = eventCreate|issuerId|eventId|eventMaxSupply|eventMintExpiration|eventOrganizer|eventMetadata
poapMint            = poapMint|address|eventId|tokenId|type
poapUpdate          = poapUpdate|address|eventId|tokenId|type
`;

const issuerCreate: ParserRecord<IssuerCreateInput> = {
  issuerId: PaimaParser.NumberParser(),
  issuerAddress: PaimaParser.WalletAddress(),
};

const eventCreate: ParserRecord<EventCreateInput> = {
  issuerId: PaimaParser.NumberParser(),
  eventId: PaimaParser.NumberParser(),
  eventMaxSupply: PaimaParser.NumberParser(),
  eventMintExpiration: PaimaParser.NumberParser(),
  eventOrganizer: PaimaParser.WalletAddress(),
  eventMetadata: PaimaParser.HexParser(),
};

const poapMint: ParserRecord<PoapMintInput> = {
  renameCommand: 'scheduledData',
  effect: 'poapMint',
  address: PaimaParser.WalletAddress(),
  eventId: PaimaParser.NumberParser(),
  tokenId: PaimaParser.NumberParser(),
  type: PaimaParser.EnumParser(poaps),
};

const poapUpdate: ParserRecord<PoapUpdateInput> = {
  renameCommand: 'scheduledData',
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
