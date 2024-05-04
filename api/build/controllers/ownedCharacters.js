var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Query, Route } from 'tsoa';
import { getUserCharacters, requirePool } from '@game/db';
import { getAllOwnedNfts } from '@paima/node-sdk/utils-backend';
let OwnedCharactersController = class OwnedCharactersController extends Controller {
    async get(wallet) {
        const pool = requirePool();
        wallet = wallet.toLowerCase();
        const nfts = await getAllOwnedNfts(pool, wallet);
        if (nfts.length === 0) {
            return { characters: [] };
        }
        const userCharacters = await getUserCharacters.run({ characters: nfts.map(nft => nft.tokenId.toString()) }, pool);
        return { characters: userCharacters };
    }
};
__decorate([
    Get(),
    __param(0, Query())
], OwnedCharactersController.prototype, "get", null);
OwnedCharactersController = __decorate([
    Route('owned_characters')
], OwnedCharactersController);
export { OwnedCharactersController };
