import axios from 'axios';

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