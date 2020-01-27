import * as types from '../types/barber/index';
import * as service from '../service/service';
import { ToastAndroid } from 'react-native';
import { showToast } from '../utils/utils';


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

export function makeAppointmentAction(id: number) {
    return (dispatch: (arg0: { type: string; payload: void; }) => void) => {
        try {
            const response = service.makeAppointment(id);


            response.then(res => {

                if (res.status === 200) {
                    showToast('Sucesso na sua requisição', 'green');
                    dispatch({ type: types.MAKE_APPOINTMENT, payload: res.data })
                }

                else {
                    showToast('Ocorreu um erro', 'red');
                }

            })
        } catch (error) {

        }
    }
}