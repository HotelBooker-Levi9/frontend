export interface CartModel {
    id: number;
    clientId: number;
}

export class CartModel implements CartModel {
    contructor(cart: CartModel) {
        this.id = cart.id;
        this.clientId = cart.clientId;
    }
}



export class CartFormValues {
    id: number = 0;
    clientId: number = 0;

    constructor(cart? : CartFormValues) {
        if(cart) {
            this.id = cart.id;
            this.clientId = cart.clientId;
        }
    }
}