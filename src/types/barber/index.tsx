import { BarberShop } from "../barberShop";
export const GET_BARBERS_FROM_BARBER_SHOP = 'GET_BARBERS_FROM_BARBER_SHOP';


export interface Barber {
    id: number;
    name: string;
    numberCell: string;
    startTime: string;
    endTime: string;
    photoPath: string;
    rating: number;
    available: boolean;
    barberShop: BarberShop
}

export interface BarberState {
    barbers: []
}

export interface GetBarbersFromBarberShop {
    type: typeof GET_BARBERS_FROM_BARBER_SHOP,
    payload: []
}


export type BarberActions = GetBarbersFromBarberShop;