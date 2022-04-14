import { makeAutoObservable, runInAction } from "mobx";
import { HotelModel } from "../model/HotelModel";

import { toJS } from 'mobx'
import hotelService from "../service/hotelService";
import { SearchHotelModel } from "../model/SearchHotel";
import { format } from 'date-fns';
import cityService from "../service/cityService";
import { CityModel } from "../model/CityModel";
import { EditHotelModel } from "../model/EditHotelModel";




export default class HotelStore {
    hotelRegistry = new Map<string, HotelModel>();
    hotelList: HotelModel[] = []; 
    top10List: HotelModel[] = [];
    citiesList: CityModel[] = [];
    selectedHotel: HotelModel | undefined;
    

    constructor() {
        makeAutoObservable(this)
    }

    loadHotels = async () => { 
        try {
            const list = [... await hotelService.getAll()];

            runInAction(() => {
                this.hotelList = toJS(list);
                console.log(this.hotelList);

                if(!this.selectedHotel) {
                    this.selectedHotel = this.hotelList.at(1);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }  

    top10Destinations = async () => { 
        try {
            const list = [... await hotelService.top10()];

            runInAction(() => {
                this.top10List = toJS(list);
                console.log(this.top10List);

                if(!this.selectedHotel) {
                    this.selectedHotel = this.top10List.at(1);
                }
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

    loadCities = async () => {
        try {
            let response = [... await cityService.getAll()];

            runInAction(() => {
                this.citiesList = toJS(response);
            })
        } catch (error) {
            console.log(error);
        }
    }

    updateHotel = async (hotel: EditHotelModel) => {
        console.log("Update Hotela:");
        console.log(hotel);
        try {
            let response = await hotelService.updateHotel(hotel);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    setSelectedHotel = async (hotel: HotelModel) => {
        console.log(hotel);
        this.selectedHotel = hotel;

        runInAction(() => {
            console.log(this.selectedHotel);
        })
    }

    createNewHotel = async (hotel: EditHotelModel) => {
        try {
            let response = await hotelService.createHotel(hotel);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    deleteHotel = async (id: number) => {
        try {
            let response = await hotelService.deleteHotel(id);
        } catch (error) {
            console.log(error);
        }
    }
    
        
}