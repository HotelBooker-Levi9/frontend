import { makeAutoObservable, runInAction } from "mobx";
import { ReservationModel } from "../model/ReservationModel";
import reservationService from "../service/reservationService";


export default class ReservationStore {
    reservationRegistry = new Map<string, ReservationModel>();
    reservationList: ReservationModel[] = []; 
    cartId: number = 1;

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
            const list = await reservationService.getByCartId(this.cartId);

            runInAction(() => {
                this.reservationList = list;
            })
        } catch (error) {
            console.log(error);
        }
    }
}