import axios, { AxiosResponse } from "axios";
import { CityModel } from "../model/CityModel";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const cityService = {

    //mora putanja biti cities/ inace baca 405
    getAll: async () => await Promise.resolve(requests.get<CityModel[]>('http://localhost:8765/cities/')),

}

export default cityService;