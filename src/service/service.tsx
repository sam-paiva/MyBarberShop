import axios from 'axios';
import { ActionSheetIOS } from 'react-native';

const URL_BASE = 'http://192.168.11.6:5000/api';

export const getTopBarberShops = async () => {
    return await axios.get(URL_BASE + '/barbershop/topbarbershops');
}

export const getBarbersFromBarberShops = async (id: string) => {
    return await axios.get(URL_BASE + '/barber', {
        params: {
            id: id
        }
    });
}

export const makeAppointment = async (id: number) => {
    return await axios.put(URL_BASE + '/barber', null, {
        params: {
            id
        }
    });
}

export const getAllBarberShops = async () => {
    return await axios.get(URL_BASE + '/barberShop/allbarbershops');
}