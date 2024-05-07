import { poaps } from '@game/utils';
import { PaimaParser } from '@paima/sdk/concise';
const myGrammar = `
eventCreate         = eventcreate | 
poapMint            = poapmint|address|tokenId|type
lvlUp               = l|address|*tokenId
`;
const poapMint = {
    renameCommand: 'scheduledData',
    effect: 'poapMint',
    address: PaimaParser.WalletAddress(),
    tokenId: PaimaParser.NumberParser(),
    type: PaimaParser.EnumParser(poaps),
};
const parserCommands = {
    poapMint,
};
const myParser = new PaimaParser(myGrammar, parserCommands);
export function isInvalid(input) {
    return input.input == 'invalidString';
}
function parse(s) {
    try {
        const parsed = myParser.start(s);
        return { input: parsed.command, ...parsed.args };
    }
    catch (e) {
        console.log(e, 'Parsing error');
        return { input: 'invalidString' };
    }
}
export default parse;
