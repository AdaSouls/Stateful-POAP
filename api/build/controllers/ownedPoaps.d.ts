import { Controller } from 'tsoa';
import type { OwnedPoapsResponse } from '@game/utils';
export declare class OwnedPoapsController extends Controller {
    get(wallet: string): Promise<OwnedPoapsResponse>;
}
