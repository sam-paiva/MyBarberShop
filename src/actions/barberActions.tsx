import * as types from '../types/barber/index';
import * as service from '../service/service';


export function getBarberFromBarberShopAction(id: string) {
    return (dispatch: (arg0: { type: string; payload: types.Barber[]; }) => void) => {
        try {
            const response = service.getBarbersFromBarberShops(id);

            response.then(res => {
                dispatch({ type: types.GET_BARBERS_FROM_BARBER_SHOP, payload: res.data })
            })
        } catch (error) {

        }
    }
}