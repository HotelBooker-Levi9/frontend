export interface ClientModel {
    id: string;
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    isDeleted: boolean;
    cartId: string;
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
        this.isDeleted = client.isDeleted;
        this.cartId = client.cartId;
        this.isBlocked = client.isBlocked;
    }
}

export class ClientFormValues {
    id: string = '';
    username: String = '';
    name: String = '';
    surname: String = '';
    email: String = '';
    password: String = '';
    isDeleted: boolean = false;
    cartId: string = '';
    isBlocked: boolean = false;

    constructor(client? : ClientFormValues) {
        if(client) {
            this.id = client.id;
            this.username = client.username;
            this.name = client.name;
            this.surname = client.surname;
            this.email = client.email;
            this.password = client.password;
            this.isDeleted = client.isDeleted;
            this.cartId = client.cartId;
            this.isBlocked = client.isBlocked;
        }
    }
}