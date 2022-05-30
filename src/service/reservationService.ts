import axios, { AxiosResponse } from "axios";
import { HotelModel } from "../model/HotelModel";
import { ReservationModel } from "../model/ReservationModel";
import { ReservationWithArrangementModel } from "../model/ReservationWithArrangementModel";


//axios.defaults.baseURL = 'http://localhost:8765/';
axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const reservationService = {

    getAll: async () => await Promise.resolve(requests.get<ReservationModel[]>(process.env.REACT_APP_API_URL + '/reservations')),

    getByCartId: async (id: number) => await Promise.resolve(requests.get<ReservationWithArrangementModel[]>(process.env.REACT_APP_API_URL + `/reservations/cartId/${id}`)),

    cancel: async (id: number) => await Promise.resolve(requests.put<void>(process.env.REACT_APP_API_URL + `/reservations/${id}`, {})),

}

export default reservationService;