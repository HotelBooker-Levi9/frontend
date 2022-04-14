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

// export class ReservationFormValues {
//     id: number = 0;
//     checkInDate: Date = new Date();
//     checkOutDate: Date = new Date();
//     price: number = 0;
//     guestNumber: number = 0;
//     isCanceled: boolean = false;
//     hotelId: number = 0;

//     constructor(reservation? : ReservationFormValues) {
//         if(reservation) {
//             this.id = reservation.id;
//             this.checkInDate = reservation.checkInDate;
//             this.checkOutDate = reservation.checkOutDate;
//             this.price = reservation.price;
//             this.guestNumber = reservation.guestNumber;
//             this.isCanceled = reservation.isCanceled;
//             this.hotelId = reservation.hotelId;
//         }
//     }
// }