import { CartModel } from "./CartModel";
import { InvoiceModel } from "./InvoiceModel";
import { ReservationModel } from "./ReservationModel";

export interface ReservationWithArrangementModel {
    reservation: ReservationModel;
    hotelName: string;
    cityName: string;
    destinationName: string;
}

export class ReservationWithArrangementModel implements ReservationWithArrangementModel {
    contructor(reservation: ReservationWithArrangementModel) {
        this.reservation = reservation.reservation;
        this.hotelName = reservation.hotelName;
        this.cityName = reservation.cityName;
        this.destinationName = reservation.destinationName;
    }
}