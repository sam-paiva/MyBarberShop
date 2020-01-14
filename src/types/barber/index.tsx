import { BarberShop } from "../barberShop";



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