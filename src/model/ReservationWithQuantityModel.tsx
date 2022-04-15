import { CartModel } from "./CartModel";
import { ReservationWithArrangementModel } from "./ReservationWithArrangementModel";

export interface ReservationWithQuantityModel {
    reservation: ReservationWithArrangementModel;
    queantity: number;
}

export class ReservationWithQuantityModel implements ReservationWithQuantityModel {
    contructor(reservation: ReservationWithQuantityModel) {
        this.reservation = reservation.reservation;
        this.queantity = reservation.queantity;
    }
}