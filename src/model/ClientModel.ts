export interface ClientModel {
    id: number;
    username: String;
    name: String;
    surname: String;
    email: String;
}

export class ClientModel implements ClientModel {
    contructor(client: ClientModel) {
        this.id = client.id;
        this.username = client.username;
        this.name = client.name;
        this.surname = client.surname;
        this.email = client.email;
    }
}

export class ClientFormValues {
    id: number = 0;
    username: String = '';
    name: String = '';
    surname: String = '';
    email: String = '';

    constructor(client? : ClientFormValues) {
        if(client) {
            this.id = client.id;
            this.username = client.username;
            this.name = client.name;
            this.surname = client.surname;
            this.email = client.email;
        }
    }
}