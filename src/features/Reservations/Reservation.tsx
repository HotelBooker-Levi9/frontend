import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { formatDiagnosticsWithColorAndContext } from "typescript";
import { CartModel } from "../../model/CartModel";
import { InvoiceModel } from "../../model/InvoiceModel";
import { ReservationModel } from "../../model/ReservationModel";
import { ReservationWithArrangementModel } from "../../model/ReservationWithArrangementModel";
import { ReservationWithCartModel } from "../../model/ReservationWithCartModel";
import { ReservationWithQuantityModel } from "../../model/ReservationWithQuantityModel";
import { useStore } from "../../store/store";
import Moment from 'moment';


interface Props {
    // reservation: ReservationWithArrangementModel;
    reservation: ReservationWithQuantityModel;
    reservationId: number;
}

export default observer(function Reservation({reservation, reservationId}: Props) {

    const {reservationStore} = useStore();

    const {loadReservationsByCartId, removeReservation, reservationList, cartResList, getResFromCart, addToCart} = reservationStore;

    useEffect(() => {
        if(reservationList.length === 0) loadReservationsByCartId()
    }, [loadReservationsByCartId, reservationList, cartResList])

    function remove(reservation: ReservationModel) {
        removeReservation(reservation.id);
    }
    
    function add(reservation: ReservationModel) {
        let newReservation = new ReservationWithCartModel();
                
        newReservation.id = reservation.id;
        newReservation.checkInDate = reservation.checkInDate;
        newReservation.checkOutDate = reservation.checkOutDate;
        newReservation.price = reservation.price;
        newReservation.guestNumber = reservation.guestNumber;
        newReservation.isCanceled = reservation.isCanceled;
        newReservation.hotelId = reservation.hotelId;
        newReservation.invoice = new InvoiceModel();
        let cart = new CartModel();
        cart.id = 1;
        newReservation.cart = cart;

        addToCart(newReservation);
    }

    function formatDate(date: Date) {
        Moment.locale('en');
        return(Moment(date).format('DD MMM YYYY'))
    }

    return (
        <>
            <tr>
                <th>{reservation.reservation.hotelName}</th>
                <th>{reservation.reservation.cityName}</th>
                <th>{reservation.reservation.destinationName}</th>
                <th>{formatDate(reservation.reservation.reservation.checkInDate)}</th>
                <td>{formatDate(reservation.reservation.reservation.checkOutDate)}</td>
                <td>{reservation.reservation.reservation.price}</td>
                <td>{reservation.reservation.reservation.guestNumber}</td>
                <td>x <big><b>{reservation.queantity}</b></big></td>
                <td>
                    <Button style={{marginRight: "1%"}} onClick={() => {add(reservation.reservation.reservation)}}>+</Button>
                    <Button onClick={() => {remove(reservation.reservation.reservation); getResFromCart()}}>-</Button>
                </td>
            </tr>
        </>
    )
})
