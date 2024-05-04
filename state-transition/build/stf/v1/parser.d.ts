import type { InvalidInput } from '@game/utils';
import type { ParsedSubmittedInput } from './types';
export declare function isInvalid(input: ParsedSubmittedInput): input is InvalidInput;
declare function parse(s: string): ParsedSubmittedInput;
export default parse;
