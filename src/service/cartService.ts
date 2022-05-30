import axios, { AxiosResponse } from "axios";
import { ReservationModel } from "../model/ReservationModel";
import { ReservationWithArrangementModel } from "../model/ReservationWithArrangementModel";
import { ReservationWithCartModel } from "../model/ReservationWithCartModel";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.delete['Access-Control-Allow-Origin'] = '*';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const cartService = {

    addToCart: async (reservation: ReservationWithCartModel) => await Promise.resolve(requests.post<void>(process.env.REACT_APP_API_URL + '/carts/addItem', reservation)),

    getResFromCart: async (id: number) => await Promise.resolve(requests.get<ReservationWithArrangementModel[]>(process.env.REACT_APP_API_URL + `/carts/${id}`)),

    removeFromCart: async (id: number) => await Promise.resolve(requests.del<void>(process.env.REACT_APP_API_URL + `/carts/removeItem/${id}`)),

    emptyCart: async (id: number) => await Promise.resolve(requests.del<void>(process.env.REACT_APP_API_URL + `/carts/emptyCart/${id}`)),

    shop: async (id: number) => await Promise.resolve(axios.put<void>(process.env.REACT_APP_API_URL + `/carts/shop/${id}`, {})),
}

export default cartService;