import { makeAutoObservable, runInAction } from "mobx";
import { HotelModel } from "../model/HotelModel";

import { toJS } from 'mobx'
import hotelService from "../service/hotelService";
import { SearchHotelModel } from "../model/SearchHotel";
import { format } from 'date-fns';




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


    searchHotelsByParams =async (searchHotel: SearchHotelModel) => {
        console.log("Search hotels by params: object => ");
        console.log(searchHotel);

        let formatedCheckInDate = "";
        let formatedCheckOutDate = "";
        if(searchHotel.checkInDate) {
            formatedCheckInDate = format(searchHotel.checkInDate, "yyyy-MM-dd");
        }

        if(searchHotel.checkOutDate) {
            formatedCheckOutDate = format(searchHotel.checkOutDate, "yyyy-MM-dd");
        }


        try {
            if(formatedCheckInDate && formatedCheckOutDate) {
                let response = await hotelService.searchHotelsByParameters(searchHotel.hotelName, searchHotel.pricePerDay, searchHotel.cityName,
                                    searchHotel.destinationName, formatedCheckInDate, formatedCheckOutDate, searchHotel.guestNum);
                console.log(response);

                runInAction(() => {
                    this.hotelList = toJS(response.data);
                })
            }

        } catch (error) {
            console.log(error);
        }
    } 
        
}