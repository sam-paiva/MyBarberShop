import { BarberState, BarberActions, GET_BARBERS_FROM_BARBER_SHOP, MAKE_APPOINTMENT } from "../../types/barber";

const initialState: BarberState = {
    barbers: [],
    makeAppointment: false
}


export default function barberReducer(state = initialState, action: BarberActions): BarberState {
    switch (action.type) {
        case GET_BARBERS_FROM_BARBER_SHOP:
            state.barbers = action.payload;
            state.makeAppointment = false;
            return Object.assign({}, state);
        case MAKE_APPOINTMENT:
            state.makeAppointment = true;
            return Object.assign({}, state);
        default:
            return state;
    }
}


