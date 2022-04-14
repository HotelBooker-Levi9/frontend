import { CartModel } from "./CartModel";
import { InvoiceModel } from "./InvoiceModel";

export interface ReservationWithCartModel {
    id: number;
    checkInDate?: Date;
    checkOutDate?: Date;
    price: number;
    guestNumber: number;
    isCanceled: boolean;
    hotelId: number;
    cart?: CartModel;
    invoice?: InvoiceModel;
}

export class ReservationWithCartModel implements ReservationWithCartModel {
    contructor(reservation: ReservationWithCartModel) {
        this.id = reservation.id;
        this.checkInDate = reservation.checkInDate;
        this.checkOutDate = reservation.checkOutDate;
        this.price = reservation.price;
        this.guestNumber = reservation.guestNumber;
        this.isCanceled = reservation.isCanceled;
        this.hotelId = reservation.hotelId;
        this.cart = reservation.cart;
        this.invoice = reservation.invoice;
    }
}

export class ReservationFormValues {
    id: number = 0;
    checkInDate: Date = new Date();
    checkOutDate: Date = new Date();
    price: number = 0;
    guestNumber: number = 0;
    isCanceled: boolean = false;
    hotelId: number = 0;
    cart?: CartModel = undefined;
    invoice?: InvoiceModel = undefined;

    constructor(reservation? : ReservationFormValues) {
        if(reservation) {
            this.id = reservation.id;
            this.checkInDate = reservation.checkInDate;
            this.checkOutDate = reservation.checkOutDate;
            this.price = reservation.price;
            this.guestNumber = reservation.guestNumber;
            this.isCanceled = reservation.isCanceled;
            this.hotelId = reservation.hotelId;
            this.cart = reservation.cart;
            this.invoice = reservation.invoice;
        }
    }
}