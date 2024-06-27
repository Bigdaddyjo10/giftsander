import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftController {
    constructor() {
        // console.log('😛');
        AppState.on('user', this.getGifts)
        AppState.on('gifts', this.drawGiftCard)
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

    drawGiftCard() {
        const giftCards = AppState.gifts
        let innerHTMLString = ''
        giftCards.forEach((giftCard) => {
            innerHTMLString += giftCard.giftHTMLTemplate
        })
        setHTML('gift-container', innerHTMLString)
    }

    async openGift(giftId) {
        try {
            await giftsService.openGift(giftId)
        } catch (error) {
            Pop.error(error);
        }
    }

}