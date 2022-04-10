export interface SearchHotelModel {
    hotelName: string;
    pricePerDay: number;
    cityName: string;
    destinationName: string;
    checkInDate?: Date;
    checkOutDate?: Date;
    guestNum: number;
}

export class SearchHotelModel implements SearchHotelModel {
    contructor(searchHotel: SearchHotelModel) {
        this.hotelName = searchHotel.hotelName;
        this.pricePerDay = searchHotel.pricePerDay;
        this.cityName = searchHotel.cityName;
        this.destinationName = searchHotel.destinationName;
        this.checkInDate = searchHotel.checkInDate;
        this.checkOutDate = searchHotel.checkOutDate;
        this.guestNum = searchHotel.guestNum;
    }

}

export class SearchHotelFormValues {
    hotelName: string = '';
    pricePerDay: number = 0;
    cityName: string = '';
    destinationName: string = '';
    checkInDate: Date = new Date();
    checkOutDate: Date = new Date();
    guestNum: number = 0;

    constructor(searchHotel? : SearchHotelFormValues) {
        if(searchHotel) {
            this.hotelName = searchHotel.hotelName;
            this.pricePerDay = searchHotel.pricePerDay;
            this.cityName = searchHotel.cityName;
            this.destinationName = searchHotel.destinationName;
            this.checkInDate = searchHotel.checkInDate;
            this.checkOutDate = searchHotel.checkOutDate;
            this.guestNum = searchHotel.guestNum;
        }
    }
}