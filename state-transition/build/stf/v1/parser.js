import { characters } from '@game/utils';
import { PaimaParser } from '@paima/sdk/concise';
const myGrammar = `
lvlUp               = l|address|*tokenId
nftMint             = nftmint|address|tokenId|type
`;
const lvlUp = {
    address: PaimaParser.WalletAddress(),
    tokenId: PaimaParser.RegexParser(/^[0-9]+$/),
};
const nftMint = {
    renameCommand: 'scheduledData',
    effect: 'nftMint',
    address: PaimaParser.WalletAddress(),
    tokenId: PaimaParser.NumberParser(),
    type: PaimaParser.EnumParser(characters),
};
const parserCommands = {
    lvlUp,
    nftMint,
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
