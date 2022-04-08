import { runInAction } from "mobx";
import { ClientModel } from "../model/ClientModel";
import clientService from "../service/clientService";



export default class ClientStore {
    clientRegistry = new Map<string, ClientModel>();
    clientList: ClientModel[] = []; 
    currentClient: ClientModel | undefined;


    registerClient = async (client: ClientModel) => {
        console.log("REGISTRACIJA");
        
        try {
            await clientService.register(client);
        } catch (error) {
            console.log(error);
        }
    } 

    
}