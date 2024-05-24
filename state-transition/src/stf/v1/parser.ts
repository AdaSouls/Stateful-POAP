import type { InvalidInput } from '@game/utils';
import { poaps } from '@game/utils';
import type { ParserRecord } from '@paima/sdk/concise';
import { PaimaParser } from '@paima/sdk/concise';
import type { PoapMintInput, ParsedSubmittedInput } from './types';

const myGrammar = `
eventCreate         = eventcreate|*eventId|*eventMaxSupply|*eventMintExpiration|eventOrganizer
poapMint            = poapmint|address|*tokenId|type|poapInitialData
poapUpdate          = poapupdate|address|*tokenId|newPoapData
`;

const poapMint: ParserRecord<PoapMintInput> = {
  renameCommand: 'scheduledData',
  effect: 'poapMint',
  tokenId: PaimaParser.NumberParser(),
  address: PaimaParser.WalletAddress(),
  type: PaimaParser.EnumParser(poaps),
  initialEventData: PaimaParser.HexParser(),
};

const parserCommands: Record<string, ParserRecord<ParsedSubmittedInput>> = {
  poapMint,
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
