import axios, { AxiosResponse } from "axios";
import { HotelModel } from "../model/HotelModel";
import { ReservationModel } from "../model/ReservationModel";


axios.defaults.baseURL = 'http://localhost:8765/';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const reservationService = {

    getAll: async () => await Promise.resolve(requests.get<ReservationModel[]>('/reservations/')),

    getByCartId: async (id: number) => await Promise.resolve(requests.get<ReservationModel[]>(`/reservations/cartId/${id}`))

}

export default reservationService;