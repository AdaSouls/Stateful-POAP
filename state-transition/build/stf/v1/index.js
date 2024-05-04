import parse, { isInvalid } from './parser.js';
import { lvlUp, scheduledData } from './transition.js';
// entrypoint for your state machine
export default async function (inputData, _blockHeight, _randomnessGenerator, dbConn) {
    console.log(inputData, 'parsing input data');
    console.log(`Processing input string: ${inputData.inputData}`);
    const user = inputData.userAddress.toLowerCase();
    const parsed = parse(inputData.inputData);
    if (isInvalid(parsed)) {
        console.log(`Invalid input string`);
        return [];
    }
    console.log(`Input string parsed as: ${parsed.input}`);
    switch (parsed.input) {
        case 'lvlUp':
            return lvlUp(user, parsed, dbConn);
        case 'scheduledData':
            if (!inputData.scheduled)
                return [];
            return scheduledData(parsed);
        default:
            return [];
    }
}
