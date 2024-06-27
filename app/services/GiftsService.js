import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class GiftService {
    async getGifts() {
        console.log('🥶🥶');
        const response = await api.get('api/gifts')
        console.log('Get the gifts', response.data);
    }
}

export const giftsService = new GiftService();