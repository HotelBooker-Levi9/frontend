import axios, { AxiosResponse } from "axios";
import { ClientModel } from "../model/ClientModel";


//axios.defaults.baseURL = 'http://localhost:8765/biloKojaPutanja';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const clientService = {

    getAll: async () => await Promise.resolve(requests.get<ClientModel[]>('/cients')),

    createOne: async (client: ClientModel) => await Promise.resolve(requests.post<void>('/clients', client)),

}

export default clientService;