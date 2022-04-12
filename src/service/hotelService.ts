import axios, { AxiosResponse } from "axios";
import { HotelModel } from "../model/HotelModel";
import { SearchHotelModel } from "../model/SearchHotel";


axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

let searchHotelsList: HotelModel[];

const hotelService = {

    getAll: async () => await Promise.resolve(requests.get<HotelModel[]>('http://localhost:8765/hotels/all')),
    
    getSearchHotels() {
        return searchHotelsList;
    },

    searchHotelsByParameters: async (hotelName: string, pricePerDay: number, cityName: string, destinationName: string, checkInDate: string, 
            checkOutDate: string, guestNum: number) => { 
                
                return await axios.get<HotelModel[]>('http://localhost:8765/hotels/searchParams', {
        params : {hotelName: hotelName, pricePerDay: pricePerDay, cityName: cityName, destinationName: destinationName, 
            checkInDate: checkInDate, checkOutDate: checkOutDate, guestNum: guestNum}
        })
        },


}

export default hotelService;