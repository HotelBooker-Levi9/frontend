import { makeAutoObservable, runInAction } from "mobx";
import { ReservationModel } from "../model/ReservationModel";
import reservationService from "../service/reservationService";


export default class ReservationStore {
    reservationRegistry = new Map<string, ReservationModel>();
    reservationList: ReservationModel[] = []; 

    constructor() {
        makeAutoObservable(this)
    }

    //async?
    loadReservations = async () => { 
        //service treba da vraca promise, i da bude async
        try {
            const list = await reservationService.getAll();
            console.log(list)
            
            runInAction(() => {
                this.reservationList = list;
            })
        } catch (error) {
            console.log(error);
        }
    }   
}