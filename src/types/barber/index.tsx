import { BarberShop } from "../barberShop";
export const GET_BARBERS_FROM_BARBER_SHOP = 'GET_BARBERS_FROM_BARBER_SHOP';
export const MAKE_APPOINTMENT = 'MAKE_APPOINTMENT';


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
    barbers: [],
    makeAppointment: boolean
}

export interface GetBarbersFromBarberShop {
    type: typeof GET_BARBERS_FROM_BARBER_SHOP,
    payload: []
}

export interface MakeAppointment {
    type: typeof MAKE_APPOINTMENT,
    payload: void
}


export type BarberActions = GetBarbersFromBarberShop | MakeAppointment;