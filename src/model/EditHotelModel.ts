import { CityModel } from "./CityModel";

export interface EditHotelModel {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    pricePerDay: number;
    capacity: number;
    isDeleted: boolean;
    cityDTO: CityModel;
}

export class EditHotelModel implements EditHotelModel {
    contructor(hotel: EditHotelModel) {
        this.id = hotel.id;
        this.name = hotel.name;
        this.imageUrl = hotel.imageUrl;
        this.description = hotel.description;
        this.pricePerDay = hotel.pricePerDay;
        this.capacity = hotel.capacity;
        this.isDeleted = hotel.isDeleted;
        this.cityDTO = hotel.cityDTO;
    }
}

export class EditHotelFormValues {
    id: number = 0;
    name: string = '';
    imageUrl: string = '';
    description: string = '';
    pricePerDay: number = 0;
    capacity: number = 0;
    isDeleted: boolean = false;
    cityDTO?: CityModel = undefined;

    constructor(hotel? : EditHotelFormValues) {
        if(hotel) {
            this.id = hotel.id;
            this.name = hotel.name;
            this.imageUrl = hotel.imageUrl;
            this.description = hotel.description;
            this.pricePerDay = hotel.pricePerDay;
            this.capacity = hotel.capacity;
            this.isDeleted = hotel.isDeleted;
            this.cityDTO = hotel.cityDTO;
        }
    }
}