import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftController {
    constructor() {
        // console.log('😛');
        AppState.on('user', this.getGifts)
    }

    async getGifts() {
        console.log('🥳🥳🥳🥳🥳');
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error);
            console.error('ERROR!! 😱');
        }

    }
}