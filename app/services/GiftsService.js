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

    async openGift(giftId) {
        const response = await api.put(`api/gifts/${giftId}`, { opened: true })
        const openedGift = new Gift(response.data)
        const giftIndex = AppState.gifts.findIndex(((gift) => giftId == gift.id))

        AppState.gifts.splice(giftIndex, 1, openedGift)

        console.log(response.data)
    }
}

export const giftsService = new GiftService();