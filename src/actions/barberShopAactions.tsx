import * as service from '../service/service';
import * as types from '../types/barberShop';


export function getTopBarberShopsAction() {
    return (dispatch: (arg0: { type: string; payload: types.BarberShop[]; }) => void) => {
        try {
            const response = service.getTopBarberShops();

            response.then(res => {
                dispatch({ type: types.GET_TOP_BARBER_SHOPS, payload: res.data })
            })
        } catch (error) {

        }
    }
}