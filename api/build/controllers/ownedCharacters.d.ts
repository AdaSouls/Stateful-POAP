import { Controller } from 'tsoa';
import type { OwnedCharactersResponse } from '@game/utils';
export declare class OwnedCharactersController extends Controller {
    get(wallet: string): Promise<OwnedCharactersResponse>;
}
