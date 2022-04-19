import { runInAction, toJS } from "mobx";
import { ClientModel } from "../model/ClientModel";
import clientService from "../service/clientService";



export default class ClientStore {
    clientRegistry = new Map<string, ClientModel>();
    clientList: ClientModel[] = []; 
    currentClient: ClientModel | undefined;


    registerClient = async (client: ClientModel) => {
        console.log("REGISTRACIJA");
        console.log(client);
        try {
            let response = await clientService.register(client);
            runInAction(() => {
                window.location.replace('/hotels');
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }     

    getAll = async() => {
        try {
            let response = [ ... await clientService.getAll()];
            runInAction(() => {
                this.clientList = toJS(response);
            })
        } catch (error) {
            console.log(error);
        }
    }

    blockClient = async(id: number) => {
        try {
            let response = await clientService.block(id);
            runInAction(() => {
                window.location.reload();
            })
        } catch (error) {
            console.log(error);
        }
    }
}