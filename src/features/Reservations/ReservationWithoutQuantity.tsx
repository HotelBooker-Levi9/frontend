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
    reservation: ReservationWithArrangementModel;
    reservationId: number;
}

export default observer(function ReservationWithoutQuantity({reservation, reservationId}: Props) {

    const {reservationStore} = useStore();

    const {loadReservationsByCartId, reservationList, cartResList} = reservationStore;

    useEffect(() => {
        if(reservationList.length === 0) loadReservationsByCartId()
    }, [loadReservationsByCartId, reservationList, cartResList])


    function formatDate(date: Date) {
        Moment.locale('en');
        return(Moment(date).format('DD MMM YYYY'))
    }

    return (
        <>
            <tr>
                <th>{reservation.hotelName}</th>
                <th>{reservation.cityName}</th>
                <th>{reservation.destinationName}</th>
                <th>{formatDate(reservation.reservation.checkInDate)}</th>
                <td>{formatDate(reservation.reservation.checkOutDate)}</td>
                <td>{reservation.reservation.price}</td>
                <td>{reservation.reservation.guestNumber}</td>
                <td>{reservation.reservation.isCanceled}</td>
            </tr>
        </>
    )
})
