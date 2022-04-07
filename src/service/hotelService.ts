import axios, { AxiosResponse } from "axios";
import { HotelModel } from "../model/HotelModel";


axios.defaults.baseURL = 'http://localhost:8200/';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const hotelService = {

    getAll: async () => await Promise.resolve(requests.get<HotelModel[]>('/hotels/all'))

}

export default hotelService;