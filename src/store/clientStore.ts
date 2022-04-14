import { runInAction } from "mobx";
import { ClientModel } from "../model/ClientModel";
import clientService from "../service/clientService";



export default class ClientStore {
    clientRegistry = new Map<string, ClientModel>();
    clientList: ClientModel[] = []; 
    currentClient: ClientModel | undefined;
    isAuthorized: boolean = false;


    registerClient = async (client: ClientModel) => {
        console.log("REGISTRACIJA");
        console.log(client);
        try {
            let response = await clientService.register(client);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    } 

    setIsAuthorized = async (authorized: boolean) => {
        this.isAuthorized = authorized;
    } 

    
}