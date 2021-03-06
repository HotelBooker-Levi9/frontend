export interface ClientModel {
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    isBlocked: boolean;
}

export class ClientModel implements ClientModel {
    contructor(client: ClientModel) {
        this.id = client.id;
        this.username = client.username;
        this.name = client.name;
        this.surname = client.surname;
        this.email = client.email;
        this.password = client.password;
        this.isBlocked = client.isBlocked;
    }
}

export class ClientFormValues {
    id: number = 0;
    username: String = '';
    name: String = '';
    surname: String = '';
    email: String = '';
    password: String = '';

    constructor(client? : ClientFormValues) {
        if(client) {
            this.id = client.id;
            this.username = client.username;
            this.name = client.name;
            this.surname = client.surname;
            this.email = client.email;
            this.password = client.password;
        }
    }
}