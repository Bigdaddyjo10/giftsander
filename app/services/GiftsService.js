import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";

class GiftService {
    async getGifts() {
        console.log('🥶🥶');
        const response = await api.get('api/gifts')
        console.log('Get the gifts', response.data);
        let gifts = response.data.map(giftData => new Gift(giftData))
        AppState.gifts = gifts
    }


    openGift() {
        console.log('🎁');

    }
}

export const giftsService = new GiftService();