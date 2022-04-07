import { makeAutoObservable, runInAction } from "mobx";
import { HotelModel } from "../model/HotelModel";

import { toJS } from 'mobx'
import hotelService from "../service/hotelService";




export default class HotelStore {
    hotelRegistry = new Map<string, HotelModel>();
    hotelList: HotelModel[] = []; 

    constructor() {
        makeAutoObservable(this)
    }

    //async?
    loadHotels = async () => { 
        //service treba da vraca promise, i da bude async
        console.log("Dobavlja hotele!");
        try {
            const list = [... await hotelService.getAll()];
            console.log(this.hotelList);

            //const newList: HotelModel[] = [];
            

            runInAction(() => {
                console.log("Dodeljuje hotele hotelListi!");
                this.hotelList = toJS(list);
                console.log(this.hotelList);
            
            })
        } catch (error) {
            console.log(error);
        }
    }  
}