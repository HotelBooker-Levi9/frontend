import axios, { AxiosResponse } from "axios";
import { ReservationWithCartModel } from "../model/ReservationWithCartModel";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const cartService = {

    addToCart: async (reservation: ReservationWithCartModel) => await Promise.resolve(requests.post<void>('http://localhost:8100/carts/addItem', reservation)),

}

export default cartService;