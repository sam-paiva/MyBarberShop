import { BarberShopState, BarberShopActionTypes, GET_TOP_BARBER_SHOPS, GET_ALL_BARBER_SHOPS } from "../../types/barberShop";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const initialState: BarberShopState = {
    topBarberShops: [],
    allBarberShops: []
}


export default function barberShopReducer(state = initialState, action: BarberShopActionTypes): BarberShopState {
    switch (action.type) {
        case GET_TOP_BARBER_SHOPS:
            state.topBarberShops = action.payload;
            return Object.assign({}, state);
        case GET_ALL_BARBER_SHOPS:
            state.allBarberShops = action.payload;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export const useTypedSelector: TypedUseSelectorHook<BarberShopState> = useSelector

