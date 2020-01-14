import { BarberShopState, BarberShopActionTypes, BarberShop, GET_TOP_BARBER_SHOPS } from "../../types/barberShop";
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
        default:
            return state;
    }
}

export const useTypedSelector: TypedUseSelectorHook<BarberShopState> = useSelector

