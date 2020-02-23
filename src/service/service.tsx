import axios from 'axios';
import { ActionSheetIOS } from 'react-native';
import { Login, User } from '../types/account';

const URL_BASE = 'http://192.168.11.6:5000/api';
const URL_LOGIN = 'http://192.168.11.6:5001/api';

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

export const login = async (login: Login) => {
    const response = await axios.post(URL_LOGIN + '/account', login);

    return response;
}

export const createAccount = async (user: User) => {
    const response = await axios.post(URL_LOGIN + '/account/createaccount', user);

    return response;
}