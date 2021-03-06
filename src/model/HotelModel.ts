export interface HotelModel {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    pricePerDay: number;
    capacity: number;
    isDeleted: boolean;
    cityName: string;
    destinationName: string;
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
    name: string = '';
    imageUrl: string = '';
    description: string = '';
    pricePerDay: number = 0;
    capacity: number = 0;
    isDeleted: boolean = false;
    cityName: string = '';
    destinationName: string = '';

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