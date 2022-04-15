import { makeAutoObservable, runInAction, toJS } from "mobx";
import { ReservationModel } from "../model/ReservationModel";
import { ReservationWithArrangementModel } from "../model/ReservationWithArrangementModel";
import { ReservationWithCartModel } from "../model/ReservationWithCartModel";
import cartService from "../service/cartService";
import reservationService from "../service/reservationService";


export default class ReservationStore {
    reservationRegistry = new Map<string, ReservationModel>();
    reservationList: ReservationModel[] = []; 
    reservationWithHotelInfoList: ReservationWithArrangementModel[] = [];
    cartId: number = 1;
    cartResList: ReservationWithArrangementModel[] = []; 

    constructor() {
        makeAutoObservable(this)
    }


    loadReservations = async () => { 
        try {
            const list = await reservationService.getAll();
            
            runInAction(() => {
                this.reservationList = list;
            })
        } catch (error) {
            console.log(error);
        }
    }  
    
    
    loadReservationsByCartId = async () => { 
        try {
            const list = [... await reservationService.getByCartId(this.cartId)];

            runInAction(() => {
                this.reservationWithHotelInfoList = toJS(list);
            })
        } catch (error) {
            console.log(error);
        }
    }


    addToCart = async(reservation: ReservationWithCartModel) => {
        try {
            let response = await cartService.addToCart(reservation);
        } catch (error) {
            console.log(error);
        }
    }

    removeReservation = async(resId: number) => {
        try {
            let response = await cartService.removeFromCart(resId);
        } catch (error) {
            console.log(error);
        }
    }

    getResFromCart = async () => { 
        try {
            const list = [... await cartService.getResFromCart(this.cartId)];

            runInAction(() => {
                this.cartResList = toJS(list);
            })
        } catch (error) {
            console.log(error);
        }
    }

    emptyCart = async() => {
        try {
            let response = await cartService.emptyCart(this.cartId);
        } catch (error) {
            console.log(error);
        }
    }
}