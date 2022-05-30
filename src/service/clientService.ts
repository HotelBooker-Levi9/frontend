import axios, { AxiosResponse } from "axios";
import { ClientModel } from "../model/ClientModel";

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const clientService = {

    getAll: async () => await Promise.resolve(requests.get<ClientModel[]>(process.env.REACT_APP_API_URL + '/clients/all')),

    block: async (id : number) => await Promise.resolve(requests.put<void>(process.env.REACT_APP_API_URL + `/clients/block/${id}`, {})),

    //register: async (client: ClientModel) => await Promise.resolve(requests.post<void>('/clients/register', client)),

    register: async (client: ClientModel) => await Promise.resolve(axios.post<void>(process.env.REACT_APP_API_URL + '/clients/register', client )
      .then((response) => {
        console.log("RESPONSE RECEIVED: ", response);
        })
        .catch((err) => {
        console.log("AXIOS ERROR: ", err);
        })
      ),

}

export default clientService;

function dispatch(arg0: { type: any; data: any; }) {
    throw new Error("Function not implemented.");
}
