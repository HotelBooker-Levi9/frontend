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

    loadHotels = async () => { 
        try {
            const list = [... await hotelService.getAll()];

            runInAction(() => {
                this.hotelList = toJS(list);
                console.log(this.hotelList);
            
            })
        } catch (error) {
            console.log(error);
        }
    }  
}