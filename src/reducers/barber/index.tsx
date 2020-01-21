import { BarberState, BarberActions, GET_BARBERS_FROM_BARBER_SHOP } from "../../types/barber";

const initialState: BarberState = {
    barbers: []
}


export default function barberReducer(state = initialState, action: BarberActions): BarberState {
    switch (action.type) {
        case GET_BARBERS_FROM_BARBER_SHOP:
            state.barbers = action.payload;
            return Object.assign({}, state);
        default:
            return state;
    }
}


