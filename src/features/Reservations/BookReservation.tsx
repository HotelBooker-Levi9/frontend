import { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import { CartModel } from "../../model/CartModel";
import { InvoiceModel } from "../../model/InvoiceModel";
import { ReservationWithCartModel } from "../../model/ReservationWithCartModel";
import { useStore } from "../../store/store";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { format } from "date-fns";


interface Props {

}

export default function BookReservation(props: Props) {

    const {hotelStore, reservationStore} = useStore();
    const {selectedHotel} = hotelStore;
    const {addToCart} = reservationStore;
    const [selectedCheckInDate, setSelectedCheckInDate] = useState<Date | null>(new Date());
    const [selectedCheckOutDate, setSelectedCheckOutDate] = useState<Date | null>(new Date());


    const [createReservationValues, setCreateReservationValues] = useState({
        id: 0,
        price: selectedHotel!.pricePerDay,
        guestNumber: 2,
        isCanceled: false,
        hotelId: selectedHotel!.id
    }); 


    function handleSubmit(event: any) {
        event?.preventDefault();

        let newReservation = new ReservationWithCartModel();
        if(selectedHotel) {
            newReservation.hotelId = selectedHotel.id;
        }

        newReservation.id = createReservationValues.id;
        newReservation.price = createReservationValues.price;
        newReservation.guestNumber = createReservationValues.guestNumber;
        newReservation.isCanceled = createReservationValues.isCanceled;
        newReservation.hotelId = createReservationValues.hotelId;
        
        let cart = new CartModel();
        cart.id = 1;
        newReservation.cart = cart;

        newReservation.invoice = new InvoiceModel();

        if(selectedCheckInDate) {
            let formatedCheckIn = format(selectedCheckInDate, "yyyy-MM-dd");
            newReservation.checkInDate = new Date(formatedCheckIn);
            console.log("CheckInDate: " + newReservation.checkInDate);
        } else {
            newReservation.checkInDate = undefined;
        }

        if(selectedCheckOutDate) {
            let formatedCheckOut = format(selectedCheckOutDate, "yyyy-MM-dd");
            newReservation.checkOutDate = new Date(formatedCheckOut);
            console.log("CheckOutDate: " + newReservation.checkOutDate);
        } else {
            newReservation.checkOutDate = undefined;
        }

        addToCart(newReservation);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setCreateReservationValues({...createReservationValues, [name]: value})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Price per day</label>
                    <input type="text" className="form-control"  value={createReservationValues.price} name='price' disabled={true}/>
                </div>
                <div className="form-group">
                    <label >Number of guests</label>
                    <input type="text" className="form-control" value={createReservationValues.guestNumber} name='guestNumber' onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="form1">CheckIn date</label>
                    <DatePicker selected={selectedCheckInDate} onChange={(date) => setSelectedCheckInDate(date)}/>    
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="form1">CheckOut date</label>
                    <DatePicker selected={selectedCheckOutDate} onChange={(date) => setSelectedCheckOutDate(date)}/>  
                </div>
                <Button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Add to cart</Button>
                <Link to="/hotels">Close</Link>
            </form>
        </div>
    );
}