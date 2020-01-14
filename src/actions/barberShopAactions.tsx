import * as service from '../service/service';
import { GET_TOP_BARBER_SHOPS, BarberShop } from '../types/barberShop';


export function getTopBarberShopsAction() {
    return (dispatch: (arg0: { type: string; payload: BarberShop[]; }) => void) => {
        try {
            const response = service.getTopBarberShops();

            response.then(res => {
                dispatch({ type: GET_TOP_BARBER_SHOPS, payload: res.data })
            })
        } catch (error) {

        }
    }
}