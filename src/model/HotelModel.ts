export interface HotelModel {
    id: number;
    name: String;
    imageUrl: String;
    description: String;
    pricePerDay: number;
    capacity: number;
    isDeleted: boolean;
    cityName: String;
    destinationName: String;
}

export class HotelModel implements HotelModel {
    contructor(hotel: HotelModel) {
        this.id = hotel.id;
        this.name = hotel.name;
        this.imageUrl = hotel.imageUrl;
        this.description = hotel.description;
        this.pricePerDay = hotel.pricePerDay;
        this.capacity = hotel.capacity;
        this.isDeleted = hotel.isDeleted;
        this.cityName = hotel.cityName;
        this.destinationName = hotel.destinationName;
    }
}

export class HotelFormValues {
    id: number = 0;
    name: String = '';
    imageUrl: String = '';
    description: String = '';
    pricePerDay: number = 0;
    capacity: number = 0;
    isDeleted: boolean = false;
    cityName: String = '';
    destinationName: String = '';

    constructor(hotel? : HotelFormValues) {
        if(hotel) {
            this.id = hotel.id;
            this.name = hotel.name;
            this.imageUrl = hotel.imageUrl;
            this.description = hotel.description;
            this.pricePerDay = hotel.pricePerDay;
            this.capacity = hotel.capacity;
            this.isDeleted = hotel.isDeleted;
            this.cityName = hotel.cityName;
            this.destinationName = hotel.destinationName;
        }
    }
}