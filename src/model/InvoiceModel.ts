export interface InvoiceModel {
    id: number;
    bookingDate: Date;
    totalPrice: number;
}

export class InvoiceModel implements InvoiceModel {
    contructor(invoice: InvoiceModel) {
        this.id = invoice.id;
        this.bookingDate = invoice.bookingDate;
        this.totalPrice = invoice.totalPrice;
    }   
}



export class InvoiceFormValues {
    id: number = 0;
    bookingDate: Date = new Date();
    totalPrice: number = 0;

    constructor(invoice? : InvoiceFormValues) {
        if(invoice) {
            this.id = invoice.id;
            this.bookingDate = invoice.bookingDate;
            this.totalPrice = invoice.totalPrice;
        }
    }
}