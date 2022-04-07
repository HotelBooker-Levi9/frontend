import { ClientModel } from "../model/ClientModel";
import clientService from "../service/clientService";



export default class ClientStore {
    clientRegistry = new Map<string, ClientModel>();
    clientList: ClientModel[] = []; 

    createClient = async (client: ClientModel) => {
        console.log("CREATE");
        try {
            await clientService.createOne(client);
        } catch (error) {
            console.log(error);
        }
    } 

    
}