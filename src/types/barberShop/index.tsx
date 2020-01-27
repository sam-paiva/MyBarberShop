import { Barber } from "../barber";

export const GET_TOP_BARBER_SHOPS = 'GET_TOP_BARBER_SHOPS';
export const GET_ALL_BARBER_SHOPS = 'GET_ALL_BARBER_SHOPS';


export interface BarberShop {
    id: number;
    name: string;
    address: string;
    openingTime: string;
    closingTime: string;
    city: string;
    rating: number;
    imagePath: string;
    closed: boolean;
    barbers: Barber[]
}

export interface BarberShopState {
    topBarberShops: BarberShop[],
    allBarberShops: BarberShop[]
}

export interface GetTopBarberShops {
    type: typeof GET_TOP_BARBER_SHOPS,
    payload: BarberShop[]
}

export interface GetAllBarberShops {
    type: typeof GET_ALL_BARBER_SHOPS,
    payload: BarberShop[]
}


export type BarberShopActionTypes = GetTopBarberShops | GetAllBarberShops